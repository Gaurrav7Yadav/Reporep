import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Footer.css'
import PrivacyModal from './PrivacyModal'
import TermsModal from './TermsModal'

function Footer() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
  const [termsModalOpen, setTermsModalOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogoClick = (e) => {
    e.preventDefault()
    window.scrollTo(0, 0)
    navigate('/')
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <a href="/" className="footer-title" onClick={handleLogoClick}>
            <h3>RescuePath</h3>
          </a>
          <p>Empowering communities with life-saving information and resources</p>
          <div className="footer-links">
            <button 
              className="footer-link" 
              onClick={() => setPrivacyModalOpen(true)}
            >
              Privacy Policy
            </button>
            <span className="divider">|</span>
            <button 
              className="footer-link" 
              onClick={() => setTermsModalOpen(true)}
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 RescuePath. All rights reserved.</p>
      </div>

      <PrivacyModal 
        isOpen={privacyModalOpen} 
        onClose={() => setPrivacyModalOpen(false)} 
      />
      <TermsModal 
        isOpen={termsModalOpen} 
        onClose={() => setTermsModalOpen(false)} 
      />
    </footer>
  )
}

export default Footer 