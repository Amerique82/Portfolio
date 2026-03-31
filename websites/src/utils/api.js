// Geocode city name to coordinates using Open-Meteo
async function geocode(city) {
  try {
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`)
    const data = await res.json()
    if (data.results && data.results.length > 0) {
      return { lat: data.results[0].latitude, lon: data.results[0].longitude }
    }
    return null
  } catch { return null }
}

// Get current weather from Open-Meteo (FREE, no key)
export async function getWeather(city) {
  try {
    const coords = await geocode(city)
    if (!coords) return null
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph`
    )
    const data = await res.json()
    const c = data.current
    const descriptions = {
      0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
      45: 'Foggy', 48: 'Rime fog', 51: 'Light drizzle', 53: 'Drizzle', 55: 'Dense drizzle',
      61: 'Slight rain', 63: 'Rain', 65: 'Heavy rain', 71: 'Slight snow', 73: 'Snow', 75: 'Heavy snow',
      80: 'Rain showers', 81: 'Moderate showers', 82: 'Violent showers', 95: 'Thunderstorm',
    }
    return {
      temp: Math.round(c.temperature_2m),
      description: descriptions[c.weather_code] || 'Unknown',
      humidity: c.relative_humidity_2m,
      windSpeed: Math.round(c.wind_speed_10m),
      code: c.weather_code,
    }
  } catch { return null }
}

// Get forecast for packing tool
export async function getForecast(city, days = 7) {
  try {
    const coords = await geocode(city)
    if (!coords) return null
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weather_code&temperature_unit=fahrenheit&forecast_days=${days}`
    )
    const data = await res.json()
    return data.daily
  } catch { return null }
}
