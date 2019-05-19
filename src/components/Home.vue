<template>
	<div class="home-box">
		<div class="searchs clearfix">
			<div class="place fl">
				<a href="javascript:;">郑州</a>
			</div>
			<router-link class="sea-input fl" tag="div" to="/search">
				<i class="el-icon-search"></i>
				<span>挑写字楼，上居金所</span>
			</router-link>
			<router-link class="map-icon fl" tag="div" to="/map">
				<a href="javascript:;"></a>
			</router-link>
			<!--<div class="userphone fl">
        <a href="javascript:;"></a>
      </div>-->
		</div>
		<div class="link-items clearfix">
			<router-link class="link-item" tag="div" to="/zjyf">
				<img src="../assets/img/icon-1.png" alt="">
				<p>租金月付</p>
			</router-link>
			<div class="link-item" @click="dialogVisible(1)">
				<img src="../assets/img/icon-2.png" alt="">
				<p>委托找房</p>
			</div>
			<div class="link-item" @click="dialogVisible(2)">
				<img src="../assets/img/icon-3.png" alt="">
				<p>房屋托管</p>
			</div>
			<router-link class="link-item" tag="div" to="/Building">
				<img src="../assets/img/icon-4.png" alt="">
				<p>写字楼</p>
			</router-link>
			<router-link class="link-item" tag="div" to="/about_us">
				<img src="../assets/img/icon-5.png" alt="">
				<p>关于我们</p>
			</router-link>
			<router-link class="link-item" tag="div" to="/connect_us">
				<img src="../assets/img/icon-6.png" alt="">
				<p>联系我们</p>
			</router-link>
			<router-link class="link-item" tag="div" to="/talent">
				<img src="../assets/img/icon-7.png" alt="">
				<p>人才招聘</p>
			</router-link>
			<router-link class="link-item" tag="div" to="/download_app">
				<img src="../assets/img/icon-8.png" alt="">
				<p>下载APP</p>
			</router-link>
		</div>
		<div class="info-items clearfix">
			<div class="info-item">
				<img src="../assets/img/info1.png" alt="">
				<p class="info-text">今日房源</p>
				<p class="info-text2">{{roomTotalNum}}套</p>
			</div>
			<div class="info-item">
				<img src="../assets/img/info2.png" alt="">
				<p class="info-text">空置房源</p>
				<p class="info-text2">{{emptyRoomNum}}套</p>
			</div>
			<div class="info-item">
				<img src="../assets/img/info3.png" alt="">
				<p class="info-text">租金均价</p>
				<p class="info-text2">{{averagePrice}}元/㎡/天</p>
			</div>
			<div class="info-item">
				<img src="../assets/img/info4.png" alt="">
				<p class="info-text">今日成交</p>
				<p class="info-text2">{{cooperationNum}}套</p>
			</div>
		</div>
		<router-link class="condition" tag="div" to="/Building">
			<div class="con-item">
				<span>区域：</span>
				<span>市辖区</span>
				<span>中原区</span>
				<span>二七区</span>
				<span>管城回族区</span>
				<span>金水区</span>
				<i class="el-icon-arrow-right fr"></i>
			</div>
			<div class="con-item">
				<span>租金：</span>
				<span>0-3元/㎡/天</span>
				<span>3-4元/㎡/天</span>
				<span>4-5元/㎡/天</span>
				<i class="el-icon-arrow-right fr"></i>
			</div>
			<div class="con-item">
				<span>面积：</span>
				<span>0-100㎡</span>
				<span>100-200㎡</span>
				<span>200-300㎡</span>
				<i class="el-icon-arrow-right fr"></i>
			</div>
		</router-link>
		<div class="special">
			<div class="spe-title">
				<h6>特价房源</h6>
			</div>
			<div class="spe-list">

				<div class="spe-item clearfix" v-for="item,index in jsons" @click="toDetail(item.roomId)">
					<div class="spe-img fl">
						<!--<img src="../assets/img/test.jpg" alt="">-->
						<img :src="item.buildingPicture?imgur+item.buildingPicture:require('../assets/img/test.jpg')" alt="">
					</div>
					<div class="spe-cont">
						<h5>{{item.buildingGroupName}}</h5>
						<p class="spe-add">{{item.roomAddress}}</p>
						<p>{{item.roomArea}}㎡</p>
						<div class="jiage">{{item.roomPrice}}元/㎡/天</div>
					</div>
				</div>

			</div>
		</div>
		<div class="dialog">
			<el-dialog :title="text" @close="closeEvent" @open="openEvent" :visible.sync="dialog" width="6.6rem" top="3rem" :close-on-click-modal="false">
				<div class="dia-cont">
					<div class="dia-item">
						<el-input v-model.trim="username" placeholder="请输入姓名"></el-input>
					</div>
					<div class="dia-item">
						<el-input v-model.trim="phonetel" placeholder="请输入电话号码"></el-input>
					</div>
					<div class="dia-item">
						<el-button type="primary" @click="submission">提交信息</el-button>
					</div>
				</div>
			</el-dialog>
		</div>
		<floot-float></floot-float>
	</div>
</template>

<script>
	import flootFloat from '@/components/Floating'
	import { Toast } from 'mint-ui';

	export default {
		data() {
			return {
				text: '',
				username: '',
				phonetel: '',
				dialog: false,
				cooperationNum: '',
				emptyRoomNum: '',
				averagePrice: '',
				roomTotalNum: '',
				cityName: '郑州市',
				jsons: [],
				imgur: 'http://116.255.247.182:8080'
			}
		},
		methods: {
			dialogVisible(index) {
				this.dialog = true
				if(index == '1') {
					this.text = '委托找房'
				} else {
					this.text = '房屋托管'
				}
			},
			submission() {
				if(this.username == '') {
					Toast({
						message: '请输入姓名',
						position: 'middle'
					})
				} else if(this.phonetel == '') {
					Toast({
						message: '请输入电话',
						position: 'middle'
					})
				} else if(!/^0?1[3456789]\d{9}$/.test(this.phonetel)) {
					Toast({
						message: '请输入正确的电话号码',
						position: 'middle'
					})
				} else {
					if(this.text == '委托找房') {
						this.saveClient(1)
					} else if(this.text == '房屋托管') {
						this.saveClient(2)
					}
				}
			},
			saveClient(typenum) {
				this.$http.get('index/saveClient', {
						params: {
							name: this.username,
							telphone: this.phonetel,
							type: typenum
						}
					})
					.then(res => {
						let data = res.data
						if(data.resultCode == '200') {
							Toast({
								message: '提交信息成功',
								position: 'middle'
							});
						} else {
							Toast({
								message: data.resultCodeDesc,
								position: 'middle'
							});
						}
					})
					.catch(err => {
						console.log(err)
					})
			},
			closeEvent() {
				this.username = ''
				this.phonetel = ''
				document.body.setAttribute("class", "maskhide");
				document.getElementsByTagName('html')[0].setAttribute("class", "maskhide");
			},
			openEvent() {
				document.body.setAttribute("class", "maskshow");
				document.getElementsByTagName('html')[0].setAttribute("class", "maskshow");
			},
			getInfo() {
				this.$http.get('/map/getRoomNewInfo', {
						params: {
							cityName: this.cityName,
						}
					})
					.then((res) => {
						let data = res.data
						if(data.resultCode == '200') {
							let result = data.result
							this.cooperationNum = result.cooperationNum
							this.emptyRoomNum = result.emptyRoomNum
							this.averagePrice = result.averagePrice
							this.roomTotalNum = result.roomTotalNum
						} else {
							Toast({
								message: data.result,
								position: 'middle'
							});
						}
					})
					.catch((err) => {
						console.log(err)
					})
			},
			getList() {
				this.$http.get('/map/getSpecialOfferRoomList', {
						params: {
							cityName: this.cityName,
						}
					})
					.then((response) => {
						const data = response.data
						roomId: data.result.roomId
						this.jsons = data.result
					})
					.catch((err) => {
						console.log(err)
					})
			},
			toDetail(index) { //to详情页面
				this.$router.push({
					name: 'housesources_details',
					query: {
						roomId: index
					}
				})
			}
		},
		components: {
			flootFloat
		},
		created() {
			/*Toast({
			  message: '提示提示提示提示提示提示提示',
			  position: 'middle'
			});*/
			this.getInfo()
			this.getList()
		}
	}
</script>

<style scoped lang="less">
	.home-box {
		background-color: #f5f5f9;
		padding-top: 1rem;
		.searchs {
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 1rem;
			background-color: #29a1f7;
			padding: 0.18rem;
			box-sizing: border-box;
		}
		.place a {
			font-size: 0.3rem;
			color: #fff;
			line-height: 0.64rem;
			padding-right: 0.28rem;
			background: url("../assets/img/xiala.png") right center no-repeat;
			-webkit-background-size: 30%;
			background-size: 30%;
			margin-right: 0.5rem;
		}
		.sea-input {
			width: 4.38rem;
			margin-right: 1.05rem;
			box-sizing: border-box;
			padding-left: 0.7rem;
			background-color: #fff;
			border-radius: 5px;
			height: 0.64rem;
			line-height: 0.64rem;
			font-size: 0.3rem;
			color: #999;
		}
		.map-icon {
      width:0.32rem;
      height: 0.64rem;
      background: url("../assets/img/map-icon.png") center center no-repeat;
      -webkit-background-size: 100%;
      background-size: 100%;
			a {
				display: inline-block;
        width:0.32rem;
        height: 0.64rem;
			}
		}
		.userphone {
			a {
				display: inline-block;
				width: 0.34rem;
				height: 0.64rem;
				background: url("../assets/img/user.png") center center no-repeat;
				-webkit-background-size: 100%;
				background-size: 100%;
			}
		}
	}

	.link-items {
		background-color: #fff;
		padding-top: 0.3rem;
		margin-bottom: 0.2rem;
		.link-item {
			width: 25%;
			float: left;
			text-align: center;
			margin-bottom: 0.1rem;
			img {
				width: 0.8rem;
				height: 0.8rem;
			}
			p {
				font-size: 0.3rem;
				line-height: 0.6rem;
			}
		}
	}

	.info-items {
		background-color: #fff;
		padding-top: 0.3rem;
		padding-bottom: 0.2rem;
		margin-bottom: 0.2rem;
		.info-item {
			float: left;
			width: 25%;
			text-align: center;
			img {
				width: 0.5rem;
				height: 0.5rem;
				margin-bottom: 0.1rem;
			}
			p {
				font-size: 0.3rem;
				line-height: 0.5rem;
			}
			.info-text2 {
				color: #36a7f8;
			}
		}
	}

	.condition {
		margin-bottom: 0.2rem;
		background-color: #fff;
		padding-left: 0.3rem;
		margin-bottom: 0.2rem;
		.con-item:last-of-type {
			border-bottom: none;
		}
		.con-item {
			font-size: 0;
			height: 0.8rem;
			line-height: 0.8rem;
			border-bottom: solid 1px #f4f4f4;
			span {
				font-size: 0.3rem;
				margin: 0 3px;
			}
			i {
				font-size: 0.34rem;
				line-height: 0.8rem;
			}
		}
	}

	.special {
		background-color: #fff;
		.spe-title {
			padding: 0.2rem 0;
			border-bottom: solid 1px #f4f4f4;
			h6 {
				font-size: 0.36rem;
				padding-left: 0.34rem;
				border-left: solid 7px #29a1f7;
			}
		}
	}

	.spe-list {
		padding-left: 0.3rem;
		padding-bottom: 0.3rem;
		.spe-item:last-of-type {
			border-bottom: none;
		}
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
			padding-right: 0.3rem;
			margin-left: 2.4rem;
			font-size: 0.3rem;
			h5 {
				font-size: 0.34rem;
			}
			.spe-add {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 0.28rem;
			}
			p {
				color: #8e8e8e;
				font-size: 0.28rem;
			}
			.jiage {
				text-align: right;
				font-size: .3rem;
				color: #ff4400;
			}
		}
	}

	.dia-cont {
		.dia-item {
			margin-bottom: 15px;
		}
	}
</style>
<style lang="less">
	/*.sea-input{
    .el-input__inner{
      height: 0.64rem;
      line-height: 0.64rem;
      font-size: 0.2rem;
    }
    .el-input__icon{
      line-height: 0.64rem;
    }
    .el-input__inner:focus{
      border-color:#c0c4cc;
    }
  }*/

	.mint-toast {
		z-index: 100000!important;
	}

	.dialog {
		.el-dialog__header {
			text-align: center;
		}
		.el-icon-close {
			position: relative;
			top: -5px;
			font-size: 24px;
			color: #000;
		}
		.el-button--primary {
			width: 100%;
			font-size: 0.3rem;
		}
	}
</style>
