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
				<uni-datetime-picker type="datetime" v-model="item.birthday" hideSecond="true"/>
			</uni-forms-item>
		</uni-forms>
		<button type="primary" @click="submit">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:{
					"surname": '',
					"gender": '',
					"birthday": ''
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
		methods: {
			
			submit() {
				uni.showLoading({
					mask: true
				})
				this.$refs.baseForm.validate().then(res => {
					console.log('success', res);
					this.doSubmit(this.item);
					
					//uni.hideLoading();
				}).catch(err => {
					uni.hideLoading()
				})
			},
			
			doSubmit(record) {
				const db = uniCloud.database();
				// 使用 clientDB 提交数据
				db.action('dfz-order-add-action').collection('dfz-order').add(record).then((res) => {
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
