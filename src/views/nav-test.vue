<template>
  <div class="top-nav">
    <!-- top-nav -->
    <span class="left-con">
      <svg class="left-svg" version="1.1" width="660px" height="14px" viewBox="0 0 660 14">
        <defs>
          <linearGradient id="orange_red" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#02c7ee;stop-opacity:.2"></stop>
            <stop offset="100%" style="stop-color:#02c7ee;stop-opacity:.9"></stop>
          </linearGradient>
        </defs>
        <!-- <polygon style="fill:#2EA7E0;" points="13,7 312,7 324,14 633,14 660,0 0,0 0,0 "></polygon> -->
        <polygon style="fill:url(#orange_red);" points="13,7 312,7 324,14 633,14 660,0 0,0 0,0 "></polygon>
      </svg>
    </span>
    <span class="center-con">
      <div class="nav-tit">攻防动态展示</div>
      <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="grey_blue" cx="50%" cy="50%" r="70%" fx="50%" fy="40%">
            <stop offset="20%" style="stop-color:#02c7ee; stop-opacity:0"></stop>
            <stop offset="100%" style="stop-color:#02c7ee; stop-opacity:1"></stop>
          </radialGradient>
        </defs>
        <!-- <polygon :points="path" style="fill:#03a4c3; stroke:#000000;stroke-width:0"></polygon> -->
        <polygon
          :points="path"
          style="fill:url(#grey_blue); stroke:#000000;stroke-width:0"
        >fdgdfgdfgdf</polygon>
      </svg>

      <span class="bor-l">
        <svg version="1.1" width="218px" height="45px" viewBox="0 0 218 45">
          <polygon
            style="fill:#fff; stroke:#02c7ee; stroke-width:1"
            points="4,0 45,41 218,41 218,45 34,45 25,36 25,29 0,4 "
          ></polygon>
        </svg>
      </span>
      <span class="bor-c"></span>
      <span class="bor-r">
        <svg version="1.1" width="218px" height="45px" viewBox="0 0 218 45">
          <polygon
            style="fill:#fff; stroke:#02c7ee; stroke-width:1"
            points="214,0 173,41 0,41 0,45 184,45 193,36 193,29 218,4 "
          ></polygon>
        </svg>
      </span>
    </span>
    <span class="right-con"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: "15,0 0,15 54,70 544,70 600,15 585,0"
    };
  }
};
</script>

<style lang="less" scoped>
.top-nav {
  height: 170px;
  color: #02c7ee;
  background: #021729;
  span {
    display: inline-block;
  }
  .left-con {
    position: relative;
    width: 660px;
    height: 14px;
    .left-svg {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .center-con {
    width: 600px;
    height: 70px;
    position: relative;
    // background: #03a4c3
    // box-shadow: inset 0px 0px 50px 10px #03a4c3;
    .nav-tit {
      position: absolute;
      font-size: 26px;
      // font-weight: 800;
      color: #fff;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .bor-l {
      position: absolute;
      left: 12px;
      bottom: -8px;
    }
    .bor-c {
      position: absolute;
      bottom: -6px;
      left: 50%;
      width: 15px;
      height: 6px;
      // background: #02c7ee;
      background: #0290b0;
      // background: linear-gradient(-45deg, transparent 5px, yellowgreen 0) bottom right,
      //   linear-gradient(45deg, transparent 5px, yellowgreen 0) bottom left;;
    }
    .bor-r {
      position: absolute;
      right: 12px;
      bottom: -8px;
    }
  }
}

// 切角
.notching {
  width: 400px;
  height: 40px;
  padding: 40px;
  background: linear-gradient(135deg, transparent 15px, yellowgreen 0) top left,
    linear-gradient(-135deg, transparent 15px, yellowgreen 0) top right,
    linear-gradient(-45deg, transparent 45px, yellowgreen 0) bottom right,
    linear-gradient(45deg, transparent 15px, yellowgreen 0) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}
</style>
