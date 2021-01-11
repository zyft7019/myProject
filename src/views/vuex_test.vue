<template>
  <div>
    <div>state: {{ this.$store.state.vuexTest.count }}</div>
    <div>getters: {{ this.$store.getters.getStateCount }}</div>
    <div>mapState: {{ count }}</div>
    <button @click="addState">ADD STATE</button>
    <button @click="redState">RED STATE</button>
    <div>
      <button ref="btn" id="btn" @click="btnTarget(isPlay)">暂停</button>
    </div>
    <!-- svg 图标 -->
    <div>
      <svg-icon class="svg-icon" icon-class="404"></svg-icon>
      <svg-icon class="svg-icon" icon-class="bug"></svg-icon>
      <svg-icon class="svg-icon" icon-class="chart"></svg-icon>
      <svg-icon class="svg-icon" icon-class="drag"></svg-icon>
      <svg-icon class="svg-icon" icon-class="eye"></svg-icon>
      <svg-icon class="svg-icon" icon-class="icon"></svg-icon>
      <svg-icon class="svg-icon" icon-class="qq"></svg-icon>
      <svg-icon class="svg-icon" icon-class="zip"></svg-icon>
      <!-- <icon name="404" scale="20"></icon> -->
      <!-- <icon name="bug" scale="20"></icon> -->
    </div>
  </div>
</template>

<script>
import { getMockList } from "@/api/vuexTests.js";
import { getDeptList } from "@/api/home.js";
import { mapState, mapActions, mapGetters } from "vuex";
// import { Promise } from "q";
// import { setTimeout, clearTimeout } from "timers";
// import { start } from "repl";
export default {
  data() {
    return {
      a: 10,
      b: 10,
      timerId: null,
      isPlay: true
    };
  },
  methods: {
    addState() {
      this.$store.dispatch("addFun", this.a);
      // this.$store.commit('add', this.a)
    },
    redState() {
      this.$store.dispatch("redFun", this.b);
      // this.$store.commit('red')
    },
    // 获取随机数据
    getMockLists() {
      getMockList().then(res => {
        console.log(res);
      });
      getDeptList().then(res => {
        console.log(res);
      });
      //   const res = await getMockList();
      //   console.log(res);
    },

    // 轮训操作 模拟数据
    getData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ data: "ytt" });
        });
      });
    },
    // 开启轮训操作
    async start() {
      console.log("kaiqi.........")
      const { data } = await this.getData();
      console.log(data);
      this.timerId = setTimeout(this.start, 1000);
    },
    // 结束轮训操作
    stopTimer() {
      console.log("zanting.........")
      clearTimeout(this.timerId)
    },
    // 按钮切换
    btnTarget(isPlay) {
      isPlay = !isPlay
      this.$refs.btn.innerHTML = isPlay ? "暂停" : "播放"
      isPlay ? this.start() : this.stopTimer()
      this.isPlay = isPlay
    }
  },
  computed: {
    ...mapState({
      count: state => state.vuexTest.count
    })
  },
  mounted() {
    this.start();
    this.getMockLists();
    // console.log()
  }
};
</script>
<style scoped>
  .svg-icon {
    font-size: 100px;
    color: #ccc;
  }

</style>
