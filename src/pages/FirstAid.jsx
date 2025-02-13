import './FirstAid.css';
import NearestHospital from '../components/NearestHospital';
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DisasterVideos from '../components/DisasterVideos'
import EmergencyModal from '../components/EmergencyModal'

function FirstAid() {
  const location = useLocation()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProcedure, setSelectedProcedure] = useState(null)

  useEffect(() => {
    if (location.state?.scrollTo === 'hospitals') {
      const element = document.querySelector('.hospital-finder-section')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  const handleProcedureClick = (procedure) => {
    setSelectedProcedure(procedure)
    setModalOpen(true)
  }

  return (
    <div className="firstaid-page">
      <div className="firstaid-hero">
        <h1>Emergency First Aid Guide</h1>
        <p>Learn life-saving techniques and emergency medical procedures</p>
      </div>

      <div className="firstaid-content">
        {/* Common Emergency Procedures Section */}
        <section className="emergency-procedures">
          <h2>Common Emergency Procedures</h2>
          <div className="procedures-grid" style={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    
  }}>
            <div className="procedure-card">
              <h3>CPR</h3>
              <p>
                Step-by-step guide to performing CPR on adults, children, and infants.
              </p>
              <button 
                className="learn-more"
                onClick={() => handleProcedureClick('CPR')}
              >
                Learn More
              </button>
            </div>
            <div className="procedure-card">
              <h3>Choking</h3>
              <p>
                How to help someone who's choking using the Heimlich maneuver.
              </p>
              <button 
                className="learn-more"
                onClick={() => handleProcedureClick('Choking')}
              >
                Learn More
              </button>
            </div>
            <div className="procedure-card">
              <h3>Hemorrhage</h3>
              <p>
                Steps to control severe bleeding and prevent shock.
              </p>
              <button 
                className="learn-more"
                onClick={() => handleProcedureClick('Hemorrhage')}
              >
                Learn More
              </button>
            </div>
            <div className="procedure-card">
              <h3>Burns</h3>
              <p>
                Treatment for different types and degrees of burns.
              </p>
              <button 
                className="learn-more"
                onClick={() => handleProcedureClick('Burns')}
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Add the DisasterVideos component */}
        <DisasterVideos />

        {/* Add the NearestHospital component */}
        <section className="hospital-finder-section" style={{margin: '40px'}}>
          <NearestHospital />
        </section>

        {/* Basic First Aid Tips Section */}
        <section className="firstaid-tips" style={{textAlign: 'left', padding: '40px'}}>
          <h2>Basic First Aid Tips</h2>
          <ul>
            
            <li>Stay calm and assess the situation before taking action.</li>
            <li>Call emergency services immediately if the situation is severe.</li>
            <li>Keep a well-stocked first aid kit accessible at home and in your car.</li>
            <li>Practice CPR and basic first aid techniques regularly.</li>
            <li>Prioritize your safety before assisting others.</li>
          </ul>
        </section>

        {/* Additional Resources Section */}
        <section className="firstaid-resources">
          <h2>Additional Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Video Tutorials</h3>
              <p>
                Watch detailed videos on various first aid procedures to better understand the techniques.
              </p>
              <button className="learn-more">Watch Now</button>
            </div>
            <div className="resource-card">
              <h3>Download Guides</h3>
              <p>
                Access downloadable PDF guides covering comprehensive first aid instructions.
              </p>
              <button className="learn-more">Download</button>
            </div>
          </div>
        </section>

        {/* Modal component */}
        <EmergencyModal 
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          procedure={selectedProcedure}
        />
      </div>
    </div>
  );
}

export default FirstAid;
