import React, { useState } from 'react'
import { Skeleton, Switch, Card, Avatar } from 'antd'
import { Descriptions } from 'antd'
import './userCard.css'
const { Meta } = Card

const UserCard = props => {
  const [loading, setloading] = useState(false)

  return (
    <div id='usercard'>
      <Card
        className='userCard'
        style={{ width: 300, marginTop: 16 }}
        // actions={[
        //   <SettingOutlined key='setting' />,
        //   <EditOutlined key='edit' />,
        //   <EllipsisOutlined key='ellipsis' />
        // ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={
              <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
            }
            title={props.user.nickName}
            description={props.user.userName}
          />
        </Skeleton>
      </Card>
      <div className='divider'></div>
      <Descriptions title='用户信息' className='des'>
        <Descriptions.Item label='真实姓名'>
          {props.user.realName}
        </Descriptions.Item>
        <Descriptions.Item label='电话号码'>
          {/* {props.user.phone} */}12345678910
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default UserCard
