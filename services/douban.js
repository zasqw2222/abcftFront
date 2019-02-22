import axios from 'axios'
const API_KEY = '0df993c66c0c636e29ecbb5344252a4a'

const instance = axios.create({
  baseURL: 'https://api.douban.com/v2/group',
  params: {
    apikey: API_KEY
  }
})

/**
 * 获取小组详情
 * @param {string} id 
 */
export function getGroupInfo (id) {
  return instance.request({
    method: 'GET',
    url: `/${id}`
  })
}

export function getGroupTopics (id) {
  return instance.request({
    method: 'GET',
    url: `/${id}/topics`
  })
}