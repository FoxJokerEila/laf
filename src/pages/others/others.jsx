import React, { useState, useEffect } from 'react'
import NewLaf from '../../components/laf/newLaf'
import LafList from '../../components/laf/lafList'
import Tags from '../../components/tags/tags'

import fuzzyQuery from '../../service/information/fuzzyQuery'
import selectAll from '../../service/informationCategory/selectAll'

// import { OthersContext } from '../../model/context'
import { LafContext } from '../../model/context'

import { Layout } from 'antd'
import { Divider } from 'antd'
import { Input } from 'antd'

import './others.css'

const { Search } = Input
const onSearch = value => console.log(value)
const types = ['1', '2']
// const data = [
//   {
//     type: '找人',
//     cards: []
//   },
//   {
//     type: '找♂对象',
//     cards: []
//   },
//   {
//     type: '找♀对象',
//     cards: []
//   },
//   {
//     type: '找工作',
//     cards: []
//   }
// ]

const tags = [
  { type: '失物招领', id: 0 },
  { type: '寻物启事', id: 1 },
  { type: '电子产品', id: 2 }
]

function Others (props) {
  const [tags, settags] = useState([])
  const [list, setlist] = useState([])
  useEffect(() => {
    selectAll()
      .then(res => {
        settags(res.data.data)
        console.log(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })

    fuzzyQuery()
      .then(res => {
        setlist(res.data.data)
        console.log(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
    // const result = selectAll().value
    // console.log(result)
    // settags(result)
  }, [])
  return (
    <div id='others'>
      <NewLaf types={tags} />
      <Divider />
      <Layout className='list'>
        <Search
          placeholder='请输入关键字'
          allowClear
          enterButton='搜索'
          size='large'
          onSearch={onSearch}
          className='search'
        />
        <LafContext.Provider value={{ tags, list }}>
          <Tags></Tags>
          <Divider />
          <LafList />
        </LafContext.Provider>
      </Layout>
    </div>
  )
}

export default Others
