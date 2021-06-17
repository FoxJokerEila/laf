import React, { useState, useEffect } from 'react'
import { Card } from 'antd'
import './card.css'

const Cardt = props => {
  return (
    <div className='cardt'>
      <Card
        title={props.info.categoryName || props.info.describe}
        extra={
          props.info.flag !== undefined && (
            <div>
              <a>{props.info.flag ? '失物招领' : '寻物启事'}</a>
            </div>
          )
        }
      >
        {props.info.contactInformation && (
          <p>联系方式：{props.info.contactInformation}</p>
        )}
        {props.info.pickupPlace && <p>地点: {props.info.pickupPlace}</p>}
        <p>时间: {props.info.pickupTime || props.info.time}</p>
        <p>描述: {props.info.describe}</p>
        {props.info.createTime && <p>发表日期: {props.info.createTime}</p>}
      </Card>
    </div>
  )
}

export default Cardt
