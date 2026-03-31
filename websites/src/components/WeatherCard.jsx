export default function WeatherCard({ weather, loading, cityName }) {
  if (loading) return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
      <div className="h-8 bg-gray-200 rounded w-1/3 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
    </div>
  )
  if (!weather) return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <p className="text-gray-400 text-sm">Weather data unavailable</p>
    </div>
  )
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <h3 className="font-heading font-bold text-primary-900 mb-3">Current Weather</h3>
      <p className="text-3xl font-bold text-primary-800">{weather.temp}°F</p>
      <p className="text-gray-600 capitalize mt-1">{weather.description}</p>
      <div className="flex gap-4 mt-3 text-sm text-gray-500">
        <span>💨 {weather.windSpeed} mph</span>
        <span>💧 {weather.humidity}%</span>
      </div>
    </div>
  )
}
