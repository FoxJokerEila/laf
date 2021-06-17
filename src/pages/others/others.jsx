import React, { useState, useEffect } from 'react'
import NewLaf from '../../components/laf/newLaf'
import LafList from '../../components/laf/lafList'
import Tags from '../../components/tags/tags'

import fuzzyQuery from '../../service/information/fuzzyQuery'
import selectAll from '../../service/informationCategory/selectAll'

import { LafContext } from '../../model/context'
import { list } from '../../model/list'

import { Layout } from 'antd'
import { Divider } from 'antd'
import { Input } from 'antd'

import './others.css'

const { Search } = Input

function Others (props) {
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
        <LafContext.Provider value={{ tags, LIST }}>
          <Tags flag={1}></Tags>
          <Divider />
          <LafList />
        </LafContext.Provider>
      </Layout>
    </div>
  )
}

export default Others
