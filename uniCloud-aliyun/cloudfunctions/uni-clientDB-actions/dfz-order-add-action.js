// 开发文档：https://uniapp.dcloud.io/uniCloud/clientdb?id=action
// const {
//   secret,
//   getVersion
// } = require('hello-common')
const db = uniCloud.database();
const dbCmd = db.command
const orderTable = db.collection('dfz-cn-order');

//const sequence = require('sequence')
module.exports = {
	//state = record
	before: async (state, event) => {
		//判断当日订单数量
		if(state.type == 'create'){
			let date = todayTimestamp()
			let {total} = await orderTable.where({
				user_id:state.auth.uid
			}).count()
			console.log(total);
			if(total){
			  //throw new Error("今天已经提交了"+total+"个需求")
			}
			//设置订单号,26位长度
			//let order_no = getVersion();
			//let ttt = echo(event);
			state.newData.order_no = randomNumber();
		}
	},
	after: async (state, event, error, result) => {
		if (error) {
			throw error
		}
		return result
	}
}

function todayTimestamp(){
	//时区
	let timeZone = new Date().getTimezoneOffset()/60
	//获得相对于北京时间的时间戳
	let timestamp = Date.now()+3600*1000*(8+timeZone)
	//一天一共多少毫秒
	const D = 3600*24*1000
	//去掉余数，再减去东8区的8小时 得到当天凌晨的时间戳
	return parseInt(timestamp/D)*D - 3600*1000*8
}


/*订单号生成*/
function setTimeDateFmt(s) {  // 个位数补齐十位数
  return s < 10 ? '0' + s : s;
}

function randomNumber() {
  const now = new Date()
  let month = now.getMonth() + 1
  let day = now.getDate()
  let hour = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()
  month = setTimeDateFmt(month)
  day = setTimeDateFmt(day)
  hour = setTimeDateFmt(hour)
  minutes = setTimeDateFmt(minutes)
  seconds = setTimeDateFmt(seconds)
  let orderCode = now.getFullYear().toString() + month.toString() + day + hour + minutes + seconds + (Math.round(Math.random() * 1000000)).toString();
  console.log(orderCode)
  return orderCode;
}