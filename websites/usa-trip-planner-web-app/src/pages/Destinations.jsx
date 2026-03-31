import { useState } from 'react'
import SearchFilter from '../components/SearchFilter'
import DestinationCard from '../components/DestinationCard'
import { filterDestinations, getCategories, getRegions } from '../utils/destinations'

export default function Destinations() {
  const [filters, setFilters] = useState({ search: '', category: '', region: '' })
  const results = filterDestinations(filters)
  return (
    <div className="container-custom py-10">
      <h1 className="section-title">Destinations</h1>
      <p className="section-subtitle">Explore the best the USA has to offer.</p>
      <SearchFilter filters={filters} onFilterChange={setFilters} options={[
        { key: 'category', label: 'Category', values: getCategories() },
        { key: 'region', label: 'Region', values: getRegions() },
      ]} />
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{results.map(d => <DestinationCard key={d.id} destination={d} />)}</div>
      ) : (<div className="text-center py-16 text-gray-500"><p>No destinations found.</p></div>)}
      <p className="text-sm text-gray-400 mt-6">Showing {results.length} destination{results.length !== 1 ? 's' : ''}</p>
    </div>
  )
}
