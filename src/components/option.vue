<template>
  <div class="option-box">
    <div class="options">
      <div class="option-top">
        <div class="opt-tops clearfix">
          <div class="opt-item fl" @click="toggleTabs(0)" :class="{active:0==nowIndex}">区域<i class="el-icon-caret-bottom " :class="{'el-icon-caret-top':0==nowIndex}"></i></div>
          <div class="opt-item fl" @click="toggleTabs(1)" :class="{active:1==nowIndex}">租金<i class="el-icon-caret-bottom" :class="{'el-icon-caret-top':1==nowIndex}"></i></div>
          <div class="opt-item fl" @click="toggleTabs(2)" :class="{active:2==nowIndex}">面积<i class="el-icon-caret-bottom" :class="{'el-icon-caret-top':2==nowIndex}"></i></div>
          <div class="opt-item fl" @click="toggleTabs(3)" :class="{active:3==nowIndex}">更多<i class="el-icon-caret-bottom" :class="{'el-icon-caret-top':3==nowIndex}"></i></div>
        </div>
      </div>
      <div class="option-cont" v-show="isMask">
        <div class="option-items">
          <ul class="option-item " v-show="nowIndex===0">
            <li @click="qyTabs(0)" :class="{active:0==qyindex}">不限</li>
            <li
              v-for="item,index in qyList"
              :key='index'
              @click="qyTabs(index+1,item.countryCode)"
              :class="{active:index+1==qyindex}"
            >
              {{item.countryName}}
            </li>
          </ul>
          <ul class="option-item " v-show="nowIndex===1">
            <li @click="zjTabs(0)" :class="{active:0==zjindex}">不限</li>
            <li @click="zjTabs(1)" :class="{active:1==zjindex}">0-3元/m²/天</li>
            <li @click="zjTabs(2)" :class="{active:2==zjindex}">3-4元/m²/天</li>
            <li @click="zjTabs(3)" :class="{active:3==zjindex}">4-5元/m²/天</li>
            <li @click="zjTabs(4)" :class="{active:4==zjindex}">5-7元/m²/天</li>
            <li @click="zjTabs(5)" :class="{active:5==zjindex}">7-9元/m²/天</li>
            <li @click="zjTabs(6)" :class="{active:6==zjindex}">9-12元/m²/天</li>
            <li @click="zjTabs(7)" :class="{active:7==zjindex}">12元/m²/天以上</li>
          </ul>
          <ul class="option-item " v-show="nowIndex===2">
            <li @click="mjTabs(0)" :class="{active:0==mjindex}">不限</li>
            <li @click="mjTabs(1)" :class="{active:1==mjindex}">0-100m²</li>
            <li @click="mjTabs(2)" :class="{active:2==mjindex}">100-200m²</li>
            <li @click="mjTabs(3)" :class="{active:3==mjindex}">200-300m²</li>
            <li @click="mjTabs(4)" :class="{active:4==mjindex}">300-500m²</li>
            <li @click="mjTabs(5)" :class="{active:5==mjindex}">500-800m²</li>
            <li @click="mjTabs(6)" :class="{active:6==mjindex}">800-1000m²</li>
            <li @click="mjTabs(7)" :class="{active:7==mjindex}">1000-2000m²</li>
            <li @click="mjTabs(8)" :class="{active:8==mjindex}">2000m²以上</li>
          </ul>
          <div class="option-item-more clearfix" v-show="nowIndex===3">
            <ul class="option-item w50 h100 fl ">
              <li class="" @click="moreTabs(0)" :class="{active:0==moreIndex}">朝向</li>
              <li class="border-bottom" @click="moreTabs(1)" :class="{active:1==moreIndex}">装修</li>
            </ul>
            <div class="w50 fl more-height ">
              <ul class="option-item" v-show="moreIndex===0">
                <li @click="cxTabs(0)" :class="{active:0==cxindex}">不限</li>
                <li @click="cxTabs(1)" :class="{active:1==cxindex}">东</li>
                <li @click="cxTabs(2)" :class="{active:2==cxindex}">南</li>
                <li @click="cxTabs(3)" :class="{active:3==cxindex}">西</li>
                <li @click="cxTabs(4)" :class="{active:4==cxindex}">北</li>
                <li @click="cxTabs(5)" :class="{active:5==cxindex}">南北</li>
                <li @click="cxTabs(6)" :class="{active:6==cxindex}">东西</li>
                <li @click="cxTabs(7)" :class="{active:7==cxindex}">东南</li>
                <li @click="cxTabs(8)" :class="{active:8==cxindex}">西南</li>
                <li @click="cxTabs(9)" :class="{active:9==cxindex}">东北</li>
                <li @click="cxTabs(10)" :class="{active:10==cxindex}">西北</li>
              </ul>
              <ul class="option-item" v-show="moreIndex===1">
                <li @click="zxTabs(0)" :class="{active:0==zxindex}">不限</li>
                <li @click="zxTabs(1)" :class="{active:1==zxindex}">毛坯</li>
                <li @click="zxTabs(2)" :class="{active:2==zxindex}">简装</li>
                <li @click="zxTabs(3)" :class="{active:3==zxindex}">精装</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="searchBtn"@click="searchBtn">搜  索</div>
      </div>
    </div>
    <div class="option-mask" v-if="isMask" @click="hidemask"></div>
  </div>
</template>
<script>

  export default {
    data(){
      return {
        nowIndex:-1,
        isMask:false,
        moreIndex:0,
        qyindex:0,
        zjindex:0,
        mjindex:0,
        gdindex:0,
        cxindex:0,
        zxindex:0,
        qyList:[],
        qycode:'',
        zjcode:'',
        micode:'',
        cxcode:'',
        zxcode:''
      }
    },
    methods:{
      searchBtn(){
        this.isMask=false
        this.nowIndex=-1
        document.body.setAttribute("class","maskhide")
        document.getElementsByTagName('html')[0].setAttribute("class","maskhide")
        this.$emit('getData',{
          countryCode:this.qycode,
          rentRange:this.zjcode,
          roomArea:this.micode,
          roomOrient:this.cxcode,
          roomFitment:this.zxcode
        })
      },
      toggleTabs(index){
       this.nowIndex=index
        this.isMask=true
        document.body.setAttribute("class","maskshow")
        document.getElementsByTagName('html')[0].setAttribute("class","maskshow")
      },
      hidemask(){
        this.isMask=false
        this.nowIndex=-1
        document.body.setAttribute("class","maskhide")
        document.getElementsByTagName('html')[0].setAttribute("class","maskhide")
      },
      qyTabs(index,code){
        this.qyindex=index
       if(code){
          this.qycode=code
       }
      },
      zjTabs(index){
        this.zjindex=index
        if(index=='1'){
          this.zjcode='0-3'
        }else if(index=='2'){
          this.zjcode='3-4'
        }else if(index=='3'){
          this.zjcode='4-5'
        }else if(index=='4'){
          this.zjcode='5-7'
        }else if(index=='5'){
          this.zjcode='7-9'
        }else if(index=='6'){
          this.zjcode='9-12'
        }else if(index=='7'){
          this.zjcode='12-'
        }else{
          this.zjcode=''
        }
      },
      mjTabs(index){
        this.mjindex=index
        index=='0'?this.micode='':''
        index=='1'?this.micode='0-100':''
        index=='2'?this.micode='100-200':''
        index=='3'?this.micode='200-300':''
        index=='4'?this.micode='300-500':''
        index=='5'?this.micode='500-800':''
        index=='6'?this.micode='800-1000':''
        index=='7'?this.micode='1000-2000':''
        index=='8'?this.micode='2000-':''
      },
      moreTabs(index){
        this.moreIndex=index
      },
      cxTabs(index){
        this.cxindex=index
        index=='0'?this.cxcode='':''
        index=='1'?this.cxcode='E':''
        index=='2'?this.cxcode='S':''
        index=='3'?this.cxcode='W':''
        index=='4'?this.cxcode='N':''
        index=='5'?this.cxcode='SN':''
        index=='6'?this.cxcode='EW':''
        index=='7'?this.cxcode='ES':''
        index=='8'?this.cxcode='WS':''
        index=='9'?this.cxcode='EN':''
        index=='10'?this.cxcode='WN':''
      },
      zxTabs(index){
        this.zxindex=index
        index=='0'?this.zxcode='':''
        index=='1'?this.zxcode='1':''
        index=='2'?this.zxcode='2':''
        index=='3'?this.zxcode='3':''
      },
      getCountryList(){
        this.$http.get('/map/getCountryList',{params:{cityName:'郑州市'}})
          .then(res=>{
            let data = res.data
            // console.log(data)
            if(data.resultCode==200){
              // console.log(data.result)
              this.qyList=data.result
            }
          })
          .catch(err=>{
            console.log(err)
          })
      }
    },
    created(){
      this.getCountryList()
    }
  }
</script>
<style lang="less" scoped>
.option-box{
  .el-icon-caret-bottom:before{
    font-size:0.25rem;
    height:0.42rem;
  }
  .options{
    position: relative;
    z-index: 102;
  }
  .option-top{
    padding:0.2rem 0;
    border-top:solid 1px #f4f4f4;
    border-bottom:solid 1px #f4f4f4;
    background-color: #fff;
    .opt-item:last-of-type{
      border-right:none;
    }
    .opt-item{
      width: 25%;
      box-sizing: border-box;
      border-right:solid 1px #f4f4f4;
      line-height: 0.42rem;
      font-size:0.3rem;
      text-align: center;
      i{
        font-size: 0.5rem;
        position: relative;
      }
    }
    .opt-item.active{
      color:#29a1f7;
    }
  }
  .option-cont{
    background-color: #fff;
    .option-items{
      height:5.3rem;
      overflow-y: auto;
    }
    .option-item{
      li:last-of-type{
        border-bottom:none;
      }
      li{
        height:.8rem;
        border-bottom:solid 1px #f4f4f4;
        line-height: .8rem;
        font-size: 0.3rem;
        padding-left: 0.5rem;
        border-left:solid 6px #fff;
      }
      li.active{
        color:#29a1f7;
        border-left-color:#29a1f7;
      }
    }
    .more-height{
      height:5.3rem;
      overflow-y: auto;
      .option-item{
        li.active{
          border-left-color:#fff;
        }
      }
    }
    .w50{
      width: 50%;
    }
    .option-item.h100{
      li:last-of-type{
        border-bottom:solid 1px #f4f4f4;
      }
    }
    .h100{
      height:5.3rem;
      box-sizing: border-box;
      border-right:solid 1px #f4f4f4;
    }
    .searchBtn{
      height:1rem;
      text-align: center;
      line-height: 1rem;
      font-size: 0.32rem;
      border-top:solid 1px #f4f4f4;
      background-color: #29a1f7;
      color:#fff;
    }
  }

  .option-mask{
    z-index: 99;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    background: rgba(0,0,0,0.5);
  }


}
</style>
