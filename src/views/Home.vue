<template>
  <div class="home">
		<div class="header">
			<p class="title">重庆邮电大学教育基金会</p>
			<p class="title">投票系统</p>
			<div class="main-content">
				<p>欢迎使用投票系统!</p>
				<div class="button">微信登陆</div>
				<div class="icon-container">
					<svg class="icon icon-refresh" aria-hidden="true">
						<use xlink:href="#icon-xiangshang"></use>
					</svg>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'home',
	components: {
	}
}
</script>

<style lang="stylus" scoped>
	@import '~@/common/varibles.styl'
	@import '~@/common/utils.styl'
	@import '~@/common/animate.styl'
	.header
		width 100vw
		height 100vh
		background linear-gradient(331deg, #00ffd5 5%, #008cff 86%)
		.title
			font-size $font-size-large-x
			line-height $font-size-large-x * 1.5
			text-align center
			color #ffffff
		.main-content
			width 4rem
			height 4rem
			color #ffffff
			text-align center
			middleAbsolute()
			p
				font-size $font-size-large
				text-align center
				color #ffffff
			.button
				font-size $font-size-medium-x
				color #fff
				padding .24rem .5rem
				text-align center
				background linear-gradient(to right, #fade10, #f6a723, #f97e8f)
				border-radius .1rem
				box-shadow .04rem .04rem .2rem rgba(59, 35, 182, .4)
				margin-top 2rem
				cursor pointer
			.icon-refresh
				position relative
				display inline-block
				width 1rem
				height 1rem
				font-size .5rem
				color #ffffff
				top 1.5rem
				transition width 1s
				& :hover
					width 2rem
	.icon-container
			animation upBubble 1.5s ease 0s infinite
</style>
