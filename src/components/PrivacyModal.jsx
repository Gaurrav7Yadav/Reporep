import './Modal.css'

function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Privacy Policy</h2>
        <div className="modal-body">
          <h3>Information We Collect</h3>
          <p>We collect information that you provide directly to us, including location data for emergency services and hospital searches.</p>

          <h3>How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide emergency resources and information</li>
            <li>Connect you with nearby medical facilities</li>
            <li>Improve our services and user experience</li>
            <li>Send important safety alerts and updates</li>
          </ul>

          <h3>Data Security</h3>
          <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>

          <h3>Third-Party Services</h3>
          <p>We may use third-party services for:</p>
          <ul>
            <li>Location services and mapping</li>
            <li>Emergency contact information</li>
            <li>Weather alerts and notifications</li>
          </ul>

          <h3>Updates to Privacy Policy</h3>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyModal 