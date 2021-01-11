<template>
  <div>list_t
    <div v-for="item in list" :key="item.id">
      <span style="display: inline-block;width: 200px;margin-bottom: 10px;">{{ item.title }}</span>
      <button @click="deleteItem(item.id)">DELETE</button>
    </div>
    <br>
    <br>
    <div v-for="item in onList" :key="item.id">
      <span style="display: inline-block;width: 200px;margin-bottom: 10px;">{{ item.title }}</span>
      <button @click="delItem(item.id)">DELETE</button>
    </div>
  </div>
</template>

<script>
  import event from '../../utils/busEvent.js'
  export default {
    props: {
      list: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        a: 123,
        onList: []
      }
    },
    methods: {
      deleteItem(id) {
        this.$emit('delete', id)
      },
      delItem(id) {
        this.onList = this.onList.filter(item => item.id != id)
      },
      addHandlerTit(title) {
        console.log(title)
        this.onList.push({
          id: `id - ${ Date.now() }`,
          title: title
        })
      }
    },
    mounted() {
      event.$on('onAdd', this.addHandlerTit)
    },
    deforeDestroy() {
      //及时销毁，负责可能造成内存泄露
      event.$off('onAdd', this.addTitHandler)
    },
  }
</script>

<style>
</style>
