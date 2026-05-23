import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircleIcon, ArrowLeftIcon } from '../components/Icons'

function CitySelection() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({
    city: '',
    hasInsurance: ''
  })

  const handleCitySelect = (city) => {
    setAnswers({ ...answers, city })
    setStep(2)
  }

  const handleInsuranceSelect = (hasInsurance) => {
    setAnswers({ ...answers, hasInsurance })
    navigate(`/hospitals?city=${answers.city}&insurance=${hasInsurance}`)
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Find Your Hospital</h1>
        <p className="page-subtitle">Answer 2 quick questions</p>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Progress indicator */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '32px',
          justifyContent: 'center'
        }} role="progressbar" aria-valuenow={step} aria-valuemin="1" aria-valuemax="2">
          <div style={{
            width: '40px',
            height: '4px',
            borderRadius: '2px',
            backgroundColor: step >= 1 ? 'var(--primary-color)' : 'var(--border-color)',
            transition: 'background-color 0.3s ease'
          }} aria-label="Step 1" />
          <div style={{
            width: '40px',
            height: '4px',
            borderRadius: '2px',
            backgroundColor: step >= 2 ? 'var(--primary-color)' : 'var(--border-color)',
            transition: 'background-color 0.3s ease'
          }} aria-label="Step 2" />
        </div>

        <div className="card">
          {step === 1 && (
            <div>
              <h2 className="card-title mb-2" style={{ fontSize: '24px' }}>
                Which city are you in?
              </h2>
              <p className="card-description mb-4">Select your current location</p>

              <button
                onClick={() => handleCitySelect('beijing')}
                className="btn btn-primary btn-large"
                aria-label="Select Beijing"
              >
                Beijing
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="card-title mb-2" style={{ fontSize: '24px' }}>
                Do you have international health insurance?
              </h2>
              <p className="card-description mb-4">
                This helps us show options to discuss with the hospital and your insurer
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                  onClick={() => handleInsuranceSelect('yes')}
                  className="btn btn-primary btn-large"
                  aria-label="Yes, I have insurance"
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <CheckCircleIcon className="w-5 h-5" />
                    <span>Yes, I have insurance</span>
                  </div>
                </button>
                <button
                  onClick={() => handleInsuranceSelect('no')}
                  className="btn btn-outline btn-large"
                  aria-label="No insurance"
                >
                  No insurance
                </button>
              </div>
            </div>
          )}
        </div>

        {step === 2 && (
          <div className="text-center mt-3">
            <button
              onClick={() => setStep(1)}
              className="btn btn-outline"
              aria-label="Go back to previous question"
              style={{ padding: '10px 20px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ArrowLeftIcon className="w-4 h-4" />
                <span>Back</span>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CitySelection
