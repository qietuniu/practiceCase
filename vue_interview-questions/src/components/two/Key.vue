<template>
	<div class="item">
		<div class="title">Key的使用</div>
		<p class="question">实例：输入框中分别输入值后进行切换，对比使用key和不使用key的渲染过程与结果</p>
		<div class="content clearfix">
			<div class="clearfix">
				<button @click="isShow=!isShow">切 换</button>
			</div>
			<p class="content-title">没有使用key：</p>

			<div class="clearfix">
				<div class="inputBox fl">
					<template v-if="isShow">
						<label>Username</label>
						<input type="text" placeholder="Enter your username" />
					</template>
					<template v-else>
						<label>Email</label>
						<input type="text" placeholder="Enter your email address">
					</template>
					<div class="border"></div>
				</div>
			</div>

			
			<p class="content-title">使用key：</p>
			<div class="clearfix">
				<div class="inputBox fl">
					<template v-if="isShow">
						<label>Username</label>
						<input type="text" placeholder="Enter your username" key="username-input"/>
					</template>
					<template v-else>
						<label>Email</label>
						<input type="text" placeholder="Enter your email address" key="email-input">
					</template>
					<div class="border"></div>
				</div>
			</div>

		</div>
		<p class="result">预计结果：没有使用key的input不会清除用户已经输入的内容；使用key的input切换时将被重新渲染,但是label元素仍然会被高效地复用，因为它们没有添加 key 属性</p>
		<p class="reason">解析：v-if可使用key管理可复用的元素</p>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShow: true
			}
		},
		computed: {

		},
		watch: {

		},
		methods: {

		},

	}
</script>

<style lang="less" scoped="scoped">
	.content {
		>.clearfix {
			margin-bottom: 10px;
			span {
				display: inline-block;
				height: 30px;
				line-height: 30px;
				margin-left: 20px;
			}
			.inputBox {
				width: 300px;
			}
		}
	}
</style>