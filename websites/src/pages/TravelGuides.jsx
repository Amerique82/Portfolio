import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { filterGuides, getGuideCategories, getGuideTags } from '../utils/travelGuides'

const CATEGORIES = getGuideCategories()
const TAGS = getGuideTags()

export default function TravelGuides() {
  const [searchParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || '')
  const [activeTags, setActiveTags] = useState([])

  useEffect(() => {
    const cat = searchParams.get('category')
    setActiveCategory(cat || '')
  }, [searchParams])

  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const clearAll = () => {
    setSearch('')
    setActiveCategory('')
    setActiveTags([])
  }

  const hasFilters = search || activeCategory || activeTags.length > 0
  const results = filterGuides({ search, category: activeCategory, tags: activeTags })

  return (
    <div>
      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&auto=format&fit=crop"
          alt="Blog hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-heading font-bold text-3xl md:text-5xl text-primary-900 mb-3">
            Plan better. Travel deeper.
          </h1>
          <p className="text-primary-800 text-sm md:text-base max-w-xl">
            Curated USA travel stories, hidden gems &amp; expert planning tips — all in one place.
          </p>
        </div>
      </div>

      <div className="container-custom py-10">

        {/* Search bar */}
        <div className="relative mb-6">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles…"
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-400 bg-white"
          />
        </div>

        {/* Category pills */}
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Category</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === ''
                  ? 'bg-primary-800 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? '' : cat)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary-800 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tag pills */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Filter by tag</p>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  activeTags.includes(tag)
                    ? 'bg-accent-500 border-accent-500 text-white'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-accent-400 hover:text-accent-500'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Active filters summary + clear */}
        {hasFilters && (
          <div className="flex items-center justify-between mb-4 py-2 border-t border-b border-gray-100">
            <p className="text-sm text-gray-500">
              <span className="font-medium text-primary-700">{results.length}</span>{' '}
              article{results.length !== 1 ? 's' : ''} found
              {activeTags.length > 0 && (
                <span className="ml-1">
                  · tags:{' '}
                  {activeTags.map((t) => (
                    <span key={t} className="inline-flex items-center gap-1 ml-1 bg-accent-50 text-accent-700 text-xs px-2 py-0.5 rounded-full">
                      {t}
                      <button onClick={() => toggleTag(t)} className="hover:text-accent-900">×</button>
                    </span>
                  ))}
                </span>
              )}
            </p>
            <button onClick={clearAll} className="text-xs text-gray-400 hover:text-primary-600 transition-colors underline">
              Clear all
            </button>
          </div>
        )}

        {/* Results grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((g) => (
              <Link key={g.id} to={`/guides/${g.id}`} className="card group flex flex-col sm:flex-row overflow-hidden">
                <div className="sm:w-48 shrink-0 overflow-hidden">
                  <img
                    src={g.image}
                    alt={g.title}
                    className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      <span className="text-xs bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full font-medium">
                        {g.category}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center">{g.readTime}</span>
                    </div>
                    <h3 className="font-heading font-bold text-primary-900 mb-1">{g.title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2">{g.excerpt}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {g.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2 py-0.5 rounded-full border ${
                            activeTags.includes(tag)
                              ? 'bg-accent-50 border-accent-300 text-accent-700'
                              : 'border-gray-200 text-gray-400'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-primary-500 text-sm font-medium mt-3">Read Guide →</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg mb-2">No articles found</p>
            <p className="text-sm">
              Try adjusting your filters or{' '}
              <button onClick={clearAll} className="text-primary-500 underline">clear all</button>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
