import './CalamityTypes.css';

import earthImage from '../assets/earth.jpg'; 

function CalamityTypes() {
  return (
    <div className="calamity-page">
      <div
  className="calamity-hero"
  style={{ backgroundImage: `url(${earthImage})` }}
>
  <div className="hero-overlay" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', marginLeft: '300px', marginRight: '300px',marginTop: '100px'}}>
    <h1>Explore Natural Disasters</h1>
    <p>
      Understand the different types of natural calamities and learn how to protect yourself and your community.
    </p>
  </div>
</div>

      <div className="calamity-content">
        {/* Earthquake Section */}
        <section className="calamity-section earthquake">
          <div className="calamity-info">
            <h2>Earthquake</h2>
            <p>
              Sudden, violent shaking of the ground caused by tectonic shifts. Learn the best practices to keep safe when the earth starts moving.
            </p>
            <div className="key-points">
              <h3>Key Safety Measures:</h3>
              <ul>
                Drop, Cover, and Hold On<br/>
                Stay clear of windows and exterior walls<br/>
                Keep an emergency kit nearby<br/>
                Know your building’s evacuation plan
              </ul>
            </div>
            <button className="learn-more">Discover Earthquake Safety</button>
          </div>
        </section>

        {/* Wildfire Section */}
        <section className="calamity-section wildfire">
          <div className="calamity-info">
            <h2>Wildfire</h2>
            <p>
              Rapidly spreading, uncontrolled fires that can devastate large areas. Discover strategies to safeguard your home and loved ones.
            </p>
            <div className="key-points">
              <h3>Key Safety Measures:</h3>
              <ul>
                Create defensible space around your property<br/>
                Prepare an evacuation plan<br/>
                Stay informed through local alerts<br/>
                Keep emergency supplies accessible
              </ul>
            </div>
            <button className="learn-more">Discover Wildfire Safety</button>
          </div>
        </section>

        {/* Floods Section */}
        <section className="calamity-section floods">
          <div className="calamity-info">
            <h2>Floods</h2>
            <p>
              Overflows of water that can submerge communities and cause significant damage. Get essential tips to stay safe and minimize risk.
            </p>
            <div className="key-points">
              <h3>Key Safety Measures:</h3>
              <ul>
                Move to higher ground immediately<br/>
                Avoid walking or driving through floodwaters<br/>
                Keep an emergency kit ready<br/>
                Stay aware of local flood alerts
              </ul>
            </div>
            <button className="learn-more">Discover Flood Safety</button>
          </div>
        </section>

        {/* Tsunami Section */}
        <section className="calamity-section tsunami">
          <div className="calamity-info">
            <h2>Tsunami</h2>
            <p>
              Massive ocean waves triggered by underwater disturbances. Learn to recognize the warning signs and evacuate promptly.
            </p>
            <div className="key-points">
              <h3>Key Safety Measures:</h3>
              <ul>
                Know the tsunami warning signals<br/>
                Head for higher ground immediately<br/>
                Avoid coastal areas during warnings<br/>
                Follow evacuation orders without delay
              </ul>
            </div>
            <button className="learn-more">Discover Tsunami Safety</button>
          </div>
        </section>

        {/* Landslide Section */}
        <section className="calamity-section landslide">
          <div className="calamity-info">
            <h2>Landslide</h2>
            <p>
              The rapid movement of rock, earth, or debris down a slope. Learn how to spot early warning signs and take timely action.
            </p>
            <div className="key-points">
              <h3>Key Safety Measures:</h3>
              <ul>
                Recognize early warning signals<br/>
                Listen for unusual rumbling sounds<br/>
                Monitor changes in the landscape<br/>
                Evacuate promptly if advised
              </ul>
            </div>
            <button className="learn-more">Discover Landslide Safety</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CalamityTypes;
