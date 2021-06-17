import React, { useState, useEffect } from 'react'
import NewLaf from '../../components/laf/newLaf'
import LafList from '../../components/laf/lafList'
import Tags from '../../components/tags/tags'

import fuzzyQuery from '../../service/lost/fuzzyQuery'
import selectAll from '../../service/lostCategory/selectAll'
// import { homeContext } from '../../model/context'
import { LafContext } from '../../model/context'

import { Layout } from 'antd'
import { Divider } from 'antd'
import { Input, Space } from 'antd'
import './laf.css'

const { Search } = Input
const onSearch = value => console.log(value)
const types = ['失物招领', '寻物启事']
// const tags = [
//   { categoryName: '失物招领', id: 0 },
//   { categoryName: '寻物启事', id: 1 }
// ]

function Laf () {
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
        <LafContext.Provider value={{ tags, list }}>
          {/* {console.log(tags)} */}
          <Tags></Tags>
          <Divider />
          <LafList />
        </LafContext.Provider>

        {/* <br /> */}
        {/* {console.log(tags)} */}
        {/* <LafList type='寻物启事' /> */}
      </Layout>
    </div>
  )
}

export default Laf
