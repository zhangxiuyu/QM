import * as http from '../../utils/service.js'

const getGoodsOne = (data) =>{
	return new Promise((resolve,reject)=>{
		http.get('getGoodsOne',data).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

const getGoodsList = (data) =>{
	return new Promise((resolve,reject)=>{
		http.get('getGoodsList',data).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}


export{
	getGoodsOne,
	getGoodsList
}