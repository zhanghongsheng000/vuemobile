<template>
	<div class="connectus_box">
    <TOP></TOP>
		<div class="connectus_head">
			<img src="../assets/img/connectus_head.png" />
		</div>
		<div class="connectus_container">
			<div class="connectus_title">
				<img src="../assets/img/connectus_title.png" />
				<p>CONNECT US</p>
			</div>
			<div class="connectus_content clearfix">
				<div class="mapImg">
					<img src="../assets/img/content2.jpg" class="connectus_map" />
					<div class="sjz"></div>
					<div class="zhngzhou"></div>
					<div class="circular1 yuan"></div>
					<div class="circular2 yuan"></div>
					<div class="circular3 yuan"></div>
					<div class="circular4 yuan"></div>
					<div class="circular5 yuan"></div>
					<div class="circular6 yuan"></div>
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
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style lang="less" scoped>
	.connectus_head img {
		width: 100%;
		height: 3.8rem;
	}

	.connectus_container {
		padding: 0.2rem;
		.connectus_title {
			text-align: center;
			img {
				width: 2.9rem;
				height: 0.52rem;
			}
			p {
				font-size: 0.26rem;
				line-height: 0.3rem;
				color: #999999;
			}
		}
		.connectus_content {
			padding-bottom: 0.2rem;
			.connectus_map {
				width: 100%;
				height: 6.08rem;
				padding: .5rem 0;
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
					}
				}
			}
		}
	}
	.sjz {
		position: absolute;
    left: 4.5rem;
    top: 8.1rem;
		width: .1rem;
		height: .1rem;
		border-radius: 50%;
		background-color: red;
		box-shadow: 0 0 2px 3px #f7c1bf;
	}

	.zhngzhou {
		position: absolute;
		left: 4.4rem;
    top: 8.6rem;
		width: .1rem;
		height: .1rem;
		border-radius: 50%;
		background-color: red;
		box-shadow: 0 0 2px 3px #f7c1bf;
	}
	.yuan {
		width:1rem;
		height: 1rem;
		border: solid 1px red;
		border-radius: 50%;
		position: absolute;
		left: 3.94rem;
		top: 8.14rem;
		opacity: 0;
		box-shadow: 1px 1px 10px red;
	}

	.circular1 {
		animation: warn1 ease-out 2s infinite;
	}

	.circular2 {
		animation: warn2 ease-out 2s infinite;
	}

	.circular3 {
		animation: warn3 ease-out 2s infinite;
	}

	.circular4 {
		animation: warn4 ease-out 2s infinite;
	}

	.circular5 {
		animation: warn5 ease-out 2s infinite;
	}

	.circular6 {
		animation: warn6 ease-out 2s infinite;
	}

	@keyframes warn1 {
		0% {
			transform: scale(0.2);
			opacity: 0;
		}
		25% {
			transform: scale(0.2);
			opacity: .1;
		}
		50% {
			transform: scale(0.3);
			opacity: .3;
		}
		75% {
			transform: scale(0.5);
			opacity: .5;
		}
		100% {
			transform: scale(0.8);
			opacity: 0;
		}
	}

	@keyframes warn2 {
		0% {
			transform: scale(0.2);
			opacity: 0;
		}
		25% {
			transform: scale(0.2);
			opacity: .1;
		}
		50% {
			transform: scale(0.5);
			opacity: .3;
		}
		75% {
			transform: scale(0.8);
			opacity: .5;
		}
		100% {
			transform: scale(1);
			opacity: 0;
		}
	}

	@keyframes warn3 {
		0% {
			transform: scale(0.2);
			opacity: 0;
		}
		25% {
			transform: scale(0.2);
			opacity: .1;
		}
		50% {
			transform: scale(0.8);
			opacity: .3;
		}
		75% {
			transform: scale(1);
			opacity: .5;
		}
		100% {
			transform: scale(1.2);
			opacity: 0;
		}
	}

	@keyframes warn4 {
		0% {
			transform: scale(0.2);
			opacity: 0;
		}
		25% {
			transform: scale(0.2);
			opacity: .1;
		}
		50% {
			transform: scale(1);
			opacity: .3;
		}
		75% {
			transform: scale(1.2);
			opacity: .5;
		}
		100% {
			transform: scale(1.5);
			opacity: 0;
		}
	}

	@keyframes warn5 {
		0% {
			transform: scale(0.2);
			opacity: 0;
		}
		25% {
			transform: scale(0.2);
			opacity: .1;
		}
		50% {
			transform: scale(1.5);
			opacity: .3;
		}
		75% {
			transform: scale(1.8);
			opacity: .5;
		}
		100% {
			transform: scale(2);
			opacity: 0;
		}
	}

	@keyframes warn6 {
		0% {
			transform: scale(0.2);
			opacity: 0;
		}
		25% {
			transform: scale(0.2);
			opacity: .1;
		}
		50% {
			transform: scale(1.8);
			opacity: .3;
		}
		75% {
			transform: scale(2);
			opacity: .5;
		}
		100% {
			transform: scale(2.5);
			opacity: 0;
		}
	}
</style>
