import request from '@/utils/request.js'

export function getMockList() {
    return request({
        url: '/sysDept/mockList',
        method: 'post'
    })
}
// export function getMockList() {
//     return request({
//         url: '/sysDept/queryList',
//         method: 'post'
//     })
// }