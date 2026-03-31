export const CATEGORIES = [
  'Destinations',
  'Road Trips',
  'Travel Tips',
  'Budget Travel',
  'Food & Dining',
  'Travel Styles',
]

export const TAGS = [
  'Solo Travel',
  'Couples Getaways',
  'Family Friendly',
  'Weekend Trips',
  'First Time in USA',
  'City Escapes',
  'Beach Holidays',
  'National Parks',
]

const guides = [
  {
    id: 'san-francisco-guide',
    title: 'The Ultimate San Francisco Guide',
    category: 'Destinations',
    tags: ['City Escapes', 'First Time in USA', 'Couples Getaways', 'Solo Travel'],
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop',
    excerpt: 'Everything you need to know about visiting the Golden Gate city.',
    sections: [
      { title: 'Getting Around', text: 'San Francisco is best explored by cable car, BART, and on foot. Buy a Clipper card for easy transit access.' },
      { title: 'Where to Stay', text: 'Union Square for central access, Fishermans Wharf for tourists, Mission District for local vibes.' },
      { title: 'Must-See Spots', text: 'Golden Gate Bridge, Alcatraz, Chinatown, Painted Ladies, and Lombard Street are essential visits.' },
    ],
  },
  {
    id: 'budget-tips',
    title: 'Budget Travel Tips for the USA',
    category: 'Budget Travel',
    tags: ['Solo Travel', 'First Time in USA', 'Weekend Trips'],
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop',
    excerpt: 'How to explore America without breaking the bank.',
    sections: [
      { title: 'Accommodation', text: 'Use hostels, Airbnb, and motel chains like Motel 6. Book midweek for lower rates.' },
      { title: 'Food', text: 'Eat at food trucks, diners, and supermarket delis. Lunch specials are your best friend.' },
      { title: 'Transport', text: 'Greyhound buses and Amtrak trains are affordable. Rent a car for road trips and split costs.' },
    ],
  },
  {
    id: 'first-time-usa',
    title: 'First Time in the USA: What to Know',
    category: 'Travel Tips',
    tags: ['First Time in USA', 'Solo Travel', 'Couples Getaways', 'Family Friendly'],
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop',
    excerpt: 'Essential tips for international visitors arriving in America.',
    sections: [
      { title: 'Tipping Culture', text: 'Tip 15-20% at restaurants, $1-2 per drink at bars, and $2-5 per night for hotel housekeeping.' },
      { title: 'Driving', text: 'Americans drive on the right. An International Driving Permit is recommended but not always required.' },
      { title: 'Safety', text: 'The USA is generally safe for tourists. Use common sense in cities and keep valuables secure.' },
    ],
  },
  {
    id: 'usa-food-guide',
    title: 'Eating Across America: A Food & Dining Guide',
    category: 'Food & Dining',
    tags: ['City Escapes', 'Couples Getaways', 'Family Friendly', 'Weekend Trips'],
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop',
    excerpt: 'From deep-dish pizza to Southern BBQ — the essential dishes and restaurants to try across the USA.',
    sections: [
      { title: 'Regional Classics', text: "Don't leave the USA without trying New York pizza, Texas BBQ brisket, New Orleans gumbo, and a proper Philly cheesesteak." },
      { title: 'Where to Eat', text: 'Explore local diners for breakfast, food halls for variety, and farm-to-table restaurants for the freshest seasonal ingredients.' },
      { title: 'Food Etiquette', text: 'Tipping 18-20% is standard. Many restaurants allow BYO wine with a corkage fee. Portions are generous — sharing is common and accepted.' },
    ],
  },
]

export function getGuideCategories() { return CATEGORIES }
export function getGuideTags() { return TAGS }

export function filterGuides({ search = '', category = '', tags = [] }) {
  return guides.filter((g) => {
    const matchSearch = !search || g.title.toLowerCase().includes(search.toLowerCase()) || g.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchCategory = !category || g.category === category
    const matchTags = tags.length === 0 || tags.every((t) => g.tags.includes(t))
    return matchSearch && matchCategory && matchTags
  })
}

export function getGuideById(id) { return guides.find((g) => g.id === id) }

export default guides
