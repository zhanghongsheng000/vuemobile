<template>
    <div class="sear-box">
      <div class="sear-top clearfix">
        <div class="sear-ipt fl clearfix">
          <input type="text" class="fl input-sear" placeholder="搜索楼盘名称" v-model="buildingName">
          <a href="javascript:;" class="sear-icon fr" @click="searchBuildingInfo"></a>
        </div>
        <div class="cancel fr" @click="toback">取消</div>
      </div>
      <div class="hots">
        <div class="hot-sear">热门搜索:</div>
        <div class="hot-cont clearfix">
          <a href="javascript:;">精装修</a>
          <a href="javascript:;">朝南</a>
        </div>
      </div>
    </div>
</template>
<script>
  import { Toast } from 'mint-ui';

  export default {
    data(){
      return {
        buildingName:''
      }
    },
    methods:{
      toback(){
        this.$router.back()
      },
      searchBuildingInfo(){
        if(this.buildingName == ''||this.buildingName== null){
          Toast({
            message: '请输入楼盘名称',
            position: 'bottom',
            duration: 5000
          });
        }else{
          this.router.push({
            path:'/building_details',
            query:{
              buildingName:this.buildingName
            }
          })
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  /*测试*/
  .ceshi{
    border-top:solid 10px blue;
    border-bottom:solid 10px blue;
    padding: 10px 0;
    width: 100%;
    height: 300px;
    overflow-y: hidden;
    .ceshi-box{
      width: 2000px;
      padding-right: 30px;
      padding-left: 30px;
      height: 300px;
      /*overflow-y: auto;*/
     /* behavior :scroll;
      direction:right;*/
    }
    .ceshi-item{
      width: 100px;
      height: 300px;
      margin-right:20px;
      background-color:red;
      text-align: center;
      line-height: 300px;
      font-size: 30px;
      color:#fff;
    }
  }
.sear-box{
  .sear-top{
    height: 1.06rem;
    box-sizing:border-box;
    padding:0.18rem 0.2rem;
    background-color: #ececec;
    .sear-ipt{
      width: 6rem;
      height: 0.7rem;
      background-color: #fff;
      border-radius:3px;
      font-size: 0.3rem;
      .input-sear{
        width: 4.6rem;
        height: 0.7rem;
        padding-left:0.2rem;
        font-size: 0.3rem;
      }
      .sear-icon{
        width: 1rem;
        height: 0.7rem;
        background:url("../assets/img/search-icon.png") center center no-repeat;
        -webkit-background-size: 0.36rem;
        background-size: 0.36rem;
      }
    }
    .cancel{
      width: 1rem;
      height: 0.7rem;
      text-align: center;
      line-height: 0.7rem;
      font-size:0.32rem;
      color:#29a1f7;
    }
  }
  .hots{
    .hot-sear{
      height: .68rem;
      border-top:solid 1px #cfcfcf;
      border-bottom:solid 1px #cfcfcf;
      line-height: .68rem;
      font-size:0.34rem;
      padding-left:0.4rem;
      margin-bottom: .2rem;
      background-color: #f4f4f4;
    }
    .hot-cont{
      padding: .2rem .4rem;
      a{
        float: left;
        color:#000;
        font-size:0.3rem;
        padding:0.15rem 0.25rem;
        border:solid 1px #8e8e8e;
        margin-right: .2rem;
        margin-bottom: .2rem;
        border-radius: .1rem;
      }
    }
  }
}
</style>
