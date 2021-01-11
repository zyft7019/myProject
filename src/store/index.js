import Vue from 'vue'
import Vuex from 'vuex'
import vuejsStorage from 'vuejs-storage' // 用于本地储存(类似于sessionStorage或localStorage)
import { getNs, validateNS } from './ns'

Vue.use(Vuex)
Vue.use(vuejsStorage)

const modulesFiles = require.context('./modules', true, /\.js$/)
// console.log(modulesFiles);

const moduleKeys = []

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // console.log(modules, modulePath)
  // 根据获取的文件路径 取出文件名 (模块名称)
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  moduleKeys.push(moduleName)
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

// globalNs
const globalNs = 'taskStore'
validateNS(globalNs)

// 将数据存储
const plugins = [
  vuejsStorage({
    namespace: globalNs,
    keys: [getNs(globalNs).checkKey, ...moduleKeys]
  })
]

const store = new Vuex.Store({
  state: {
    [getNs(globalNs).checkKey]: Date.now()
  },
  modules,
  plugins
})

export default store
