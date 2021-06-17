import React, { useState, useEffect, useContext } from 'react'
import Cardt from './card'
import { Tag, Divider } from 'antd'
import './lafList.css'
import { LafContext } from '../../model/context'

const LafList = props => {
  const { list } = useContext(LafContext)
  // const [listItems, setlistItems] = useState(null)
  // useEffect(() => {
  //   setlistItems()
  // }, [])

  return (
    <div className='lafList'>
      <ul>
        <Tag
          color={props.type === '失物招领' ? '#55acee' : '#3b5999'}
          color={'#55acee'}
          className='tag'
        >
          {props.type}
        </Tag>
        {list.map((item, index) => {
          return (
            <Cardt
              info={item}
              key={item.lostAndFoundId || item.informationId + 90}
            />
          )
        })}
        {/* {listItems} */}
      </ul>
    </div>
  )
}

export default LafList
