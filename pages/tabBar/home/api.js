import * as http from '../../../utils/service.js'
const getData = (data) =>{
	return new Promise((resolve,reject)=>{
		http.get('trainDetail',data).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}
export{
	getData
}