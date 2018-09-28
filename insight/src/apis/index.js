import request from '@/helper/request'

const URL = {
  GET_INFO: '/index'
}

export default {
  getInfo() {
    return request(URL.GET_INFO)
  }
}