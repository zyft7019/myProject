<template>
  <div class="topo_content">
    <!-- header -->
    <div class="topo_toolbar">
      <img :src="item.toolSrc" :alt="item.title" v-for="(item, index) in toolbarData" :key="index" @click="editorEvent(item.toolType)" :class="isEditor === item.toolType ? 'toSelect':''">
    </div>
    <!-- main -->
    <div class="topo_main">
      sdfsdfds
    </div>
    <!-- footer -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        a: 123,
        toolbarData: [], // 工具栏数据
        isEditor: false,
      }
    },
    methods:{
      getToolbarData(){
        this.toolbarData = require('./index.js').toolData
        console.log(this.toolbarData)
      },
      editorEvent(index) {
        this.isEditor = index
        console.log(index)
      }
    },
    mounted() {
      this.getToolbarData()
    }
  }
</script>

<style lang="less">
  @import url("../../assets/css/index.less");
</style>
