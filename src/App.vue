<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.maskshow{
  height: 100%;
  overflow: hidden;
}
.maskhide{
  height: auto;
  overflow: auto;
}
#app {
  font-family: "Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 0.2rem;
}
</style>
