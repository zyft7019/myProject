<template>
      <div class="content">
      <div class="top-item"></div>
      <div class="scroll">
        <div class="item item1" v-for="item in scrollList" :key="item.rownum" >
          <div class="item_in">
            <!-- <span class="num">{{Math.ceil((Math.random(0,1))*1000)}}</span> -->
            <span class="companty">{{item.companyDesc}}</span>
            <span class="agent_num">{{item.agntbrDesc}}</span>
            <span class="branch">{{item.staffName}}</span>
            <span class="agent_name">{{item.staffNum}}</span>
            <!-- <span class="customerName">{{item.cusName}}</span>
            <span class="customerPhone">{{item.cusPhone}}</span> -->
          </div>
        </div>
      </div>
      <div class="bottom-item"></div>
    </div>
</template>
<script>
// import axios from 'axios'
// import { GET_PART_PRIZES } from '../assets/js/url'
export default {
  name: 'Scroll',
  components: {
  },
  data () {
    return {
      scrollList: [
        {rownum: 0, companyDesc: 1, agntbrDesc: 2, staffName: 'sdgfsds', staffNum: 1000},
        {rownum: 1, companyDesc: 1, agntbrDesc: 2, staffName: 'sdgfsds', staffNum: 1000},
        {rownum: 2, companyDesc: 1, agntbrDesc: 2, staffName: 'sdgfsds', staffNum: 1000},
        {rownum: 3, companyDesc: 1, agntbrDesc: 2, staffName: 'sdgfsds', staffNum: 1000},
        {rownum: 4, companyDesc: 1, agntbrDesc: 2, staffName: 'sdgfsds', staffNum: 1000},
        {rownum: 5, companyDesc: 1, agntbrDesc: 2, staffName: 'sdgfsds', staffNum: 1000},
        {rownum: 6, companyDesc: 1, agntbrDesc: 2, staffName: 'sdgfsds', staffNum: 1000},
        {rownum: 7, companyDesc: 1, agntbrDesc: 2, staffName: 'sdgfsds', staffNum: 1000},
        {rownum: 8, companyDesc: 1, agntbrDesc: 2, staffName: 'sdgfsds', staffNum: 1000},
        {rownum: 9, companyDesc: 1, agntbrDesc: 2, staffName: 'sdgfsds', staffNum: 1000},
        {rownum: 10, companyDesc: 1, agntbrDesc: 2, staffName: 'sdgfsds', staffNum: 1000},
        {rownum: 11, companyDesc: 1, agntbrDesc: 2, staffName: 'sdgfsds', staffNum: 1000},
        {rownum: 12, companyDesc: 1, agntbrDesc: 2, staffName: 'sdgfsds', staffNum: 1000},
        {rownum: 13, companyDesc: 1, agntbrDesc: 2, staffName: 'sdgfsds', staffNum: 1000},
        {rownum: 14, companyDesc: 1, agntbrDesc: 2, staffName: 'sdgfsds', staffNum: 1000},
        {rownum: 15, companyDesc: 1, agntbrDesc: 2, staffName: 'sdgfsds', staffNum: 1000},
        {rownum: 16, companyDesc: 1, agntbrDesc: 2, staffName: 'sdgfsds', staffNum: 1000},
      ],
      upTimer: '',
      time: '450',
      offsetHeight: '',
      showI: 0,
      size: 12,
      scrollData: false
    }
  },
  methods: {
    upMove2: function () {
      // scroll
      var self = this
      var s = document.querySelector('.scroll')
      self.upTimer = setInterval(function () {
        s.scrollTop = s.scrollTop + 5
        // console.log(s.scrollTop);

        if (s.scrollHeight <= s.scrollTop + s.clientHeight) {
          s.scrollTop = 0
        }
      }, 2000)
    },
    // 获取滚动列表
    getScrollList () {
      axios.get(GET_PART_PRIZES, {
        params: {
          bussType:sessionStorage.getItem('bussType')
        }
      })
        .then(this.getScrollListSucceed)
        .catch(this.getDataFailed)
    },
    // 获取滚动数据失败
    getDataFailed (err) {
      console.log(err)
    },
    // 获取滚动数据成功
    getScrollListSucceed (res) {
      this.scrollList = res.data.info
      this.scrollData = true
      this.toRollingScreen()
    },
    toRollingScreen () {
      this.$emit('toParent', this.scrollData)
    }
  },
  mounted () {
    this.upMove2()
  },
  created () {
    // this.getScrollList()
  }
}
</script>

<style scoped>
input,
button,
select,
textarea {
  outline: none;
}
.container {
  min-height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.content {
  margin-left: auto;
  margin-right: auto;
  /* background: rgba(194, 54, 86, 0.5); */
  background: #f2fbf5;
  width: 590px;
  height: 493px;
  overflow: hidden;
}
.scroll {
  overflow: scroll;
  /* 隐藏火狐的滚动条 */
  overflow: -moz-scrollbars-horizontal;
  overflow-x: hidden;
  height: 500px;
}
.top-item {
  position: absolute;
  z-index: 100;
  border-top-left-radius: 500px;
  border-top-right-radius: 500px;
  background: rgba(194, 54, 86, 0.5);
  width: 820px;
}
.item {
  text-align: center;
  font-size: 17px;
  line-height: 41px;
  height: 41px;
  position: relative;
  overflow: hidden;
  border-top: 1px solid #5b9e4d;
  border-left: 1px solid #5b9e4d;
  border-right: 1px solid #5b9e4d;
}
.item:first-child{
  border-top: none;
}
.item_in {
  position: absolute;
  width: 590px;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  justify-content: space-around;
  color:#1e6832;
}
.item_in span{
  border-right:1px solid #5b9e4d;
  height: 49px;
  width: 25%!important;
  text-align: center;
}
.item_in span:last-child{
  border:none;
}
.num{
  width: 8%;
}
.companty{
  width: 12%;
}
.branch{
  width: 15%;
}
.customerName{
  width: 20%;
}
.customerPhone{
  width: 20%;
}
.agent_name{
  width: 15%;
}
.agent_num{
  width: 18%;
}
.bottom-item {
  position: absolute;
  border-bottom-left-radius: 500px;
  border-bottom-right-radius: 500px;
  background: rgba(194, 54, 86, 0.5);
  width:100%;
}
.item1 {
  display: block;
}
.item2 {
  display: none;
}
.item3 {
  display: none;
}
.scroll_washer{
  position: absolute;
  height: 50%;
  bottom: 9%;
  left: 41%;
}
</style>
