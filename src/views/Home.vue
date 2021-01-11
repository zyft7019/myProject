<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>{{ count }}</div>
    <div class="times">{{ times | date-time-filter }}</div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState } from 'vuex'

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      times: null
    }
  },
  computed: {
    ...mapState({
      count: state => state.vuexTest.count
    })
  },
  methods: {
    init() {
      let _this = this
      setInterval(function() {
        _this.times = new Date();
      }, 1000);
    }
  },
  mounted() {
    this.init()
  }
};
</script>
<style>
  @font-face {
    font-family: 'my-font';
    src: url("../assets/custom-font/digital-7-webfont.eot");
    src: url("../assets/custom-font/digital-7-webfont.eot?#iefix") format('embedded-opentype'),
         url("../assets/custom-font/digital-7-webfont.woff") format('woff'),
         url("../assets/custom-font/digital-7.ttf") format('truetype'),
         url("../assets/custom-font/digital-7-webfont.svg#MicrosoftYaHei") format('svg');
  }
  .times {
    font-family: 'my-font';
    font-size: 40px;
    color: red;
  }
</style>

