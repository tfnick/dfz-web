import { i as initVueI18n, r as resolveEasycom, c as __easycom_0, S as St, f as formatAppLog, b as __easycom_2, _ as __easycom_3, a as __easycom_4 } from "../../../unicloud-db.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, normalizeStyle, renderSlot, createVNode, toDisplayString, createCommentVNode, createBlock, Fragment, renderList, withCtx } from "vue";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
var en = {
  "uni-search-bar.cancel": "cancel",
  "uni-search-bar.placeholder": "Search enter content"
};
var zhHans = {
  "uni-search-bar.cancel": "cancel",
  "uni-search-bar.placeholder": "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9"
};
var zhHant = {
  "uni-search-bar.cancel": "cancel",
  "uni-search-bar.placeholder": "\u8ACB\u8F38\u5165\u641C\u7D22\u5167\u5BB9"
};
var messages = {
  en,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant
};
var _style_0$1 = { "uni-searchbar": { "": { "flexDirection": "row", "position": "relative", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10 } }, "uni-searchbar__box": { "": { "overflow": "hidden", "position": "relative", "flex": 1, "justifyContent": "center", "flexDirection": "row", "alignItems": "center", "height": 36, "paddingTop": 5, "paddingRight": 8, "paddingBottom": 5, "paddingLeft": 0 } }, "uni-searchbar__box-icon-search": { "": { "flexDirection": "row", "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "justifyContent": "center", "alignItems": "center", "color": "#B3B3B3" } }, "uni-searchbar__box-search-input": { "": { "flex": 1, "fontSize": 14, "color": "#333333" } }, "uni-searchbar__box-icon-clear": { "": { "alignItems": "center", "lineHeight": 24, "paddingLeft": 8 } }, "uni-searchbar__text-placeholder": { "": { "fontSize": 14, "color": "#B3B3B3", "marginLeft": 5 } }, "uni-searchbar__cancel": { "": { "paddingLeft": 10, "lineHeight": 36, "fontSize": 14, "color": "#333333" } } };
const { t } = initVueI18n(messages);
const _sfc_main$1 = {
  name: "UniSearchBar",
  emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    radius: {
      type: [Number, String],
      default: 5
    },
    clearButton: {
      type: String,
      default: "auto"
    },
    cancelButton: {
      type: String,
      default: "auto"
    },
    cancelText: {
      type: String,
      default: "\u53D6\u6D88"
    },
    bgColor: {
      type: String,
      default: "#F8F8F8"
    },
    maxlength: {
      type: [Number, String],
      default: 100
    },
    value: {
      type: [Number, String],
      default: ""
    },
    modelValue: {
      type: [Number, String],
      default: ""
    },
    focus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false,
      showSync: false,
      searchVal: ""
    };
  },
  computed: {
    cancelTextI18n() {
      return this.cancelText || t("uni-search-bar.cancel");
    },
    placeholderText() {
      return this.placeholder || t("uni-search-bar.placeholder");
    }
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(newVal) {
        this.searchVal = newVal;
        if (newVal) {
          this.show = true;
        }
      }
    },
    focus: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.show = true;
          this.$nextTick(() => {
            this.showSync = true;
          });
        }
      }
    },
    searchVal(newVal, oldVal) {
      this.$emit("update:modelValue", newVal);
    }
  },
  methods: {
    searchClick() {
      if (this.show) {
        return;
      }
      this.show = true;
      this.$nextTick(() => {
        this.showSync = true;
      });
    },
    clear() {
      this.$emit("clear", {
        value: this.searchVal
      });
      this.searchVal = "";
    },
    cancel() {
      this.$emit("cancel", {
        value: this.searchVal
      });
      this.searchVal = "";
      this.show = false;
      this.showSync = false;
      plus.key.hideSoftKeybord();
    },
    confirm() {
      plus.key.hideSoftKeybord();
      this.$emit("confirm", {
        value: this.searchVal
      });
    },
    blur() {
      plus.key.hideSoftKeybord();
      this.$emit("blur", {
        value: this.searchVal
      });
    },
    emitFocus(e) {
      this.$emit("focus", e.detail);
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0);
  return openBlock(), createElementBlock("view", { class: "uni-searchbar" }, [
    createElementVNode("view", {
      style: normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
      class: "uni-searchbar__box",
      onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
    }, [
      createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
        renderSlot(_ctx.$slots, "searchIcon", {}, () => [
          createVNode(_component_uni_icons, {
            color: "#c0c4cc",
            size: "18",
            type: "search"
          })
        ])
      ]),
      $data.show || $data.searchVal ? (openBlock(), createElementBlock("u-input", {
        key: 0,
        focus: $data.showSync,
        placeholder: $options.placeholderText,
        maxlength: $props.maxlength,
        class: "uni-searchbar__box-search-input",
        confirmType: "search",
        type: "text",
        modelValue: $data.searchVal,
        onInput: _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event.detail.value),
        onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
        onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
        onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
      }, null, 40, ["focus", "placeholder", "maxlength", "modelValue"])) : (openBlock(), createElementBlock("u-text", {
        key: 1,
        class: "uni-searchbar__text-placeholder"
      }, toDisplayString($props.placeholder), 1)),
      $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") ? (openBlock(), createElementBlock("view", {
        key: 2,
        class: "uni-searchbar__box-icon-clear",
        onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
      }, [
        renderSlot(_ctx.$slots, "clearIcon", {}, () => [
          createVNode(_component_uni_icons, {
            color: "#c0c4cc",
            size: "20",
            type: "clear"
          })
        ])
      ])) : createCommentVNode("v-if", true)
    ], 4),
    $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (openBlock(), createElementBlock("u-text", {
      key: 0,
      onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
      class: "uni-searchbar__cancel"
    }, toDisplayString($options.cancelTextI18n), 1)) : createCommentVNode("v-if", true)
  ]);
}
var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
var _style_0 = { "status-bar": { "": { "backgroundColor": "#ffffff" } }, "container": { "": { "flex": 1, "backgroundColor": "#f7f7f7" } }, "search-body": { "": { "backgroundColor": "#ffffff", "borderBottomRightRadius": 10, "borderBottomLeftRadius": 10 } }, "flex-center": { "": { "justifyContent": "center", "alignItems": "center" } }, "flex-row": { "": { "flexDirection": "row" } }, "uni-searchbar": { "": { "paddingLeft": 0 } }, "uni-searchbar__box": { "": { "borderWidth": 0 } }, "uni-input-placeholder": { "": { "fontSize": "28rpx" } }, "search-container": { "": { "height": 52, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "position": "relative", "backgroundColor": "#ffffff" } }, "search-container-bar": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "position": "absolute", "top": 0, "left": 0, "right": 0 } }, "search-associative": { "": { "position": "absolute", "top": 52, "left": 0, "right": 0, "bottom": 0, "backgroundColor": "#ffffff", "marginTop": "10rpx", "paddingLeft": "10rpx", "paddingRight": "10rpx" } }, "search-icons": { "": { "paddingTop": "16rpx", "paddingRight": "16rpx", "paddingBottom": "16rpx", "paddingLeft": "16rpx" } }, "word-display": { "": { "fontSize": "26rpx", "color": "#666666" } }, "word-container": { "": { "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx" } }, "word-container_header": { "": { "height": "72rpx", "lineHeight": "72rpx", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "word-container_header-text": { "": { "color": "#3e3e3e", "fontSize": "30rpx", "fontWeight": "bold" } }, "word-container_body": { "": { "flexWrap": "wrap", "flexDirection": "row" } }, "word-container_body-text": { "": { "fontSize": "26rpx", "color": "#666666", "justifyContent": "center", "alignItems": "center", "backgroundColor": "#f6f6f6", "paddingTop": "10rpx", "paddingRight": "20rpx", "paddingBottom": "10rpx", "paddingLeft": "20rpx", "marginTop": "20rpx", "marginRight": "30rpx", "marginBottom": 0, "marginLeft": 0, "borderRadius": "30rpx", "textAlign": "center" } }, "word-container_body-info": { "": { "flex": 1, "textAlign": "center", "fontSize": "26rpx", "color": "#808080", "marginTop": "20rpx" } } };
const searchLogDbName = "opendb-search-log";
const mallGoodsDbName = "opendb-news-articles";
const associativeSearchField = "title";
const associativeField = "_id,title";
const localSearchListKey = "__local_search_history";
const arrUnique = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    const curIndex = arr.indexOf(arr[i]);
    const lastIndex = arr.lastIndexOf(arr[i]);
    curIndex != lastIndex && arr.splice(lastIndex, 1);
  }
  return arr;
};
function debounce(fn, interval, isFirstAutoRun) {
  var _self = fn;
  var timer = null;
  var first = true;
  if (isFirstAutoRun) {
    _self();
  }
  return function() {
    var args = arguments;
    var _me = this;
    if (first) {
      first = false;
      _self.apply(_me, args);
    }
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      clearTimeout(timer);
      timer = null;
      _self.apply(_me, args);
    }, interval || 200);
  };
}
const _sfc_main = {
  data() {
    return {
      mallGoodsDbName,
      searchLogDbName,
      statusBarHeight: "0px",
      localSearchList: uni.getStorageSync(localSearchListKey),
      localSearchListDel: false,
      netHotListIsHide: false,
      searchText: "",
      iconColor: "#999999",
      associativeList: [],
      keyBoardPopup: false,
      hotWorld: "DCloud",
      focus: true,
      speechEngine: "iFly"
    };
  },
  created() {
    this.db = St.database();
    this.searchLogDb = this.db.collection(this.searchLogDbName);
    this.mallGoodsDb = this.db.collection(this.mallGoodsDbName);
    uni.onKeyboardHeightChange((res) => {
      this.keyBoardPopup = res.height !== 0;
    });
    this.searchText = getApp().globalData.searchText;
  },
  computed: {
    associativeShow() {
      return this.searchText && this.associativeList.length;
    }
  },
  onLoad() {
    this.statusBarHeight = `${uni.getSystemInfoSync().statusBarHeight}px`;
  },
  methods: {
    clear(res) {
      formatAppLog("log", "at pages/list/search/search.nvue:172", "res: ", res);
    },
    confirm(res) {
      this.search(res.value);
    },
    cancel(res) {
      uni.hideKeyboard();
      this.searchText = "";
      this.loadList();
    },
    search(value) {
      if (!value && !this.hotWorld) {
        return;
      }
      if (value) {
        if (this.searchText !== value) {
          this.searchText = value;
        }
        this.localSearchListManage(value);
        this.searchLogDbAdd(value);
      } else if (this.hotWorld) {
        this.searchText = this.hotWorld;
      }
      uni.hideKeyboard();
      this.loadList(this.searchText);
    },
    localSearchListManage(word) {
      let list = uni.getStorageSync(localSearchListKey);
      if (list.length) {
        this.localSearchList.unshift(word);
        arrUnique(this.localSearchList);
        if (this.localSearchList.length > 10) {
          this.localSearchList.pop();
        }
      } else {
        this.localSearchList = [word];
      }
      uni.setStorageSync(localSearchListKey, this.localSearchList);
    },
    LocalSearchListClear() {
      uni.showModal({
        content: "\u786E\u8BA4\u6E05\u7A7A\u641C\u7D22\u5386\u53F2\u5417",
        confirmText: "\u5220\u9664",
        confirmColor: "red",
        cancelColor: "#808080",
        success: (res) => {
          if (res.confirm) {
            this.localSearchListDel = false;
            this.localSearchList = [];
            uni.removeStorageSync(localSearchListKey);
          }
        }
      });
    },
    LocalSearchlistItemClick(word, index) {
      if (this.localSearchListDel) {
        this.localSearchList.splice(index, 1);
        uni.setStorageSync(localSearchListKey, this.localSearchList);
        if (!this.localSearchList.length) {
          this.localSearchListDel = false;
        }
        return;
      }
      this.search(word);
    },
    searchHotRefresh() {
      this.$refs.udb.refresh();
    },
    speech() {
      plus.speech.startRecognize({
        engine: this.speechEngine,
        punctuation: false,
        timeout: 1e4
      }, (word) => {
        word = word instanceof Array ? word[0] : word;
        this.search(word);
      }, (err) => {
        formatAppLog("error", "at pages/list/search/search.nvue:254", "\u8BED\u97F3\u8BC6\u522B\u9519\u8BEF: ", err);
      });
    },
    searchLogDbAdd(value) {
      this.getDeviceId().then((device_id) => {
        this.searchLogDb.add({
          device_id,
          content: value,
          create_date: Date.now()
        });
      });
    },
    getDeviceId() {
      return new Promise((resolve, reject) => {
        const uniId = uni.getStorageSync("uni_id");
        if (!uniId) {
          plus.device.getInfo({
            success: (deviceInfo) => {
              resolve(deviceInfo.uuid);
            },
            fail: () => {
              resolve(uni.getSystemInfoSync().system + "_" + Math.random().toString(36).substr(2));
            }
          });
        } else {
          resolve(uniId);
        }
      });
    },
    associativeClick(item) {
      formatAppLog("log", "at pages/list/search/search.nvue:297", "associativeClick: ", item);
      this.loadList(item.title);
    },
    loadList(text = "") {
      getApp().globalData.searchText = text;
      uni.switchTab({
        url: "/pages/list/list"
      });
    },
    backPage() {
      uni.navigateBack();
    }
  },
  watch: {
    searchText: debounce(function(value) {
      if (value) {
        this.mallGoodsDb.where({
          [associativeSearchField]: new RegExp(value, "gi")
        }).field(associativeField).get().then((res) => {
          this.associativeList = res.result.data;
        });
      } else {
        this.associativeList.length = 0;
        getApp().globalData.searchText = "";
      }
    }, 100)
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0);
  const _component_uni_search_bar = resolveEasycom(resolveDynamicComponent("uni-search-bar"), __easycom_1);
  const _component_unicloud_db = resolveEasycom(resolveDynamicComponent("unicloud-db"), __easycom_2);
  const _component_uni_list_item = resolveEasycom(resolveDynamicComponent("uni-list-item"), __easycom_3);
  const _component_uni_list = resolveEasycom(resolveDynamicComponent("uni-list"), __easycom_4);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "container" }, [
      createElementVNode("view", { class: "search-container" }, [
        createCommentVNode(" \u641C\u7D22\u6846 "),
        createElementVNode("view", { class: "search-container-bar" }, [
          createVNode(_component_uni_icons, {
            class: "search-icons",
            color: $data.iconColor,
            size: "22",
            type: "mic-filled",
            onClick: $options.speech
          }, null, 8, ["color", "onClick"]),
          createCommentVNode(` :cancelText="keyBoardPopup ? '\u53D6\u6D88' : '\u641C\u7D22'" `),
          createVNode(_component_uni_search_bar, {
            ref: "searchBar",
            style: { "flex": "1" },
            radius: "100",
            modelValue: $data.searchText,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchText = $event),
            focus: $data.focus,
            placeholder: $data.hotWorld,
            clearButton: "auto",
            cancelButton: "always",
            onClear: $options.clear,
            onConfirm: $options.confirm,
            onCancel: $options.cancel
          }, null, 8, ["modelValue", "focus", "placeholder", "onClear", "onConfirm", "onCancel"])
        ])
      ]),
      createElementVNode("view", { class: "search-body" }, [
        createCommentVNode(" \u641C\u7D22\u5386\u53F2 "),
        $data.localSearchList.length ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "word-container"
        }, [
          createElementVNode("view", { class: "word-container_header" }, [
            createElementVNode("u-text", { class: "word-container_header-text" }, "\u641C\u7D22\u5386\u53F2"),
            !$data.localSearchListDel ? (openBlock(), createBlock(_component_uni_icons, {
              key: 0,
              onClick: _cache[1] || (_cache[1] = ($event) => $data.localSearchListDel = true),
              class: "search-icons",
              style: { "padding-right": "0" },
              color: $data.iconColor,
              size: "18",
              type: "trash"
            }, null, 8, ["color"])) : (openBlock(), createElementBlock("view", {
              key: 1,
              class: "flex-center flex-row",
              style: { "font-weight": "500", "justify-content": "space-between" }
            }, [
              createElementVNode("u-text", {
                style: { "font-size": "22rpx", "color": "#666", "padding-top": "4rpx", "padding-bottom": "4rpx", "padding-right": "20rpx" },
                onClick: _cache[2] || (_cache[2] = (...args) => $options.LocalSearchListClear && $options.LocalSearchListClear(...args))
              }, "\u5168\u90E8\u5220\u9664"),
              createElementVNode("u-text", {
                style: { "font-size": "22rpx", "color": "#c0402b", "padding-top": "4rpx", "padding-bottom": "4rpx", "padding-left": "20rpx" },
                onClick: _cache[3] || (_cache[3] = ($event) => $data.localSearchListDel = false)
              }, "\u5B8C\u6210")
            ]))
          ]),
          createElementVNode("view", { class: "word-container_body" }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.localSearchList, (word, index) => {
              return openBlock(), createElementBlock("view", {
                class: "flex-center flex-row word-container_body-text",
                key: index,
                onClick: ($event) => $options.LocalSearchlistItemClick(word, index)
              }, [
                (openBlock(), createElementBlock("u-text", {
                  class: "word-display",
                  key: word
                }, toDisplayString(word), 1)),
                $data.localSearchListDel ? (openBlock(), createBlock(_component_uni_icons, {
                  key: 0,
                  size: "12",
                  type: "closeempty"
                })) : createCommentVNode("v-if", true)
              ], 8, ["onClick"]);
            }), 128))
          ])
        ])) : createCommentVNode("v-if", true),
        createCommentVNode(" \u641C\u7D22\u53D1\u73B0 "),
        createElementVNode("view", { class: "word-container" }, [
          createElementVNode("view", { class: "word-container_header" }, [
            createElementVNode("view", { class: "flex-center flex-row" }, [
              createElementVNode("u-text", { class: "word-container_header-text" }, "\u641C\u7D22\u53D1\u73B0"),
              !$data.netHotListIsHide ? (openBlock(), createBlock(_component_uni_icons, {
                key: 0,
                class: "search-icons",
                color: $data.iconColor,
                size: "14",
                type: "reload",
                onClick: $options.searchHotRefresh
              }, null, 8, ["color", "onClick"])) : createCommentVNode("v-if", true)
            ]),
            createVNode(_component_uni_icons, {
              class: "search-icons",
              style: { "padding-right": "0" },
              color: $data.iconColor,
              size: "18",
              type: $data.netHotListIsHide ? "eye-slash" : "eye",
              onClick: _cache[4] || (_cache[4] = ($event) => $data.netHotListIsHide = !$data.netHotListIsHide)
            }, null, 8, ["color", "type"])
          ]),
          createVNode(_component_unicloud_db, {
            ref: "udb",
            field: "content",
            collection: "opendb-search-hot",
            orderby: "create_date desc,count desc",
            "page-data": "replace",
            "page-size": 10
          }, {
            default: withCtx(({ data, loading, error, options }) => [
              loading && !$data.netHotListIsHide ? (openBlock(), createElementBlock("u-text", {
                key: 0,
                class: "word-container_body-info"
              }, "\u6B63\u5728\u52A0\u8F7D...")) : (openBlock(), createElementBlock("view", {
                key: 1,
                class: "word-container_body"
              }, [
                !$data.netHotListIsHide ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  error ? (openBlock(), createElementBlock("u-text", {
                    key: 0,
                    class: "word-container_body-info"
                  }, toDisplayString(error.message), 1)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(data, (word, index) => {
                    return openBlock(), createElementBlock("u-text", {
                      class: "word-container_body-text",
                      key: index,
                      onClick: ($event) => $options.search(word.content)
                    }, toDisplayString(word.content), 9, ["onClick"]);
                  }), 128))
                ], 2112)) : (openBlock(), createElementBlock("view", {
                  key: 1,
                  style: { "flex": "1" }
                }, [
                  createElementVNode("u-text", { class: "word-container_body-info" }, "\u5F53\u524D\u641C\u7D22\u53D1\u73B0\u5DF2\u9690\u85CF")
                ]))
              ]))
            ]),
            _: 1
          }, 512)
        ])
      ]),
      createCommentVNode(" \u641C\u7D22\u8054\u60F3 "),
      $options.associativeShow ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "search-associative"
      }, [
        createVNode(_component_uni_list, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.associativeList, (item, index) => {
              return openBlock(), createBlock(_component_uni_list_item, {
                key: item._id,
                ellipsis: 1,
                title: item.name,
                onClick: ($event) => $options.associativeClick(item),
                "show-extra-icon": "",
                clickable: "",
                "extra-icon": { size: 18, color: $data.iconColor, type: "search" }
              }, null, 8, ["title", "onClick", "extra-icon"]);
            }), 128))
          ]),
          _: 1
        })
      ])) : createCommentVNode("v-if", true)
    ])
  ]);
}
var search = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/list/search/search.nvue"]]);
export { search as default };
