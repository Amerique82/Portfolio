import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

export default function DestinationCard({ destination }) {
  const { isFavourite, toggleFavourite } = useAppContext()
  const liked = isFavourite(destination.id)
  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        <span className="absolute top-3 left-3 bg-primary-500 text-white text-xs font-medium px-2 py-1 rounded-full capitalize">{destination.category}</span>
        <button onClick={() => toggleFavourite(destination.id)} className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors" aria-label={liked ? 'Remove from favourites' : 'Add to favourites'}>
          <svg className={`h-4 w-4 ${liked ? 'text-red-500 fill-red-500' : 'text-gray-500'}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill={liked ? 'currentColor' : 'none'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1">{destination.state} · {destination.region}</p>
        <h3 className="font-heading font-bold text-primary-900 mb-1">{destination.name}</h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{destination.tagline}</p>
        <Link to={`/destinations/${destination.id}`} className="text-primary-500 text-sm font-medium hover:text-primary-600">Explore →</Link>
      </div>
    </div>
  )
}
