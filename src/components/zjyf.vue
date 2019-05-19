<template>
	<div>
    <TOP></TOP>
		<div class="head_bg">
			<img src="../assets/img/zjyf_hbg.png" />
		</div>
		<div class="zjyf_container">
			<div class="zjyf_content">
				<p>“租金月付”是河南居金所房地产营销策划有限公司携手金融机构推出的一款针对写字楼企业、商户租金支付的金融服务产品，通过引入金融机构实现企业租户按月付房租，缓解企业资金压力，提升企业资金使用率，盘活企业资金。</p>
			</div>
			<div class="zjyf_zerom">
				<img src="../assets/img/zero_left.png" class="fl" />
				<img src="../assets/img/zero_right.png" class="fr" />
				<div class="clearfix"></div>
				<ul class="text-list">
					<li>放款速度快，资料审核后1-3个工作日；</li>
					<li>纯信用，无担保，无抵押；</li>
					<li>额度高，最高上限50万；</li>
					<li>合作共赢，缓解企业交租压力，降低房屋出租难度，房东快速收回房租；</li>
				</ul>
			</div>
			<div class="clearfix"></div>
			<div class="apply_condit">
				<img src="../assets/img/apply_cleft.png" class="fl" />
				<img src="../assets/img/apply_cright.png" class="fr" />
				<div class="clearfix"></div>
				<ul class=" text-list">
					<li>申请条件：营业执照满3个月；</li>
					<li>服务额度：最高上限50万；</li>
					<li>服务期限：12—24期；</li>
					<li>还款方式：按月还本金；</li>
					<li>申请资料：营业执照、法人身份证、办公室租赁合同；</li>
				</ul>
			</div>
			<div class="clearfix"></div>
			<div class="apply_progress">
				<img src="../assets/img/apply_pleft.png" class="fl apply_pleft" />
				<img src="../assets/img/apply_pright.png" class="fr apply_pright" />
				<div class="clearfix"></div>
				<div class="progress">
					<img src="../assets/img/progress.png" />
					<img src="../assets/img/depart.png" />
					<h3>租金月付 还款方便 零利息</h3>
					<p>一键匹配适合您的办公室</p>
				</div>
			</div>
			<div class="apply_con">
				<el-input placeholder="请输入姓名" v-model.trim="userName" >
				</el-input>
				<el-input placeholder="请输入电话号码" v-model.trim="userPhone" >
				</el-input>
				<el-row>
					<el-button type="primary" @click="apply_zjyf">立即申请租金月付</el-button>
				</el-row>
			</div>
		</div>
	</div>
</template>
<script>
  import { Toast } from 'mint-ui';
	export default {
		data() {
			return {
        userName: '',
        userPhone: ''
			}
		},
		methods: {
			apply_zjyf() {
				if(this.userName == '') {
          Toast({
            message: '请输入姓名',
            position: 'middle'
          })
				} else if(this.userPhone == '') {
          Toast({
            message: '请输入电话',
            position: 'middle'
          })
				} else if(!/^0?1[3456789]\d{9}$/.test(this.userPhone)) {
          Toast({
            message: '请输入正确的电话号码',
            position: 'middle'
          })
				} else {
          this.$http.get('index/saveClient',{
            params:{
              name:this.userName,
              telphone:this.userPhone,
              type:3
            }
          })
            .then(res=>{
              let data=res.data
              if(data.resultCode=='200'){
                Toast({
                  message:'提交信息成功',
                  position: 'middle'
                });
                this.userName=''
                this.userPhone=''
              }else{
                Toast({
                  message:data.resultCodeDesc,
                  position: 'middle'
                });
              }
            })
            .catch(err=>{
              console.log(err)
            })
				}

			},
		}
	}
</script>
<style lang="less" scoped>
	.text-list {
		li {
			line-height: .5rem;
			font-size: .3rem;
			background: url("../assets/img/list_tyle.png") 0.1rem 0.15rem no-repeat;
			padding-left: 0.5rem;
			-webkit-background-size: 0.18rem;
			background-size: 0.18rem;
		}
	}

	.head_bg img {
		width: 7.5rem;
		height: 3.8rem;
	}

	.zjyf_container {
		padding: 0.3rem;
		.zjyf_content p {
			font-size: 0.3rem;
			line-height: 0.51rem;
			text-indent: 2em;
			padding: 0 0.2rem;
			font-family: "宋体";
		}
		.zjyf_zerom img:nth-child(1) {
			width: 3.68rem;
			height: 3.47rem;
			padding: 0.2rem 0.1rem 0.2rem 0.06rem;
		}
		.zjyf_zerom img:nth-child(2) {
			width: 1.46rem;
			height: 0.46rem;
			padding: 0.8rem 0.9rem 0.2rem 0.06rem;
		}
		.zjyf_zerom ul li {
			font-size: 0.3rem;
			line-height: 0.52rem;
			width: 6.5rem;
			font-family: "宋体";
		}
		.apply_condit {
			padding: 0.2rem 0;
		}
		.apply_condit img:nth-child(1) {
			width: 3.6rem;
			height: 3.61rem;
		}
		.apply_condit img:nth-child(2) {
			width: 1.95rem;
			height: 0.45rem;
			padding: 0.8rem 0.9rem 0.2rem 0.06rem;
		}
		.apply_condit ul li {
			font-size: 0.3rem;
			line-height: 0.52rem;
			width: 6.5rem;
			font-family: "宋体";
		}
		.apply_progress {
			padding: 0.2rem 0;
		}
		.apply_pleft {
			width: 3.7rem;
			height: 3.58rem;
		}
		.apply_pright {
			width: 1.94rem;
			height: 0.46rem;
			padding: 0.8rem 0.9rem 0.2rem 0.06rem;
		}
		.progress {
			text-align: center;
		}
		.progress img:nth-child(1) {
			width: 6.92rem;
			height: 1.28rem;
		}
		.progress img:nth-child(2) {
			width: 5rem;
			height: 4px;
			margin-top: 0.8rem;
		}
		.progress h3 {
			font-size: 0.4rem;
			padding-top: 0.2rem;
		}
		.progress p {
			font-size: 0.28rem;
			padding-top: 0.2rem;
			color: #838383;
		}
		.apply_con {
			background: #f5f8ff;
			padding: 0.6rem 0.4rem;
		}
	}

	.list_style {
		display: inline-block;
		width: 0.18rem;
		height: 0.18rem;
		background: #cee9fc;
		border-radius: 50%;
		margin-right: 0.2rem;
		margin-top: 0.18rem;
	}
</style>
<style lang="less">
	.el-input {
		padding-bottom: 0.39rem;
	}

	.el-button {
		width: 100%;
	}
</style>
