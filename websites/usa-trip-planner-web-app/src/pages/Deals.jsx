import { Link } from 'react-router-dom'

const categories = [
  { name: 'Hotels', items: [
    { name: 'Booking.com', url: 'https://www.booking.com', description: 'Wide selection of hotels and apartments across the USA.' },
    { name: 'Hostelworld', url: 'https://www.hostelworld.com', description: 'Budget-friendly hostels for solo and backpacker travellers.' },
  ]},
  { name: 'Flights', items: [
    { name: 'Skyscanner', url: 'https://www.skyscanner.net', description: 'Compare flights from hundreds of airlines.' },
    { name: 'Google Flights', url: 'https://www.google.com/flights', description: 'Track prices and find the cheapest dates to fly.' },
  ]},
  { name: 'Car Rental', items: [
    { name: 'Rentalcars.com', url: 'https://www.rentalcars.com', description: 'Compare car rental prices from major providers.' },
    { name: 'Turo', url: 'https://www.turo.com', description: 'Rent cars from local hosts — often cheaper than agencies.' },
  ]},
  { name: 'Insurance', items: [
    { name: 'World Nomads', url: 'https://www.worldnomads.com', description: 'Flexible travel insurance designed for adventurous travellers.' },
    { name: 'SafetyWing', url: 'https://www.safetywing.com', description: 'Affordable travel medical insurance for long trips.' },
  ]},
  { name: 'Activities', items: [
    { name: 'GetYourGuide', url: 'https://www.getyourguide.com', description: 'Book tours, attractions, and experiences worldwide.' },
    { name: 'Viator', url: 'https://www.viator.com', description: 'Thousands of tours and activities in every US city.' },
  ]},
  { name: 'Passes', items: [
    { name: 'CityPASS', url: 'https://www.citypass.com', description: 'Bundled admission to top attractions at a discount.' },
    { name: 'Go City', url: 'https://www.gocity.com', description: 'All-inclusive or pick-and-choose attraction passes.' },
  ]},
]

export default function Deals() {
  return (
    <div className="container-custom py-10">
      <h1 className="section-title">Deals & Discounts</h1>
      <p className="section-subtitle">We only recommend trusted services.</p>
      <div className="space-y-8">
        {categories.map(cat => (
          <div key={cat.name}>
            <h2 className="font-heading font-bold text-primary-900 text-lg mb-3">{cat.name}</h2>
            <div className="space-y-3">
              {cat.items.map(item => (
                <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                  <div className="flex-1">
                    <span className="text-xs bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full">{item.name}</span>
                    <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                  </div>
                  <span className="text-primary-500 text-sm font-medium shrink-0 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
