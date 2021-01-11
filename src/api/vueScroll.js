import request from '@/utils/request'

// 获取组织树信息
export function getRandomList () {
  return request({
    url: '/sysArea/queryRandomList',
    method: 'post',
    // data: {}
  })
}