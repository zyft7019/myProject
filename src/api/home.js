import request from '@/utils/request'

// 获取组织树信息
export function getDeptList () {
  return request({
    url: '/sysArea/queryList',
    method: 'post',
    data: {}
  })
}