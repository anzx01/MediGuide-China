import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DisclaimerModal from './components/DisclaimerModal'
import Home from './pages/Home'
import CitySelection from './pages/CitySelection'
import HospitalRecommendation from './pages/HospitalRecommendation'
import VisitProgress from './pages/VisitProgress'
import StepDetail from './pages/StepDetail'
import Placeholder from './pages/Placeholder'
import About from './pages/About'

function App() {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false)

  return (
    <>
      <DisclaimerModal onAccept={() => setDisclaimerAccepted(true)} />
      {disclaimerAccepted && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/city" element={<CitySelection />} />
            <Route path="/hospitals" element={<HospitalRecommendation />} />
            <Route path="/visit/:hospitalId" element={<VisitProgress />} />
            <Route path="/visit/:hospitalId/step/:stepId" element={<StepDetail />} />
            <Route path="/placeholder/:situation" element={<Placeholder />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
