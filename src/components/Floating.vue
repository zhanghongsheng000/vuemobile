<template>
    <div class="flooter-float" v-show="isShow">
      <div class="close fl" @click="closeFoot">
        <i class="el-icon-close"></i>
      </div>
      <div class="appinfo fl clearfix">
        <div class="fimg fl"><img src="../assets/img/fimg.png" alt=""></div>
        <div class="ftext fl">
          <p class="fbig">下载居金所APP</p>
          <p class="fsmall">居金之地 享你所享</p>
        </div>
      </div>
      <div class="now-look fr">
        <!--<a href="javascript:;"><el-button type="primary" round>主要按钮</el-button></a>-->
        <a href="javascript:;">立即查看</a>
      </div>
    </div>
</template>
<script>
  export default {
    data(){
      return {
        isShow:true
      }
    },
    methods:{
      closeFoot(){
        this.isShow=false;
      }
    }
  }
</script>
<style lang="less" scoped>
.flooter-float{
  position:fixed;
  left: 0;
  bottom: 0;
  height: 1rem;
  width: 100%;
  background-color:rgba(0,0,0,.5);
  color:#fff;
  .el-icon-close:before{
    font-size:0.39rem;
  }
  .close{
    padding-left: 0.3rem;
    font-size: 0.5rem;
    line-height: 1rem;
    margin-right: 0.3rem;
  }
  .appinfo{
    padding-top: 0.11rem;
    .fimg img{
      width: 0.80rem;
      height: 0.80rem;
      margin-right: 0.2rem;
    }
    .fbig{
      font-size:0.30rem;
      margin-bottom:0.1rem;
      margin-top:0.02rem;
    }
    .fsmall{
      font-size:0.26rem;
    }
  }
  .now-look{
    padding-top: 0.2rem;
    padding-right:0.3rem;
    a{
      display: inline-block;
      width:1.8rem;
      height:0.62rem;
      text-align: center;
      line-height: 0.62rem;
      color:#fff;
      background-color: #29a1f7;
      border-radius:0.3rem;
      font-size:0.28rem;
    }
  }
}
</style>
