export default {
	getUser: state => { //通过方法访问
		return "我是" + state.user
	}
}