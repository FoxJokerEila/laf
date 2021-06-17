import react, { useState, createContext } from 'react'

function HomeContext () {
  const [tags, settags] = useState([])
  const [list, setlist] = useState([])
  return {
    tags,
    settags,
    list,
    setlist
  }
}

export const LafContext = createContext(null)
export const OthersContext = createContext(null)
export const homeContext = createContext(HomeContext)
