const itineraries = [
  {
    id: 'nyc-first-timers', title: '5 Days in New York City for First-Timers', destination: 'New York City',
    duration: '5 days', type: 'couple', region: 'East Coast',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
    summary: 'The ultimate NYC experience — from Times Square to Brooklyn.',
    days: [
      { day: 1, title: 'Midtown Manhattan', activities: ['Times Square', 'Top of the Rock', 'Broadway show'] },
      { day: 2, title: 'Downtown & Statue of Liberty', activities: ['Statue of Liberty ferry', 'Wall Street', '9/11 Memorial'] },
      { day: 3, title: 'Central Park & Museums', activities: ['Central Park walk', 'Metropolitan Museum of Art', 'Upper East Side'] },
      { day: 4, title: 'Brooklyn Day', activities: ['Brooklyn Bridge walk', 'DUMBO', 'Brooklyn Heights Promenade'] },
      { day: 5, title: 'Culture & Shopping', activities: ['SoHo shopping', 'Little Italy', 'Chinatown'] },
    ],
  },
  {
    id: 'california-coast', title: 'California Coast Road Trip', destination: 'California',
    duration: '7 days', type: 'road-trip', region: 'West Coast',
    image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800',
    summary: 'Drive the Pacific Coast Highway from San Francisco to Los Angeles.',
    days: [
      { day: 1, title: 'San Francisco', activities: ['Golden Gate Bridge', 'Fishermans Wharf', 'Cable car ride'] },
      { day: 2, title: 'Monterey & Carmel', activities: ['17-Mile Drive', 'Monterey Bay Aquarium', 'Carmel-by-the-Sea'] },
      { day: 3, title: 'Big Sur', activities: ['Bixby Bridge', 'McWay Falls', 'Pfeiffer Beach'] },
      { day: 4, title: 'San Luis Obispo', activities: ['Hearst Castle', 'Downtown SLO', 'Bubblegum Alley'] },
      { day: 5, title: 'Santa Barbara', activities: ['Stearns Wharf', 'Old Mission', 'State Street'] },
      { day: 6, title: 'Malibu', activities: ['Zuma Beach', 'Point Dume', 'Malibu Pier'] },
      { day: 7, title: 'Los Angeles', activities: ['Hollywood Sign', 'Griffith Observatory', 'Santa Monica Pier'] },
    ],
  },
  {
    id: 'florida-family', title: 'Florida Family Adventure', destination: 'Florida',
    duration: '6 days', type: 'family', region: 'South',
    image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800',
    summary: 'Theme parks, beaches, and wildlife — perfect for families.',
    days: [
      { day: 1, title: 'Arrival in Orlando', activities: ['Check into hotel', 'Disney Springs', 'Welcome dinner'] },
      { day: 2, title: 'Magic Kingdom', activities: ['Magic Kingdom full day', 'Fireworks show'] },
      { day: 3, title: 'Universal Studios', activities: ['Universal Studios', 'Wizarding World of Harry Potter'] },
      { day: 4, title: 'Kennedy Space Center', activities: ['Space Centre tour', 'Cocoa Beach afternoon'] },
      { day: 5, title: 'Drive to Miami', activities: ['Drive to Miami', 'South Beach sunset', 'Ocean Drive dinner'] },
      { day: 6, title: 'Miami Exploration', activities: ['Little Havana walking tour', 'Wynwood Walls', 'Departure'] },
    ],
  },
]

export function getTypes() { return [...new Set(itineraries.map((i) => i.type))] }
export function getRegions() { return [...new Set(itineraries.map((i) => i.region))] }
export function filterItineraries({ search = '', type = '', region = '' }) {
  return itineraries.filter((i) => {
    const s = !search || i.title.toLowerCase().includes(search.toLowerCase()) || i.destination.toLowerCase().includes(search.toLowerCase())
    const t = !type || i.type === type
    const r = !region || i.region === region
    return s && t && r
  })
}
export function getItineraryById(id) { return itineraries.find((i) => i.id === id) }
export default itineraries
