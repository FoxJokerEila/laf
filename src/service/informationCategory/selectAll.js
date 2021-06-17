import instance from '../request'
import qs from 'qs'

const selectAll = function (data) {
  return instance({
    method: 'get',
    url: '/informationCategory/selectAll',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}

export default selectAll