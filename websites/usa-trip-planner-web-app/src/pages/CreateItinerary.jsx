import { useState } from 'react'
import { useAppContext } from '../context/AppContext'

export default function CreateItinerary() {
  const { addUserItinerary, userItineraries, removeUserItinerary } = useAppContext()
  const [form, setForm] = useState({ title: '', destination: '', duration: '', style: '', notes: '' })
  const [days, setDays] = useState([{ id: 1, title: '', activities: [''] }])
  const [errors, setErrors] = useState({})
  const [saved, setSaved] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.title.trim()) e.title = 'Title is required'
    if (!form.destination.trim()) e.destination = 'Destination is required'
    if (!form.duration) e.duration = 'Duration is required'
    if (!form.style) e.style = 'Style is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    addUserItinerary({ ...form, days })
    setSaved(true)
    setForm({ title: '', destination: '', duration: '', style: '', notes: '' })
    setDays([{ id: 1, title: '', activities: [''] }])
    setTimeout(() => setSaved(false), 3000)
  }

  const addDay = () => setDays(p => [...p, { id: Date.now(), title: '', activities: [''] }])
  const updateDay = (id, field, val) => setDays(p => p.map(d => d.id === id ? { ...d, [field]: val } : d))
  const addActivity = (id) => setDays(p => p.map(d => d.id === id ? { ...d, activities: [...d.activities, ''] } : d))
  const updateActivity = (dayId, idx, val) => setDays(p => p.map(d => d.id === dayId ? { ...d, activities: d.activities.map((a, i) => i === idx ? val : a) } : d))
  const removeActivity = (dayId, idx) => setDays(p => p.map(d => d.id === dayId ? { ...d, activities: d.activities.filter((_, i) => i !== idx) } : d))

  const download = (it) => {
    let text = `${it.title}\n${'='.repeat(40)}\nDestination: ${it.destination}\nDuration: ${it.duration}\nStyle: ${it.style}\n`
    if (it.notes) text += `Notes: ${it.notes}\n`
    it.days.forEach(d => { text += `\nDay: ${d.title}\n`; d.activities.forEach(a => { if (a) text += `  - ${a}\n` }) })
    const blob = new Blob([text], { type: 'text/plain' })
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${it.title.replace(/\s+/g, '-')}.txt`; a.click()
  }

  return (
    <div className="container-custom py-10">
      <h1 className="section-title text-center">Create Your Itinerary</h1>
      <p className="section-subtitle text-center">Plan your perfect trip step by step.</p>
      {saved && <div className="max-w-2xl mx-auto mb-6 bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 text-sm">Itinerary saved!</div>}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="card p-6 mb-6">
          <h2 className="font-heading font-bold text-primary-900 mb-4">Trip Details</h2>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Title *</label>
            <input value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Destination *</label>
              <input value={form.destination} onChange={e => setForm({...form, destination: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
              {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Duration *</label>
              <select value={form.duration} onChange={e => setForm({...form, duration: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="">Select</option>
                {['1-3 days','4-7 days','1-2 weeks','2+ weeks'].map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              {errors.duration && <p className="text-red-500 text-xs mt-1">{errors.duration}</p>}
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Style *</label>
              <select value={form.style} onChange={e => setForm({...form, style: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="">Select</option>
                {['Solo','Couple','Family','Friends','Road Trip'].map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.style && <p className="text-red-500 text-xs mt-1">{errors.style}</p>}
            </div>
          </div>
          <label className="block text-sm text-gray-600 mb-1">Notes (optional)</label>
          <textarea value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} rows={2} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
        </div>

        <div className="card p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-heading font-bold text-primary-900">Day-by-Day Plan</h2>
            <button type="button" onClick={addDay} className="text-primary-500 text-sm font-medium">+ Add Day</button>
          </div>
          {days.map((day, di) => (
            <div key={day.id} className="border border-gray-200 rounded-lg p-4 mb-4">
              <h3 className="font-bold text-primary-800 mb-2">Day {di + 1}</h3>
              <label className="block text-sm text-gray-600 mb-1">Day Title</label>
              <input value={day.title} onChange={e => updateDay(day.id, 'title', e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
              <label className="block text-sm text-gray-600 mb-1">Activities</label>
              {day.activities.map((a, ai) => (
                <div key={ai} className="flex gap-2 mb-2">
                  <input value={a} onChange={e => updateActivity(day.id, ai, e.target.value)} className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  {day.activities.length > 1 && <button type="button" onClick={() => removeActivity(day.id, ai)} className="text-gray-400 hover:text-red-500">×</button>}
                </div>
              ))}
              <button type="button" onClick={() => addActivity(day.id)} className="text-primary-500 text-xs">+ Add Activity</button>
            </div>
          ))}
        </div>

        <button type="submit" className="btn-accent w-full text-base py-4">Save My Itinerary</button>
      </form>

      {userItineraries.length > 0 && (
        <div className="max-w-2xl mx-auto mt-10">
          <h2 className="font-heading font-bold text-primary-900 mb-4">Saved Itineraries</h2>
          {userItineraries.map(it => (
            <div key={it.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg mb-3">
              <div>
                <p className="font-bold text-primary-800">{it.title}</p>
                <p className="text-sm text-gray-500">{it.destination} · {it.duration}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => download(it)} className="btn-primary text-xs px-3 py-1">Download</button>
                <button onClick={() => removeUserItinerary(it.id)} className="text-red-500 text-xs">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
