import React, { Fragment, useEffect, useState } from 'react';
import { Input, Button, message } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import {reqEnroll} from './service'
import "./style.css"

function Enroll() {
    const [state, setState] = useState({
        nickName: '',
        password: '',
        realName: '',
        phone: '',
        userName: '',
    })
    const handleSaveInput = (e, type) => {
        if (e && e.target && e.target.value) {
            let value = e.target.value;
            setState({ ...state, [type]: value });
        }
    }
    const enroll = () => {
        reqEnroll(state).then(
            res =>{
                if (res.code === 0) {
                    message.success(`${res.msg}`)
                    
                } else {
                    message.error(`${res.msg}`)
                }
                // console.log('resp', res)
            }
        )
    }
    return (
        <div className="enroll">
            <div className="enroll-content" >
                <span className="enroll-title">注册信息</span>
                <Input size="middle" placeholder="昵称" prefix={<UserOutlined />} style={{ marginBottom: '5vh' }} onChange={e => handleSaveInput(e, "nickName")} />
                <Input size="middle" placeholder="电话" prefix={<UserOutlined />} style={{ marginBottom: '5vh' }} onChange={e => handleSaveInput(e, "phone")} />
                <Input size="middle" placeholder="真实姓名" prefix={<UserOutlined />} style={{ marginBottom: '5vh' }} onChange={e => handleSaveInput(e, "realName")} />
                <Input size="middle" placeholder="学号" prefix={<UserOutlined />} style={{ marginBottom: '5vh' }} onChange={e => handleSaveInput(e, "userName")} />
                <Input size="middle" placeholder="密码" prefix={<UserOutlined />} style={{ marginBottom: '5vh' }} onChange={e => handleSaveInput(e, "password")} />
                <Button type="primary" style={{ marginBottom: '5vh', width: '50vh' }} onClick={() =>enroll()}>注册</Button>
            </div>
        </div>
    )
}

export default Enroll
