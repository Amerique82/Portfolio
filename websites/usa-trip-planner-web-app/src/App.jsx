import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import DestinationDetail from './pages/DestinationDetail'
import Itineraries from './pages/Itineraries'
import ItineraryDetail from './pages/ItineraryDetail'
import TravelGuides from './pages/TravelGuides'
import GuideDetail from './pages/GuideDetail'
import CreateItinerary from './pages/CreateItinerary'
import Deals from './pages/Deals'
import About from './pages/About'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/destinations/:id" element={<DestinationDetail />} />
              <Route path="/itineraries" element={<Itineraries />} />
              <Route path="/itineraries/:id" element={<ItineraryDetail />} />
              <Route path="/guides" element={<TravelGuides />} />
              <Route path="/guides/:id" element={<GuideDetail />} />
              <Route path="/create" element={<CreateItinerary />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </Router>
    </AppProvider>
  )
}

export default App
