<template>
	<div class="">

		<method-computed></method-computed>

	</div>
</template>

<script>
	import MethodComputed from '@/components/One/MethodComputed'
	export default {
		data() {
			return {

			}
		},
		computed: {

		},
		components: {
			MethodComputed
		},
		methods: {

		},

		created() {

		}
	}
</script>

<style lang="less">
	.item {
		margin-bottom: 40px;
		.title {
			font-size: 24px;
			font-weight: bold;
			margin-bottom: 20px;
			border-bottom: 1px solid #ddd;
			padding-bottom: 10px;
		}
		.question {
			position: relative;
			font-size: 16px;
			margin-bottom: 20px;
			&:before {
				content: "#";
				color: #42b983;
				position: absolute;
				left: -16px;
				margin-top: 4px;
				font-size: 16px;
				line-height: 1;
				font-weight: bold;
			}
		}
		.content {
			border: 1px solid #eee;
			border-radius: 2px;
			padding: 25px 35px;
			margin-bottom: 20px;
		}
		.reason {
			background-color: #f8f8f8;
			font-size: 14px;
			padding: 15px;
			margin-bottom: 20px;
			    color: #e96900;
		}
		.result {
			color: #42b983;
			font-size: 14px;
			margin-bottom: 20px;
		}
	}
</style>