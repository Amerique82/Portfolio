import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [favourites, setFavourites] = useState([])
  const [userItineraries, setUserItineraries] = useState([])
  const [cookieConsent, setCookieConsent] = useState(false)

  const toggleFavourite = (id) => {
    setFavourites((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id])
  }
  const isFavourite = (id) => favourites.includes(id)
  const addUserItinerary = (itinerary) => {
    const n = { ...itinerary, id: `user-${Date.now()}`, createdAt: new Date().toISOString() }
    setUserItineraries((prev) => [...prev, n])
    return n
  }
  const removeUserItinerary = (id) => setUserItineraries((prev) => prev.filter((i) => i.id !== id))
  const acceptCookies = () => setCookieConsent(true)

  return (
    <AppContext.Provider value={{ favourites, toggleFavourite, isFavourite, userItineraries, addUserItinerary, removeUserItinerary, cookieConsent, acceptCookies }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useAppContext must be used within AppProvider')
  return ctx
}
