import './home.css'
import { Switch, Route } from 'react-router-dom'
import React, { Fragment, useState, useEffect, lazy, Suspense } from 'react'
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Layout, Menu, Spin } from 'antd'

const Laf = lazy(() => import('../../pages/laf/laf'))
const Others = lazy(() => import('../../pages/others/others'))
const User = lazy(() => import('../../pages/user/user'))
const Admin = lazy(() => import('../../pages/admin/index'))
const { Header, Content, Footer } = Layout

const Home = () => {
  let history = useHistory()
  const changeRoute = url => {
    history.push(url)
  }

  const location = useLocation()
  console.log(location.pathname)
  let page = location.pathname === '/home/others' ? '2' : '1'
  if (location.pathname.includes('/home/user') === true) page = '3'
  const changePage = num => {
    page = num
  }

  const createMenus = () => {
    // console.log(localStorage.getItem('role')==='0')
    if (localStorage.getItem('role') === '0') {
      return (
        <Fragment>
          <Menu.Item
            key='1'
            onClick={() => {
              changeRoute('/home/laf')
              changePage('1')
            }}
          >
            失物招领
          </Menu.Item>
          <Menu.Item
            key='2'
            onClick={() => {
              changeRoute('/home/others')
              changePage('2')
            }}
          >
            其他信息
          </Menu.Item>
          <Menu.Item
            key='3'
            onClick={() => {
              changeRoute('/home/user')
              changePage('3')
            }}
            className='user'
          >
            用户
          </Menu.Item>
        </Fragment>
      )
    }else if(localStorage.getItem('role') === '1'){
      return(
        <Fragment>
          <Menu.Item
            key='1'
            onClick={() => {
              changeRoute('/home/laf')
              changePage('1')
            }}
          >
            失物招领
          </Menu.Item>
          <Menu.Item
            key='2'
            onClick={() => {
              changeRoute('/home/others')
              changePage('2')
            }}
          >
            其他信息
          </Menu.Item>
          
          <Menu.Item
            key='3'
            onClick={() => {
              changeRoute('/home/user')
              changePage('3')
            }}
            className='user'
          >
            用户
          </Menu.Item>
          <Menu.Item
            key='4'
            onClick={() => {
              changeRoute('/home/admin')
              changePage('4')
            }}
          >
            管理
          </Menu.Item>
        </Fragment>
      )
    }else{
      return(<div></div>)
    }
  }

  return (
    <Layout className='layout'>
      <Header>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={[page]}>
          {createMenus()}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className='site-layout-content'>
          <Suspense fallback={<Spin />}>
            <Switch>
              <Route path='/' exact component={Laf} />
              <Route path='/home/laf' component={Laf} />
              <Route path='/home/others' component={Others} />
              <Route path='/home/user' component={User} />
              <Route path='/home/admin' component={Admin} />
            </Switch>
          </Suspense>
          {/* <Route /> */}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2021 Created by BlackTea & Jazzl
      </Footer>
    </Layout>
  )
}

export default Home
