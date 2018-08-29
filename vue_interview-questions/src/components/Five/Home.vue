<template>
	<div class="item">
		<p>{{user}}{{getUser}}{{msg}}</p>
	</div>
</template>

<script>
	import { mapState,mapGetters } from 'vuex'
	export default {
		data() {
			return {
				msg: this.$store.getters.getUser
			}
		},
		computed: {
			...mapState({
            user: state => state.user
        }),
			...mapGetters([
				'getUser'
			])
		},
		methods: {

		},

		mounted: function() {

		}

	}
</script>

<style lang="less">

</style>