import React, { useState, useEffect, useContext } from 'react'
import { changeLafN, changeOthersN } from '../../model/listNumber'
import { Tag } from 'antd'
import './tags.css'

import { LafContext } from '../../model/context'

const colors = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue'
]

const Tags = props => {
  const { tags } = useContext(LafContext)
  // console.log(props.tags)
  // const number = props.tags.length == 2 ? changeLafN() : changeOthersN()
  const number = changeLafN()
  return (
    <div id='tagz'>
      {tags.map((tag, index) => {
        return (
          <Tag
            className='searchTag'
            key={tag.lostCategoryId || tag.informationCategoryId}
            color={colors[index % colors.length]}
            onClick={() => {
              number.change(tag.lostCategoryId || tag.informationCategoryId)
            }}
          >
            <span>{tag.lostCategoryName || tag.informationCategoryName}</span>
          </Tag>
        )
      })}
    </div>
  )
}

export default Tags
