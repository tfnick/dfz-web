import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createTextVNode } from "vue";
import { _ as _export_sfc } from "../../plugin-vue_export-helper.js";
var config = {
  "h5": {
    "url": "https://uni-starter.dcloud.net.cn"
  },
  "mp": {
    "weixin": {
      "id": "gh_33446d7f7a26"
    }
  },
  "router": {
    "visitor": [
      "/",
      { "pattern": /^\/pages\/list.*/ },
      { "pattern": /^\/pages\/ucenter\/login-page.*/ },
      "/pages/common/webview/webview",
      "/pages/grid/grid",
      "/pages/ucenter/ucenter",
      "/pages/ucenter/about/about",
      "/pages/ucenter/settings/settings"
    ],
    "login": ["weixin", "univerify", "username", "smsCode", "apple"]
  },
  "about": {
    "appName": "uni-starter",
    "logo": "/static/logo.png",
    "company": "\u5317\u4EACxx\u7F51\u7EDC\u6280\u672F\u6709\u9650\u516C\u53F8",
    "slogan": "\u4E91\u7AEF\u4E00\u4F53\u5E94\u7528\u5FEB\u901F\u5F00\u53D1\u6A21\u7248",
    "agreements": [
      {
        "title": "\u7528\u6237\u670D\u52A1\u534F\u8BAE",
        "url": "\u8BF7\u586B\u5199\u7528\u6237\u670D\u52A1\u534F\u8BAE\u94FE\u63A5"
      },
      {
        "title": "\u9690\u79C1\u653F\u7B56",
        "url": "\u8BF7\u586B\u5199\u9690\u79C1\u653F\u7B56\u94FE\u63A5"
      }
    ],
    "download": "",
    "version": "1.0.0"
  },
  "download": {
    "ios": "https://itunes.apple.com/cn/app/hello-uni-app/id1417078253?mt=8",
    "android": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-97fca9f2-41f6-449f-a35e-3f135d4c3875/6d754387-a6c3-48ed-8ad2-e8f39b40fc01.apk"
  },
  "marketId": {
    "ios": "id1417078253",
    "android": "123456"
  },
  "i18n": {
    "enable": false
  }
};
var _style_0 = { "page": { "": { "paddingTop": 80, "paddingRight": 30, "paddingBottom": 80, "paddingLeft": 30 } }, "title": { "": { "fontSize": 18, "lineHeight": 30, "marginBottom": 20 } }, "flex-r": { "": { "flexDirection": "row", "flexWrap": "wrap" } }, "text-item": { "": { "marginBottom": 5 } }, "tl": { "": { "fontSize": 14, "lineHeight": 20 } }, "hl": { "": { "color": "#007AFF" } }, "service": { "": { "fontSize": 16, "lineHeight": 20, "marginTop": 20 } }, "confirm": { "": { "marginTop": 50, "flexDirection": "row" } }, "btn-privacy": { "": { "flex": 1 } }, "btn-disagree": { "": { "marginLeft": 20 } } };
const { about } = config;
const _sfc_main = {
  data() {
    return {};
  },
  onLoad() {
    this._canBack = false;
  },
  onBackPress() {
    return !this._canBack;
  },
  methods: {
    openprotocol(e) {
      uni.navigateTo({
        url: "/pages/common/webview/webview?url=" + about.agreements[0].url
      });
    },
    openPrivacyPolicy(e) {
      uni.navigateTo({
        url: "/pages/common/webview/webview?url=" + about.agreements[1].url
      });
    },
    agree(e) {
      uni.setStorageSync("userprotocol", 1);
      this._canBack = true;
      setTimeout(() => {
        uni.navigateBack({
          animationDuration: 0
        });
      }, 100);
    },
    disagree() {
      plus.runtime.quit();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "page" }, [
      createElementVNode("view", null, [
        createElementVNode("u-text", { class: "title" }, "\u4E2A\u4EBA\u4FE1\u606F\u4FDD\u62A4\u6307\u5F15")
      ]),
      createElementVNode("view", { class: "text-item" }, [
        createElementVNode("u-text", { class: "tl" }, "1.\u5728\u6D4F\u89C8\u4F7F\u7528\u65F6\uFF0C\u6211\u4EEC\u4F1A\u6536\u96C6\u3001\u4F7F\u7528\u8BBE\u5907\u6807\u8BC6\u4FE1\u606F\u7528\u4E8E\u63A8\u8350\u3002")
      ]),
      createElementVNode("view", { class: "text-item" }, [
        createElementVNode("u-text", { class: "tl" }, "2.\u6211\u4EEC\u53EF\u80FD\u4F1A\u7533\u8BF7\u4F4D\u7F6E\u6743\u9650\uFF0C\u7528\u4E8E\u6F14\u793A uni-app \u7684\u5730\u56FE\u3001\u5B9A\u4F4D\u80FD\u529B\u3002")
      ]),
      createElementVNode("view", { class: "text-item" }, [
        createElementVNode("u-text", { class: "tl" }, "3.\u4F60\u53EF\u4EE5\u67E5\u770B\u5B8C\u6574\u7248")
      ]),
      createElementVNode("view", { class: "text-item flex-r" }, [
        createElementVNode("u-text", {
          class: "tl hl",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.openprotocol && $options.openprotocol(...args))
        }, "\u300A\u7528\u6237\u534F\u8BAE\u300B"),
        createElementVNode("u-text", { class: "tl" }, " \u548C "),
        createElementVNode("u-text", {
          class: "tl hl",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.openPrivacyPolicy && $options.openPrivacyPolicy(...args))
        }, "\u300A\u9690\u79C1\u653F\u7B56\u300B")
      ]),
      createElementVNode("view", { class: "text-item" }, [
        createElementVNode("u-text", { class: "tl" }, "\u4EE5\u4FBF\u4E86\u89E3\u6211\u4EEC\u6536\u96C6\u3001\u4F7F\u7528\u3001\u5171\u4EAB\u3001\u5B58\u50A8\u4FE1\u606F\u7684\u60C5\u51B5\uFF0C\u4EE5\u53CA\u5BF9\u4FE1\u606F\u7684\u4FDD\u62A4\u63AA\u65BD\u3002")
      ]),
      createElementVNode("view", { class: "text-item" }, [
        createElementVNode("u-text", { class: "service" }, "\u5982\u679C\u4F60\u540C\u610F\u8BF7\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u4EE5\u63A5\u53D7\u6211\u4EEC\u7684\u670D\u52A1")
      ]),
      createElementVNode("view", { class: "text-item confirm" }, [
        createVNode(_component_button, {
          class: "btn-privacy",
          type: "primary",
          onClick: $options.agree
        }, {
          default: withCtx(() => [
            createTextVNode("\u540C\u610F")
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_button, {
          class: "btn-privacy btn-disagree",
          onClick: $options.disagree
        }, {
          default: withCtx(() => [
            createTextVNode("\u6682\u4E0D\u4F7F\u7528")
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      createElementVNode("view", { class: "exit-area" })
    ])
  ]);
}
var uniAgree = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/uni-agree/uni-agree.nvue"]]);
export { uniAgree as default };
