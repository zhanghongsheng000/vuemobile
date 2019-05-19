<template>
	<div class="buildingdetails_box">
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
		<div class="buildingdetails_container">
			<div class="building_message ">
				<div class="clearfix">
					<p class="building_name fl">{{roomName}}</p>
					<p class="fr buildingd_price"><span>{{price}}</span>元/m²/天</p>
				</div>
				<div class="buildingd_place clearfix">
					<p class="fr">{{address}}</p>
				</div>
			</div>
			<div class="message_details clearfix">
				<div class="messaged_part fl">
					<p>建筑面积</p>
					<p>{{compu(areaSize)}}㎡</p>
				</div>
				<div class="messaged_part fl">
					<p>朝向</p>
					<p>{{compu(orient)}}</p>
				</div>
				<div class="messaged_part fl">
					<p>装修情况</p>
					<p>{{compu(fitment)}}</p>
				</div>
			</div>
			<div class="message_details1 clearfix">
				<p class="fl">所属楼盘：<span>{{buildingGroupName}}</span></p>
				<p class="fl">物业费：<span>{{compu(manageFee)}}</span></p>
				<p class="fl">楼层：<span>{{compu(floorNum)}}</span></p>
				<p class="fl">交通：<span>{{compu(traffic)}}</span></p>
			</div>

			<div class="devide"></div>
			<div class="empty_rent">
				<div class="spe-title">
					<h6>户型图</h6>
				</div>
			</div>
			<div class="floor_2dview">
				<img src="../assets/img/housesource_details.png" />
				<!--<img :src="imgList.roomPic?imgur+roomPic:require('../assets/img/housesource_details.png')" alt="">-->
									
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
					<p>产权年限：<span>{{compu(stayInYear)}}</span></p>
					<p>绿化率：<span>21.2% </span></p>
					<p>开发商：<span>{{compu(developer)}}</span></p>
					<p>总层数：<span>地下{{compu(overGroundFloorNum)}}层、地上{{compu(underGroundFloorNum)}}层</span></p>
					<p>物业费：<span>{{compu(manageFee)}}</span></p>
					<p>停车数量：<span>{{compu(parkingNumDown+parkingNumUp)}}</span></p>
					<p>建筑面积：<span>{{compu(buildingArea)}}平方米</span></p>
					<p>入住时间：<span>{{compu(stayInYear)}}</span></p>
					<p>建筑类别：<span>{{compu(buildingGroupType)}}</span></p>
					<p>容积率：<span>{{compu(plotRatio)}}</span></p>
					<p>物业公司：<span>{{compu(manageCompany)}}</span></p>
					<p>层高：<span>{{compu(floorHight)}}</span></p>
					<p>电梯数量：<span>{{compu(elevator)}}</span></p>
					<p>装修状况：<span>{{compu(fitment)}}</span></p>
				</div>
			</div>
			<div class="empty_rent1 clearfix">
				<div class="spe-title">
					<h6>周边配置</h6>
				</div>
				<div class="around_deploy">
					<div class="map_area"></div>
					<div class="around_sort">
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
					</div>
				</div>
			</div>
			<div class="devide"></div>
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
							<div class="jiage"><strong>{{item.perRentAmount}}?</strong>元/㎡/天</div>
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
				imgur: 'http://116.255.247.182:8080',
				roomName: '', //房间名称
				price: '', //房间价格
				address: '', //房间位置
				areaSize: '', //房间面积
				orient: '', //房间朝向
				fitment: '', //装修状况
				floorNum: '', //楼层
				buildingGroupName: '', //所属楼盘名称
				manageFee: '', //物业费
				traffic: '', //交通
				area: '', //占地面积
				buildYear: '', //开盘时间
				stayInYear: '', //产权时间
				//少绿化率
				developer: '', //开发商
				overGroundFloorNum: '', //地上层数
				underGroundFloorNum: '', //地下层数
				manageFee: '', //物业费
				parkingNumDown: '', //地下停车数量
				parkingNumUp: '', //地上停车数量
				buildingArea: '', //建筑面积
				stayInYear: '', //入住时间
				buildingGroupType: '', //建筑类别
				plotRatio: '', //容积率
				manageCompany: '', //物业公司
				floorHight: '', //层高
				elevator: '', //电梯数量
				fitment: '', //装修状况
				buildingId: '',
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
				this.$http.get('/index/getRoomDetailByRoomId', {
						params: {
							roomId: this.$route.query.roomId
						}
					})
					.then((res) => {
						let data = res.data
						if(data.resultCode == '200') {
							let result = data.result
							console.log(result)
							this.roomName = result.baseInfo.roomName
							this.address = result.baseInfo.address
							this.price = result.baseInfo.price
							this.areaSize = result.baseInfo.areaSize
							this.orient = result.baseInfo.orient
							this.fitment = result.baseInfo.fitment
							this.floorNum = result.baseInfo.floorNum
							this.buildingGroupName = result.baseInfo.buildingGroupName
							this.manageFee = result.baseInfo.manageFee
							this.traffic = result.baseInfo.traffic

							this.area = result.buildingInfo.area
							this.buildYear = result.buildingInfo.buildYear
							this.stayInYear = result.buildingInfo.stayInYear
							this.developer = result.buildingInfo.developer
							this.overGroundFloorNum = result.buildingInfo.overGroundFloorNum
							this.underGroundFloorNum = result.buildingInfo.underGroundFloorNum
							this.manageFee = result.buildingInfo.manageFee
							this.parkingNumDown = result.buildingInfo.parkingNumDown
							this.parkingNumUp = result.buildingInfo.parkingNumUp
							this.buildingArea = result.buildingInfo.buildingArea
							this.stayInYear = result.buildingInfo.stayInYear
							this.buildingGroupType = result.buildingInfo.buildingGroupType
							this.plotRatio = result.buildingInfo.plotRatio
							this.manageCompany = result.buildingInfo.manageCompany
							this.floorHight = result.buildingInfo.floorHight
							this.elevator = result.buildingInfo.elevator
							this.fitment = result.buildingInfo.fitment
							
							this.imgList =result.imgList
							

							this.$http.get('/index/getSimilarityBuildingById', {
									params: {
										buildingId: result.buildingInfo.buildingId
									}
								})
								.then((response) => {
									const data = response.data
									let result = data.result
									

									this.jsons = data.result
									console.log(result)
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
			toDetail(buildingId, latitude, longitude) { //to详情页面
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
		.mint-swipe-item {
			img {
				width: 7.5rem;
				height: 4.8rem;
			}
		}
		.swiper_container {
			width: 7.5rem;
			height: 4.8rem;
		}
		.buildingdetails_container {
			.building_message {
				padding: 0.2rem;
				.building_name {
					font-size: .32rem;
					line-height: .4rem;
					color: #020202;
					padding-left: 0.1rem;
				}
				.buildingd_price {
					font-size: .32rem;
					color: #ff4400;
					padding-right: 0.45rem;
				}
				.buildingd_place {
					padding-top: 0.1rem;
					p {
						background: url(../assets/img/place.png) no-repeat;
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
						font-family: "宋体";
						padding-bottom: 0.05rem;
					}
					p:nth-child(2) {
						color: #020202;
						font-size: .3rem;
						line-height: .44rem;
						font-family: "宋体";
					}
				}
				.messaged_part:last-child {
					background: none;
				}
			}
			.message_details1 {
				padding: 0.2rem 0.2rem 0.4rem 0.2rem;
				p {
					margin-top: 0.05rem;
					width: 3.55rem;
					text-align: left;
					color: #848484;
					font-size: .28rem;
					line-height: .44rem;
					font-family: "宋体";
					span {
						color: #020202;
						font-size: .3rem;
						line-height: .44rem;
						font-family: "宋体";
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
			border: 1px solid #d9d9d9;
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
				font-family: "宋体";
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
				padding: 0.2rem .24rem;
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
			padding-left: 0.2rem;
		}
		.build-item:last-of-type {
			border-bottom: none;
		}
		.build-item {
			padding: 0.3rem 0;
			border-bottom: solid 1px #ccc;
			.spe-item {
				padding: 0.3rem 0;
				border-bottom: solid 1px #ccc;
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
					font-size: 0.32rem;
				}
				p {
					color: #8e8e8e;
				}
				.jiage {
					text-align: right;
					color: #ff4400;
				}
			}
		}
		.empty_rent1:last-child {
			padding-bottom: 0.2rem;
		}
	}
	
	.squre_pictire {
		padding: 0 0.24rem;
	}
</style>
<style>
	.buildingdetails_box {
		.mint-swipe-indicator.is-active {
			background: #29a1f7;
		}
		.mint-swipe-indicator {
			background: #FFFFFF;
		}
	}
</style>