import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
//   mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/echarts',
      name: 'echarts',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/echarts.vue')
    },
    {
      path: '/migration-map',
      name: 'migration-map',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/migration-map.vue')
    },
    {
      path: '/gplot',
      name: 'gplot',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/gplot.vue')
    },
    {
      path: '/top-nav',
      name: 'top-nav',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/nav-test.vue')
    },
    {
      path: '/QRCode',
      name: 'QRCode',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/QRcode.vue')
    },
    {
      path: '/vuex-test',
      name: 'vuex-test',
      component: () => import(/* webpackChunkName: "about" */ '../views/vuex_test.vue')
    },
    {
      path: '/vue-seamless-scroll',
      name: 'vue-seamless-scroll',
      component: () => import(/* webpackChunkName: "about" */ '../views/vue-seamless-scroll.vue')
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: () => import(/* webpackChunkName: "about" */ '../views/Scroll.vue')
    },
    {
      path: '/font-size',
      name: 'font-size',
      component: () => import(/* webpackChunkName: "about" */ '../views/font_size.vue')
    },
    {
      path: '/vue-seamless',
      name: 'vue-seamless',
      component: () => import(/* webpackChunkName: "about" */ '../views/vue-seamless.vue')
    },
    {
      path: '/search-data',
      name: 'search-data',
      component: () => import(/* webpackChunkName: "about" */ '../views/searchData.vue')
    },
    {
      path: '/three',
      name: 'three',
      component: () => import(/* webpackChunkName: "about" */ '../views/three_dom.vue')
    },
    {
      path: '/SET',
      name: 'SET',
      component: () => import(/* webpackChunkName: "about" */ '../views/this.$set.vue')
    }, {
      path: '/computed',
      name: 'computed',
      component: () => import(/* webpackChunkName: "about" */ '../views/computed.vue')
    },{
      path: '/topo',
      name: 'topo',
      component: () => import(/* webpackChunkName: "about" */ '../views/topo')
    },
    {
      path: '/404',
      name: '404',
      component: () => import(/* webpackChunkName: "about" */ '@/views/error-page/404.vue')
    }
  ]
})
