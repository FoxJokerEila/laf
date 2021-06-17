import React, { useState, useEffect } from 'react'
import { createModel } from 'hox'
import fuzzyQuery from '../service/lost/fuzzyQuery'
import fuzzyQueryInfo from '../service/information/fuzzyQuery'

import { list } from './list'

function ChangeLafNumber () {
  const LIST = list()
  // const { list } = useContext(LafContext)
  const [lafNumber, setlafNumber] = useState(0)
  function change (id) {
    console.log(id)
    console.log('laf changed')
    setlafNumber(id)
    console.log(lafNumber)
    fuzzyQuery({ categoryId: id })
      .then(res => {
        console.log(res.data.data)
        LIST.setlis(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return {
    lafNumber,
    change
  }
}

function ChangeOthersNumber () {
  const LIST = list()
  const [othersNumber, setothersNumber] = useState(0)
  function change (id) {
    setothersNumber(id)
    console.log('others changed')
    setothersNumber(id)
    console.log(othersNumber)
    fuzzyQueryInfo({ categoryId: id })
      .then(res => {
        console.log(res.data.data)
        LIST.setlis(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return {
    othersNumber,
    change
  }
}

const changeLafN = createModel(ChangeLafNumber)
const changeOthersN = createModel(ChangeOthersNumber)

export { changeLafN, changeOthersN }
