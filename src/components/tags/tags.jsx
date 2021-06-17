import React, { useState, useEffect, useContext } from 'react'
import { changeLafN, changeOthersN } from '../../model/listNumber'
import { Tag } from 'antd'
import './tags.css'

import { LafContext } from '../../model/context'
import { list } from '../../model/list'

import fuzzyQuery from '../../service/lost/fuzzyQuery'

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
  const LIST = list()
  const { tags } = useContext(LafContext)
  const number = props.flag === 1 ? changeOthersN() : changeLafN()
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
      {props.flag === 0 && (
        <Tag
          className='searchTag'
          key={999}
          color='geekblue'
          onClick={() => {
            fuzzyQuery({ flag: 1 })
              .then(res => {
                LIST.setlis(res.data.data)
              })
              .catch(err => {
                console.log(err)
              })
          }}
        >
          <span>失物招领</span>
        </Tag>
      )}
      {props.flag === 0 && (
        <Tag
          className='searchTag'
          key={998}
          color='geekblue'
          onClick={() => {
            fuzzyQuery({ flag: 0 })
              .then(res => {
                LIST.setlis(res.data.data)
              })
              .catch(err => {
                console.log(err)
              })
          }}
        >
          <span>寻物启事</span>
        </Tag>
      )}
    </div>
  )
}

export default Tags
