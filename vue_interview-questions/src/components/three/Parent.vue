<template>
	<div class="item">
		<div class="title">父子组件如何通讯(传值)？</div>
		<p class="question">实例：父组件用props将姓名传给子组件，用slot分发年龄给子组件；子组件通过emit将英语名字传给父组件并在控制台打出。</p>
		<div class="content clearfix">
			<Child :msg="msg" @childEvent="parentMethod">
				<span slot="age">年龄：18</span>
			</Child>
		</div>
		<p class="reason">解析：<br/>父组件通过 prop(属性） 给子组件下发数据，子组件通过事件给父组件emit(发送)消息。
		<br/>slot用于分发内容，极大增加组件的扩展性</p>
	</div>
</template>
<script>
	import Child from '@/components/Three/Child'
	export default {
		components: {
			Child,
		},
		data() {
			return {
				msg: '我是切图',
			};
		},
		methods: {
			parentMethod({
				EnglishName
			}) {
				console.log("%c子组件传过来的英语名字：" + EnglishName, "color:#42b983;font-size:20px");
			}
		}
	};
</script>

<style lang="less">

</style>