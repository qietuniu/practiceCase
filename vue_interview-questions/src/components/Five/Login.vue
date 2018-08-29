<template>
	<div class="item">
		<div class="clearfix">
			<div class="inputBox fl">
				<label>Username</label>
				<input type="text" placeholder="Enter your username" v-model="userName"/>
				<div class="border"></div>
			</div>
		</div>
		<div class="clearfix">

			<button @click="loginUser">登录</button>
		</div>
	</div>
</template>

<script>
	import { mapState,mapMutations ,mapActions} from 'vuex'
	export default {
		...mapState({
            user: state => state.user
        }),
		data() {
			return {
				userName: null
			}
		},
		methods: {
			...mapMutations([
                'login'
            ]),
            loginUser(){
//          	 this.login("333");
            	 this.$router.push({path: '/Home'});
            },
            

		},

		mounted: function() {

		}

	}
</script>

<style lang="less">

</style>