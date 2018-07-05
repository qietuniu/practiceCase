<template>
	<div id="app">

		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="less">
#app{
	    padding: 20px;
    max-width: 800px;
    margin: 40px auto;
}
	.inputBox {
		position: relative;
		float: left;
		display: inline-block;
		width: 120px;
		height: 30px;
		border: 1px solid #DDD;
		border-radius: 2px;
		z-index: 1;
		label {
			float: left;
			line-height: 30px;
			display: inline-block;
			width: 30%;
			box-sizing: border-box;
			padding-left: 10px;
			background-color: #f8f8f8;
			border-radius: 4px 4px 0 0;
		}
		input[readonly="readonly"]{
			background-color: #e8e8e8;
		}
		input {
			float: left;
			width: 70%;
			height: 30px;
			padding: 0 10px;
			border: none;
			display: inline-block;
			box-sizing: border-box;
			color: #42b983;
			
			&:focus {
				outline: none;
			}
			&:focus+.border {
				border-color: #9fe4c5;
				z-index: 1;
			}
			
		}
		.border {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			z-index: -1;
			border: 1px solid #ddd;
			border-radius: 2px;
		}
	}
	
	button {
		background: #fff;
		padding: 5px 10px;
		border: 1px solid #42b983;
		color: #42b983;
		border-radius: 5px;
		transition: .3s;
		cursor: pointer;
		&:hover {
			background: #42b983;
			color: #fff;
		}
	}
	
	
	.item {
		margin-bottom: 60px;
		.title {
			font-size: 24px;
			font-weight: bold;
			margin-bottom: 20px;
			border-bottom: 1px solid #ddd;
			color: #2c3e50;
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
			.content-title {
				color: #0092db;
				padding: 10px 0;
			}
			img{
				width: 100%;
			}
		}
		.reason {
			line-height: 24px;
			font-size: 14px;
			padding: 15px;
			margin-bottom: 20px;
			color: #e96900;
			background-color: #f8f8f8;
		}
		.scenario{
			line-height: 24px;
			font-size: 14px;
			padding: 15px;
			margin-bottom: 20px;
			color: #e96900;
			background-color: #f8f8f8;
			border-left:4px solid #42b983;
		}
		.result {
			color: #42b983;
			font-size: 14px;
			line-height: 20px;
			margin-bottom: 20px;
		}
	}
</style>