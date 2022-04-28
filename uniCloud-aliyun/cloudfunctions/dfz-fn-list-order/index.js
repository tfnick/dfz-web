'use strict';

const { count } = require("console");

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
    let os = context.OS //客户端操作系统，返回值：android、ios	等
    let platform = context.PLATFORM //运行平台，返回值为 mp-weixin、app-plus等。注意：vue3版本uni-app将app-plus修改为了app，此处为保证旧版本兼容性未进行统一，推荐后续在业务中都使用app作为客户端标识
    let appid = context.APPID // manifest.json中配置的appid
    let deviceId = context.DEVICEID // 客户端标识，新增于HBuilderX 3.1.0，同uni-app客户端getSystemInfo接口获取的deviceId
	
	const dbJQL = uniCloud.databaseForJQL({ // 获取JQL database引用，此处需要传入云函数的event和context，必传
		event,
		context
	})
	dbJQL.setUser({ // 指定后续执行操作的用户信息
		uid: '62695bb71b299300012968fe', // 建议此处使用真实uid
		role: ['admin'], // 指定当前执行用户的角色为admin
		permission: []
	})
	const orderQueryRes = await dbJQL.collection('dfz-order').get()// 直接执行数据库操作
	// const db = uniCloud.database();
	// // 获取 `user` 集合的引用
	// const orderQueryRes = await db.collection('dfz-cn-order').get();
	return orderQueryRes;
};
