import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

export default function CookieBanner() {
  const { cookieConsent, acceptCookies } = useAppContext()
  if (cookieConsent) return null
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-900 text-white p-4 z-50 shadow-lg">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          We use cookies to improve your experience. By continuing, you agree to our use of cookies in accordance with GDPR.{' '}
          <Link to="/about" className="text-accent-500 hover:text-accent-400">Learn more.</Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={acceptCookies} className="bg-accent-500 hover:bg-accent-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors whitespace-nowrap">Accept All</button>
          <button onClick={acceptCookies} className="border border-gray-500 text-gray-300 hover:bg-white/10 text-sm font-medium px-5 py-2 rounded-lg transition-colors whitespace-nowrap">Essential Only</button>
        </div>
      </div>
    </div>
  )
}
