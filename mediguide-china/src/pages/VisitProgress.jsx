import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import hospitalsData from '../data/hospitals.json'
import visitFlowData from '../data/visitFlow.json'

function VisitProgress() {
  const { hospitalId } = useParams()
  const navigate = useNavigate()

  const hospital = hospitalsData.find(h => h.id === hospitalId)

  const [currentStepId, setCurrentStepId] = useState(() => {
    return localStorage.getItem(`currentStep_${hospitalId}`) || 'step1'
  })

  const [completedSteps, setCompletedSteps] = useState(() => {
    const saved = localStorage.getItem(`completedSteps_${hospitalId}`)
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem(`currentStep_${hospitalId}`, currentStepId)
  }, [currentStepId, hospitalId])

  useEffect(() => {
    localStorage.setItem(`completedSteps_${hospitalId}`, JSON.stringify(completedSteps))
  }, [completedSteps, hospitalId])

  const handleStepClick = (stepId) => {
    navigate(`/visit/${hospitalId}/step/${stepId}`)
  }

  const handleNextStep = () => {
    const currentStep = visitFlowData.find(s => s.id === currentStepId)
    if (!currentStep) return

    if (!completedSteps.includes(currentStepId)) {
      setCompletedSteps([...completedSteps, currentStepId])
    }

    const nextStep = visitFlowData.find(s => s.order === currentStep.order + 1)
    if (nextStep) {
      setCurrentStepId(nextStep.id)
    }
  }

  const isStepCompleted = (stepId) => completedSteps.includes(stepId)
  const isStepCurrent = (stepId) => stepId === currentStepId

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Your Visit Progress</h1>
        <div className="card" style={{ maxWidth: '600px', margin: '20px auto 0' }}>
          <h2 className="card-title">{hospital?.name}</h2>
          <p className="card-description">{hospital?.nameZh}</p>
          <div className="info-row mt-2">
            <span>📍</span>
            <span className="info-value">{hospital?.address}</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="alert alert-info mb-4">
          <strong>Track your progress</strong> through each step of your hospital visit. Click any step to view details.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {visitFlowData.map((step) => {
            const completed = isStepCompleted(step.id)
            const current = isStepCurrent(step.id)

            return (
              <div
                key={step.id}
                className="card"
                style={{
                  border: current ? '3px solid var(--primary-color)' : '1px solid var(--border-color)',
                  backgroundColor: completed ? '#f0fdf4' : 'white',
                  cursor: 'pointer'
                }}
                onClick={() => handleStepClick(step.id)}
              >
                <div className="step-indicator">
                  <div className={`step-number ${completed ? 'completed' : ''}`}>
                    {completed ? '✓' : step.order}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="step-title">
                      {step.title}
                      {current && <span className="badge badge-info" style={{ marginLeft: '12px' }}>Current</span>}
                    </h3>
                  </div>
                </div>

                {current && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                    <div className="info-row">
                      <span className="info-label">What to do</span>
                      <span className="info-value">{step.whatToDo}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">⏱️ Time</span>
                      <span className="info-value">{step.estimatedTime}</span>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleStepClick(step.id)
                        }}
                        className="btn btn-primary"
                      >
                        View Details
                      </button>
                      {step.order < visitFlowData.length && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleNextStep()
                          }}
                          className="btn btn-secondary"
                        >
                          Next Step →
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center mt-4">
          <button
            onClick={() => navigate('/hospitals')}
            className="btn btn-outline"
          >
            ← Back to Hospitals
          </button>
        </div>
      </div>
    </div>
  )
}

export default VisitProgress
