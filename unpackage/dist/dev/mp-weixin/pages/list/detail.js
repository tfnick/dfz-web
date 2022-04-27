"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../common/vendor.js");
const db = common_vendor.St.database();
const readNewsLog = db.collection("read-news-log");
const _sfc_main = {
  data() {
    return {
      id: "",
      title: "title",
      field: "user_id.username,user_id._id,avatar,excerpt,last_modify_date,comment_count,like_count,title,content",
      formData: {
        noData: '<p style="text-align:center;color:#666">\u8BE6\u60C5\u52A0\u8F7D\u4E2D...</p>'
      }
    };
  },
  computed: __spreadProps(__spreadValues({}, common_vendor.mapGetters({
    "userInfo": "user/info",
    "hasLogin": "user/hasLogin"
  })), {
    uniStarterConfig() {
      return getApp().globalData.config;
    },
    where() {
      return `_id =="${this.id}"`;
    }
  }),
  onLoad(event) {
    console.log(event);
    if (event.id) {
      this.id = event.id;
    }
    if (event.title) {
      this.title = event.title;
      common_vendor.index.setNavigationBarTitle({
        title: event.title
      });
    }
  },
  onReady() {
    if (this.id) {
      this.$refs.detail.loadData();
    } else {
      common_vendor.index.showToast({
        icon: "none",
        title: this.$t("listDetail").newsErr
      });
    }
  },
  onNavigationBarButtonTap(event) {
    if (event.type == "share") {
      this.shareClick();
    }
  },
  methods: {
    $log(...args) {
      console.log("args", ...args, this.id);
    },
    setReadNewsLog() {
      let item = {
        "article_id": this.id,
        "last_time": Date.now()
      }, readNewsLog2 = common_vendor.index.getStorageSync("readNewsLog") || [], index = -1;
      readNewsLog2.forEach(({ article_id }, i) => {
        if (article_id == item.article_id) {
          index = i;
        }
      });
      if (index === -1) {
        readNewsLog2.push(item);
      } else {
        readNewsLog2.splice(index, 1, item);
      }
      common_vendor.index.setStorageSync("readNewsLog", readNewsLog2);
      console.log(readNewsLog2);
    },
    setFavorite() {
      if (!this.hasLogin) {
        return console.log("\u672A\u767B\u5F55\u7528\u6237");
      }
      let article_id = this.id, last_time = Date.now();
      console.log({ article_id, last_time });
      readNewsLog.where(`"article_id" == "${article_id}" && "user_id"==$env.uid`).update({ last_time }).then(({ result: { updated } }) => {
        console.log("updated", updated);
        if (!updated) {
          readNewsLog.add({ article_id }).then((e) => {
            console.log(e);
          }).catch((err) => {
            console.log(err);
          });
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    loadData(data) {
      if (this.title == "" && data[0].title) {
        this.title = data[0].title;
        common_vendor.index.setNavigationBarTitle({
          title: data[0].title
        });
      }
      this.setReadNewsLog();
    },
    followClick() {
      common_vendor.index.showToast({
        title: this.$t("listDetail").follow,
        icon: "none"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  (_easycom_uni_dateformat2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_unicloud_db2)();
}
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
if (!Math) {
  (_easycom_uni_dateformat + _easycom_uni_list_item + _easycom_uni_list + _easycom_unicloud_db)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title),
    b: common_vendor.w(({
      data,
      loading,
      error,
      options
    }, s0, i0) => {
      return common_vendor.e({
        a: !loading && data
      }, !loading && data ? {
        b: common_vendor.t(data.user_id && data.user_id[0].username),
        c: "ed2c8c0e-3-" + i0 + "," + ("ed2c8c0e-2-" + i0),
        d: common_vendor.p({
          date: data.last_modify_date,
          format: "yyyy-MM-dd hh:mm",
          threshold: [6e4, 2592e6]
        }),
        e: "ed2c8c0e-2-" + i0 + "," + ("ed2c8c0e-1-" + i0),
        f: common_vendor.p({
          thumbSize: "lg",
          thumb: data.image
        }),
        g: "ed2c8c0e-1-" + i0 + ",ed2c8c0e-0",
        h: common_vendor.p({
          border: false
        }),
        i: data.avatar,
        j: common_vendor.t(data.excerpt),
        k: data.content
      } : {}, {
        l: i0,
        m: s0
      });
    }, {
      name: "d",
      path: "b",
      vueId: "ed2c8c0e-0"
    }),
    c: common_vendor.sr("detail", "ed2c8c0e-0"),
    d: common_vendor.o($options.loadData),
    e: common_vendor.p({
      options: $data.formData,
      collection: "opendb-news-articles,uni-id-users",
      field: $data.field,
      getone: true,
      where: $options.where,
      manual: true,
      foreignKey: "opendb-news-articles.user_id"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ed2c8c0e"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/list/detail.vue"]]);
wx.createPage(MiniProgramPage);
