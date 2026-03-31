import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="container-custom py-10">
      <h1 className="section-title text-center">About USA Trip Planner</h1>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8 mt-8">
          <div>
            <h2 className="text-xl font-heading font-bold text-primary-900 mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">USA Trip Planner exists to simplify the process of planning a trip to the United States. We bring together curated itineraries, destination guides, real-time weather data, and practical planning tools into one place — so you can spend less time researching and more time exploring.</p>
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-primary-900 mb-3">Who We Help</h2>
            <p className="text-gray-600 leading-relaxed">Our platform is designed for independent travellers — solo adventurers, couples, families, and groups of friends — who want structured, practical advice for their USA trip. Whether it is your first visit or your tenth, we provide the tools and inspiration you need.</p>
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-primary-900 mb-3">Privacy & Accessibility</h2>
            <p className="text-gray-600 leading-relaxed">This website complies with GDPR and the UK Data Protection Act. We use cookies only with your explicit consent, and we never sell or share personal data.</p>
            <p className="text-gray-600 leading-relaxed mt-2">We are committed to making this platform accessible to all users. We follow WCAG 2.1 AA guidelines and continuously work to improve the accessibility of our content.</p>
          </div>
        </div>
        <div className="text-center mt-12"><Link to="/destinations" className="btn-primary">Start Exploring</Link></div>
      </div>
    </div>
  )
}
