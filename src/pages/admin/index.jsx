import React, { Fragment, useEffect, useState } from 'react';
import { Table, Input, Button, message, Card, Modal } from 'antd';
import { reqLostData, reqOtherData, delLost, delOther, addLost, addOther } from './service'
import './style.css'

function Admin() {
    const [tablekey, setTablekey] = useState('2')
    const [lostData, setLostData] = useState([])
    const [listData, setListData] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    const [lostInput, setlostInput] = useState('')
    const [otherInput, setOtherInput] = useState('')
    useEffect(async () => {
        await reqLostData().then(
            res => {
                if (res.code === 0) {
                    // message.success(`${res.msg}`)
                    setLostData(res.data)
                } else {
                    message.error(`${res.msg}`)
                }
                // console.log('resp', res)
            }
        )
        await reqOtherData().then(
            res => {
                if (res.code === 0) {
                    // message.success(`${res.msg}`)
                    setListData(res.data)
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
            render: (id) => (
                <>

                    <Button type='link' size='small' onClick={() => {
                        delOther({ cateGoryId: id }).then(
                            res => {
                                if (res.code === 0) {
                                    message.success(`${res.msg}`)
                                    reqOtherData().then(
                                        res => {
                                            if (res.code === 0) {
                                                message.success(`${res.msg}`)
                                                setListData( res.data )
                                            } else {
                                                message.error(`${res.msg}`)
                                            }
                                            // console.log('resp', res)
                                        }
                                    )
                                } else {
                                    message.error(`${res.msg}`)
                                }
                                // console.log('resp', res)
                            }
                        )
                    }} >删除</Button>
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
            render: (id) => (
                <>

                    <Button type='link' size='small' onClick={() => {
                        delLost({ lostCateGoryId: id }).then(
                            res => {
                                if (res.code === 0) {
                                    message.success(`${res.msg}`)
                                    reqLostData().then(
                                        res => {
                                            if (res.code === 0) {
                                                message.success(`${res.msg}`)
                                                setLostData(res.data)
                                            } else {
                                                message.error(`${res.msg}`)
                                            }
                                            // console.log('resp', res)
                                        }
                                    )
                                } else {
                                    message.error(`${res.msg}`)
                                }
                            }
                        )
                    }}>删除</Button>
                </>
            )
        },
    ]

    const handleSaveInput = (e) => {
        if (e && e.target && e.target.value) {
            let value = e.target.value;
            if(tablekey===1){
                setlostInput(value)
            }else{
                setOtherInput(value)
            }
            
            console.log(lostInput)
        }
    }

    const lostHandleOk = () => {
        if(tablekey===1){
            addLost({lostCategoryName:lostInput}).then(
            res => {
                if (res.code === 0) {
                    message.success(`${res.msg}`)
                    reqLostData().then(
                        res => {
                            if (res.code === 0) {
                                message.success(`${res.msg}`)
                                setLostData( res.data)
                            } else {
                                message.error(`${res.msg}`)
                            }
                            // console.log('resp', res)
                        }
                    )
                } else {
                    message.error(`${res.msg}`)
                }
                // console.log('resp', res)
            }
        )}else{
            addOther({categoryName:otherInput}).then(
                res => {
                    if (res.code === 0) {
                        message.success(`${res.msg}`)
                        reqOtherData().then(
                            res => {
                                if (res.code === 0) {
                                    message.success(`${res.msg}`)
                                    setListData(res.data)
                                } else {
                                    message.error(`${res.msg}`)
                                }
                                // console.log('resp', res)
                            }
                        )
                    } else {
                        message.error(`${res.msg}`)
                    }
                    // console.log('resp', res)
                }
            )
        }
        
        setIsVisible(false)
    }

    const addLostBtn = () => {
        setIsVisible(true)
    }

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
                {
                    (tablekey === '1')
                        ?
                        < Table
                            bordered
                            rowKey='lostCategoryId'
                            title={() => (<Button style={{ marginLeft: '110vh' }} type='primary' onClick={() => addLostBtn()}>增加分类</Button>)}
                            style={{
                                width: '130vh',
                                margin: 'auto'
                            }}
                            dataSource={lostData}
                            columns={lostColumns}
                        />
                        : <Table
                            rowKey='informationCategoryId'
                            bordered
                            title={() => (<Button style={{ marginLeft: '110vh', }} type='primary' onClick={() => addLostBtn()}>增加分类</Button>)}
                            style={{
                                width: '130vh',
                                margin: 'auto'
                            }}
                            dataSource={listData}
                            columns={columns}
                        />
                }

            </Card>
            <Modal title="填写分类信息" visible={isVisible} onOk={lostHandleOk} onCancel={() => setIsVisible(false)} >
                <Input onChange={e => handleSaveInput(e)} />
            </Modal>
        </Fragment>
    )
}

export default Admin