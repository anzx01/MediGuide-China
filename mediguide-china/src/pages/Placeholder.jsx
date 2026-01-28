import { useParams, useNavigate } from 'react-router-dom'

function Placeholder() {
  const { situation } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <h1>Coming Soon</h1>
      <p>This feature for "{situation}" is not yet available.</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  )
}

export default Placeholder
