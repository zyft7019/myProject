import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

// element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import installFilter from './utils/filter.js'
installFilter(Vue)

// 引入svg
import './icons'

// 引入 vue-svg-icon
// import Icon from 'vue-svg-icon/Icon.vue'
// Vue.component('icon', Icon)

// import {BmlMarkerClusterer} from 'vue-baidu-map'

// Vue.component('bml-marker-cluster', BmlMarkerClusterer)

// import BaiduMap from 'vue-baidu-map'

// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: 'F9ueX1zvSUu62TEIANqyS6liuCP5vrv8'
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
