import React, { useState, useEffect } from 'react'
import { Card } from 'antd'
import './card.css'

const Cardt = props => {
  return (
    <div>
      <Card
        title={props.info.title}
        extra={<a href={props.info.link}>了解详情</a>}
        style={{ width: 300 }}
      >
        <p>{props.info.content}</p>
      </Card>
    </div>
  )
}

export default Cardt
