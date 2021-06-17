import React, { useState, useEffect } from 'react'
import { createModel } from 'hox'

function ListNow () {
  const [lis, setlis] = useState([])
  return {
    lis,
    setlis
  }
}

export const list = createModel(ListNow)
