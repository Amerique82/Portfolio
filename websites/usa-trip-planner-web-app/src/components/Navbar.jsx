import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const lnk = ({ isActive }) => `text-sm font-medium transition-colors duration-200 ${isActive ? 'text-accent-500 border-b-2 border-accent-500 pb-1' : 'text-gray-300 hover:text-white'}`
  const mob = "block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md"

  return (
    <nav className="bg-primary-900 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo only — no text */}
          <Link to="/">
            <img src="/usa_trip_planner_white_logo.png" alt="USA Trip Planner" className="h-14 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={lnk} end>Home</NavLink>
            <NavLink to="/destinations" className={lnk}>Destinations</NavLink>
            <NavLink to="/guides" className={lnk}>Blog</NavLink>
            <NavLink to="/itineraries" className={lnk}>Itineraries</NavLink>
            <NavLink to="/create" className={lnk}>Create Yours</NavLink>
            <NavLink to="/deals" className={lnk}>Deals</NavLink>
            <NavLink to="/about" className={lnk}>About</NavLink>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md text-gray-300 hover:bg-white/10" aria-label="Toggle menu">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-2">
            <NavLink to="/" className={mob} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/destinations" className={mob} onClick={() => setOpen(false)}>Destinations</NavLink>
            <NavLink to="/guides" className={mob} onClick={() => setOpen(false)}>Blog</NavLink>
            <NavLink to="/itineraries" className={mob} onClick={() => setOpen(false)}>Itineraries</NavLink>
            <NavLink to="/create" className={mob} onClick={() => setOpen(false)}>Create Yours</NavLink>
            <NavLink to="/deals" className={mob} onClick={() => setOpen(false)}>Deals</NavLink>
            <NavLink to="/about" className={mob} onClick={() => setOpen(false)}>About</NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}
