import React, { Fragment, useEffect, useState } from 'react';
import { Table, Input, Button, message, Card } from 'antd';
import { reqLostData,reqOtherData} from './service'
import './style.css'

function Admin() {
    const [tablekey, setTablekey] = useState('1')
    const [listData,setListData] = useState({
        lostData:[],
        otherData:[],
    })
    useEffect(() => {
        reqLostData().then(
            res =>{
                if (res.code === 0) {
                    message.success(`${res.msg}`)
                    setListData({...listData,lostData:res.data})
                } else {
                    message.error(`${res.msg}`)
                }
                // console.log('resp', res)
            }
        )
        reqOtherData().then(
            res =>{
                if (res.code === 0) {
                    message.success(`${res.msg}`)
                    setListData({...listData,otherData:res.data})
                } else {
                    message.error(`${res.msg}`)
                }
                // console.log('resp', res)
            }
        )
        return () => {
            
        }
    }, []);
    
    const tabList = [
        {
            key: '1',
            tab: '失物招领',
        },
        {
            key: '2',
            tab: '其他信息',
        },
    ]
    const columns = [
        {
            title: '已有分类',
            dataIndex: 'informationCategoryName',
            key: 'informationCategoryName',
        },
        {
            title: '操作',
            dataIndex: 'informationCategoryId',
            key: 'informationCategoryId',
            render: () => (
                <>
                    <Button type='link' size='small' >修改</Button>
                    <Button type='link' size='small' >删除</Button>
                </>
            )
        },
    ]
    const lostColumns = [
        {
            title: '已有分类',
            dataIndex: 'lostCategoryName',
            key: 'lostCategoryName',
        },
        {
            title: '操作',
            dataIndex: 'lostCategoryId',
            key: 'lostCategoryId',
            render: () => (
                <>
                    <Button type='link' size='small' >修改</Button>
                    <Button type='link' size='small' >删除</Button>
                </>
            )
        },
    ]

    return (
        <Fragment>
            <Card
                
                style={{ width: '100%' }}
                title='分类信息管理'
                //   extra={<a href="#">More</a>}
                tabList={tabList}
                activeTabKey={tablekey}
                onTabChange={key => {
                    setTablekey(key)
                }}
            >
                <Table
                    // className='admin-card'
                    // extra={<a href="#">More</a>}
                    style={{
                        width:'600vh',
                    }}
                    dataSource={(tablekey === '1' ? listData.lostData :listData.otherData)}
                    columns={(tablekey === '1' ? lostColumns:columns)}
                />
            </Card>

        </Fragment>
    )
}

export default Admin