import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './DisasterVideos.css'

function DisasterVideos() {
  const [selectedLanguage, setSelectedLanguage] = useState('english')
  const navigate = useNavigate()

  const disasters = [
    {
      name: "DM and Preparedness",
      hindi: "https://youtu.be/cYdYZaY_2mM",
      english: "https://youtu.be/_6ri7oZ6-k4",
      tamil: "https://youtu.be/CxQ4kDKVs8c"
    },
    {
      name: "Earthquake",
      hindi: "https://youtu.be/a7pgF9hQ2_0",
      english: "https://youtu.be/E5wLV3Hl1Xc",
      tamil: "https://youtu.be/pxoLYpZZi6Y"
    },
    {
      name: "Landslide",
      hindi: "https://youtu.be/p8nStC2pkDo",
      english: "https://youtu.be/un6HN7jCX0E",
      tamil: "https://youtu.be/SPP_1J6wv4g"
    },
    {
      name: "Flood",
      hindi: "https://youtu.be/Ba3dmYQGtMk",
      english: "https://youtu.be/lb5bQDlCvtU",
      tamil: "https://youtu.be/JGhjucRJjN8"
    },
    {
      name: "Tsunami",
      hindi: "https://youtu.be/pfuG6fxbVwo",
      english: "https://youtu.be/qrIVYn-OfBs",
      tamil: "https://youtu.be/ju5COqfC7-g"
    },
    {
      name: "Cyclone",
      hindi: "https://youtu.be/GhQzqblLE_k",
      english: "https://youtu.be/H-nxT76l9Jc",
      tamil: "https://youtu.be/Lko8-3OLSrk"
    },
    {
      name: "Cloudburst",
      hindi: "https://youtu.be/Xw0ltn7Q8ns",
      english: "https://youtu.be/eQktmg_t-XE",
      tamil: "https://youtu.be/Wybu-aedaTs"
    },
    {
      name: "Thunder & Lightning",
      hindi: "https://youtu.be/Z870Z8G1W0I",
      english: "https://youtu.be/8FoMaDQdYkM",
      tamil: "https://youtu.be/Imep0_P-Q2Y"
    },
    {
      name: "Drought",
      hindi: "https://youtu.be/4yhNiS_qW5g",
      english: "https://youtu.be/4KdxnnU_oKk",
      tamil: "https://youtu.be/gzBhNUGRNlk"
    },
    {
      name: "Heat Wave",
      hindi: "https://youtu.be/NmCViVxAjHQ",
      english: "https://youtu.be/3bhrNBl1D90",
      tamil: "https://youtu.be/8SGZhviZxFw"
    },
    {
      name: "Cold Waves",
      hindi: "https://youtu.be/swHzDUSFJZE",
      english: "https://youtu.be/a0_is2IjQbk",
      tamil: "https://youtu.be/TD3NRmcUeOA"
    },
    {
      name: "Basic Search & Rescue",
      hindi: "https://youtu.be/RFmXzHC4sCs",
      english: "https://youtu.be/eAaeejsochY",
      tamil: "https://youtu.be/OXyRwkpBsAg"
    },
    {
      name: "Lifting and Stabilising Load",
      hindi: "https://youtu.be/OA24Kbts_YY",
      english: "https://youtu.be/90OSh5eLiQU",
      tamil: "https://youtu.be/f7ooRFTyFz4"
    },
    {
      name: "Community Based Health & First Aid",
      hindi: "https://youtu.be/G4FPEXGczZk",
      english: "https://youtu.be/N3Mjjx6eDGk",
      tamil: "https://youtu.be/D8RSEC0GF2o"
    },
    {
      name: "Soft Tissue Injuries",
      hindi: "https://youtu.be/zFgRgWvwBj8",
      english: "https://youtu.be/0TZspUGZskY",
      tamil: "https://youtu.be/kgX_bEOBVf8"
    },
    {
      name: "Musculoskeletal Injury",
      hindi: "https://youtu.be/GVrwK4QXIl4",
      english: "https://youtu.be/0yNtr-aeUTE",
      tamil: "https://youtu.be/31S0zXJa0Eg"
    },
    {
      name: "Basic Life Support",
      hindi: "https://youtu.be/baKHemNOhE0",
      english: "https://youtu.be/Cjsdoc-5Omo",
      tamil: "https://youtu.be/85EelbzR8oE"
    },
    {
      name: "Lifting & Moving Patient",
      hindi: "https://youtu.be/EsX3rnb6oNA",
      english: "https://youtu.be/8IpMl6KpK9o",
      tamil: "https://youtu.be/q2Oth78q7vU"
    },
    {
      name: "Snake Bite & Animal Bite",
      hindi: "https://youtu.be/gzUGn8l86M0",
      english: "https://youtu.be/xxUC-fX-4Xs",
      tamil: "https://youtu.be/U506smAUL2Y"
    },
    {
      name: "Rope Rescue Techniques",
      hindi: "https://youtu.be/HkESJRiAljQ",
      english: "https://youtu.be/UUqa5qqwFnQ",
      tamil: "https://youtu.be/0Zb3vH7RcEw"
    },
    {
      name: "Domestic Fire Hazard and Safety",
      hindi: "https://youtu.be/_UeiW79kNz0",
      english: "https://youtu.be/rEh92o10-MI",
      tamil: "https://youtu.be/p5O3eLcy0WY"
    },
    {
      name: "Forest Fire Hazard and Safety",
      hindi: "https://youtu.be/h2t-4UIk4Vo",
      english: "https://youtu.be/84D0OpGHK5Y",
      tamil: "https://youtu.be/FEhBC0XPWJU"
    },
    {
      name: "Chemical Emergency",
      hindi: "https://youtu.be/TawRGlaXAkE",
      english: "https://youtu.be/F7ZrZGxDLjs",
      tamil: "https://youtu.be/CTxYmkVNMeE"
    },
    {
      name: "Biological Emergency",
      hindi: "https://youtu.be/x9-tfmWXwyg",
      english: "https://youtu.be/2bzA_8d3Ln4",
      tamil: "https://youtu.be/ybhV2_d534A"
    },
    {
      name: "Radiological & Nuclear Emergencies",
      hindi: "https://youtu.be/OeZVs-9J2To",
      english: "https://youtu.be/FMFNzXnLvKI",
      tamil: "https://youtu.be/p4VDeKGZYyA"
    }
  ]

  const handleVideoClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <section className="disaster-videos">
      <h2>Emergency Response Videos</h2>
      <p className="section-description">
        Learn how to respond to different emergencies through informative videos
      </p>

      <div className="language-selector">
        <button 
          className={`lang-btn ${selectedLanguage === 'english' ? 'active' : ''}`}
          onClick={() => setSelectedLanguage('english')}
        >
          English
        </button>
        <button 
          className={`lang-btn ${selectedLanguage === 'hindi' ? 'active' : ''}`}
          onClick={() => setSelectedLanguage('hindi')}
        >
          हिंदी
        </button>
        <button 
          className={`lang-btn ${selectedLanguage === 'tamil' ? 'active' : ''}`}
          onClick={() => setSelectedLanguage('tamil')}
        >
          தமிழ்
        </button>
      </div>

      <div className="disasters-grid">
        {disasters.map((disaster, index) => (
          <div key={index} className="disaster-card">
            <h3>{disaster.name}</h3>
            <button 
              className="watch-btn"
              onClick={() => handleVideoClick(disaster[selectedLanguage])}
            >
              {selectedLanguage === 'english' ? 'Watch Video' : 
               selectedLanguage === 'hindi' ? 'वीडियो देखें' : 
               'வீடியோவைப் பார்க்க'}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DisasterVideos 