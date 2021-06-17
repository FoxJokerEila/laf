import instance from '../request'
import { message } from 'antd';
import qs from 'qs'


const insert = (data) => {
  console.log(qs.stringify(data))
  instance({
    method: 'post',
    url: '/lost/insert',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: qs.stringify(data)
    // data: data
  }).then((response) => {
    console.log(response)
    if (response.data.code === 0) {
      message.success('添加信息' + response.data.msg)
    } else {
      message.error(response.data.msg)
    }
  }).catch((err) => {
    console.log(err)
  })
}

export default insert
