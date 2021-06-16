import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://192.168.1.110:8088'
})

instance.interceptors.request.use(function (config) {
  // config.headers.accessToken = localStorage.getItem('token')
  return config
}, function (err) {
  return Promise.reject(err)
})

instance.interceptors.response.use(function (config) {
  return config
}, function (err) {
  return Promise.reject(err)
})

export default instance
