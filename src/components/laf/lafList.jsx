import React, { useState, useEffect } from 'react'
import Cardt from './card'
import { Tag, Divider } from 'antd'
import './lafList.css'

const cards = [
  { title: '失物招领', content: '失物招领', link: '#' },
  { title: '失物招领', content: '失物招领', link: '#' },
  { title: '失物招领', content: '失物招领', link: '#' },
  { title: '失物招领', content: '失物招领', link: '#' }
]

const cards1 = [
  { title: '寻物启事', content: '寻物启事', link: '#' },
  { title: '寻物启事', content: '寻物启事', link: '#' },
  { title: '寻物启事', content: '寻物启事', link: '#' },
  { title: '寻物启事', content: '寻物启事', link: '#' }
]

const LafList = props => {
  const [listItems, setlistItems] = useState(
    cards.map((item, index) => {
      return <Cardt info={item} key={index} />
    })
  )

  const [listItems1, setlistItems1] = useState(
    cards1.map((item, index) => {
      return <Cardt info={item} key={index} />
    })
  )

  // 对接时使用这个进行初始化
  // const [listItems, setlistItems] = useState(
  //   props.cards.map((item, index) => {
  //     return <Cardt info={item} key={index} />
  //   })
  // )

  return (
    <div className='lafList'>
      <ul>
        <Tag
          color={props.type === '失物招领' ? '#55acee' : '#3b5999'}
          // color={'#55acee'}
          className='tag'
        >
          {props.type}
        </Tag>
        {props.type === '失物招领' ? listItems : listItems1}
        {/* {listItems} */}
      </ul>
    </div>
  )
}

export default LafList
