<template>
    <div>
        <div v-for="item in list" :key="item.id">{{ item.name }}</div>
        <button @click="changeVal">改变值</button>
    </div>
</template>
<script>
import { log } from 'util'
export default {
    data () {
        return {
            list: [
                { id: 0, name: 'ytt' },
                { id: 1, name: 'lzr' },
            ]
        }
    },
    methods: {
        changeVal() {
            this.$set(this.list, 1, { id: 1, name: 'zxr' })
            this.$set(this.list, 2, { id: 2, name: 'jxy' })
            this.$set(this.list, 3, { id: 6, name: 'hnn' })
            console.log(this.list);
        }
    }
}
</script>
<style lang="less" scoped>

</style>
