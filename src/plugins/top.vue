<template>
  <div class="top clearfix" id="topComponent">
    <router-link tag="div" to="/" class="link-home fl">
      <i class="el-icon-arrow-left"></i>
      <span>首页</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "top-component"
  }
</script>

<style scoped lang="less">
  #topComponent{
    line-height: 0.8rem;
    padding: 0 0.3rem;
    height: 1rem;
    background-color: #fbfcff;
    color: #000000;
    .link-home {
      font-size: 0.3rem;
      span {
        line-height: 1rem;
        vertical-align: middle;
        font-size: 0.3rem;
      }
    }
    .link-home .el-icon-arrow-left{
      color: #000000;
    }
    .to-sear {
      width: 1rem;
      height: 1rem;
      text-align: center;
      line-height: 1rem;
      font-size: 0.5rem;
    }
    .build-title {
      margin-top: -1rem;
      line-height: 1rem;
      font-size: 0.32rem;
      text-align: center;
    }
  }

</style>
