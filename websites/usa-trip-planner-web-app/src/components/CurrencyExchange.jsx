import { useState, useEffect } from 'react'

const currencies = [
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' }, { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
  { code: 'MXN', name: 'Mexican Peso', flag: '🇲🇽' }, { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' }, { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' },
  { code: 'BRL', name: 'Brazilian Real', flag: '🇧🇷' }, { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳' },
]

export default function CurrencyExchange() {
  const [amount, setAmount] = useState(100)
  const [from, setFrom] = useState('GBP')
  const [rates, setRates] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.frankfurter.dev/v1/latest?base=USD&symbols=${currencies.map(c => c.code).join(',')}`)
      .then(r => r.json()).then(d => { setRates(d.rates); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const converted = rates && rates[from] ? (amount / rates[from]).toFixed(2) : null

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="font-heading font-bold text-primary-900 mb-4">Currency Converter</h3>
      {loading ? <p className="text-gray-400 text-sm">Loading rates...</p> : (
        <div>
          <div className="flex gap-3 mb-4">
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-24 focus:outline-none focus:ring-2 focus:ring-primary-500" />
            <select value={from} onChange={e => setFrom(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
              {currencies.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
            </select>
          </div>
          {converted && <p className="text-xl font-bold text-primary-800">= ${converted} USD</p>}
        </div>
      )}
    </div>
  )
}
