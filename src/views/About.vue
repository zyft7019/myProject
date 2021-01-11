// 轮播图组件
<template>
  <div>
    <!-- 参数说明： 
      interval（图片切换间隔时长） 
      arrow（切换箭头显示的时机：三个参数（always 一直存在/hover 鼠标经过时/never 永远不显示））
      height（图片容器高度）-->
    <el-carousel :interval="50000" arrow="always" height="480px">
      <el-carousel-item v-for="item in picData" :key="item.id">
        <!-- <h3>{{ item.src }}</h3>6464646 -->
        <img :src="item.src" alt="暂无图片">
      </el-carousel-item>
    </el-carousel>
    <!-- 地图功能 -->
    <!-- <baidu-map class="bm-view" @ready="handler"></baidu-map> -->

    <!-- <bml-marker-cluster @ready="handler"></bml-marker-cluster> -->

    <bml-marker-clusterer @ready="handler" style="height: 400px; width: 400px; background: #ccc; display: inline-block">646546465</bml-marker-clusterer>

    <div id="allmap">

    </div>
  </div>
</template>

<script>
  import {
    BmlMarkerClusterer
  } from 'vue-baidu-map'
  export default {
    components: {
      BmlMarkerClusterer
    },
    data() {
      return {
        picData: [
          // 轮播图数据
          {
            id: 1,
            src: require("../assets/images/banner1.png")
          },
          {
            id: 2,
            src: require("../assets/images/banner2.png")
          },
          {
            id: 3,
            src: require("../assets/images/banner1.png")
          },
          {
            id: 4,
            src: require("../assets/images/banner2.png")
          }
        ],
        center: {
          lng: 0,
          lat: 0
        },
        zoom: 3
      };
    },
    methods: {
      handler({
        BMap,
        map
      }) {
        console.log(BMap, map)
        this.center.lng = 116.404
        this.center.lat = 39.915
        this.zoom = 15
      }

      // mapInit () {
      //   // 百度地图API功能
      //   var map = new BMap.Map("allmap");    // 创建Map实例
      //   map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);  // 初始化地图,设置中心点坐标和地图级别
      //   //添加地图类型控件
      //   map.addControl(new BMap.MapTypeControl({
      //   	mapTypes:[
      //             BMAP_NORMAL_MAP,
      //             BMAP_HYBRID_MAP
      //         ]}));	  
      //   map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
      //   map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
      // }
    },
    mounted() {
      // var myCityListObject = new BMapLib.CityList({container : "allmap"});
      // this.mapInit()
      // this.$nextTick(() => {
      //   // 百度地图API功能
      //   var map = new BMap.Map("allmap");    // 创建Map实例
      //   console.log(654654654654654)
      //   map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
      //   //添加地图类型控件
      //   map.addControl(new BMap.MapTypeControl({
      //   	mapTypes:[
      //       BMAP_NORMAL_MAP,
      //       BMAP_HYBRID_MAP
      //     ]}));	  
      //   map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
      //   map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
      // })
    }
  };
</script>

<style>
  .bm-view {
    width: 400px;
    height: 400px;
  }

  /* .el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
} */
  /* 修改显示图片容器属性 */
  .el-carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* 修改小横杠属性 */
  .el-carousel__button {
    width: 40px;
    height: 4px;
    background: tomato;
  }

  /* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>
