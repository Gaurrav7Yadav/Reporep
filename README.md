

## 📌 Project Overview
Rescue Path is a web-based emergency assistance platform that helps users find the **nearest hospitals, medical centers, and emergency contacts** based on their location. It also provides **disaster awareness resources** through embedded YouTube videos without redirecting users. The platform aims to enhance **quick decision-making and access to life-saving resources** in critical situations.

## 🎯 Key Features
- 🌍 **Location-Based Hospital Search**: Users can find nearby hospitals using browser location or manual entry.
- 🆘 **Emergency Contact Information**: Displays emergency numbers relevant to the user's region/country.
- 🎥 **Disaster Awareness Videos**: Provides YouTube-embedded educational videos for disaster preparedness.
- 🗺️ **Interactive Map Integration**: Uses Google Maps API for real-time hospital locations and navigation.
- 📱 **Mobile-Friendly UI**: Fully responsive design for easy access on any device.


## 🏗️ Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **APIs Used**:
  - Google Maps Places API (for hospital search)
  - OpenStreetMap (alternative for location services)
  - YouTube iFrame API (for disaster awareness videos)
  - Open Data APIs (for emergency contact details by country)
- **Backend**: Node.js (optional for future scalability)

## 🔧 Installation & Setup
### Prerequisites
- A Google Maps API key (Get one from [Google Cloud Console](https://console.cloud.google.com/))
- A web browser with location access enabled

### Steps
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/yourusername/rescue-path.git
   cd rescue-path
   ```
2. **Open `index.html` in a browser**.
3. If using a local server, run:
   ```sh
   npx serve .
   ```
4. Grant **location access** when prompted.
5. Search for the **nearest hospital** or manually enter a location.
6. Watch **disaster awareness videos** embedded on the platform.

## 📌 API Implementation
### 1️⃣ Google Maps API (for Nearest Hospital Search)
- Fetches hospitals and medical centers near the user's location.
```js
function findHospitals(latitude, longitude) {
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=hospital&key=${apiKey}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data.results))
    .catch(error => console.error('Error fetching hospital data:', error));
}
```

### 2️⃣ Fetching Emergency Contact Information
- Retrieves country-specific emergency numbers.
```js
function getEmergencyContacts(countryCode) {
    fetch(`https://api.example.com/emergency-contacts/${countryCode}`)
    .then(response => response.json())
    .then(data => console.log('Emergency Contacts:', data))
    .catch(error => console.error('Error fetching contacts:', error));
}
```

### 3️⃣ Embedding Disaster Awareness Videos
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/abcd1234" frameborder="0" allowfullscreen></iframe>
```

## 🎨 UI Preview
<img width="1470" alt="Screenshot 2025-02-13 at 8 56 36 PM" src="https://github.com/user-attachments/assets/bc20900b-6033-496d-af4a-3c7d124aabf7" />

## 📌 Future Enhancements
- 🔄 **Real-time Disaster Alerts** using government APIs.
- 📡 **Offline Access** for emergency contact numbers.
- 🤖 **AI Chatbot** for guiding users in emergencies.

## 🤝 Contributing
1. **Fork the repository**.
2. Create a **new branch** for your feature.
3. Commit your changes and push them.
4. Create a **Pull Request**.

## 📜 License
This project is licensed under the **MIT License**.

---

🚀 **Stay Safe. Stay Informed. Save Lives.** 💙
