<template>
	<div class="item">
		<div class="title">computed与watch的区别？</div>
		<p class="question">实例：a=b+c,通过computed与watch分别实现b或c改变时，a也发生改变。</p>
		<div class="content clearfix">
			<p class="content-title">watch方法：</p>
			<div class="clearfix">
				<div class="inputBox fl">
					<label>A</label>
					<input type="text" v-model="a" readonly="readonly" />
					<div class="border"></div>
				</div>
				<span class="fl">A的值为：{{a}}</span>
			</div>
			<div class="clearfix">
				<div class="inputBox fl">
					<label>B</label>
					<input type="text" v-model="b" />
					<div class="border"></div>
				</div>
				<span class="fl">B的值为：{{b}}</span>
			</div>
			<div class="clearfix">
				<div class="inputBox fl">
					<label>C</label>
					<input type="text" v-model="c" />
					<div class="border"></div>
				</div>
				<span class="fl">C的值为：{{c}}</span>
			</div>

			<p class="content-title">computed方法：</p>
			<div class="clearfix">
				<div class="inputBox fl">
					<label>A</label>
					<input type="text" v-model="a1" readonly="readonly" />
					<div class="border"></div>
				</div>
				<span class="fl">A的值为：{{a1}}</span>
			</div>
			<div class="clearfix">
				<div class="inputBox fl">
					<label>B</label>
					<input type="text" v-model="b1" />
					<div class="border"></div>
				</div>
				<span class="fl">B的值为：{{b1}}</span>
			</div>
			<div class="clearfix">
				<div class="inputBox fl">
					<label>C</label>
					<input type="text" v-model="c1" />
					<div class="border"></div>
				</div>
				<span class="fl">C的值为：{{c1}}</span>
			</div>
		</div>
		<p class="result">预计结果：computed和methods都能实现功能</p>
		<p class="reason">解析：watch的做法是监听b和c，其中一个变化的时候就调用方法；computed的做法是计算a，其中b或者c有变化的时候重新计算a，显然computed更加简洁实用</p>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				a: 0,
				b: 0,
				c: 0,
				b1: 0,
				c1: 0,
			}
		},
		computed: {
			a1: function() {
				return parseFloat(this.b1) + parseFloat(this.c1)
			}
		},
		watch: {
			b: function(val) {
				this.a = parseFloat(val) + parseFloat(this.c);
			},
			c: function(val) {
				this.a = parseFloat(val) + parseFloat(this.b);
			}
		},
		methods: {

		},

	}
</script>

<style lang="less">
	.content {
		>.clearfix {
			margin-bottom: 10px;
			span {
				display: inline-block;
				height: 30px;
				line-height: 30px;
				margin-left: 20px;
			}
		}
	}
</style>