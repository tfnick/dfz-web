"use strict";
var common_vendor = require("../../../../common/vendor.js");
var pages_ucenter_loginPage_common_loginPage_mixin = require("../common/login-page.mixin.js");
require("../common/loginSuccess.js");
const _sfc_main = {
  mixins: [pages_ucenter_loginPage_common_loginPage_mixin.mixin],
  data() {
    return {
      "password": "",
      "username": "",
      "agree": false,
      "captchaBase64": "",
      "captcha": ""
    };
  },
  computed: {
    canLogin() {
      return this.username.length && this.isPwd;
    },
    isPwd() {
      return /^.{6,20}$/.test(this.password);
    },
    isPhone() {
      return /^1\d{10}$/.test(this.phone);
    }
  },
  methods: {
    toRetrievePwd() {
      common_vendor.index.navigateTo({
        url: "../pwd-retrieve/pwd-retrieve?phoneNumber=" + (this.isPhone ? this.username : "") + "&phoneArea=" + this.currenPhoneArea
      });
    },
    pwdLogin() {
      if (!this.agree) {
        return common_vendor.index.showToast({
          title: this.$t("common").noAgree,
          icon: "none"
        });
      }
      common_vendor.St.callFunction({
        name: "uni-id-cf",
        data: {
          action: "login",
          params: {
            "username": this.username,
            "password": this.password,
            "captcha": this.captcha
          }
        },
        success: ({ result }) => {
          console.log(result);
          if (result.code === 0) {
            this.loginSuccess(result);
          } else {
            if (result.needCaptcha) {
              common_vendor.index.showToast({
                title: result.msg || "\u5B8C\u6210",
                icon: "none"
              });
              this.createCaptcha();
            } else {
              common_vendor.index.showModal({
                title: this.$t("common").error,
                content: result.msg,
                showCancel: false,
                confirmText: this.$t("common").gotIt
              });
            }
          }
        }
      });
    },
    createCaptcha() {
      common_vendor.St.callFunction({
        name: "uni-id-cf",
        data: {
          action: "createCaptcha",
          params: {
            scene: "login"
          }
        },
        success: ({ result }) => {
          if (result.code === 0) {
            this.captchaBase64 = result.captchaBase64;
          } else {
            common_vendor.index.showModal({
              content: result.msg,
              showCancel: false
            });
          }
        }
      });
    },
    toRegister(e) {
      console.log(e);
      common_vendor.index.navigateTo({
        url: "/pages/ucenter/login-page/register/register"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_agreements2 = common_vendor.resolveComponent("uni-agreements");
  const _easycom_uni_quick_login2 = common_vendor.resolveComponent("uni-quick-login");
  (_easycom_uni_agreements2 + _easycom_uni_quick_login2)();
}
const _easycom_uni_agreements = () => "../../../../components/uni-agreements/uni-agreements.js";
const _easycom_uni_quick_login = () => "../../../../components/uni-quick-login/uni-quick-login.js";
if (!Math) {
  (_easycom_uni_agreements + _easycom_uni_quick_login)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t(_ctx.$t("pwdLogin.pwdLogin")),
    b: _ctx.$t("pwdLogin.placeholder"),
    c: $data.username,
    d: common_vendor.o(($event) => $data.username = $event.detail.value),
    e: _ctx.$t("pwdLogin.passwordPlaceholder"),
    f: $data.password,
    g: common_vendor.o(($event) => $data.password = $event.detail.value),
    h: $data.captchaBase64
  }, $data.captchaBase64 ? {
    i: common_vendor.o((...args) => $options.createCaptcha && $options.createCaptcha(...args)),
    j: $data.captchaBase64,
    k: _ctx.$t("pwdLogin.verifyCodePlaceholder"),
    l: $data.captcha,
    m: common_vendor.o(($event) => $data.captcha = $event.detail.value)
  } : {}, {
    n: common_vendor.o(($event) => $data.agree = $event),
    o: common_vendor.t(_ctx.$t("pwdLogin.login")),
    p: !$options.canLogin,
    q: $options.canLogin ? "primary" : "default",
    r: common_vendor.o((...args) => $options.pwdLogin && $options.pwdLogin(...args)),
    s: common_vendor.t(_ctx.$t("pwdLogin.forgetPassword")),
    t: common_vendor.o((...args) => $options.toRetrievePwd && $options.toRetrievePwd(...args)),
    v: common_vendor.t(_ctx.$t("pwdLogin.register")),
    w: common_vendor.o((...args) => $options.toRegister && $options.toRegister(...args)),
    x: common_vendor.sr("uniQuickLogin", "7a1c721f-1"),
    y: common_vendor.p({
      agree: $data.agree
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/ucenter/login-page/pwd-login/pwd-login.vue"]]);
wx.createPage(MiniProgramPage);
