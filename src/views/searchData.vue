<template>
    <div>
        <el-input placeholder="请输入搜索内容" v-model="inpCon"></el-input>
        {{ inpCon }}
    </div>
</template>
<script>
export default {
  data() {
    return {
      a: 123,
      inpCon: ''
    };
  }
};
</script>
<style scoped>
</style>