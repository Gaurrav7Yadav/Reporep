import './EmergencyModal.css'

function EmergencyModal({ isOpen, onClose, procedure }) {
  if (!isOpen) return null

  const procedures = {
    CPR: {
      title: "How to Perform CPR",
      steps: [
        "Check the scene is safe and the person is unresponsive",
        "Call emergency services (112 or local emergency number)",
        "Check for breathing - look for chest movement",
        "Place the heel of your hand on the center of the person's chest",
        "Place your other hand on top and interlock your fingers",
        "Keep your arms straight and position your shoulders above your hands",
        "Push hard and fast:",
        "- Compress the chest at least 2 inches deep",
        "- Deliver compressions at a rate of 100-120 per minute",
        "- Allow the chest to fully recoil after each compression",
        "After 30 compressions, give 2 rescue breaths (if trained)",
        "Continue CPR until help arrives or person shows signs of life"
      ]
    },
    Choking: {
      title: "Heimlich Maneuver Steps",
      steps: [
        "Stand behind the person who's choking",
        "Wrap your arms around their waist",
        "Make a fist with one hand",
        "Position it slightly above the person's navel",
        "Grasp your fist with your other hand",
        "Press hard into the abdomen with quick, upward thrusts",
        "Repeat until the object is expelled",
        "If person becomes unconscious, begin CPR",
        "Call emergency services if blockage persists"
      ]
    },
    Hemorrhage: {
      title: "Controlling Severe Bleeding",
      steps: [
        "Ensure your own safety - wear gloves if available",
        "Expose the wound area",
        "Apply direct pressure using sterile gauze or clean cloth",
        "Maintain firm, continuous pressure for at least 10 minutes",
        "If blood soaks through, add more layers without removing original dressing",
        "Elevate the injured area above the heart if possible",
        "Secure dressing with bandage",
        "Monitor for signs of shock",
        "Seek immediate medical attention"
      ]
    },
    Burns: {
      title: "Burn Treatment Steps",
      steps: [
        "Ensure safety and stop the burning process",
        "Remove any clothing or jewelry near the burnt area",
        "Cool the burn under cool (not cold) running water for 20 minutes",
        "Cover the burn with a sterile gauze bandage",
        "Don't break blisters if they occur",
        "Take pain relief medication if needed",
        "Watch for signs of shock",
        "Seek medical attention for:",
        "- Burns larger than 3 inches",
        "- Burns on face, hands, feet, or major joints",
        "- Chemical or electrical burns",
        "- Third-degree burns (charred or white skin)"
      ]
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{procedures[procedure].title}</h2>
        <div className="steps-container">
          {procedures[procedure].steps.map((step, index) => (
            <p key={index} className={step.startsWith('-') ? 'sub-step' : 'step'}>
              {step.startsWith('-') ? step : `${index + 1}. ${step}`}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmergencyModal 