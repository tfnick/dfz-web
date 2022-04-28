<template>
  <view class="container">
    
	
	<unicloud-db ref="udb" v-slot:default="{data, pagination, loading, hasMore, error}" :collection="collectionList">
		<view v-if="error">{{error.message}}</view>
		<view v-else-if="data">
			<uni-list>
				<uni-list-item 
					v-for="item in data" :key="item._id" showArrow
					:thumb="genderImg(item.gender)" 
					thumb-size="lg" :rightText="statusText(item.status,item.order_no)" 
					:clickable="true" @click="handleItemClick(item._id)"
					:title="item.surname + '**'" 
					:note="item.birthday" link>
				
				</uni-list-item>
			</uni-list>
		</view>
		<uni-load-more :status="loading?'loading':(hasMore ? 'more' : 'noMore')"></uni-load-more>
	</unicloud-db>
	
    <uni-fab ref="fab" horizontal="right" vertical="bottom" :pop-menu="false" @fabClick="fabClick" />
  </view>
</template>

<script>
  const db = uniCloud.database()
  export default {
    data() {
      return {
        collectionList: "dfz-order",
        loadMore: {
          contentdown: '',
          contentrefresh: '',
          contentnomore: ''
        }
      }
    },
    onPullDownRefresh() {
      this.$refs.udb.loadData({
        clear: true
      }, () => {
        uni.stopPullDownRefresh()
      })
    },
    onReachBottom() {
      this.$refs.udb.loadMore()
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
      handleItemClick(id) {
        uni.navigateTo({
          url: './detail?id=' + id
        })
      },
      fabClick() {
        // 打开新增页面
        uni.navigateTo({
          url: './add',
          events: {
            // 监听新增数据成功后, 刷新当前页面数据
            refreshData: () => {
              this.$refs.udb.loadData({
                clear: true
              })
            }
          }
        })
      }
    }
  }
</script>

<style>
</style>
