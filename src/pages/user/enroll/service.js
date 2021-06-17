import instance from '../../../service/request';
import qs from "qs";

export const reqEnroll = async (data) => {
    let resp 
    await instance({
        method: 'post',
        url: '/user/register',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(data)
    }).then((res)=>{
        resp = res.data;
    })
    // console.log('res',resp)
    return resp;
}