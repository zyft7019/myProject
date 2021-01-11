// import { getMockList } from '@/api/vuexTest'

const state = {
    count: 1
  }
const getters = { // 相当于计算属性 computed
    getStateCount(state) {
      return state.count + 1
    }
  }
const mutations = {
    add(state, a) { // 修改 state 中count的值
      state.count = state.count + a
    },
    red(state, b) { // 修改 state 中count的值
      state.count = state.count - b
    }
  }
const actions = {
  addFun(context, a) { // 提交 mutations 中add方法
    context.commit('add', a)
  },
  redFun(context, b) { // 提交 mutations 中red方法
    context.commit('red', b)
  },
  async getMockList() {
    const res = await getMockList()
    console.log(res)
  }
}

export default {
    state,
    getters,
    mutations,
    actions
}
  