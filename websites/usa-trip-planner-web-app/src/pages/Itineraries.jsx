import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchFilter from '../components/SearchFilter'
import { filterItineraries, getTypes, getRegions } from '../utils/itineraries'

export default function Itineraries() {
  const [filters, setFilters] = useState({ search: '', type: '', region: '' })
  const results = filterItineraries(filters)
  return (
    <div className="container-custom py-10">
      <h1 className="section-title">Itineraries</h1>
      <p className="section-subtitle">Curated day-by-day travel plans across the USA.</p>
      <SearchFilter filters={filters} onFilterChange={setFilters} options={[
        { key: 'type', label: 'Travel Style', values: getTypes() },
        { key: 'region', label: 'Region', values: getRegions() },
      ]} />
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map(i => (
            <div key={i.id} className="card">
              <img src={i.image} alt={i.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <div className="flex gap-2 mb-2">
                  <span className="text-xs bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full">{i.type}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{i.duration}</span>
                </div>
                <h3 className="font-heading font-bold text-primary-900 mb-2">{i.title}</h3>
                <Link to={`/itineraries/${i.id}`} className="text-primary-500 text-sm font-medium">View →</Link>
              </div>
            </div>
          ))}
        </div>
      ) : (<div className="text-center py-16 text-gray-500"><p>No itineraries found.</p></div>)}
    </div>
  )
}
