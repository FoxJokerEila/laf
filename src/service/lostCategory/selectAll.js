import instance from '../request'
import qs from 'qs'
// import { homeContext } from '../../model/context'

const selectAll = function (data) {
  // const lafD = homeContext()
  return instance({
    method: 'get',
    url: '/lostCategory/selectAll',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}

export default selectAll