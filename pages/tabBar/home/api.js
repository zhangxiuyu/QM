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

const getGoods = (data) =>{
	return new Promise((resolve,reject)=>{
		http.get('getHomeGoods',data).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}
export{
	getBanner,
	getXiao,
	getGoods
}