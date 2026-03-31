import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getDestinationById } from '../utils/destinations'
import { getWeather } from '../utils/api'
import WeatherCard from '../components/WeatherCard'
import Highlights from '../components/Highlights'
import ShareThis from '../components/ShareThis'
import { useAppContext } from '../context/AppContext'

export default function DestinationDetail() {
  const { id } = useParams()
  const destination = getDestinationById(id)
  const { isFavourite, toggleFavourite } = useAppContext()

  const [weather, setWeather] = useState(null)
  const [loadingWeather, setLoadingWeather] = useState(true)

  useEffect(() => {
    if (!destination) return
    getWeather(destination.name).then((data) => {
      setWeather(data)
      setLoadingWeather(false)
    })
  }, [destination])

  if (!destination) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Destination not found</h1>
        <Link to="/destinations" className="text-primary-500 hover:underline">← Back to destinations</Link>
      </div>
    )
  }

  const liked = isFavourite(destination.id)

  return (
    <div>
      {/* Hero image */}
      <div className="relative h-64 md:h-96">
        <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-6 left-0 right-0 container-custom text-white">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm text-gray-300 mb-1">{destination.state} · {destination.region}</p>
              <h1 className="text-3xl md:text-4xl font-heading font-bold">{destination.name}</h1>
              <p className="text-gray-300 mt-1">{destination.tagline}</p>
            </div>
            <button onClick={() => toggleFavourite(destination.id)}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
              aria-label={liked ? 'Remove from favourites' : 'Add to favourites'}>
              <svg className={`h-6 w-6 ${liked ? 'text-red-500 fill-red-500' : 'text-white'}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill={liked ? 'currentColor' : 'none'}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-10">
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link to="/destinations" className="hover:text-primary-500">Destinations</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-800">{destination.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content — left 2 columns */}
          <div className="lg:col-span-2">
            <p className="text-gray-600 leading-relaxed mb-8">{destination.description}</p>

            {/* ====== HIGHLIGHTS (orange stars) ====== */}
            <Highlights highlights={destination.highlights} />

            {/* ====== SHARE THIS ====== */}
            <ShareThis title={`${destination.name} - USA Trip Planner`} />

            {/* Related content links */}
            <div className="bg-gray-50 rounded-xl p-6 mt-6">
              <h3 className="font-heading font-bold text-primary-900 mb-3">Plan Your Trip</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link to="/itineraries" className="flex items-center gap-2 text-primary-500 text-sm hover:text-primary-600">
                  <span>📋</span> Browse Itineraries
                </Link>
                <Link to="/create" className="flex items-center gap-2 text-primary-500 text-sm hover:text-primary-600">
                  <span>✏️</span> Create Your Own
                </Link>
                <Link to="/guides" className="flex items-center gap-2 text-primary-500 text-sm hover:text-primary-600">
                  <span>📖</span> Read Blog
                </Link>
                <Link to="/deals" className="flex items-center gap-2 text-primary-500 text-sm hover:text-primary-600">
                  <span>💰</span> Find Deals
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar — right column */}
          <div className="space-y-6">
            {/* Weather card */}
            <WeatherCard weather={weather} loading={loadingWeather} cityName={destination.name} />

            {/* Travel info */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-heading font-bold text-primary-900 mb-3">Travel Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Best months</span>
                  <span className="text-sm font-medium text-gray-800">{destination.bestMonths}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Avg budget</span>
                  <span className="text-sm font-medium text-gray-800">{destination.avgBudget}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-500">Recommended stay</span>
                  <span className="text-sm font-medium text-gray-800">{destination.duration}</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link to="/create" className="block text-center btn-accent w-full">
              Plan a Trip to {destination.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
