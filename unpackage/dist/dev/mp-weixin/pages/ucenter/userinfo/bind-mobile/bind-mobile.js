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
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      currenPhoneArea: "",
      formData: {
        phone: "",
        code: ""
      }
    };
  },
  computed: {
    tipText() {
      return this.$t("common.verifyCodeSend") + `${this.currenPhoneArea} ${this.formData.phone}\u3002` + this.$t("common.passwordDigits");
    },
    canSubmit() {
      return true;
    }
  },
  onLoad(event) {
    common_vendor.index.setNavigationBarTitle({
      title: this.$t("bindMobile.navigationBarTitle")
    });
  },
  onReady() {
  },
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations({
    setUserInfo: "user/login"
  })), {
    submit() {
      console.log(this.formData);
      common_vendor.St.callFunction({
        name: "uni-id-cf",
        data: {
          action: "bindMobileBySms",
          params: {
            "mobile": this.formData.phone,
            "code": this.formData.code
          }
        },
        success: ({ result }) => {
          console.log(result);
          this.setUserInfo({ "mobile": result.mobile });
          common_vendor.index.showToast({
            title: result.msg || "\u5B8C\u6210",
            icon: "none"
          });
          if (result.code === 0) {
            common_vendor.index.navigateBack();
          }
        }
      });
    },
    isPhone() {
      let reg_phone = /^1\d{10}$/;
      let isPhone = reg_phone.test(this.formData.phone);
      return isPhone;
    },
    isCode() {
      let reg_code = /^\d{6}$/;
      let isCode = reg_code.test(this.formData.code);
      return isCode;
    }
  })
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_send_sms_code2 = common_vendor.resolveComponent("uni-send-sms-code");
  (_easycom_uni_easyinput2 + _easycom_uni_send_sms_code2)();
}
const _easycom_uni_easyinput = () => "../../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_send_sms_code = () => "../../../../components/uni-send-sms-code/uni-send-sms-code.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_send_sms_code)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.phone = $event),
    b: common_vendor.p({
      clearable: true,
      focus: true,
      type: "number",
      inputBorder: false,
      maxlength: "11",
      placeholder: _ctx.$t("common.phonePlaceholder"),
      modelValue: $data.formData.phone
    }),
    c: common_vendor.sr("shortCode", "8ef1d552-2,8ef1d552-1"),
    d: common_vendor.p({
      ["code-type"]: "bind",
      phone: $data.formData.phone
    }),
    e: common_vendor.o(($event) => $data.formData.code = $event),
    f: common_vendor.p({
      clearable: true,
      type: "number",
      inputBorder: false,
      maxlength: "6",
      placeholder: _ctx.$t("common.verifyCodePlaceholder"),
      modelValue: $data.formData.code
    }),
    g: common_vendor.t(_ctx.$t("common.submit")),
    h: !$options.canSubmit,
    i: $options.canSubmit ? "primary" : "default",
    j: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/ucenter/userinfo/bind-mobile/bind-mobile.vue"]]);
wx.createPage(MiniProgramPage);
