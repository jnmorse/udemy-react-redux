import { useState } from 'react'

export default function useGetSeason(initState) {
  const [locationData, updateSeason] = useState(initState)

  let season = null

  const { latitude, month } = locationData

  if (month > 2 && month < 9) {
    latitude > 0 ? season = 'summer' : season = 'winter'
  }

  latitude > 0 ? season = 'winter' : season = 'summer'

  return [season, updateSeason]
}