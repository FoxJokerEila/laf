import React, { useState, useEffect } from 'react'
import { createModel } from 'hox'
import fuzzyQuery from '../service/lost/fuzzyQuery'
// import { LafContext } from './context'
import Laf from '../pages/laf/laf'

function ChangeLafNumber () {
  // const { list } = useContext(LafContext)
  const [lafNumber, setlafNumber] = useState(0)
  function change (id) {
    console.log('laf changed')
    setlafNumber(id)
    // fuzzyQuery({ categoryId: id })
    //   .then(res => {
    //     Laf.setlist(res.data.data)
    //   })
    //   .catch(err => {})
  }
  return {
    lafNumber,
    change
  }
}

function ChangeOthersNumber () {
  const [othersNumber, setothersNumber] = useState(0)
  function change (id) {
    setothersNumber(id)
    console.log('others changed')
  }
  return {
    othersNumber,
    change
  }
}

const changeLafN = createModel(ChangeLafNumber)
const changeOthersN = createModel(ChangeOthersNumber)

export { changeLafN, changeOthersN }
