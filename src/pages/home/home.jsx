import './home.css'
// import Route from './route/route'
import { Switch, Route } from 'react-router-dom'
import React, { useState, useEffect, lazy, Suspense } from 'react'
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Layout, Menu, Spin } from 'antd'

const Laf = lazy(() => import('../../pages/laf/laf'))
const Others = lazy(() => import('../../pages/others/others'))

const { Header, Content, Footer } = Layout

const Home = () => {
  let history = useHistory()
  // const [headtag, setHeadtag] = useState('首页')
  const changeRoute = url => {
    // setHeadtag(headtag)
    history.push(url)
  }

  const location = useLocation()
  console.log(location.pathname)
  let page = location.pathname === '/others' ? '2' : '1'
  // let page = '1'
  const changePage = num => {
    page = num
  }
  return (
    <Layout className='layout'>
      <Header>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={[page]}>
          <Menu.Item
            key='1'
            onClick={() => {
              changeRoute('/laf')
              changePage('1')
            }}
          >
            失物招领
          </Menu.Item>
          <Menu.Item
            key='2'
            onClick={() => {
              changeRoute('/others')
              changePage('2')
            }}
          >
            其他信息
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className='site-layout-content'>
          <Suspense fallback={<Spin />}>
            <Switch>
              <Route path='/' exact component={Laf} />
              <Route path='/laf' component={Laf} />
              <Route path='/others' component={Others} />
            </Switch>
          </Suspense>
          {/* <Route /> */}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2021 Created by BlackTea
      </Footer>
    </Layout>
  )
}

export default Home
