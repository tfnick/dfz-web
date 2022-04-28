<template>
  <view class="container">
    <unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" :options="options" collection="dfz-order" field="surname,gender,birthday,order_no,status" :where="queryWhere" :getone="true" :manual="true">
      <view v-if="error">{{error.message}}</view>
      <view v-else-if="loading">
        <uni-load-more :contentText="loadMore" status="loading"></uni-load-more>
      </view>
      <view v-else-if="data">
		<uni-row class="demo-uni-row">
			<uni-col :span="8">
				<text>订单号</text>
			</uni-col>
			<uni-col :span="16">
				<text>{{data.order_no}}</text>
			</uni-col>
		</uni-row>
		<uni-row class="demo-uni-row">
			<uni-col :span="8">
				<text>状态</text>
			</uni-col>
			<uni-col :span="16">
				<text>{{options.status_valuetotext[data.status]}}</text>
			</uni-col>
		</uni-row>
		<uni-row class="demo-uni-row">
			<uni-col :span="8">
				<text>宝宝生日</text>
			</uni-col>
			<uni-col :span="16">
				<text>{{data.birthday}}</text>
			</uni-col>
		</uni-row>
		
		<uni-row class="demo-uni-row">
			<uni-col :span="8">
				<text>宝宝性别</text>
			</uni-col>
			<uni-col :span="16">
				<text>{{options.gender_valuetotext[data.gender]}}</text>
			</uni-col>
		</uni-row>
		
		<uni-row class="demo-uni-row">
			<uni-col :span="8">
				<text>宝宝姓氏</text>
			</uni-col>
			<uni-col :span="16">
				<text>{{data.surname}}</text>
			</uni-col>
		</uni-row>
      </view>
    </unicloud-db>
    <view class="btns">
      <button type="primary" @click="handleUpdate">修改</button>
      <button type="warn" class="btn-delete" @click="handleDelete">删除</button>
    </view>
  </view>
</template>

<script>
  // 由schema2code生成，包含校验规则和enum静态数据
  import { enumConverter } from '../../js_sdk/validator/dfz-order.js';

  export default {
    data() {
      return {
        queryWhere: '',
        loadMore: {
          contentdown: '',
          contentrefresh: '',
          contentnomore: ''
        },
        options: {
          // 将scheme enum 属性静态数据中的value转成text
          ...enumConverter
        }
      }
    },
    onLoad(e) {
      this._id = e.id
    },
    onReady() {
      if (this._id) {
        this.queryWhere = '_id=="' + this._id + '"'
      }
    },
    methods: {
      handleUpdate() {
        // 打开修改页面
        uni.navigateTo({
          url: './edit?id=' + this._id,
          events: {
            // 监听修改页面成功修改数据后, 刷新当前页面数据
            refreshData: () => {
              this.$refs.udb.loadData({
                clear: true
              })
            }
          }
        })
      },
      handleDelete() {
        this.$refs.udb.remove(this._id, {
          success: (res) => {
            // 删除数据成功后跳转到list页面
            uni.navigateTo({
              url: './list'
            })
          }
        })
      }
    }
  }
</script>

<style>
	.demo-uni-row {
		margin-bottom: 10px;
		/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
		display: block;
		/* #endif */
	}

	/* #ifdef MP-ALIPAY || MP-WEIXIN */
	::v-deep .uni-row {
		margin-bottom: 10px;
	}

	/* #endif */

	.demo-uni-col {
		height: 36px;
		border-radius: 5px;
	}
	
	
	
  .container {
    padding: 10px;
  }

  .btns {
    margin-top: 10px;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
  }

  .btns button {
    flex: 1;
  }

  .btn-delete {
    margin-left: 10px;
  }
</style>
