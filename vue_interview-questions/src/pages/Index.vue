<template>
	<div class="">
		<h1>vue原理解析（面试题整理）</h1>
		<ul>
			<li>
				<router-link to="/One">
					1、methods、computed和watch的区别？
				</router-link>
			</li>
			<li>
				<router-link to="/Two">
					2、v-if、v-show的区别？
				</router-link>
			</li>
			<li>
				<router-link to="/Three">
					3、父子组件如何通讯(传值)？
				</router-link>
			</li>
			<li>
				<router-link to="/Four">
					4、vue的生命周期？
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	h1 {
		text-align: center;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
		max-width: 500px;
		display: block;
		margin: 0 auto;
		li {
			margin: 10px;
			text-align: left;
		}
	}
</style>