import './AboutUs.css'
import sanaPhoto from '../assets/sana.jpg'
import gauravPhoto from '../assets/gaurav.png'
function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About RescuePath</h1>
        <p>Empowering communities with life-saving information and resources</p>
      </div>

      <div className="about-content">
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
          At RescuePath, our mission is to empower communities and individuals with reliable, accessible emergency resources and comprehensive disaster preparedness guides. We strive to bridge the gap between critical information and rapid action, ensuring that every person is equipped to face emergencies with confidence and care. Through real-time alerts, expert advice, and a commitment to public safety, we are dedicated to saving lives and building resilient communities worldwide.
          </p>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Accessibility</h3>
              <p>Making emergency information available to everyone, anywhere, anytime.</p>
            </div>
            <div className="value-card">
              <h3>Reliability</h3>
              <p>Providing accurate, up-to-date information from trusted sources.</p>
            </div>
            <div className="value-card">
              <h3>Community</h3>
              <p>Building stronger, more resilient communities through knowledge sharing.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Continuously improving our platform to better serve our users.</p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-info"style={{paddingTop:'100px'}}>
              <h3>Get in Touch</h3>
              <p>We're here to help and answer any questions you might have.</p>
              <div className="contact-details">
                <p><strong>Email:</strong> gaurav12yadav12@gmail.com</p>
                <p><strong>Phone:</strong> +91 8700117919</p>
                <p><strong>Address:</strong> VIT Vellore</p>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div 
                className="member-photo"
                style={{
                  backgroundImage: `url(${gauravPhoto})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <h3>Gaurav</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <div 
                className="member-photo"
                style={{
                  backgroundImage: `url(${sanaPhoto})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <h3>Shaivya</h3>
              <p>Emergency Response Director</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutUs 