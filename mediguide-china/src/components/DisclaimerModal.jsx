import { useState, useEffect } from 'react'

function DisclaimerModal({ onAccept }) {
  const [accepted, setAccepted] = useState(() => {
    return localStorage.getItem('disclaimerAccepted') === 'true'
  })

  useEffect(() => {
    if (accepted) {
      onAccept()
    }
  }, [accepted, onAccept])

  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true')
    setAccepted(true)
    onAccept()
  }

  if (accepted) {
    return null
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        backdropFilter: 'blur(4px)'
      }}
    >
      <div
        className="card"
        style={{
          maxWidth: '650px',
          padding: '48px',
          animation: 'fadeIn 0.3s ease'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>⚠️</div>
          <h1 style={{ fontSize: '32px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>
            Important Disclaimer
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Please read carefully before continuing
          </p>
        </div>

        <div className="alert alert-warning mb-4">
          <p style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>
            This is NOT medical advice.
          </p>
        </div>

        <div style={{ marginBottom: '32px', lineHeight: '1.7' }}>
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '12px' }}>
              ✅ MediGuide China provides:
            </h3>
            <ul style={{ paddingLeft: '24px', color: 'var(--text-secondary)' }}>
              <li>Hospital location information</li>
              <li>Step-by-step navigation guidance</li>
              <li>Translation assistance</li>
            </ul>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '12px' }}>
              ❌ This app does NOT:
            </h3>
            <ul style={{ paddingLeft: '24px', color: 'var(--text-secondary)' }}>
              <li>Provide medical advice or diagnosis</li>
              <li>Replace professional medical consultation</li>
              <li>Guarantee hospital availability or services</li>
              <li>Verify insurance coverage</li>
            </ul>
          </div>

          <div className="alert alert-info">
            <strong>Always consult qualified healthcare professionals for medical decisions.</strong>
          </div>

          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '20px', lineHeight: '1.6' }}>
            By clicking "I Understand", you acknowledge that you understand this is a navigation tool only
            and not a substitute for professional medical advice.
          </p>
        </div>

        <button
          onClick={handleAccept}
          className="btn btn-primary btn-large"
        >
          I Understand
        </button>
      </div>
    </div>
  )
}

export default DisclaimerModal
