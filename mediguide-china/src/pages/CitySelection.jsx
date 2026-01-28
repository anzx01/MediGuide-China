import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CityIcon, InsuranceIcon, CheckCircleIcon, ArrowLeftIcon } from '../components/Icons'

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
        <p className="page-subtitle">Answer 2 quick questions to get personalized recommendations</p>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="card mb-3">
          <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }} role="progressbar" aria-valuenow={step} aria-valuemin="1" aria-valuemax="2">
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: step >= 1 ? 'var(--primary-color)' : 'var(--border-color)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '600'
            }} aria-label="Step 1">1</div>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: step >= 2 ? 'var(--primary-color)' : 'var(--border-color)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '600'
            }} aria-label="Step 2">2</div>
          </div>

          {step === 1 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <CityIcon className="w-8 h-8" style={{ color: 'var(--primary-color)' }} />
                <h2 className="card-title" style={{ margin: 0 }}>Question 1: Which city are you in?</h2>
              </div>
              <p className="card-description mb-3">Select your current location</p>
              <button
                onClick={() => handleCitySelect('beijing')}
                className="btn btn-primary btn-large"
                aria-label="Select Beijing"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                  <CityIcon className="w-6 h-6" />
                  <span>Beijing</span>
                </div>
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <InsuranceIcon className="w-8 h-8" style={{ color: 'var(--primary-color)' }} />
                <h2 className="card-title" style={{ margin: 0 }}>Question 2: Do you have international health insurance?</h2>
              </div>
              <p className="card-description mb-3">This helps us recommend the right hospital for you</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                  onClick={() => handleInsuranceSelect('yes')}
                  className="btn btn-primary btn-large"
                  aria-label="Yes, I have insurance"
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                    <CheckCircleIcon className="w-6 h-6" />
                    <span>Yes, I have insurance</span>
                  </div>
                </button>
                <button
                  onClick={() => handleInsuranceSelect('no')}
                  className="btn btn-outline btn-large"
                  aria-label="No insurance"
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                    <span>No insurance</span>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>

        {step === 2 && (
          <div className="text-center">
            <button
              onClick={() => setStep(1)}
              className="btn btn-outline"
              aria-label="Go back to previous question"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ArrowLeftIcon className="w-5 h-5" />
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
