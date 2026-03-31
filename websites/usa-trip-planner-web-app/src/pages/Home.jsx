import { Link } from 'react-router-dom'
import destinations from '../utils/destinations'
import itineraries from '../utils/itineraries'
import guides from '../utils/travelGuides'
import { CATEGORIES } from '../utils/travelGuides'

const instaPhotos = [
  'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400',
  'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400',
  'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=400',
  'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=400',
  'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=400',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
]

export default function Home() {
  return (
    <div>
      {/* ====== HERO ====== */}
      <section className="relative min-h-[520px] flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1600" alt="Golden Gate Bridge" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary-900/70"></div>
        </div>
        <div className="relative container-custom py-20 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
              Discover the <span className="text-accent-500">USA</span> Your Way
            </h1>
            <p className="text-gray-300 text-lg mb-8">Plan your perfect American adventure with curated itineraries, real-time travel data, and destination guides — all in one place.</p>
            <div className="flex gap-4">
              <Link to="/destinations" className="btn-accent px-8 py-3">Explore Destinations</Link>
              <Link to="/itineraries" className="border border-white/40 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium text-sm">Download Itineraries</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CATEGORY PILLS ====== */}
      <div className="border-b border-gray-100 bg-white">
        <div className="container-custom py-4 flex flex-wrap items-center gap-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mr-2">Explore</p>
          <Link
            to="/guides"
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary-800 text-white hover:bg-primary-700 transition-colors"
          >
            All
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              to={`/guides?category=${encodeURIComponent(cat)}`}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-primary-800 hover:text-white transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* ====== FEATURED DESTINATIONS — 3 cards ====== */}
      <section className="container-custom py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-heading font-bold text-primary-900">Featured Destinations</h2>
            <p className="text-gray-500 text-sm mt-1">Hand-picked spots we love</p>
          </div>
          <Link to="/destinations" className="text-primary-500 text-sm font-medium hover:text-primary-600">View all →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.slice(0, 3).map(d => (
            <Link key={d.id} to={`/destinations/${d.id}`} className="group relative rounded-xl overflow-hidden h-72 shadow-md">
              <img src={d.image} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute top-4 left-4 bg-primary-500/90 text-white text-xs font-medium px-3 py-1 rounded-full capitalize">{d.category}</span>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-heading font-bold">{d.name}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-300 mt-1">
                  <span>📍 {d.state}</span>
                  <span>💰 {d.avgBudget}</span>
                  <span>🗓️ {d.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ====== TWO COLUMNS: Latest Blog + Top Itineraries ====== */}
      <section className="container-custom py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Latest in our Blog — 2x2 grid */}
          <div>
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-xl font-heading font-bold text-primary-900">Latest in our Blog</h2>
              <Link to="/guides" className="text-primary-500 text-sm font-medium hover:text-primary-600">View All →</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {guides.slice(0, 4).map(g => (
                <Link key={g.id} to={`/guides/${g.id}`} className="group rounded-xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="overflow-hidden h-32">
                    <img src={g.image} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-3">
                    <span className="text-xs bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full">{g.category}</span>
                    <h3 className="text-sm font-bold text-primary-900 line-clamp-2 mt-1">{g.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Top Itineraries */}
          <div>
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-xl font-heading font-bold text-primary-900">Top Itineraries</h2>
              <Link to="/itineraries" className="text-primary-500 text-sm font-medium hover:text-primary-600">View All →</Link>
            </div>
            <div className="space-y-3">
              {itineraries.map(i => (
                <Link key={i.id} to={`/itineraries/${i.id}`} className="flex gap-4 p-3 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow group">
                  <img src={i.image} alt={i.title} className="w-24 h-20 object-cover rounded-lg shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex gap-2 mb-1">
                      <span className="text-xs bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full capitalize">{i.type}</span>
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{i.duration}</span>
                    </div>
                    <h3 className="text-sm font-bold text-primary-900 group-hover:text-primary-500 transition-colors">{i.title}</h3>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-1">{i.summary}</p>
                  </div>
                </Link>
              ))}
              {/* 4th placeholder */}
              <div className="flex gap-4 p-3 bg-gray-50 border border-dashed border-gray-300 rounded-xl">
                <div className="w-24 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-2xl shrink-0">🗺️</div>
                <div className="flex-1">
                  <div className="flex gap-2 mb-1">
                    <span className="text-xs bg-gray-200 text-gray-400 px-2 py-0.5 rounded-full">Couple</span>
                    <span className="text-xs bg-gray-200 text-gray-400 px-2 py-0.5 rounded-full">7 days</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-400">California Coast Road Trip — 7 Days</h3>
                  <p className="text-xs text-gray-400 mt-1">Drive the Pacific Coast Highway from LA to San Francisco, stopping at the most...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHAT WE DO — split screen ====== */}
      <section className="grid grid-cols-1 md:grid-cols-2 mt-16 min-h-[480px]">
        <div className="bg-primary-900 text-white p-10 md:py-20 md:pl-20 md:pr-16 flex flex-col justify-start">
          <h2 className="text-4xl md:text-5xl font-heading font-light mt-4 mb-12 leading-tight">What we do?</h2>
          <p className="text-gray-300 leading-relaxed mb-10 text-base">
            We help travelers like you plan unforgettable adventures across the United States — without the stress.
          </p>
          <div>
            <Link to="/create" className="btn-accent inline-block px-8 py-3 text-base">Start Planning Now</Link>
          </div>
        </div>
        <div className="bg-white p-10 md:py-20 md:pl-16 md:pr-20 flex flex-col justify-start">
          <div className="mb-4">
            <img src="/usa_trip_planner_blue_logo.png" alt="USA Trip Planner" className="h-20 w-auto" />
          </div>
          <p className="text-gray-600 leading-relaxed mb-6 text-base mt-2">
            Our platform offers ready-to-use itineraries, detailed destination guides, planning tools, and exclusive travel deals all in one place.
          </p>
          <p className="text-gray-600 leading-relaxed text-base">
            Whether you're road-tripping solo, exploring as a couple, or traveling with family, we've got you covered with practical resources and inspiring ideas.{' '}
            <Link to="/about" className="text-accent-500 font-medium hover:text-accent-600">Read More.</Link>
          </p>
        </div>
      </section>

      {/* ====== CTA BANNER ====== */}
      <section className="bg-white py-16 mt-16">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-4">Ready to Plan Your Adventure?</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Create your own personalised itinerary in minutes. Pick your destinations, set your duration, and build the trip of a lifetime.
          </p>
          <Link to="/create" className="btn-accent px-10 py-3 text-base">Start Planning Now</Link>
        </div>
      </section>

      {/* ====== INSTAGRAM ====== */}
      <section className="container-custom py-12 text-center">
        <h2 className="text-2xl font-heading font-bold text-primary-900 mb-2">Follow Us on Instagram</h2>
        <p className="text-gray-500 text-sm mb-8">@usatripplanner — Travel inspiration, tips, and behind-the-scenes content.</p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
          {instaPhotos.map((src, i) => (
            <a key={i} href="https://www.instagram.com/usatripplanner/" target="_blank" rel="noopener noreferrer" className="group relative rounded-xl overflow-hidden aspect-square">
              <img src={src} alt={`Instagram photo ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/30 transition-colors flex items-center justify-center">
                <svg className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
        <a href="https://www.instagram.com/usatripplanner/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-primary-800 text-primary-900 font-medium px-6 py-2 rounded-full hover:bg-primary-50 transition-colors text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          Follow @usatripplanner
        </a>
      </section>
    </div>
  )
}
