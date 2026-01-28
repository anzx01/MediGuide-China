import { useNavigate } from 'react-router-dom'
import { HospitalIcon, EmergencyIcon, DoctorIcon, PharmacyIcon } from '../components/Icons'

function Home() {
  const navigate = useNavigate()

  const situations = [
    {
      id: 'general-checkup',
      title: 'General Checkup',
      description: 'Routine health examination',
      Icon: HospitalIcon,
      path: '/city',
      enabled: true
    },
    {
      id: 'emergency',
      title: 'Emergency',
      description: 'Urgent medical attention',
      Icon: EmergencyIcon,
      path: '/placeholder/emergency',
      enabled: false
    },
    {
      id: 'specialist',
      title: 'Specialist Visit',
      description: 'See a specific doctor',
      Icon: DoctorIcon,
      path: '/placeholder/specialist',
      enabled: false
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy Only',
      description: 'Get prescription medicine',
      Icon: PharmacyIcon,
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
        <p className="page-subtitle">Your guide to navigating Chinese hospitals</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="alert alert-info mb-4" role="alert">
          <strong>Welcome!</strong> Select your situation to get started with step-by-step guidance.
        </div>

        <div className="grid gap-3">
          {situations.map((situation) => {
            const { Icon } = situation
            return (
              <button
                key={situation.id}
                onClick={() => handleSituationClick(situation)}
                className={`card ${situation.enabled ? 'btn-primary' : ''}`}
                style={{
                  opacity: situation.enabled ? 1 : 0.6,
                  cursor: situation.enabled ? 'pointer' : 'not-allowed',
                  border: 'none',
                  textAlign: 'left'
                }}
                disabled={!situation.enabled}
                aria-label={`${situation.title}: ${situation.description}${!situation.enabled ? ' (Coming Soon)' : ''}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '12px',
                    backgroundColor: situation.enabled ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Icon className="w-8 h-8" style={{ color: situation.enabled ? 'white' : 'var(--text-secondary)' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h2 className="card-title" style={{ color: situation.enabled ? 'white' : 'inherit', marginBottom: '4px' }}>
                      {situation.title}
                    </h2>
                    <p className="card-description" style={{ color: situation.enabled ? 'rgba(255,255,255,0.9)' : 'inherit', marginBottom: '8px' }}>
                      {situation.description}
                    </p>
                    {!situation.enabled && (
                      <span className="badge badge-warning">Coming Soon</span>
                    )}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        <div className="text-center mt-4">
          <button
            onClick={() => navigate('/about')}
            className="btn btn-outline"
            aria-label="View about page and disclaimer"
          >
            About & Disclaimer
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
