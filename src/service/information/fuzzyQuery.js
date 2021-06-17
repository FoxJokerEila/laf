import instance from '../request'
import qs from 'qs'

const fuzzyQuery = function (data) {
  return instance({
    method: 'get',
    url: '/information/fuzzyQuery',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}

export default fuzzyQuery