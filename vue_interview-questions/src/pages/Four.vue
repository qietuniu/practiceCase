<template>
	<div class="item">
		<div class="title">vue的生命周期？</div>
		<p class="question">实例：查看控制台观测生命周期执行顺序。</p>
		<div class="clearfix">
			<button @click="msg=!msg">启动update改变视图{{msg}}</button>
			<button @click="destroy">销毁实例</button>
		</div>
		
		<div class="content clearfix">
			<img src="https://cn.vuejs.org/images/lifecycle.png"/>
		</div>
		<p class="reason">解析：<br/>父组件通过 prop(属性） 给子组件下发数据，子组件通过事件给父组件emit(发送)消息。
		<br/>slot用于分发内容，极大增加组件的扩展性</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg:true
			}
		},
		methods:{
			destroy(){
				 this.$destroy();
			}
		},
		beforeCreate: function() {
			console.group('%cbeforeCreate 创建前状态===============》',"color:#2c3e50;font-size:16px");
			console.log("%c%s", "color:#42b983;font-size:16px", "el     : " + this.$el); //undefined
			console.log("%c%s", "color:#42b983;font-size:16px", "data   : " + this.$data); //undefined 
			console.log("%c%s", "color:#42b983;font-size:16px", "message: " + this.message);
		},
		created: function() {
			console.group('%ccreated 创建完毕状态===============》',"color:#2c3e50;font-size:16px");
			console.log("%c%s", "color:#42b983;font-size:16px", "el     : " + this.$el); //undefined
			console.log("%c%s", "color:#42b983;font-size:16px", "data   : " + this.$data); //已被初始化 
			console.log("%c%s", "color:#42b983;font-size:16px", "message: " + this.message); //已被初始化
		},
		beforeMount: function() {
			console.group('%cbeforeMount 挂载前状态===============》',"color:#2c3e50;font-size:16px");
			console.log("%c%s", "color:#42b983;font-size:16px", "el     : " + (this.$el)); //已被初始化
			console.log(this.$el);
			console.log("%c%s", "color:#42b983;font-size:16px", "data   : " + this.$data); //已被初始化  
			console.log("%c%s", "color:#42b983;font-size:16px", "message: " + this.message); //已被初始化  
		},
		mounted: function() {
			console.group('%cmounted 挂载结束状态===============》',"color:#2c3e50;font-size:16px");
			console.log("%c%s", "color:#42b983;font-size:16px", "el     : " + this.$el); //已被初始化
			console.log(this.$el);
			console.log("%c%s", "color:#42b983;font-size:16px", "data   : " + this.$data); //已被初始化
			console.log("%c%s", "color:#42b983;font-size:16px", "message: " + this.message); //已被初始化 
		},
		beforeUpdate: function() {
			console.group('%cbeforeUpdate 更新前状态===============》',"color:#2c3e50;font-size:16px");
			console.log("%c%s", "color:#42b983;font-size:16px", "el     : " + this.$el);
			console.log(this.$el);
			console.log("%c%s", "color:#42b983;font-size:16px", "data   : " + this.$data);
			console.log("%c%s", "color:#42b983;font-size:16px", "message: " + this.message);
		},
		updated: function() {
			console.group('%cupdated 更新完成状态===============》',"color:#2c3e50;font-size:16px");
			console.log("%c%s", "color:#42b983;font-size:16px", "el     : " + this.$el);
			console.log(this.$el);
			console.log("%c%s", "color:#42b983;font-size:16px", "data   : " + this.$data);
			console.log("%c%s", "color:#42b983;font-size:16px", "message: " + this.message);
		},
		beforeDestroy: function() {
			console.group('%cbeforeDestroy 销毁前状态===============》',"color:#2c3e50;font-size:16px");
			console.log("%c%s", "color:#42b983;font-size:16px", "el     : " + this.$el);
			console.log(this.$el);
			console.log("%c%s", "color:#42b983;font-size:16px", "data   : " + this.$data);
			console.log("%c%s", "color:#42b983;font-size:16px", "message: " + this.message);
		},
		destroyed: function() {
			console.group('%cdestroyed 销毁完成状态===============》',"color:#2c3e50;font-size:16px");
			console.log("%c%s", "color:#42b983;font-size:16px", "el     : " + this.$el);
			console.log(this.$el);
			console.log("%c%s", "color:#42b983;font-size:16px", "data   : " + this.$data);
			console.log("%c%s", "color:#42b983;font-size:16px", "message: " + this.message)
		}
	}
</script>

<style lang="less">

</style>