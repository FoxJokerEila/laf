import instance from '../../service/request';
import qs from "qs";

export const reqLostData = async (data) => {
    let resp 
    await instance({
        method: 'GET',
        url: '/lostCategory/selectAll',
        parms: data
    }).then((res)=>{
        resp = res.data;
    })
    // console.log('res',resp)
    return resp;
}
export const reqOtherData = async (data) => {
    let resp 
    await instance({
        method: 'GET',
        url: '/informationCategory/selectAll',
        parms: data
    }).then((res)=>{
        resp = res.data;
    })
    // console.log('res',resp)
    return resp;
}
export const delLost = async (data) => {
    let resp 
    await instance({
        method: 'DELETE',
        url: '/lostCategory/delete',
        parms: data
    }).then((res)=>{
        resp = res.data;
    })
    // console.log('res',resp)
    return resp;
}
export const delOther = async (data) => {
    let resp 
    await instance({
        method: 'DELETE',
        url: '/informationCategory/delete',
        parms: data
    }).then((res)=>{
        resp = res.data;
    })
    // console.log('res',resp)
    return resp;
}
export const addLost = async (data) => {
    let resp 
    await instance({
        method: 'POST',
        url: '/lostCategory/insert',
        parms: data
    }).then((res)=>{
        resp = res.data;
    })
    // console.log('res',resp)
    return resp;
}
export const addOther = async (data) => {
    let resp 
    await instance({
        method: 'POST',
        url: '/informationCategory/insert',
        parms: data
    }).then((res)=>{
        resp = res.data;
    })
    // console.log('res',resp)
    return resp;
}
export const updateLost = async (data) => {
    let resp 
    await instance({
        method: 'PUT',
        url: '/lostCategory/update',
        parms: data
    }).then((res)=>{
        resp = res.data;
    })
    // console.log('res',resp)
    return resp;
}
export const updateOther = async (data) => {
    let resp 
    await instance({
        method: 'PUT',
        url: '/informationCategory/update',
        parms: data
    }).then((res)=>{
        resp = res.data;
    })
    // console.log('res',resp)
    return resp;
}