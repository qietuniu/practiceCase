<template>
	<div class="item">
		<div class="title">v-if、v-show的区别？</div>
		<p class="question">实例：查看p标签使用v-if和v-show时的生成表现</p>
		<div class="content clearfix">
			<p v-if='isShow'>我是v-if</p>
			<p v-else>我是v-else</p>
			<p v-show='isShow'>我是v-show，值为false</p>
			<p v-show='!isShow'>我是v-show，值为true</p>
		</div>
		<p class="result">预计结果：值为false时都不显示，当v-if=false的时候在页面上找不到该Dom节点；v-show=false的时候display为none</p>
		<p class="reason">解析：<br/>①v-if是真正渲染，切换过程中条件块内的事件监听和子组件适当地被销毁和重建，即v-if是动态的向DOM树内添加或者删除DOM元素，v-show的元素始终会被渲染并保留在Dom，即v-show是通过设置DOM元素的display样式属性控制显隐
<br/>②、v-if也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块
<br/>③、v-if可在'template'元素上使用来渲染分组，v-show不可以
<br/>④、v-if后可接v-else和v-else-if（2.1.0新增），v-show不可以
<br/>⑤、v-show可使用key管理可复用的元素</p>

	</div>
</template>
 
<script>
	export default {
		data() {
			return {
				isShow:false
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

<style lang="less">

</style>