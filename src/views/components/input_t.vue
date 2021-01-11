<template>
  <div>
    <input type="text" v-model.trim="title" @keyup.enter="addTitle">
    <button @click="addTitle">ADD</button>

    <br />

    <input type="text" v-model.trim="tit" @keyup.enter="addTit">
    <button @click="addTit">ADD</button>
  </div>
</template>

<script>
  import event from '../../utils/busEvent.js'
  export default {
    data() {
      return {
        title: '',
        tit: ''
      }
    },
    methods:{
      addTitle() {
        this.$emit('add', this.title)
        this.title = ''
      },
      addTit() {
        event.$emit('onAdd', this.tit)
        this.tit = ''
      }
    }
  }
</script>

<style>
</style>
