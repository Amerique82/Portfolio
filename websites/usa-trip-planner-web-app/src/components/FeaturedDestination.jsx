import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import destinations from '../utils/destinations'
import { getWeather } from '../utils/api'

export default function FeaturedDestination() {
  const [featured] = useState(() => destinations[Math.floor(Math.random() * destinations.length)])
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    getWeather(featured.name).then(setWeather)
  }, [featured])

  return (
    <section className="container-custom py-8">
      <div className="card flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/3"><img src={featured.image} alt={featured.name} className="w-full h-48 md:h-full object-cover" /></div>
        <div className="p-6 flex-1">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Featured destination</p>
          <h3 className="text-xl font-heading font-bold text-primary-900 mb-2">{featured.name}</h3>
          {weather && (
            <div className="inline-flex items-center gap-2 bg-primary-50 rounded-lg px-3 py-1 text-sm text-primary-800 mb-3">
              {weather.temp}°F · {weather.description} · Wind {weather.windSpeed} mph · Humidity {weather.humidity}%
            </div>
          )}
          <p className="text-gray-500 text-sm mb-4 line-clamp-2">{featured.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 text-xs text-gray-500">
              <span>🗓️ {featured.bestMonths}</span>
              <span>💰 {featured.avgBudget}</span>
            </div>
            <Link to={`/destinations/${featured.id}`} className="btn-accent text-sm px-6 py-2">Explore →</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
