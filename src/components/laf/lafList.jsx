import React, { useState, useEffect, useContext } from 'react'
import Cardt from './card'
import { Tag, Divider } from 'antd'
import './lafList.css'
import { LafContext } from '../../model/context'

const LafList = props => {
  const { LIST } = useContext(LafContext)

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
        {LIST.lis.map((item, index) => {
          return (
            <Cardt
              info={item}
              key={item.lostAndFoundId || item.informationId + 90}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default LafList
