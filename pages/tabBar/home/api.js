import * as http from '../../../utils/service.js'

const getDataStr = (data) =>{
	return new Promise((resolve,reject)=>{
		http.get('trainDetail',data).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}
export{
	getDataStr
}