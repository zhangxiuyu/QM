const get = () =>{
	uni.getStorage({
	    key: 'token',
	    success: function (res) {
	       return res.data
	    }
	});
}
export {
	get
}