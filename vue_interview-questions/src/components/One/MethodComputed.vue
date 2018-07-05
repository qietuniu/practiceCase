<template>
	<div class="item">
		<div class="title">methods与computed的区别？</div>
		<p class="question">实例：分别点击下面两个按钮两次以上，对比由computed计算的当前时间和methods计算的当前时间。</p>
		<div class="content">
			<button @click="nowComputed">computed当前时间</button>
			<button @click="nowMethods">methods当前时间</button>
		</div>
		<p class="result">预计结果：computed计算的当前时间不变，methods计算的当前时间会变</p>
		<p class="reason">解析：计算属性是基于它们的依赖进行缓存的;而方法每当触发重新渲染时会再次执行函数</p>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				nowMethodsData: ''
			}
		},
		computed: {
			nowComputedData: function() {
				return Date.now()
			}
		},
		methods: {
			nowMethods: function() {
				this.nowMethodsData = Date.now();
				console.log("%c获取当前时间之methods："+this.nowMethodsData, "color:#42b983;font-size:16px");
			},
			nowComputed: function() {
				console.log("%c获取当前时间之computed："+this.nowComputedData, "color:#42b983;font-size:16px");
			}
		},

	}
</script>

<style lang="less">

</style>