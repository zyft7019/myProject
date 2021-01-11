import Mock from './mockjs'

export default [
    {
      url: '/sysDept/mockList',
      type: 'post',
      response: config => {
        const res = Mock.mock({
          'data|3-10': [{
            'id|+1': 0,
            'teamName': '@cword(3,5)', // 随机中文3~5个字符
            'times': '@datetime("yyyy-MM-dd A HH:mm:ss")', // 随机年月日 时间
            'dates': '@datetime("yyyy-MM-dd")', // 随机年月日
            'time': '@now("yyyy-MM-dd A HH:mm:ss")', // 当前时间
            'pic': '@image', // 随机图片路径
            'email': '@email', // 随机email地址
            'ip': '@ip', // 随机IP地址
            'title': '@ctitle', // 随机中文title
            'address': '@region', // 随机区域
            'province': '@province', // 随机省份
            'county': '@county(true)', // 随机省份 城市 区
            'status|+1': ['审核通过', '正在审核', '驳回'] // 随机状态
          }]
        })
        return res.data
      }
    },
    {
      url: '/sysArea/queryRandomList',
      type: 'post',
      response: config => {
        const res = Mock.mock({
          'data|2-5': [{
            'id|0-5': 0,
            // 'teamName': '@cword(3,5)', // 随机中文3~5个字符
            // 'times': '@datetime("yyyy-MM-dd A HH:mm:ss")', // 随机年月日 时间
            // 'dates': '@datetime("yyyy-MM-dd")', // 随机年月日
            // 'time': '@now("yyyy-MM-dd A HH:mm:ss")', // 当前时间
            // 'pic': '@image', // 随机图片路径
            // 'email': '@email', // 随机email地址
            // 'ip': '@ip', // 随机IP地址
            // 'title': '@ctitle', // 随机中文title
            // 'address': '@region', // 随机区域
            // 'province': '@province', // 随机省份
            // 'county': '@county(true)', // 随机省份 城市 区
            // 'status|+1': ['审核通过', '正在审核', '驳回'] // 随机状态
          }]
        })
        return res.data
      }
    },

  ]