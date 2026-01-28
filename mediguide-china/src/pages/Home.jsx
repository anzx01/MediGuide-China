import { useNavigate } from 'react-router-dom'
import { ArrowRightIcon } from '../components/Icons'

function Home() {
  const navigate = useNavigate()

  const situations = [
    {
      id: 'general-checkup',
      title: 'General Checkup',
      description: 'Routine health examination',
      path: '/city',
      enabled: true
    },
    {
      id: 'emergency',
      title: 'Emergency',
      description: 'Urgent medical attention',
      path: '/placeholder/emergency',
      enabled: false
    },
    {
      id: 'specialist',
      title: 'Specialist Visit',
      description: 'See a specific doctor',
      path: '/placeholder/specialist',
      enabled: false
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy Only',
      description: 'Get prescription medicine',
      path: '/placeholder/pharmacy',
      enabled: false
    }
  ]

  const handleSituationClick = (situation) => {
    if (situation.enabled) {
      navigate(situation.path)
    }
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">MediGuide China</h1>
        <p className="page-subtitle">Navigate Chinese hospitals with confidence</p>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="alert alert-info mb-4" role="alert">
          Select your situation to get step-by-step guidance
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {situations.map((situation) => (
            <button
              key={situation.id}
              onClick={() => handleSituationClick(situation)}
              className={situation.enabled ? 'btn btn-primary btn-large' : 'btn btn-outline btn-large'}
              style={{
                opacity: situation.enabled ? 1 : 0.5,
                cursor: situation.enabled ? 'pointer' : 'not-allowed',
                textAlign: 'left',
                justifyContent: 'space-between',
                display: 'flex',
                alignItems: 'center'
              }}
              disabled={!situation.enabled}
              aria-label={`${situation.title}: ${situation.description}${!situation.enabled ? ' (Coming Soon)' : ''}`}
            >
              <div>
                <div style={{
                  fontWeight: '600',
                  fontSize: '18px',
                  marginBottom: '4px',
                  color: situation.enabled ? 'white' : 'inherit'
                }}>
                  {situation.title}
                </div>
                <div style={{
                  fontSize: '14px',
                  opacity: 0.9,
                  color: situation.enabled ? 'rgba(255,255,255,0.9)' : 'var(--text-secondary)'
                }}>
                  {situation.description}
                  {!situation.enabled && ' • Coming Soon'}
                </div>
              </div>
              {situation.enabled && (
                <ArrowRightIcon className="w-5 h-5" style={{ flexShrink: 0 }} />
              )}
            </button>
          ))}
        </div>

        <div className="text-center mt-4">
          <button
            onClick={() => navigate('/about')}
            className="btn btn-outline"
            aria-label="View about page and disclaimer"
            style={{ padding: '10px 20px', fontSize: '14px' }}
          >
            About & Disclaimer
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
