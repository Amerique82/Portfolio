const destinations = [
  {
    id: 'new-york', name: 'New York City', state: 'New York', region: 'East Coast', category: 'city',
    tagline: 'The city that never sleeps',
    description: 'Experience the iconic skyline, world-class museums, Broadway shows, and diverse neighbourhoods that make NYC one of the most exciting cities on Earth.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
    highlights: ['Times Square', 'Central Park', 'Statue of Liberty', 'Brooklyn Bridge'],
    bestMonths: 'April - June, Sept - Nov', avgBudget: '$150-300/day', duration: '4-7 days',
  },
  {
    id: 'los-angeles', name: 'Los Angeles', state: 'California', region: 'West Coast', category: 'city',
    tagline: 'The entertainment capital of the world',
    description: 'From Hollywood to Santa Monica, LA offers beaches, celebrity culture, world-class dining, and year-round sunshine.',
    image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800',
    highlights: ['Hollywood Sign', 'Santa Monica Pier', 'Griffith Observatory', 'Venice Beach'],
    bestMonths: 'March - May, Sept - Nov', avgBudget: '$120-250/day', duration: '3-5 days',
  },
  {
    id: 'miami', name: 'Miami', state: 'Florida', region: 'South', category: 'beach',
    tagline: 'Where the tropics meet urban energy',
    description: 'Art deco architecture, turquoise waters, vibrant nightlife, and Cuban coffee — Miami is a tropical paradise with a cosmopolitan edge.',
    image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800',
    highlights: ['South Beach', 'Art Deco District', 'Little Havana', 'Wynwood Walls'],
    bestMonths: 'December - April', avgBudget: '$100-220/day', duration: '3-5 days',
  },
  {
    id: 'san-francisco', name: 'San Francisco', state: 'California', region: 'West Coast', category: 'city',
    tagline: 'The Golden Gate to adventure',
    description: 'Iconic bridges, historic cable cars, Alcatraz Island, and a thriving food scene make San Francisco an unforgettable destination.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
    highlights: ['Golden Gate Bridge', 'Alcatraz Island', 'Fishermans Wharf', 'Chinatown'],
    bestMonths: 'September - November', avgBudget: '$130-260/day', duration: '3-5 days',
  },
  {
    id: 'las-vegas', name: 'Las Vegas', state: 'Nevada', region: 'West Coast', category: 'entertainment',
    tagline: 'The entertainment capital of the world',
    description: 'Beyond the casinos, Las Vegas offers world-class shows, fine dining, desert adventures, and the stunning Grand Canyon nearby.',
    image: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=800',
    highlights: ['The Strip', 'Grand Canyon Day Trip', 'Fremont Street', 'Bellagio Fountains'],
    bestMonths: 'March - May, Oct - Nov', avgBudget: '$100-300/day', duration: '2-4 days',
  },
  {
    id: 'washington-dc', name: 'Washington D.C.', state: 'District of Columbia', region: 'East Coast', category: 'culture',
    tagline: 'The heart of American history',
    description: 'Free world-class museums, iconic monuments, and the seat of American government — all walkable along the National Mall.',
    image: 'https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=800',
    highlights: ['National Mall', 'Smithsonian Museums', 'Lincoln Memorial', 'Georgetown'],
    bestMonths: 'March - May, Sept - Nov', avgBudget: '$120-220/day', duration: '3-5 days',
  },
]

export function getCategories() { return [...new Set(destinations.map((d) => d.category))] }
export function getRegions() { return [...new Set(destinations.map((d) => d.region))] }
export function filterDestinations({ search = '', category = '', region = '' }) {
  return destinations.filter((d) => {
    const s = !search || d.name.toLowerCase().includes(search.toLowerCase()) || d.state.toLowerCase().includes(search.toLowerCase())
    const c = !category || d.category === category
    const r = !region || d.region === region
    return s && c && r
  })
}
export function getDestinationById(id) { return destinations.find((d) => d.id === id) }
export default destinations
