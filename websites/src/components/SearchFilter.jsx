export default function SearchFilter({ filters, onFilterChange, options = [] }) {
  const update = (key, value) => onFilterChange({ ...filters, [key]: value })
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <input type="text" placeholder="Search..." value={filters.search || ''} onChange={(e) => update('search', e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 w-full sm:w-48" />
      {options.map((opt) => (
        <select key={opt.key} value={filters[opt.key] || ''} onChange={(e) => update(opt.key, e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
          <option value="">{opt.label}</option>
          {opt.values.map((v) => (<option key={v} value={v}>{v}</option>))}
        </select>
      ))}
    </div>
  )
}
