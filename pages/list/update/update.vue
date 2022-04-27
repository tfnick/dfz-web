<template>
	<view class="example">
		<uni-forms ref="baseForm" :modelValue="item" :rules="rules" :label-position="top">
			<uni-forms-item label="宝宝姓氏" required name='surname'>
				<uni-easyinput v-model="item.surname" placeholder="请输宝宝姓氏" />
			</uni-forms-item>
			<uni-forms-item label="宝宝性别" required name='gender'>
				<uni-data-checkbox v-model="item.gender" :localdata="genders" />
			</uni-forms-item>
			<uni-forms-item label="宝宝生日" required name='birthday'>
				<uni-datetime-picker type="datetime" v-model="item.birthday" :value="item.birthday" hideSecond="true"/>
			</uni-forms-item>
		</uni-forms>
		<button type="primary" @click="submit">修改</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:{
					"_id":"",
					"surname": '',
					"gender": '',
					"birthday": ''
					//"status": 1,
					//"order_no":""
				},
				genders: [{
					text: '男宝',
					value: "M"
				}, {
					text: '女宝',
					value: "F"
				}]
			}
		},
		onLoad({item}) {
			console.log(item);
			this.item = JSON.parse(item);
		},
		methods: {
			
			submit() {
				uni.showLoading({
					mask: true
				})
				this.$refs.baseForm.validate().then(res => {
					console.log('success', res);
					let updateItem = {...this.item};
					//不更新的字段
					delete updateItem._id;
			
					this.doSubmit(updateItem);
					
					//uni.hideLoading();
				}).catch(err => {
					uni.hideLoading()
				})
			},
			
			doSubmit(record) {
				const db = uniCloud.database();
				// 使用 clientDB 提交数据
				db.collection('dfz-cn-order').doc(this.item._id).update(record).then((res) => {
					uni.showToast({
						icon: 'none',
						title: '提交成功'
					})
					//this.getOpenerEventChannel().emit('refreshData')
					//setTimeout(() => uni.navigateBack(), 500)
				}).catch((err) => {
					uni.showModal({
						content: err.message || '请求服务失败',
						showCancel: false
					})
				}).finally(() => {
					uni.hideLoading()
				});
			}
		}
	}
</script>

<style lang="scss">
	.example {
		padding: 15px;
		background-color: #fff;
	}
</style>
