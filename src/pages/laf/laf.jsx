import React, { useState, useEffect } from 'react'
import NewLaf from '../../components/laf/newLaf'
import LafList from '../../components/laf/lafList'
import Tags from '../../components/tags/tags'

import fuzzyQuery from '../../service/lost/fuzzyQuery'
import selectAll from '../../service/lostCategory/selectAll'

import { LafContext } from '../../model/context'
import { list } from '../../model/list'

import { Layout } from 'antd'
import { Divider } from 'antd'
import { Input, Space } from 'antd'
import './laf.css'

const { Search } = Input

const types = ['失物招领', '寻物启事']

function Laf () {
  const LIST = list()
  const [tags, settags] = useState([])
  // const [list, setlist] = useState([])
  const onSearch = value => {
    console.log(value)
    fuzzyQuery({ key: value })
      .then(res => {
        LIST.setlis(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
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
        LIST.setlis(res.data.data)
        console.log(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div id='laf'>
      <NewLaf types={tags} flag={1} />
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
        <LafContext.Provider value={{ tags, LIST }}>
          <Tags></Tags>
          <Divider />
          <LafList />
        </LafContext.Provider>
      </Layout>
    </div>
  )
}

export default Laf
