<template>
	<div class="buildingdetails_box">
    <div class="top clearfix" id="topComponent">
      <router-link tag="div" to="/Building" class="link-home fl">
        <i class="el-icon-arrow-left"></i>
        <span>返回</span>
      </router-link>
    </div>
		<div class="swiper_container">
			<mt-swipe :auto="4000">
				<mt-swipe-item>
					<img src="../assets/img/aboutus_head.png" />
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../assets/img/connectus_head.png" />
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../assets/img/talent_head.png" />
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="buildingdetails_container ">
			<div class="building_message">
				<div class="clearfix">
					<p class="building_name fl">{{buildingName}}</p>
					<p class="fr buildingd_price"><span>{{compu(buildingAveragePrice)}}</span>元/m²/天</p>
				</div>
				<div class="buildingd_place clearfix">
					<p class="fr">{{buildingAddress}}</p>
				</div>
			</div>
			<div class="message_details clearfix">
				<div class="messaged_part fl">
					<p>共有房源</p>
					<p>{{compu(totalRoomNum)}}</p>
				</div>
				<div class="messaged_part fl">
					<p>空租房源</p>
					<p>{{compu(totalRoomNum-rentRoomNum)}}</p>
				</div>
				<div class="messaged_part fl">
					<p>已租房源</p>
					<p>{{compu(rentRoomNum)}}</p>
				</div>
			</div>
			<div class="message_details1 clearfix">
				<p class="fl">总层数：<span>{{compu(floorNum)}}</span></p>
				<p class="fl">电梯数量：<span>{{compu(buildingGoodsElevator+buildingCustomerElevator)}}</span></p>
				<p class="fl">物业费：<span>{{compu(manageFee)}}</span></p>
				<p class="fl">装修状况：<span>{{compu(fitment)}}</span></p>
				<p class="fl">空调：<span>{{compu(airCondition)}}</span></p>
			</div>
			<div class="devide"></div>
			<div class="empty_rent">
				<div class="spe-title">
					<h6>空租房源<span>(32)</span>套</h6>
				</div>
				<div class="empty_container">
					<div class="empty_content">
						<div class="emptysource_part fl">
							<img src="../assets/img/empty_building.png" />
							<p class="building_num">1004</p>
							<div class="empty_message clearfix">
								<p class="fl">500m²</p>
								<p class="fr">5元/m²/天</p>
							</div>
						</div>
						<div class="emptysource_part fl">
							<img src="../assets/img/empty_building.png" />
							<p class="building_num">1004</p>
							<div class="empty_message clearfix">
								<p class="fl">500m²</p>
								<p class="fr">5元/m²/天</p>
							</div>
						</div>
						<div class="emptysource_part fl">
							<img src="../assets/img/empty_building.png" />
							<p class="building_num">1004</p>
							<div class="empty_message clearfix">
								<p class="fl">500m²</p>
								<p class="fr">5元/m²/天</p>
							</div>
						</div>
						<div class="emptysource_part fl">
							<img src="../assets/img/empty_building.png" />
							<p class="building_num">1004</p>
							<div class="empty_message clearfix">
								<p class="fl">500m²</p>
								<p class="fr">5元/m²/天</p>
							</div>
						</div>
						<div class="emptysource_part fl">
							<img src="../assets/img/empty_building.png" />
							<p class="building_num">1004</p>
							<div class="empty_message clearfix">
								<p class="fl">500m²</p>
								<p class="fr">5元/m²/天</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="empty_rent">
				<div class="spe-title" style="padding-top: 0;">
					<h6>2D视图</h6>
				</div>
				<div class="view_con">
					<el-form ref="form" :model="form" label-width="7.5rem">
						<el-select v-model="form.region" placeholder="选择楼层">
							<el-option label="1" value="1"></el-option>
							<el-option label="2" value="2"></el-option>
						</el-select>
					</el-form>
				</div>
			</div>
			<div class="floor_2dview">
				<img src="../assets/img/floor_2dview.png" />
			</div>
			<div class="empty_rent">
				<div class="spe-title">
					<h6>楼盘介绍</h6>
				</div>
				<div class="floor_describe">
					<p>楼盘介绍</p>
				</div>
			</div>
			<div class="empty_rent1">
				<div class="spe-title">
					<h6>基本信息</h6>
				</div>
				<div class="basemessage">
					<p>占地面积：<span>{{compu(area)}}m²</span></p>
					<p>开盘时间：<span>{{compu(buildYear)}}</span></p>
					<p>产权年限：<span>{{compu(propertyYear)}}</span></p>
					<p>绿化率：<span>{{compu(greeningRate)}}</span></p>
					<p>开发商：<span>{{compu(developer)}}</span></p>
					<p>总层数：<span>地下{{compu(undergroundFloorNum)}}层、地上{{compu(overgroundFloorNum)}}层</span></p>
					<p>物业费：<span>{{compu(manageFee)}}</span></p>
					<p>停车数量：<span>{{compu(parkingNumUp+parkingNumDown)}}</span></p>
					<p>建筑面积：<span>{{compu(buildArea)}}平方米</span></p>
					<p>入住时间：<span>{{compu(stayInYear)}}</span></p>
					<p>建筑类别：<span>{{compu(buildingType)}}</span></p>
					<p>容积率：<span>{{compu(plotRatio)}}</span></p>
					<p>物业公司：<span>{{compu(manageCompany)}}</span></p>
					<p>层高：<span>{{compu(floorHeight)}}</span></p>
					<p>电梯数量：<span>{{compu(buildingGoodsElevator+buildingCustomerElevator)}}</span></p>
					<p>装修状况：<span>{{compu(fitment)}}</span></p>
				</div>
			</div>
			<div class="empty_rent1 clearfix">
				<div class="spe-title">
					<h6>周边配置</h6>
				</div>
				<div class="around_deploy">
					<div class="map_area" id="map_area"></div>
					<!--<div class="around_sort clearfix">
						<div class="aroundsort_part fl">
							<img src="../assets/img/icon_car.png" />
							<p>交通</p>
						</div>
						<div class="aroundsort_part fl">
							<img src="../assets/img/icon_food.png" />
							<p>餐饮</p>
						</div>
						<div class="aroundsort_part fl">
							<img src="../assets/img/icon_bank.png" />
							<p>银行</p>
						</div>
						<div class="aroundsort_part fl">
							<img src="../assets/img/icon_hotel.png" />
							<p>酒店</p>
						</div>
					</div>-->
				</div>
			</div>
			<div class="devide" style="margin-top: 0"></div>
			<div class="empty_rent1">
				<div class="spe-title">
					<h6>猜你喜欢</h6>
				</div>
				<div class="build-list">
					<div class="build-item clearfix" v-for="item,index in jsons" @click="toDetail(item.buildingId,item.latitude,item.longitude)">
						<div class="spe-img fl">
							<!--<img src="../assets/img/test.jpg" alt="">-->
							<img :src="item.buildingPicture?imgur+item.buildingPicture:require('../assets/img/test.jpg')" alt="">
						</div>
						<div class="spe-cont">
							<h5>{{item.name}}</h5>
							<p>共有{{item.totalRoomNumber}}套 空租{{item.emptyRentNumber}}套</p>
							<div class="jiage"><strong>{{item.perRentAmount}}元</strong>/㎡/天</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<flootFloat></flootFloat>
	</div>

</template>

<script>
	import flootFloat from '@/components/Floating'

	export default {
		data() {
			return {
				buildingName: '', //楼盘+写字楼名称
				buildingAveragePrice: '', //均价
				buildingAddress: '', //写字楼全称地址
				totalRoomNum: '', //共有房源
				rentRoomNum: '', //已租房源
				floorNum: '', //总层数
				buildingGoodsElevator: '', //货梯数量
				buildingCustomerElevator: '', //客梯数量
				manageFee: '',
				fitment: '',
				airCondition: '',
				area: '',
				buildYear: '',
				propertyYear: '',
				greeningRate: '',
				developer: '',
				undergroundFloorNum: '',
				overgroundFloorNum: '',
				manageFee: '',
				parkingNumUp: '', //地上停车位
				parkingNumDown: '', //地下停车位
				buildArea: '',
				stayInYear: '',
				buildingType: '',
				plotRatio: '',
				manageCompany: '',
				floorHeight: '',

				imgur: 'http://116.255.247.182:8080',

				jsons: [],

				form: {
					region: ''
				}
			}
		},
		methods: {
			compu(str) {
				return str ? str : '?'
			},
			getin() {
				this.$http.get('/index/getbuildingInfo', {
						params: {
							buildingId: this.$route.query.buildingId
						}
					})
					.then((res) => {
						let data = res.data
						if(data.resultCode == '200') {
							let result = data.result.baseInfo
							console.log(result)
							this.buildingName = result.buildingName
							this.buildingAveragePrice = result.buildingAveragePrice
							this.buildingAddress = result.buildingAddress
							this.totalRoomNum = result.totalRoomNum
							this.rentRoomNum = result.rentRoomNum
							this.floorNum = result.floorNum
							this.buildingCustomerElevator = result.buildingCustomerElevator
							this.buildingGoodsElevator = result.buildingGoodsElevator
							this.manageFee = result.manageFee
							this.fitment = result.fitment
							this.airCondition = result.airCondition
							this.area = result.area
							this.buildYear = result.buildYear
							this.propertyYear = result.propertyYear
							this.greeningRate = result.greeningRate
							this.developer = result.developer
							this.overgroundFloorNum = result.overgroundFloorNum
							this.manageFee = result.manageFee
							this.parkingNumDown = result.parkingNumDown
							this.parkingNumUp = result.parkingNumUp
							this.buildArea = result.buildArea
							this.stayInYear = result.stayInYear
							this.buildingType = result.buildingType
							this.plotRatio = result.plotRatio
							this.manageCompany = result.manageCompany
							this.floorHeight = result.floorHeight

							this.$http.get('/index/getSimilarityBuildingById', {
									params: {
										buildingId: result.buildingId
									}
								})
								.then((response) => {
									const data = response.data
									let result = data.result
									this.jsons = data.result
                  console.log(data.result)
								})
								.catch((err) => {
									console.log(err)
								})
						}
					})
					.catch((err) => {
						console.log(err)
					})
			},
			toDetail(buildingId, latitude, longitude) {//to详情页面
				this.$router.push({
					name: 'building_details',
					query: {
						buildingId: buildingId,
						latitude: latitude,
						longitude: longitude
					}
				});
				this.getin();

			}

		},
		components: {
			flootFloat
		},
		created() {
			this.getin()
		}
	}
</script>

<style lang="less" scoped>
	.buildingdetails_box {
    #topComponent{
      line-height: 0.8rem;
      padding: 0 0.3rem;
      height: 1rem;
      background-color: #fbfcff;
      color: #000000;
      .link-home {
        margin-top: 0.08rem;
        font-size: 0.3rem;
        span {
          line-height: 1rem;
          vertical-align: middle;
          font-size: 0.3rem;
          display: inline-block;
          margin-top: -0.08rem;
        }
      }
      .link-home .el-icon-arrow-left{
        color: #000000;
      }
    }
		.mint-swipe-item {
			img {
				width: 7.5rem;
				height: 4.2rem;
			}
		}
		.swiper_container {
			width: 7.5rem;
			height: 4.2rem;
		}
		.buildingdetails_container {
			.building_message {
				padding: 0.4rem 0.2rem 0.2rem 0.2rem;
				.building_name {
					font-size: .32rem;
					line-height: .4rem;
					color: #020202;
					padding-left: 0.1rem;
				}
				.buildingd_price {
					font-size: .32rem;
					color: #ff4400;
					padding-right: 0.25rem;
				}
				.buildingd_place {
					padding-top: 0.1rem;
					p {
						background: url(../assets/img/place1.png) no-repeat;
						background-size: 0.2rem 0.25rem;
						background-position: 0.1rem 0.1rem;
						width: 6.8rem;
						line-height: .44rem;
						padding-left: 0.35rem;
						font-size: .28rem;
						color: #848484;
					}
				}
			}
			.message_details {
				padding-top: 0.2rem;
        padding-bottom: 0.1rem;
				.messaged_part {
					width: 33%;
					text-align: center;
					background: url(../assets/img/devide.png) no-repeat;
					background-position: 99%;
					background-size: 1px 0.61rem;
					p:nth-child(1) {
						color: #848484;
						font-size: .28rem;
						line-height: .44rem;
						padding-bottom: 0.05rem;
					}
					p:nth-child(2) {
						color: #020202;
						font-size: .28rem;
						line-height: .44rem;
					}
				}
				.messaged_part:last-child {
					background: none;
				}
			}
			.message_details1 {
				padding: 0.2rem;
				p {
          margin-left: 0.1rem;
					margin-top: 0.05rem;
					width: 3.45rem;
					text-align: left;
					color: #848484;
					font-size: .28rem;
					line-height: .44rem;
					span {
						color: #020202;
						font-size: .28rem;
						line-height: .44rem;
					}
				}
			}
		}
		.devide {
			width: 100%;
			height: 0.2rem;
			background: #f4f4f4;
			margin-top: 0.2rem;
		}
		.empty_rent {
			background-color: #fff;
			.spe-title {
				padding: 0.2rem 0;
				h6 {
					font-size: 0.3rem;
					padding-left: 0.17rem;
					border-left: solid 7px #29a1f7;
					span {
						font-size: 0.28rem;
						color: #848484;
						font-weight: 500;
					}
				}
			}
		}
		.view_con {
			margin: 0.2rem 0.24rem;
		}
		.floor_2dview {
			border: 1px solid #f4f4f4;
			margin: 0.2rem 0.27rem;
			text-align: center;
			padding: 0.4rem 0 0.2rem 0;
			img {
				width: 6.69rem;
				height: 3.41rem;
			}
		}
		.floor_describe {
			padding: 0.2rem;
			p {
				font-size: 0.3rem;
				line-height: 0.44rem;
				color: #848484;
				padding-left: 0.1rem;
			}
		}
		.empty_rent1 {
			background-color: #fff;
			.spe-title {
				padding: 0.2rem 0;
				h6 {
					font-size: 0.3rem;
					padding-left: 0.2rem;
					border-left: solid 7px #29a1f7;
				}
			}
			.basemessage {
				padding: 0 0.24rem 0.1rem 0.24rem;
				p {
					font-size: 0.3rem;
					line-height: 0.63rem;
					color: #848484;
					padding-left: 0.1rem;
					span {
						color: #020202;
					}
				}
			}
			.around_deploy {
				padding: 0.2rem .24rem 0 0.24rem;
				.map_area {
					width: 7rem;
					height: 3.04rem;
					background: red;
				}
				.aroundsort_part {
					padding: 0.2rem 0;
					text-align: center;
					width: 25%;
					img {
						margin-top: 0.1rem;
						width: .42rem;
						height: .42rem;
					}
					p {
						font-size: 0.26rem;
						line-height: 0.44rem;
						color: #848484;
					}
				}
			}
		}
		.build-list {
			padding:0 0.2rem;
		}
		.build-item:last-of-type {
			border-bottom: none;
		}
		.build-item {
			padding: 0.3rem 0;
			border-bottom: 1px solid #f4f4f4;
			.spe-item {
				padding: 0.3rem 0;
				border-bottom: 1px solid #f4f4f4;
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
				padding-right: 0.3rem;
				margin-left: 2.4rem;
				h5 {
					font-size: 0.3rem;
          line-height: 0.42rem;
				}
				p {
          font-size: 0.3rem;
					color: #8e8e8e;
				}
				.jiage {
          font-size: 0.3rem;
					text-align: right;
					color: #ff4400;
				}
			}
		}
		.empty_rent1:last-child {
			padding-bottom: 0.2rem;
		}
    .empty_container {
      margin: 0 0.24rem;
      /*border-bottom: 1px solid #DEDEDE;*/
      width: 94%;
      overflow-y: auto;
      padding-bottom: 0.4rem;
      .empty_content {
        width: 1200px;
        .emptysource_part {
          width: 2.5rem;
          margin-right: 0.22rem;
          img {
            border-radius: 0.08rem;
            width: 2.5rem;
            height: 1.8rem;
          }
          .building_num {
            position: relative;
            width: 0.66rem;
            height: 0.32rem;
            background: #29a1f7;
            color: #FFFFFF;
            /*padding: 0.1rem 0 0 0.1rem;*/
            vertical-align: middle;
            text-align: center;
            margin-top: -1.88rem;
            border-radius: 0.1rem 0 0 0;
            padding-top: 0.15rem;
          }
          .empty_message {
            /*background: #d9d9d9;*/
            height: 0.46rem;
            width: 100%;
            margin-top: 1.4rem;
            p {
              padding: 0.1rem 0.05rem 0 0.05rem;
              font-size: 0.26rem;
            }
          }
        }
      }
    }
	}
</style>
<style lang="less">
	.buildingdetails_box {
		.el-select {
			width: 100%;
		}
		.el-input__inner {
			text-align: center;
			background: #e5f3fd;
			border: 1px solid #c5e4fa;
		}
		.el-select-dropdown__item {
			text-align: center;
		}
		.mint-swipe-indicator.is-active {
			background: #29a1f7;
		}
		.mint-swipe-indicator {
			background: #FFFFFF;
		}
	}
</style>
