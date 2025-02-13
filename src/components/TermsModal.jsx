import './Modal.css'

function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Terms & Conditions</h2>
        <div className="modal-body">
          <h3>Acceptance of Terms</h3>
          <p>By accessing and using RescuePath, you accept and agree to be bound by these Terms and Conditions.</p>

          <h3>Use of Service</h3>
          <p>Our services are intended for informational purposes only. In case of emergency, always contact professional emergency services.</p>

          <h3>Medical Disclaimer</h3>
          <p>The first aid information provided is for general guidance only and should not be used as a substitute for professional medical advice.</p>

          <h3>User Responsibilities</h3>
          <ul>
            <li>Provide accurate information when using our services</li>
            <li>Use the service responsibly and legally</li>
            <li>Not misuse or attempt to disrupt our services</li>
          </ul>

          <h3>Limitation of Liability</h3>
          <p>RescuePath is not liable for any damages or harm resulting from the use or inability to use our services.</p>

          <h3>Changes to Terms</h3>
          <p>We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.</p>
        </div>
      </div>
    </div>
  )
}

export default TermsModal 