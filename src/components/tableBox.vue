<template>
    <div></div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            default: '',
        },
        // url 中的参数
        pathParams: {
            type: Object,
            default: () => {}
        },
        // query 参数
        options: {
            type: Object,
            default: function() { return{ params: {} } }
        }
    },
    data() {
        return{
            a: 1
        }
    },
    methods: {
        fetchData(page) {
            
        }
    },
    mounted() {

    }
}
</script>

<style>

</style>
