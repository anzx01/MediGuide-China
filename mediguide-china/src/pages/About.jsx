import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>About MediGuide China</h1>

      <section style={{ marginBottom: '30px' }}>
        <h2>What is this?</h2>
        <p>
          MediGuide China is a navigation tool designed to help English-speaking visitors
          find their way through Chinese hospitals. It provides step-by-step directions,
          location information, and translation assistance.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>What this app provides:</h2>
        <ul>
          <li>Hospital location and contact information</li>
          <li>Step-by-step navigation through the visit process</li>
          <li>English and Chinese phrases for common situations</li>
          <li>General guidance on hospital procedures</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#fff3cd', border: '1px solid #ffc107' }}>
        <h2>⚠️ Important Disclaimer</h2>
        <p><strong>This is NOT medical advice.</strong></p>
        <p>MediGuide China does NOT:</p>
        <ul>
          <li>Provide medical advice, diagnosis, or treatment recommendations</li>
          <li>Replace professional medical consultation</li>
          <li>Guarantee hospital availability, services, or wait times</li>
          <li>Verify insurance coverage or payment information</li>
          <li>Offer emergency medical services</li>
          <li>Represent or claim affiliation with any listed hospital</li>
        </ul>
        <p>
          <strong>Always consult qualified healthcare professionals for all medical decisions.</strong>
        </p>
        <p style={{ fontSize: '14px', marginTop: '15px' }}>
          The information provided is for navigation purposes only and may not be current.
          Hospital details, procedures, and availability can change without notice.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Data and privacy</h2>
        <p>
          Hospital entries are static MVP data with source links shown in the app.
          The app has no backend and stores only disclaimer acceptance and visit progress
          in your browser localStorage.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Version</h2>
        <p>MVP v1.0.0</p>
      </section>

      <button
        onClick={() => navigate('/')}
        style={{
          padding: '10px 20px',
          fontSize: '16px'
        }}
      >
        Back to Home
      </button>
    </div>
  )
}

export default About
