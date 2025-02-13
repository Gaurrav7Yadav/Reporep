import { useState } from 'react'
import './NearestHospital.css'

function NearestHospital() {
  const [location, setLocation] = useState('')
  const [hospitals, setHospitals] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchHospitals = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    try {
      // First get coordinates from location name using Nominatim
      const geocodeResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
      )
      const geocodeData = await geocodeResponse.json()
      
      if (!geocodeData.length) {
        throw new Error('Location not found')
      }

      const { lat, lon } = geocodeData[0]

      // Then use Overpass API to find nearby hospitals
      const query = `
        [out:json][timeout:25];
        (
          node["amenity"="hospital"](around:5000,${lat},${lon});
          way["amenity"="hospital"](around:5000,${lat},${lon});
          relation["amenity"="hospital"](around:5000,${lat},${lon});
        );
        out body;
        >;
        out skel qt;
      `

      const response = await fetch(
        'https://overpass-api.de/api/interpreter',
        {
          method: 'POST',
          body: query
        }
      )
      
      if (!response.ok) throw new Error('Failed to fetch hospitals')
      
      const data = await response.json()
      const hospitalsList = data.elements
        .filter(elem => elem.tags && elem.tags.amenity === 'hospital')
        .slice(0, 5)
        .map(hospital => ({
          id: hospital.id,
          name: hospital.tags.name || 'Hospital',
          address: hospital.tags['addr:street'] 
            ? `${hospital.tags['addr:street']} ${hospital.tags['addr:housenumber'] || ''}`
            : 'Address not available',
          lat: hospital.lat || hospital.center?.lat,
          lon: hospital.lon || hospital.center?.lon
        }))

      setHospitals(hospitalsList)
    } catch (err) {
      setError('Unable to find hospitals. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="nearest-hospital">
      <h2>Find Nearest Hospitals</h2>
      <p className="section-description">
        Locate the closest medical facilities to your location
      </p>

      <form onSubmit={searchHospitals} className="search-form">
        <div className="input-group">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your location (e.g., city, address)"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Searching...' : 'Find Hospitals'}
          </button>
        </div>
      </form>

      {loading && (
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Searching for nearby hospitals...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {hospitals.length > 0 && (
        <div className="hospitals-list">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="hospital-card">
              <h3>{hospital.name}</h3>
              <p className="hospital-address">{hospital.address}</p>
              <div className="hospital-actions">
                <a 
                  href={`https://www.openstreetmap.org/directions?from=${location}&to=${hospital.lat},${hospital.lon}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="directions-btn"
                >
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default NearestHospital 