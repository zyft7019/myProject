<template>
  <vue-seamless-scroll :data="cities" class="seamless-warp" :class-option="classOption">
    <ul>
      <li v-for="(item,index) in cities" :key="index">
        <div>{{index+1}}</div>
        <div>{{item.city}}</div>
        <!-- <div>{{item.id}}</div> -->
      </li>
    </ul>
  </vue-seamless-scroll>
</template>
<script>
  import vueSeamlessScroll from 'vue-seamless-scroll'
  export default {
    components: {
      vueSeamlessScroll
    },
    data() {
      return {
        cities: [{
            id: 0,
            city: '承德 - 上海'
          },
          {
            id: 1,
            city: '承德 - 北京'
          },
          {
            id: 2,
            city: '承德 - 广州'
          },
          {
            id: 3,
            city: '承德 - 深圳'
          },
          {
            id: 4,
            city: '承德 - 杭州'
          },
          {
            id: 5,
            city: '承德 - 石家庄'
          }
        ]
      }
    },
    computed: {
      classOption() {
        return {
          step: 0.2, // 数值越大速度滚动越快
          // limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
          // hoverStop: true, // 是否开启鼠标悬停stop
          direction: 2, // 0向下 1向上 2向左 3向右
          // openWatch: true, // 开启数据实时监控刷新dom
          // singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
          // singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
          // waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
        }
      }
    }
  };
</script>
<style lang="less" scoped>
  .seamless-warp {
    width: 100%;
    height: 300px;
    overflow: hidden;

  }
</style>
