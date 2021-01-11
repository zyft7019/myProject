<template>
  <div>
    <div>{{ num }}</div>
    <div>{{ test1 }}</div>
    <!-- <div>{{ test2 }}</div> -->
    <input type="text" v-model="test2">

    <div>
      <input type="text" v-model="name">
      <input type="text" v-model="info.city">
    </div>

    <div>
      <div>{{ count }}</div>
      <button @click="submitBtn">+</button>
      <button @click="submitBtns(2, $event)">+</button>
    </div>

    <!-- components -->
    <div style="margin-top: 20px;background-color: #F7F7F7;">
      <Input @add="addHandler"></Input>
      <List :list="infoList" @delete="deleteHandler"></List>
    </div>

    <div>
      <ul>
      	<li v-for="(item, index) in liList" :key="index">
           {{ item.name }}
          <button @click="addItem">delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Input from './components/input_t.vue'
  import List from './components/list_t.vue'
  export default {
    components:{ Input, List },
    data() {
      return {
        num: 8,
        name: 'ytt',
        info: {
          city: '安徽'
        },
        count: 1,
        infoList: [
          { id: 0, title: 'ytt' },
          { id: 1, title: 'lzr' }
        ],
        liList: [
          { id: 0, name: 'ytt' },
          { id: 1, name: 'lzr' }
        ]
      }
    },
    computed: {
      test1() {
        return this.num * 2
      },
      test2: {
        get() {
          return this.num * 2
        },
        set(val) {
          console.log(val)
          this.num = val / 2
        }
      }
    },
    watch:{
      name(newVal, oldVal) {
        console.log('watch name: ' + newVal, oldVal )
      },
      info: {
        handler(newVal, oldVal) {
          console.log('watch info: ' + newVal, oldVal)
        },
        deep: true
      }
    },
    methods:{
      submitBtn(event) {
        console.log(event)
        this.count ++
      },
      submitBtns(val, event) {
        console.log(event)
        this.count = this.count + val
      },
      addHandler(title) {
        console.log(title)
        this.infoList.push({
          id: `id - ${Date.now()}`,
          title
        })
      },
      deleteHandler(id) {
        console.log(id)
        this.infoList = this.infoList.filter(item => item.id != id)
      },
      addItem() {
        this.liList.push({
          
        })
      }
    }
  }
</script>

<style>
</style>
