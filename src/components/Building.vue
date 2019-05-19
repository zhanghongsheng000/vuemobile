<template>
	<div class="build-box" v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="拼命加载中..." element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
		<div class="top clearfix">
			<router-link tag="div" to="/" class="link-home fl">
				<i class="el-icon-arrow-left"></i>
				<span>首页</span>
			</router-link>
			<router-link class="to-sear fr" tag="div" to="/search">
				<i class="el-icon-search"></i>
			</router-link>
			<div class="build-title">写字楼</div>
		</div>
		<option-bar @getData="getOpt" :class="searchBarFixed == true ? 'isFixed' :''" id="searchBar"></option-bar>
		<div class="build-list" :class="searchBarFixed == true ?'paddtop':''">
      <mt-loadmore
        :top-method="loadTop"
        :bottom-all-loaded="isLastPage"
        ref="loadmore"
      >
          <div class="build-item clearfix"
               v-for="item,index in buildList"
               :key="index"
               @click="toDetials(item.buildingId,item.latitude,item.longitude)"
          >
            <div class="spe-img fl">
              <img :src="item.buildingPicture?imgur+item.buildingPicture:require('../assets/img/test.jpg')" alt="">
              <!--//-->
            </div>
            <div class="spe-cont">
              <h5>{{item.buildingName}}</h5>
              <!--<p>共有房源38套 空租1套 出租73套</p>-->
              <p>空租{{item.emptyRentNumber}}套 </p>
              <p class="speaddidas">{{item.buildingAddress}}</p>
              <div class="jiage"><strong>{{buildPrice(item.buildingAveragePrice)}}</strong>元/㎡/天</div>
            </div>
          </div>
      </mt-loadmore>
			<!--
			<div class="build-item clearfix">
				<div class="spe-img fl">
					<img src="../assets/img/test.jpg" alt="">
				</div>
				<div class="spe-cont">
					<h5>兴业大厦B座9</h5>
					<p>共有房源38套 空租1套 出租73套</p>
					<p>金水区农业路东22号...</p>
					<div class="jiage"><strong>5</strong>元/㎡/天</div>
				</div>
			</div>-->
		</div>
		<!--<flootFloat></flootFloat>-->
	</div>
</template>
<script>
	import flootFloat from '@/components/Floating'
	import option from '@/components/option'
  import { Toast } from 'mint-ui';
  import { Loadmore } from 'mint-ui';
	// import { Loading } from 'element-ui'
	export default {
		data() {
			return {
				scroll: '',
				searchBarFixed: false,
				isMask: false,
				fullscreenLoading: true, //loding
				imgur: 'http://116.255.247.182:8080',
				buildList: [],
				isLastPage:false, //是否有下一页
				indexId: '', //下一页用的id
        buildingListParams:{
          cityName: '郑州市',
          mapZoom: '12',
          indexId: 0,
          direction: 'DOWN'
        }
			}
		},
		computed: {

		},
		methods: {
      loadTop(){//上拉加载更多
        this.getBuildList({
          cityName: '郑州市',
          mapZoom: '12',
          indexId: this.indexId,
          direction: 'DOWN'
        })
      },
      test(){
        console.log(1111)
      },
      getOpt(opt){
        this.fullscreenLoading = true
        opt.cityName='郑州市'
        opt.mapZoom='12'
        opt.indexId='0'
        opt.direction='DOWN'
//        opt.rentRange=''
//        opt.roomArea=''//房屋面积
//        opt.roomFitment =''
//        opt.roomOrient = ''//房屋朝向
        this.getBuildList(opt)
        this.fullscreenLoading = false
      },
			buildPrice(str) {
				return str ? str : '?'
			},
			getBuildList(param) {
				this.$http.get('map/searchRoomListByPage', {
						params: param
					})
					.then(res => {
						let datas = res.data
						// console.log(datas)
						if(datas.resultCode == '200') {
							this.isLastPage = datas.isLastPage=='Y'?true:false
							this.indexId = datas.indexId
              if(datas.result.buildingList<1){
                this.buildList=[]
                Toast({
                  message: '暂时没有房源',
                  position: 'middle'
                });
              }else{
                this.buildList=datas.result.buildingList
                // console.log(datas.result.buildingList)
                console.log(this.buildList)
              }

							this.fullscreenLoading = false
						}else{
              Toast({
                message: datas.resultCodeDesc,
                position: 'middle'
              });
            }
					})
					.catch(err => {
						console.log(err)
					})
			},
			handleScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				var offsetTop = document.querySelector('#searchBar').offsetTop
				if(scrollTop > offsetTop) {
					this.searchBarFixed = true
				} else {
					this.searchBarFixed = false
				}
			},
			toDetials(buildingId, latitude, longitude) { //to详情页面
				this.$router.push({
					name: 'building_details',
					query: {
						buildingId: buildingId,
						latitude: latitude,
						longitude: longitude
					}
				})
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		},
		components: {
			flootFloat,
			optionBar: option
		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll)
		},
		created() {
			this.getBuildList({
				cityName: '郑州市',
				mapZoom: '12',
				indexId: 0,
				direction: 'DOWN',
        rentRange:'',
//        opt.roomArea=''//房屋面积
//        opt.roomFitment =''
//        opt.roomOrient = ''//房屋朝向
			})
		}
	}
</script>
<style lang="less" scoped>
	.build-box {
		.top {
			line-height: 1rem;
			padding: 0 0.3rem;
			height: 1rem;
			background-color: #fbfcff;
			color: #000000;
			.link-home {
				font-size: 0.3rem;
				span {
					line-height: 1.2rem;
					vertical-align: middle;
					font-size: 0.3rem;
				}
			}
      .link-home .el-icon-arrow-left{
        color: #000000;
        font-size:0.35rem;
      }
      .el-icon-search:before{
        color:#000000;
        font-size:0.35rem;
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
		.paddtop {
			padding-top: 0.85rem;
		}
		.build-list {
			padding-left: 0.2rem;
		}
		.build-item:last-of-type {
			border-bottom: none;
		}
		.build-item {
			padding: 0.3rem 0;
			border-bottom: solid 1px #f4f4f4;
			.spe-item {
				padding: 0.3rem 0;
				border-bottom: solid 1px #f4f4f4;
			}
			.spe-img {
				width: 2.2rem;
				height: 1.58rem;
				margin-right: 0.2rem;
				img {
					width: 100%;
					height: 100%;
					border-radius: 5px;
				}
			}
			.spe-cont {
        position:relative;
				padding-right: 0.3rem;
				margin-left: 2.4rem;
        line-height:0.42rem;
        height:1.58rem;
				h5 {
					font-size: 0.30rem;
				}
				p {
					color: #8e8e8e;
					font-size: 0.28rem;
				}
				.speaddidas {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.jiage {
          position:absolute;
          bottom:-0.1rem;
          right:0.3rem;
					color: #ff4400;
					font-size: 0.3rem;
          font-weight:bold;
				}
			}
		}
		.mask {
			position: fixed;
			left: 0;
			bottom: 0;
			top: 0;
			right: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, .5);
			z-index: 99;
		}
	}

	.isFixed {
		position: fixed;
		background-color: #Fff;
		top: 0;
		z-index: 999;
		width: 100%;
	}
</style>
<style lang="less">
	.link-home {
		.el-icon-arrow-left {
			font-size: 26px;
			color: #fff;
			vertical-align: middle;
		}
	}
</style>
