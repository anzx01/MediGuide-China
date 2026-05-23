import { useNavigate, useSearchParams } from 'react-router-dom'
import hospitalsData from '../data/hospitals.json'
import { LocationIcon, PhoneIcon, ClockIcon, InsuranceIcon, InfoIcon, ArrowRightIcon, ArrowLeftIcon } from '../components/Icons'

function HospitalRecommendation() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const city = searchParams.get('city')
  const cityLabel = city === 'beijing' ? 'Beijing' : city || 'your selected city'

  const handleStartVisit = (hospitalId) => {
    navigate(`/visit/${hospitalId}`)
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Hospital Options</h1>
        <p className="page-subtitle">
          Static MVP information for {cityLabel}. Confirm details before visiting.
        </p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="alert alert-info mb-4" role="alert">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <InfoIcon className="w-6 h-6" style={{ flexShrink: 0 }} />
            <div>
              <strong>Verify before you go.</strong> Addresses, services, billing, and wait times can change.
              This app is not affiliated with the hospitals listed here.
            </div>
          </div>
        </div>

        <div className="grid grid-2">
          {hospitalsData.map((hospital) => (
            <div key={hospital.id} className="card" style={{ cursor: 'default' }}>
              <div className="card-header">
                <h2 className="card-title">{hospital.name}</h2>
                <p className="card-description">{hospital.nameZh}</p>
              </div>

              <div className="divider"></div>

              <div style={{ marginBottom: '20px' }}>
                <div className="info-row">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <LocationIcon className="w-5 h-5" style={{ color: 'var(--primary-color)' }} />
                    <span className="info-label">Address</span>
                  </div>
                  <span className="info-value">{hospital.address}</span>
                </div>
                <div className="info-row">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <PhoneIcon className="w-5 h-5" style={{ color: 'var(--primary-color)' }} />
                    <span className="info-label">Phone</span>
                  </div>
                  <span className="info-value">
                    {hospital.phone}
                    {hospital.serviceCenter ? ` / ${hospital.serviceCenter}` : ''}
                  </span>
                </div>
                <div className="info-row">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ClockIcon className="w-5 h-5" style={{ color: 'var(--primary-color)' }} />
                    <span className="info-label">Wait Time</span>
                  </div>
                  <span className="info-value">{hospital.waitTime}</span>
                </div>
                <div className="info-row">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <InsuranceIcon className="w-5 h-5" style={{ color: 'var(--primary-color)' }} />
                    <span className="info-label">Insurance</span>
                  </div>
                  <span className="info-value">
                    {hospital.acceptsInsurance === true ? (
                      <span className="badge badge-success">Accepted</span>
                    ) : hospital.acceptsInsurance === false ? (
                      <span className="badge badge-warning">Not Accepted</span>
                    ) : (
                      <span className="badge badge-warning">Confirm Directly</span>
                    )}
                  </span>
                </div>
                <p className="card-description" style={{ fontSize: '13px', marginTop: '-8px', marginBottom: '12px' }}>
                  {hospital.insuranceNote}
                </p>
                <div className="info-row">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <InfoIcon className="w-5 h-5" style={{ color: 'var(--primary-color)' }} />
                    <span className="info-label">Languages</span>
                  </div>
                  <span className="info-value">
                    <span className="badge badge-success">{hospital.serviceLanguages?.join(', ')}</span>
                  </span>
                </div>
                <div className="info-row">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <InfoIcon className="w-5 h-5" style={{ color: 'var(--primary-color)' }} />
                    <span className="info-label">Source</span>
                  </div>
                  <span className="info-value">
                    <a href={hospital.sourceUrl} target="_blank" rel="noreferrer">
                      {hospital.dataSource}
                    </a>
                    <br />
                    <span className="card-description" style={{ fontSize: '12px' }}>
                      Reviewed {hospital.lastReviewed}
                    </span>
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleStartVisit(hospital.id)}
                className="btn btn-primary btn-block"
                aria-label={`Start visit at ${hospital.name}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <span>Start my visit</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button
            onClick={() => navigate('/city')}
            className="btn btn-outline"
            aria-label="Go back to change answers"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ArrowLeftIcon className="w-5 h-5" />
              <span>Change answers</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HospitalRecommendation
