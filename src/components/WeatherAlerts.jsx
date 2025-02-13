import { useState, useEffect } from 'react'
import './WeatherAlerts.css'

function WeatherAlerts() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [location, setLocation] = useState({ lat: null, lon: null })
  const [locationName, setLocationName] = useState('')

  const API_KEY = '5defa6ab217f30a7393ad0b472ea9e22'

  const getUserLocation = () => {
    setLoading(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          try {
            // Get location name from coordinates using reverse geocoding
            const response = await fetch(
              `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`
            )
            const data = await response.json()
            if (data[0]) {
              setLocationName(data[0].name)
            }
          } catch (err) {
            console.log("Error getting location name:", err)
          }

          setLocation({
            lat: latitude,
            lon: longitude
          })
          setError(null)
        },
        (err) => {
          console.log("Location error:", err)
          setError("Location access denied. Please enable location services to get weather for your area.")
          // Default to VIT Vellore coordinates
          setLocation({ lat: 12.9692, lon: 79.1559 })
          setLocationName('VIT Vellore')
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      )
    } else {
      setError("Geolocation is not supported by your browser")
      setLocation({ lat: 12.9692, lon: 79.1559 })
      setLocationName('VIT Vellore')
    }
  }

  useEffect(() => {
    getUserLocation()
  }, [])

  useEffect(() => {
    if (location.lat && location.lon) {
      fetchWeatherData()
      // Refresh weather data every 5 minutes
      const interval = setInterval(fetchWeatherData, 300000)
      return () => clearInterval(interval)
    }
  }, [location])

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
      )
      if (!response.ok) {
        throw new Error('Weather data not available')
      }
      const data = await response.json()
      setWeatherData(data)
      setLoading(false)
    } catch (err) {
      setError('Unable to fetch weather data. Please try again later.')
      setLoading(false)
    }
  }

  const handleRefresh = () => {
    getUserLocation() // Get fresh location before fetching weather
  }

  if (loading) return (
    <div className="weather-loading">
      <div className="loading-spinner"></div>
      <p>Loading weather data...</p>
    </div>
  )
  
  if (error) return (
    <div className="weather-error">
      <p>{error}</p>
      <button onClick={handleRefresh} className="retry-button">
        Try Again
      </button>
    </div>
  )

  return (
    <section className="weather-alerts">
      <h2>Local Weather Updates</h2>
      {weatherData && (
        <div className="weather-container">
          <div className="current-weather">
            <div className="weather-main">
              <img 
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt={weatherData.weather[0].description}
              />
              <div className="temperature">
                {Math.round(weatherData.main.temp)}°C
              </div>
            </div>
            <div className="weather-info">
              <h3>{locationName || weatherData.name}</h3>
              <p className="weather-description">
                {weatherData.weather[0].description}
              </p>
              <div className="weather-details">
                <p>
                  <i className="fas fa-tint"></i>
                  Humidity: {weatherData.main.humidity}%
                </p>
                <p>
                  <i className="fas fa-wind"></i>
                  Wind: {(weatherData.wind.speed * 3.6).toFixed(1)} km/h
                </p>
                <p>
                  <i className="fas fa-thermometer-half"></i>
                  Feels like: {Math.round(weatherData.main.feels_like)}°C
                </p>
              </div>
            </div>
          </div>
          <div className="weather-footer">
            <p>Last updated: {new Date().toLocaleTimeString()}</p>
            <button onClick={handleRefresh} className="refresh-button">
              Refresh
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default WeatherAlerts 