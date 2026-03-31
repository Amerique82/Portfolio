import { useParams, Link } from 'react-router-dom'
import { getGuideById } from '../utils/travelGuides'
import ShareThis from '../components/ShareThis'

export default function GuideDetail() {
  const { id } = useParams()
  const guide = getGuideById(id)
  if (!guide) return <div className="container-custom py-20 text-center"><h1 className="text-2xl font-bold mb-4">Guide not found</h1><Link to="/guides" className="text-primary-500">← Back to Blog</Link></div>
  return (
    <div>
      <div className="relative h-64 md:h-80">
        <img src={guide.image} alt={guide.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-6 left-0 right-0 container-custom text-white">
          <span className="bg-accent-500 text-white text-xs px-2 py-1 rounded-full">{guide.category}</span>
          <h1 className="text-3xl font-heading font-bold mt-2">{guide.title}</h1>
          <p className="text-gray-300 text-sm mt-1">{guide.readTime}</p>
        </div>
      </div>
      <div className="container-custom py-10 max-w-3xl">
        {guide.sections.map((s, i) => (
          <div key={i} className="mb-8">
            <h2 className="text-xl font-heading font-bold text-primary-900 mb-3">{s.title}</h2>
            <p className="text-gray-600 leading-relaxed">{s.text}</p>
          </div>
        ))}
        <ShareThis title={guide.title} />
        <div className="mt-8 pt-6 border-t border-gray-200 flex gap-4">
          <Link to="/guides" className="text-primary-500 text-sm font-medium">← More from Blog</Link>
          <Link to="/itineraries" className="text-primary-500 text-sm font-medium">Browse Itineraries →</Link>
        </div>
      </div>
    </div>
  )
}
