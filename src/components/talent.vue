<template>
	<div class="talent_box">
    <TOP></TOP>
		<div class="talent_head">
			<img src="../assets/img/talent_head.png" />
		</div>
		<div class="talent_container">
			<div class="talent_title">
				<img src="../assets/img/talent_title.png" />
				<p>JOB</p>
			</div>
			<div class="talent_content">
				<p>业务精英</p>
				<p>一、岗位职责</p>
				<p>1.熟悉贷款业务基本操作流程;</p>
				<p>2.寻找符合条件的用款客户,并为客户提供详细的解释和说明;</p>
				<p>3.对客户贷款资格进行初步审核,负责开发拓展管理客户,向客户提供专业的贷款建议。</p>
				<p>二、任职资格</p>
				<p>具有一年以上房产抵押、房产中介的相关工作者优先</p>
				<p>薪资：底薪2000-5000元/月+提成（综合收入 8000-15000元/月）</p>
				<div class="talent_img">
					<img src="../assets/img/talent_content.png" />
				</div>

				<div class="tel">
					<img src="../assets/img/tel.png" class="fl" />
					<p class="fl">客服电话：<span><a href="tel:400-010-0371">400-010-0371</a></span></p>
				</div>
				<div class="clearfix"></div>
				<div class="connectus_place">
					<img src="../assets/img/place.png" class="fl" />
					<p class="fl">办公地址：<span>河南省郑州市农业路经五路交叉口国际企业中心A座12A\东风南路 创业路交叉口绿地之窗云峰A座101</span></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {

			}
		}

	}
</script>

<style lang="less" scoped>
	.talent_head{
		img{
			width: 100%;
			height: 3.8rem;
		}
	}
	.talent_container{
		padding: 0.2rem;
		 .talent_title{
		 	text-align: center;
			img{
				width: 2.9rem;
				height: 0.52rem;
			}
			p{
				font-size: 0.26rem;
				line-height: 0.3rem;
				color: #999999;
			}
		 }
		 .talent_content{
		 	padding-bottom: 1rem;
		 	p{
		 		font-family: "宋体";
		 		font-size: 0.3rem;
		 		line-height: 0.51rem;
		 		padding: 0.1rem 0;
		 	}
		 	img{
		 		width: 6.9rem;
		 		height: 3.8rem;
		 		padding: 0.1rem 0;
		 	}
		 	.tel {
				img {
					width: 0.17rem;
					height: 0.24rem;
					margin-top: 0.12rem;
					padding-right: 0.1rem;
				}
				p {
					font-size: 0.3rem;
					line-height: 0.51rem;
					span{
						a{
							color: #000000;
						}
					}
				}
			}
			.connectus_place {
				img {
					width: 0.2rem;
					height: 0.25rem;
					margin-top: 0.1rem;
					padding-right: 0.12rem;
				}
				p {
					font-size: 0.3rem;
					line-height: 0.51rem;
					span {
						display: inline-block;
						width: 4.7rem;
						vertical-align: top;
						padding-bottom: 0.15rem;
					}
				}
			}
		 }
	}
	.talent_img{
		text-align: center;
	}
</style>
