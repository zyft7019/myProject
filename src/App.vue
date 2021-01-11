<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/echarts">Echarts</router-link> |
      <router-link to="/migration-map">Migration-map</router-link> |
      <router-link to="/gplot">Gplot</router-link> |
      <router-link to="/top-nav">Top-nav</router-link> |
      <router-link to="/QRCode">QRCode</router-link> |
      <router-link to="/vuex-test">VUEX</router-link> |
      <router-link to="/vue-seamless-scroll">vue-seamless-scroll</router-link> |
      <router-link to="/scroll">Scroll</router-link> |
      <router-link to="/font-size">Font_size</router-link> |
      <router-link to="/vue-seamless">Vue-seamless</router-link> |
      <router-link to="/search-data">SEARCH-DATA</router-link> |
      <router-link to="/three">Three</router-link> |
      <router-link to="/SET">SET</router-link> |
      <router-link to="/computed">Computed</router-link> |
      <router-link to="/topo">TOPO</router-link> |
      <!-- <router-link to="/404">404</router-link>  -->
    </div>
    <router-view/>
  </div>
</template>

<style>
html {
  height: 100%;
  /* font-size: 10px; */
  -webkit-text-size-adjust:none;
}
body {
  height: calc(100vh - 78px);
  /* height: 100%; */
  margin: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
