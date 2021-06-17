import instance from '../request'
import qs from 'qs'

const fuzzyQuery = function (data) {
  return instance({
    method: 'get',
    url: '/lost/fuzzyQuery',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    params: data
    // data
  })
}

export default fuzzyQuery
