import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import hospitalsData from '../data/hospitals.json'
import visitFlowData from '../data/visitFlow.json'

function StepDetail() {
  const { hospitalId, stepId } = useParams()
  const navigate = useNavigate()
  const [showFullscreen, setShowFullscreen] = useState(false)

  const hospital = hospitalsData.find(h => h.id === hospitalId)
  const step = visitFlowData.find(s => s.id === stepId)

  const handleMarkComplete = () => {
    const completedSteps = JSON.parse(localStorage.getItem(`completedSteps_${hospitalId}`) || '[]')

    if (!completedSteps.includes(stepId)) {
      completedSteps.push(stepId)
      localStorage.setItem(`completedSteps_${hospitalId}`, JSON.stringify(completedSteps))
    }

    const nextStep = visitFlowData.find(s => s.order === step.order + 1)
    if (nextStep) {
      localStorage.setItem(`currentStep_${hospitalId}`, nextStep.id)
    }

    navigate(`/visit/${hospitalId}`)
  }

  if (!step || !hospital) {
    return <div className="container"><div className="alert alert-warning">Step not found</div></div>
  }

  return (
    <div className="container">
      <div className="page-header">
        <div className="step-indicator" style={{ justifyContent: 'center', marginBottom: '16px' }}>
          <div className="step-number">{step.order}</div>
          <h1 className="page-title" style={{ margin: 0 }}>{step.title}</h1>
        </div>
        <p className="page-subtitle">Step {step.order} of {visitFlowData.length} • {step.estimatedTime}</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="card mb-3">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '32px' }}>📋</span>
            <h2 className="card-title" style={{ margin: 0 }}>1. What to do now</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-primary)' }}>
            {step.whatToDo}
          </p>
        </div>

        <div className="card mb-3">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '32px' }}>📍</span>
            <h2 className="card-title" style={{ margin: 0 }}>2. Where to go</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-primary)' }}>
            {step.whereToGo}
          </p>
        </div>

        <div className="card mb-3">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '32px' }}>💬</span>
            <h2 className="card-title" style={{ margin: 0 }}>3. What to say</h2>
          </div>
          <p className="card-description mb-3">Click to view phrases in large text</p>
          <button
            onClick={() => setShowFullscreen(true)}
            className="btn btn-primary btn-large"
          >
            View Fullscreen →
          </button>
        </div>

        <div className="card mb-4">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '32px' }}>⏭️</span>
            <h2 className="card-title" style={{ margin: 0 }}>4. What happens next</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-primary)' }}>
            {step.whatHappensNext}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button
            onClick={() => navigate(`/visit/${hospitalId}`)}
            className="btn btn-outline"
          >
            ← Back to Progress
          </button>
          <button
            onClick={handleMarkComplete}
            className="btn btn-secondary"
          >
            Mark Complete & Next →
          </button>
        </div>
      </div>

      {showFullscreen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'white',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px',
            overflowY: 'auto'
          }}
        >
          <button
            onClick={() => setShowFullscreen(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              padding: '12px 24px',
              fontSize: '18px',
              backgroundColor: 'var(--border-color)',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            ✕ Close
          </button>

          <div style={{ textAlign: 'center', maxWidth: '900px', width: '100%' }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '40px',
              padding: '20px',
              backgroundColor: 'var(--bg-accent)',
              borderRadius: 'var(--radius-lg)'
            }}>
              💬
            </div>

            <div className="card mb-4" style={{ textAlign: 'left' }}>
              <h2 style={{
                fontSize: '24px',
                color: 'var(--text-secondary)',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: '600'
              }}>
                English
              </h2>
              <p style={{
                fontSize: '36px',
                lineHeight: '1.5',
                color: 'var(--text-primary)',
                fontWeight: '500'
              }}>
                {step.whatToSay}
              </p>
            </div>

            <div className="card" style={{ textAlign: 'left' }}>
              <h2 style={{
                fontSize: '24px',
                color: 'var(--text-secondary)',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: '600'
              }}>
                中文
              </h2>
              <p style={{
                fontSize: '36px',
                lineHeight: '1.5',
                color: 'var(--text-primary)',
                fontWeight: '500'
              }}>
                {step.whatToSayZh}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StepDetail
