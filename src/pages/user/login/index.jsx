import React, { Fragment, useEffect, useState } from 'react';
import { Input, Button, message } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import './style.css';
import { useHistory } from 'react-router-dom';
import { reqLogin } from "./service"
// import { Footer } from 'antd/lib/layout/layout';


function Login() {
    const history = useHistory()
    const [state, setState] = useState({
        userName: '',
        password: ''
    })
    const handleSaveInput = (e, type) => {
        if (e && e.target && e.target.value) {
            let value = e.target.value;
            setState({ ...state, [type]: value });
        }
    }
    const login = () => {
        reqLogin(state).then(
            res => {
                if (res.code === 0) {
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("role", res.data.role)
                    // message.success(`${res.msg}`)
                    history.push('/home/laf')
                } else {
                    message.error(`${res.msg}`)
                }
                console.log('resp', res)
            }
        )
    }
    return (
        <div className='Login'>
            <span className='login-title'>西南石油大学信息共享平台</span>
            <div className='login-from'>
                <Input size="middle" placeholder="学号" prefix={<UserOutlined />} style={{ marginBottom: '5vh' }} onChange={
                    e => handleSaveInput(e, "userName")
                } />
                <Input size='middle' type="password" placeholder="密码" prefix={<UnlockOutlined />} style={{ marginBottom: '5vh' }} onChange={
                    e => handleSaveInput(e, "password")
                } />
                <span className="login-link" style={{ marginBottom: '5vh' }}>
                    <Button size='small' type='link'>忘记密码</Button>
                    <Button size='small' type='link' onClick={() => { history.push('/enroll') }}>注册</Button>
                </span>
                <Button type='primary' onClick={() => login()} >登录</Button>
            </div>
        </div>
    )
}

export default Login