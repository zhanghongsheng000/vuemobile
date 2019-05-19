<template>
	<div class="downloadapp_box">
    <TOP></TOP>
		<div class="downloadapp_head">
			<img src="../assets/img/downloadapp_head.png" />
		</div>
		<div class="downloadapp_container">
			<div class="downloadapp_title">
				<img src="../assets/img/downloadapp_title.png" />
				<p>DOWNLOAD</p>
			</div>
			<div class="downloadapp_content">
				<img src="../assets/img/down-erweima.png" />
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>

<style lang="less" scoped>
	.downloadapp_head img{
		width: 100%;
		height: 3.8rem;
		}
	.downloadapp_container{
		padding: 0.2rem;
		.downloadapp_title{
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
		.downloadapp_content{
			text-align: center;
			padding-top: 1rem;
			img{
				width: 3.26rem;
				height: 3.24rem;
			}
		}
	}
</style>
