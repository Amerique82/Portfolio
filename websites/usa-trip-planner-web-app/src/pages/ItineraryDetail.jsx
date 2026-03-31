import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getItineraryById } from '../utils/itineraries'
import { getWeather } from '../utils/api'
import WeatherCard from '../components/WeatherCard'

export default function ItineraryDetail() {
  const { id } = useParams()
  const itinerary = getItineraryById(id)
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!itinerary) return
    getWeather(itinerary.destination).then(d => { setWeather(d); setLoading(false) })
  }, [itinerary])

  if (!itinerary) return <div className="container-custom py-20 text-center"><h1 className="text-2xl font-bold mb-4">Itinerary not found</h1><Link to="/itineraries" className="text-primary-500">← Back</Link></div>

  return (
    <div>
      <div className="relative h-64 md:h-80">
        <img src={itinerary.image} alt={itinerary.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-6 left-0 right-0 container-custom text-white">
          <div className="flex gap-2 mb-2">
            <span className="bg-accent-500 text-white text-xs px-2 py-1 rounded-full">{itinerary.type}</span>
            <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">{itinerary.duration}</span>
          </div>
          <h1 className="text-3xl font-heading font-bold">{itinerary.title}</h1>
        </div>
      </div>
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-gray-600 mb-8">{itinerary.summary}</p>
            <h2 className="text-xl font-heading font-bold text-primary-900 mb-6">Day-by-Day Plan</h2>
            <div className="space-y-6">
              {itinerary.days.map(day => (
                <div key={day.day} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-heading font-bold text-primary-800 mb-2">Day {day.day}: {day.title}</h3>
                  <ul className="space-y-2">
                    {day.activities.map((a, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                        <span className="w-5 h-5 bg-accent-500 text-white rounded-full flex items-center justify-center text-xs">{i + 1}</span>{a}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <WeatherCard weather={weather} loading={loading} cityName={itinerary.destination} />
            <Link to="/create" className="block text-center btn-accent w-full">Create Your Own</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
