import React, { useState } from 'react'
import './post.css'
import { Layout } from 'antd'
import { Card } from 'antd'

const { Header, Footer, Sider, Content } = Layout

const Post = props => {
  return (
    <Layout>
      <Header>
        {/* <h3>{props.title}</h3> */}
        <div className='site-card-border-less-wrapper'>
          <Card
            title={props.post.title}
            bordered={false}
            style={{ width: 300 }}
          >
            <p>{props.post.contact}</p>
            <p>{props.post.createTime}</p>
          </Card>
        </div>
      </Header>
      <Content>{props.content}</Content>
    </Layout>
  )
}

export default Post
