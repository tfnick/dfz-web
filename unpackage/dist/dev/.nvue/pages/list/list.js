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
import { i as initVueI18n, f as formatAppLog, S as St, r as resolveEasycom, _ as __easycom_3, a as __easycom_4, b as __easycom_2$1 } from "../../unicloud-db.js";
import { openBlock, createElementBlock, toDisplayString, createElementVNode, normalizeStyle, renderSlot, resolveComponent, resolveDynamicComponent, createVNode, createCommentVNode, withCtx, Fragment, renderList, createBlock } from "vue";
import { _ as _export_sfc } from "../../plugin-vue_export-helper.js";
function pad(str, length = 2) {
  str += "";
  while (str.length < length) {
    str = "0" + str;
  }
  return str.slice(-length);
}
const parser = {
  yyyy: (dateObj) => {
    return pad(dateObj.year, 4);
  },
  yy: (dateObj) => {
    return pad(dateObj.year);
  },
  MM: (dateObj) => {
    return pad(dateObj.month);
  },
  M: (dateObj) => {
    return dateObj.month;
  },
  dd: (dateObj) => {
    return pad(dateObj.day);
  },
  d: (dateObj) => {
    return dateObj.day;
  },
  hh: (dateObj) => {
    return pad(dateObj.hour);
  },
  h: (dateObj) => {
    return dateObj.hour;
  },
  mm: (dateObj) => {
    return pad(dateObj.minute);
  },
  m: (dateObj) => {
    return dateObj.minute;
  },
  ss: (dateObj) => {
    return pad(dateObj.second);
  },
  s: (dateObj) => {
    return dateObj.second;
  },
  SSS: (dateObj) => {
    return pad(dateObj.millisecond, 3);
  },
  S: (dateObj) => {
    return dateObj.millisecond;
  }
};
function getDate(time) {
  if (time instanceof Date) {
    return time;
  }
  switch (typeof time) {
    case "string": {
      if (time.indexOf("T") > -1) {
        return new Date(time);
      }
      return new Date(time.replace(/-/g, "/"));
    }
    default:
      return new Date(time);
  }
}
function formatDate(date, format = "yyyy/MM/dd hh:mm:ss") {
  if (!date && date !== 0) {
    return "";
  }
  date = getDate(date);
  const dateObj = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds()
  };
  const tokenRegExp = /yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s|SSS|SS|S/;
  let flag = true;
  let result = format;
  while (flag) {
    flag = false;
    result = result.replace(tokenRegExp, function(matched) {
      flag = true;
      return parser[matched](dateObj);
    });
  }
  return result;
}
function friendlyDate(time, {
  locale = "zh",
  threshold = [6e4, 36e5],
  format = "yyyy/MM/dd hh:mm:ss"
}) {
  if (time === "-") {
    return time;
  }
  if (!time && time !== 0) {
    return "";
  }
  const localeText = {
    zh: {
      year: "\u5E74",
      month: "\u6708",
      day: "\u5929",
      hour: "\u5C0F\u65F6",
      minute: "\u5206\u949F",
      second: "\u79D2",
      ago: "\u524D",
      later: "\u540E",
      justNow: "\u521A\u521A",
      soon: "\u9A6C\u4E0A",
      template: "{num}{unit}{suffix}"
    },
    en: {
      year: "year",
      month: "month",
      day: "day",
      hour: "hour",
      minute: "minute",
      second: "second",
      ago: "ago",
      later: "later",
      justNow: "just now",
      soon: "soon",
      template: "{num} {unit} {suffix}"
    }
  };
  const text = localeText[locale] || localeText.zh;
  let date = getDate(time);
  let ms = date.getTime() - Date.now();
  let absMs = Math.abs(ms);
  if (absMs < threshold[0]) {
    return ms < 0 ? text.justNow : text.soon;
  }
  if (absMs >= threshold[1]) {
    return formatDate(date, format);
  }
  let num;
  let unit;
  let suffix = text.later;
  if (ms < 0) {
    suffix = text.ago;
    ms = -ms;
  }
  const seconds = Math.floor(ms / 1e3);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  switch (true) {
    case years > 0:
      num = years;
      unit = text.year;
      break;
    case months > 0:
      num = months;
      unit = text.month;
      break;
    case days > 0:
      num = days;
      unit = text.day;
      break;
    case hours > 0:
      num = hours;
      unit = text.hour;
      break;
    case minutes > 0:
      num = minutes;
      unit = text.minute;
      break;
    default:
      num = seconds;
      unit = text.second;
      break;
  }
  if (locale === "en") {
    if (num === 1) {
      num = "a";
    } else {
      unit += "s";
    }
  }
  return text.template.replace(/{\s*num\s*}/g, num + "").replace(/{\s*unit\s*}/g, unit).replace(/{\s*suffix\s*}/g, suffix);
}
const _sfc_main$3 = {
  name: "uniDateformat",
  props: {
    date: {
      type: [Object, String, Number],
      default() {
        return "-";
      }
    },
    locale: {
      type: String,
      default: "zh"
    },
    threshold: {
      type: Array,
      default() {
        return [0, 0];
      }
    },
    format: {
      type: String,
      default: "yyyy/MM/dd hh:mm:ss"
    },
    refreshRate: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      refreshMark: 0
    };
  },
  computed: {
    dateShow() {
      this.refreshMark;
      return friendlyDate(this.date, {
        locale: this.locale,
        threshold: this.threshold,
        format: this.format
      });
    }
  },
  watch: {
    refreshRate: {
      handler() {
        this.setAutoRefresh();
      },
      immediate: true
    }
  },
  methods: {
    refresh() {
      this.refreshMark++;
    },
    setAutoRefresh() {
      clearInterval(this.refreshInterval);
      if (this.refreshRate) {
        this.refreshInterval = setInterval(() => {
          this.refresh();
        }, parseInt(this.refreshRate));
      }
    }
  }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("u-text", null, toDisplayString($options.dateShow), 1);
}
var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.vue"]]);
const noData$1 = "No Data";
const noNetwork$1 = "Network error";
const toSet$1 = "Go to settings";
const error$1 = "error";
var en = {
  noData: noData$1,
  noNetwork: noNetwork$1,
  toSet: toSet$1,
  error: error$1
};
const noData = "\u6682\u65E0\u6570\u636E";
const noNetwork = "\u7F51\u7EDC\u5F02\u5E38";
const toSet = "\u524D\u5F80\u8BBE\u7F6E";
const error = "\u9519\u8BEF";
var zhHans = {
  noData,
  noNetwork,
  toSet,
  error
};
var messages = {
  en,
  "zh-Hans": zhHans
};
var _imports_0 = "/static/uni-load-state/disconnection.png";
var _style_0$2 = { "box": { "": { "flex": 1, "flexDirection": "column", "alignItems": "center", "justifyContent": "center" } }, "uni-load-more": { "": { "alignItems": "center", "justifyContent": "center", "width": "690rpx" } }, "state-text": { "": { "textAlign": "center", "fontSize": "26rpx", "width": "690rpx", "paddingTop": "10rpx", "paddingRight": "10rpx", "paddingBottom": "10rpx", "paddingLeft": "10rpx", "color": "#999999" } }, "icon-image": { "": { "width": "300rpx" } }, "tip-text": { "": { "color": "#999999", "fontSize": "32rpx", "marginBottom": "30rpx" } }, "btn": { "": { "paddingTop": 5, "paddingRight": 10, "paddingBottom": 5, "paddingLeft": 10, "width": 128, "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "textAlign": "center" } }, "btn-text": { "": { "color": "#999999", "fontSize": 15 } }, "btn-default": { "": { "borderColor": "#999999", "borderStyle": "solid", "borderWidth": 1, "borderRadius": 3 } }, "error": { "": { "width": "690rpx", "color": "#DD524D" } } };
const {
  t
} = initVueI18n(messages);
const _sfc_main$2 = {
  name: "uni-load-state",
  computed: {
    noData() {
      return t("noData");
    },
    noNetwork() {
      return t("noNetwork");
    },
    toSet() {
      return t("toSet");
    },
    error() {
      return t("error");
    }
  },
  data() {
    return {
      "networkType": ""
    };
  },
  props: {
    state: {
      type: Object,
      default() {
        return {
          "loading": true,
          "hasMore": false,
          "pagination": {
            "pages": 0
          },
          "data": [],
          "error": {}
        };
      }
    }
  },
  mounted() {
    uni.onNetworkStatusChange(({
      networkType
    }) => {
      if (this.networkType == "none" && networkType != "none") {
        this.$emit("networkResume");
      }
      this.networkType = networkType;
    });
    uni.getNetworkType({
      success: ({
        networkType
      }) => {
        this.networkType = networkType;
      }
    });
  },
  methods: {
    appear() {
      if (!this.state.loading && this.state.hasMore) {
        this.$emit("loadMore");
      }
    },
    openSettings() {
      if (uni.getSystemInfoSync().platform == "ios") {
        var UIApplication = plus.ios.import("UIApplication");
        var application2 = UIApplication.sharedApplication();
        var NSURL2 = plus.ios.import("NSURL");
        var setting2 = NSURL2.URLWithString("App-prefs:root=General");
        application2.openURL(setting2);
        plus.ios.deleteObject(setting2);
        plus.ios.deleteObject(NSURL2);
        plus.ios.deleteObject(application2);
      } else {
        var Intent = plus.android.importClass("android.content.Intent");
        var Settings = plus.android.importClass("android.provider.Settings");
        var mainActivity = plus.android.runtimeMainActivity();
        var intent = new Intent(Settings.ACTION_SETTINGS);
        mainActivity.startActivity(intent);
      }
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    onAppear: _cache[1] || (_cache[1] = (...args) => $options.appear && $options.appear(...args))
  }, [
    $props.state.error ? (openBlock(), createElementBlock("view", { key: 0 }, [
      $data.networkType == "none" ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "box"
      }, [
        createElementVNode("u-image", {
          class: "icon-image",
          src: _imports_0,
          mode: "widthFix"
        }),
        createElementVNode("u-text", { class: "tip-text" }, toDisplayString($options.noNetwork), 1),
        createElementVNode("view", {
          class: "btn btn-default",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.openSettings && $options.openSettings(...args))
        }, [
          createElementVNode("u-text", { class: "btn-text" }, toDisplayString($options.toSet), 1)
        ])
      ])) : (openBlock(), createElementBlock("u-text", {
        key: 1,
        class: "error"
      }, toDisplayString($options.error) + "\uFF1A" + toDisplayString(JSON.stringify($props.state.error)), 1))
    ])) : (openBlock(), createElementBlock("u-text", {
      key: 1,
      class: "state-text"
    }, toDisplayString($props.state.loading ? "\u52A0\u8F7D\u4E2D..." : $props.state.hasMore ? "\u4E0A\u62C9\u52A0\u8F7D\u66F4\u591A" : "\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86"), 1))
  ], 32);
}
var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/components/uni-load-state/uni-load-state.vue"]]);
var _style_0$1 = { "uni-status-bar": { "": { "height": 20 } } };
const _sfc_main$1 = {
  name: "UniStatusBar",
  data() {
    return {
      statusBarHeight: 20
    };
  },
  mounted() {
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    style: normalizeStyle({ height: $data.statusBarHeight }),
    class: "uni-status-bar"
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4);
}
var statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
var isIos;
isIos = plus.os.name == "iOS";
function judgeIosPermissionPush() {
  var result = false;
  var UIApplication = plus.ios.import("UIApplication");
  var app = UIApplication.sharedApplication();
  var enabledTypes = 0;
  if (app.currentUserNotificationSettings) {
    var settings = app.currentUserNotificationSettings();
    enabledTypes = settings.plusGetAttribute("types");
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:19", "enabledTypes1:" + enabledTypes);
    if (enabledTypes == 0) {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:21", "\u63A8\u9001\u6743\u9650\u6CA1\u6709\u5F00\u542F");
    } else {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:24", "\u5DF2\u7ECF\u5F00\u542F\u63A8\u9001\u529F\u80FD!");
    }
    plus.ios.deleteObject(settings);
  } else {
    enabledTypes = app.enabledRemoteNotificationTypes();
    if (enabledTypes == 0) {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:30", "\u63A8\u9001\u6743\u9650\u6CA1\u6709\u5F00\u542F!");
    } else {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:33", "\u5DF2\u7ECF\u5F00\u542F\u63A8\u9001\u529F\u80FD!");
    }
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:35", "enabledTypes2:" + enabledTypes);
  }
  plus.ios.deleteObject(app);
  plus.ios.deleteObject(UIApplication);
  return result;
}
function judgeIosPermissionLocation() {
  var result = false;
  var cllocationManger = plus.ios.import("CLLocationManager");
  var status = cllocationManger.authorizationStatus();
  result = status != 2;
  formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:48", "\u5B9A\u4F4D\u6743\u9650\u5F00\u542F\uFF1A" + result);
  plus.ios.deleteObject(cllocationManger);
  return result;
}
function judgeIosPermissionRecord() {
  var result = false;
  var avaudiosession = plus.ios.import("AVAudioSession");
  var avaudio = avaudiosession.sharedInstance();
  var permissionStatus = avaudio.recordPermission();
  formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:70", "permissionStatus:" + permissionStatus);
  if (permissionStatus == 1684369017 || permissionStatus == 1970168948) {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:72", "\u9EA6\u514B\u98CE\u6743\u9650\u6CA1\u6709\u5F00\u542F");
  } else {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:75", "\u9EA6\u514B\u98CE\u6743\u9650\u5DF2\u7ECF\u5F00\u542F");
  }
  plus.ios.deleteObject(avaudiosession);
  return result;
}
function judgeIosPermissionCamera() {
  var result = false;
  var AVCaptureDevice = plus.ios.import("AVCaptureDevice");
  var authStatus = AVCaptureDevice.authorizationStatusForMediaType("vide");
  formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:86", "authStatus:" + authStatus);
  if (authStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:89", "\u76F8\u673A\u6743\u9650\u5DF2\u7ECF\u5F00\u542F");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:91", "\u76F8\u673A\u6743\u9650\u6CA1\u6709\u5F00\u542F");
  }
  plus.ios.deleteObject(AVCaptureDevice);
  return result;
}
function judgeIosPermissionPhotoLibrary() {
  var result = false;
  var PHPhotoLibrary = plus.ios.import("PHPhotoLibrary");
  var authStatus = PHPhotoLibrary.authorizationStatus();
  formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:102", "authStatus:" + authStatus);
  if (authStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:105", "\u76F8\u518C\u6743\u9650\u5DF2\u7ECF\u5F00\u542F");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:107", "\u76F8\u518C\u6743\u9650\u6CA1\u6709\u5F00\u542F");
  }
  plus.ios.deleteObject(PHPhotoLibrary);
  return result;
}
function judgeIosPermissionContact() {
  var result = false;
  var CNContactStore = plus.ios.import("CNContactStore");
  var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);
  if (cnAuthStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:120", "\u901A\u8BAF\u5F55\u6743\u9650\u5DF2\u7ECF\u5F00\u542F");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:122", "\u901A\u8BAF\u5F55\u6743\u9650\u6CA1\u6709\u5F00\u542F");
  }
  plus.ios.deleteObject(CNContactStore);
  return result;
}
function judgeIosPermissionCalendar() {
  var result = false;
  var EKEventStore = plus.ios.import("EKEventStore");
  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);
  if (ekAuthStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:135", "\u65E5\u5386\u6743\u9650\u5DF2\u7ECF\u5F00\u542F");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:137", "\u65E5\u5386\u6743\u9650\u6CA1\u6709\u5F00\u542F");
  }
  plus.ios.deleteObject(EKEventStore);
  return result;
}
function judgeIosPermissionMemo() {
  var result = false;
  var EKEventStore = plus.ios.import("EKEventStore");
  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);
  if (ekAuthStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:150", "\u5907\u5FD8\u5F55\u6743\u9650\u5DF2\u7ECF\u5F00\u542F");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:152", "\u5907\u5FD8\u5F55\u6743\u9650\u6CA1\u6709\u5F00\u542F");
  }
  plus.ios.deleteObject(EKEventStore);
  return result;
}
function requestAndroidPermission(permissionID) {
  return new Promise((resolve, reject) => {
    plus.android.requestPermissions([permissionID], function(resultObj) {
      var result = 0;
      for (var i = 0; i < resultObj.granted.length; i++) {
        var grantedPermission = resultObj.granted[i];
        formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:167", "\u5DF2\u83B7\u53D6\u7684\u6743\u9650\uFF1A" + grantedPermission);
        result = 1;
      }
      for (var i = 0; i < resultObj.deniedPresent.length; i++) {
        var deniedPresentPermission = resultObj.deniedPresent[i];
        formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:172", "\u62D2\u7EDD\u672C\u6B21\u7533\u8BF7\u7684\u6743\u9650\uFF1A" + deniedPresentPermission);
        result = 0;
      }
      for (var i = 0; i < resultObj.deniedAlways.length; i++) {
        var deniedAlwaysPermission = resultObj.deniedAlways[i];
        formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:177", "\u6C38\u4E45\u62D2\u7EDD\u7533\u8BF7\u7684\u6743\u9650\uFF1A" + deniedAlwaysPermission);
        result = -1;
      }
      resolve(result);
    }, function(error2) {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:187", "\u7533\u8BF7\u6743\u9650\u9519\u8BEF\uFF1A" + error2.code + " = " + error2.message);
      resolve({
        code: error2.code,
        message: error2.message
      });
    });
  });
}
function judgeIosPermission(permissionID) {
  if (permissionID == "location") {
    return judgeIosPermissionLocation();
  } else if (permissionID == "camera") {
    return judgeIosPermissionCamera();
  } else if (permissionID == "photoLibrary") {
    return judgeIosPermissionPhotoLibrary();
  } else if (permissionID == "record") {
    return judgeIosPermissionRecord();
  } else if (permissionID == "push") {
    return judgeIosPermissionPush();
  } else if (permissionID == "contact") {
    return judgeIosPermissionContact();
  } else if (permissionID == "calendar") {
    return judgeIosPermissionCalendar();
  } else if (permissionID == "memo") {
    return judgeIosPermissionMemo();
  }
  return false;
}
function gotoAppPermissionSetting() {
  if (isIos) {
    var UIApplication = plus.ios.import("UIApplication");
    var application2 = UIApplication.sharedApplication();
    var NSURL2 = plus.ios.import("NSURL");
    var setting2 = NSURL2.URLWithString("app-settings:");
    application2.openURL(setting2);
    plus.ios.deleteObject(setting2);
    plus.ios.deleteObject(NSURL2);
    plus.ios.deleteObject(application2);
  } else {
    var Intent = plus.android.importClass("android.content.Intent");
    var Settings = plus.android.importClass("android.provider.Settings");
    var Uri = plus.android.importClass("android.net.Uri");
    var mainActivity = plus.android.runtimeMainActivity();
    var intent = new Intent();
    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
    var uri = Uri.fromParts("package", mainActivity.getPackageName(), null);
    intent.setData(uri);
    mainActivity.startActivity(intent);
  }
}
function checkSystemEnableLocation() {
  if (isIos) {
    var result = false;
    var cllocationManger = plus.ios.import("CLLocationManager");
    var result = cllocationManger.locationServicesEnabled();
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:253", "\u7CFB\u7EDF\u5B9A\u4F4D\u5F00\u542F:" + result);
    plus.ios.deleteObject(cllocationManger);
    return result;
  } else {
    var context = plus.android.importClass("android.content.Context");
    var locationManager = plus.android.importClass("android.location.LocationManager");
    var main = plus.android.runtimeMainActivity();
    var mainSvr = main.getSystemService(context.LOCATION_SERVICE);
    var result = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER);
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:262", "\u7CFB\u7EDF\u5B9A\u4F4D\u5F00\u542F:" + result);
    return result;
  }
}
var permision = {
  judgeIosPermission,
  requestAndroidPermission,
  checkSystemEnableLocation,
  gotoAppPermissionSetting
};
class Gps {
  constructor(arg) {
    this.lock = false;
  }
  async getLocation(param = {
    type: "wgs84"
  }) {
    return new Promise(async (callback2) => {
      if (this.lock) {
        callback2(false);
        return false;
      }
      this.lock = true;
      uni.getLocation(__spreadProps(__spreadValues({}, param), {
        success: (res) => {
          this.lock = false;
          callback2(res);
        },
        fail: async (err) => {
          uni.showToast({
            title: "\u5B9A\u4F4D\u83B7\u53D6\u5931\u8D25",
            icon: "none"
          });
          formatAppLog("error", "at uni_modules/json-gps/js_sdk/gps.js:30", err);
          callback2(false);
          await this.checkGpsIsOpen();
        }
      }));
    });
  }
  async checkGpsIsOpen() {
    this.lock = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/gps.js:70", "\u68C0\u67E5\u5B9A\u4F4D\u8BBE\u7F6E\u5F00\u542F\u95EE\u9898", permision.checkSystemEnableLocation());
    if (!permision.checkSystemEnableLocation()) {
      plus.nativeUI.confirm("\u624B\u673A\u5B9A\u4F4D\u6743\u9650\u6CA1\u6709\u5F00\u542F\uFF0C\u662F\u5426\u53BB\u5F00\u542F\uFF1F", (e) => {
        this.lock = false;
        if (e.index == 0) {
          if (uni.getSystemInfoSync().platform == "ios") {
            plus.runtime.openURL("app-settings://");
          } else {
            var main = plus.android.runtimeMainActivity();
            var Intent = plus.android.importClass("android.content.Intent");
            var Settings = plus.android.importClass("android.provider.Settings");
            var intent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
            main.startActivity(intent);
          }
        } else {
          uni.showToast({
            title: "\u8BBE\u5907\u65E0\u5B9A\u4F4D\u6743\u9650",
            icon: "none"
          });
          callback(false);
        }
      }, {
        "buttons": ["\u53BB\u8BBE\u7F6E", "\u4E0D\u5F00\u542F"],
        "verticalAlign": "center"
      });
      return false;
    }
    let checkAppGpsRes = await this.checkAppGps();
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/gps.js:99", checkAppGpsRes, "checkAppGpsRes");
    if (!checkAppGpsRes) {
      plus.nativeUI.confirm("\u5E94\u7528\u5B9A\u4F4D\u6743\u9650\u6CA1\u6709\u5F00\u542F\uFF0C\u662F\u5426\u53BB\u5F00\u542F\uFF1F", (e) => {
        this.lock = false;
        if (e.index == 0) {
          permision.gotoAppPermissionSetting();
          callback(false);
        } else {
          uni.showToast({
            title: "\u5E94\u7528\u65E0\u5B9A\u4F4D\u6743\u9650",
            icon: "none"
          });
          return false;
        }
      }, {
        "buttons": ["\u53BB\u8BBE\u7F6E", "\u4E0D\u5F00\u542F"],
        "verticalAlign": "center"
      });
    } else {
      this.lock = false;
    }
  }
  async checkAppGps() {
    if (uni.getSystemInfoSync().platform == "ios" && !permision.judgeIosPermission("location")) {
      return false;
    }
    if (uni.getSystemInfoSync().platform != "ios" && await permision.requestAndroidPermission("android.permission.ACCESS_FINE_LOCATION") != 1) {
      return false;
    }
    return true;
  }
}
var _style_0 = { "pages": { "": { "backgroundColor": "#FFFFFF" } }, "avatar": { "": { "width": "200rpx", "height": "200rpx", "marginRight": "10rpx" } }, "main": { "": { "justifyContent": "space-between" } }, "title": { "": { "width": "480rpx", "fontSize": "32rpx" } }, "info": { "": { "flexDirection": "row", "justifyContent": "space-between" } }, "author": { "": { "fontSize": "28rpx", "color": "#999999" } }, "last_modify_date": { "": { "fontSize": "28rpx", "color": "#999999" } }, "uni-search-box": { "": { "backgroundColor": "#FFFFFF", "position": "sticky", "height": 50, "top": 0, "left": 0 } }, "cover-search-bar": { "": { "height": 50, "position": "relative", "top": -50, "marginBottom": -50 } } };
var cdbRef;
const gps = new Gps(), db = St.database();
const _sfc_main = {
  components: {
    statusBar
  },
  computed: {
    inputPlaceholder(e) {
      if (uni.getStorageSync("CURRENT_LANG") == "en") {
        return "Please enter the search content";
      } else {
        return "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9";
      }
    },
    colList() {
      return [
        db.collection("opendb-news-articles").where(this.where).field("avatar,title,last_modify_date,user_id").getTemp(),
        db.collection("uni-id-users").field("_id,username").getTemp()
      ];
    }
  },
  data() {
    return {
      where: '"article_status" == 1',
      keyword: "",
      showRefresh: false,
      listHight: 0
    };
  },
  watch: {
    keyword(keyword, oldValue) {
      let where = '"article_status" == 1 ';
      if (keyword) {
        this.where = where + `&& /${keyword}/.test(title)`;
      } else {
        this.where = where;
      }
    }
  },
  async onReady() {
    this.listHight = uni.getSystemInfoSync().windowHeight - uni.getSystemInfoSync().statusBarHeight - 50 + "px";
    cdbRef = this.$refs.udb;
  },
  async onShow() {
    this.keyword = getApp().globalData.searchText;
    getApp().globalData.searchText = "";
    let location = await gps.getLocation({
      geocode: true
    });
    formatAppLog("log", "at pages/list/list.nvue:129", location);
  },
  methods: {
    searchClick(e) {
      uni.hideKeyboard();
      uni.navigateTo({
        url: "/pages/list/search/search",
        animationType: "fade-in"
      });
    },
    retry() {
      this.refresh();
    },
    refresh() {
      cdbRef.loadData({
        clear: true
      }, () => {
        uni.stopPullDownRefresh();
        this.showRefresh = false;
        formatAppLog("log", "at pages/list/list.nvue:158", "end");
      });
      formatAppLog("log", "at pages/list/list.nvue:160", "refresh");
    },
    loadMore() {
      cdbRef.loadMore();
    },
    onqueryerror(e) {
      formatAppLog("error", "at pages/list/list.nvue:166", e);
    },
    onpullingdown(e) {
      formatAppLog("log", "at pages/list/list.nvue:169", e);
      this.showRefresh = true;
      if (e.pullingDistance > 100) {
        this.refresh();
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_statusBar = resolveComponent("statusBar");
  const _component_refreshBox = resolveComponent("refreshBox");
  const _component_uni_dateformat = resolveEasycom(resolveDynamicComponent("uni-dateformat"), __easycom_0);
  const _component_uni_list_item = resolveEasycom(resolveDynamicComponent("uni-list-item"), __easycom_3);
  const _component_uni_load_state = resolveEasycom(resolveDynamicComponent("uni-load-state"), __easycom_2);
  const _component_uni_list = resolveEasycom(resolveDynamicComponent("uni-list"), __easycom_4);
  const _component_unicloud_db = resolveEasycom(resolveDynamicComponent("unicloud-db"), __easycom_2$1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "pages" }, [
      createVNode(_component_statusBar),
      createCommentVNode(' \u641C\u7D22\u529F\u80FD \n		<view class="uni-search-box">\n			<uni-search-bar v-model="keyword" ref="searchBar" radius="100" cancelButton="none" disabled\n				:placeholder="inputPlaceholder" />\n			<view class="cover-search-bar" @click="searchClick"></view>\n		</view>\n		'),
      createVNode(_component_unicloud_db, {
        ref: "udb",
        onError: $options.onqueryerror,
        collection: $options.colList,
        "page-size": 10
      }, {
        default: withCtx(({ data, pagination, hasMore, loading, error: error2, options }) => [
          createCommentVNode(' \u57FA\u4E8E uni-list \u7684\u9875\u9762\u5E03\u5C40 field="user_id.username"'),
          createVNode(_component_uni_list, {
            class: "uni-list",
            border: false,
            style: normalizeStyle({ height: $data.listHight })
          }, {
            default: withCtx(() => [
              createCommentVNode(" \u4F5C\u7528\u4E8Eapp\u7AEFnvue\u9875\u9762\u7684\u4E0B\u62C9\u52A0\u8F7D "),
              createVNode(_component_refreshBox, {
                onRefresh: $options.refresh,
                loading
              }, null, 8, ["onRefresh", "loading"]),
              createCommentVNode(" \u5217\u8868\u6E32\u67D3 "),
              (openBlock(true), createElementBlock(Fragment, null, renderList(data, (item, index) => {
                return openBlock(), createBlock(_component_uni_list_item, {
                  to: "/pages/list/detail?id=" + item._id + "&title=" + item.title,
                  key: index
                }, {
                  header: withCtx(() => [
                    createElementVNode("u-image", {
                      class: "avatar",
                      src: item.avatar,
                      mode: "aspectFill"
                    }, null, 8, ["src"])
                  ]),
                  body: withCtx(() => [
                    createElementVNode("view", { class: "main" }, [
                      createElementVNode("u-text", { class: "title" }, toDisplayString(item.title), 1),
                      createElementVNode("view", { class: "info" }, [
                        createElementVNode("u-text", { class: "author" }, toDisplayString(item.user_id[0] ? item.user_id[0].username : ""), 1),
                        createVNode(_component_uni_dateformat, {
                          class: "last_modify_date",
                          date: item.last_modify_date,
                          format: "yyyy-MM-dd",
                          threshold: [6e4, 2592e6]
                        }, null, 8, ["date"])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 128)),
              createCommentVNode(" \u52A0\u8F7D\u72B6\u6001\uFF1A\u4E0A\u62C9\u52A0\u8F7D\u66F4\u591A\uFF0C\u52A0\u8F7D\u4E2D\uFF0C\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86\uFF0C\u52A0\u8F7D\u9519\u8BEF "),
              createVNode(_component_uni_list_item, null, {
                body: withCtx(() => [
                  createVNode(_component_uni_load_state, {
                    onNetworkResume: $options.refresh,
                    state: { data, pagination, hasMore, loading, error: error2 },
                    onLoadMore: $options.loadMore
                  }, null, 8, ["onNetworkResume", "state", "onLoadMore"])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["style"])
        ]),
        _: 1
      }, 8, ["onError", "collection"])
    ])
  ]);
}
var list = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/list/list.nvue"]]);
export { list as default };
