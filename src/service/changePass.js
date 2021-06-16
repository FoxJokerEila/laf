import instance from './request'
import { message } from 'antd';
import qs from 'qs'


const changePass = (data) => {
  console.log(qs.stringify(data))
  instance({
    method: 'post',
    url: '/user/changePassword',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
    // data: data
  }).then((response) => {
    console.log(response)
    if (response.data.code === 0) {
      message.success('修改密码' + response.data.msg)
    } else {
      message.error(response.data.msg)
    }
  }).catch((err) => {
    console.log(err)
  })
}

export { changePass }
