<template>
	<view>
		<unicloud-db ref="udb-order" v-slot:default="{data, loading, error, options}" collection="dfz-order">
			<view v-if="error">{{error.message}}</view>
			<view v-else>
				<uni-list>
					<uni-list-item @click.native="updateFn(item)"
					:thumb="genderImg(item.gender)" 
					thumb-size="lg" :rightText="statusText(item.status,item.order_no)" 
					v-for="item in data" :key="item._id" 
					:title="item.surname + '**'" 
					:note="item.birthday" link>
					
					</uni-list-item>
				</uni-list>
			</view>
		</unicloud-db>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			statusText(val,order_no){
				if(val == 3 ){
					return order_no + "  已完成";
				}else if(val == 1){
					return order_no + "  待处理";
				}if(val == 2){
					return order_no + "  处理中";
				}else if(val == -1){
					return order_no + "  重处理";
				}
			},
			genderImg(val){
				if(val == 'M'){
					return '/static/dfz/boy.png';
				}else {
					return '/static/dfz/girl.png';
				}
			},
			updateFn(item){
				console.log(item);
				uni.navigateTo({
					
					url: '/pages/list/update/update?item=' + JSON.stringify(item),
					success: res=>{
						
					},
					fail: res=>{
						
					},
					complete: res=>{
						
					},
				});
			}
		}
	}
</script>

<style>

</style>
