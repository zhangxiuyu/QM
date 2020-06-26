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

const getGoodsListPage = (data) =>{
	return new Promise((resolve,reject)=>{
		http.get('getGoodsListPage',data).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}
const getSearchGoods = (data) =>{
	return new Promise((resolve,reject)=>{
		http.get('getSearchGoods',data).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}


export{
	getGoodsOne,
	getSearchGoods,
	getGoodsListPage
}