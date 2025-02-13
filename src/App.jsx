import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'
import wildfire from './assets/wildfire.avif'
import WeatherAlerts from './components/WeatherAlerts'
import NearestHospital from './components/NearestHospital'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import FirstAid from './pages/FirstAid'
import Emergency from './pages/Emergency'
import CalamityTypes from './pages/CalamityTypes'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <nav className="topbar">
          <div className="left-section">
            <Link to="/" className="logo-text">RescuePath</Link>
            <div className="nav-links">
              <Link to="/calamity-types" className="nav-link">
                <span className="nav-icon"></span> Calamity Type
              </Link>
              <Link to="/emergency" className="nav-link">
                <span className="nav-icon"></span> Emergency Contacts
              </Link>
              <Link to="/first-aid" className="nav-link">
                <span className="nav-icon"></span> First Aid
              </Link>
              <Link to="/about" className="nav-link">
                <span className="nav-icon"></span> About Us
              </Link>
            </div>
          </div>
          <div className="auth-buttons">
            <button>Login</button>
            <button>Register</button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/first-aid" element={<FirstAid />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/calamity-types" element={<CalamityTypes />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

// Create a separate component for home content to use hooks
function HomeContent() {
  const navigate = useNavigate()

  const handleTagClick = (path, section) => {
    if (path === '/first-aid' && section) {
      navigate(path, { state: { scrollTo: section } })
    } else if (section === 'hospitals') {
      // Scroll to hospital section if we're already on home page
      const element = document.getElementById('hospital-section')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(path)
    }
  }

  return (
    <>
      <div 
        className="search-container"
        style={{ 
          backgroundImage: `url(${wildfire})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <h1 className="search-heading">Find Emergency Resources</h1>
        <p className="search-subtext">
          Quick access to emergency services, safety guidelines, and disaster management resources
        </p>
        <div className="search-wrapper">
          <span className="search-icon"></span>
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search for emergency services, guidelines, or resources..."
          />
        </div>
        <div className="popular-searches">
          <span 
            className="search-tag"
            onClick={() => handleTagClick('/first-aid')}
          >
            First Aid
          </span>
          <span 
            className="search-tag"
            onClick={() => handleTagClick('/emergency')}
          >
            Emergency Numbers
          </span>
          <span 
            className="search-tag"
            onClick={() => handleTagClick('/calamity-types')}
          >
            Flood Safety
          </span>
          <span 
            className="search-tag"
            onClick={() => handleTagClick('/calamity-types')}
          >
            Earthquake Protocol
          </span>
          <span 
            className="search-tag"
            onClick={() => handleTagClick(null, 'hospitals')}
            style={{ cursor: 'pointer' }}
          >
            Medical Centers
          </span>
        </div>
      </div>
      <WeatherAlerts />
      <div id="hospital-section">
        <NearestHospital />
      </div>
    </>
  )
}

export default App
