import * as http from '../../../utils/service.js'

const getGoodsType = (data) =>{
	return new Promise((resolve,reject)=>{
		http.get('getGoodsType',data).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

export{
	getGoodsType
}