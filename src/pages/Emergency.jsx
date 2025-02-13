import { useState } from 'react'
import './Emergency.css'

function Emergency() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "What should be included in a basic emergency kit?",
      answer: "An emergency kit should include water, non-perishable food, a flashlight, a first aid kit, and any necessary medications."
    },
    {
      question: "How often should I update my emergency contact information?",
      answer: "Review your emergency contacts at least once a year and update them if you move or if any contact numbers change."
    },
    {
      question: "What steps can I take to improve my emergency preparedness?",
      answer: "Consider taking first aid training, keeping a well-stocked emergency kit, and creating a family emergency plan with designated meeting points."
    },
    {
      question: "What is the role of the Disaster Management Authority?",
      answer: "The Disaster Management Authority is responsible for coordinating disaster response efforts, providing emergency services, and ensuring the safety of citizens during disasters."
    },
    {
      question: "What signs of distress should I look for in an emergency situation?",
      answer: "Look for signs of distress such as pain, loss of consciousness, or difficulty breathing. If you suspect someone is in distress, call emergency services immediately."
    }
  ]

  return (
    <div className="emergency-page">
      <div className="emergency-hero">
        <h1>Emergency Contacts</h1>
        <p>Quick access to emergency services and helpline numbers</p>
      </div>

      <div className="emergency-content">
        <section className="emergency-numbers" style={{paddingTop:'50px'}}>
          <h2>National Emergency Numbers</h2>
          <div className="numbers-grid">
            <div className="number-card">
              <div className="number-icon">🚑</div>
              <h3>Ambulance</h3>
              <p className="number">102</p>
              <p className="description">For medical emergencies and ambulance services</p>
            </div>

            <div className="number-card">
              <div className="number-icon">🚒</div>
              <h3>Fire Brigade</h3>
              <p className="number">101</p>
              <p className="description">For fire emergencies and rescue operations</p>
            </div>

            <div className="number-card">
              <div className="number-icon">👮</div>
              <h3>Police</h3>
              <p className="number">100</p>
              <p className="description">For law enforcement and immediate police assistance</p>
            </div>

            <div className="number-card">
              <div className="number-icon">🆘</div>
              <h3>Disaster Management</h3>
              <p className="number">108</p>
              <p className="description">For disaster-related emergencies and rescue</p>
            </div>
          </div>
        </section>
        

        <section className="helpline-section" style={{paddingTop:'50px'}}>
          <h2>Other Important Helplines</h2>
          <div className="helpline-grid">
            <div className="helpline-card">
              <h3>Women's Helpline</h3>
              <p className="number">1091</p>
            </div>
            <div className="helpline-card">
              <h3>Child Helpline</h3>
              <p className="number">1098</p>
            </div>
            <div className="helpline-card">
              <h3>Senior Citizen Helpline</h3>
              <p className="number">14567</p>
            </div>
            <div className="helpline-card">
              <h3>COVID-19 Helpline</h3>
              <p className="number">1075</p>
            </div>
          </div>
        </section>
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className={`faq-question ${openFaq === index ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Emergency 