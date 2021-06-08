import React, { useState, useEffect } from 'react'
import NewLaf from '../../components/laf/newLaf'
import LafList from '../../components/laf/lafList'
import { Layout } from 'antd'
import { Divider } from 'antd'
import { Input, Space } from 'antd'

import './laf.css'

const { Search } = Input
const onSearch = value => console.log(value)
const types = ['失物招领', '寻物启事']

function Laf () {
  return (
    <div id='laf'>
      <NewLaf types={types} />
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
        <br />
        <LafList type='失物招领' />
        <LafList type='寻物启事' />
      </Layout>
    </div>
  )
}

export default Laf
