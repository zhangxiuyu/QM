import * as http from '../../../utils/service.js'

const getBanner = (data) =>{
	return new Promise((resolve,reject)=>{
		http.get('getbanner',data).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

const getXiao = (data) =>{
	return new Promise((resolve,reject)=>{
		http.get('getXiao',data).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

const getGoodsPage = (data) =>{
	return new Promise((resolve,reject)=>{
		http.get('getGoodsPage',data).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}
export{
	getBanner,
	getXiao,
	getGoodsPage,
}