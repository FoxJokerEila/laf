import React, { useState } from 'react'
import UserCard from '../../components/user/userCard'
import { Divider } from 'antd'
import { Form, Input, Button } from 'antd'
import { changePass } from '../../service/changePass.js'

import './user.css'

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
}

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
}

const User = () => {
  const [form] = Form.useForm()
  const [data, setdata] = useState({})
  const [user, setuser] = useState({
    nickName: '红茶',
    userName: '201931061043',
    realName: '王子健',
    userId: 3
  })
  const onFinish = values => {
    console.log('Received values of form: ', values)
    setdata({
      // userName: user.userName,
      // userId: user.userId,
      userName: '201931061043',
      userId: 3,
      oldPassword: values.oldPassword,
      newPassword: values.newPassword
    })
    changePass(data)
  }
  return (
    <div id='user'>
      <UserCard user={user}></UserCard>
      <Divider orientation='left' plain style={{ fontSize: 20 }}>
        修改密码
      </Divider>
      <Form
        {...formItemLayout}
        form={form}
        name='register'
        onFinish={onFinish}
        scrollToFirstError
        style={{
          marginTop: 50,
          width: 500
        }}
      >
        <Form.Item
          name='oldPassword'
          label='原密码'
          rules={[
            {
              required: true,
              message: '请输入您的原密码!'
            }
          ]}
          // hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name='newPassword'
          label='新密码'
          rules={[
            {
              required: true,
              message: '请输入你的新密码!'
            }
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name='confirm'
          label='确认密码'
          dependencies={['newPassword']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '请再次输入新密码!'
            },
            ({ getFieldValue }) => ({
              validator (_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('两次密码输入不一致!'))
              }
            })
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit'>
            修改密码
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default User
