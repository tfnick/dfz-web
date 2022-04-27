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
if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$O = {
    name: "UniSwiperDot",
    emits: ["clickItem"],
    props: {
      info: {
        type: Array,
        default() {
          return [];
        }
      },
      current: {
        type: Number,
        default: 0
      },
      dotsStyles: {
        type: Object,
        default() {
          return {};
        }
      },
      mode: {
        type: String,
        default: "default"
      },
      field: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        dots: {
          width: 6,
          height: 6,
          bottom: 10,
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, .3)",
          border: "1px rgba(0, 0, 0, .3) solid",
          selectedBackgroundColor: "#333",
          selectedBorder: "1px rgba(0, 0, 0, .9) solid"
        }
      };
    },
    watch: {
      dotsStyles(newVal) {
        this.dots = Object.assign(this.dots, this.dotsStyles);
      },
      mode(newVal) {
        if (newVal === "indexes") {
          this.dots.width = 14;
          this.dots.height = 14;
        } else {
          this.dots.width = 6;
          this.dots.height = 6;
        }
      }
    },
    created() {
      if (this.mode === "indexes") {
        this.dots.width = 12;
        this.dots.height = 12;
      }
      this.dots = Object.assign(this.dots, this.dotsStyles);
    },
    methods: {
      clickItem(index) {
        this.$emit("clickItem", index);
      }
    }
  };
  function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-swiper__warp" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.mode === "default" ? (vue.openBlock(), vue.createElementBlock("view", {
        style: vue.normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
        class: "uni-swiper__dots-box",
        key: "default"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.info, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            onClick: ($event) => $options.clickItem(index),
            style: vue.normalizeStyle({
              "width": (index === $props.current ? $data.dots.width * 2 : $data.dots.width) + "px",
              "height": $data.dots.width / 2 + "px",
              "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
              "border-radius": "0px"
            }),
            key: index,
            class: "uni-swiper__dots-item uni-swiper__dots-bar"
          }, null, 12, ["onClick"]);
        }), 128))
      ], 4)) : vue.createCommentVNode("v-if", true),
      $props.mode === "dot" ? (vue.openBlock(), vue.createElementBlock("view", {
        style: vue.normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
        class: "uni-swiper__dots-box",
        key: "dot"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.info, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            onClick: ($event) => $options.clickItem(index),
            style: vue.normalizeStyle({
              "width": $data.dots.width + "px",
              "height": $data.dots.height + "px",
              "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
              "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
            }),
            key: index,
            class: "uni-swiper__dots-item"
          }, null, 12, ["onClick"]);
        }), 128))
      ], 4)) : vue.createCommentVNode("v-if", true),
      $props.mode === "round" ? (vue.openBlock(), vue.createElementBlock("view", {
        style: vue.normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
        class: "uni-swiper__dots-box",
        key: "round"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.info, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            onClick: ($event) => $options.clickItem(index),
            class: vue.normalizeClass([[index === $props.current && "uni-swiper__dots-long"], "uni-swiper__dots-item"]),
            style: vue.normalizeStyle({
              "width": (index === $props.current ? $data.dots.width * 3 : $data.dots.width) + "px",
              "height": $data.dots.height + "px",
              "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
              "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
            }),
            key: index
          }, null, 14, ["onClick"]);
        }), 128))
      ], 4)) : vue.createCommentVNode("v-if", true),
      $props.mode === "nav" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: "nav",
        style: vue.normalizeStyle({ "background-color": $props.dotsStyles.backgroundColor, "bottom": "0" }),
        class: "uni-swiper__dots-box uni-swiper__dots-nav"
      }, [
        vue.createElementVNode("text", {
          style: vue.normalizeStyle({ "color": $props.dotsStyles.color }),
          class: "uni-swiper__dots-nav-item"
        }, vue.toDisplayString($props.current + 1 + "/" + $props.info.length + " " + $props.info[$props.current][$props.field]), 5)
      ], 4)) : vue.createCommentVNode("v-if", true),
      $props.mode === "indexes" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: "indexes",
        style: vue.normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
        class: "uni-swiper__dots-box"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.info, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            onClick: ($event) => $options.clickItem(index),
            style: vue.normalizeStyle({
              "width": $data.dots.width + "px",
              "height": $data.dots.height + "px",
              "color": index === $props.current ? $data.dots.selectedColor : $data.dots.color,
              "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
              "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
            }),
            key: index,
            class: "uni-swiper__dots-item uni-swiper__dots-indexes"
          }, [
            vue.createElementVNode("text", { class: "uni-swiper__dots-indexes-text" }, vue.toDisplayString(index + 1), 1)
          ], 12, ["onClick"]);
        }), 128))
      ], 4)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_0$a = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$N], ["__scopeId", "data-v-77b53eff"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.vue"]]);
  const UNI_SSR = "__uniSSR";
  const UNI_SSR_DATA = "data";
  const UNI_SSR_GLOBAL_DATA = "globalData";
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k2, p2) {
    switch (shared.toRawType(p2)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p2;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v2) {
      const type2 = shared.toTypeString(v2).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
        try {
          v2 = "---BEGIN:JSON---" + JSON.stringify(v2, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v2 = type2;
        }
      } else {
        if (v2 === null) {
          v2 = "---NULL---";
        } else if (v2 === void 0) {
          v2 = "---UNDEFINED---";
        } else {
          const vType = shared.toRawType(v2).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v2 = "---BEGIN:" + vType + "---" + v2 + "---END:" + vType + "---";
          } else {
            v2 = String(v2);
          }
        }
      }
      return v2;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res2 = normalizeLog(type, filename, args);
    res2 && console[type](res2);
  }
  function getSSRDataType() {
    return vue.getCurrentInstance() ? UNI_SSR_DATA : UNI_SSR_GLOBAL_DATA;
  }
  function assertKey(key, shallow = false) {
    if (!key) {
      throw new Error(`${shallow ? "shallowSsrRef" : "ssrRef"}: You must provide a key.`);
    }
  }
  const ssrClientRef = (value, key, shallow = false) => {
    const valRef = shallow ? vue.shallowRef(value) : vue.ref(value);
    if (typeof window === "undefined") {
      return valRef;
    }
    const __uniSSR = window[UNI_SSR];
    if (!__uniSSR) {
      return valRef;
    }
    const type = getSSRDataType();
    assertKey(key, shallow);
    if (shared.hasOwn(__uniSSR[type], key)) {
      valRef.value = __uniSSR[type][key];
      if (type === UNI_SSR_DATA) {
        delete __uniSSR[type][key];
      }
    }
    return valRef;
  };
  const ssrRef = (value, key) => {
    return ssrClientRef(value, key);
  };
  const shallowSsrRef = (value, key) => {
    return ssrClientRef(value, key, true);
  };
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const isArray$1 = Array.isArray;
  const isObject$3 = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse$1(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse$1(format2, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format2.length) {
      let char = format2[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format2[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format2[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = isArray$1(values) ? "list" : isObject$3(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty$2 = Object.prototype.hasOwnProperty;
  const hasOwn$2 = (val, key) => hasOwnProperty$2.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn$2(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn$2(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n2) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n2.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n2.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n2 = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n2.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n2);
            }
          }
          return i18n2.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n: i18n2,
      f(message, values, delimiters) {
        return i18n2.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n2.add(locale2, message, override);
      },
      watch(fn) {
        return i18n2.watchLocale(fn);
      },
      getLocale() {
        return i18n2.getLocale();
      },
      setLocale(newLocale) {
        return i18n2.setLocale(newLocale);
      }
    };
  }
  function t$5(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function n(e, t2, n2) {
    return e(n2 = { path: t2, exports: {}, require: function(e2, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(t3 == null && n2.path);
    } }, n2.exports), n2.exports;
  }
  var s = n(function(e, t2) {
    var n2;
    e.exports = (n2 = n2 || function(e2, t3) {
      var n3 = Object.create || function() {
        function e3() {
        }
        return function(t4) {
          var n4;
          return e3.prototype = t4, n4 = new e3(), e3.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, o2 = r2.Base = { extend: function(e3) {
        var t4 = n3(this);
        return e3 && t4.mixIn(e3), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e3 = this.extend();
        return e3.init.apply(e3, arguments), e3;
      }, init: function() {
      }, mixIn: function(e3) {
        for (var t4 in e3)
          e3.hasOwnProperty(t4) && (this[t4] = e3[t4]);
        e3.hasOwnProperty("toString") && (this.toString = e3.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, i2 = r2.WordArray = o2.extend({ init: function(e3, n4) {
        e3 = this.words = e3 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e3.length;
      }, toString: function(e3) {
        return (e3 || c2).stringify(this);
      }, concat: function(e3) {
        var t4 = this.words, n4 = e3.words, s3 = this.sigBytes, r3 = e3.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var o3 = 0; o3 < r3; o3++) {
            var i3 = n4[o3 >>> 2] >>> 24 - o3 % 4 * 8 & 255;
            t4[s3 + o3 >>> 2] |= i3 << 24 - (s3 + o3) % 4 * 8;
          }
        else
          for (o3 = 0; o3 < r3; o3 += 4)
            t4[s3 + o3 >>> 2] = n4[o3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e2.ceil(n4 / 4);
      }, clone: function() {
        var e3 = o2.clone.call(this);
        return e3.words = this.words.slice(0), e3;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e2.random() > 0.5 ? 1 : -1);
          };
        }, o3 = 0; o3 < t4; o3 += 4) {
          var a3 = r3(4294967296 * (n4 || e2.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new i2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var o3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((o3 >>> 4).toString(16)), s3.push((15 & o3).toString(16));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e3.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new i2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var o3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(o3));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e3.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new i2.init(n4, t4);
      } }, h2 = a2.Utf8 = { stringify: function(e3) {
        try {
          return decodeURIComponent(escape(u2.stringify(e3)));
        } catch (e4) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e3) {
        return u2.parse(unescape(encodeURIComponent(e3)));
      } }, l2 = r2.BufferedBlockAlgorithm = o2.extend({ reset: function() {
        this._data = new i2.init(), this._nDataBytes = 0;
      }, _append: function(e3) {
        typeof e3 == "string" && (e3 = h2.parse(e3)), this._data.concat(e3), this._nDataBytes += e3.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, o3 = this.blockSize, a3 = r3 / (4 * o3), c3 = (a3 = t4 ? e2.ceil(a3) : e2.max((0 | a3) - this._minBufferSize, 0)) * o3, u3 = e2.min(4 * c3, r3);
        if (c3) {
          for (var h3 = 0; h3 < c3; h3 += o3)
            this._doProcessBlock(s3, h3);
          var l3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new i2.init(l3, u3);
      }, clone: function() {
        var e3 = o2.clone.call(this);
        return e3._data = this._data.clone(), e3;
      }, _minBufferSize: 0 });
      r2.Hasher = l2.extend({ cfg: o2.extend(), init: function(e3) {
        this.cfg = this.cfg.extend(e3), this.reset();
      }, reset: function() {
        l2.reset.call(this), this._doReset();
      }, update: function(e3) {
        return this._append(e3), this._process(), this;
      }, finalize: function(e3) {
        return e3 && this._append(e3), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e3) {
        return function(t4, n4) {
          return new e3.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e3) {
        return function(t4, n4) {
          return new d2.HMAC.init(e3, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), r = (n(function(e, t2) {
    var n2;
    e.exports = (n2 = s, function(e2) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, o2 = s2.Hasher, i2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e2.abs(e2.sin(t4 + 1)) | 0;
      }();
      var c2 = i2.MD5 = o2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e3, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e3[s3];
          e3[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var o3 = this._hash.words, i3 = e3[t4 + 0], c3 = e3[t4 + 1], f2 = e3[t4 + 2], p2 = e3[t4 + 3], g = e3[t4 + 4], m2 = e3[t4 + 5], y2 = e3[t4 + 6], _2 = e3[t4 + 7], w2 = e3[t4 + 8], k2 = e3[t4 + 9], v2 = e3[t4 + 10], S2 = e3[t4 + 11], T2 = e3[t4 + 12], A2 = e3[t4 + 13], P2 = e3[t4 + 14], I2 = e3[t4 + 15], b2 = o3[0], O2 = o3[1], E2 = o3[2], C2 = o3[3];
        b2 = u2(b2, O2, E2, C2, i3, 7, a2[0]), C2 = u2(C2, b2, O2, E2, c3, 12, a2[1]), E2 = u2(E2, C2, b2, O2, f2, 17, a2[2]), O2 = u2(O2, E2, C2, b2, p2, 22, a2[3]), b2 = u2(b2, O2, E2, C2, g, 7, a2[4]), C2 = u2(C2, b2, O2, E2, m2, 12, a2[5]), E2 = u2(E2, C2, b2, O2, y2, 17, a2[6]), O2 = u2(O2, E2, C2, b2, _2, 22, a2[7]), b2 = u2(b2, O2, E2, C2, w2, 7, a2[8]), C2 = u2(C2, b2, O2, E2, k2, 12, a2[9]), E2 = u2(E2, C2, b2, O2, v2, 17, a2[10]), O2 = u2(O2, E2, C2, b2, S2, 22, a2[11]), b2 = u2(b2, O2, E2, C2, T2, 7, a2[12]), C2 = u2(C2, b2, O2, E2, A2, 12, a2[13]), E2 = u2(E2, C2, b2, O2, P2, 17, a2[14]), b2 = h2(b2, O2 = u2(O2, E2, C2, b2, I2, 22, a2[15]), E2, C2, c3, 5, a2[16]), C2 = h2(C2, b2, O2, E2, y2, 9, a2[17]), E2 = h2(E2, C2, b2, O2, S2, 14, a2[18]), O2 = h2(O2, E2, C2, b2, i3, 20, a2[19]), b2 = h2(b2, O2, E2, C2, m2, 5, a2[20]), C2 = h2(C2, b2, O2, E2, v2, 9, a2[21]), E2 = h2(E2, C2, b2, O2, I2, 14, a2[22]), O2 = h2(O2, E2, C2, b2, g, 20, a2[23]), b2 = h2(b2, O2, E2, C2, k2, 5, a2[24]), C2 = h2(C2, b2, O2, E2, P2, 9, a2[25]), E2 = h2(E2, C2, b2, O2, p2, 14, a2[26]), O2 = h2(O2, E2, C2, b2, w2, 20, a2[27]), b2 = h2(b2, O2, E2, C2, A2, 5, a2[28]), C2 = h2(C2, b2, O2, E2, f2, 9, a2[29]), E2 = h2(E2, C2, b2, O2, _2, 14, a2[30]), b2 = l2(b2, O2 = h2(O2, E2, C2, b2, T2, 20, a2[31]), E2, C2, m2, 4, a2[32]), C2 = l2(C2, b2, O2, E2, w2, 11, a2[33]), E2 = l2(E2, C2, b2, O2, S2, 16, a2[34]), O2 = l2(O2, E2, C2, b2, P2, 23, a2[35]), b2 = l2(b2, O2, E2, C2, c3, 4, a2[36]), C2 = l2(C2, b2, O2, E2, g, 11, a2[37]), E2 = l2(E2, C2, b2, O2, _2, 16, a2[38]), O2 = l2(O2, E2, C2, b2, v2, 23, a2[39]), b2 = l2(b2, O2, E2, C2, A2, 4, a2[40]), C2 = l2(C2, b2, O2, E2, i3, 11, a2[41]), E2 = l2(E2, C2, b2, O2, p2, 16, a2[42]), O2 = l2(O2, E2, C2, b2, y2, 23, a2[43]), b2 = l2(b2, O2, E2, C2, k2, 4, a2[44]), C2 = l2(C2, b2, O2, E2, T2, 11, a2[45]), E2 = l2(E2, C2, b2, O2, I2, 16, a2[46]), b2 = d2(b2, O2 = l2(O2, E2, C2, b2, f2, 23, a2[47]), E2, C2, i3, 6, a2[48]), C2 = d2(C2, b2, O2, E2, _2, 10, a2[49]), E2 = d2(E2, C2, b2, O2, P2, 15, a2[50]), O2 = d2(O2, E2, C2, b2, m2, 21, a2[51]), b2 = d2(b2, O2, E2, C2, T2, 6, a2[52]), C2 = d2(C2, b2, O2, E2, p2, 10, a2[53]), E2 = d2(E2, C2, b2, O2, v2, 15, a2[54]), O2 = d2(O2, E2, C2, b2, c3, 21, a2[55]), b2 = d2(b2, O2, E2, C2, w2, 6, a2[56]), C2 = d2(C2, b2, O2, E2, I2, 10, a2[57]), E2 = d2(E2, C2, b2, O2, y2, 15, a2[58]), O2 = d2(O2, E2, C2, b2, A2, 21, a2[59]), b2 = d2(b2, O2, E2, C2, g, 6, a2[60]), C2 = d2(C2, b2, O2, E2, S2, 10, a2[61]), E2 = d2(E2, C2, b2, O2, f2, 15, a2[62]), O2 = d2(O2, E2, C2, b2, k2, 21, a2[63]), o3[0] = o3[0] + b2 | 0, o3[1] = o3[1] + O2 | 0, o3[2] = o3[2] + E2 | 0, o3[3] = o3[3] + C2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var o3 = e2.floor(s3 / 4294967296), i3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var h3 = c3[u3];
          c3[u3] = 16711935 & (h3 << 8 | h3 >>> 24) | 4278255360 & (h3 << 24 | h3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e3 = o2.clone.call(this);
        return e3._hash = this._hash.clone(), e3;
      } });
      function u2(e3, t4, n3, s3, r3, o3, i3) {
        var a3 = e3 + (t4 & n3 | ~t4 & s3) + r3 + i3;
        return (a3 << o3 | a3 >>> 32 - o3) + t4;
      }
      function h2(e3, t4, n3, s3, r3, o3, i3) {
        var a3 = e3 + (t4 & s3 | n3 & ~s3) + r3 + i3;
        return (a3 << o3 | a3 >>> 32 - o3) + t4;
      }
      function l2(e3, t4, n3, s3, r3, o3, i3) {
        var a3 = e3 + (t4 ^ n3 ^ s3) + r3 + i3;
        return (a3 << o3 | a3 >>> 32 - o3) + t4;
      }
      function d2(e3, t4, n3, s3, r3, o3, i3) {
        var a3 = e3 + (n3 ^ (t4 | ~s3)) + r3 + i3;
        return (a3 << o3 | a3 >>> 32 - o3) + t4;
      }
      t3.MD5 = o2._createHelper(c2), t3.HmacMD5 = o2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), n(function(e, t2) {
    var n2, r2, o2;
    e.exports = (r2 = (n2 = s).lib.Base, o2 = n2.enc.Utf8, void (n2.algo.HMAC = r2.extend({ init: function(e2, t3) {
      e2 = this._hasher = new e2.init(), typeof t3 == "string" && (t3 = o2.parse(t3));
      var n3 = e2.blockSize, s2 = 4 * n3;
      t3.sigBytes > s2 && (t3 = e2.finalize(t3)), t3.clamp();
      for (var r3 = this._oKey = t3.clone(), i2 = this._iKey = t3.clone(), a2 = r3.words, c2 = i2.words, u2 = 0; u2 < n3; u2++)
        a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
      r3.sigBytes = i2.sigBytes = s2, this.reset();
    }, reset: function() {
      var e2 = this._hasher;
      e2.reset(), e2.update(this._iKey);
    }, update: function(e2) {
      return this._hasher.update(e2), this;
    }, finalize: function(e2) {
      var t3 = this._hasher, n3 = t3.finalize(e2);
      return t3.reset(), t3.finalize(this._oKey.clone().concat(n3));
    } })));
  }), n(function(e, t2) {
    e.exports = s.HmacMD5;
  }));
  const o = "FUNCTION", i = "OBJECT", a = "CLIENT_DB";
  function c(e) {
    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
  }
  function u(e) {
    return c(e) === "object";
  }
  function h(e) {
    return e && typeof e == "string" ? JSON.parse(e) : e;
  }
  const l = true, d = "app", f = h('{\n    "address": [\n        "127.0.0.1",\n        "192.168.1.199"\n    ],\n    "debugPort": 51401,\n    "initialLaunchType": "remote",\n    "servePort": 51402,\n    "skipFiles": [\n        "<node_internals>/**/*.js",\n        "/Applications/HBuilderX.app/Contents/HBuilderX/plugins/unicloud/**/*.js"\n    ]\n}\n'), p = h('[{"provider":"aliyun","spaceName":"uni-dfz-dev","spaceId":"544a5364-586c-4c57-b5ed-feb12a030343","clientSecret":"omGMZnMek+a+XQ8YM2rKEA==","endpoint":"https://api.bspapp.com"}]');
  let m = "";
  try {
    m = "__UNI__C0C2D81";
  } catch (e) {
  }
  let y = {};
  function _(e, t2 = {}) {
    var n2, s2;
    return n2 = y, s2 = e, Object.prototype.hasOwnProperty.call(n2, s2) || (y[e] = t2), y[e];
  }
  const w = ["invoke", "success", "fail", "complete"], k = _("_globalUniCloudInterceptor");
  function v(e, t2) {
    k[e] || (k[e] = {}), u(t2) && Object.keys(t2).forEach((n2) => {
      w.indexOf(n2) > -1 && function(e2, t3, n3) {
        let s2 = k[e2][t3];
        s2 || (s2 = k[e2][t3] = []), s2.indexOf(n3) === -1 && typeof n3 == "function" && s2.push(n3);
      }(e, n2, t2[n2]);
    });
  }
  function S(e, t2) {
    k[e] || (k[e] = {}), u(t2) ? Object.keys(t2).forEach((n2) => {
      w.indexOf(n2) > -1 && function(e2, t3, n3) {
        const s2 = k[e2][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e, n2, t2[n2]);
    }) : delete k[e];
  }
  function T(e, t2) {
    return e && e.length !== 0 ? e.reduce((e2, n2) => e2.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function A(e, t2) {
    return k[e] && k[e][t2] || [];
  }
  function P(e, t2) {
    return t2 ? function(n2) {
      let s2, r2 = false;
      if (t2 === "callFunction") {
        const e2 = n2 && n2.type || o;
        r2 = e2 !== o;
      }
      s2 = this.isReady ? Promise.resolve() : this.initUniCloud, n2 = n2 || {};
      const i2 = s2.then(() => r2 ? Promise.resolve() : T(A(t2, "invoke"), n2)).then(() => e.call(this, n2)).then((e2) => r2 ? Promise.resolve(e2) : T(A(t2, "success"), e2).then(() => T(A(t2, "complete"), e2)).then(() => Promise.resolve(e2)), (e2) => r2 ? Promise.reject(e2) : T(A(t2, "fail"), e2).then(() => T(A(t2, "complete"), e2)).then(() => Promise.reject(e2)));
      if (!(n2.success || n2.fail || n2.complete))
        return i2;
      i2.then((e2) => {
        n2.success && n2.success(e2), n2.complete && n2.complete(e2);
      }, (e2) => {
        n2.fail && n2.fail(e2), n2.complete && n2.complete(e2);
      });
    } : function(t3) {
      if (!((t3 = t3 || {}).success || t3.fail || t3.complete))
        return e.call(this, t3);
      e.call(this, t3).then((e2) => {
        t3.success && t3.success(e2), t3.complete && t3.complete(e2);
      }, (e2) => {
        t3.fail && t3.fail(e2), t3.complete && t3.complete(e2);
      });
    };
  }
  class I extends Error {
    constructor(e) {
      super(e.message), this.errMsg = e.message || "", this.errCode = this.code = e.code, this.requestId = e.requestId, Object.defineProperties(this, { message: { get() {
        return this.errMsg;
      }, set(e2) {
        this.errMsg = e2;
      } } });
    }
  }
  let b;
  function O() {
    const e = uni.getLocale && uni.getLocale() || "en";
    if (b)
      return __spreadProps(__spreadValues({}, b), { LOCALE: e });
    const { deviceId: t2, platform: n2 } = uni.getSystemInfoSync();
    return b = { PLATFORM: d, OS: n2, APPID: m, DEVICEID: t2, CLIENT_SDK_VERSION: "1.0.25" }, __spreadProps(__spreadValues({}, b), { LOCALE: e });
  }
  var E = { sign: function(e, t2) {
    let n2 = "";
    return Object.keys(e).sort().forEach(function(t3) {
      e[t3] && (n2 = n2 + "&" + t3 + "=" + e[t3]);
    }), n2 = n2.slice(1), r(n2, t2).toString();
  }, wrappedRequest: function(e, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e, { complete(e2) {
        e2 || (e2 = {});
        const t3 = e2.data && e2.data.header && e2.data.header["x-serverless-request-id"] || e2.header && e2.header["request-id"];
        if (!e2.statusCode || e2.statusCode >= 400)
          return s2(new I({ code: "SYS_ERR", message: e2.errMsg || "request:fail", requestId: t3 }));
        const r2 = e2.data;
        if (r2.error)
          return s2(new I({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  } };
  var C = { request: (e) => uni.request(e), uploadFile: (e) => uni.uploadFile(e), setStorageSync: (e, t2) => uni.setStorageSync(e, t2), getStorageSync: (e) => uni.getStorageSync(e), removeStorageSync: (e) => uni.removeStorageSync(e), clearStorageSync: () => uni.clearStorageSync() }, U = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };
  const { t: x } = initVueI18n({ "zh-Hans": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, "zh-Hant": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, en: U, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: U }, "zh-Hans");
  var D = class {
    constructor(e) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e, t2))
          throw new Error(x("uniCloud.init.paramRequired", { param: t2 }));
      }), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = C, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e) {
      this.accessToken = e;
    }
    requestWrapped(e) {
      return E.wrappedRequest(e, this.adapter.request);
    }
    requestAuth(e) {
      return this.requestWrapped(e);
    }
    request(e, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e) : this.requestWrapped(e).catch((t3) => new Promise((e2, n2) => {
        !t3 || t3.code !== "GATEWAY_INVALID_TOKEN" && t3.code !== "InvalidParameter.InvalidToken" ? n2(t3) : e2();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e) {
      const t2 = Object.assign({}, e);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = E.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e, t2) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return t2 !== "auth" && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = E.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      if (this._getAccessTokenPromiseStatus === "pending")
        return this._getAccessTokenPromise;
      this._getAccessTokenPromiseStatus = "pending";
      return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e) => new Promise((t2, n2) => {
        e.result && e.result.accessToken ? (this.setAccessToken(e.result.accessToken), this._getAccessTokenPromiseStatus = "fulfilled", t2(this.accessToken)) : (this._getAccessTokenPromiseStatus = "rejected", n2(new I({ code: "AUTH_FAILED", message: "\u83B7\u53D6accessToken\u5931\u8D25" })));
      }), (e) => (this._getAccessTokenPromiseStatus = "rejected", Promise.reject(e))), this._getAccessTokenPromise;
    }
    authorize() {
      this.getAccessToken();
    }
    callFunction(e) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: o2 }) {
      return new Promise((i2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e2) {
          e2 && e2.statusCode < 400 ? i2(e2) : a2(new I({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new I({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        typeof o2 == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((e2) => {
          o2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2, config: r2 }) {
      if (c(t2) !== "string")
        throw new I({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
      if (!(t2 = t2.trim()))
        throw new I({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      if (/:\/\//.test(t2))
        throw new I({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
      const o2 = r2 && r2.envType || this.config.envType;
      let i2, a2;
      return this.getOSSUploadOptionsFromPath({ env: o2, filename: t2 }).then((t3) => {
        const r3 = t3.result;
        i2 = r3.id, a2 = "https://" + r3.cdnDomain + "/" + r3.ossPath;
        const o3 = { url: "https://" + r3.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: r3.accessKeyId, Signature: r3.signature, host: r3.host, id: i2, key: r3.ossPath, policy: r3.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, o3, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ id: i2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e, fileID: a2 }) : s3(new I({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };
      return this.request(this.setupRequest(t2));
    }
    getTempFileURL({ fileList: e } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e) && e.length !== 0 || n2(new I({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" })), t2({ fileList: e.map((e2) => ({ fileID: e2, tempFileURL: e2 })) });
      });
    }
  };
  var q = { init(e) {
    const t2 = new D(e), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const R = typeof location != "undefined" && location.protocol === "http:" ? "http:" : "https:";
  var L;
  !function(e) {
    e.local = "local", e.none = "none", e.session = "session";
  }(L || (L = {}));
  var F = function() {
  };
  const N = () => {
    let e;
    if (!Promise) {
      e = () => {
      }, e.promise = {};
      const t3 = () => {
        throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');
      };
      return Object.defineProperty(e.promise, "then", { get: t3 }), Object.defineProperty(e.promise, "catch", { get: t3 }), e;
    }
    const t2 = new Promise((t3, n2) => {
      e = (e2, s2) => e2 ? n2(e2) : t3(s2);
    });
    return e.promise = t2, e;
  };
  function $(e) {
    return e === void 0;
  }
  function j(e) {
    return Object.prototype.toString.call(e) === "[object Null]";
  }
  var M;
  function B(e) {
    const t2 = (n2 = e, Object.prototype.toString.call(n2) === "[object Array]" ? e : [e]);
    var n2;
    for (const e2 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e2;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e) {
    e.WEB = "web", e.WX_MP = "wx_mp";
  }(M || (M = {}));
  const K = { adapter: null, runtime: void 0 }, H = ["anonymousUuidKey"];
  class W extends F {
    constructor() {
      super(), K.adapter.root.tcbObject || (K.adapter.root.tcbObject = {});
    }
    setItem(e, t2) {
      K.adapter.root.tcbObject[e] = t2;
    }
    getItem(e) {
      return K.adapter.root.tcbObject[e];
    }
    removeItem(e) {
      delete K.adapter.root.tcbObject[e];
    }
    clear() {
      delete K.adapter.root.tcbObject;
    }
  }
  function z(e, t2) {
    switch (e) {
      case "local":
        return t2.localStorage || new W();
      case "none":
        return new W();
      default:
        return t2.sessionStorage || new W();
    }
  }
  class J {
    constructor(e) {
      if (!this._storage) {
        this._persistence = K.adapter.primaryStorage || e.persistence, this._storage = z(this._persistence, K.adapter);
        const t2 = `access_token_${e.env}`, n2 = `access_token_expire_${e.env}`, s2 = `refresh_token_${e.env}`, r2 = `anonymous_uuid_${e.env}`, o2 = `login_type_${e.env}`, i2 = `user_info_${e.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: o2, userInfoKey: i2 };
      }
    }
    updatePersistence(e) {
      if (e === this._persistence)
        return;
      const t2 = this._persistence === "local";
      this._persistence = e;
      const n2 = z(e, K.adapter);
      for (const e2 in this.keys) {
        const s2 = this.keys[e2];
        if (t2 && H.includes(e2))
          continue;
        const r2 = this._storage.getItem(s2);
        $(r2) || j(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e, r2);
      } catch (e2) {
        throw e2;
      }
    }
    getStore(e, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e2) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e) {
      this._storage.removeItem(e);
    }
  }
  const V = {}, Y = {};
  function X(e) {
    return V[e];
  }
  class G {
    constructor(e, t2) {
      this.data = t2 || null, this.name = e;
    }
  }
  class Q extends G {
    constructor(e, t2) {
      super("error", { error: e, data: t2 }), this.error = e;
    }
  }
  const Z = new class {
    constructor() {
      this._listeners = {};
    }
    on(e, t2) {
      return function(e2, t3, n2) {
        n2[e2] = n2[e2] || [], n2[e2].push(t3);
      }(e, t2, this._listeners), this;
    }
    off(e, t2) {
      return function(e2, t3, n2) {
        if (n2 && n2[e2]) {
          const s2 = n2[e2].indexOf(t3);
          s2 !== -1 && n2[e2].splice(s2, 1);
        }
      }(e, t2, this._listeners), this;
    }
    fire(e, t2) {
      if (e instanceof Q)
        return console.error(e.error), this;
      const n2 = typeof e == "string" ? new G(e, t2 || {}) : e;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e2 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e2)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }();
  function ee(e, t2) {
    Z.on(e, t2);
  }
  function te(e, t2 = {}) {
    Z.fire(e, t2);
  }
  function ne(e, t2) {
    Z.off(e, t2);
  }
  const se = "loginStateChanged", re = "loginStateExpire", oe = "loginTypeChanged", ie = "anonymousConverted", ae = "refreshAccessToken";
  var ce;
  !function(e) {
    e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
  }(ce || (ce = {}));
  const ue = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], he = { "X-SDK-Version": "1.3.5" };
  function le(e, t2, n2) {
    const s2 = e[t2];
    e[t2] = function(t3) {
      const r2 = {}, o2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: i3 } = n3.call(e, t3);
        Object.assign(r2, s3), Object.assign(o2, i3);
      });
      const i2 = t3.data;
      return i2 && (() => {
        var e2;
        if (e2 = i2, Object.prototype.toString.call(e2) !== "[object FormData]")
          t3.data = __spreadValues(__spreadValues({}, i2), r2);
        else
          for (const e3 in r2)
            i2.append(e3, r2[e3]);
      })(), t3.headers = __spreadValues(__spreadValues({}, t3.headers || {}), o2), s2.call(e, t3);
    };
  }
  function de() {
    const e = Math.random().toString(16).slice(2);
    return { data: { seqId: e }, headers: __spreadProps(__spreadValues({}, he), { "x-seqid": e }) };
  }
  class fe {
    constructor(e = {}) {
      var t2;
      this.config = e, this._reqClass = new K.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `\u8BF7\u6C42\u5728${this.config.timeout / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD`, restrictedMethods: ["post"] }), this._cache = X(this.config.env), this._localCache = (t2 = this.config.env, Y[t2]), le(this._reqClass, "post", [de]), le(this._reqClass, "upload", [de]), le(this._reqClass, "download", [de]);
    }
    async post(e) {
      return await this._reqClass.post(e);
    }
    async upload(e) {
      return await this._reqClass.upload(e);
    }
    async download(e) {
      return await this._reqClass.download(e);
    }
    async refreshAccessToken() {
      let e, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e = await this._refreshAccessTokenPromise;
      } catch (e2) {
        t2 = e2;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e), this._cache.removeStore(t2);
      let o2 = this._cache.getStore(n2);
      if (!o2)
        throw new Error("\u672A\u767B\u5F55CloudBase");
      const i2 = { refresh_token: o2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", i2);
      if (a2.data.code) {
        const { code: e2 } = a2.data;
        if (e2 === "SIGN_PARAM_INVALID" || e2 === "REFRESH_TOKEN_EXPIRED" || e2 === "INVALID_REFRESH_TOKEN") {
          if (this._cache.getStore(s2) === ce.ANONYMOUS && e2 === "INVALID_REFRESH_TOKEN") {
            const e3 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e3, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          te(re), this._cache.removeStore(n2);
        }
        throw new Error(`\u5237\u65B0access token\u5931\u8D25\uFF1A${a2.data.code}`);
      }
      if (a2.data.access_token)
        return te(ae), this._cache.setStore(e, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new Error("refresh token\u4E0D\u5B58\u5728\uFF0C\u767B\u5F55\u72B6\u6001\u5F02\u5E38");
      let s2 = this._cache.getStore(e), r2 = this._cache.getStore(t2), o2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (o2 = false), (!s2 || !r2 || r2 < Date.now()) && o2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
    }
    async request(e, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let r2 = "application/x-www-form-urlencoded";
      const o2 = __spreadValues({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t2);
      if (ue.indexOf(e) === -1) {
        const { refreshTokenKey: e2 } = this._cache.keys;
        this._cache.getStore(e2) && (o2.access_token = (await this.getAccessToken()).accessToken);
      }
      let i2;
      if (e === "storage.uploadFile") {
        i2 = new FormData();
        for (let e2 in i2)
          i2.hasOwnProperty(e2) && i2[e2] !== void 0 && i2.append(e2, o2[e2]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", i2 = {};
        for (let e2 in o2)
          o2[e2] !== void 0 && (i2[e2] = o2[e2]);
      }
      let a2 = { headers: { "content-type": r2 } };
      n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: h2, search: l2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), h2 && (d2 = __spreadValues(__spreadValues({}, h2), d2));
      let f2 = function(e2, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let r3 = "";
        for (let e3 in n3)
          r3 === "" ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e3}=${encodeURIComponent(n3[e3])}`;
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e2}${t3}`;
      }(R, "//tcb-api.tencentcloudapi.com/web", d2);
      l2 && (f2 += l2);
      const p2 = await this.post(__spreadValues({ url: f2, data: i2 }, a2)), g = p2.header && p2.header["x-tcb-trace"];
      if (g && this._localCache.setStore(s2, g), Number(p2.status) !== 200 && Number(p2.statusCode) !== 200 || !p2.data)
        throw new Error("network request error");
      return p2;
    }
    async send(e, t2 = {}) {
      const n2 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
      if (n2.data.code === "ACCESS_TOKEN_EXPIRED" && ue.indexOf(e) === -1) {
        await this.refreshAccessToken();
        const n3 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
        if (n3.data.code)
          throw new Error(`[${n3.data.code}] ${n3.data.message}`);
        return n3.data;
      }
      if (n2.data.code)
        throw new Error(`[${n2.data.code}] ${n2.data.message}`);
      return n2.data;
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
  }
  const pe = {};
  function ge(e) {
    return pe[e];
  }
  class me {
    constructor(e) {
      this.config = e, this._cache = X(e.env), this._request = ge(e.env);
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
    setAccessToken(e, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e);
    }
  }
  class ye {
    constructor(e) {
      if (!e)
        throw new Error("envId is not defined");
      this._envId = e, this._cache = X(this._envId), this._request = ge(this._envId), this.setUserInfo();
    }
    linkWithTicket(e) {
      if (typeof e != "string")
        throw new Error("ticket must be string");
      return this._request.send("auth.linkWithTicket", { ticket: e });
    }
    linkWithRedirect(e) {
      e.signInWithRedirect();
    }
    updatePassword(e, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e });
    }
    updateEmail(e) {
      return this._request.send("auth.updateEmail", { newEmail: e });
    }
    updateUsername(e) {
      if (typeof e != "string")
        throw new Error("username must be a string");
      return this._request.send("auth.updateUsername", { username: e });
    }
    async getLinkedUidList() {
      const { data: e } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e;
      return n2.forEach((e2) => {
        e2.wxOpenId && e2.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", { uid: e });
    }
    unlink(e) {
      return this._request.send("auth.unlink", { platform: e });
    }
    async update(e) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: o2, city: i2 } = e, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: o2, city: i2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setUserInfo() {
      const { userInfoKey: e } = this._cache.keys, t2 = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e2) => {
        this[e2] = t2[e2];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e), this.setUserInfo();
    }
  }
  class _e {
    constructor(e) {
      if (!e)
        throw new Error("envId is not defined");
      this._cache = X(e);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), o2 = this._cache.getStore(n2), i2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: o2, accessTokenExpire: i2 }, this.user = new ye(e);
    }
    get isAnonymousAuth() {
      return this.loginType === ce.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === ce.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === ce.WECHAT || this.loginType === ce.WECHAT_OPEN || this.loginType === ce.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class we extends me {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e) || void 0, s2 = this._cache.getStore(t2) || void 0, r2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (r2.uuid && r2.refresh_token) {
        this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), te(se), te(oe, { env: this.config.env, loginType: ce.ANONYMOUS, persistence: "local" });
        const e2 = new _e(this.config.env);
        return await e2.user.refresh(), e2;
      }
      throw new Error("\u533F\u540D\u767B\u5F55\u5931\u8D25");
    }
    async linkAndRetrieveDataWithTicket(e) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), o2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e });
      if (o2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(o2.refresh_token), await this._request.refreshAccessToken(), te(ie, { env: this.config.env }), te(oe, { loginType: ce.CUSTOM, persistence: "local" }), { credential: { refreshToken: o2.refresh_token } };
      throw new Error("\u533F\u540D\u8F6C\u5316\u5931\u8D25");
    }
    _setAnonymousUUID(e) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e), this._cache.setStore(n2, ce.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class ke extends me {
    async signIn(e) {
      if (typeof e != "string")
        throw new Error("ticket must be a string");
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), te(se), te(oe, { env: this.config.env, loginType: ce.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new _e(this.config.env);
      throw new Error("\u81EA\u5B9A\u4E49\u767B\u5F55\u5931\u8D25");
    }
  }
  class ve extends me {
    async signIn(e, t2) {
      if (typeof e != "string")
        throw new Error("email must be a string");
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: o2, access_token_expire: i2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), te(se), te(oe, { env: this.config.env, loginType: ce.EMAIL, persistence: this.config.persistence }), new _e(this.config.env);
      throw s2.code ? new Error(`\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: [${s2.code}] ${s2.message}`) : new Error("\u90AE\u7BB1\u767B\u5F55\u5931\u8D25");
    }
    async activate(e) {
      return this._request.send("auth.activateEndUserMail", { token: e });
    }
    async resetPasswordWithToken(e, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t2 });
    }
  }
  class Se extends me {
    async signIn(e, t2) {
      if (typeof e != "string")
        throw new Error("username must be a string");
      typeof t2 != "string" && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: ce.USERNAME, username: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: o2, access_token: i2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), te(se), te(oe, { env: this.config.env, loginType: ce.USERNAME, persistence: this.config.persistence }), new _e(this.config.env);
      throw s2.code ? new Error(`\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: [${s2.code}] ${s2.message}`) : new Error("\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25");
    }
  }
  class Te {
    constructor(e) {
      this.config = e, this._cache = X(e.env), this._request = ge(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), ee(oe, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e = this.hasLoginState();
      return e && e.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new we(this.config);
    }
    customAuthProvider() {
      return new ke(this.config);
    }
    emailAuthProvider() {
      return new ve(this.config);
    }
    usernameAuthProvider() {
      return new Se(this.config);
    }
    async signInAnonymously() {
      return new we(this.config).signIn();
    }
    async signInWithEmailAndPassword(e, t2) {
      return new ve(this.config).signIn(e, t2);
    }
    signInWithUsernameAndPassword(e, t2) {
      return new Se(this.config).signIn(e, t2);
    }
    async linkAndRetrieveDataWithTicket(e) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new we(this.config)), ee(ie, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
    }
    async signOut() {
      if (this.loginType === ce.ANONYMOUS)
        throw new Error("\u533F\u540D\u7528\u6237\u4E0D\u652F\u6301\u767B\u51FA\u64CD\u4F5C");
      const { refreshTokenKey: e, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e), this._cache.removeStore(t2), this._cache.removeStore(n2), te(se), te(oe, { env: this.config.env, loginType: ce.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t2 });
    }
    async sendPasswordResetEmail(e) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e });
    }
    onLoginStateChanged(e) {
      ee(se, () => {
        const t3 = this.hasLoginState();
        e.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e.call(this, t2);
    }
    onLoginStateExpired(e) {
      ee(re, e.bind(this));
    }
    onAccessTokenRefreshed(e) {
      ee(ae, e.bind(this));
    }
    onAnonymousConverted(e) {
      ee(ie, e.bind(this));
    }
    onLoginTypeChanged(e) {
      ee(oe, () => {
        const t2 = this.hasLoginState();
        e.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e } = this._cache.keys;
      return this._cache.getStore(e) ? new _e(this.config.env) : null;
    }
    async isUsernameRegistered(e) {
      if (typeof e != "string")
        throw new Error("username must be a string");
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e) {
      return new ke(this.config).signIn(e);
    }
    shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e) => e.code ? e : __spreadProps(__spreadValues({}, e.data), { requestId: e.seqId }));
    }
    getAuthHeader() {
      const { refreshTokenKey: e, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e) {
      const { env: t2 } = e.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e) {
      const { loginType: t2, persistence: n2, env: s2 } = e.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const Ae = function(e, t2) {
    t2 = t2 || N();
    const n2 = ge(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: o2, fileType: i2 = "image" } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: h2, cosFileId: l2 }, requestId: d2 } = e2, f2 = { key: s2, signature: c2, "x-cos-meta-fileid": l2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: f2, file: r2, name: s2, fileType: i2, onUploadProgress: o2 }).then((e3) => {
        e3.statusCode === 201 ? t2(null, { fileID: h2, requestId: d2 }) : t2(new Error(`STORAGE_REQUEST_FAIL: ${e3.data}`));
      }).catch((e3) => {
        t2(e3);
      });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, Pe = function(e, t2) {
    t2 = t2 || N();
    const n2 = ge(this.config.env), { cloudPath: s2 } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      t2(null, e2);
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, Ie = function({ fileList: e }, t2) {
    if (t2 = t2 || N(), !e || !Array.isArray(e))
      return { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" };
    for (let t3 of e)
      if (!t3 || typeof t3 != "string")
        return { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" };
    const n2 = { fileid_list: e };
    return ge(this.config.env).send("storage.batchDeleteFile", n2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.delete_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, be = function({ fileList: e }, t2) {
    t2 = t2 || N(), e && Array.isArray(e) || t2(null, { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" });
    let n2 = [];
    for (let s3 of e)
      typeof s3 == "object" ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5305\u542BfileID\u548CmaxAge\u7684\u5BF9\u8C61" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : typeof s3 == "string" ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5B57\u7B26\u4E32" });
    const s2 = { file_list: n2 };
    return ge(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.download_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, Oe = async function({ fileID: e }, t2) {
    const n2 = (await be.call(this, { fileList: [{ fileID: e, maxAge: 600 }] })).fileList[0];
    if (n2.code !== "SUCCESS")
      return t2 ? t2(n2) : new Promise((e2) => {
        e2(n2);
      });
    const s2 = ge(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, Ee = function({ name: e, data: t2, query: n2, parse: s2, search: r2 }, o2) {
    const i2 = o2 || N();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e2) {
      return Promise.reject(e2);
    }
    if (!e)
      return Promise.reject(new Error("\u51FD\u6570\u540D\u4E0D\u80FD\u4E3A\u7A7A"));
    const c2 = { inQuery: n2, parse: s2, search: r2, function_name: e, request_data: a2 };
    return ge(this.config.env).send("functions.invokeFunction", c2).then((e2) => {
      if (e2.code)
        i2(null, e2);
      else {
        let t3 = e2.data.response_data;
        if (s2)
          i2(null, { result: t3, requestId: e2.requestId });
        else
          try {
            t3 = JSON.parse(e2.data.response_data), i2(null, { result: t3, requestId: e2.requestId });
          } catch (e3) {
            i2(new Error("response data must be json"));
          }
      }
      return i2.promise;
    }).catch((e2) => {
      i2(e2);
    }), i2.promise;
  }, Ce = { timeout: 15e3, persistence: "session" }, Ue = {};
  class xe {
    constructor(e) {
      this.config = e || this.config, this.authObj = void 0;
    }
    init(e) {
      switch (K.adapter || (this.requestClient = new K.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: `\u8BF7\u6C42\u5728${(e.timeout || 5e3) / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD` })), this.config = __spreadValues(__spreadValues({}, Ce), e), true) {
        case this.config.timeout > 6e5:
          console.warn("timeout\u5927\u4E8E\u53EF\u914D\u7F6E\u4E0A\u9650[10\u5206\u949F]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0A\u9650\u6570\u503C"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout\u5C0F\u4E8E\u53EF\u914D\u7F6E\u4E0B\u9650[100ms]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0B\u9650\u6570\u503C"), this.config.timeout = 100;
      }
      return new xe(this.config);
    }
    auth({ persistence: e } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e || K.adapter.primaryStorage || Ce.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e2) {
        const { env: t3 } = e2;
        V[t3] = new J(e2), Y[t3] = new J(__spreadProps(__spreadValues({}, e2), { persistence: "local" }));
      }(this.config), n2 = this.config, pe[n2.env] = new fe(n2), this.authObj = new Te(this.config), this.authObj;
    }
    on(e, t2) {
      return ee.apply(this, [e, t2]);
    }
    off(e, t2) {
      return ne.apply(this, [e, t2]);
    }
    callFunction(e, t2) {
      return Ee.apply(this, [e, t2]);
    }
    deleteFile(e, t2) {
      return Ie.apply(this, [e, t2]);
    }
    getTempFileURL(e, t2) {
      return be.apply(this, [e, t2]);
    }
    downloadFile(e, t2) {
      return Oe.apply(this, [e, t2]);
    }
    uploadFile(e, t2) {
      return Ae.apply(this, [e, t2]);
    }
    getUploadMetadata(e, t2) {
      return Pe.apply(this, [e, t2]);
    }
    registerExtension(e) {
      Ue[e.name] = e;
    }
    async invokeExtension(e, t2) {
      const n2 = Ue[e];
      if (!n2)
        throw Error(`\u6269\u5C55${e} \u5FC5\u987B\u5148\u6CE8\u518C`);
      return await n2.invoke(t2, this);
    }
    useAdapters(e) {
      const { adapter: t2, runtime: n2 } = B(e) || {};
      t2 && (K.adapter = t2), n2 && (K.runtime = n2);
    }
  }
  var De = new xe();
  function qe(e, t2, n2) {
    n2 === void 0 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var o2 in n2)
      r2 === "" ? !s2 && (t2 += "?") : r2 += "&", r2 += o2 + "=" + encodeURIComponent(n2[o2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e + t2;
  }
  class Re {
    post(e) {
      const { url: t2, data: n2, headers: s2 } = e;
      return new Promise((e2, r2) => {
        C.request({ url: qe("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e2(t3);
        }, fail(e3) {
          r2(e3);
        } });
      });
    }
    upload(e) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: o2, headers: i2, fileType: a2 } = e, c2 = C.uploadFile({ url: qe("https:", s2), name: "file", formData: Object.assign({}, o2), filePath: r2, fileType: a2, header: i2, success(e2) {
          const n3 = { statusCode: e2.statusCode, data: e2.data || {} };
          e2.statusCode === 200 && o2.success_action_status && (n3.statusCode = parseInt(o2.success_action_status, 10)), t2(n3);
        }, fail(e2) {
          n2(new Error(e2.errMsg || "uploadFile:fail"));
        } });
        typeof e.onUploadProgress == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((t3) => {
          e.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const Le = { setItem(e, t2) {
    C.setStorageSync(e, t2);
  }, getItem: (e) => C.getStorageSync(e), removeItem(e) {
    C.removeStorageSync(e);
  }, clear() {
    C.clearStorageSync();
  } };
  var Fe = { genAdapter: function() {
    return { root: {}, reqClass: Re, localStorage: Le, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  De.useAdapters(Fe);
  const Ne = De, $e = Ne.init;
  Ne.init = function(e) {
    e.env = e.spaceId;
    const t2 = $e.call(this, e);
    t2.config.provider = "tencent", t2.config.spaceId = e.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e2) {
      const t3 = n2.call(this, e2);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e3) => {
        t3[e3] = P(t3[e3]).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var je = Ne;
  function Me(e) {
    return e && Me(e.__v_raw) || e;
  }
  function Be() {
    return { token: C.getStorageSync("uni_id_token") || C.getStorageSync("uniIdToken"), tokenExpired: C.getStorageSync("uni_id_token_expired") };
  }
  var He = class extends D {
    getAccessToken() {
      return new Promise((e, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e(n2);
      });
    }
    setupRequest(e, t2) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      t2 !== "auth" && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = E.sign(n2, this.config.clientSecret);
      const r2 = O();
      s2["x-client-info"] = JSON.stringify(r2);
      const { token: o2 } = Be();
      return s2["x-client-token"] = o2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: o2 }) {
      return new Promise((i2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, success(e2) {
          e2 && e2.statusCode < 400 ? i2(e2) : a2(new I({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new I({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        typeof o2 == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((e2) => {
          o2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new I({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      let r2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: o2, formData: i2, name: a2 } = t3.result;
        r2 = t3.result.fileUrl;
        const c2 = { url: o2, formData: i2, name: a2, filePath: e, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e, fileID: r2 }) : s3(new I({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t2));
    }
    getTempFileURL({ fileList: e } = {}) {
      const t2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t2));
    }
  };
  var We = { init(e) {
    const t2 = new He(e), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  function ze({ data: e }) {
    let t2;
    t2 = O();
    const n2 = JSON.parse(JSON.stringify(e || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e2 } = Be();
      e2 && (n2.uniIdToken = e2);
    }
    return n2;
  }
  function Je({ name: e, data: t2 }) {
    const { localAddress: n2, localPort: s2 } = this, r2 = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider], o2 = this.config.spaceId, i2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e}`;
    return new Promise((t3, n3) => {
      C.request({ method: "POST", url: i2, data: { name: e, platform: d, provider: r2, spaceId: o2 }, timeout: 3e3, success(e2) {
        t3(e2);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570\u3002" } });
      } });
    }).then(({ data: e2 } = {}) => {
      const { code: t3, message: n3 } = e2 || {};
      return { code: t3 === 0 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (n3 !== 0) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e}\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e}\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "\u9700\u8981\u8BBF\u95EE\u52A0\u5BC6\u7684uni-clientDB-action\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u73AF\u5883");
            break;
          case "NETWORK_ERROR": {
            const e2 = "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B";
            throw console.error(e2), new Error(e2);
          }
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e2 = `\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A${s3}\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5`;
            throw console.error(e2), new Error(e2);
          }
        }
        return this._originCallFunction({ name: e, data: t2 });
      }
      return new Promise((e2, n4) => {
        const s4 = ze.call(this, { data: t2 });
        C.request({ method: "POST", url: a2, data: { provider: r2, platform: d, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new I({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e2({ result: s5 }), fail(e3) {
          n4(new I({ code: e3.code || e3.errCode || "SYS_ERR", message: e3.message || e3.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const Ve = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "\uFF0C\u4E91\u51FD\u6570[{functionName}]\u5728\u4E91\u7AEF\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\u6B64\u4E91\u51FD\u6570\u540D\u79F0\u662F\u5426\u6B63\u786E\u4EE5\u53CA\u8BE5\u4E91\u51FD\u6570\u662F\u5426\u5DF2\u4E0A\u4F20\u5230\u670D\u52A1\u7A7A\u95F4", mode: "append" }];
  var Ye = /[\\^$.*+?()[\]{}|]/g, Xe = RegExp(Ye.source);
  function Ge(e, t2, n2) {
    return e.replace(new RegExp((s2 = t2) && Xe.test(s2) ? s2.replace(Ye, "\\$&") : s2, "g"), n2);
    var s2;
  }
  function Qe({ functionName: e, result: t2, logPvd: n2 }) {
    if (this.config.useDebugFunction && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Ze(e) {
    const t2 = e.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = ze.call(e, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider];
      return t2.call(this, n3).then((e2) => (Qe.call(this, { functionName: s2, result: e2, logPvd: r2 }), Promise.resolve(e2)), (e2) => (Qe.call(this, { functionName: s2, result: e2, logPvd: r2 }), e2 && e2.message && (e2.message = function({ message: e3 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: o2, mode: i2 } = n4[s3], a2 = e3.match(r3);
          if (!a2)
            continue;
          let c2 = o2;
          for (let e4 = 1; e4 < a2.length; e4++)
            c2 = Ge(c2, `{$${e4}}`, a2[e4]);
          for (const e4 in t3)
            c2 = Ge(c2, `{${e4}}`, t3[e4]);
          return i2 === "replace" ? c2 : e3 + c2;
        }
        return e3;
      }({ message: `[${n3.name}]: ${e2.message}`, formatter: Ve, extraInfo: { functionName: s2 } })), Promise.reject(e2)));
    };
    e.callFunction = function(t3) {
      let s2;
      return e.debugInfo && !e.debugInfo.forceRemote && p ? (e._originCallFunction || (e._originCallFunction = n2), s2 = Je.call(this, t3)) : s2 = n2.call(this, t3), Object.defineProperty(s2, "result", { get: () => (console.warn("\u5F53\u524D\u8FD4\u56DE\u7ED3\u679C\u4E3APromise\u7C7B\u578B\uFF0C\u4E0D\u53EF\u76F4\u63A5\u8BBF\u95EE\u5176result\u5C5E\u6027\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), s2;
    };
  }
  const et = Symbol("CLIENT_DB_INTERNAL");
  function tt(e, t2) {
    return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = et, e.__v_raw = void 0, new Proxy(e, { get(e2, n2, s2) {
      if (n2 === "_uniClient")
        return null;
      if (n2 in e2 || typeof n2 != "string") {
        const t3 = e2[n2];
        return typeof t3 == "function" ? t3.bind(e2) : t3;
      }
      return t2.get(e2, n2, s2);
    } });
  }
  function nt(e) {
    return { on: (t2, n2) => {
      e[t2] = e[t2] || [], e[t2].indexOf(n2) > -1 || e[t2].push(n2);
    }, off: (t2, n2) => {
      e[t2] = e[t2] || [];
      const s2 = e[t2].indexOf(n2);
      s2 !== -1 && e[t2].splice(s2, 1);
    } };
  }
  const st = ["db.Geo", "db.command", "command.aggregate"];
  function rt(e, t2) {
    return st.indexOf(`${e}.${t2}`) > -1;
  }
  function ot(e) {
    switch (c(e = Me(e))) {
      case "array":
        return e.map((e2) => ot(e2));
      case "object":
        return e._internalType === et || Object.keys(e).forEach((t2) => {
          e[t2] = ot(e[t2]);
        }), e;
      case "regexp":
        return { $regexp: { source: e.source, flags: e.flags } };
      case "date":
        return { $date: e.toISOString() };
      default:
        return e;
    }
  }
  class it {
    constructor(e, t2, n2) {
      this.content = e, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e = this;
      const t2 = [e.content];
      for (; e.prevStage; )
        e = e.prevStage, t2.push(e.content);
      return { $db: t2.reverse().map((e2) => ({ $method: e2.$method, $param: ot(e2.$param) })) };
    }
    getAction() {
      const e = this.toJSON().$db.find((e2) => e2.$method === "action");
      return e && e.$param && e.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e) => e.$method !== "action") };
    }
    get useAggregate() {
      let e = this, t2 = false;
      for (; e.prevStage; ) {
        e = e.prevStage;
        const n2 = e.content.$method;
        if (n2 === "aggregate" || n2 === "pipeline") {
          t2 = true;
          break;
        }
      }
      return t2;
    }
    get count() {
      if (!this.useAggregate)
        return function() {
          return this._send("count", Array.from(arguments));
        };
      const e = this;
      return function() {
        return at({ $method: "count", $param: ot(Array.from(arguments)) }, e, this._database);
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    add() {
      return this._send("add", Array.from(arguments));
    }
    remove() {
      return this._send("remove", Array.from(arguments));
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    set() {
      throw new Error("clientDB\u7981\u6B62\u4F7F\u7528set\u65B9\u6CD5");
    }
    _send(e, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e, $param: ot(t2) }), l) {
        const e2 = s2.$db.find((e3) => e3.$method === "collection"), t3 = e2 && e2.$param;
        t3 && t3.length === 1 && typeof e2.$param[0] == "string" && e2.$param[0].indexOf(",") > -1 && console.warn("\u68C0\u6D4B\u5230\u4F7F\u7528JQL\u8BED\u6CD5\u8054\u8868\u67E5\u8BE2\u65F6\uFF0C\u672A\u4F7F\u7528getTemp\u5148\u8FC7\u6EE4\u4E3B\u8868\u6570\u636E\uFF0C\u5728\u4E3B\u8868\u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u67E5\u8BE2\u7F13\u6162\u3002\n- \u5982\u4F55\u4F18\u5316\u8BF7\u53C2\u8003\u6B64\u6587\u6863\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- \u5982\u679C\u4E3B\u8868\u6570\u636E\u91CF\u5F88\u5C0F\u8BF7\u5FFD\u7565\u6B64\u4FE1\u606F\uFF0C\u9879\u76EE\u53D1\u884C\u65F6\u4E0D\u4F1A\u51FA\u73B0\u6B64\u63D0\u793A\u3002");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function at(e, t2, n2) {
    return tt(new it(e, t2, n2), { get(e2, t3) {
      let s2 = "db";
      return e2 && e2.content && (s2 = e2.content.$method), rt(s2, t3) ? at({ $method: t3 }, e2, n2) : function() {
        return at({ $method: t3, $param: ot(Array.from(arguments)) }, e2, n2);
      };
    } });
  }
  function ct({ path: e, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e.map((e2) => ({ $method: e2 })), { $method: t2, $param: this.param }] };
      }
    };
  }
  class ut extends class {
    constructor({ uniClient: e = {} } = {}) {
      this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e.isDefault && (this._dbCallBacks = _("_globalUniCloudDatabaseCallback")), this.auth = nt(this._authCallBacks), Object.assign(this, nt(this._dbCallBacks)), this.env = tt({}, { get: (e2, t2) => ({ $env: t2 }) }), this.Geo = tt({}, { get: (e2, t2) => ct({ path: ["Geo"], method: t2 }) }), this.serverDate = ct({ path: [], method: "serverDate" }), this.RegExp = ct({ path: [], method: "RegExp" });
    }
    getCloudEnv(e) {
      if (typeof e != "string" || !e.trim())
        throw new Error("getCloudEnv\u53C2\u6570\u9519\u8BEF");
      return { $env: e.replace("$cloudEnv_", "") };
    }
    _callback(e, t2) {
      const n2 = this._dbCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t2);
      });
    }
    _callbackAuth(e, t2) {
      const n2 = this._authCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t2);
      });
    }
    multiSend() {
      const e = Array.from(arguments), t2 = e.map((e2) => {
        const t3 = e2.getAction(), n2 = e2.getCommand();
        if (n2.$db[n2.$db.length - 1].$method !== "getTemp")
          throw new Error("multiSend\u53EA\u652F\u6301\u5B50\u547D\u4EE4\u5185\u4F7F\u7528getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e });
    }
  } {
    _callCloudFunction({ action: e, command: t2, multiCommand: n2, queryList: s2 }) {
      function r2(e2, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && typeof r3.udb.setResult == "function" && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e2.result.dataList[n3]));
          }
      }
      const o2 = T(A("database", "invoke")), i2 = this._uniClient;
      return o2.then(() => i2.callFunction({ name: "DCloud-clientDB", type: a, data: { action: e, command: t2, multiCommand: n2 } })).then((e2) => {
        const { code: t3, message: n3, token: s3, tokenExpired: o3, systemInfo: i3 = [] } = e2.result;
        if (i3)
          for (let e3 = 0; e3 < i3.length; e3++) {
            const { level: t4, message: n4, detail: s4 } = i3[e3], r3 = console[t4] || console.log;
            let o4 = "[System Info]" + n4;
            s4 && (o4 = `${o4}
\u8BE6\u7EC6\u4FE1\u606F\uFF1A${s4}`), r3(o4);
          }
        if (t3) {
          const s4 = new I({ message: n3, code: t3, requestId: e2.requestId });
          return this._callback("error", [s4]), Promise.reject(s4);
        }
        s3 && o3 && (!function({ token: e3, tokenExpired: t4 } = {}) {
          e3 && C.setStorageSync("uni_id_token", e3), t4 && C.setStorageSync("uni_id_token_expired", t4);
        }({ token: s3, tokenExpired: o3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: o3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: o3 }]));
        const a2 = e2.result.affectedDocs;
        return typeof a2 == "number" && Object.defineProperty(e2.result, "affectedDocs", { get: () => (console.warn("affectedDocs\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528inserted/deleted/updated/data.length\u66FF\u4EE3"), a2) }), T(A("database", "success"), e2).then(() => T(A("database", "complete"), e2)).then(() => (r2(e2, null), Promise.resolve(e2)));
      }, (e2) => {
        const t3 = new I({ code: e2.code || "SYSTEM_ERROR", message: e2.message, requestId: e2.requestId });
        return this._callback("error", [t3]), /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e2.message) && console.warn("clientDB\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5728web\u63A7\u5236\u53F0\u4FDD\u5B58\u4E00\u6B21schema\u4EE5\u5F00\u542FclientDB"), T(A("database", "fail"), e2).then(() => T(A("database", "complete"), e2)).then(() => (r2(null, e2), Promise.reject(e2)));
      });
    }
  }
  function ht(e) {
    e.database = function(t2) {
      if (t2 && Object.keys(t2).length > 0)
        return e.init(t2).database();
      if (this._database)
        return this._database;
      const n2 = function(e2, t3 = {}) {
        return tt(new e2(t3), { get: (e3, t4) => rt("db", t4) ? at({ $method: t4 }, null, e3) : function() {
          return at({ $method: t4, $param: ot(Array.from(arguments)) }, null, e3);
        } });
      }(ut, { uniClient: e });
      return this._database = n2, n2;
    };
  }
  let lt;
  const dt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", ft = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function pt() {
    const e = Be().token || "", t2 = e.split(".");
    if (!e || t2.length !== 3)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(lt(s2).split("").map(function(e2) {
        return "%" + ("00" + e2.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e2) {
      throw new Error("\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\u51FA\u9519\uFF0C\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A" + e2.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  lt = typeof atob != "function" ? function(e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !ft.test(e))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e += "==".slice(2 - (3 & e.length));
    for (var n2, s2, r2 = "", o2 = 0; o2 < e.length; )
      t2 = dt.indexOf(e.charAt(o2++)) << 18 | dt.indexOf(e.charAt(o2++)) << 12 | (n2 = dt.indexOf(e.charAt(o2++))) << 6 | (s2 = dt.indexOf(e.charAt(o2++))), r2 += n2 === 64 ? String.fromCharCode(t2 >> 16 & 255) : s2 === 64 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var gt = t$5(n(function(e, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e2, t3) {
      return e2.tempFiles.forEach((e3, n3) => {
        e3.name || (e3.name = e3.path.substring(e3.path.lastIndexOf("/") + 1)), t3 && (e3.fileType = t3), e3.cloudPath = Date.now() + "_" + n3 + e3.name.substring(e3.name.lastIndexOf("."));
      }), e2.tempFilePaths || (e2.tempFilePaths = e2.tempFiles.map((e3) => e3.path)), e2;
    }
    function o2(e2, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e3) => {
        if (s3) {
          const t4 = s3(e3);
          if (t4 !== void 0)
            return Promise.resolve(t4).then((t5) => t5 === void 0 ? e3 : t5);
        }
        return e3;
      }).then((t4) => t4 === false ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e3, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const o3 = t5.tempFiles, i2 = o3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= i2)
              return void (!o3.find((e4) => !e4.url && !e4.errMsg) && n3(t5));
            const u2 = o3[s5];
            e3.uploadFile({ filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, onUploadProgress(e4) {
              e4.index = s5, e4.tempFile = u2, e4.tempFilePath = u2.path, r4 && r4(e4);
            } }).then((e4) => {
              u2.url = e4.fileID, s5 < i2 && c2();
            }).catch((e4) => {
              u2.errMsg = e4.errMsg || e4.message, s5 < i2 && c2();
            });
          }
        });
      }(e2, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e2) {
      return function(t3 = { type: "all" }) {
        return t3.type === "image" ? o2(e2, function(e3) {
          const { count: t4, sizeType: n3, sourceType: o3 = ["album", "camera"], extension: i2 } = e3;
          return new Promise((e4, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: o3, extension: i2, success(t5) {
              e4(r2(t5, "image"));
            }, fail(e5) {
              a2({ errMsg: e5.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : t3.type === "video" ? o2(e2, function(e3) {
          const { camera: t4, compressed: n3, maxDuration: o3, sourceType: i2 = ["album", "camera"], extension: a2 } = e3;
          return new Promise((e4, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: o3, sourceType: i2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: o4, height: i3, width: a3 } = t5;
              e4(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: o4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: i3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e5) {
              c2({ errMsg: e5.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : o2(e2, function(e3) {
          const { count: t4, extension: n3 } = e3;
          return new Promise((e4, o3) => {
            let i2 = uni.chooseFile;
            if (typeof wx != "undefined" && typeof wx.chooseMessageFile == "function" && (i2 = wx.chooseMessageFile), typeof i2 != "function")
              return o3({ errMsg: s2 + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002" });
            i2({ type: "all", count: t4, extension: n3, success(t5) {
              e4(r2(t5));
            }, fail(e5) {
              o3({ errMsg: e5.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }));
  const mt = "manual";
  function yt(e) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e2 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e2.push(this[t2]);
        }), e2;
      }, (e2, t2) => {
        if (this.loadtime === mt)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e2.length; r2++)
          e2[r2] !== t2[r2] && (s2.push(e2[r2]), n2 = true);
        e2[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e2, t2) {
    }, mixinDatacomEasyGet({ getone: e2 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const o2 = e2 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = o2, t2 && t2(o2);
      }).catch((e3) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e3, n2 && n2(e3);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2 = e.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const o2 = t2.where || this.where;
      o2 && Object.keys(o2).length && (n2 = n2.where(o2));
      const i2 = t2.field || this.field;
      i2 && (n2 = n2.field(i2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      (t2.distinct !== void 0 ? t2.distinct : this.distinct) === true && (n2 = n2.distinct());
      const h2 = t2.orderby || this.orderby;
      h2 && (n2 = n2.orderBy(h2));
      const l2 = t2.pageCurrent !== void 0 ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = t2.pageSize !== void 0 ? t2.pageSize : this.mixinDatacomPage.size, f2 = t2.getcount !== void 0 ? t2.getcount : this.getcount, p2 = t2.gettree !== void 0 ? t2.gettree : this.gettree, g = t2.gettreepath !== void 0 ? t2.gettreepath : this.gettreepath, m2 = { getCount: f2 }, y2 = { limitLevel: t2.limitlevel !== void 0 ? t2.limitlevel : this.limitlevel, startWith: t2.startwith !== void 0 ? t2.startwith : this.startwith };
      return p2 && (m2.getTree = y2), g && (m2.getTreePath = y2), n2 = n2.skip(d2 * (l2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function _t(e) {
    return function(t2, n2 = {}) {
      n2 = function(e2, t3 = {}) {
        return e2.customUI = t3.customUI || e2.customUI, Object.assign(e2.loadingOptions, t3.loadingOptions), Object.assign(e2.errorOptions, t3.errorOptions), e2;
      }({ customUI: false, loadingOptions: { text: "\u52A0\u8F7D\u4E2D...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get: (n3, s3) => async function n4(...c2) {
        let u2;
        a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
        try {
          u2 = await e.callFunction({ name: t2, type: i, data: { method: s3, params: c2 } });
        } catch (e2) {
          u2 = { result: e2 };
        }
        const { errCode: h2, errMsg: l2 } = u2.result || {};
        if (a2 && uni.hideLoading(), h2) {
          if (a2)
            if (o2.type === "toast")
              uni.showToast({ title: l2, icon: "none" });
            else {
              if (o2.type !== "modal")
                throw new Error(`Invalid errorOptions.type: ${o2.type}`);
              {
                const { confirm: e3 } = await async function({ title: e4, content: t3, showCancel: n5, cancelText: s4, confirmText: r3 } = {}) {
                  return new Promise((o3, i2) => {
                    uni.showModal({ title: e4, content: t3, showCancel: n5, cancelText: s4, confirmText: r3, success(e5) {
                      o3(e5);
                    }, fail() {
                      o3({ confirm: false, cancel: true });
                    } });
                  });
                }({ title: "\u63D0\u793A", content: l2, showCancel: o2.retry, cancelText: "\u53D6\u6D88", confirmText: o2.retry ? "\u91CD\u8BD5" : "\u786E\u5B9A" });
                if (o2.retry && e3)
                  return n4(...c2);
              }
            }
          const e2 = new I({ code: h2, message: l2, requestId: u2.requestId });
          throw e2.detail = u2.result, e2;
        }
        return u2.result;
      } });
    };
  }
  async function wt(e, t2) {
    const n2 = `http://${e}:${t2}/system/ping`;
    try {
      const e2 = await (s2 = { url: n2, timeout: 500 }, new Promise((e3, t3) => {
        C.request(__spreadProps(__spreadValues({}, s2), { success(t4) {
          e3(t4);
        }, fail(e4) {
          t3(e4);
        } }));
      }));
      return !(!e2.data || e2.data.code !== 0);
    } catch (e2) {
      return false;
    }
    var s2;
  }
  function kt(e) {
    if (e.initUniCloudStatus && e.initUniCloudStatus !== "rejected")
      return;
    let t2 = Promise.resolve();
    var n2;
    n2 = 1, t2 = new Promise((e2, t3) => {
      setTimeout(() => {
        e2();
      }, n2);
    }), e.isReady = false, e.isDefault = false;
    const s2 = e.auth();
    e.initUniCloudStatus = "pending", e.initUniCloud = t2.then(() => s2.getLoginState()).then((e2) => e2 ? Promise.resolve() : s2.signInAnonymously()).then(() => {
      if (e.debugInfo) {
        const { address: t3, servePort: n3 } = e.debugInfo;
        return async function(e2, t4) {
          let n4;
          for (let s3 = 0; s3 < e2.length; s3++) {
            const r2 = e2[s3];
            if (await wt(r2, t4)) {
              n4 = r2;
              break;
            }
          }
          return { address: n4, port: t4 };
        }(t3, n3);
      }
    }).then(({ address: t3, port: n3 } = {}) => {
      if (t3)
        e.localAddress = t3, e.localPort = n3;
      else if (e.debugInfo) {
        const t4 = console["warn"];
        let n4 = "";
        e.debugInfo.initialLaunchType === "remote" ? (e.debugInfo.forceRemote = true, n4 = "\u5F53\u524D\u5BA2\u6237\u7AEF\u548CHBuilderX\u4E0D\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF08\u6216\u5176\u4ED6\u7F51\u7EDC\u539F\u56E0\u65E0\u6CD5\u8FDE\u63A5HBuilderX\uFF09\uFF0CuniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u4E0D\u5BF9\u5F53\u524D\u5BA2\u6237\u7AEF\u751F\u6548\u3002\n- \u5982\u679C\u4E0D\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u76F4\u63A5\u5FFD\u7565\u6B64\u4FE1\u606F\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs") : n4 = "\u65E0\u6CD5\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u5F53\u524D\u5BA2\u6237\u7AEF\u662F\u5426\u4E0E\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs", t4(n4);
      }
    }).then(() => {
      e.isReady = true, e.initUniCloudStatus = "fulfilled";
    }).catch((t3) => {
      console.error(t3), e.initUniCloudStatus = "rejected";
    });
  }
  let vt = new class {
    init(e) {
      let t2 = {};
      const n2 = e.debugFunction !== false && l && d === "app-plus";
      switch (e.provider) {
        case "tencent":
          t2 = je.init(Object.assign(e, { useDebugFunction: n2 }));
          break;
        case "aliyun":
          t2 = q.init(Object.assign(e, { useDebugFunction: n2 }));
          break;
        case "private":
          t2 = We.init(Object.assign(e, { useDebugFunction: n2 }));
          break;
        default:
          throw new Error("\u672A\u63D0\u4F9B\u6B63\u786E\u7684provider\u53C2\u6570");
      }
      const s2 = f;
      s2 && !s2.code && (t2.debugInfo = s2), kt(t2), t2.reInit = function() {
        kt(this);
      }, Ze(t2), function(e2) {
        const t3 = e2.uploadFile;
        e2.uploadFile = function(e3) {
          return t3.call(this, e3);
        };
      }(t2), ht(t2), function(e2) {
        e2.getCurrentUserInfo = pt, e2.chooseAndUploadFile = gt.initChooseAndUploadFile(e2), Object.assign(e2, { get mixinDatacom() {
          return yt(e2);
        } }), e2.importObject = _t(e2);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e2) => {
        if (!t2[e2])
          return;
        const n3 = t2[e2];
        t2[e2] = function() {
          return t2.reInit(), n3.apply(t2, Array.from(arguments));
        }, t2[e2] = P(t2[e2], e2).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    {
      const e = p;
      let t2 = {};
      if (e.length === 1)
        t2 = e[0], vt = vt.init(t2), vt.isDefault = true;
      else {
        const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
        let n2;
        n2 = e && e.length > 0 ? "\u5E94\u7528\u6709\u591A\u4E2A\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u901A\u8FC7uniCloud.init\u65B9\u6CD5\u6307\u5B9A\u8981\u4F7F\u7528\u7684\u670D\u52A1\u7A7A\u95F4" : "\u5E94\u7528\u672A\u5173\u8054\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u5728uniCloud\u76EE\u5F55\u53F3\u952E\u5173\u8054\u670D\u52A1\u7A7A\u95F4", t3.forEach((e2) => {
          vt[e2] = function() {
            return console.error(n2), Promise.reject(new I({ code: "SYS_ERR", message: n2 }));
          };
        });
      }
      Object.assign(vt, { get mixinDatacom() {
        return yt(vt);
      } }), vt.addInterceptor = v, vt.removeInterceptor = S;
    }
  })();
  var St = vt;
  var en$4 = {
    "uniCloud.component.add.success": "Success",
    "uniCloud.component.update.success": "Success",
    "uniCloud.component.remove.showModal.title": "Tips",
    "uniCloud.component.remove.showModal.content": "\u662F\u5426\u5220\u9664\u8BE5\u6570\u636E"
  };
  var es = {
    "uniCloud.component.add.success": "\u65B0\u589E\u6210\u529F",
    "uniCloud.component.update.success": "\u4FEE\u6539\u6210\u529F",
    "uniCloud.component.remove.showModal.title": "\u63D0\u793A",
    "uniCloud.component.remove.showModal.content": "\u662F\u5426\u5220\u9664\u8BE5\u6570\u636E"
  };
  var fr = {
    "uniCloud.component.add.success": "\u65B0\u589E\u6210\u529F",
    "uniCloud.component.update.success": "\u4FEE\u6539\u6210\u529F",
    "uniCloud.component.remove.showModal.title": "\u63D0\u793A",
    "uniCloud.component.remove.showModal.content": "\u662F\u5426\u5220\u9664\u8BE5\u6570\u636E"
  };
  var zhHans$5 = {
    "uniCloud.component.add.success": "\u65B0\u589E\u6210\u529F",
    "uniCloud.component.update.success": "\u4FEE\u6539\u6210\u529F",
    "uniCloud.component.remove.showModal.title": "\u63D0\u793A",
    "uniCloud.component.remove.showModal.content": "\u662F\u5426\u5220\u9664\u8BE5\u6570\u636E"
  };
  var zhHant$2 = {
    "uniCloud.component.add.success": "\u65B0\u589E\u6210\u529F",
    "uniCloud.component.update.success": "\u4FEE\u6539\u6210\u529F",
    "uniCloud.component.remove.showModal.title": "\u63D0\u793A",
    "uniCloud.component.remove.showModal.content": "\u662F\u5426\u522A\u9664\u6578\u64DA"
  };
  var messages$5 = {
    en: en$4,
    es,
    fr,
    "zh-Hans": zhHans$5,
    "zh-Hant": zhHant$2
  };
  const { t: t$4 } = initVueI18n(messages$5);
  const events = {
    load: "load",
    error: "error"
  };
  const pageMode = {
    add: "add",
    replace: "replace"
  };
  const loadMode = {
    auto: "auto",
    onready: "onready",
    manual: "manual"
  };
  const attrs = [
    "pageCurrent",
    "pageSize",
    "collection",
    "action",
    "field",
    "getcount",
    "orderby",
    "where",
    "groupby",
    "groupField",
    "distinct"
  ];
  const _sfc_main$N = {
    name: "UniClouddb",
    setup(props) {
      const dataListRef = props.getone ? shallowSsrRef(void 0, "xPuXDrLFoCd8LkFkA5cBtA==") : ssrRef([], "LNPRcRPOTQ2akGFgCU6oRQ==");
      const instance = vue.getCurrentInstance();
      vue.onMounted(() => {
        if ((!dataListRef.value || dataListRef.value.length === 0) && !props.manual && props.loadtime === loadMode.auto) {
          instance.proxy.loadData();
        }
      });
      return { dataList: dataListRef };
    },
    async serverPrefetch() {
      if (!this.manual && this.loadtime === loadMode.auto) {
        return this.loadData();
      }
    },
    props: {
      options: {
        type: [Object, Array],
        default() {
          return {};
        }
      },
      spaceInfo: {
        type: Object,
        default() {
          return {};
        }
      },
      collection: {
        type: [String, Array],
        default: ""
      },
      action: {
        type: String,
        default: ""
      },
      field: {
        type: String,
        default: ""
      },
      orderby: {
        type: String,
        default: ""
      },
      where: {
        type: [String, Object],
        default: ""
      },
      pageData: {
        type: String,
        default: "add"
      },
      pageCurrent: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 20
      },
      getcount: {
        type: [Boolean, String],
        default: false
      },
      getone: {
        type: [Boolean, String],
        default: false
      },
      gettree: {
        type: [Boolean, String, Object],
        default: false
      },
      gettreepath: {
        type: [Boolean, String],
        default: false
      },
      startwith: {
        type: String,
        default: ""
      },
      limitlevel: {
        type: Number,
        default: 10
      },
      groupby: {
        type: String,
        default: ""
      },
      groupField: {
        type: String,
        default: ""
      },
      distinct: {
        type: [Boolean, String],
        default: false
      },
      pageIndistinct: {
        type: [Boolean, String],
        default: false
      },
      foreignKey: {
        type: String,
        default: ""
      },
      loadtime: {
        type: String,
        default: "auto"
      },
      manual: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        loading: false,
        hasMore: false,
        paginationInternal: {},
        errorMessage: ""
      };
    },
    computed: {
      collectionArgs() {
        return Array.isArray(this.collection) ? this.collection : [this.collection];
      },
      isLookup() {
        return Array.isArray(this.collection) && this.collection.length > 1 || typeof this.collection === "string" && this.collection.indexOf(",") > -1;
      },
      mainCollection() {
        if (typeof this.collection === "string") {
          return this.collection.split(",")[0];
        }
        const mainQuery = JSON.parse(JSON.stringify(this.collection[0]));
        return mainQuery.$db[0].$param[0];
      }
    },
    created() {
      this._isEnded = false;
      this.paginationInternal = {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0
      };
      this.$watch(() => {
        var al = [];
        attrs.forEach((key) => {
          al.push(this[key]);
        });
        return al;
      }, (newValue, oldValue) => {
        this.paginationInternal.size = this.pageSize;
        if (newValue[0] !== oldValue[0]) {
          this.paginationInternal.current = this.pageCurrent;
        }
        if (this.loadtime === loadMode.manual) {
          return;
        }
        let needReset = false;
        for (let i2 = 2; i2 < newValue.length; i2++) {
          if (newValue[i2] !== oldValue[i2]) {
            needReset = true;
            break;
          }
        }
        if (needReset) {
          this.clear();
          this.reset();
        }
        this._execLoadData();
      });
    },
    methods: {
      loadData(args1, args2) {
        let callback = null;
        let clear = false;
        if (typeof args1 === "object") {
          if (args1.clear) {
            if (this.pageData === pageMode.replace) {
              this.clear();
            } else {
              clear = args1.clear;
            }
            this.reset();
          }
          if (args1.current !== void 0) {
            this.paginationInternal.current = args1.current;
          }
          if (typeof args2 === "function") {
            callback = args2;
          }
        } else if (typeof args1 === "function") {
          callback = args1;
        }
        return this._execLoadData(callback, clear);
      },
      loadMore() {
        if (this._isEnded || this.loading) {
          return;
        }
        if (this.pageData === pageMode.add) {
          this.paginationInternal.current++;
        }
        this._execLoadData();
      },
      refresh() {
        this.clear();
        this._execLoadData();
      },
      clear() {
        this._isEnded = false;
        this.dataList = [];
      },
      reset() {
        this.paginationInternal.current = 1;
      },
      add(value, {
        action,
        showToast = true,
        toastTitle,
        success,
        fail,
        complete,
        needConfirm = true,
        needLoading = true,
        loadingTitle = ""
      } = {}) {
        if (needLoading) {
          uni.showLoading({
            title: loadingTitle
          });
        }
        let db2 = St.database(this.spaceInfo);
        if (action) {
          db2 = db2.action(action);
        }
        db2.collection(this.mainCollection).add(value).then((res2) => {
          success && success(res2);
          if (showToast) {
            uni.showToast({
              title: toastTitle || t$4("uniCloud.component.add.success")
            });
          }
        }).catch((err) => {
          fail && fail(err);
          if (needConfirm) {
            uni.showModal({
              content: err.message,
              showCancel: false
            });
          }
        }).finally(() => {
          if (needLoading) {
            uni.hideLoading();
          }
          complete && complete();
        });
      },
      remove(id, {
        action,
        success,
        fail,
        complete,
        confirmTitle,
        confirmContent,
        needConfirm = true,
        needLoading = true,
        loadingTitle = ""
      } = {}) {
        if (!id || !id.length) {
          return;
        }
        if (!needConfirm) {
          this._execRemove(id, action, success, fail, complete, needConfirm, needLoading, loadingTitle);
          return;
        }
        uni.showModal({
          title: confirmTitle || t$4("uniCloud.component.remove.showModal.title"),
          content: confirmContent || t$4("uniCloud.component.remove.showModal.content"),
          showCancel: true,
          success: (res2) => {
            if (!res2.confirm) {
              return;
            }
            this._execRemove(id, action, success, fail, complete, needConfirm, needLoading, loadingTitle);
          }
        });
      },
      update(id, value, {
        action,
        showToast = true,
        toastTitle,
        success,
        fail,
        complete,
        needConfirm = true,
        needLoading = true,
        loadingTitle = ""
      } = {}) {
        if (needLoading) {
          uni.showLoading({
            title: loadingTitle
          });
        }
        let db2 = St.database(this.spaceInfo);
        if (action) {
          db2 = db2.action(action);
        }
        return db2.collection(this.mainCollection).doc(id).update(value).then((res2) => {
          success && success(res2);
          if (showToast) {
            uni.showToast({
              title: toastTitle || t$4("uniCloud.component.update.success")
            });
          }
        }).catch((err) => {
          fail && fail(err);
          if (needConfirm) {
            uni.showModal({
              content: err.message,
              showCancel: false
            });
          }
        }).finally(() => {
          if (needLoading) {
            uni.hideLoading();
          }
          complete && complete();
        });
      },
      getTemp(isTemp = true) {
        let db2 = St.database(this.spaceInfo);
        if (this.action) {
          db2 = db2.action(this.action);
        }
        db2 = db2.collection(...this.collectionArgs);
        if (this.foreignKey) {
          db2 = db2.foreignKey(this.foreignKey);
        }
        if (!(!this.where || !Object.keys(this.where).length)) {
          db2 = db2.where(this.where);
        }
        if (this.field) {
          db2 = db2.field(this.field);
        }
        if (this.groupby) {
          db2 = db2.groupBy(this.groupby);
        }
        if (this.groupField) {
          db2 = db2.groupField(this.groupField);
        }
        if (this.distinct === true) {
          db2 = db2.distinct();
        }
        if (this.orderby) {
          db2 = db2.orderBy(this.orderby);
        }
        const {
          current,
          size
        } = this.paginationInternal;
        const getOptions = {};
        if (this.getcount) {
          getOptions.getCount = this.getcount;
        }
        const treeOptions = {
          limitLevel: this.limitlevel,
          startWith: this.startwith
        };
        if (this.gettree) {
          getOptions.getTree = treeOptions;
        }
        if (this.gettreepath) {
          getOptions.getTreePath = treeOptions;
        }
        db2 = db2.skip(size * (current - 1)).limit(size);
        if (isTemp) {
          db2 = db2.getTemp(getOptions);
          db2.udb = this;
        } else {
          db2 = db2.get(getOptions);
        }
        return db2;
      },
      setResult(result) {
        if (result.code === 0) {
          this._execLoadDataSuccess(result);
        } else {
          this._execLoadDataFail(new Error(result.message));
        }
      },
      _execLoadData(callback, clear) {
        if (this.loading) {
          return;
        }
        this.loading = true;
        this.errorMessage = "";
        return this._getExec().then((res2) => {
          this.loading = false;
          this._execLoadDataSuccess(res2.result, callback, clear);
        }).catch((err) => {
          this.loading = false;
          this._execLoadDataFail(err, callback);
        });
      },
      _execLoadDataSuccess(result, callback, clear) {
        const {
          data,
          count
        } = result;
        this._isEnded = count !== void 0 ? this.paginationInternal.current * this.paginationInternal.size >= count : data.length < this.pageSize;
        this.hasMore = !this._isEnded;
        const data2 = this.getone ? data.length ? data[0] : void 0 : data;
        if (this.getcount) {
          this.paginationInternal.count = count;
        }
        callback && callback(data2, this._isEnded, this.paginationInternal);
        this._dispatchEvent(events.load, data2);
        if (this.getone || this.pageData === pageMode.replace) {
          this.dataList = data2;
        } else {
          if (clear) {
            this.dataList = data2;
          } else {
            this.dataList.push(...data2);
          }
        }
      },
      _execLoadDataFail(err, callback) {
        this.errorMessage = err;
        callback && callback();
        this.$emit(events.error, err);
        {
          console.error(err);
        }
      },
      _getExec() {
        return this.getTemp(false);
      },
      _execRemove(id, action, success, fail, complete, needConfirm, needLoading, loadingTitle) {
        if (!this.collection || !id) {
          return;
        }
        const ids = Array.isArray(id) ? id : [id];
        if (!ids.length) {
          return;
        }
        if (needLoading) {
          uni.showLoading({
            mask: true,
            title: loadingTitle
          });
        }
        const db2 = St.database(this.spaceInfo);
        const dbCmd = db2.command;
        let exec = db2;
        if (action) {
          exec = exec.action(action);
        }
        exec.collection(this.mainCollection).where({
          _id: dbCmd.in(ids)
        }).remove().then((res2) => {
          success && success(res2.result);
          if (this.pageData === pageMode.replace) {
            this.refresh();
          } else {
            this.removeData(ids);
          }
        }).catch((err) => {
          fail && fail(err);
          if (needConfirm) {
            uni.showModal({
              content: err.message,
              showCancel: false
            });
          }
        }).finally(() => {
          if (needLoading) {
            uni.hideLoading();
          }
          complete && complete();
        });
      },
      removeData(ids) {
        const il = ids.slice(0);
        const dl = this.dataList;
        for (let i2 = dl.length - 1; i2 >= 0; i2--) {
          const index = il.indexOf(dl[i2]._id);
          if (index >= 0) {
            dl.splice(i2, 1);
            il.splice(index, 1);
          }
        }
      },
      _dispatchEvent(type, data) {
        if (this._changeDataFunction) {
          this._changeDataFunction(data, this._isEnded, this.paginationInternal);
        } else {
          this.$emit(type, data, this._isEnded, this.paginationInternal);
        }
      }
    }
  };
  function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.renderSlot(_ctx.$slots, "default", {
        options: $props.options,
        data: $setup.dataList,
        pagination: $data.paginationInternal,
        loading: $data.loading,
        hasMore: $data.hasMore,
        error: $data.errorMessage
      })
    ]);
  }
  var __easycom_4$2 = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$M], ["__file", "/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.vue"]]);
  const _sfc_main$M = {
    name: "UniSection",
    props: {
      type: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      }
    },
    data() {
      return {};
    },
    watch: {
      title(newVal) {
        if (uni.report && newVal !== "") {
          uni.report("title", newVal);
        }
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-section",
      nvue: ""
    }, [
      $props.type ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-section__head"
      }, [
        vue.createElementVNode("view", {
          class: vue.normalizeClass([$props.type, "uni-section__head-tag"])
        }, null, 2)
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "uni-section__content" }, [
        vue.createElementVNode("text", {
          class: vue.normalizeClass([{ "distraction": !$props.subTitle }, "uni-section__content-title"])
        }, vue.toDisplayString($props.title), 3),
        $props.subTitle ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 0,
          class: "uni-section__content-sub"
        }, vue.toDisplayString($props.subTitle), 1)) : vue.createCommentVNode("v-if", true)
      ]),
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  var __easycom_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$L], ["__scopeId", "data-v-5584ec96"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/components/uni-section/uni-section.vue"]]);
  const _sfc_main$L = {
    name: "UniGridItem",
    inject: ["grid"],
    props: {
      index: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        column: 0,
        showBorder: true,
        square: true,
        highlight: true,
        left: 0,
        top: 0,
        openNum: 2,
        width: 0,
        borderColor: "#e5e5e5"
      };
    },
    created() {
      this.column = this.grid.column;
      this.showBorder = this.grid.showBorder;
      this.square = this.grid.square;
      this.highlight = this.grid.highlight;
      this.top = this.hor === 0 ? this.grid.hor : this.hor;
      this.left = this.ver === 0 ? this.grid.ver : this.ver;
      this.borderColor = this.grid.borderColor;
      this.grid.children.push(this);
      this.width = this.grid.width;
    },
    beforeDestroy() {
      this.grid.children.forEach((item, index) => {
        if (item === this) {
          this.grid.children.splice(index, 1);
        }
      });
    },
    methods: {
      _onClick() {
        this.grid.change({
          detail: {
            index: this.index
          }
        });
      }
    }
  };
  function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.width ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      style: vue.normalizeStyle("width:" + $data.width + ";" + ($data.square ? "height:" + $data.width : "")),
      class: "uni-grid-item"
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass([{ "uni-grid-item--border": $data.showBorder, "uni-grid-item--border-top": $data.showBorder && $props.index < $data.column, "uni-highlight": $data.highlight }, "uni-grid-item__box"]),
        style: vue.normalizeStyle({ "border-right-color": $data.borderColor, "border-bottom-color": $data.borderColor, "border-top-color": $data.borderColor }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 6)
    ], 4)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_3$3 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$K], ["__scopeId", "data-v-7b4a3849"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.vue"]]);
  const _sfc_main$K = {
    name: "UniGrid",
    emits: ["change"],
    props: {
      column: {
        type: Number,
        default: 3
      },
      showBorder: {
        type: Boolean,
        default: true
      },
      borderColor: {
        type: String,
        default: "#D2D2D2"
      },
      square: {
        type: Boolean,
        default: true
      },
      highlight: {
        type: Boolean,
        default: true
      }
    },
    provide() {
      return {
        grid: this
      };
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        elId,
        width: 0
      };
    },
    created() {
      this.children = [];
    },
    mounted() {
      this.$nextTick(() => {
        this.init();
      });
    },
    methods: {
      init() {
        setTimeout(() => {
          this._getSize((width) => {
            this.children.forEach((item, index) => {
              item.width = width;
            });
          });
        }, 50);
      },
      change(e) {
        this.$emit("change", e);
      },
      _getSize(fn) {
        uni.createSelectorQuery().in(this).select(`#${this.elId}`).boundingClientRect().exec((ret) => {
          this.width = parseInt((ret[0].width - 1) / this.column) + "px";
          fn(this.width);
        });
      }
    }
  };
  function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-grid-wrap" }, [
      vue.createElementVNode("view", {
        id: $data.elId,
        ref: "uni-grid",
        class: vue.normalizeClass(["uni-grid", { "uni-grid--border": $props.showBorder }]),
        style: vue.normalizeStyle({ "border-left-color": $props.borderColor })
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 14, ["id"])
    ]);
  }
  var __easycom_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$J], ["__scopeId", "data-v-aaae28a6"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-grid/components/uni-grid/uni-grid.vue"]]);
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = __spreadValues({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.0.2
   * (c) 2021 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject$2(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i2 = subs.indexOf(fn);
      if (i2 > -1) {
        subs.splice(i2, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state2 = store2.state;
    installModule(store2, state2, [], store2._modules.root, true);
    resetStoreState(store2, state2, hot);
  }
  function resetStoreState(store2, state2, hot) {
    var oldState = store2._state;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    forEachValue(wrappedGetters, function(fn, key) {
      computedObj[key] = partial(fn, store2);
      Object.defineProperty(store2.getters, key, {
        get: function() {
          return computedObj[key]();
        },
        enumerable: true
      });
    });
    store2._state = vue.reactive({
      data: state2
    });
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn('[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"');
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res2 = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res2)) {
        res2 = Promise.resolve(res2);
      }
      if (store2._devtoolHook) {
        return res2.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res2;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store3) {
      return rawGetter(local.state, local.getters, store3.state, store3.getters);
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state2, path) {
    return path.reduce(function(state3, key) {
      return state3[key];
    }, state2);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject$2(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    {
      assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app, store2) {
    setupDevtoolsPlugin({
      id: "org.vuejs.vuex",
      app,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [LABEL_VUEX_BINDINGS]
    }, function(api) {
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: "Vuex Mutations",
        color: COLOR_LIME_500
      });
      api.addTimelineLayer({
        id: ACTIONS_LAYER_ID,
        label: "Vuex Actions",
        color: COLOR_LIME_500
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      });
      api.on.getInspectorTree(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          if (payload.filter) {
            var nodes = [];
            flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
            payload.rootNodes = nodes;
          } else {
            payload.rootNodes = [
              formatStoreForInspectorTree(store2._modules.root, "")
            ];
          }
        }
      });
      api.on.getInspectorState(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          makeLocalGetters(store2, modulePath);
          payload.state = formatStoreForInspectorState(getStoreModule(store2._modules, modulePath), modulePath === "root" ? store2.getters : store2._makeLocalGettersCache, modulePath);
        }
      });
      api.on.editInspectorState(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          var path = payload.path;
          if (modulePath !== "root") {
            path = modulePath.split("/").filter(Boolean).concat(path);
          }
          store2._withCommit(function() {
            payload.set(store2._state.data, path, payload.state.value);
          });
        }
      });
      store2.subscribe(function(mutation, state2) {
        var data = {};
        if (mutation.payload) {
          data.payload = mutation.payload;
        }
        data.state = state2;
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: mutation.type,
            data
          }
        });
      });
      store2.subscribeAction({
        before: function(action, state2) {
          var data = {};
          if (action.payload) {
            data.payload = action.payload;
          }
          action._id = actionId++;
          action._time = Date.now();
          data.state = state2;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: action._time,
              title: action.type,
              groupId: action._id,
              subtitle: "start",
              data
            }
          });
        },
        after: function(action, state2) {
          var data = {};
          var duration = Date.now() - action._time;
          data.duration = {
            _custom: {
              type: "duration",
              display: duration + "ms",
              tooltip: "Action duration",
              value: duration
            }
          };
          if (action.payload) {
            data.payload = action.payload;
          }
          data.state = state2;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: action.type,
              groupId: action._id,
              subtitle: "end",
              data
            }
          });
        }
      });
    });
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(function(moduleName) {
        return formatStoreForInspectorTree(module._children[moduleName], path + moduleName + "/");
      })
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters2, path) {
    getters2 = path === "root" ? getters2 : getters2[path];
    var gettersKeys = Object.keys(getters2);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters2);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters2) {
    var result = {};
    Object.keys(getters2).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p2) {
          if (!target[p2]) {
            target[p2] = {
              _custom: {
                value: {},
                display: p2,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p2]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters2[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters2[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n2) {
      return n2;
    });
    return names.reduce(function(module, moduleName, i2) {
      var child = module[moduleName];
      if (!child) {
        throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
      }
      return i2 === names.length - 1 ? child : child._children;
    }, path === "root" ? moduleMap : moduleMap.root._children);
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn("[vuex] trying to unregister module '" + key + "', which is not registered");
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed");
          }
          return;
        }
        update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value, type) {
        assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
      });
    });
  }
  function makeAssertionMessage(path, key, type, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools2 = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._devtools = devtools2;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state2 = this._modules.root.state;
    installModule(this, state2, [], this._modules.root);
    resetStoreState(this, state2);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install(app, injectKey) {
    app.provide(injectKey || storeKey, this);
    app.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v2) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools");
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res2) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e);
          }
        }
        resolve(res2);
      }, function(error2) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error2);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e);
          }
        }
        reject(error2);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state2) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state2;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  var mapMutations = normalizeNamespace(function(namespace, mutations2) {
    var res2 = {};
    if (!isValidMap(mutations2)) {
      console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(mutations2).forEach(function(ref) {
      var key = ref.key;
      var val = ref.val;
      res2[key] = function mappedMutation() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var commit = this.$store.commit;
        if (namespace) {
          var module = getModuleByNamespace(this.$store, "mapMutations", namespace);
          if (!module) {
            return;
          }
          commit = module.context.commit;
        }
        return typeof val === "function" ? val.apply(this, [commit].concat(args)) : commit.apply(this.$store, [val].concat(args));
      };
    });
    return res2;
  });
  var mapGetters = normalizeNamespace(function(namespace, getters2) {
    var res2 = {};
    if (!isValidMap(getters2)) {
      console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(getters2).forEach(function(ref) {
      var key = ref.key;
      var val = ref.val;
      val = namespace + val;
      res2[key] = function mappedGetter() {
        if (namespace && !getModuleByNamespace(this.$store, "mapGetters", namespace)) {
          return;
        }
        if (!(val in this.$store.getters)) {
          console.error("[vuex] unknown getter: " + val);
          return;
        }
        return this.$store.getters[val];
      };
      res2[key].vuex = true;
    });
    return res2;
  });
  var mapActions = normalizeNamespace(function(namespace, actions2) {
    var res2 = {};
    if (!isValidMap(actions2)) {
      console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(actions2).forEach(function(ref) {
      var key = ref.key;
      var val = ref.val;
      res2[key] = function mappedAction() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var dispatch = this.$store.dispatch;
        if (namespace) {
          var module = getModuleByNamespace(this.$store, "mapActions", namespace);
          if (!module) {
            return;
          }
          dispatch = module.context.dispatch;
        }
        return typeof val === "function" ? val.apply(this, [dispatch].concat(args)) : dispatch.apply(this.$store, [val].concat(args));
      };
    });
    return res2;
  });
  function normalizeMap(map) {
    if (!isValidMap(map)) {
      return [];
    }
    return Array.isArray(map) ? map.map(function(key) {
      return { key, val: key };
    }) : Object.keys(map).map(function(key) {
      return { key, val: map[key] };
    });
  }
  function isValidMap(map) {
    return Array.isArray(map) || isObject$2(map);
  }
  function normalizeNamespace(fn) {
    return function(namespace, map) {
      if (typeof namespace !== "string") {
        map = namespace;
        namespace = "";
      } else if (namespace.charAt(namespace.length - 1) !== "/") {
        namespace += "/";
      }
      return fn(namespace, map);
    };
  }
  function getModuleByNamespace(store2, helper, namespace) {
    var module = store2._modulesNamespaceMap[namespace];
    if (!module) {
      console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
    }
    return module;
  }
  const _sfc_main$J = {
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
  function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      style: vue.normalizeStyle({ height: $data.statusBarHeight }),
      class: "uni-status-bar"
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 4);
  }
  var statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$I], ["__scopeId", "data-v-f9a87a8e"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
  const _sfc_main$I = {
    components: {
      statusBar
    },
    data() {
      return {
        gridList: [],
        current: 0,
        swiperDotIndex: 0
      };
    },
    computed: __spreadValues({}, mapGetters({
      hasLogin: "user/hasLogin"
    })),
    onLoad() {
      let gridList = [];
      for (var i2 = 0; i2 < 3; i2++) {
        gridList.push(this.$t("grid.visibleToAll"));
      }
      for (var i2 = 0; i2 < 3; i2++) {
        gridList.push(this.$t("grid.invisibleToTourists"));
      }
      for (var i2 = 0; i2 < 3; i2++) {
        gridList.push(this.$t("grid.adminVisible"));
      }
      this.gridList = gridList;
    },
    methods: {
      change(e) {
        uni.showToast({
          title: this.$t("grid.clickTip") + ` ${e.detail.index} ` + this.$t("grid.clickTipGrid"),
          icon: "none"
        });
      },
      onqueryload(data) {
      },
      changeSwiper(e) {
        this.current = e.detail.current;
      },
      clickItem(e) {
        this.swiperDotIndex = e;
      },
      clickBannerItem(item) {
        if (item.open_url) {
          uni.navigateTo({
            url: "/pages/common/webview/webview?url=" + item.open_url + "&title=" + item.title,
            success: (res2) => {
            },
            fail: () => {
            },
            complete: () => {
            }
          });
        }
      }
    }
  };
  function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_uni_swiper_dot = resolveEasycom(vue.resolveDynamicComponent("uni-swiper-dot"), __easycom_0$a);
    const _component_unicloud_db = resolveEasycom(vue.resolveDynamicComponent("unicloud-db"), __easycom_4$2);
    const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_2$3);
    const _component_uni_grid_item = resolveEasycom(vue.resolveDynamicComponent("uni-grid-item"), __easycom_3$3);
    const _component_uni_grid = resolveEasycom(vue.resolveDynamicComponent("uni-grid"), __easycom_4$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "warp" }, [
      vue.createVNode(_component_status_bar),
      vue.createCommentVNode(" banner "),
      vue.createVNode(_component_unicloud_db, {
        ref: "bannerdb",
        collection: "opendb-banner",
        field: "_id,bannerfile,open_url,title",
        onLoad: $options.onqueryload
      }, {
        default: vue.withCtx(({ data, loading, error: error2, options }) => [
          vue.createCommentVNode(" \u5F53\u65E0banner\u6570\u636E\u65F6\u663E\u793A\u5360\u4F4D\u56FE "),
          !(loading || data.length) ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 0,
            class: "banner-image",
            src: "/static/grid/empty.png",
            mode: "aspectFill",
            draggable: false
          })) : (vue.openBlock(), vue.createBlock(_component_uni_swiper_dot, {
            key: 1,
            class: "uni-swiper-dot-box",
            onClickItem: $options.clickItem,
            info: data,
            current: $data.current,
            field: "content"
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("swiper", {
                class: "swiper-box",
                onChange: _cache[0] || (_cache[0] = (...args) => $options.changeSwiper && $options.changeSwiper(...args)),
                current: $data.swiperDotIndex
              }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(data, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("swiper-item", {
                    key: item._id
                  }, [
                    vue.createElementVNode("view", {
                      class: "swiper-item",
                      onClick: ($event) => $options.clickBannerItem(item)
                    }, [
                      vue.createElementVNode("image", {
                        class: "banner-image",
                        src: item.bannerfile.url,
                        mode: "aspectFill",
                        draggable: false
                      }, null, 8, ["src"])
                    ], 8, ["onClick"])
                  ]);
                }), 128))
              ], 40, ["current"])
            ]),
            _: 2
          }, 1032, ["onClickItem", "info", "current"]))
        ]),
        _: 1
      }, 8, ["onLoad"]),
      vue.createCommentVNode(" \u5BAB\u683C "),
      vue.createVNode(_component_uni_section, {
        title: _ctx.$t("grid.grid"),
        style: { "margin": "0" },
        type: "line"
      }, null, 8, ["title"]),
      vue.createElementVNode("view", { class: "example-body" }, [
        vue.createVNode(_component_uni_grid, {
          column: 3,
          highlight: true,
          onChange: $options.change
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.gridList, (item, i2) => {
              return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                i2 < 3 || i2 > 2 && i2 < 6 && _ctx.hasLogin || i2 > 5 && _ctx.uniIDHasRole("admin") ? (vue.openBlock(), vue.createBlock(_component_uni_grid_item, {
                  index: i2,
                  key: i2
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("view", {
                      class: "grid-item-box",
                      style: { "background-color": "#fff" }
                    }, [
                      vue.createElementVNode("image", {
                        src: "/static/grid/c" + (i2 + 1) + ".png",
                        class: "image",
                        mode: "aspectFill"
                      }, null, 8, ["src"]),
                      vue.createElementVNode("text", { class: "text" }, vue.toDisplayString(item), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["index"])) : vue.createCommentVNode("v-if", true)
              ], 64);
            }), 256))
          ]),
          _: 1
        }, 8, ["onChange"])
      ])
    ]);
  }
  var PagesGridGrid = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$H], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/grid/grid.vue"]]);
  const _sfc_main$H = {
    name: "uni-agreements",
    computed: {
      agreements() {
        return getApp().globalData.config.about.agreements || [];
      }
    },
    methods: {
      navigateTo({ url, title }) {
        uni.navigateTo({
          url: "/pages/common/webview/webview?url=" + url + "&title=" + title,
          success: (res2) => {
          },
          fail: () => {
          },
          complete: () => {
          }
        });
      },
      hasAnd(agreements, index) {
        return agreements.length - 1 > index;
      },
      setAgree(e) {
        this.isAgree = !this.isAgree;
        this.$emit("setAgree", this.isAgree);
      }
    },
    created() {
      uni.$on("setAgreementsAgree", (state2) => {
        formatAppLog("log", "at components/uni-agreements/uni-agreements.vue:41", "setAgreementsAgree", state2);
        this.isAgree = state2;
        this.$emit("setAgree", state2);
      });
    },
    data() {
      return {
        isAgree: false
      };
    }
  };
  function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "root" }, [
      vue.createElementVNode("checkbox-group", {
        onChange: _cache[0] || (_cache[0] = (...args) => $options.setAgree && $options.setAgree(...args)),
        class: "checkbox-group"
      }, [
        vue.createElementVNode("checkbox", {
          checked: $data.isAgree,
          style: { "transform": "scale(0.7)" }
        }, null, 8, ["checked"]),
        vue.createElementVNode("text", null, vue.toDisplayString(_ctx.$t("common.agree")), 1)
      ], 32),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.agreements, (agreement, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "item",
          key: index
        }, [
          vue.createElementVNode("text", {
            class: "agreement",
            onClick: ($event) => $options.navigateTo(agreement)
          }, vue.toDisplayString(agreement.title), 9, ["onClick"]),
          $options.hasAnd($options.agreements, index) ? (vue.openBlock(), vue.createElementBlock("text", {
            key: 0,
            class: "hint"
          }, "&")) : vue.createCommentVNode("v-if", true)
        ]);
      }), 128))
    ]);
  }
  var __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$G], ["__scopeId", "data-v-3915d2f8"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/components/uni-agreements/uni-agreements.vue"]]);
  const accountLogin$1 = "Account";
  const SMSLogin$1 = "SMS";
  const wechatLogin$1 = "wechat";
  const appleLogin$1 = "Apple";
  const oneClickLogin$1 = "One click login";
  const QQLogin$1 = "QQ";
  const xiaomiLogin$1 = "Xiaomi";
  const getProviderFail$1 = "Failed to get service provider";
  const loginErr$1 = "Login service initialization error";
  const chooseOtherLogin$1 = "Click the third-party login";
  const weibo$1 = "weibo";
  const noAgree$1 = "You have not agreed to the privacy policy agreement";
  const gotIt$1 = "got it";
  var en$3 = {
    accountLogin: accountLogin$1,
    SMSLogin: SMSLogin$1,
    wechatLogin: wechatLogin$1,
    appleLogin: appleLogin$1,
    oneClickLogin: oneClickLogin$1,
    QQLogin: QQLogin$1,
    xiaomiLogin: xiaomiLogin$1,
    getProviderFail: getProviderFail$1,
    loginErr: loginErr$1,
    chooseOtherLogin: chooseOtherLogin$1,
    weibo: weibo$1,
    noAgree: noAgree$1,
    gotIt: gotIt$1
  };
  const accountLogin = "\u8D26\u53F7\u767B\u5F55";
  const SMSLogin = "\u77ED\u4FE1\u9A8C\u8BC1\u7801";
  const wechatLogin = "\u5FAE\u4FE1\u767B\u5F55";
  const appleLogin = "\u82F9\u679C\u767B\u5F55";
  const oneClickLogin = "\u4E00\u952E\u767B\u5F55";
  const QQLogin = "QQ\u767B\u5F55";
  const xiaomiLogin = "\u5C0F\u7C73\u767B\u5F55";
  const getProviderFail = "\u83B7\u53D6\u670D\u52A1\u4F9B\u5E94\u5546\u5931\u8D25";
  const loginErr = "\u767B\u5F55\u670D\u52A1\u521D\u59CB\u5316\u9519\u8BEF";
  const chooseOtherLogin = "\u70B9\u51FB\u4E86\u7B2C\u4E09\u65B9\u767B\u5F55";
  const weibo = "\u5FAE\u535A";
  const noAgree = "\u4F60\u672A\u540C\u610F\u9690\u79C1\u653F\u7B56\u534F\u8BAE";
  const gotIt = "\u77E5\u9053\u4E86";
  var zhHans$4 = {
    accountLogin,
    SMSLogin,
    wechatLogin,
    appleLogin,
    oneClickLogin,
    QQLogin,
    xiaomiLogin,
    getProviderFail,
    loginErr,
    chooseOtherLogin,
    weibo,
    noAgree,
    gotIt
  };
  var messages$4 = {
    en: en$3,
    "zh-Hans": zhHans$4
  };
  function loginSuccess(result) {
    uni.showToast({
      title: "\u767B\u5F55\u6210\u529F",
      icon: "none"
    });
    formatAppLog("log", "at pages/ucenter/login-page/common/loginSuccess.js:6", "\u767B\u5F55\u6210\u529F", result);
    var delta = 0;
    let pages = getCurrentPages();
    pages.forEach((page, index) => {
      pages[pages.length - index - 1].route.split("/");
      if (pages[pages.length - index - 1].route.split("/")[2] == "login-page") {
        delta++;
      }
    });
    uni.navigateBack({ delta });
  }
  const {
    t: t$3
  } = initVueI18n(messages$4);
  const db$7 = St.database();
  db$7.collection("uni-id-users");
  const _sfc_main$G = {
    computed: {
      loginConfig() {
        return getApp().globalData.config.router.login;
      },
      agreements() {
        return getApp().globalData.config.about.agreements || [];
      }
    },
    data() {
      return {
        servicesList: [
          {
            "id": "username",
            "text": t$3("accountLogin"),
            "logo": "/static/uni-quick-login/user.png",
            "path": "/pages/ucenter/login-page/pwd-login/pwd-login"
          },
          {
            "id": "smsCode",
            "text": t$3("SMSLogin"),
            "logo": "/static/uni-quick-login/sms.png",
            "path": "/pages/ucenter/login-page/index/index?type=smsCode"
          },
          {
            "id": "weixin",
            "text": t$3("wechatLogin"),
            "logo": "/static/uni-quick-login/wechat.png"
          },
          {
            "id": "apple",
            "text": t$3("appleLogin"),
            "logo": "/static/uni-quick-login/apple.png"
          },
          {
            "id": "univerify",
            "text": t$3("oneClickLogin"),
            "logo": "/static/uni-quick-login/univerify.png"
          },
          {
            "id": "qq",
            "text": t$3("QQLogin"),
            "logo": "/static/uni-quick-login/univerify.png"
          },
          {
            "id": "xiaomi",
            "text": t$3("xiaomiLogin"),
            "logo": "/static/uni-quick-login/univerify.png"
          },
          {
            "id": "sinaweibo",
            "text": t$3("weibo"),
            "logo": "/static/uni-quick-login/univerify.png"
          }
        ],
        config: {},
        univerifyStyle: {
          "fullScreen": true,
          "backgroundColor": "#ffffff",
          "buttons": {
            "iconWidth": "45px",
            "list": []
          },
          "privacyTerms": {
            "defaultCheckBoxState": false,
            "textColor": "#BBBBBB",
            "termsColor": "#5496E3",
            "prefix": "\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F",
            "suffix": "\u5E76\u4F7F\u7528\u672C\u673A\u53F7\u7801\u767B\u5F55",
            "privacyItems": []
          }
        }
      };
    },
    watch: {
      agree(agree) {
        this.univerifyStyle.privacyTerms.defaultCheckBoxState = agree;
      }
    },
    props: {
      agree: {
        type: Boolean,
        default() {
          return false;
        }
      }
    },
    async created() {
      let servicesList = this.servicesList;
      servicesList = servicesList.filter((item) => this.loginConfig.includes(item.id));
      if (this.loginConfig.includes("univerify")) {
        this.univerifyStyle.privacyTerms.privacyItems = this.agreements;
        servicesList.forEach(({
          id,
          logo,
          path
        }) => {
          if (id != "univerify") {
            this.univerifyStyle.buttons.list.push({
              "iconPath": logo,
              "provider": id
            });
          }
        });
      }
      formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:140", servicesList);
      if (this.getRoute(1) == "/pages/ucenter/login-page/index/index" && ["weixin", "apple"].includes(this.loginConfig[0])) {
        servicesList = servicesList.filter((item) => item.id != this.loginConfig[0]);
      }
      this.servicesList = servicesList.filter((item) => {
        let path = item.path ? item.path.split("?")[0] : "";
        return path != this.getRoute(1);
      });
      formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:153", "servicesList", servicesList, this.servicesList);
    },
    mounted() {
    },
    methods: __spreadProps(__spreadValues({}, mapMutations({
      setUserInfo: "user/login"
    })), {
      getRoute(n2 = 0) {
        let pages = getCurrentPages();
        if (n2 > pages.length) {
          return "";
        }
        return "/" + pages[pages.length - n2].route;
      },
      to(path) {
        formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:169", "\u6BD4\u8F83", this.getRoute(1), this.getRoute(2), path);
        if (this.getRoute(1) == path.split("?")[0] && this.getRoute(1) == "/pages/ucenter/login-page/index/index") {
          let type = path.split("?")[1].split("=")[1];
          uni.$emit("setLoginType", type);
        } else if (this.getRoute(2) == path) {
          uni.navigateBack();
        } else if (this.getRoute(1) != path) {
          uni.navigateTo({
            url: path,
            animationType: "slide-in-left"
          });
        } else {
          formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:182", "\u51FA\u4E4E\u610F\u6599\u7684\u60C5\u51B5,path\uFF1A" + path);
        }
      },
      login_before(type, navigateBack = true) {
        formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:186", type);
        if (!this.agree && type != "univerify") {
          return uni.showToast({
            title: t$3("noAgree"),
            icon: "none"
          });
        }
        uni.showLoading({ mask: true });
        if (type == "univerify" && uni.getUniverifyManager) {
          let closeUniverify = function() {
            uni.hideLoading();
            univerifyManager.close();
            univerifyManager.offButtonsClick(onButtonsClickFn);
          };
          let univerifyManager = uni.getUniverifyManager();
          formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:196", "\u662F\u65B0\u7248");
          let onButtonsClickFn = async (res2) => {
            formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:198", "\u70B9\u51FB\u4E86\u7B2C\u4E09\u65B9\u767B\u5F55\uFF0Cprovider\uFF1A", res2, res2.provider, this.univerifyStyle.buttons.list);
            let agree = (await uni.getCheckBoxState())[1].state;
            formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:201", "agree", agree);
            uni.$emit("setAgreementsAgree", agree);
            let {
              path
            } = this.univerifyStyle.buttons.list[res2.index];
            formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:206", "path", path, this.getRoute(1));
            if (path) {
              this.to(path);
              closeUniverify();
            } else {
              if (agree) {
                closeUniverify();
                setTimeout(() => {
                  formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:214", "login_before");
                  this.login_before(res2.provider);
                }, 500);
              } else {
                formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:218", t$3("noAgree"));
                uni.showToast({
                  title: t$3("noAgree"),
                  icon: "none"
                });
              }
            }
          };
          univerifyManager.onButtonsClick(onButtonsClickFn);
          return univerifyManager.login({
            "univerifyStyle": this.univerifyStyle,
            success: (res2) => {
              formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:238", "login success", res2);
              this.login(res2.authResult, "univerify");
            },
            fail(err) {
              uni.showToast({
                title: JSON.stringify(err),
                icon: "none"
              });
            },
            complete(e) {
              uni.hideLoading();
              univerifyManager.offButtonsClick(onButtonsClickFn);
            }
          });
        }
        uni.login({
          "provider": type,
          "onlyAuthorize": true,
          "univerifyStyle": this.univerifyStyle,
          complete: (e) => {
            formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:259", e);
            uni.hideLoading();
          },
          success: async (e) => {
            formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:263", e);
            if (type == "apple") {
              let res2 = await this.getUserInfo({
                provider: "apple"
              });
              Object.assign(e.authResult, res2.userInfo);
            }
            this.login(type == "weixin" ? e.code : e.authResult, type);
          },
          fail: async (err) => {
            formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:273", err);
            if (type == "univerify" && !uni.getUniverifyManager) {
              if (err.metadata && err.metadata.error_data) {
                uni.showToast({
                  title: t$3("oneClickLogin") + ":" + err.metadata.error_data,
                  icon: "none"
                });
              }
              if (err.errMsg) {
                uni.showToast({
                  title: t$3("oneClickLogin") + ":" + err.errMsg,
                  icon: "none"
                });
              }
              switch (err.errCode) {
                case 30002:
                  formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:290", "\u5728\u4E00\u952E\u767B\u5F55\u754C\u9762\uFF0C\u70B9\u51FB\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F");
                  break;
                case 30003:
                  formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:293", "\u5173\u95ED\u4E86\u767B\u5F55");
                  if (navigateBack) {
                    uni.navigateBack();
                  }
                  break;
                case 30006:
                  uni.showModal({
                    title: t$3("loginErr"),
                    content: err.metadata.error_data,
                    showCancel: false,
                    confirmText: t$3("gotIt")
                  });
                  break;
                case "30008":
                  formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:307", "\u70B9\u51FB\u4E86\u7B2C\u4E09\u65B9\u767B\u5F55\uFF0Cprovider\uFF1A", err.provider);
                  let agree = (await uni.getCheckBoxState())[1].state;
                  formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:310", "agree", agree);
                  uni.$emit("setAgreementsAgree", agree);
                  let {
                    path
                  } = this.univerifyStyle.buttons.list[res.index];
                  formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:315", "path", path);
                  if (path) {
                    this.to(path);
                  } else {
                    setTimeout(() => {
                      formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:320", "agree", this.agree);
                      this.login_before(err.provider);
                    }, 500);
                  }
                  break;
                default:
                  formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:326", err);
                  break;
              }
            }
          }
        });
      },
      login(params, type) {
        formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:335", {
          params,
          type
        });
        let action = "loginBy" + type.trim().toLowerCase().replace(type[0], type[0].toUpperCase());
        St.callFunction({
          name: "uni-id-cf",
          data: {
            action,
            params
          },
          success: async ({
            result
          }) => {
            formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:349", "login-result", result);
            if (result.code === 0) {
              delete result.userInfo.token;
              if (result.type == "register") {
                result.userInfo._id = result.uid;
              }
              this.setUserInfo(result.userInfo);
              loginSuccess(result);
            } else {
              uni.showModal({
                content: result.msg,
                showCancel: false
              });
            }
          },
          complete: (e) => {
            formatAppLog("log", "at components/uni-quick-login/uni-quick-login.vue:370", e);
            if (type == "univerify") {
              uni.closeAuthView();
            }
            uni.hideLoading();
          }
        });
      },
      doUserProfileNext() {
        loginSuccess();
      },
      async getUserInfo(e) {
        return new Promise((resolve, reject) => {
          uni.getUserInfo(__spreadProps(__spreadValues({}, e), {
            success: (res2) => {
              resolve(res2);
            },
            fail: (err) => {
              uni.showModal({
                content: JSON.stringify(err),
                showCancel: false
              });
              reject(err);
            }
          }));
        });
      }
    })
  };
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "quick-login-box" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.servicesList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "item",
            key: index,
            onClick: ($event) => item.path ? $options.to(item.path) : $options.login_before(item.id, false)
          }, [
            vue.createElementVNode("image", {
              class: "logo",
              src: item.logo,
              mode: "widthFix"
            }, null, 8, ["src"]),
            vue.createElementVNode("text", { class: "login-title" }, vue.toDisplayString(item.text), 1)
          ], 8, ["onClick"]);
        }), 128))
      ])
    ]);
  }
  var __easycom_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$F], ["__scopeId", "data-v-d69f7544"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/components/uni-quick-login/uni-quick-login.vue"]]);
  let currentWebview;
  const _sfc_main$F = {
    data() {
      return {
        type: "",
        phone: "",
        agree: false
      };
    },
    computed: {
      loginConfig() {
        return getApp().globalData.config.router.login;
      },
      isPhone() {
        return /^1\d{10}$/.test(this.phone);
      },
      imgSrc() {
        return "/static/login-index/" + this.type + ".png";
      }
    },
    onLoad(e) {
      this.type = e.type;
      if (this.type == "univerify") {
        const pages = getCurrentPages();
        currentWebview = pages[pages.length - 1].$getAppWebview();
        currentWebview.setStyle({
          "top": "2000px"
        });
      }
      uni.$on("setLoginType", (type) => {
        this.type = type;
      });
    },
    onUnload() {
      uni.$off("setLoginType");
    },
    onReady() {
      if (this.type == "univerify") {
        this.type == this.loginConfig[1];
        setTimeout(() => {
          this.$refs.uniQuickLogin.login_before("univerify");
        }, 100);
        setTimeout(() => {
          currentWebview.setStyle({
            titleNView: {
              autoBackButton: true,
              backgroundColor: "#FFFFFF"
            }
          });
          currentWebview.setStyle({
            "top": "0"
          });
        }, 1500);
      }
    },
    methods: {
      quickLogin() {
        this.$refs.uniQuickLogin.login_before(this.type);
      },
      sendShortMsg() {
        if (!this.agree) {
          return uni.showToast({
            title: this.$t("common").noAgree,
            icon: "none"
          });
        }
        uni.showLoading();
        uni.navigateTo({
          url: "/pages/ucenter/login-page/phone-code/phone-code?phoneNumber=" + this.phone,
          complete: () => {
            uni.hideLoading();
          }
        });
      },
      toPwdLogin() {
        uni.navigateTo({
          url: "../pwd-login/pwd-login"
        });
      }
    }
  };
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_agreements = resolveEasycom(vue.resolveDynamicComponent("uni-agreements"), __easycom_2$2);
    const _component_uni_quick_login = resolveEasycom(vue.resolveDynamicComponent("uni-quick-login"), __easycom_3$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createCommentVNode(" \u9876\u90E8\u6587\u5B57 "),
      vue.createElementVNode("text", { class: "title" }, vue.toDisplayString(_ctx.$t("login.phoneLogin")), 1),
      vue.createCommentVNode(" \u767B\u5F55\u6846 "),
      ["apple", "weixin"].includes($data.type) ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "quickLogin"
      }, [
        vue.createElementVNode("image", {
          onClick: _cache[0] || (_cache[0] = (...args) => $options.quickLogin && $options.quickLogin(...args)),
          src: $options.imgSrc,
          mode: "widthFix",
          class: "quickLoginBtn"
        }, null, 8, ["src"]),
        vue.createVNode(_component_uni_agreements, {
          onSetAgree: _cache[1] || (_cache[1] = ($event) => $data.agree = $event)
        })
      ])) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
        vue.withDirectives(vue.createElementVNode("input", {
          type: "number",
          class: "input-box",
          inputBorder: false,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.phone = $event),
          maxlength: "11",
          placeholder: _ctx.$t("common.phonePlaceholder")
        }, null, 8, ["placeholder"]), [
          [vue.vModelText, $data.phone]
        ]),
        vue.createVNode(_component_uni_agreements, {
          onSetAgree: _cache[3] || (_cache[3] = ($event) => $data.agree = $event)
        }),
        vue.createElementVNode("button", {
          class: "get-code",
          disabled: !$options.isPhone,
          type: $options.isPhone ? "primary" : "default",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.sendShortMsg && $options.sendShortMsg(...args))
        }, vue.toDisplayString(_ctx.$t("login.getVerifyCode")), 9, ["disabled", "type"]),
        vue.createElementVNode("text", { class: "tip" }, vue.toDisplayString(_ctx.$t("login.phoneLoginTip")), 1)
      ], 64)),
      vue.createCommentVNode(" \u5FEB\u6377\u767B\u5F55\u6309\u94AE\u5F39\u7A97 "),
      vue.createVNode(_component_uni_quick_login, {
        agree: $data.agree,
        ref: "uniQuickLogin"
      }, null, 8, ["agree"])
    ]);
  }
  var PagesUcenterLoginPageIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$E], ["__scopeId", "data-v-6eca83d2"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/ucenter/login-page/index/index.vue"]]);
  var icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const getVal$1 = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$E = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v2) => v2.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal$1(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  var __easycom_0$9 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$D], ["__scopeId", "data-v-a2e81f6e"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const getVal = (val) => typeof val === "number" ? val + "px" : val;
  const _sfc_main$D = {
    name: "UniNavBar",
    components: {
      statusBar
    },
    emits: ["clickLeft", "clickRight", "clickTitle"],
    props: {
      dark: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      leftText: {
        type: String,
        default: ""
      },
      rightText: {
        type: String,
        default: ""
      },
      leftIcon: {
        type: String,
        default: ""
      },
      rightIcon: {
        type: String,
        default: ""
      },
      fixed: {
        type: [Boolean, String],
        default: false
      },
      color: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      statusBar: {
        type: [Boolean, String],
        default: false
      },
      shadow: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      height: {
        type: [Number, String],
        default: 44
      },
      leftWidth: {
        type: [Number, String],
        default: 60
      },
      rightWidth: {
        type: [Number, String],
        default: 60
      }
    },
    computed: {
      themeBgColor() {
        if (this.dark) {
          if (this.backgroundColor) {
            return this.backgroundColor;
          } else {
            return this.dark ? "#333" : "#FFF";
          }
        }
        return this.backgroundColor || "#FFF";
      },
      themeColor() {
        if (this.dark) {
          if (this.color) {
            return this.color;
          } else {
            return this.dark ? "#fff" : "#333";
          }
        }
        return this.color || "#333";
      },
      navbarHeight() {
        return getVal(this.height);
      },
      leftIconWidth() {
        return getVal(this.leftWidth);
      },
      rightIconWidth() {
        return getVal(this.rightWidth);
      }
    },
    mounted() {
      if (uni.report && this.title !== "") {
        uni.report("title", this.title);
      }
    },
    methods: {
      onClickLeft() {
        this.$emit("clickLeft");
      },
      onClickRight() {
        this.$emit("clickRight");
      },
      onClickTitle() {
        this.$emit("clickTitle");
      }
    }
  };
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-navbar", { "uni-dark": $props.dark }])
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass([{ "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }, "uni-navbar__content"]),
        style: vue.normalizeStyle({ "background-color": $options.themeBgColor })
      }, [
        $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          style: vue.normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
          class: "uni-navbar__header"
        }, [
          vue.createElementVNode("view", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
            class: "uni-navbar__header-btns uni-navbar__header-btns-left",
            style: vue.normalizeStyle({ width: $options.leftIconWidth })
          }, [
            vue.renderSlot(_ctx.$slots, "left", {}, () => [
              $props.leftIcon.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-navbar__content_view"
              }, [
                vue.createVNode(_component_uni_icons, {
                  color: $options.themeColor,
                  type: $props.leftIcon,
                  size: "20"
                }, null, 8, ["color", "type"])
              ])) : vue.createCommentVNode("v-if", true),
              $props.leftText.length ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: vue.normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
              }, [
                vue.createElementVNode("text", {
                  style: vue.normalizeStyle({ color: $options.themeColor, fontSize: "12px" })
                }, vue.toDisplayString($props.leftText), 5)
              ], 2)) : vue.createCommentVNode("v-if", true)
            ], true)
          ], 4),
          vue.createElementVNode("view", {
            class: "uni-navbar__header-container",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              $props.title.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-navbar__header-container-inner"
              }, [
                vue.createElementVNode("text", {
                  class: "uni-nav-bar-text uni-ellipsis-1",
                  style: vue.normalizeStyle({ color: $options.themeColor })
                }, vue.toDisplayString($props.title), 5)
              ])) : vue.createCommentVNode("v-if", true)
            ], true)
          ]),
          vue.createElementVNode("view", {
            onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
            class: "uni-navbar__header-btns uni-navbar__header-btns-right",
            style: vue.normalizeStyle({ width: $options.rightIconWidth })
          }, [
            vue.renderSlot(_ctx.$slots, "right", {}, () => [
              $props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                vue.createVNode(_component_uni_icons, {
                  color: $options.themeColor,
                  type: $props.rightIcon,
                  size: "22"
                }, null, 8, ["color", "type"])
              ])) : vue.createCommentVNode("v-if", true),
              $props.rightText.length && !$props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-navbar-btn-text"
              }, [
                vue.createElementVNode("text", {
                  class: "uni-nav-bar-right-text",
                  style: vue.normalizeStyle({ color: $options.themeColor })
                }, vue.toDisplayString($props.rightText), 5)
              ])) : vue.createCommentVNode("v-if", true)
            ], true)
          ], 4)
        ], 4)
      ], 6),
      $props.fixed ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-navbar__placeholder"
      }, [
        $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          class: "uni-navbar__placeholder-view",
          style: vue.normalizeStyle({ height: $options.navbarHeight })
        }, null, 4)
      ])) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  var __easycom_0$8 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$C], ["__scopeId", "data-v-6bda1a90"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue"]]);
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
  function formatDate(date, format2 = "yyyy/MM/dd hh:mm:ss") {
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
    let result = format2;
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
    format: format2 = "yyyy/MM/dd hh:mm:ss"
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
      return formatDate(date, format2);
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
  const _sfc_main$C = {
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
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", null, vue.toDisplayString($options.dateShow), 1);
  }
  var __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$B], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.vue"]]);
  const _sfc_main$B = {
    name: "UniBadge",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: "error"
      },
      inverted: {
        type: Boolean,
        default: false
      },
      isDot: {
        type: Boolean,
        default: false
      },
      maxNum: {
        type: Number,
        default: 99
      },
      absolute: {
        type: String,
        default: ""
      },
      offset: {
        type: Array,
        default() {
          return [0, 0];
        }
      },
      text: {
        type: [String, Number],
        default: ""
      },
      size: {
        type: String,
        default: "small"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      width() {
        return String(this.text).length * 8 + 12;
      },
      classNames() {
        const {
          inverted,
          type,
          size,
          absolute
        } = this;
        return [
          inverted ? "uni-badge--" + type + "-inverted" : "",
          "uni-badge--" + type,
          "uni-badge--" + size,
          absolute ? "uni-badge--absolute" : ""
        ].join(" ");
      },
      positionStyle() {
        if (!this.absolute)
          return {};
        let w2 = this.width / 2, h2 = 10;
        if (this.isDot) {
          w2 = 5;
          h2 = 5;
        }
        const x2 = `${-w2 + this.offset[0]}px`;
        const y2 = `${-h2 + this.offset[1]}px`;
        const whiteList = {
          rightTop: {
            right: x2,
            top: y2
          },
          rightBottom: {
            right: x2,
            bottom: y2
          },
          leftBottom: {
            left: x2,
            bottom: y2
          },
          leftTop: {
            left: x2,
            top: y2
          }
        };
        const match = whiteList[this.absolute];
        return match ? match : whiteList["rightTop"];
      },
      badgeWidth() {
        return {
          width: `${this.width}px`
        };
      },
      dotStyle() {
        if (!this.isDot)
          return {};
        return {
          width: "10px",
          height: "10px",
          borderRadius: "10px"
        };
      },
      displayValue() {
        const {
          isDot,
          text,
          maxNum
        } = this;
        return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-badge--x" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.text ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 0,
        class: vue.normalizeClass([$options.classNames, "uni-badge"]),
        style: vue.normalizeStyle([$options.badgeWidth, $options.positionStyle, $props.customStyle, $options.dotStyle]),
        onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
      }, vue.toDisplayString($options.displayValue), 7)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$A], ["__scopeId", "data-v-7c66581c"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
  const _sfc_main$A = {
    name: "UniListItem",
    emits: ["click", "switchChange"],
    props: {
      direction: {
        type: String,
        default: "row"
      },
      title: {
        type: String,
        default: ""
      },
      note: {
        type: String,
        default: ""
      },
      ellipsis: {
        type: [Number, String],
        default: 0
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      clickable: {
        type: Boolean,
        default: false
      },
      showArrow: {
        type: [Boolean, String],
        default: false
      },
      link: {
        type: [Boolean, String],
        default: false
      },
      to: {
        type: String,
        default: ""
      },
      showBadge: {
        type: [Boolean, String],
        default: false
      },
      showSwitch: {
        type: [Boolean, String],
        default: false
      },
      switchChecked: {
        type: [Boolean, String],
        default: false
      },
      badgeText: {
        type: String,
        default: ""
      },
      badgeType: {
        type: String,
        default: "success"
      },
      rightText: {
        type: String,
        default: ""
      },
      thumb: {
        type: String,
        default: ""
      },
      thumbSize: {
        type: String,
        default: "base"
      },
      showExtraIcon: {
        type: [Boolean, String],
        default: false
      },
      extraIcon: {
        type: Object,
        default() {
          return {
            type: "contact",
            color: "#000000",
            size: 20
          };
        }
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        isFirstChild: false
      };
    },
    mounted() {
      this.list = this.getForm();
      if (this.list) {
        if (!this.list.firstChildAppend) {
          this.list.firstChildAppend = true;
          this.isFirstChild = true;
        }
      }
    },
    methods: {
      getForm(name = "uniList") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onClick() {
        if (this.to !== "") {
          this.openPage();
          return;
        }
        if (this.clickable || this.link) {
          this.$emit("click", {
            data: {}
          });
        }
      },
      onSwitchChange(e) {
        this.$emit("switchChange", e.detail);
      },
      openPage() {
        if (["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(this.link) !== -1) {
          this.pageApi(this.link);
        } else {
          this.pageApi("navigateTo");
        }
      },
      pageApi(api) {
        let callback = {
          url: this.to,
          success: (res2) => {
            this.$emit("click", {
              data: res2
            });
          },
          fail: (err) => {
            this.$emit("click", {
              data: err
            });
          }
        };
        switch (api) {
          case "navigateTo":
            uni.navigateTo(callback);
            break;
          case "redirectTo":
            uni.redirectTo(callback);
            break;
          case "reLaunch":
            uni.reLaunch(callback);
            break;
          case "switchTab":
            uni.switchTab(callback);
            break;
          default:
            uni.navigateTo(callback);
        }
      }
    }
  };
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
    const _component_uni_badge = resolveEasycom(vue.resolveDynamicComponent("uni-badge"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass([{ "uni-list-item--disabled": $props.disabled }, "uni-list-item"]),
      "hover-class": !$props.clickable && !$props.link || $props.disabled || $props.showSwitch ? "" : "uni-list-item--hover",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.isFirstChild ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["border--left", { "uni-list--border": $props.border }])
      }, null, 2)) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-list-item__container", { "container--right": $props.showArrow || $props.link, "flex--direction": $props.direction === "column" }])
      }, [
        vue.renderSlot(_ctx.$slots, "header", {}, () => [
          vue.createElementVNode("view", { class: "uni-list-item__header" }, [
            $props.thumb ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "uni-list-item__icon"
            }, [
              vue.createElementVNode("image", {
                src: $props.thumb,
                class: vue.normalizeClass(["uni-list-item__icon-img", ["uni-list--" + $props.thumbSize]])
              }, null, 10, ["src"])
            ])) : $props.showExtraIcon ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "uni-list-item__icon"
            }, [
              vue.createVNode(_component_uni_icons, {
                color: $props.extraIcon.color,
                size: $props.extraIcon.size,
                type: $props.extraIcon.type
              }, null, 8, ["color", "size", "type"])
            ])) : vue.createCommentVNode("v-if", true)
          ])
        ], true),
        vue.renderSlot(_ctx.$slots, "body", {}, () => [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["uni-list-item__content", { "uni-list-item__content--center": $props.thumb || $props.showExtraIcon || $props.showBadge || $props.showSwitch }])
          }, [
            $props.title ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: vue.normalizeClass(["uni-list-item__content-title", [$props.ellipsis !== 0 && $props.ellipsis <= 2 ? "uni-ellipsis-" + $props.ellipsis : ""]])
            }, vue.toDisplayString($props.title), 3)) : vue.createCommentVNode("v-if", true),
            $props.note ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 1,
              class: "uni-list-item__content-note"
            }, vue.toDisplayString($props.note), 1)) : vue.createCommentVNode("v-if", true)
          ], 2)
        ], true),
        vue.renderSlot(_ctx.$slots, "footer", {}, () => [
          $props.rightText || $props.showBadge || $props.showSwitch ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: vue.normalizeClass(["uni-list-item__extra", { "flex--justify": $props.direction === "column" }])
          }, [
            $props.rightText ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "uni-list-item__extra-text"
            }, vue.toDisplayString($props.rightText), 1)) : vue.createCommentVNode("v-if", true),
            $props.showBadge ? (vue.openBlock(), vue.createBlock(_component_uni_badge, {
              key: 1,
              type: $props.badgeType,
              text: $props.badgeText
            }, null, 8, ["type", "text"])) : vue.createCommentVNode("v-if", true),
            $props.showSwitch ? (vue.openBlock(), vue.createElementBlock("switch", {
              key: 2,
              disabled: $props.disabled,
              checked: $props.switchChecked,
              onChange: _cache[0] || (_cache[0] = (...args) => $options.onSwitchChange && $options.onSwitchChange(...args))
            }, null, 40, ["disabled", "checked"])) : vue.createCommentVNode("v-if", true)
          ], 2)) : vue.createCommentVNode("v-if", true)
        ], true)
      ], 2),
      $props.showArrow || $props.link ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
        key: 1,
        size: 16,
        class: "uni-icon-wrapper",
        color: "#bbb",
        type: "arrowright"
      })) : vue.createCommentVNode("v-if", true)
    ], 10, ["hover-class"]);
  }
  var __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$z], ["__scopeId", "data-v-296a3d7e"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue"]]);
  const _sfc_main$z = {
    name: "uniList",
    "mp-weixin": {
      options: {
        multipleSlots: false
      }
    },
    props: {
      enableBackToTop: {
        type: [Boolean, String],
        default: false
      },
      scrollY: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    created() {
      this.firstChildAppend = false;
    },
    methods: {
      loadMore(e) {
        this.$emit("scrolltolower");
      }
    }
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-list uni-border-top-bottom" }, [
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-list--border-top"
      })) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-list--border-bottom"
      })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$y], ["__scopeId", "data-v-5009d455"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-list/components/uni-list/uni-list.vue"]]);
  var nvMask, nvImageMenu;
  class NvImageMenu {
    constructor(arg) {
      this.isShow = false;
    }
    show({
      list,
      cancelText
    }, callback) {
      if (!list) {
        list = [{
          "img": "/static/sharemenu/wechatfriend.png",
          "text": "\u56FE\u6807\u6587\u5B57"
        }];
      }
      var screenWidth = plus.screen.resolutionWidth;
      var margin = 20, iconWidth = 60, icontextSpace = 5, textHeight = 12;
      var left1 = margin / 360 * screenWidth;
      var iconSpace = (screenWidth - left1 * 2 - iconWidth * 4) / 3;
      if (iconSpace <= 5) {
        margin = 15;
        iconWidth = 40;
        left1 = margin / 360 * screenWidth;
        iconSpace = (screenWidth - left1 * 2 - iconWidth * 4) / 3;
      }
      var left2 = left1 + iconWidth + iconSpace;
      var left3 = left1 + (iconWidth + iconSpace) * 2;
      var left4 = left1 + (iconWidth + iconSpace) * 3;
      var top1 = left1;
      var top2 = top1 + iconWidth + icontextSpace + textHeight + left1;
      const TOP = {
        top1,
        top2
      }, LEFT = {
        left1,
        left2,
        left3,
        left4
      };
      nvMask = new plus.nativeObj.View("nvMask", {
        top: "0px",
        left: "0px",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.2)"
      });
      nvImageMenu = new plus.nativeObj.View("nvImageMenu", {
        bottom: "0px",
        left: "0px",
        height: (iconWidth + textHeight + 2 * margin) * Math.ceil(list.length / 4) + 44 + "px",
        width: "100%",
        backgroundColor: "rgb(255,255,255)"
      });
      nvMask.addEventListener("click", () => {
        this.hide();
        callback({
          event: "clickMask"
        });
      });
      let myList = [];
      list.forEach((item, i2) => {
        myList.push({
          tag: "img",
          src: item.img,
          position: {
            top: TOP["top" + (parseInt(i2 / 4) + 1)],
            left: LEFT["left" + (1 + i2 % 4)],
            width: iconWidth,
            height: iconWidth
          }
        });
        myList.push({
          tag: "font",
          text: item.text,
          textStyles: {
            size: textHeight
          },
          position: {
            top: TOP["top" + (parseInt(i2 / 4) + 1)] + iconWidth + icontextSpace,
            left: LEFT["left" + (1 + i2 % 4)],
            width: iconWidth,
            height: textHeight
          }
        });
      });
      nvImageMenu.draw([
        {
          tag: "rect",
          color: "#e7e7e7",
          position: {
            top: "0px",
            height: "1px"
          }
        },
        {
          tag: "font",
          text: cancelText,
          textStyles: {
            size: "14px"
          },
          position: {
            bottom: "0px",
            height: "44px"
          }
        },
        {
          tag: "rect",
          color: "#e7e7e7",
          position: {
            bottom: "45px",
            height: "1px"
          }
        },
        ...myList
      ]);
      nvMask.show();
      nvImageMenu.show();
      this.isShow = true;
      nvImageMenu.addEventListener("click", (e) => {
        if (e.screenY > plus.screen.resolutionHeight - 44) {
          this.hide();
        } else if (e.clientX < 5 || e.clientX > screenWidth - 5 || e.clientY < 5)
          ;
        else {
          var iClickIndex = -1;
          var iRow = e.clientY < top2 - left1 / 2 ? 0 : 1;
          var iCol = -1;
          if (e.clientX < left2 - iconSpace / 2) {
            iCol = 0;
          } else if (e.clientX < left3 - iconSpace / 2) {
            iCol = 1;
          } else if (e.clientX < left4 - iconSpace / 2) {
            iCol = 2;
          } else {
            iCol = 3;
          }
          if (iRow == 0) {
            iClickIndex = iCol;
          } else {
            iClickIndex = iCol + 4;
          }
          callback({
            event: "clickMenu",
            index: iClickIndex
          });
        }
      });
    }
    hide() {
      if (this.isShow) {
        nvMask.hide();
        nvImageMenu.hide();
        this.isShow = false;
      }
    }
  }
  class UniShare extends NvImageMenu {
    constructor(arg) {
      super();
      this.isShow = super.isShow;
    }
    async show(param, callback) {
      var menus = [];
      plus.share.getServices((services) => {
        services = services.filter((item) => item.nativeClient);
        let servicesList = services.map((e) => e.id);
        param.menus.forEach((item) => {
          if (servicesList.includes(item.share.provider) || typeof item.share == "string") {
            menus.push(item);
          }
        });
        super.show({
          list: menus,
          cancelText: param.cancelText
        }, (e) => {
          callback(e);
          if (e.event == "clickMenu") {
            if (typeof menus[e.index]["share"] == "string") {
              this[menus[e.index]["share"]](param);
            } else {
              uni.share(__spreadProps(__spreadValues(__spreadValues({}, param.content), menus[e.index].share), {
                success: (res2) => {
                  formatAppLog("log", "at uni_modules/uni-share/js_sdk/uni-share.js:30", "success:" + JSON.stringify(res2));
                  super.hide();
                },
                fail: function(err) {
                  formatAppLog("log", "at uni_modules/uni-share/js_sdk/uni-share.js:34", "fail:" + JSON.stringify(err));
                  uni.showModal({
                    content: JSON.stringify(err),
                    showCancel: false,
                    confirmText: "\u77E5\u9053\u4E86"
                  });
                }
              }));
            }
          }
        });
      }, (err) => {
        uni.showModal({
          title: "\u83B7\u53D6\u670D\u52A1\u4F9B\u5E94\u5546\u5931\u8D25\uFF1A" + JSON.stringify(err),
          showCancel: false,
          confirmText: "\u77E5\u9053\u4E86"
        });
        formatAppLog("error", "at uni_modules/uni-share/js_sdk/uni-share.js:51", "\u83B7\u53D6\u670D\u52A1\u4F9B\u5E94\u5546\u5931\u8D25\uFF1A" + JSON.stringify(err));
      });
    }
    hide() {
      super.hide();
    }
    copyurl(param) {
      formatAppLog("log", "at uni_modules/uni-share/js_sdk/uni-share.js:58", "copyurl", param);
      uni.setClipboardData({
        data: param.content.href,
        success: () => {
          formatAppLog("log", "at uni_modules/uni-share/js_sdk/uni-share.js:62", "success");
          uni.hideToast();
          uni.showToast({
            title: "\u590D\u5236\u6210\u529F",
            icon: "none"
          });
          super.hide();
        },
        fail: (err) => {
          uni.showModal({
            content: JSON.stringify(err),
            showCancel: false
          });
        }
      });
    }
    shareSystem(param) {
      formatAppLog("log", "at uni_modules/uni-share/js_sdk/uni-share.js:80", "shareSystem", param);
      plus.share.sendWithSystem({
        type: "text",
        content: param.content.title + param.content.summary || "",
        href: param.content.href
      }, (e) => {
        formatAppLog("log", "at uni_modules/uni-share/js_sdk/uni-share.js:86", "\u5206\u4EAB\u6210\u529F");
        super.hide();
      }, (err) => {
        formatAppLog("log", "at uni_modules/uni-share/js_sdk/uni-share.js:89", "\u5206\u4EAB\u5931\u8D25\uFF1A" + JSON.stringify(err));
        uni.showModal({
          title: "\u83B7\u53D6\u670D\u52A1\u4F9B\u5E94\u5546\u5931\u8D25\uFF1A" + JSON.stringify(err),
          showCancel: false,
          confirmText: "\u77E5\u9053\u4E86"
        });
      });
    }
  }
  const uniShare$2 = new UniShare();
  const db$6 = St.database();
  const readNewsLog = db$6.collection("read-news-log");
  const _sfc_main$y = {
    onBackPress({ from }) {
      if (from == "backbutton") {
        if (uniShare$2.isShow) {
          this.$nextTick(function() {
            formatAppLog("log", "at pages/list/detail.vue:68", uniShare$2);
            uniShare$2.hide();
          });
        }
        return uniShare$2.isShow;
      }
    },
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
    computed: __spreadProps(__spreadValues({}, mapGetters({
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
      formatAppLog("log", "at pages/list/detail.vue:103", event);
      if (event.id) {
        this.id = event.id;
      }
      if (event.title) {
        this.title = event.title;
        uni.setNavigationBarTitle({
          title: event.title
        });
      }
    },
    onReady() {
      if (this.id) {
        this.$refs.detail.loadData();
      } else {
        uni.showToast({
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
        formatAppLog("log", "at pages/list/detail.vue:135", "args", ...args, this.id);
      },
      setReadNewsLog() {
        let item = {
          "article_id": this.id,
          "last_time": Date.now()
        }, readNewsLog2 = uni.getStorageSync("readNewsLog") || [], index = -1;
        readNewsLog2.forEach(({ article_id }, i2) => {
          if (article_id == item.article_id) {
            index = i2;
          }
        });
        if (index === -1) {
          readNewsLog2.push(item);
        } else {
          readNewsLog2.splice(index, 1, item);
        }
        uni.setStorageSync("readNewsLog", readNewsLog2);
        formatAppLog("log", "at pages/list/detail.vue:155", readNewsLog2);
      },
      setFavorite() {
        if (!this.hasLogin) {
          return formatAppLog("log", "at pages/list/detail.vue:159", "\u672A\u767B\u5F55\u7528\u6237");
        }
        let article_id = this.id, last_time = Date.now();
        formatAppLog("log", "at pages/list/detail.vue:163", { article_id, last_time });
        readNewsLog.where(`"article_id" == "${article_id}" && "user_id"==$env.uid`).update({ last_time }).then(({ result: { updated } }) => {
          formatAppLog("log", "at pages/list/detail.vue:167", "updated", updated);
          if (!updated) {
            readNewsLog.add({ article_id }).then((e) => {
              formatAppLog("log", "at pages/list/detail.vue:170", e);
            }).catch((err) => {
              formatAppLog("log", "at pages/list/detail.vue:172", err);
            });
          }
        }).catch((err) => {
          formatAppLog("log", "at pages/list/detail.vue:176", err);
        });
      },
      loadData(data) {
        if (this.title == "" && data[0].title) {
          this.title = data[0].title;
          uni.setNavigationBarTitle({
            title: data[0].title
          });
        }
        this.setReadNewsLog();
      },
      followClick() {
        uni.showToast({
          title: this.$t("listDetail").follow,
          icon: "none"
        });
      },
      shareClick() {
        let {
          _id,
          title,
          excerpt,
          avatar
        } = this.$refs.detail.dataList;
        formatAppLog("log", "at pages/list/detail.vue:211", JSON.stringify({
          _id,
          title,
          excerpt,
          avatar
        }));
        uniShare$2.show({
          content: {
            type: 0,
            href: this.uniStarterConfig.h5.url + `/#/pages/list/detail?id=${_id}&title=${title}`,
            title: this.title,
            summary: excerpt,
            imageUrl: avatar + "?x-oss-process=image/resize,m_fill,h_100,w_100"
          },
          menus: [
            {
              "img": "/static/app-plus/sharemenu/wechatfriend.png",
              "text": this.$t("common").wechatFriends,
              "share": {
                "provider": "weixin",
                "scene": "WXSceneSession"
              }
            },
            {
              "img": "/static/app-plus/sharemenu/wechatmoments.png",
              "text": this.$t("common").wechatBbs,
              "share": {
                "provider": "weixin",
                "scene": "WXSceneTimeline"
              }
            },
            {
              "img": "/static/app-plus/sharemenu/mp_weixin.png",
              "text": this.$t("common").wechatApplet,
              "share": {
                provider: "weixin",
                scene: "WXSceneSession",
                type: 5,
                miniProgram: {
                  id: this.uniStarterConfig.mp.weixin.id,
                  path: `/pages/list/detail?id=${_id}&title=${title}`,
                  webUrl: this.uniStarterConfig.h5.url + `/#/pages/list/detail?id=${_id}&title=${title}`,
                  type: 0
                }
              }
            },
            {
              "img": "/static/app-plus/sharemenu/weibo.png",
              "text": this.$t("common").weibo,
              "share": {
                "provider": "sinaweibo"
              }
            },
            {
              "img": "/static/app-plus/sharemenu/qq.png",
              "text": "QQ",
              "share": {
                "provider": "qq"
              }
            },
            {
              "img": "/static/app-plus/sharemenu/copyurl.png",
              "text": this.$t("common").copy,
              "share": "copyurl"
            },
            {
              "img": "/static/app-plus/sharemenu/more.png",
              "text": this.$t("common").more,
              "share": "shareSystem"
            }
          ],
          cancelText: this.$t("common").cancelShare
        }, (e) => {
          formatAppLog("log", "at pages/list/detail.vue:284", e);
        });
      }
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$8);
    const _component_uni_dateformat = resolveEasycom(vue.resolveDynamicComponent("uni-dateformat"), __easycom_0$7);
    const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_1$1);
    const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_2$1);
    const _component_unicloud_db = resolveEasycom(vue.resolveDynamicComponent("unicloud-db"), __easycom_4$2);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createCommentVNode("\n	 \u672C\u9875\u9762\u6A21\u677F\u6559\u7A0B\uFF1Ahttps://ext.dcloud.net.cn/plugin?id=2717\n	 uni-list \u6587\u6863\uFF1Ahttps://ext.dcloud.net.cn/plugin?id=24\n	 uniCloud \u6587\u6863\uFF1Ahttps://uniapp.dcloud.io/uniCloud/README\n	 unicloud-db \u7EC4\u4EF6\u6587\u6863\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/unicloud-db-component\n	 DB Schema \u89C4\u8303\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/schema\n	 "),
      vue.createElementVNode("view", { class: "article" }, [
        vue.createVNode(_component_uni_nav_bar, {
          statusBar: true,
          border: false
        }),
        vue.createElementVNode("view", { class: "article-title" }, vue.toDisplayString($data.title), 1),
        vue.createVNode(_component_unicloud_db, {
          options: $data.formData,
          collection: "opendb-news-articles,uni-id-users",
          field: $data.field,
          getone: true,
          where: $options.where,
          manual: true,
          ref: "detail",
          foreignKey: "opendb-news-articles.user_id",
          onLoad: $options.loadData
        }, {
          default: vue.withCtx(({ data, loading, error: error2, options }) => [
            !loading && data ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              vue.createVNode(_component_uni_list, { border: false }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_list_item, {
                    thumbSize: "lg",
                    thumb: data.image
                  }, {
                    body: vue.withCtx(() => [
                      vue.createElementVNode("view", { class: "header-content" }, [
                        vue.createElementVNode("view", { class: "uni-title" }, vue.toDisplayString(data.user_id && data.user_id[0].username), 1)
                      ])
                    ]),
                    footer: vue.withCtx(() => [
                      vue.createElementVNode("view", { class: "footer" }, [
                        vue.createElementVNode("view", { class: "uni-note" }, [
                          vue.createTextVNode("\u66F4\u65B0\u4E8E "),
                          vue.createVNode(_component_uni_dateformat, {
                            date: data.last_modify_date,
                            format: "yyyy-MM-dd hh:mm",
                            threshold: [6e4, 2592e6]
                          }, null, 8, ["date"])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["thumb"])
                ]),
                _: 2
              }, 1024),
              vue.createElementVNode("view", { class: "banner" }, [
                vue.createCommentVNode(" \u6587\u7AE0\u5F00\u5934\uFF0C\u7F29\u7565\u56FE "),
                vue.createElementVNode("image", {
                  class: "banner-img",
                  src: data.avatar,
                  mode: "widthFix"
                }, null, 8, ["src"]),
                vue.createCommentVNode(" \u6587\u7AE0\u6458\u8981 "),
                vue.createElementVNode("view", { class: "banner-title" }, [
                  vue.createElementVNode("text", { class: "uni-ellipsis" }, vue.toDisplayString(data.excerpt), 1)
                ])
              ]),
              vue.createElementVNode("view", { class: "article-content" }, [
                vue.createElementVNode("rich-text", {
                  nodes: data.content
                }, null, 8, ["nodes"])
              ])
            ], 64)) : vue.createCommentVNode("v-if", true)
          ]),
          _: 1
        }, 8, ["options", "field", "where", "onLoad"])
      ])
    ], 2112);
  }
  var PagesListDetail = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$x], ["__scopeId", "data-v-ed2c8c0e"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/list/detail.vue"]]);
  const _sfc_main$x = {
    name: "uni-easyinput",
    emits: ["click", "iconClick", "update:modelValue", "input", "focus", "blur", "confirm"],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: String,
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 15
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: true
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        errMsg: "",
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false
      };
    },
    computed: {
      msg() {
        return this.errorMessage || this.errMsg;
      },
      inputMaxlength() {
        return Number(this.maxlength);
      }
    },
    watch: {
      value(newVal) {
        if (this.errMsg)
          this.errMsg = "";
        this.val = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(newVal);
        }
      },
      modelValue(newVal) {
        if (this.errMsg)
          this.errMsg = "";
        this.val = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(newVal);
        }
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
        });
      }
    },
    created() {
      if (!this.value) {
        this.val = this.modelValue;
      }
      if (!this.modelValue) {
        this.val = this.value;
      }
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
      if (this.form && this.formItem) {
        if (this.formItem.name) {
          if (!this.is_reset) {
            this.is_reset = false;
            this.formItem.setValue(this.val);
          }
          this.rename = this.formItem.name;
          this.form.inputChildrens.push(this);
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
      });
    },
    methods: {
      init() {
      },
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onEyes() {
        this.showPassword = !this.showPassword;
      },
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      onFocus(event) {
        this.$emit("focus", event);
      },
      onBlur(event) {
        event.detail.value;
        this.$emit("blur", event);
      },
      onConfirm(e) {
        this.$emit("confirm", e.detail.value);
      },
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
      },
      fieldClick() {
        this.$emit("click");
      },
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
      style: vue.normalizeStyle({ color: $props.inputBorder && $options.msg ? "#e43d33" : $props.styles.color })
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-easyinput__content", { "is-input-border": $props.inputBorder, "is-input-error-border": $props.inputBorder && $options.msg, "is-textarea": $props.type === "textarea", "is-disabled": $props.disabled }]),
        style: vue.normalizeStyle({ "border-color": $props.inputBorder && $options.msg ? "#dd524d" : $props.styles.borderColor, "background-color": $props.disabled ? $props.styles.disableColor : "" })
      }, [
        $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
          key: 0,
          class: "content-clear-icon",
          type: $props.prefixIcon,
          color: "#c0c4cc",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix"))
        }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
        $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
          key: 1,
          class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
          name: $props.name,
          value: $data.val,
          placeholder: $props.placeholder,
          placeholderStyle: $props.placeholderStyle,
          disabled: $props.disabled,
          "placeholder-class": "uni-easyinput__placeholder-class",
          maxlength: $options.inputMaxlength,
          focus: $data.focused,
          autoHeight: $props.autoHeight,
          onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
          onBlur: _cache[2] || (_cache[2] = (...args) => $options.onBlur && $options.onBlur(...args)),
          onFocus: _cache[3] || (_cache[3] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args))
        }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight"])) : (vue.openBlock(), vue.createElementBlock("input", {
          key: 2,
          type: $props.type === "password" ? "text" : $props.type,
          class: "uni-easyinput__content-input",
          style: vue.normalizeStyle({
            "padding-right": $props.type === "password" || $props.clearable || $props.prefixIcon ? "" : "10px",
            "padding-left": $props.prefixIcon ? "" : "10px"
          }),
          name: $props.name,
          value: $data.val,
          password: !$data.showPassword && $props.type === "password",
          placeholder: $props.placeholder,
          placeholderStyle: $props.placeholderStyle,
          "placeholder-class": "uni-easyinput__placeholder-class",
          disabled: $props.disabled,
          maxlength: $options.inputMaxlength,
          focus: $data.focused,
          confirmType: $props.confirmType,
          onFocus: _cache[5] || (_cache[5] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onBlur: _cache[6] || (_cache[6] = (...args) => $options.onBlur && $options.onBlur(...args)),
          onInput: _cache[7] || (_cache[7] = (...args) => $options.onInput && $options.onInput(...args)),
          onConfirm: _cache[8] || (_cache[8] = (...args) => $options.onConfirm && $options.onConfirm(...args))
        }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType"])),
        $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 3 }, [
          $data.val != "" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
            type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
            size: 18,
            color: "#c0c4cc",
            onClick: $options.onEyes
          }, null, 8, ["class", "type", "onClick"])) : vue.createCommentVNode("v-if", true)
        ], 2112)) : $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 4 }, [
          $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: "content-clear-icon",
            type: $props.suffixIcon,
            color: "#c0c4cc",
            onClick: _cache[9] || (_cache[9] = ($event) => $options.onClickIcon("suffix"))
          }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
        ], 2112)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 5 }, [
          $props.clearable && $data.val && !$props.disabled ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
            type: "clear",
            size: $props.clearSize,
            color: "#c0c4cc",
            onClick: $options.onClear
          }, null, 8, ["class", "size", "onClick"])) : vue.createCommentVNode("v-if", true)
        ], 2112)),
        vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
      ], 6)
    ], 6);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$w], ["__scopeId", "data-v-abe12412"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  function debounce(func, wait) {
    let timer;
    wait = wait || 500;
    return function() {
      let context = this;
      let args = arguments;
      if (timer)
        clearTimeout(timer);
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow)
        func.apply(context, args);
    };
  }
  const _sfc_main$w = {
    name: "uni-send-sms-code",
    props: {
      count: {
        type: [String, Number],
        default: 60
      },
      phone: {
        type: [String, Number],
        default: ""
      },
      codeType: {
        type: String,
        default() {
          return "login";
        }
      }
    },
    data() {
      return {
        reverseNumber: 0,
        reverseTimer: null
      };
    },
    computed: {
      innerText() {
        if (this.reverseNumber == 0)
          return this.$t("common.getVerifyCode");
        return this.$t("smsCode.resendVerifyCode") + "(" + this.reverseNumber + "s)";
      }
    },
    created() {
      this.initClick();
    },
    methods: {
      initClick() {
        this.start = debounce(() => {
          if (this.reverseNumber != 0)
            return;
          this.sendMsg();
        });
      },
      sendMsg() {
        let reg_phone = /^1\d{10}$/;
        if (!reg_phone.test(this.phone))
          return uni.showToast({
            title: this.$t("smsCode.phoneErrTip"),
            icon: "none"
          });
        St.callFunction({
          name: "uni-id-cf",
          data: {
            action: "sendSmsCode",
            params: {
              "mobile": this.phone,
              "type": this.codeType
            }
          },
          success: ({ result }) => {
            formatAppLog("log", "at components/uni-send-sms-code/uni-send-sms-code.vue:87", result);
            if (result.code === 0) {
              uni.showToast({
                title: this.$t("smsCode.sendSuccessTip"),
                icon: "none"
              });
              this.reverseNumber = Number(this.count);
              this.getCode();
              this.$emit("getCode");
            } else {
              uni.showModal({
                content: result.msg,
                showCancel: false
              });
            }
          }
        });
      },
      getCode() {
        if (this.reverseNumber == 0) {
          clearTimeout(this.reverseTimer);
          this.reverseTimer = null;
          return;
        }
        this.reverseNumber--;
        this.reverseTimer = setTimeout(() => {
          this.getCode();
        }, 1e3);
      }
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "short-code-btn",
      "hover-class": "hover",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.start && _ctx.start(...args))
    }, [
      vue.createElementVNode("text", {
        class: vue.normalizeClass(["inner-text", $data.reverseNumber == 0 ? "inner-text-active" : ""])
      }, vue.toDisplayString($options.innerText), 3)
    ]);
  }
  var __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$v], ["__scopeId", "data-v-6e7445d8"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/components/uni-send-sms-code/uni-send-sms-code.vue"]]);
  const _sfc_main$v = {
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
      uni.setNavigationBarTitle({
        title: this.$t("bindMobile.navigationBarTitle")
      });
    },
    onReady() {
    },
    methods: __spreadProps(__spreadValues({}, mapMutations({
      setUserInfo: "user/login"
    })), {
      submit() {
        formatAppLog("log", "at pages/ucenter/userinfo/bind-mobile/bind-mobile.vue:53", this.formData);
        St.callFunction({
          name: "uni-id-cf",
          data: {
            action: "bindMobileBySms",
            params: {
              "mobile": this.formData.phone,
              "code": this.formData.code
            }
          },
          success: ({ result }) => {
            formatAppLog("log", "at pages/ucenter/userinfo/bind-mobile/bind-mobile.vue:64", result);
            this.setUserInfo({ "mobile": result.mobile });
            uni.showToast({
              title: result.msg || "\u5B8C\u6210",
              icon: "none"
            });
            if (result.code === 0) {
              uni.navigateBack();
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
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_2);
    const _component_uni_send_sms_code = resolveEasycom(vue.resolveDynamicComponent("uni-send-sms-code"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "box" }, [
      vue.createCommentVNode(" \u767B\u5F55\u6846 (\u9009\u62E9\u624B\u673A\u53F7\u6240\u5C5E\u56FD\u5BB6\u548C\u5730\u533A\u9700\u8981\u53E6\u884C\u5B9E\u73B0) "),
      vue.createVNode(_component_uni_easyinput, {
        clearable: "",
        focus: "",
        type: "number",
        class: "input-box",
        inputBorder: false,
        modelValue: $data.formData.phone,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.formData.phone = $event),
        maxlength: "11",
        placeholder: _ctx.$t("common.phonePlaceholder")
      }, null, 8, ["modelValue", "placeholder"]),
      vue.createVNode(_component_uni_easyinput, {
        clearable: "",
        type: "number",
        class: "input-box",
        inputBorder: false,
        modelValue: $data.formData.code,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.formData.code = $event),
        maxlength: "6",
        placeholder: _ctx.$t("common.verifyCodePlaceholder")
      }, {
        right: vue.withCtx(() => [
          vue.createVNode(_component_uni_send_sms_code, {
            ref: "shortCode",
            "code-type": "bind",
            phone: $data.formData.phone
          }, null, 8, ["phone"])
        ]),
        _: 1
      }, 8, ["modelValue", "placeholder"]),
      vue.createElementVNode("button", {
        class: "send-btn-box",
        disabled: !$options.canSubmit,
        type: $options.canSubmit ? "primary" : "default",
        onClick: _cache[2] || (_cache[2] = (...args) => $options.submit && $options.submit(...args))
      }, vue.toDisplayString(_ctx.$t("common.submit")), 9, ["disabled", "type"])
    ]);
  }
  var PagesUcenterUserinfoBindMobileBindMobile = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/ucenter/userinfo/bind-mobile/bind-mobile.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(options);
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, __spreadValues({
          styles
        }, config), (res2) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$u = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      stylesObject() {
        let styles = __spreadProps(__spreadValues({}, this.styles), {
          "transition-duration": this.duration / 1e3 + "s"
        });
        let transform = "";
        for (let i2 in styles) {
          let line = this.toLine(i2);
          transform += line + ":" + styles[i2] + ";";
        }
        return transform;
      },
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i2 in obj) {
          try {
            if (typeof obj[i2] === "object") {
              this.animation[i2](...obj[i2]);
            } else {
              this.animation[i2](obj[i2]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139", `\u65B9\u6CD5 ${i2} \u4E0D\u5B58\u5728`);
          }
        }
        this.animation.step(config);
        return this;
      },
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$t = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      animation: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: "center"
      },
      isMaskClick: {
        type: Boolean,
        default: null
      },
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      }
    },
    watch: {
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: this.isDesktop ? "fixforpc-top" : "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const { windowWidth, windowHeight, windowTop, safeArea, screenHeight, safeAreaInsets } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + windowTop;
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      closeMask() {
        this.maskShow = false;
      },
      disableMask() {
        this.mkclick = false;
      },
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:246", "\u7F3A\u5C11\u7C7B\u578B\uFF1A", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$5);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]]),
      onTouchmove: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.clear && $options.clear(...args), ["stop", "prevent"]))
    }, [
      vue.createElementVNode("view", {
        onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
      }, [
        $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
          key: "1",
          name: "mask",
          "mode-class": "fade",
          styles: $data.maskClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
        vue.createVNode(_component_uni_transition, {
          key: "2",
          "mode-class": $data.ani,
          name: "content",
          styles: $data.transClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
              style: vue.normalizeStyle({ backgroundColor: $options.bg }),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 6)
          ]),
          _: 3
        }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
      ], 32)
    ], 34)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__scopeId", "data-v-7c43d41b"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const ADType = {
    RewardedVideo: "RewardedVideo",
    FullScreenVideo: "FullScreenVideo"
  };
  class AdHelper {
    constructor() {
      this._ads = {};
    }
    load(options, onload, onerror) {
      let ops = this._fixOldOptions(options);
      let {
        adpid
      } = ops;
      if (!adpid || this.isBusy(adpid)) {
        return;
      }
      this.get(ops).load(onload, onerror);
    }
    show(options, onsuccess, onfail) {
      let ops = this._fixOldOptions(options);
      let {
        adpid
      } = ops;
      if (!adpid) {
        return;
      }
      uni.showLoading({
        mask: true
      });
      var ad = this.get(ops);
      ad.load(() => {
        uni.hideLoading();
        ad.show((e) => {
          onsuccess && onsuccess(e);
        });
      }, (err) => {
        uni.hideLoading();
        onfail && onfail(err);
      });
    }
    isBusy(adpid) {
      return this._ads[adpid] && this._ads[adpid].isLoading;
    }
    get(options) {
      const {
        adpid,
        singleton = true
      } = options;
      if (singleton === false) {
        if (this._ads[adpid]) {
          this._ads[adpid].destroy();
          delete this._ads[adpid];
        }
      }
      delete options.singleton;
      if (!this._ads[adpid]) {
        this._ads[adpid] = this._createAdInstance(options);
      }
      return this._ads[adpid];
    }
    _createAdInstance(options) {
      const adType = options.adType || ADType.RewardedVideo;
      delete options.adType;
      let ad = null;
      if (adType === ADType.RewardedVideo) {
        ad = new RewardedVideo(options);
      } else if (adType === ADType.FullScreenVideo) {
        ad = new FullScreenVideo(options);
      }
      return ad;
    }
    _fixOldOptions(options) {
      return typeof options === "string" ? {
        adpid: options
      } : options;
    }
  }
  const EXPIRED_TIME = 1e3 * 60 * 30;
  const ProviderType = {
    CSJ: "csj",
    GDT: "gdt"
  };
  const RETRY_COUNT = 1;
  class AdBase {
    constructor(adInstance, options = {}) {
      this._isLoad = false;
      this._isLoading = false;
      this._lastLoadTime = 0;
      this._lastError = null;
      this._retryCount = 0;
      this._loadCallback = null;
      this._closeCallback = null;
      this._errorCallback = null;
      const ad = this._ad = adInstance;
      ad.onLoad((e) => {
        this._isLoading = false;
        this._isLoad = true;
        this._lastLoadTime = Date.now();
        this.onLoad();
      });
      ad.onClose((e) => {
        this._isLoad = false;
        this.onClose(e);
      });
      ad.onVerify && ad.onVerify((e) => {
      });
      ad.onError(({
        code,
        message
      }) => {
        this._isLoading = false;
        const data = {
          code,
          errMsg: message
        };
        if (code === -5008) {
          this._loadAd();
          return;
        }
        if (this._retryCount < RETRY_COUNT) {
          this._retryCount += 1;
          this._loadAd();
          return;
        }
        this._lastError = data;
        this.onError(data);
      });
    }
    get isExpired() {
      return this._lastLoadTime !== 0 && Math.abs(Date.now() - this._lastLoadTime) > EXPIRED_TIME;
    }
    get isLoading() {
      return this._isLoading;
    }
    getProvider() {
      return this._ad.getProvider();
    }
    load(onload, onerror) {
      this._loadCallback = onload;
      this._errorCallback = onerror;
      if (this._isLoading) {
        return;
      }
      if (this._isLoad) {
        this.onLoad();
        return;
      }
      this._retryCount = 0;
      this._loadAd();
    }
    show(onclose) {
      this._closeCallback = onclose;
      if (this._isLoading || !this._isLoad) {
        return;
      }
      if (this._lastError !== null) {
        this.onError(this._lastError);
        return;
      }
      const provider = this.getProvider();
      if (provider === ProviderType.CSJ && this.isExpired) {
        this._loadAd();
        return;
      }
      this._ad.show();
    }
    onLoad(e) {
      if (this._loadCallback != null) {
        this._loadCallback();
      }
    }
    onClose(e) {
      if (this._closeCallback != null) {
        this._closeCallback({
          isEnded: e.isEnded
        });
      }
    }
    onError(e) {
      if (this._errorCallback != null) {
        this._errorCallback(e);
      }
    }
    destroy() {
      this._ad.destroy();
    }
    _loadAd() {
      this._isLoad = false;
      this._isLoading = true;
      this._lastError = null;
      this._ad.load();
    }
  }
  class RewardedVideo extends AdBase {
    constructor(options = {}) {
      super(plus.ad.createRewardedVideoAd(options), options);
    }
  }
  class FullScreenVideo extends AdBase {
    constructor(options = {}) {
      super(plus.ad.createFullScreenVideoAd(options), options);
    }
  }
  var AD = new AdHelper();
  var _imports_0$5 = "/uni_modules/uni-sign-in/static/background.png";
  const db$5 = St.database();
  const signInTable = db$5.action("signIn").collection("opendb-sign-in");
  new Date(new Date().toLocaleDateString()).getTime();
  const _sfc_main$s = {
    name: "uni-signIn",
    data() {
      return {
        total: 0,
        scores: 0,
        weekdays: [1, 2, 3, 4, 5, 6, 7],
        signInRes: {
          days: [],
          n: 0
        }
      };
    },
    mounted() {
    },
    methods: {
      async getSignedInInfo(ToastText = "\u4ECA\u65E5\u5DF2\u7B7E\u8FC7") {
        const date = new Date(new Date().toLocaleDateString()).getTime();
        let res2 = await signInTable.where(`'user_id' == $env.uid && 'date' == ${date} && 'isDelete' == false`).get();
        if (res2.result.data.length) {
          this.signInRes = res2.result;
          this.$refs.popup.open();
          uni.showToast({
            title: ToastText,
            duration: 3e3,
            icon: "none"
          });
        }
        return res2.result.data;
      },
      async showRewardedVideoAd() {
        let res2 = await this.getSignedInInfo();
        formatAppLog("log", "at uni_modules/uni-sign-in/components/uni-sign-in/uni-sign-in.vue:83", res2);
        if (res2 && res2.length == 0) {
          let {
            _id: userId
          } = uni.getStorageSync("userInfo");
          formatAppLog("log", "at uni_modules/uni-sign-in/components/uni-sign-in/uni-sign-in.vue:88", userId, uni.getStorageSync("userInfo"));
          if (!userId) {
            return uni.navigateTo({
              url: "/pages/ucenter/login-page/index/index"
            });
          }
          AD.show({
            adpid: 1733738477,
            adType: "RewardedVideo",
            urlCallback: {
              userId,
              extra: "uniSignIn"
            }
          }, (res3) => {
            if (res3 && res3.isEnded) {
              formatAppLog("log", "at uni_modules/uni-sign-in/components/uni-sign-in/uni-sign-in.vue:106", "onClose " + res3.isEnded);
              let i2 = 0;
              uni.showLoading({
                mask: true
              });
              let myIntive = setInterval(async (e) => {
                i2++;
                res3 = await this.getSignedInInfo("\u7B7E\u5230\u6210\u529F");
                if (i2 > 2 || res3.length) {
                  if (!res3.length) {
                    uni.showToast({
                      title: "\u7B7E\u5230\u5931\u8D25\uFF01",
                      icon: "error",
                      duration: 6e3
                    });
                  }
                  clearInterval(myIntive);
                  uni.hideLoading();
                }
              }, 2e3);
            } else {
              formatAppLog("log", "at uni_modules/uni-sign-in/components/uni-sign-in/uni-sign-in.vue:130", "onClose " + res3.isEnded);
              uni.showToast({
                title: "\u64AD\u653E\u4E2D\u9014\u9000\u51FA,\u7B7E\u5230\u5931\u8D25\uFF01",
                icon: "error",
                duration: 5e3
              });
            }
          }, (err) => {
            formatAppLog("log", "at uni_modules/uni-sign-in/components/uni-sign-in/uni-sign-in.vue:140", err);
            uni.showToast({
              title: err.errMsg,
              icon: "none"
            });
          });
        }
      },
      async open() {
        uni.showLoading({
          mask: true
        });
        try {
          let res2 = await this.getSignedInInfo();
          if (res2 && res2.length == 0) {
            let res3 = await signInTable.add({});
            formatAppLog("log", "at uni_modules/uni-sign-in/components/uni-sign-in/uni-sign-in.vue:157", res3);
            uni.hideLoading();
            this.signInRes = res3.result;
            this.$refs.popup.open();
            if (this.signInRes.days.length == 7) {
              uni.showToast({
                title: "\u4F60\u5DF2\u5B8C\u62107\u65E5\u8FDE\u7EED\u7B7E\u5230\uFF0C\u83B7\u5F9760\u79EF\u5206\uFF01",
                icon: "none",
                duration: 5e3
              });
            } else {
              uni.showToast({
                title: "\u7B7E\u5230\u6210\u529F,\u83B7\u5F9710\u79EF\u5206\uFF01",
                icon: "none",
                duration: 5e3
              });
            }
          }
        } catch (e) {
          uni.hideLoading();
          formatAppLog("error", "at uni_modules/uni-sign-in/components/uni-sign-in/uni-sign-in.vue:177", e);
        }
      },
      closeMe(e) {
        this.$refs.popup.close();
      }
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_5);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_popup, {
        ref: "popup",
        type: "center"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("image", {
            class: "background-img",
            src: _imports_0$5,
            mode: "width"
          }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "main" }, [
              vue.createElementVNode("text", { class: "title" }, "\u4ECA\u65E5\u7B7E\u5230\u6210\u529F"),
              vue.createElementVNode("text", { class: "total" }, "\u672C\u8F6E\u5DF2\u7B7E\u5230" + vue.toDisplayString($data.signInRes.days.length) + "\u5929", 1),
              vue.createElementVNode("text", { class: "scores" }, "\u5F53\u524D\u79EF\u5206\uFF1A" + vue.toDisplayString($data.signInRes.score), 1)
            ]),
            vue.createElementVNode("view", null, [
              vue.createElementVNode("view", { class: "days-box" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.weekdays, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "days",
                    key: index
                  }, [
                    $data.signInRes.days.includes(item - 1) ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                      key: 0,
                      class: "icon active",
                      color: "#FFFFFF",
                      type: "checkmarkempty"
                    })) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                      item < $data.signInRes.n ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                        key: 0,
                        class: "icon active",
                        color: "#FFFFFF",
                        type: "closeempty"
                      })) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                        key: 1,
                        class: "icon",
                        type: "checkmarkempty",
                        color: "#FFFFFF"
                      }))
                    ], 2112)),
                    $data.signInRes.days.includes(item - 1) || item > $data.signInRes.n ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 2,
                      class: vue.normalizeClass(["day", { grey: item > $data.signInRes.n }])
                    }, "\u7B2C" + vue.toDisplayString(item) + "\u5929", 3)) : (vue.openBlock(), vue.createElementBlock("text", {
                      key: 3,
                      class: "day"
                    }, "\u7F3A\u5361"))
                  ]);
                }), 128))
              ]),
              vue.createElementVNode("view", { class: "tip-box" }, [
                vue.createElementVNode("text", { class: "tip" }, "\u7B7E\u5230\u4E00\u6B21\u5F9710\u79EF\u5206"),
                vue.createElementVNode("view", { class: "row" }, [
                  vue.createElementVNode("text", { class: "tip" }, "\u8FDE\u7EED\u7B7E\u52307\u5929\u53EF\u591A\u5F97"),
                  vue.createElementVNode("text", { class: "red" }, "50"),
                  vue.createElementVNode("text", { class: "tip" }, "\u79EF\u5206")
                ])
              ])
            ]),
            vue.createVNode(_component_uni_icons, {
              onClick: $options.closeMe,
              class: "close-icon",
              type: "closeempty",
              size: "20",
              color: "#AAAAAA"
            }, null, 8, ["onClick"])
          ])
        ]),
        _: 1
      }, 512)
    ]);
  }
  var __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__scopeId", "data-v-353ecbf8"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-sign-in/components/uni-sign-in/uni-sign-in.vue"]]);
  const _sfc_main$r = {
    name: "cloud-image",
    emits: ["click", "switchChange"],
    props: {
      mode: {
        type: String,
        default() {
          return "widthFix";
        }
      },
      src: {
        default() {
          return "";
        }
      },
      width: {
        type: String,
        default() {
          return "100rpx";
        }
      },
      height: {
        type: String,
        default() {
          return "100rpx";
        }
      }
    },
    watch: {
      src: {
        handler(src) {
          if (src && src.substring(0, 8) == "cloud://") {
            St.getTempFileURL({
              fileList: [src]
            }).then((res2) => {
              this.cSrc = res2.fileList[0].tempFileURL;
            });
          } else {
            this.cSrc = src;
          }
        },
        immediate: true
      }
    },
    async mounted() {
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    },
    data() {
      return {
        cSrc: false
      };
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
      style: vue.normalizeStyle({ width: $props.width, height: $props.height })
    }, [
      $data.cSrc ? (vue.openBlock(), vue.createElementBlock("image", {
        key: 0,
        style: vue.normalizeStyle({ width: $props.width, height: $props.height }),
        src: $data.cSrc,
        mode: $props.mode
      }, null, 12, ["src", "mode"])) : vue.createCommentVNode("v-if", true)
    ], 4);
  }
  var __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/components/cloud-image/cloud-image.vue"]]);
  function callCheckVersion() {
    return new Promise((resolve, reject) => {
      plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
        St.callFunction({
          name: "check-version",
          data: {
            appid: plus.runtime.appid,
            appVersion: plus.runtime.version,
            wgtVersion: widgetInfo.version
          },
          success: (e) => {
            resolve(e);
          },
          fail: (error2) => {
            reject(error2);
          }
        });
      });
    });
  }
  const PACKAGE_INFO_KEY = "__package_info__";
  function checkUpdate() {
    return new Promise((resolve, reject) => {
      callCheckVersion().then(async (e) => {
        if (!e.result)
          return;
        const {
          code,
          message,
          is_silently,
          url,
          platform: platform2,
          type
        } = e.result;
        if (code > 0) {
          const {
            fileList
          } = await St.getTempFileURL({
            fileList: [url]
          });
          if (fileList[0].tempFileURL)
            e.result.url = fileList[0].tempFileURL;
          resolve(e);
          if (is_silently) {
            uni.downloadFile({
              url: e.result.url,
              success: (res2) => {
                if (res2.statusCode == 200) {
                  plus.runtime.install(res2.tempFilePath, {
                    force: false
                  });
                }
              }
            });
            return;
          }
          uni.setStorageSync(PACKAGE_INFO_KEY, e.result);
          uni.navigateTo({
            url: `/uni_modules/uni-upgrade-center-app/pages/upgrade-popup?local_storage_key=${PACKAGE_INFO_KEY}`,
            fail: (err) => {
              formatAppLog("error", "at uni_modules/uni-upgrade-center-app/utils/check-update.js:63", "\u66F4\u65B0\u5F39\u6846\u8DF3\u8F6C\u5931\u8D25", err);
              uni.removeStorageSync(PACKAGE_INFO_KEY);
            }
          });
        } else if (code < 0) {
          formatAppLog("error", "at uni_modules/uni-upgrade-center-app/utils/check-update.js:69", message);
          reject(e);
        }
      }).catch((err) => {
        formatAppLog("error", "at uni_modules/uni-upgrade-center-app/utils/check-update.js:74", err.message);
        reject(err);
      });
    });
  }
  var _imports_0$4 = "/static/uni-center/defaultAvatarUrl.png";
  const uniShare$1 = new UniShare();
  const db$4 = St.database();
  const _sfc_main$q = {
    onBackPress({ from }) {
      if (from == "backbutton") {
        this.$nextTick(function() {
          uniShare$1.hide();
        });
        return uniShare$1.isShow;
      }
    },
    data() {
      return {
        gridList: [
          {
            "text": this.$t("mine.showText"),
            "icon": "chat"
          },
          {
            "text": this.$t("mine.showText"),
            "icon": "cloud-upload"
          },
          {
            "text": this.$t("mine.showText"),
            "icon": "contact"
          },
          {
            "text": this.$t("mine.showText"),
            "icon": "download"
          }
        ],
        ucenterList: [
          [
            {
              "title": this.$t("mine.signInByAd"),
              "event": "signInByAd",
              "icon": "compose"
            },
            {
              "title": this.$t("mine.signIn"),
              "event": "signIn",
              "icon": "compose"
            },
            {
              "title": this.$t("mine.toEvaluate"),
              "event": "gotoMarket",
              "icon": "hand-thumbsup"
            },
            {
              "title": this.$t("mine.readArticles"),
              "to": "/pages/ucenter/read-news-log/read-news-log",
              "icon": "flag"
            },
            {
              "title": this.$t("mine.myScore"),
              "to": "",
              "event": "getScore",
              "icon": "paperplane"
            },
            {
              "title": this.$t("mine.invite"),
              "event": "share",
              "icon": "redo"
            }
          ],
          [{
            "title": this.$t("mine.feedback"),
            "to": "/uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback",
            "icon": "help"
          }, {
            "title": this.$t("mine.settings"),
            "to": "/pages/ucenter/settings/settings",
            "icon": "gear"
          }],
          [{
            "title": this.$t("mine.about"),
            "to": "/pages/ucenter/about/about",
            "icon": "info"
          }]
        ],
        listStyles: {
          "height": "150rpx",
          "width": "150rpx",
          "border": {
            "color": "#eee",
            "width": "1px",
            "style": "solid",
            "radius": "100%"
          }
        }
      };
    },
    onLoad() {
      this.ucenterList[this.ucenterList.length - 2].unshift({
        title: this.$t("mine.checkUpdate"),
        rightText: this.appVersion.version + "-" + this.appVersion.versionCode,
        event: "checkVersion",
        icon: "loop",
        showBadge: this.appVersion.hasNew
      });
    },
    computed: __spreadProps(__spreadValues({}, mapGetters({
      userInfo: "user/info",
      hasLogin: "user/hasLogin"
    })), {
      appVersion() {
        return getApp().appVersion;
      },
      appConfig() {
        return getApp().globalData.config;
      }
    }),
    methods: __spreadProps(__spreadValues({}, mapMutations({
      setUserInfo: "user/login"
    })), {
      toSettings() {
        uni.navigateTo({
          url: "/pages/ucenter/settings/settings"
        });
      },
      signIn() {
        this.$refs.signIn.open();
      },
      signInByAd() {
        this.$refs.signIn.showRewardedVideoAd();
      },
      ucenterListClick(item) {
        if (!item.to && item.event) {
          this[item.event]();
        }
      },
      async checkVersion() {
        let res2 = await callCheckVersion();
        formatAppLog("log", "at pages/ucenter/ucenter.vue:195", res2);
        if (res2.result.code > 0) {
          checkUpdate();
        } else {
          uni.showToast({
            title: res2.result.message,
            icon: "none"
          });
        }
      },
      toUserInfo() {
        uni.navigateTo({
          url: "/pages/ucenter/userinfo/userinfo"
        });
      },
      tapGrid(index) {
        uni.showToast({
          title: this.$t("mine.clicked") + " " + (index + 1),
          icon: "none"
        });
      },
      gotoMarket() {
        if (uni.getSystemInfoSync().platform == "ios") {
          let appstoreid = this.appConfig.marketId.ios;
          plus.runtime.openURL("itms-apps://itunes.apple.com/cn/app/wechat/" + appstoreid + "?mt=8");
        }
        if (uni.getSystemInfoSync().platform == "android") {
          var Uri = plus.android.importClass("android.net.Uri");
          var uri = Uri.parse("market://details?id=" + this.appConfig.marketId.android);
          var Intent = plus.android.importClass("android.content.Intent");
          var intent = new Intent(Intent.ACTION_VIEW, uri);
          var main = plus.android.runtimeMainActivity();
          main.startActivity(intent);
        }
      },
      getScore() {
        if (!this.userInfo)
          return uni.showToast({
            title: this.$t("mine.checkScore"),
            icon: "none"
          });
        uni.showLoading({
          mask: true
        });
        db$4.collection("uni-id-scores").where('"user_id" == $env.uid').field("score,balance").orderBy("create_date", "desc").limit(1).get().then((res2) => {
          formatAppLog("log", "at pages/ucenter/ucenter.vue:255", res2);
          const data = res2.result.data[0];
          let msg = "";
          msg = data ? this.$t("mine.currentScore") + data.balance : this.$t("mine.noScore");
          uni.showToast({
            title: msg,
            icon: "none"
          });
        }).finally(() => {
          uni.hideLoading();
        });
      },
      async share() {
        let {
          result
        } = await St.callFunction({
          name: "uni-id-cf",
          data: {
            action: "getUserInviteCode"
          }
        });
        formatAppLog("log", "at pages/ucenter/ucenter.vue:276", result);
        let myInviteCode = result.myInviteCode || result.userInfo.my_invite_code;
        formatAppLog("log", "at pages/ucenter/ucenter.vue:278", myInviteCode);
        let {
          appName,
          logo,
          company,
          slogan
        } = this.appConfig.about;
        uniShare$1.show({
          content: {
            type: 0,
            href: this.appConfig.h5.url + `/#/pages/ucenter/invite/invite?code=uniInvitationCode:${myInviteCode}`,
            title: appName,
            summary: slogan,
            imageUrl: logo + "?x-oss-process=image/resize,m_fill,h_100,w_100"
          },
          menus: [
            {
              "img": "/static/app-plus/sharemenu/wechatfriend.png",
              "text": this.$t("common").wechatFriends,
              "share": {
                "provider": "weixin",
                "scene": "WXSceneSession"
              }
            },
            {
              "img": "/static/app-plus/sharemenu/wechatmoments.png",
              "text": this.$t("common").wechatBbs,
              "share": {
                "provider": "weixin",
                "scene": "WXSceneTimeline"
              }
            },
            {
              "img": "/static/app-plus/sharemenu/weibo.png",
              "text": this.$t("common").weibo,
              "share": {
                "provider": "sinaweibo"
              }
            },
            {
              "img": "/static/app-plus/sharemenu/qq.png",
              "text": "QQ",
              "share": {
                "provider": "qq"
              }
            },
            {
              "img": "/static/app-plus/sharemenu/copyurl.png",
              "text": this.$t("common").copy,
              "share": "copyurl"
            },
            {
              "img": "/static/app-plus/sharemenu/more.png",
              "text": this.$t("common").more,
              "share": "shareSystem"
            }
          ],
          cancelText: this.$t("common").cancelShare
        }, (e) => {
          formatAppLog("log", "at pages/ucenter/ucenter.vue:339", e);
        });
      }
    })
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_sign_in = resolveEasycom(vue.resolveDynamicComponent("uni-sign-in"), __easycom_0$4);
    const _component_cloud_image = resolveEasycom(vue.resolveDynamicComponent("cloud-image"), __easycom_0$3);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
    const _component_uni_grid_item = resolveEasycom(vue.resolveDynamicComponent("uni-grid-item"), __easycom_3$3);
    const _component_uni_grid = resolveEasycom(vue.resolveDynamicComponent("uni-grid"), __easycom_4$1);
    const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_1$1);
    const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_2$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "center" }, [
      vue.createVNode(_component_uni_sign_in, { ref: "signIn" }, null, 512),
      vue.createElementVNode("view", {
        class: "userInfo",
        onClickCapture: _cache[0] || (_cache[0] = (...args) => $options.toUserInfo && $options.toUserInfo(...args))
      }, [
        _ctx.userInfo.avatar_file && _ctx.userInfo.avatar_file.url ? (vue.openBlock(), vue.createBlock(_component_cloud_image, {
          key: 0,
          width: "150rpx",
          height: "150rpx",
          src: _ctx.userInfo.avatar_file.url
        }, null, 8, ["src"])) : (vue.openBlock(), vue.createElementBlock("image", {
          key: 1,
          class: "logo-img",
          src: _imports_0$4
        })),
        vue.createElementVNode("view", { class: "logo-title" }, [
          _ctx.hasLogin ? (vue.openBlock(), vue.createElementBlock("text", {
            key: 0,
            class: "uer-name"
          }, vue.toDisplayString(_ctx.userInfo.nickname || _ctx.userInfo.username || _ctx.userInfo.mobile), 1)) : (vue.openBlock(), vue.createElementBlock("text", {
            key: 1,
            class: "uer-name"
          }, vue.toDisplayString(_ctx.$t("mine.notLogged")), 1))
        ])
      ], 32),
      vue.createVNode(_component_uni_grid, {
        class: "grid",
        column: 4,
        showBorder: false,
        square: true
      }, {
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.gridList, (item, index) => {
            return vue.openBlock(), vue.createBlock(_component_uni_grid_item, {
              class: "item",
              onClick: ($event) => $options.tapGrid(index),
              key: index
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_icons, {
                  class: "icon",
                  color: "#007AFF",
                  type: item.icon,
                  size: "26"
                }, null, 8, ["type"]),
                vue.createElementVNode("text", { class: "text" }, vue.toDisplayString(item.text), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]);
          }), 128))
        ]),
        _: 1
      }),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.ucenterList, (sublist, index) => {
        return vue.openBlock(), vue.createBlock(_component_uni_list, {
          class: "center-list",
          key: index
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(sublist, (item, i2) => {
              return vue.openBlock(), vue.createBlock(_component_uni_list_item, {
                title: item.title,
                link: "",
                rightText: item.rightText,
                key: i2,
                clickable: true,
                to: item.to,
                onClick: ($event) => $options.ucenterListClick(item),
                "show-extra-icon": true,
                extraIcon: { type: item.icon, color: "#999" }
              }, {
                footer: vue.withCtx(() => [
                  item.showBadge ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "item-footer"
                  }, [
                    vue.createElementVNode("text", { class: "item-footer-text" }, vue.toDisplayString(item.rightText), 1),
                    vue.createElementVNode("view", { class: "item-footer-badge" })
                  ])) : vue.createCommentVNode("v-if", true)
                ]),
                _: 2
              }, 1032, ["title", "rightText", "to", "onClick", "extraIcon"]);
            }), 128))
          ]),
          _: 2
        }, 1024);
      }), 128))
    ]);
  }
  var PagesUcenterUcenter = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-4883731c"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/ucenter/ucenter.vue"]]);
  let uQRCode = {};
  (function() {
    function QR8bitByte(data) {
      this.mode = QRMode.MODE_8BIT_BYTE;
      this.data = data;
    }
    QR8bitByte.prototype = {
      getLength: function(buffer) {
        return this.data.length;
      },
      write: function(buffer) {
        for (var i3 = 0; i3 < this.data.length; i3++) {
          buffer.put(this.data.charCodeAt(i3), 8);
        }
      }
    };
    function QRCode(typeNumber, errorCorrectLevel) {
      this.typeNumber = typeNumber;
      this.errorCorrectLevel = errorCorrectLevel;
      this.modules = null;
      this.moduleCount = 0;
      this.dataCache = null;
      this.dataList = new Array();
    }
    QRCode.prototype = {
      addData: function(data) {
        var newData = new QR8bitByte(data);
        this.dataList.push(newData);
        this.dataCache = null;
      },
      isDark: function(row, col) {
        if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
          throw new Error(row + "," + col);
        }
        return this.modules[row][col];
      },
      getModuleCount: function() {
        return this.moduleCount;
      },
      make: function() {
        if (this.typeNumber < 1) {
          var typeNumber = 1;
          for (typeNumber = 1; typeNumber < 40; typeNumber++) {
            var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);
            var buffer = new QRBitBuffer();
            var totalDataCount = 0;
            for (var i3 = 0; i3 < rsBlocks.length; i3++) {
              totalDataCount += rsBlocks[i3].dataCount;
            }
            for (var i3 = 0; i3 < this.dataList.length; i3++) {
              var data = this.dataList[i3];
              buffer.put(data.mode, 4);
              buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
              data.write(buffer);
            }
            if (buffer.getLengthInBits() <= totalDataCount * 8)
              break;
          }
          this.typeNumber = typeNumber;
        }
        this.makeImpl(false, this.getBestMaskPattern());
      },
      makeImpl: function(test, maskPattern) {
        this.moduleCount = this.typeNumber * 4 + 17;
        this.modules = new Array(this.moduleCount);
        for (var row = 0; row < this.moduleCount; row++) {
          this.modules[row] = new Array(this.moduleCount);
          for (var col = 0; col < this.moduleCount; col++) {
            this.modules[row][col] = null;
          }
        }
        this.setupPositionProbePattern(0, 0);
        this.setupPositionProbePattern(this.moduleCount - 7, 0);
        this.setupPositionProbePattern(0, this.moduleCount - 7);
        this.setupPositionAdjustPattern();
        this.setupTimingPattern();
        this.setupTypeInfo(test, maskPattern);
        if (this.typeNumber >= 7) {
          this.setupTypeNumber(test);
        }
        if (this.dataCache == null) {
          this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
        }
        this.mapData(this.dataCache, maskPattern);
      },
      setupPositionProbePattern: function(row, col) {
        for (var r2 = -1; r2 <= 7; r2++) {
          if (row + r2 <= -1 || this.moduleCount <= row + r2)
            continue;
          for (var c2 = -1; c2 <= 7; c2++) {
            if (col + c2 <= -1 || this.moduleCount <= col + c2)
              continue;
            if (0 <= r2 && r2 <= 6 && (c2 == 0 || c2 == 6) || 0 <= c2 && c2 <= 6 && (r2 == 0 || r2 == 6) || 2 <= r2 && r2 <= 4 && 2 <= c2 && c2 <= 4) {
              this.modules[row + r2][col + c2] = true;
            } else {
              this.modules[row + r2][col + c2] = false;
            }
          }
        }
      },
      getBestMaskPattern: function() {
        var minLostPoint = 0;
        var pattern2 = 0;
        for (var i3 = 0; i3 < 8; i3++) {
          this.makeImpl(true, i3);
          var lostPoint = QRUtil.getLostPoint(this);
          if (i3 == 0 || minLostPoint > lostPoint) {
            minLostPoint = lostPoint;
            pattern2 = i3;
          }
        }
        return pattern2;
      },
      createMovieClip: function(target_mc, instance_name, depth) {
        var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
        var cs = 1;
        this.make();
        for (var row = 0; row < this.modules.length; row++) {
          var y2 = row * cs;
          for (var col = 0; col < this.modules[row].length; col++) {
            var x2 = col * cs;
            var dark = this.modules[row][col];
            if (dark) {
              qr_mc.beginFill(0, 100);
              qr_mc.moveTo(x2, y2);
              qr_mc.lineTo(x2 + cs, y2);
              qr_mc.lineTo(x2 + cs, y2 + cs);
              qr_mc.lineTo(x2, y2 + cs);
              qr_mc.endFill();
            }
          }
        }
        return qr_mc;
      },
      setupTimingPattern: function() {
        for (var r2 = 8; r2 < this.moduleCount - 8; r2++) {
          if (this.modules[r2][6] != null) {
            continue;
          }
          this.modules[r2][6] = r2 % 2 == 0;
        }
        for (var c2 = 8; c2 < this.moduleCount - 8; c2++) {
          if (this.modules[6][c2] != null) {
            continue;
          }
          this.modules[6][c2] = c2 % 2 == 0;
        }
      },
      setupPositionAdjustPattern: function() {
        var pos = QRUtil.getPatternPosition(this.typeNumber);
        for (var i3 = 0; i3 < pos.length; i3++) {
          for (var j2 = 0; j2 < pos.length; j2++) {
            var row = pos[i3];
            var col = pos[j2];
            if (this.modules[row][col] != null) {
              continue;
            }
            for (var r2 = -2; r2 <= 2; r2++) {
              for (var c2 = -2; c2 <= 2; c2++) {
                if (r2 == -2 || r2 == 2 || c2 == -2 || c2 == 2 || r2 == 0 && c2 == 0) {
                  this.modules[row + r2][col + c2] = true;
                } else {
                  this.modules[row + r2][col + c2] = false;
                }
              }
            }
          }
        }
      },
      setupTypeNumber: function(test) {
        var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
        for (var i3 = 0; i3 < 18; i3++) {
          var mod = !test && (bits >> i3 & 1) == 1;
          this.modules[Math.floor(i3 / 3)][i3 % 3 + this.moduleCount - 8 - 3] = mod;
        }
        for (var i3 = 0; i3 < 18; i3++) {
          var mod = !test && (bits >> i3 & 1) == 1;
          this.modules[i3 % 3 + this.moduleCount - 8 - 3][Math.floor(i3 / 3)] = mod;
        }
      },
      setupTypeInfo: function(test, maskPattern) {
        var data = this.errorCorrectLevel << 3 | maskPattern;
        var bits = QRUtil.getBCHTypeInfo(data);
        for (var i3 = 0; i3 < 15; i3++) {
          var mod = !test && (bits >> i3 & 1) == 1;
          if (i3 < 6) {
            this.modules[i3][8] = mod;
          } else if (i3 < 8) {
            this.modules[i3 + 1][8] = mod;
          } else {
            this.modules[this.moduleCount - 15 + i3][8] = mod;
          }
        }
        for (var i3 = 0; i3 < 15; i3++) {
          var mod = !test && (bits >> i3 & 1) == 1;
          if (i3 < 8) {
            this.modules[8][this.moduleCount - i3 - 1] = mod;
          } else if (i3 < 9) {
            this.modules[8][15 - i3 - 1 + 1] = mod;
          } else {
            this.modules[8][15 - i3 - 1] = mod;
          }
        }
        this.modules[this.moduleCount - 8][8] = !test;
      },
      mapData: function(data, maskPattern) {
        var inc = -1;
        var row = this.moduleCount - 1;
        var bitIndex = 7;
        var byteIndex = 0;
        for (var col = this.moduleCount - 1; col > 0; col -= 2) {
          if (col == 6)
            col--;
          while (true) {
            for (var c2 = 0; c2 < 2; c2++) {
              if (this.modules[row][col - c2] == null) {
                var dark = false;
                if (byteIndex < data.length) {
                  dark = (data[byteIndex] >>> bitIndex & 1) == 1;
                }
                var mask = QRUtil.getMask(maskPattern, row, col - c2);
                if (mask) {
                  dark = !dark;
                }
                this.modules[row][col - c2] = dark;
                bitIndex--;
                if (bitIndex == -1) {
                  byteIndex++;
                  bitIndex = 7;
                }
              }
            }
            row += inc;
            if (row < 0 || this.moduleCount <= row) {
              row -= inc;
              inc = -inc;
              break;
            }
          }
        }
      }
    };
    QRCode.PAD0 = 236;
    QRCode.PAD1 = 17;
    QRCode.createData = function(typeNumber, errorCorrectLevel, dataList) {
      var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
      var buffer = new QRBitBuffer();
      for (var i3 = 0; i3 < dataList.length; i3++) {
        var data = dataList[i3];
        buffer.put(data.mode, 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
        data.write(buffer);
      }
      var totalDataCount = 0;
      for (var i3 = 0; i3 < rsBlocks.length; i3++) {
        totalDataCount += rsBlocks[i3].dataCount;
      }
      if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
      }
      if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
      }
      while (true) {
        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(QRCode.PAD0, 8);
        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(QRCode.PAD1, 8);
      }
      return QRCode.createBytes(buffer, rsBlocks);
    };
    QRCode.createBytes = function(buffer, rsBlocks) {
      var offset = 0;
      var maxDcCount = 0;
      var maxEcCount = 0;
      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);
      for (var r2 = 0; r2 < rsBlocks.length; r2++) {
        var dcCount = rsBlocks[r2].dataCount;
        var ecCount = rsBlocks[r2].totalCount - dcCount;
        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);
        dcdata[r2] = new Array(dcCount);
        for (var i3 = 0; i3 < dcdata[r2].length; i3++) {
          dcdata[r2][i3] = 255 & buffer.buffer[i3 + offset];
        }
        offset += dcCount;
        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = new QRPolynomial(dcdata[r2], rsPoly.getLength() - 1);
        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r2] = new Array(rsPoly.getLength() - 1);
        for (var i3 = 0; i3 < ecdata[r2].length; i3++) {
          var modIndex = i3 + modPoly.getLength() - ecdata[r2].length;
          ecdata[r2][i3] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
        }
      }
      var totalCodeCount = 0;
      for (var i3 = 0; i3 < rsBlocks.length; i3++) {
        totalCodeCount += rsBlocks[i3].totalCount;
      }
      var data = new Array(totalCodeCount);
      var index = 0;
      for (var i3 = 0; i3 < maxDcCount; i3++) {
        for (var r2 = 0; r2 < rsBlocks.length; r2++) {
          if (i3 < dcdata[r2].length) {
            data[index++] = dcdata[r2][i3];
          }
        }
      }
      for (var i3 = 0; i3 < maxEcCount; i3++) {
        for (var r2 = 0; r2 < rsBlocks.length; r2++) {
          if (i3 < ecdata[r2].length) {
            data[index++] = ecdata[r2][i3];
          }
        }
      }
      return data;
    };
    var QRMode = {
      MODE_NUMBER: 1 << 0,
      MODE_ALPHA_NUM: 1 << 1,
      MODE_8BIT_BYTE: 1 << 2,
      MODE_KANJI: 1 << 3
    };
    var QRErrorCorrectLevel = {
      L: 1,
      M: 0,
      Q: 3,
      H: 2
    };
    var QRMaskPattern = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var QRUtil = {
      PATTERN_POSITION_TABLE: [
        [],
        [6, 18],
        [6, 22],
        [6, 26],
        [6, 30],
        [6, 34],
        [6, 22, 38],
        [6, 24, 42],
        [6, 26, 46],
        [6, 28, 50],
        [6, 30, 54],
        [6, 32, 58],
        [6, 34, 62],
        [6, 26, 46, 66],
        [6, 26, 48, 70],
        [6, 26, 50, 74],
        [6, 30, 54, 78],
        [6, 30, 56, 82],
        [6, 30, 58, 86],
        [6, 34, 62, 90],
        [6, 28, 50, 72, 94],
        [6, 26, 50, 74, 98],
        [6, 30, 54, 78, 102],
        [6, 28, 54, 80, 106],
        [6, 32, 58, 84, 110],
        [6, 30, 58, 86, 114],
        [6, 34, 62, 90, 118],
        [6, 26, 50, 74, 98, 122],
        [6, 30, 54, 78, 102, 126],
        [6, 26, 52, 78, 104, 130],
        [6, 30, 56, 82, 108, 134],
        [6, 34, 60, 86, 112, 138],
        [6, 30, 58, 86, 114, 142],
        [6, 34, 62, 90, 118, 146],
        [6, 30, 54, 78, 102, 126, 150],
        [6, 24, 50, 76, 102, 128, 154],
        [6, 28, 54, 80, 106, 132, 158],
        [6, 32, 58, 84, 110, 136, 162],
        [6, 26, 54, 82, 110, 138, 166],
        [6, 30, 58, 86, 114, 142, 170]
      ],
      G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
      G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
      G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
      getBCHTypeInfo: function(data) {
        var d2 = data << 10;
        while (QRUtil.getBCHDigit(d2) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
          d2 ^= QRUtil.G15 << QRUtil.getBCHDigit(d2) - QRUtil.getBCHDigit(QRUtil.G15);
        }
        return (data << 10 | d2) ^ QRUtil.G15_MASK;
      },
      getBCHTypeNumber: function(data) {
        var d2 = data << 12;
        while (QRUtil.getBCHDigit(d2) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
          d2 ^= QRUtil.G18 << QRUtil.getBCHDigit(d2) - QRUtil.getBCHDigit(QRUtil.G18);
        }
        return data << 12 | d2;
      },
      getBCHDigit: function(data) {
        var digit = 0;
        while (data != 0) {
          digit++;
          data >>>= 1;
        }
        return digit;
      },
      getPatternPosition: function(typeNumber) {
        return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
      },
      getMask: function(maskPattern, i3, j2) {
        switch (maskPattern) {
          case QRMaskPattern.PATTERN000:
            return (i3 + j2) % 2 == 0;
          case QRMaskPattern.PATTERN001:
            return i3 % 2 == 0;
          case QRMaskPattern.PATTERN010:
            return j2 % 3 == 0;
          case QRMaskPattern.PATTERN011:
            return (i3 + j2) % 3 == 0;
          case QRMaskPattern.PATTERN100:
            return (Math.floor(i3 / 2) + Math.floor(j2 / 3)) % 2 == 0;
          case QRMaskPattern.PATTERN101:
            return i3 * j2 % 2 + i3 * j2 % 3 == 0;
          case QRMaskPattern.PATTERN110:
            return (i3 * j2 % 2 + i3 * j2 % 3) % 2 == 0;
          case QRMaskPattern.PATTERN111:
            return (i3 * j2 % 3 + (i3 + j2) % 2) % 2 == 0;
          default:
            throw new Error("bad maskPattern:" + maskPattern);
        }
      },
      getErrorCorrectPolynomial: function(errorCorrectLength) {
        var a2 = new QRPolynomial([1], 0);
        for (var i3 = 0; i3 < errorCorrectLength; i3++) {
          a2 = a2.multiply(new QRPolynomial([1, QRMath.gexp(i3)], 0));
        }
        return a2;
      },
      getLengthInBits: function(mode, type) {
        if (1 <= type && type < 10) {
          switch (mode) {
            case QRMode.MODE_NUMBER:
              return 10;
            case QRMode.MODE_ALPHA_NUM:
              return 9;
            case QRMode.MODE_8BIT_BYTE:
              return 8;
            case QRMode.MODE_KANJI:
              return 8;
            default:
              throw new Error("mode:" + mode);
          }
        } else if (type < 27) {
          switch (mode) {
            case QRMode.MODE_NUMBER:
              return 12;
            case QRMode.MODE_ALPHA_NUM:
              return 11;
            case QRMode.MODE_8BIT_BYTE:
              return 16;
            case QRMode.MODE_KANJI:
              return 10;
            default:
              throw new Error("mode:" + mode);
          }
        } else if (type < 41) {
          switch (mode) {
            case QRMode.MODE_NUMBER:
              return 14;
            case QRMode.MODE_ALPHA_NUM:
              return 13;
            case QRMode.MODE_8BIT_BYTE:
              return 16;
            case QRMode.MODE_KANJI:
              return 12;
            default:
              throw new Error("mode:" + mode);
          }
        } else {
          throw new Error("type:" + type);
        }
      },
      getLostPoint: function(qrCode) {
        var moduleCount = qrCode.getModuleCount();
        var lostPoint = 0;
        for (var row = 0; row < moduleCount; row++) {
          for (var col = 0; col < moduleCount; col++) {
            var sameCount = 0;
            var dark = qrCode.isDark(row, col);
            for (var r2 = -1; r2 <= 1; r2++) {
              if (row + r2 < 0 || moduleCount <= row + r2) {
                continue;
              }
              for (var c2 = -1; c2 <= 1; c2++) {
                if (col + c2 < 0 || moduleCount <= col + c2) {
                  continue;
                }
                if (r2 == 0 && c2 == 0) {
                  continue;
                }
                if (dark == qrCode.isDark(row + r2, col + c2)) {
                  sameCount++;
                }
              }
            }
            if (sameCount > 5) {
              lostPoint += 3 + sameCount - 5;
            }
          }
        }
        for (var row = 0; row < moduleCount - 1; row++) {
          for (var col = 0; col < moduleCount - 1; col++) {
            var count = 0;
            if (qrCode.isDark(row, col))
              count++;
            if (qrCode.isDark(row + 1, col))
              count++;
            if (qrCode.isDark(row, col + 1))
              count++;
            if (qrCode.isDark(row + 1, col + 1))
              count++;
            if (count == 0 || count == 4) {
              lostPoint += 3;
            }
          }
        }
        for (var row = 0; row < moduleCount; row++) {
          for (var col = 0; col < moduleCount - 6; col++) {
            if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
              lostPoint += 40;
            }
          }
        }
        for (var col = 0; col < moduleCount; col++) {
          for (var row = 0; row < moduleCount - 6; row++) {
            if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
              lostPoint += 40;
            }
          }
        }
        var darkCount = 0;
        for (var col = 0; col < moduleCount; col++) {
          for (var row = 0; row < moduleCount; row++) {
            if (qrCode.isDark(row, col)) {
              darkCount++;
            }
          }
        }
        var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
        lostPoint += ratio * 10;
        return lostPoint;
      }
    };
    var QRMath = {
      glog: function(n2) {
        if (n2 < 1) {
          throw new Error("glog(" + n2 + ")");
        }
        return QRMath.LOG_TABLE[n2];
      },
      gexp: function(n2) {
        while (n2 < 0) {
          n2 += 255;
        }
        while (n2 >= 256) {
          n2 -= 255;
        }
        return QRMath.EXP_TABLE[n2];
      },
      EXP_TABLE: new Array(256),
      LOG_TABLE: new Array(256)
    };
    for (var i2 = 0; i2 < 8; i2++) {
      QRMath.EXP_TABLE[i2] = 1 << i2;
    }
    for (var i2 = 8; i2 < 256; i2++) {
      QRMath.EXP_TABLE[i2] = QRMath.EXP_TABLE[i2 - 4] ^ QRMath.EXP_TABLE[i2 - 5] ^ QRMath.EXP_TABLE[i2 - 6] ^ QRMath.EXP_TABLE[i2 - 8];
    }
    for (var i2 = 0; i2 < 255; i2++) {
      QRMath.LOG_TABLE[QRMath.EXP_TABLE[i2]] = i2;
    }
    function QRPolynomial(num, shift) {
      if (num.length == void 0) {
        throw new Error(num.length + "/" + shift);
      }
      var offset = 0;
      while (offset < num.length && num[offset] == 0) {
        offset++;
      }
      this.num = new Array(num.length - offset + shift);
      for (var i3 = 0; i3 < num.length - offset; i3++) {
        this.num[i3] = num[i3 + offset];
      }
    }
    QRPolynomial.prototype = {
      get: function(index) {
        return this.num[index];
      },
      getLength: function() {
        return this.num.length;
      },
      multiply: function(e) {
        var num = new Array(this.getLength() + e.getLength() - 1);
        for (var i3 = 0; i3 < this.getLength(); i3++) {
          for (var j2 = 0; j2 < e.getLength(); j2++) {
            num[i3 + j2] ^= QRMath.gexp(QRMath.glog(this.get(i3)) + QRMath.glog(e.get(j2)));
          }
        }
        return new QRPolynomial(num, 0);
      },
      mod: function(e) {
        if (this.getLength() - e.getLength() < 0) {
          return this;
        }
        var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
        var num = new Array(this.getLength());
        for (var i3 = 0; i3 < this.getLength(); i3++) {
          num[i3] = this.get(i3);
        }
        for (var i3 = 0; i3 < e.getLength(); i3++) {
          num[i3] ^= QRMath.gexp(QRMath.glog(e.get(i3)) + ratio);
        }
        return new QRPolynomial(num, 0).mod(e);
      }
    };
    function QRRSBlock(totalCount, dataCount) {
      this.totalCount = totalCount;
      this.dataCount = dataCount;
    }
    QRRSBlock.RS_BLOCK_TABLE = [
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12],
      [5, 122, 98, 1, 123, 99],
      [7, 73, 45, 3, 74, 46],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],
      [4, 151, 121, 5, 152, 122],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16]
    ];
    QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
      var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
      if (rsBlock == void 0) {
        throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
      }
      var length = rsBlock.length / 3;
      var list = new Array();
      for (var i3 = 0; i3 < length; i3++) {
        var count = rsBlock[i3 * 3 + 0];
        var totalCount = rsBlock[i3 * 3 + 1];
        var dataCount = rsBlock[i3 * 3 + 2];
        for (var j2 = 0; j2 < count; j2++) {
          list.push(new QRRSBlock(totalCount, dataCount));
        }
      }
      return list;
    };
    QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {
      switch (errorCorrectLevel) {
        case QRErrorCorrectLevel.L:
          return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
        case QRErrorCorrectLevel.M:
          return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
        case QRErrorCorrectLevel.Q:
          return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
        case QRErrorCorrectLevel.H:
          return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
    function QRBitBuffer() {
      this.buffer = new Array();
      this.length = 0;
    }
    QRBitBuffer.prototype = {
      get: function(index) {
        var bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
      },
      put: function(num, length) {
        for (var i3 = 0; i3 < length; i3++) {
          this.putBit((num >>> length - i3 - 1 & 1) == 1);
        }
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(bit) {
        var bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }
        if (bit) {
          this.buffer[bufIndex] |= 128 >>> this.length % 8;
        }
        this.length++;
      }
    };
    function utf16To8(text) {
      var result = "";
      var c2;
      for (var i3 = 0; i3 < text.length; i3++) {
        c2 = text.charCodeAt(i3);
        if (c2 >= 1 && c2 <= 127) {
          result += text.charAt(i3);
        } else if (c2 > 2047) {
          result += String.fromCharCode(224 | c2 >> 12 & 15);
          result += String.fromCharCode(128 | c2 >> 6 & 63);
          result += String.fromCharCode(128 | c2 >> 0 & 63);
        } else {
          result += String.fromCharCode(192 | c2 >> 6 & 31);
          result += String.fromCharCode(128 | c2 >> 0 & 63);
        }
      }
      return result;
    }
    uQRCode = {
      errorCorrectLevel: QRErrorCorrectLevel,
      defaults: {
        size: 354,
        margin: 0,
        backgroundColor: "#ffffff",
        foregroundColor: "#000000",
        fileType: "png",
        errorCorrectLevel: QRErrorCorrectLevel.H,
        typeNumber: -1
      },
      make: function(options) {
        return new Promise((reslove, reject) => {
          var defaultOptions = {
            canvasId: options.canvasId,
            componentInstance: options.componentInstance,
            text: options.text,
            size: this.defaults.size,
            margin: this.defaults.margin,
            backgroundColor: this.defaults.backgroundColor,
            foregroundColor: this.defaults.foregroundColor,
            fileType: this.defaults.fileType,
            errorCorrectLevel: this.defaults.errorCorrectLevel,
            typeNumber: this.defaults.typeNumber
          };
          if (options) {
            for (var i3 in options) {
              defaultOptions[i3] = options[i3];
            }
          }
          options = defaultOptions;
          if (!options.canvasId) {
            formatAppLog("error", "at components/Sansnn-uQRCode/uqrcode.js:1323", "uQRCode: Please set canvasId!");
            return;
          }
          function createCanvas() {
            var qrcode = new QRCode(options.typeNumber, options.errorCorrectLevel);
            qrcode.addData(utf16To8(options.text));
            qrcode.make();
            var ctx = uni.createCanvasContext(options.canvasId, options.componentInstance);
            ctx.setFillStyle(options.backgroundColor);
            ctx.fillRect(0, 0, options.size, options.size);
            var tileW = (options.size - options.margin * 2) / qrcode.getModuleCount();
            var tileH = tileW;
            for (var row = 0; row < qrcode.getModuleCount(); row++) {
              for (var col = 0; col < qrcode.getModuleCount(); col++) {
                var style = qrcode.isDark(row, col) ? options.foregroundColor : options.backgroundColor;
                ctx.setFillStyle(style);
                var x2 = Math.round(col * tileW) + options.margin;
                var y2 = Math.round(row * tileH) + options.margin;
                var w2 = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
                var h2 = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
                ctx.fillRect(x2, y2, w2, h2);
              }
            }
            setTimeout(function() {
              ctx.draw(false, function() {
                setTimeout(function() {
                  uni.canvasToTempFilePath({
                    canvasId: options.canvasId,
                    fileType: options.fileType,
                    width: options.size,
                    height: options.size,
                    destWidth: options.size,
                    destHeight: options.size,
                    success: function(res2) {
                      let resData;
                      let tempFilePath = res2.tempFilePath;
                      const path = plus.io.convertLocalFileSystemURL(tempFilePath);
                      let fileReader = new plus.io.FileReader();
                      fileReader.readAsDataURL(path);
                      fileReader.onloadend = (res3) => {
                        resData = res3.target.result;
                        options.success && options.success(resData);
                        reslove(resData);
                      };
                    },
                    fail: function(error2) {
                      options.fail && options.fail(error2);
                      reject(error2);
                    },
                    complete: function(res2) {
                      options.complete && options.complete(res2);
                    }
                  }, options.componentInstance);
                }, options.text.length + 100);
              }());
            }, 150);
          }
          createCanvas();
        });
      }
    };
  })();
  var uQRCode$1 = uQRCode;
  const _sfc_main$p = {
    props: {
      cid: {
        type: String,
        default() {
          return Date.now() + Math.random() + "";
        }
      },
      text: {
        type: String,
        required: true
      },
      size: {
        type: Number,
        default: uni.upx2px(200)
      },
      margin: {
        type: Number,
        default: 0
      },
      backgroundColor: {
        type: String,
        default: "#ffffff"
      },
      foregroundColor: {
        type: String,
        default: "#000000"
      },
      backgroundImage: {
        type: String
      },
      logo: {
        type: String
      },
      makeOnLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {};
    },
    mounted() {
      if (this.makeOnLoad) {
        this.make();
      }
    },
    methods: {
      async make() {
        var options = {
          canvasId: this.cid,
          componentInstance: this,
          text: this.text,
          size: this.size,
          margin: this.margin,
          backgroundColor: this.backgroundImage ? "rgba(255,255,255,0)" : this.backgroundColor,
          foregroundColor: this.foregroundColor
        };
        var filePath = await this.makeSync(options);
        if (this.backgroundImage) {
          filePath = await this.drawBackgroundImageSync(filePath);
        }
        if (this.logo) {
          filePath = await this.drawLogoSync(filePath);
        }
        this.makeComplete(filePath);
      },
      makeComplete(filePath) {
        this.$emit("makeComplete", filePath);
      },
      drawBackgroundImage(options) {
        var ctx = uni.createCanvasContext(this.cid, this);
        ctx.drawImage(this.backgroundImage, 0, 0, this.size, this.size);
        ctx.drawImage(options.filePath, 0, 0, this.size, this.size);
        ctx.draw(false, () => {
          uni.canvasToTempFilePath({
            canvasId: this.cid,
            success: (res2) => {
              options.success && options.success(res2.tempFilePath);
            },
            fail: (error2) => {
              options.fail && options.fail(error2);
            }
          }, this);
        });
      },
      async drawBackgroundImageSync(filePath) {
        return new Promise((resolve, reject) => {
          this.drawBackgroundImage({
            filePath,
            success: (res2) => {
              resolve(res2);
            },
            fail: (error2) => {
              reject(error2);
            }
          });
        });
      },
      fillRoundRect(ctx, r2, x2, y2, w2, h2) {
        ctx.save();
        ctx.translate(x2, y2);
        ctx.beginPath();
        ctx.arc(w2 - r2, h2 - r2, r2, 0, Math.PI / 2);
        ctx.lineTo(r2, h2);
        ctx.arc(r2, h2 - r2, r2, Math.PI / 2, Math.PI);
        ctx.lineTo(0, r2);
        ctx.arc(r2, r2, r2, Math.PI, Math.PI * 3 / 2);
        ctx.lineTo(w2 - r2, 0);
        ctx.arc(w2 - r2, r2, r2, Math.PI * 3 / 2, Math.PI * 2);
        ctx.lineTo(w2, h2 - r2);
        ctx.closePath();
        ctx.setFillStyle("#ffffff");
        ctx.fill();
        ctx.restore();
      },
      drawLogo(options) {
        var ctx = uni.createCanvasContext(this.cid, this);
        ctx.drawImage(options.filePath, 0, 0, this.size, this.size);
        var logoSize = this.size / 4;
        var logoX = this.size / 2 - logoSize / 2;
        var logoY = logoX;
        var borderSize = logoSize + 10;
        var borderX = this.size / 2 - borderSize / 2;
        var borderY = borderX;
        var borderRadius = 5;
        this.fillRoundRect(ctx, borderRadius, borderX, borderY, borderSize, borderSize);
        ctx.drawImage(this.logo, logoX, logoY, logoSize, logoSize);
        ctx.draw(false, () => {
          uni.canvasToTempFilePath({
            canvasId: this.cid,
            success: (res2) => {
              options.success && options.success(res2.tempFilePath);
            },
            fail: (error2) => {
              options.fail && options.fail(error2);
            }
          }, this);
        });
      },
      async drawLogoSync(filePath) {
        return new Promise((resolve, reject) => {
          this.drawLogo({
            filePath,
            success: (res2) => {
              resolve(res2);
            },
            fail: (error2) => {
              reject(error2);
            }
          });
        });
      },
      async makeSync(options) {
        return new Promise((resolve, reject) => {
          uQRCode$1.make({
            canvasId: options.canvasId,
            componentInstance: options.componentInstance,
            text: options.text,
            size: options.size,
            margin: options.margin,
            backgroundColor: options.backgroundColor,
            foregroundColor: options.foregroundColor,
            success: (res2) => {
              resolve(res2);
            },
            fail: (error2) => {
              reject(error2);
            }
          });
        });
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("canvas", {
        id: $props.cid,
        "canvas-id": $props.cid,
        style: vue.normalizeStyle({ width: `${$props.size}px`, height: `${$props.size}px` })
      }, null, 12, ["id", "canvas-id"])
    ]);
  }
  var __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/components/Sansnn-uQRCode/Sansnn-uQRCode.vue"]]);
  const uniShare = new UniShare();
  const _sfc_main$o = {
    onBackPress({ from }) {
      if (from == "backbutton") {
        this.$nextTick(function() {
          uniShare.hide();
        });
        return uniShare.isShow;
      }
    },
    onLoad() {
      this.version = plus.runtime.version;
    },
    computed: {
      uniStarterConfig() {
        formatAppLog("log", "at pages/ucenter/about/about.vue:44", getApp());
        return getApp().globalData.config;
      }
    },
    data() {
      return {
        version: "V1.0.0",
        year: "2020",
        about: {}
      };
    },
    created() {
      this.about = this.uniStarterConfig.about;
      uni.setNavigationBarTitle({
        title: this.$t("about.about") + " " + this.about.appName
      });
      this.year = new Date().getFullYear();
    },
    onNavigationBarButtonTap() {
      let {
        download,
        appName,
        slogan,
        logo
      } = this.about;
      uniShare.show({
        content: {
          type: 0,
          href: download,
          title: appName,
          summary: slogan,
          imageUrl: logo + "?x-oss-process=image/resize,m_fill,h_100,w_100"
        },
        menus: [
          {
            "img": "/static/app-plus/sharemenu/wechatfriend.png",
            "text": this.$t("common").wechatFriends,
            "share": {
              "provider": "weixin",
              "scene": "WXSceneSession"
            }
          },
          {
            "img": "/static/app-plus/sharemenu/wechatmoments.png",
            "text": this.$t("common").wechatBbs,
            "share": {
              "provider": "weixin",
              "scene": "WXSceneTimeline"
            }
          },
          {
            "img": "/static/app-plus/sharemenu/weibo.png",
            "text": this.$t("common").weibo,
            "share": {
              "provider": "sinaweibo"
            }
          },
          {
            "img": "/static/app-plus/sharemenu/qq.png",
            "text": "QQ",
            "share": {
              "provider": "qq"
            }
          },
          {
            "img": "/static/app-plus/sharemenu/copyurl.png",
            "text": this.$t("common").copy,
            "share": "copyurl"
          },
          {
            "img": "/static/app-plus/sharemenu/more.png",
            "text": this.$t("common").more,
            "share": "shareSystem"
          }
        ],
        cancelText: this.$t("common").cancelShare
      }, (e) => {
        formatAppLog("log", "at pages/ucenter/about/about.vue:120", e);
      });
    },
    methods: {
      navigateTo({
        url,
        title
      }) {
        uni.navigateTo({
          url: "/pages/common/webview/webview?url=" + url + "&title=" + title,
          success: (res2) => {
          },
          fail: () => {
          },
          complete: () => {
          }
        });
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Sansnn_uQRCode = resolveEasycom(vue.resolveDynamicComponent("Sansnn-uQRCode"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "about" }, [
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("image", {
          class: "logoImg",
          src: $data.about.logo
        }, null, 8, ["src"]),
        vue.createElementVNode("text", { class: "tip appName" }, vue.toDisplayString($data.about.appName), 1),
        vue.createElementVNode("text", { class: "tip" }, "Version " + vue.toDisplayString($data.version), 1),
        vue.createCommentVNode("Sansnn-uQRCode\u7EC4\u4EF6\u6765\u6E90\uFF0C\u63D2\u4EF6\u5E02\u573A\uFF1Ahttps://ext.dcloud.net.cn/plugin?id=1287 \u5FAE\u8C03\u540E"),
        vue.createVNode(_component_Sansnn_uQRCode, {
          text: $data.about.download,
          makeOnLoad: true,
          class: "qrcode"
        }, null, 8, ["text"]),
        vue.createElementVNode("text", { class: "tip" }, vue.toDisplayString(_ctx.$t("about.sacnQR")) + " " + vue.toDisplayString($data.about.appName) + " " + vue.toDisplayString(_ctx.$t("about.client")), 1)
      ]),
      vue.createElementVNode("view", { class: "copyright" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.about.agreements, (agreement, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "agreement-box",
            key: index
          }, [
            vue.createElementVNode("text", {
              class: "agreement",
              onClick: ($event) => $options.navigateTo(agreement)
            }, "\u300A" + vue.toDisplayString(agreement.title) + "\u300B", 9, ["onClick"]),
            $data.about.agreements.length - 1 > index ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "hint"
            }, vue.toDisplayString(_ctx.$t("about.and")), 1)) : vue.createCommentVNode("v-if", true)
          ]);
        }), 128)),
        vue.createElementVNode("text", { class: "hint" }, "Copyright \xA9 " + vue.toDisplayString($data.year), 1),
        vue.createElementVNode("text", { class: "hint" }, vue.toDisplayString($data.about.company), 1)
      ])
    ]);
  }
  var PagesUcenterAboutAbout = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-e532e9c6"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/ucenter/about/about.vue"]]);
  var _imports_0$3 = "/uni_modules/uni-upgrade-center-app/images/bg_top.png";
  var _imports_1$2 = "/uni_modules/uni-upgrade-center-app/images/app_update_close.png";
  const localFilePathKey = "__localFilePath__";
  const platform_iOS = "iOS";
  let downloadTask = null;
  function compare(v1 = "0", v2 = "0") {
    v1 = String(v1).split(".");
    v2 = String(v2).split(".");
    const minVersionLens = Math.min(v1.length, v2.length);
    let result = 0;
    for (let i2 = 0; i2 < minVersionLens; i2++) {
      const curV1 = Number(v1[i2]);
      const curV2 = Number(v2[i2]);
      if (curV1 > curV2) {
        result = 1;
        break;
      } else if (curV1 < curV2) {
        result = -1;
        break;
      }
    }
    if (result === 0 && v1.length !== v2.length) {
      const v1BiggerThenv2 = v1.length > v2.length;
      const maxLensVersion = v1BiggerThenv2 ? v1 : v2;
      for (let i2 = minVersionLens; i2 < maxLensVersion.length; i2++) {
        const curVersion = Number(maxLensVersion[i2]);
        if (curVersion > 0) {
          v1BiggerThenv2 ? result = 1 : result = -1;
          break;
        }
      }
    }
    return result;
  }
  const _sfc_main$n = {
    data() {
      return {
        installForBeforeFilePath: "",
        installed: false,
        installing: false,
        downloadSuccess: false,
        downloading: false,
        downLoadPercent: 0,
        downloadedSize: 0,
        packageFileSize: 0,
        tempFilePath: "",
        title: "\u66F4\u65B0\u65E5\u5FD7",
        contents: "",
        is_mandatory: false,
        subTitle: "\u53D1\u73B0\u65B0\u7248\u672C",
        downLoadBtnTextiOS: "\u7ACB\u5373\u8DF3\u8F6C\u66F4\u65B0",
        downLoadBtnText: "\u7ACB\u5373\u4E0B\u8F7D\u66F4\u65B0",
        downLoadingText: "\u5B89\u88C5\u5305\u4E0B\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E"
      };
    },
    onLoad({
      local_storage_key
    }) {
      if (!local_storage_key) {
        formatAppLog("error", "at uni_modules/uni-upgrade-center-app/pages/upgrade-popup.vue:148", "local_storage_key\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5");
        uni.navigateBack();
        return;
      }
      const localPackageInfo = uni.getStorageSync(local_storage_key);
      if (!localPackageInfo) {
        formatAppLog("error", "at uni_modules/uni-upgrade-center-app/pages/upgrade-popup.vue:155", "\u5B89\u88C5\u5305\u4FE1\u606F\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5");
        uni.navigateBack();
        return;
      }
      const requiredKey = ["version", "url", "type"];
      for (let key in localPackageInfo) {
        if (requiredKey.indexOf(key) !== -1 && !localPackageInfo[key]) {
          formatAppLog("error", "at uni_modules/uni-upgrade-center-app/pages/upgrade-popup.vue:163", `\u53C2\u6570 ${key} \u5FC5\u586B\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5`);
          uni.navigateBack();
          return;
        }
      }
      Object.assign(this, localPackageInfo);
      this.checkLocalStoragePackage();
    },
    onBackPress() {
      if (this.is_mandatory) {
        return true;
      }
      downloadTask && downloadTask.abort();
    },
    computed: {
      isWGT() {
        return this.type === "wgt";
      },
      isiOS() {
        return !this.isWGT ? this.platform.includes(platform_iOS) : false;
      }
    },
    methods: {
      checkLocalStoragePackage() {
        const localFilePathRecord = uni.getStorageSync(localFilePathKey);
        if (localFilePathRecord) {
          const {
            version,
            savedFilePath,
            installed
          } = localFilePathRecord;
          if (!installed && compare(version, this.version) === 0) {
            this.downloadSuccess = true;
            this.installForBeforeFilePath = savedFilePath;
            this.tempFilePath = savedFilePath;
          } else {
            this.deleteSavedFile(savedFilePath);
          }
        }
      },
      async closeUpdate() {
        if (this.downloading) {
          if (this.is_mandatory) {
            return uni.showToast({
              title: "\u4E0B\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u2026\u2026",
              icon: "none",
              duration: 500
            });
          }
          uni.showModal({
            title: "\u662F\u5426\u53D6\u6D88\u4E0B\u8F7D\uFF1F",
            cancelText: "\u5426",
            confirmText: "\u662F",
            success: (res2) => {
              if (res2.confirm) {
                downloadTask && downloadTask.abort();
                uni.navigateBack();
              }
            }
          });
          return;
        }
        if (this.downloadSuccess && this.tempFilePath) {
          await this.saveFile(this.tempFilePath, this.version);
          uni.navigateBack();
          return;
        }
        uni.navigateBack();
      },
      downloadPackage() {
        this.downloading = true;
        downloadTask = uni.downloadFile({
          url: this.url,
          success: (res2) => {
            if (res2.statusCode == 200) {
              this.downloadSuccess = true;
              this.tempFilePath = res2.tempFilePath;
              if (this.is_mandatory) {
                this.installPackage();
              }
            }
          },
          complete: () => {
            this.downloading = false;
            this.downLoadPercent = 0;
            this.downloadedSize = 0;
            this.packageFileSize = 0;
            downloadTask = null;
          }
        });
        downloadTask.onProgressUpdate((res2) => {
          this.downLoadPercent = res2.progress;
          this.downloadedSize = (res2.totalBytesWritten / Math.pow(1024, 2)).toFixed(2);
          this.packageFileSize = (res2.totalBytesExpectedToWrite / Math.pow(1024, 2)).toFixed(2);
        });
      },
      installPackage() {
        if (this.isWGT) {
          this.installing = true;
        }
        plus.runtime.install(this.tempFilePath, {
          force: false
        }, async (res2) => {
          this.installing = false;
          this.installed = true;
          if (this.isWGT) {
            if (this.is_mandatory) {
              uni.showLoading({
                icon: "none",
                title: "\u5B89\u88C5\u6210\u529F\uFF0C\u6B63\u5728\u91CD\u542F\u2026\u2026"
              });
              setTimeout(() => {
                uni.hideLoading();
                this.restart();
              }, 1e3);
            }
          } else {
            const localFilePathRecord = uni.getStorageSync(localFilePathKey);
            uni.setStorageSync(localFilePathKey, __spreadProps(__spreadValues({}, localFilePathRecord), {
              installed: true
            }));
          }
        }, async (err) => {
          if (this.installForBeforeFilePath) {
            await this.deleteSavedFile(this.installForBeforeFilePath);
            this.installForBeforeFilePath = "";
          }
          this.installing = false;
          this.installed = false;
          uni.showModal({
            title: `\u66F4\u65B0\u5931\u8D25${this.isWGT ? "" : "\uFF0CAPK\u6587\u4EF6\u4E0D\u5B58\u5728"}\uFF0C\u8BF7\u91CD\u65B0\u4E0B\u8F7D`,
            content: err.message,
            showCancel: false
          });
        });
        if (!this.isWGT) {
          uni.navigateBack();
        }
      },
      restart() {
        this.installed = false;
        plus.runtime.restart();
      },
      async saveFile(tempFilePath, version) {
        const [err, res2] = await uni.saveFile({
          tempFilePath
        });
        if (err) {
          return;
        }
        uni.setStorageSync(localFilePathKey, {
          version,
          savedFilePath: res2.savedFilePath
        });
      },
      deleteSavedFile(filePath) {
        uni.removeStorageSync(localFilePathKey);
        return uni.removeSavedFile({
          filePath
        });
      },
      jumpToAppStore() {
        plus.runtime.openURL(this.url);
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "mask flex-center" }, [
      vue.createElementVNode("view", { class: "content botton-radius" }, [
        vue.createElementVNode("view", { class: "content-top" }, [
          vue.createElementVNode("text", { class: "content-top-text" }, vue.toDisplayString($data.title), 1),
          vue.createElementVNode("image", {
            class: "content-top",
            style: { "top": "0" },
            width: "100%",
            height: "100%",
            src: _imports_0$3
          })
        ]),
        vue.createElementVNode("view", { class: "content-header" }),
        vue.createElementVNode("view", { class: "content-body" }, [
          vue.createElementVNode("view", { class: "title" }, [
            vue.createElementVNode("text", null, vue.toDisplayString($data.subTitle), 1),
            vue.createCommentVNode(' <text style="padding-left:20rpx;font-size: 0.5em;color: #666;">v.{{version}}</text> ')
          ]),
          vue.createElementVNode("view", { class: "body" }, [
            vue.createElementVNode("scroll-view", {
              class: "box-des-scroll",
              "scroll-y": "true"
            }, [
              vue.createElementVNode("text", { class: "box-des" }, vue.toDisplayString($data.contents), 1)
            ])
          ]),
          vue.createElementVNode("view", { class: "footer flex-center" }, [
            $options.isiOS ? (vue.openBlock(), vue.createElementBlock("button", {
              key: 0,
              class: "content-button",
              style: { "border": "none", "color": "#fff" },
              plain: "",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.jumpToAppStore && $options.jumpToAppStore(...args))
            }, vue.toDisplayString($data.downLoadBtnTextiOS), 1)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              !$data.downloadSuccess ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                $data.downloading ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "progress-box flex-column"
                }, [
                  vue.createElementVNode("progress", {
                    class: "progress",
                    "border-radius": "35",
                    percent: $data.downLoadPercent,
                    activeColor: "#3DA7FF",
                    "show-info": "",
                    "stroke-width": "10"
                  }, null, 8, ["percent"]),
                  vue.createElementVNode("view", { style: { "width": "100%", "font-size": "28rpx", "display": "flex", "justify-content": "space-around" } }, [
                    vue.createElementVNode("text", null, vue.toDisplayString($data.downLoadingText), 1),
                    vue.createElementVNode("text", null, "(" + vue.toDisplayString($data.downloadedSize) + "/" + vue.toDisplayString($data.packageFileSize) + "M)", 1)
                  ])
                ])) : (vue.openBlock(), vue.createElementBlock("button", {
                  key: 1,
                  class: "content-button",
                  style: { "border": "none", "color": "#fff" },
                  plain: "",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.downloadPackage && $options.downloadPackage(...args))
                }, vue.toDisplayString($data.downLoadBtnText), 1))
              ], 2112)) : $data.downloadSuccess && !$data.installed ? (vue.openBlock(), vue.createElementBlock("button", {
                key: 1,
                class: "content-button",
                style: { "border": "none", "color": "#fff" },
                plain: "",
                loading: $data.installing,
                disabled: $data.installing,
                onClick: _cache[2] || (_cache[2] = (...args) => $options.installPackage && $options.installPackage(...args))
              }, vue.toDisplayString($data.installing ? "\u6B63\u5728\u5B89\u88C5\u2026\u2026" : "\u4E0B\u8F7D\u5B8C\u6210\uFF0C\u7ACB\u5373\u5B89\u88C5"), 9, ["loading", "disabled"])) : vue.createCommentVNode("v-if", true),
              $data.installed && $options.isWGT ? (vue.openBlock(), vue.createElementBlock("button", {
                key: 2,
                class: "content-button",
                style: { "border": "none", "color": "#fff" },
                plain: "",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.restart && $options.restart(...args))
              }, " \u5B89\u88C5\u5B8C\u6BD5\uFF0C\u70B9\u51FB\u91CD\u542F ")) : vue.createCommentVNode("v-if", true)
            ], 64))
          ])
        ]),
        !$data.is_mandatory ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          class: "close-img",
          src: _imports_1$2,
          onClick: _cache[4] || (_cache[4] = vue.withModifiers((...args) => $options.closeUpdate && $options.closeUpdate(...args), ["stop"]))
        })) : vue.createCommentVNode("v-if", true)
      ])
    ]);
  }
  var Uni_modulesUniUpgradeCenterAppPagesUpgradePopup = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-upgrade-center-app/pages/upgrade-popup.vue"]]);
  function isTurnedOnPush() {
    var isOn = void 0;
    try {
      if (plus.os.name == "iOS") {
        var types2 = 0;
        var app = plus.ios.invoke("UIApplication", "sharedApplication");
        var settings = plus.ios.invoke(app, "currentUserNotificationSettings");
        if (settings) {
          types2 = settings.plusGetAttribute("types");
          plus.ios.deleteObject(settings);
        } else {
          types2 = plus.ios.invoke(app, "enabledRemoteNotificationTypes");
        }
        plus.ios.deleteObject(app);
        isOn = types2 != 0;
      } else {
        var main = plus.android.runtimeMainActivity();
        var manager = plus.android.invoke("com.igexin.sdk.PushManager", "getInstance");
        isOn = plus.android.invoke(manager, "isPushTurnedOn", main);
      }
    } catch (e) {
      formatAppLog("error", "at pages/ucenter/settings/dc-push/push.js:25", "exception in isTurnedOnPush@dc-push!!");
    }
    return isOn;
  }
  function turnOnPush() {
    try {
      if (plus.os.name == "iOS") {
        if (!isTurnedOnPush()) {
          settingInIos();
        }
      } else {
        var main = plus.android.runtimeMainActivity();
        var manager = plus.android.invoke("com.igexin.sdk.PushManager", "getInstance");
        plus.android.invoke(manager, "turnOnPush", main);
      }
    } catch (e) {
      formatAppLog("error", "at pages/ucenter/settings/dc-push/push.js:48", "exception in turnOnPush@dc-push!!");
    }
  }
  function trunOffPush() {
    try {
      if (plus.os.name == "iOS") {
      } else {
        var main = plus.android.runtimeMainActivity();
        var manager = plus.android.invoke("com.igexin.sdk.PushManager", "getInstance");
        plus.android.invoke(manager, "turnOffPush", main);
      }
    } catch (e) {
      formatAppLog("error", "at pages/ucenter/settings/dc-push/push.js:67", "exception in trunOffPush@dc-push!!");
    }
  }
  function settingInIos() {
    try {
      if (plus.os.name == "iOS") {
        var app = plus.ios.invoke("UIApplication", "sharedApplication");
        var setting2 = plus.ios.invoke("NSURL", "URLWithString:", "app-settings:");
        plus.ios.invoke(app, "openURL:", setting2);
        plus.ios.deleteObject(setting2);
        plus.ios.deleteObject(app);
      }
    } catch (e) {
      formatAppLog("error", "at pages/ucenter/settings/dc-push/push.js:84", "exception in settingInIos@dc-push!!");
    }
  }
  function settingInAndroid() {
    if (uni.getSystemInfoSync().platform == "android") {
      var main = plus.android.runtimeMainActivity();
      var Intent = plus.android.importClass("android.content.Intent");
      var Settings = plus.android.importClass("android.provider.Settings");
      var intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
      main.startActivity(intent);
    }
  }
  function setting() {
    if (uni.getSystemInfoSync().platform == "ios") {
      settingInIos();
    }
    if (uni.getSystemInfoSync().platform == "android") {
      settingInAndroid();
    }
  }
  var pushServer = {
    isOn: isTurnedOnPush,
    iosSetting: settingInIos,
    on: turnOnPush,
    off: trunOffPush,
    setting
  };
  const _sfc_main$m = {
    data() {
      return {
        pushServer,
        supportMode: [],
        pushIsOn: "wait",
        currentLanguage: ""
      };
    },
    computed: __spreadProps(__spreadValues({}, mapGetters({
      "userInfo": "user/info",
      "hasLogin": "user/hasLogin"
    })), {
      i18nEnable() {
        return getApp().globalData.config.i18n.enable;
      }
    }),
    onLoad() {
      this.currentLanguage = uni.getStorageSync("CURRENT_LANG") == "en" ? "English" : "\u7B80\u4F53\u4E2D\u6587";
      uni.setNavigationBarTitle({
        title: this.$t("settings.navigationBarTitle")
      });
      uni.checkIsSupportSoterAuthentication({
        success: (res2) => {
          formatAppLog("log", "at pages/ucenter/settings/settings.vue:67", res2);
          this.supportMode = res2.supportMode;
        },
        fail: (err) => {
          formatAppLog("log", "at pages/ucenter/settings/settings.vue:71", err);
        }
      });
    },
    onShow() {
      setTimeout(() => {
        this.pushIsOn = pushServer.isOn();
      }, 300);
    },
    methods: __spreadProps(__spreadValues({}, mapActions({
      logout: "user/logout"
    })), {
      toEdit() {
        uni.navigateTo({
          url: "/pages/ucenter/userinfo/userinfo"
        });
      },
      deactivate() {
        uni.navigateTo({
          url: "/pages/ucenter/settings/deactivate/deactivate"
        });
      },
      changePwd() {
        uni.navigateTo({
          url: "/pages/ucenter/login-page/pwd-retrieve/pwd-retrieve?phoneNumber=" + (this.userInfo && this.userInfo.mobile ? this.userInfo.mobile : ""),
          fail: (err) => {
            formatAppLog("log", "at pages/ucenter/settings/settings.vue:103", err);
          }
        });
      },
      startSoterAuthentication(checkAuthMode) {
        formatAppLog("log", "at pages/ucenter/settings/settings.vue:111", checkAuthMode);
        let title = { "fingerPrint": this.$t("settings.fingerPrint"), "facial": this.$t("settings.facial") }[checkAuthMode];
        this.checkIsSoterEnrolledInDevice({ checkAuthMode, title }).then(() => {
          formatAppLog("log", "at pages/ucenter/settings/settings.vue:116", checkAuthMode, title);
          uni.startSoterAuthentication({
            requestAuthModes: [checkAuthMode],
            challenge: "123456",
            authContent: this.$t("settings.please") + ` ${title}`,
            complete: (res2) => {
              formatAppLog("log", "at pages/ucenter/settings/settings.vue:123", res2);
            },
            success: (res2) => {
              formatAppLog("log", "at pages/ucenter/settings/settings.vue:126", res2);
              if (res2.errCode == 0) {
                return uni.showToast({
                  title: `${title}` + this.$t("settings.successText"),
                  icon: "none"
                });
              }
              uni.showToast({
                title: this.$t("settings.failTip"),
                icon: "none"
              });
            },
            fail: (err) => {
              formatAppLog("log", "at pages/ucenter/settings/settings.vue:146", err);
              formatAppLog("log", "at pages/ucenter/settings/settings.vue:147", `\u8BA4\u8BC1\u5931\u8D25:${err.errCode}`);
              uni.showToast({
                title: this.$t("settings.authFailed"),
                icon: "none"
              });
            }
          });
        });
      },
      checkIsSoterEnrolledInDevice({ checkAuthMode, title }) {
        return new Promise((resolve, reject) => {
          uni.checkIsSoterEnrolledInDevice({
            checkAuthMode,
            success: (res2) => {
              formatAppLog("log", "at pages/ucenter/settings/settings.vue:162", res2);
              if (res2.isEnrolled) {
                return resolve(res2);
              }
              uni.showToast({
                title: this.$t("settings.deviceNoOpen") + `${title}`,
                icon: "none"
              });
              reject(res2);
            },
            fail: (err) => {
              formatAppLog("log", "at pages/ucenter/settings/settings.vue:173", err);
              uni.showToast({
                title: `${title}` + this.$t("settings.fail"),
                icon: "none"
              });
              reject(err);
            }
          });
        });
      },
      clickLogout() {
        if (this.hasLogin) {
          uni.showModal({
            title: this.$t("settings.tips"),
            content: this.$t("settings.exitLogin"),
            cancelText: this.$t("settings.cancelText"),
            confirmText: this.$t("settings.confirmText"),
            success: (res2) => {
              if (res2.confirm) {
                this.logout();
                uni.navigateBack();
              }
            },
            fail: () => {
            },
            complete: () => {
            }
          });
        } else {
          uni.navigateTo({
            url: "/pages/ucenter/login-page/index/index"
          });
        }
      },
      clearTmp() {
        uni.showLoading({
          title: this.$t("settings.clearing"),
          mask: true
        });
        uni.getSavedFileList({
          success: (res2) => {
            if (res2.fileList.length > 0) {
              uni.removeSavedFile({
                filePath: res2.fileList[0].filePath,
                complete: (res3) => {
                  formatAppLog("log", "at pages/ucenter/settings/settings.vue:227", res3);
                  uni.hideLoading();
                  uni.showToast({
                    title: this.$t("settings.clearedSuccessed"),
                    icon: "none"
                  });
                }
              });
            } else {
              uni.hideLoading();
              uni.showToast({
                title: this.$t("settings.clearedSuccessed"),
                icon: "none"
              });
            }
          },
          complete: (e) => {
            formatAppLog("log", "at pages/ucenter/settings/settings.vue:244", e);
          }
        });
      },
      changeLanguage() {
        formatAppLog("log", "at pages/ucenter/settings/settings.vue:249", "\u8BED\u8A00\u5207\u6362");
        uni.showActionSheet({
          itemList: ["English", "\u7B80\u4F53\u4E2D\u6587"],
          success: (res2) => {
            formatAppLog("log", "at pages/ucenter/settings/settings.vue:253", res2.tapIndex);
            let language = uni.getStorageSync("CURRENT_LANG");
            if (!res2.tapIndex && language == "zh-Hans" || res2.tapIndex && language == "en") {
              const globalData = getApp().globalData;
              if (language === "en") {
                language = globalData.locale = "zh-Hans";
              } else {
                language = globalData.locale = "en";
              }
              uni.setStorageSync("CURRENT_LANG", language);
              getApp().globalData.$i18n.locale = language;
              this.currentLanguage = res2.tapIndex ? "\u7B80\u4F53\u4E2D\u6587" : "English";
              if (uni.setLocale) {
                uni.setLocale(language);
              }
              uni.reLaunch({
                url: "/pages/list/list",
                complete: () => {
                  uni.$emit("changeLanguage", language);
                }
              });
            }
          },
          fail: () => {
          },
          complete: () => {
          }
        });
      }
    })
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_1$1);
    const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_2$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createCommentVNode(" \u529F\u80FD\u5217\u8868 "),
      vue.createVNode(_component_uni_list, {
        class: "mt10",
        border: false
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_list_item, {
            title: _ctx.$t("settings.userInfo"),
            to: "/pages/ucenter/userinfo/userinfo",
            link: "navigateTo"
          }, null, 8, ["title"]),
          _ctx.userInfo.mobile ? (vue.openBlock(), vue.createBlock(_component_uni_list_item, {
            key: 0,
            title: _ctx.$t("settings.changePassword"),
            to: "/pages/ucenter/login-page/pwd-retrieve/pwd-retrieve?phoneNumber=" + _ctx.userInfo.mobile,
            link: "navigateTo"
          }, null, 8, ["title", "to"])) : vue.createCommentVNode("v-if", true)
        ]),
        _: 1
      }),
      vue.createVNode(_component_uni_list, {
        class: "mt10",
        border: false
      }, {
        default: vue.withCtx(() => [
          vue.createCommentVNode(" \u68C0\u67E5push\u8FC7\u7A0B\u672A\u7ED3\u675F\u4E0D\u663E\u793A\uFF0Cpush\u8BBE\u7F6E\u9879 "),
          vue.createVNode(_component_uni_list_item, {
            title: _ctx.$t("settings.clearTmp"),
            onClick: $options.clearTmp,
            link: ""
          }, null, 8, ["title", "onClick"]),
          vue.withDirectives(vue.createVNode(_component_uni_list_item, {
            title: _ctx.$t("settings.pushServer"),
            onClick: _cache[0] || (_cache[0] = ($event) => $data.pushIsOn ? $data.pushServer.off() : $data.pushServer.on()),
            showSwitch: "",
            switchChecked: $data.pushIsOn
          }, null, 8, ["title", "switchChecked"]), [
            [vue.vShow, $data.pushIsOn != "wait"]
          ]),
          $data.supportMode.includes("fingerPrint") ? (vue.openBlock(), vue.createBlock(_component_uni_list_item, {
            key: 0,
            title: _ctx.$t("settings.fingerPrint"),
            onClick: _cache[1] || (_cache[1] = ($event) => $options.startSoterAuthentication("fingerPrint")),
            link: ""
          }, null, 8, ["title"])) : vue.createCommentVNode("v-if", true),
          $data.supportMode.includes("facial") ? (vue.openBlock(), vue.createBlock(_component_uni_list_item, {
            key: 1,
            title: _ctx.$t("settings.facial"),
            onClick: _cache[2] || (_cache[2] = ($event) => $options.startSoterAuthentication("facial")),
            link: ""
          }, null, 8, ["title"])) : vue.createCommentVNode("v-if", true),
          $options.i18nEnable ? (vue.openBlock(), vue.createBlock(_component_uni_list_item, {
            key: 2,
            title: _ctx.$t("settings.changeLanguage"),
            onClick: $options.changeLanguage,
            rightText: $data.currentLanguage,
            link: ""
          }, null, 8, ["title", "onClick", "rightText"])) : vue.createCommentVNode("v-if", true)
        ]),
        _: 1
      }),
      vue.createVNode(_component_uni_list, {
        class: "mt10",
        border: false
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_list_item, {
            onClick: $options.deactivate,
            title: _ctx.$t("settings.deactivate"),
            link: "navigateTo"
          }, null, 8, ["onClick", "title"])
        ]),
        _: 1
      }),
      vue.createCommentVNode(" \u9000\u51FA/\u767B\u5F55 \u6309\u94AE "),
      vue.createElementVNode("view", {
        class: "bottom-back",
        onClick: _cache[3] || (_cache[3] = (...args) => $options.clickLogout && $options.clickLogout(...args))
      }, [
        _ctx.hasLogin ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 0,
          class: "bottom-back-text"
        }, vue.toDisplayString(_ctx.$t("settings.logOut")), 1)) : (vue.openBlock(), vue.createElementBlock("text", {
          key: 1,
          class: "bottom-back-text"
        }, vue.toDisplayString(_ctx.$t("settings.login")), 1))
      ])
    ]);
  }
  var PagesUcenterSettingsSettings = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/ucenter/settings/settings.vue"]]);
  var popup = {
    data() {
      return {};
    },
    created() {
      this.popup = this.getParent();
    },
    methods: {
      getParent(name = "uniPopup") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  var en$2 = {
    "uni-popup.cancel": "cancel",
    "uni-popup.ok": "ok",
    "uni-popup.placeholder": "pleace enter",
    "uni-popup.title": "Hint",
    "uni-popup.shareTitle": "Share to"
  };
  var zhHans$3 = {
    "uni-popup.cancel": "\u53D6\u6D88",
    "uni-popup.ok": "\u786E\u5B9A",
    "uni-popup.placeholder": "\u8BF7\u8F93\u5165",
    "uni-popup.title": "\u63D0\u793A",
    "uni-popup.shareTitle": "\u5206\u4EAB\u5230"
  };
  var zhHant$1 = {
    "uni-popup.cancel": "\u53D6\u6D88",
    "uni-popup.ok": "\u78BA\u5B9A",
    "uni-popup.placeholder": "\u8ACB\u8F38\u5165",
    "uni-popup.title": "\u63D0\u793A",
    "uni-popup.shareTitle": "\u5206\u4EAB\u5230"
  };
  var messages$3 = {
    en: en$2,
    "zh-Hans": zhHans$3,
    "zh-Hant": zhHant$1
  };
  const { t: t$2 } = initVueI18n(messages$3);
  const _sfc_main$l = {
    name: "uniPopupDialog",
    mixins: [popup],
    emits: ["confirm", "close"],
    props: {
      value: {
        type: [String, Number],
        default: ""
      },
      placeholder: {
        type: [String, Number],
        default: ""
      },
      type: {
        type: String,
        default: "error"
      },
      mode: {
        type: String,
        default: "base"
      },
      title: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      },
      beforeClose: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: ""
      },
      confirmText: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        dialogType: "error",
        focus: false,
        val: ""
      };
    },
    computed: {
      okText() {
        return this.confirmText || t$2("uni-popup.ok");
      },
      closeText() {
        return this.cancelText || t$2("uni-popup.cancel");
      },
      placeholderText() {
        return this.placeholder || t$2("uni-popup.placeholder");
      },
      titleText() {
        return this.title || t$2("uni-popup.title");
      }
    },
    watch: {
      type(val) {
        this.dialogType = val;
      },
      mode(val) {
        if (val === "input") {
          this.dialogType = "info";
        }
      },
      value(val) {
        this.val = val;
      }
    },
    created() {
      this.popup.disableMask();
      if (this.mode === "input") {
        this.dialogType = "info";
        this.val = this.value;
      } else {
        this.dialogType = this.type;
      }
    },
    mounted() {
      this.focus = true;
    },
    methods: {
      onOk() {
        if (this.mode === "input") {
          this.$emit("confirm", this.val);
        } else {
          this.$emit("confirm");
        }
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      closeDialog() {
        this.$emit("close");
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      close() {
        this.popup.close();
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-popup-dialog" }, [
      vue.createElementVNode("view", { class: "uni-dialog-title" }, [
        vue.createElementVNode("text", {
          class: vue.normalizeClass(["uni-dialog-title-text", ["uni-popup__" + $data.dialogType]])
        }, vue.toDisplayString($options.titleText), 3)
      ]),
      $props.mode === "base" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-dialog-content"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode("text", { class: "uni-dialog-content-text" }, vue.toDisplayString($props.content), 1)
        ], true)
      ])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-dialog-content"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.withDirectives(vue.createElementVNode("input", {
            class: "uni-dialog-input",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.val = $event),
            type: "text",
            placeholder: $options.placeholderText,
            focus: $data.focus
          }, null, 8, ["placeholder", "focus"]), [
            [vue.vModelText, $data.val]
          ])
        ], true)
      ])),
      vue.createElementVNode("view", { class: "uni-dialog-button-group" }, [
        vue.createElementVNode("view", {
          class: "uni-dialog-button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.closeDialog && $options.closeDialog(...args))
        }, [
          vue.createElementVNode("text", { class: "uni-dialog-button-text" }, vue.toDisplayString($options.closeText), 1)
        ]),
        vue.createElementVNode("view", {
          class: "uni-dialog-button uni-border-left",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.onOk && $options.onOk(...args))
        }, [
          vue.createElementVNode("text", { class: "uni-dialog-button-text uni-button-color" }, vue.toDisplayString($options.okText), 1)
        ])
      ])
    ]);
  }
  var __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-6f54520a"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue"]]);
  const db$3 = St.database();
  db$3.collection("uni-id-users");
  const _sfc_main$k = {
    emits: ["next"],
    computed: __spreadValues({}, mapGetters({
      userInfo: "user/info",
      login: "user/hasLogin"
    })),
    data() {
      return {};
    },
    methods: __spreadProps(__spreadValues({}, mapMutations({
      setUserInfo: "user/login"
    })), {
      beforeGetphonenumber() {
        uni.showLoading({
          mask: true
        });
        wx.checkSession({
          success() {
            formatAppLog("log", "at components/uni-bindMobileByMpWeixin/uni-bindMobileByMpWeixin.vue:44", "session_key \u672A\u8FC7\u671F");
            uni.hideLoading();
          },
          fail() {
            formatAppLog("log", "at components/uni-bindMobileByMpWeixin/uni-bindMobileByMpWeixin.vue:48", "session_key \u5DF2\u7ECF\u5931\u6548\uFF0C\u6B63\u5728\u6267\u884C\u66F4\u65B0");
            wx.login({
              success({ code }) {
                St.callFunction({
                  name: "uni-id-cf",
                  data: {
                    "action": "refreshSessionKey",
                    "params": {
                      code
                    }
                  },
                  complete: (e) => {
                    formatAppLog("log", "at components/uni-bindMobileByMpWeixin/uni-bindMobileByMpWeixin.vue:60", e);
                    uni.hideLoading();
                  }
                });
              },
              fail: (err) => {
                formatAppLog("error", "at components/uni-bindMobileByMpWeixin/uni-bindMobileByMpWeixin.vue:66", err);
              }
            });
          }
        });
      },
      bindMobileByMpWeixin(e) {
        formatAppLog("log", "at components/uni-bindMobileByMpWeixin/uni-bindMobileByMpWeixin.vue:73", e.detail);
        St.callFunction({
          name: "uni-id-cf",
          data: {
            "action": "bindMobileByMpWeixin",
            "params": e.detail
          },
          complete: (e2) => {
            formatAppLog("log", "at components/uni-bindMobileByMpWeixin/uni-bindMobileByMpWeixin.vue:81", e2);
          },
          success: (e2) => {
            uni.showToast({
              title: e2.result.msg || "\u7ED1\u5B9A\u6210\u529F",
              icon: "none"
            });
            if (e2.result.code === 0) {
              this.setUserInfo({
                "mobile": e2.result.mobile
              });
            }
            this.closeMe();
          }
        });
      },
      async open(uid) {
        this.$refs.popup.open();
        this.beforeGetphonenumber();
      },
      closeMe(e) {
        this.$refs.popup.close();
      }
    })
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_5);
    return vue.openBlock(), vue.createBlock(_component_uni_popup, {
      ref: "popup",
      type: "bottom"
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "box" }, [
          vue.createElementVNode("text", { class: "headBox" }, "\u7ED1\u5B9A\u8D44\u6599"),
          vue.createElementVNode("text", { class: "tip" }, "\u5C06\u4E00\u952E\u83B7\u53D6\u4F60\u7684\u624B\u673A\u53F7\u7801\u7ED1\u5B9A\u4F60\u7684\u4E2A\u4EBA\u8D44\u6599"),
          vue.createElementVNode("view", { class: "btnBox" }, [
            vue.createElementVNode("text", {
              onClick: _cache[0] || (_cache[0] = (...args) => $options.closeMe && $options.closeMe(...args)),
              class: "close"
            }, "\u5173\u95ED"),
            vue.createElementVNode("button", {
              class: "agree",
              type: "warn",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.beforeGetphonenumber && $options.beforeGetphonenumber(...args)),
              "open-type": "getPhoneNumber",
              onGetphonenumber: _cache[2] || (_cache[2] = (...args) => $options.bindMobileByMpWeixin && $options.bindMobileByMpWeixin(...args))
            }, "\u83B7\u53D6", 32)
          ])
        ])
      ]),
      _: 1
    }, 512);
  }
  var __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-11b8d1f8"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/components/uni-bindMobileByMpWeixin/uni-bindMobileByMpWeixin.vue"]]);
  const db$2 = St.database();
  const usersTable = db$2.collection("uni-id-users");
  const _sfc_main$j = {
    data() {
      return {
        univerifyStyle: {
          authButton: {
            "title": "\u672C\u673A\u53F7\u7801\u4E00\u952E\u7ED1\u5B9A"
          },
          otherLoginButton: {
            "title": "\u5176\u4ED6\u53F7\u7801\u7ED1\u5B9A"
          }
        }
      };
    },
    onLoad() {
      this.univerifyStyle.authButton.title = this.$t("userinfo.bindPhoneNumber");
      this.univerifyStyle.otherLoginButton.title = this.$t("userinfo.bindOtherLogin");
      uni.setNavigationBarTitle({
        title: this.$t("userinfo.navigationBarTitle")
      });
    },
    computed: __spreadProps(__spreadValues({}, mapGetters({
      userInfo: "user/info",
      login: "user/hasLogin"
    })), {
      avatar_file() {
        if (this.userInfo.avatar_file && this.userInfo.avatar_file.url) {
          return this.userInfo.avatar_file;
        }
      }
    }),
    methods: __spreadProps(__spreadValues({}, mapMutations({
      setUserInfo: "user/login"
    })), {
      bindMobile() {
        uni.preLogin({
          provider: "univerify",
          success: this.univerify(),
          fail: (res2) => {
            formatAppLog("log", "at pages/ucenter/userinfo/userinfo.vue:75", res2);
            this.bindMobileBySmsCode();
          }
        });
      },
      univerify() {
        uni.login({
          "provider": "univerify",
          "univerifyStyle": this.univerifyStyle,
          success: async (e) => {
            formatAppLog("log", "at pages/ucenter/userinfo/userinfo.vue:95", e.authResult);
            St.callFunction({
              name: "uni-id-cf",
              data: {
                action: "bindMobileByUniverify",
                params: e.authResult
              },
              success: ({
                result
              }) => {
                formatAppLog("log", "at pages/ucenter/userinfo/userinfo.vue:105", result);
                if (result.code === 0) {
                  this.setUserInfo({
                    "mobile": result.mobile
                  });
                  uni.closeAuthView();
                } else {
                  uni.showModal({
                    content: result.msg,
                    showCancel: false,
                    complete() {
                      uni.closeAuthView();
                    }
                  });
                }
              }
            });
          },
          fail: (err) => {
            formatAppLog("log", "at pages/ucenter/userinfo/userinfo.vue:124", err);
            if (err.code == "30002" || err.code == "30001") {
              this.bindMobileBySmsCode();
            }
          }
        });
      },
      bindMobileBySmsCode() {
        uni.navigateTo({
          url: "/pages/ucenter/userinfo/bind-mobile/bind-mobile"
        });
      },
      setNickname(nickname) {
        formatAppLog("log", "at pages/ucenter/userinfo/userinfo.vue:137", nickname);
        if (nickname) {
          usersTable.where("_id==$env.uid").update({
            nickname
          }).then((e) => {
            formatAppLog("log", "at pages/ucenter/userinfo/userinfo.vue:142", e);
            if (e.result.updated) {
              uni.showToast({
                title: this.$t("common.updateSucceeded"),
                icon: "none"
              });
              this.setUserInfo({
                nickname
              });
            } else {
              uni.showToast({
                title: this.$t("userinfo.noChange"),
                icon: "none"
              });
            }
          });
          this.$refs.dialog.close();
        } else {
          this.$refs.dialog.open();
        }
      },
      setAvatarFile(avatar_file) {
        uni.showLoading({
          title: this.$t("userinfo.setting"),
          mask: true
        });
        usersTable.where("_id==$env.uid").update({
          avatar_file
        }).then((res2) => {
          formatAppLog("log", "at pages/ucenter/userinfo/userinfo.vue:172", res2);
          if (avatar_file) {
            uni.showToast({
              icon: "none",
              title: this.$t("userinfo.setSucceeded")
            });
          } else {
            uni.showToast({
              icon: "none",
              title: this.$t("userinfo.deleteSucceeded")
            });
          }
          this.setUserInfo({
            avatar_file
          });
        }).catch((err) => {
          uni.showModal({
            content: err.message || this.$t("userinfo.requestFail"),
            showCancel: false
          });
        }).finally(() => {
          uni.hideLoading();
        });
      },
      uploadAvatarImg(res2) {
        const crop = {
          quality: 100,
          width: 600,
          height: 600,
          resize: true
        };
        uni.chooseImage({
          count: 1,
          crop,
          success: async (res3) => {
            formatAppLog("log", "at pages/ucenter/userinfo/userinfo.vue:207", res3);
            let tempFile = res3.tempFiles[0], avatar_file = {
              extname: tempFile.path.split(".")[tempFile.path.split(".").length - 1]
            }, filePath = res3.tempFilePaths[0];
            formatAppLog("log", "at pages/ucenter/userinfo/userinfo.vue:233", this.userInfo);
            let cloudPath = this.userInfo._id + "" + Date.now();
            avatar_file.name = cloudPath;
            uni.showLoading({
              title: this.$t("userinfo.uploading"),
              mask: true
            });
            let {
              fileID
            } = await St.uploadFile({
              filePath,
              cloudPath,
              fileType: "image"
            });
            avatar_file.url = fileID;
            formatAppLog("log", "at pages/ucenter/userinfo/userinfo.vue:249", {
              avatar_file
            });
            uni.hideLoading();
            this.setAvatarFile(avatar_file);
          }
        });
      }
    })
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cloud_image = resolveEasycom(vue.resolveDynamicComponent("cloud-image"), __easycom_0$3);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
    const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_1$1);
    const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_2$1);
    const _component_uni_popup_dialog = resolveEasycom(vue.resolveDynamicComponent("uni-popup-dialog"), __easycom_4);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_5);
    const _component_uni_bindMobileByMpWeixin = resolveEasycom(vue.resolveDynamicComponent("uni-bindMobileByMpWeixin"), __easycom_6);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_list, null, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_list_item, { class: "item" }, {
            body: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "item" }, [
                vue.createElementVNode("text", null, vue.toDisplayString(_ctx.$t("userinfo.ProfilePhoto")), 1),
                $options.avatar_file ? (vue.openBlock(), vue.createBlock(_component_cloud_image, {
                  key: 0,
                  onClick: $options.uploadAvatarImg,
                  src: $options.avatar_file.url,
                  width: "50px",
                  height: "50px"
                }, null, 8, ["onClick", "src"])) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 1,
                  onClick: $options.uploadAvatarImg,
                  class: "chooseAvatar",
                  type: "plusempty",
                  size: "30",
                  color: "#dddddd"
                }, null, 8, ["onClick"]))
              ])
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_list_item, {
            class: "item",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.setNickname("")),
            title: _ctx.$t("userinfo.nickname"),
            rightText: _ctx.userInfo.nickname || _ctx.$t("userinfo.notSet"),
            link: ""
          }, null, 8, ["title", "rightText"]),
          vue.createVNode(_component_uni_list_item, {
            class: "item",
            onClick: $options.bindMobile,
            title: _ctx.$t("userinfo.phoneNumber"),
            rightText: _ctx.userInfo.mobile || _ctx.$t("userinfo.notSpecified"),
            link: ""
          }, null, 8, ["onClick", "title", "rightText"])
        ]),
        _: 1
      }),
      vue.createVNode(_component_uni_popup, {
        ref: "dialog",
        type: "dialog"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_popup_dialog, {
            mode: "input",
            value: _ctx.userInfo.nickname,
            onConfirm: $options.setNickname,
            title: _ctx.$t("userinfo.setNickname"),
            placeholder: _ctx.$t("userinfo.setNicknamePlaceholder")
          }, null, 8, ["value", "onConfirm", "title", "placeholder"])
        ]),
        _: 1
      }, 512),
      vue.createVNode(_component_uni_bindMobileByMpWeixin, { ref: "uni-bindMobileByMpWeixin" }, null, 512)
    ]);
  }
  var PagesUcenterUserinfoUserinfo = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-5c7bc061"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/ucenter/userinfo/userinfo.vue"]]);
  function determineDirection(clipX, clipY, clipWidth, clipHeight, currentX, currentY) {
    let corner;
    const mainPoint = [clipX + clipWidth / 2, clipY + clipHeight / 2];
    const currentPoint = [currentX, currentY];
    if (currentPoint[0] <= mainPoint[0] && currentPoint[1] <= mainPoint[1]) {
      corner = 3;
    } else if (currentPoint[0] >= mainPoint[0] && currentPoint[1] <= mainPoint[1]) {
      corner = 2;
    } else if (currentPoint[0] <= mainPoint[0] && currentPoint[1] >= mainPoint[1]) {
      corner = 4;
    } else if (currentPoint[0] >= mainPoint[0] && currentPoint[1] >= mainPoint[1]) {
      corner = 1;
    }
    return corner;
  }
  function calcImageOffset(data, scale) {
    let left = data.imageLeft;
    let top = data.imageTop;
    scale = scale || data.scale;
    let imageWidth = data.imageWidth;
    let imageHeight = data.imageHeight;
    if (data.angle / 90 % 2) {
      imageWidth = data.imageHeight;
      imageHeight = data.imageWidth;
    }
    const {
      clipX,
      clipWidth,
      clipY,
      clipHeight
    } = data;
    const currentImageSize = (size) => size * scale / 2;
    const currentImageWidth = currentImageSize(imageWidth);
    const currentImageHeight = currentImageSize(imageHeight);
    left = clipX + currentImageWidth >= left ? left : clipX + currentImageWidth;
    left = clipX + clipWidth - currentImageWidth <= left ? left : clipX + clipWidth - currentImageWidth;
    top = clipY + currentImageHeight >= top ? top : clipY + currentImageHeight;
    top = clipY + clipHeight - currentImageHeight <= top ? top : clipY + clipHeight - currentImageHeight;
    return {
      left,
      top,
      scale
    };
  }
  function calcImageScale(data, scale) {
    scale = scale || data.scale;
    let {
      imageWidth,
      imageHeight,
      clipWidth,
      clipHeight,
      angle
    } = data;
    if (angle / 90 % 2) {
      imageWidth = imageHeight;
      imageHeight = imageWidth;
    }
    if (imageWidth * scale < clipWidth) {
      scale = clipWidth / imageWidth;
    }
    if (imageHeight * scale < clipHeight) {
      scale = Math.max(scale, clipHeight / imageHeight);
    }
    return scale;
  }
  function calcImageSize(width, height, data) {
    let imageWidth = width, imageHeight = height;
    let {
      clipWidth,
      clipHeight,
      sysinfo,
      width: originWidth,
      height: originHeight
    } = data;
    if (imageWidth && imageHeight) {
      if (imageWidth / imageHeight > (clipWidth || originWidth) / (clipWidth || originHeight)) {
        imageHeight = clipHeight || originHeight;
        imageWidth = width / height * imageHeight;
      } else {
        imageWidth = clipWidth || originWidth;
        imageHeight = height / width * imageWidth;
      }
    } else {
      let sys = sysinfo || uni.getSystemInfoSync();
      imageWidth = sys.windowWidth;
      imageHeight = 0;
    }
    return {
      imageWidth,
      imageHeight
    };
  }
  function calcPythagoreanTheorem(width, height) {
    return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
  }
  function clipTouchMoveOfCalculate(data, event) {
    const clientX = event.touches[0].clientX;
    const clientY = event.touches[0].clientY;
    let {
      clipWidth,
      clipHeight,
      clipY: oldClipY,
      clipX: oldClipX,
      clipStart,
      isLockRatio,
      maxWidth,
      minWidth,
      maxHeight,
      minHeight
    } = data;
    maxWidth = maxWidth / 2;
    minWidth = minWidth / 2;
    minHeight = minHeight / 2;
    maxHeight = maxHeight / 2;
    let width = clipWidth, height = clipHeight, clipY = oldClipY, clipX = oldClipX, sizecorrect = () => {
      width = width <= maxWidth ? width >= minWidth ? width : minWidth : maxWidth;
      height = height <= maxHeight ? height >= minHeight ? height : minHeight : maxHeight;
    }, sizeinspect = () => {
      sizecorrect();
      if ((width > maxWidth || width < minWidth || height > maxHeight || height < minHeight) && isLockRatio) {
        return false;
      } else {
        return true;
      }
    };
    height = clipStart.height + (clipStart.corner > 1 && clipStart.corner < 4 ? 1 : -1) * (clipStart.y - clientY);
    switch (clipStart.corner) {
      case 1:
        width = clipStart.width - clipStart.x + clientX;
        if (isLockRatio) {
          height = width / (clipWidth / clipHeight);
        }
        if (!sizeinspect())
          return;
        break;
      case 2:
        width = clipStart.width - clipStart.x + clientX;
        if (isLockRatio) {
          height = width / (clipWidth / clipHeight);
        }
        if (!sizeinspect()) {
          return;
        } else {
          clipY = clipStart.clipY - (height - clipStart.height);
        }
        break;
      case 3:
        width = clipStart.width + clipStart.x - clientX;
        if (isLockRatio) {
          height = width / (clipWidth / clipHeight);
        }
        if (!sizeinspect()) {
          return;
        } else {
          clipY = clipStart.clipY - (height - clipStart.height);
          clipX = clipStart.clipX - (width - clipStart.width);
        }
        break;
      case 4:
        width = clipStart.width + clipStart.x - clientX;
        if (isLockRatio) {
          height = width / (clipWidth / clipHeight);
        }
        if (!sizeinspect()) {
          return;
        } else {
          clipX = clipStart.clipX - (width - clipStart.width);
        }
        break;
    }
    return {
      width,
      height,
      clipX,
      clipY
    };
  }
  function imageTouchMoveOfCalcOffset(data, clientXForLeft, clientYForLeft) {
    let left = clientXForLeft - data.touchRelative[0].x, top = clientYForLeft - data.touchRelative[0].y;
    return {
      left,
      top
    };
  }
  var _imports_0$2 = "/static/limeClipper/photo.svg";
  var _imports_1$1 = "/static/limeClipper/rotate.svg";
  const cache$1 = {};
  const _sfc_main$i = {
    name: "l-clipper",
    props: {
      value: {
        type: Boolean,
        default: true
      },
      customStyle: {
        type: String
      },
      canvasId: {
        type: String,
        default: "l-clipper"
      },
      zIndex: {
        type: Number,
        default: 99
      },
      imageUrl: {
        type: String
      },
      fileType: {
        type: String,
        default: "png"
      },
      quality: {
        type: Number,
        default: 1
      },
      width: {
        type: Number,
        default: 400
      },
      height: {
        type: Number,
        default: 400
      },
      minWidth: {
        type: Number,
        default: 200
      },
      maxWidth: {
        type: Number,
        default: 600
      },
      minHeight: {
        type: Number,
        default: 200
      },
      maxHeight: {
        type: Number,
        default: 600
      },
      isLockWidth: {
        type: Boolean,
        default: false
      },
      isLockHeight: {
        type: Boolean,
        default: false
      },
      isLockRatio: {
        type: Boolean,
        default: true
      },
      scaleRatio: {
        type: Number,
        default: 1
      },
      minRatio: {
        type: Number,
        default: 0.5
      },
      maxRatio: {
        type: Number,
        default: 2
      },
      isDisableScale: {
        type: Boolean,
        default: false
      },
      isDisableRotate: {
        type: Boolean,
        default: false
      },
      isLimitMove: {
        type: Boolean,
        default: false
      },
      isShowPhotoBtn: {
        type: Boolean,
        default: true
      },
      isShowRotateBtn: {
        type: Boolean,
        default: true
      },
      isShowConfirmBtn: {
        type: Boolean,
        default: true
      },
      isShowCancelBtn: {
        type: Boolean,
        default: true
      },
      rotateAngle: {
        type: Number,
        default: 90
      },
      source: {
        type: Object,
        default: () => ({
          album: "\u4ECE\u76F8\u518C\u4E2D\u9009\u62E9",
          camera: "\u62CD\u7167"
        })
      }
    },
    data() {
      return {
        canvasWidth: 0,
        canvasHeight: 0,
        clipX: 0,
        clipY: 0,
        clipWidth: 0,
        clipHeight: 0,
        animation: false,
        imageWidth: 0,
        imageHeight: 0,
        imageTop: 0,
        imageLeft: 0,
        scale: 1,
        angle: 0,
        image: this.imageUrl,
        sysinfo: {},
        throttleTimer: null,
        throttleFlag: true,
        timeClipCenter: null,
        flagClipTouch: false,
        flagEndTouch: false,
        clipStart: {},
        animationTimer: null,
        touchRelative: [{ x: 0, y: 0 }],
        hypotenuseLength: 0,
        ctx: null
      };
    },
    computed: {
      clipStyle() {
        const { clipWidth, clipHeight, clipY, clipX, animation } = this;
        return `
			width: ${clipWidth}px;
			height:${clipHeight}px;
			transition-property: ${animation ? "" : "background"};
			left: ${clipX}px;
			top: ${clipY}px
			`;
      },
      imageStyle() {
        const { imageWidth, imageHeight, imageLeft, imageTop, animation, scale, angle } = this;
        return `
				width: ${imageWidth ? imageWidth + "px" : "auto"};
				height: ${imageHeight ? imageHeight + "px" : "auto"};
				transform: translate3d(${imageLeft - imageWidth / 2}px, ${imageTop - imageHeight / 2}px, 0) scale(${scale}) rotate(${angle}deg);
				transition-duration: ${animation ? 0.35 : 0}s
			`;
      },
      clipSize() {
        const { clipWidth, clipHeight } = this;
        return { clipWidth, clipHeight };
      },
      clipPoint() {
        const { clipY, clipX } = this;
        return { clipY, clipX };
      }
    },
    watch: {
      value(val) {
        if (!val) {
          this.animation = 0;
          this.angle = 0;
        } else {
          if (this.imageUrl) {
            const { imageWidth, imageHeight, imageLeft, imageTop, scale, clipX, clipY, clipWidth, clipHeight, path } = (cache$1 == null ? void 0 : cache$1[this.imageUrl]) || {};
            if (path != this.image) {
              this.image = this.imageUrl;
            } else {
              this.setDiffData({ imageWidth, imageHeight, imageLeft, imageTop, scale, clipX, clipY, clipWidth, clipHeight });
            }
          }
        }
      },
      imageUrl(url) {
        this.image = url;
      },
      image: {
        handler: async function(url) {
          this.getImageInfo(url);
        }
      },
      clipSize({ widthVal, heightVal }) {
        let { minWidth, minHeight } = this;
        minWidth = minWidth / 2;
        minHeight = minHeight / 2;
        if (widthVal < minWidth) {
          this.setDiffData({ clipWidth: minWidth });
        }
        if (heightVal < minHeight) {
          this.setDiffData({ clipHeight: minHeight });
        }
        this.calcClipSize();
      },
      angle(val) {
        this.animation = true;
        this.moveStop();
        const { isLimitMove } = this;
        if (isLimitMove && val % 90) {
          this.setDiffData({
            angle: Math.round(val / 90) * 90
          });
        }
        this.imgMarginDetectionScale();
      },
      animation(val) {
        clearTimeout(this.animationTimer);
        if (val) {
          let animationTimer = setTimeout(() => {
            this.setDiffData({
              animation: false
            });
          }, 260);
          this.setDiffData({ animationTimer });
          this.animationTimer = animationTimer;
        }
      },
      isLimitMove(val) {
        if (val) {
          if (this.angle % 90) {
            this.setDiffData({
              angle: Math.round(this.angle / 90) * 90
            });
          }
          this.imgMarginDetectionScale();
        }
      },
      clipPoint() {
        this.cutDetectionPosition();
      },
      width(width, oWidth) {
        if (width !== oWidth) {
          this.setDiffData({
            clipWidth: width / 2
          });
        }
      },
      height(height, oHeight) {
        if (height !== oHeight) {
          this.setDiffData({
            clipHeight: height / 2
          });
        }
      }
    },
    mounted() {
      const sysinfo = uni.getSystemInfoSync();
      this.sysinfo = sysinfo;
      this.setClipInfo();
      if (this.image) {
        this.getImageInfo(this.image);
      }
      this.setClipCenter();
      this.calcClipSize();
      this.cutDetectionPosition();
    },
    methods: {
      setDiffData(data) {
        Object.keys(data).forEach((key) => {
          if (this[key] !== data[key]) {
            this[key] = data[key];
          }
        });
      },
      getImageInfo(url) {
        if (!url)
          return;
        if (this.value) {
          uni.showLoading({
            title: "\u8BF7\u7A0D\u5019...",
            mask: true
          });
        }
        uni.getImageInfo({
          src: url,
          success: (res2) => {
            this.imgComputeSize(res2.width, res2.height);
            this.image = res2.path;
            if (this.isLimitMove) {
              this.imgMarginDetectionScale();
              this.$emit("ready", res2);
            }
            const { imageWidth, imageHeight, imageLeft, imageTop, scale, clipX, clipY, clipWidth, clipHeight } = this;
            cache$1[url] = Object.assign(res2, { imageWidth, imageHeight, imageLeft, imageTop, scale, clipX, clipY, clipWidth, clipHeight });
          },
          fail: (err) => {
            this.imgComputeSize();
            if (this.isLimitMove) {
              this.imgMarginDetectionScale();
            }
          }
        });
      },
      setClipInfo() {
        const { width, height, sysinfo, canvasId } = this;
        const clipWidth = width / 2;
        const clipHeight = height / 2;
        const clipY = (sysinfo.windowHeight - clipHeight) / 2;
        const clipX = (sysinfo.windowWidth - clipWidth) / 2;
        const imageLeft = sysinfo.windowWidth / 2;
        const imageTop = sysinfo.windowHeight / 2;
        this.ctx = uni.createCanvasContext(canvasId, this);
        this.clipWidth = clipWidth;
        this.clipHeight = clipHeight;
        this.clipX = clipX;
        this.clipY = clipY;
        this.canvasHeight = clipHeight;
        this.canvasWidth = clipWidth;
        this.imageLeft = imageLeft;
        this.imageTop = imageTop;
      },
      setClipCenter() {
        const { sysInfo, clipHeight, clipWidth, imageTop, imageLeft } = this;
        let sys = sysInfo || uni.getSystemInfoSync();
        let clipY = (sys.windowHeight - clipHeight) * 0.5;
        let clipX = (sys.windowWidth - clipWidth) * 0.5;
        this.imageTop = imageTop - this.clipY + clipY;
        this.imageLeft = imageLeft - this.clipX + clipX;
        this.clipY = clipY;
        this.clipX = clipX;
      },
      calcClipSize() {
        const { clipHeight, clipWidth, sysinfo, clipX, clipY } = this;
        if (clipWidth > sysinfo.windowWidth) {
          this.setDiffData({
            clipWidth: sysinfo.windowWidth
          });
        } else if (clipWidth + clipX > sysinfo.windowWidth) {
          this.setDiffData({
            clipX: sysinfo.windowWidth - clipX
          });
        }
        if (clipHeight > sysinfo.windowHeight) {
          this.setDiffData({
            clipHeight: sysinfo.windowHeight
          });
        } else if (clipHeight + clipY > sysinfo.windowHeight) {
          this.clipY = sysinfo.windowHeight - clipY;
          this.setDiffData({
            clipY: sysinfo.windowHeight - clipY
          });
        }
      },
      cutDetectionPosition() {
        const { clipX, clipY, sysinfo, clipHeight, clipWidth } = this;
        let cutDetectionPositionTop = () => {
          if (clipY < 0) {
            this.setDiffData({ clipY: 0 });
          }
          if (clipY > sysinfo.windowHeight - clipHeight) {
            this.setDiffData({ clipY: sysinfo.windowHeight - clipHeight });
          }
        }, cutDetectionPositionLeft = () => {
          if (clipX < 0) {
            this.setDiffData({ clipX: 0 });
          }
          if (clipX > sysinfo.windowWidth - clipWidth) {
            this.setDiffData({ clipX: sysinfo.windowWidth - clipWidth });
          }
        };
        if (clipY === null && clipX === null) {
          let newClipY = (sysinfo.windowHeight - clipHeight) * 0.5;
          let newClipX = (sysinfo.windowWidth - clipWidth) * 0.5;
          this.setDiffData({
            clipX: newClipX,
            clipY: newClipY
          });
        } else if (clipY !== null && clipX !== null) {
          cutDetectionPositionTop();
          cutDetectionPositionLeft();
        } else if (clipY !== null && clipX === null) {
          cutDetectionPositionTop();
          this.setDiffData({
            clipX: (sysinfo.windowWidth - clipWidth) / 2
          });
        } else if (clipY === null && clipX !== null) {
          cutDetectionPositionLeft();
          this.setDiffData({
            clipY: (sysinfo.windowHeight - clipHeight) / 2
          });
        }
      },
      imgComputeSize(width, height) {
        const { imageWidth, imageHeight } = calcImageSize(width, height, this);
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;
      },
      imgMarginDetectionScale(scale) {
        if (!this.isLimitMove)
          return;
        const currentScale = calcImageScale(this, scale);
        this.imgMarginDetectionPosition(currentScale);
      },
      imgMarginDetectionPosition(scale) {
        if (!this.isLimitMove)
          return;
        const { scale: currentScale, left, top } = calcImageOffset(this, scale);
        this.setDiffData({
          imageLeft: left,
          imageTop: top,
          scale: currentScale
        });
      },
      throttle() {
        this.setDiffData({
          throttleFlag: true
        });
      },
      moveDuring() {
        clearTimeout(this.timeClipCenter);
      },
      moveStop() {
        clearTimeout(this.timeClipCenter);
        const timeClipCenter = setTimeout(() => {
          if (!this.animation) {
            this.setDiffData({ animation: true });
          }
          this.setClipCenter();
        }, 800);
        this.setDiffData({ timeClipCenter });
      },
      clipTouchStart(event) {
        if (!this.image) {
          uni.showToast({
            title: "\u8BF7\u9009\u62E9\u56FE\u7247",
            icon: "none"
          });
          return;
        }
        const currentX = event.touches[0].clientX;
        const currentY = event.touches[0].clientY;
        const { clipX, clipY, clipWidth, clipHeight } = this;
        const corner = determineDirection(clipX, clipY, clipWidth, clipHeight, currentX, currentY);
        this.moveDuring();
        if (!corner) {
          return;
        }
        this.clipStart = {
          width: clipWidth,
          height: clipHeight,
          x: currentX,
          y: currentY,
          clipY,
          clipX,
          corner
        };
        this.flagClipTouch = true;
        this.flagEndTouch = true;
      },
      clipTouchMove(event) {
        if (!this.image) {
          uni.showToast({
            title: "\u8BF7\u9009\u62E9\u56FE\u7247",
            icon: "none"
          });
          return;
        }
        if (event.touches.length !== 1) {
          return;
        }
        const { flagClipTouch, throttleFlag } = this;
        if (flagClipTouch && throttleFlag) {
          const { isLockRatio, isLockHeight, isLockWidth } = this;
          if (isLockRatio && (isLockWidth || isLockHeight))
            return;
          this.setDiffData({
            throttleFlag: false
          });
          this.throttle();
          const clipData = clipTouchMoveOfCalculate(this, event);
          if (clipData) {
            const { width, height, clipX, clipY } = clipData;
            if (!isLockWidth && !isLockHeight) {
              this.setDiffData({
                clipWidth: width,
                clipHeight: height,
                clipX,
                clipY
              });
            } else if (!isLockWidth) {
              this.setDiffData({
                clipWidth: width,
                clipX
              });
            } else if (!isLockHeight) {
              this.setDiffData({
                clipHeight: height,
                clipY
              });
            }
            this.imgMarginDetectionScale();
          }
        }
      },
      clipTouchEnd() {
        this.moveStop();
        this.flagClipTouch = false;
      },
      imageTouchStart(e) {
        this.flagEndTouch = false;
        const { imageLeft, imageTop } = this;
        const clientXForLeft = e.touches[0].clientX;
        const clientYForLeft = e.touches[0].clientY;
        let touchRelative = [];
        if (e.touches.length === 1) {
          touchRelative[0] = {
            x: clientXForLeft - imageLeft,
            y: clientYForLeft - imageTop
          };
          this.touchRelative = touchRelative;
        } else {
          const clientXForRight = e.touches[1].clientX;
          const clientYForRight = e.touches[1].clientY;
          let width = Math.abs(clientXForLeft - clientXForRight);
          let height = Math.abs(clientYForLeft - clientYForRight);
          const hypotenuseLength = calcPythagoreanTheorem(width, height);
          touchRelative = [
            {
              x: clientXForLeft - imageLeft,
              y: clientYForLeft - imageTop
            },
            {
              x: clientXForRight - imageLeft,
              y: clientYForRight - imageTop
            }
          ];
          this.touchRelative = touchRelative;
          this.hypotenuseLength = hypotenuseLength;
        }
      },
      imageTouchMove(e) {
        const { flagEndTouch, throttleFlag } = this;
        if (flagEndTouch || !throttleFlag)
          return;
        const clientXForLeft = e.touches[0].clientX;
        const clientYForLeft = e.touches[0].clientY;
        this.setDiffData({ throttleFlag: false });
        this.throttle();
        this.moveDuring();
        if (e.touches.length === 1) {
          const { left: imageLeft, top: imageTop } = imageTouchMoveOfCalcOffset(this, clientXForLeft, clientYForLeft);
          this.setDiffData({
            imageLeft,
            imageTop
          });
          this.imgMarginDetectionPosition();
        } else {
          const clientXForRight = e.touches[1].clientX;
          const clientYForRight = e.touches[1].clientY;
          let width = Math.abs(clientXForLeft - clientXForRight), height = Math.abs(clientYForLeft - clientYForRight), hypotenuse = calcPythagoreanTheorem(width, height), scale = this.scale * (hypotenuse / this.hypotenuseLength);
          if (this.isDisableScale) {
            scale = 1;
          } else {
            scale = scale <= this.minRatio ? this.minRatio : scale;
            scale = scale >= this.maxRatio ? this.maxRatio : scale;
            this.$emit("change", {
              width: this.imageWidth * scale,
              height: this.imageHeight * scale
            });
          }
          this.imgMarginDetectionScale(scale);
          this.hypotenuseLength = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
          this.scale = scale;
        }
      },
      imageTouchEnd() {
        this.setDiffData({
          flagEndTouch: true
        });
        this.moveStop();
      },
      uploadImage() {
        const itemList = Object.entries(this.source);
        const sizeType = ["original", "compressed"];
        const success = ({ tempFilePaths: a2, tempFiles: b2 }) => {
          this.image = a2 ? a2[0] : b2[0].path;
        };
        const _uploadImage = (type) => {
          if (type !== "message") {
            uni.chooseImage({
              count: 1,
              sizeType,
              sourceType: [type],
              success
            });
          }
        };
        if (itemList.length > 1) {
          uni.showActionSheet({
            itemList: itemList.map((v2) => v2[1]),
            success: ({ tapIndex: i2 }) => {
              _uploadImage(itemList[i2][0]);
            }
          });
        } else {
          _uploadImage(itemList[0][0]);
        }
      },
      imageReset() {
        const sys = this.sysinfo || uni.getSystemInfoSync();
        this.scale = 1;
        this.angle = 0;
        this.imageTop = sys.windowHeight / 2;
        this.imageLeft = sys.windowWidth / 2;
      },
      imageLoad(e) {
        this.imageReset();
        uni.hideLoading();
        this.$emit("ready", e.detail);
      },
      rotate(event) {
        if (this.isDisableRotate)
          return;
        if (!this.image) {
          uni.showToast({
            title: "\u8BF7\u9009\u62E9\u56FE\u7247",
            icon: "none"
          });
          return;
        }
        const { rotateAngle } = this;
        const originAngle = this.angle;
        const type = event.currentTarget.dataset.type;
        if (type === "along") {
          this.angle = originAngle + rotateAngle;
        } else {
          this.angle = originAngle - rotateAngle;
        }
        this.$emit("rotate", this.angle);
      },
      confirm() {
        if (!this.image) {
          uni.showToast({
            title: "\u8BF7\u9009\u62E9\u56FE\u7247",
            icon: "none"
          });
          return;
        }
        uni.showLoading({
          title: "\u52A0\u8F7D\u4E2D"
        });
        const { canvasHeight, canvasWidth, clipHeight, clipWidth, ctx, scale, imageLeft, imageTop, clipX, clipY, angle, scaleRatio: dpr, image, quality, fileType, type: imageType, canvasId } = this;
        const draw = () => {
          const imageWidth = this.imageWidth * scale * dpr;
          const imageHeight = this.imageHeight * scale * dpr;
          const xpos = imageLeft - clipX;
          const ypos = imageTop - clipY;
          ctx.translate(xpos * dpr, ypos * dpr);
          ctx.rotate(angle * Math.PI / 180);
          ctx.drawImage(image, -imageWidth / 2, -imageHeight / 2, imageWidth, imageHeight);
          ctx.draw(false, () => {
            const width = clipWidth * dpr;
            const height = clipHeight * dpr;
            let params = {
              x: 0,
              y: 0,
              width,
              height,
              destWidth: width,
              destHeight: height,
              canvasId,
              fileType,
              quality,
              success: (res2) => {
                data.url = res2.tempFilePath;
                uni.hideLoading();
                this.$emit("success", data);
                this.$emit("input", false);
              },
              fail: (error2) => {
                formatAppLog("error", "at pages/ucenter/userinfo/limeClipper/limeClipper.vue:778", "error", error2);
                this.$emit("fail", error2);
                this.$emit("input", false);
              }
            };
            let data = {
              url: "",
              width,
              height
            };
            uni.canvasToTempFilePath(params, this);
          });
        };
        if (canvasWidth !== clipWidth || canvasHeight !== clipHeight) {
          this.canvasWidth = clipWidth;
          this.canvasHeight = clipHeight;
          ctx.draw();
          this.$nextTick(() => {
            setTimeout(() => {
              draw();
            }, 100);
          });
        } else {
          draw();
        }
      },
      cancel() {
        this.$emit("cancel", false);
        this.$emit("input", false);
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["l-clipper", { open: $props.value }]),
      "disable-scroll": "",
      style: vue.normalizeStyle("z-index: " + $props.zIndex + ";" + $props.customStyle)
    }, [
      vue.createElementVNode("view", {
        class: "l-clipper-mask",
        onTouchstart: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.clipTouchStart && $options.clipTouchStart(...args), ["stop", "prevent"])),
        onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.clipTouchMove && $options.clipTouchMove(...args), ["stop", "prevent"])),
        onTouchend: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.clipTouchEnd && $options.clipTouchEnd(...args), ["stop", "prevent"]))
      }, [
        vue.createElementVNode("view", {
          class: "l-clipper__content",
          style: vue.normalizeStyle($options.clipStyle)
        }, [
          (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList([0, 0, 0, 0], (item, index) => {
            return vue.createElementVNode("view", {
              class: "l-clipper__edge",
              key: index
            });
          }), 64))
        ], 4)
      ], 32),
      $data.image ? (vue.openBlock(), vue.createElementBlock("image", {
        key: 0,
        class: "l-clipper-image",
        onError: _cache[3] || (_cache[3] = (...args) => $options.imageLoad && $options.imageLoad(...args)),
        onLoad: _cache[4] || (_cache[4] = (...args) => $options.imageLoad && $options.imageLoad(...args)),
        onTouchstart: _cache[5] || (_cache[5] = vue.withModifiers((...args) => $options.imageTouchStart && $options.imageTouchStart(...args), ["stop", "prevent"])),
        onTouchmove: _cache[6] || (_cache[6] = vue.withModifiers((...args) => $options.imageTouchMove && $options.imageTouchMove(...args), ["stop", "prevent"])),
        onTouchend: _cache[7] || (_cache[7] = vue.withModifiers((...args) => $options.imageTouchEnd && $options.imageTouchEnd(...args), ["stop", "prevent"])),
        src: $data.image,
        mode: $data.imageWidth == "auto" ? "widthFix" : "",
        style: vue.normalizeStyle($options.imageStyle)
      }, null, 44, ["src", "mode"])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("canvas", {
        "canvas-id": $props.canvasId,
        id: "l-clipper",
        "disable-scroll": "",
        style: vue.normalizeStyle("width: " + $data.canvasWidth * $props.scaleRatio + "px; height:" + $data.canvasHeight * $props.scaleRatio + "px;"),
        class: "l-clipper-canvas"
      }, null, 12, ["canvas-id"]),
      vue.createElementVNode("view", { class: "l-clipper-tools" }, [
        vue.createElementVNode("view", { class: "l-clipper-tools__btns" }, [
          $props.isShowCancelBtn ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            onClick: _cache[8] || (_cache[8] = (...args) => $options.cancel && $options.cancel(...args))
          }, [
            _ctx.$slots.cancel ? vue.renderSlot(_ctx.$slots, "cancel", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "cancel"
            }, "\u53D6\u6D88"))
          ])) : vue.createCommentVNode("v-if", true),
          $props.isShowPhotoBtn ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            onClick: _cache[9] || (_cache[9] = (...args) => $options.uploadImage && $options.uploadImage(...args))
          }, [
            _ctx.$slots.photo ? vue.renderSlot(_ctx.$slots, "photo", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock("image", {
              key: 1,
              src: _imports_0$2
            }))
          ])) : vue.createCommentVNode("v-if", true),
          $props.isShowRotateBtn ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            onClick: _cache[10] || (_cache[10] = (...args) => $options.rotate && $options.rotate(...args))
          }, [
            _ctx.$slots.rotate ? vue.renderSlot(_ctx.$slots, "rotate", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock("image", {
              key: 1,
              src: _imports_1$1,
              "data-type": "inverse"
            }))
          ])) : vue.createCommentVNode("v-if", true),
          $props.isShowConfirmBtn ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 3,
            onClick: _cache[11] || (_cache[11] = (...args) => $options.confirm && $options.confirm(...args))
          }, [
            _ctx.$slots.confirm ? vue.renderSlot(_ctx.$slots, "confirm", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "confirm"
            }, "\u786E\u5B9A"))
          ])) : vue.createCommentVNode("v-if", true)
        ]),
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])
    ], 6);
  }
  var limeClipper = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-e2a6a4ae"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/ucenter/userinfo/limeClipper/limeClipper.vue"]]);
  const _sfc_main$h = {
    components: { limeClipper },
    data() {
      return { path: "", options: { "width": 600, "height": 600 } };
    },
    onLoad({ path, options }) {
      this.path = path;
      formatAppLog("log", "at pages/ucenter/userinfo/cropImage.vue:14", "path-path-path-path", path);
      if (options) {
        this.options = JSON.parse(options);
      }
    },
    methods: {
      successFn(e) {
        this.getOpenerEventChannel().emit("success", e.url);
        uni.navigateBack();
      },
      cancel() {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_limeClipper = vue.resolveComponent("limeClipper");
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createVNode(_component_limeClipper, {
        width: $data.options.width,
        "scale-ratio": 2,
        "is-lock-width": false,
        "is-lock-height": false,
        height: $data.options.height,
        "image-url": $data.path,
        onSuccess: $options.successFn,
        onCancel: $options.cancel
      }, null, 8, ["width", "height", "image-url", "onSuccess", "onCancel"])
    ]);
  }
  var PagesUcenterUserinfoCropImage = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/ucenter/userinfo/cropImage.vue"]]);
  let mixin = {
    methods: __spreadProps(__spreadValues({}, mapMutations({
      setUserInfo: "user/login"
    })), {
      loginSuccess(result) {
        loginSuccess(result);
        delete result.userInfo.token;
        if (result.type == "register") {
          result.userInfo._id = result.uid;
        }
        this.setUserInfo(result.userInfo);
      }
    })
  };
  const _sfc_main$g = {
    mixins: [mixin],
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
        uni.navigateTo({
          url: "../pwd-retrieve/pwd-retrieve?phoneNumber=" + (this.isPhone ? this.username : "") + "&phoneArea=" + this.currenPhoneArea
        });
      },
      pwdLogin() {
        if (!this.agree) {
          return uni.showToast({
            title: this.$t("common").noAgree,
            icon: "none"
          });
        }
        St.callFunction({
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
            formatAppLog("log", "at pages/ucenter/login-page/pwd-login/pwd-login.vue:77", result);
            if (result.code === 0) {
              this.loginSuccess(result);
            } else {
              if (result.needCaptcha) {
                uni.showToast({
                  title: result.msg || "\u5B8C\u6210",
                  icon: "none"
                });
                this.createCaptcha();
              } else {
                uni.showModal({
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
        St.callFunction({
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
              uni.showModal({
                content: result.msg,
                showCancel: false
              });
            }
          }
        });
      },
      toRegister(e) {
        formatAppLog("log", "at pages/ucenter/login-page/pwd-login/pwd-login.vue:122", e);
        uni.navigateTo({
          url: "/pages/ucenter/login-page/register/register"
        });
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_agreements = resolveEasycom(vue.resolveDynamicComponent("uni-agreements"), __easycom_2$2);
    const _component_uni_quick_login = resolveEasycom(vue.resolveDynamicComponent("uni-quick-login"), __easycom_3$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createCommentVNode(" \u9876\u90E8\u6587\u5B57 "),
      vue.createElementVNode("text", { class: "title" }, vue.toDisplayString(_ctx.$t("pwdLogin.pwdLogin")), 1),
      vue.withDirectives(vue.createElementVNode("input", {
        class: "input-box",
        inputBorder: false,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.username = $event),
        placeholder: _ctx.$t("pwdLogin.placeholder")
      }, null, 8, ["placeholder"]), [
        [vue.vModelText, $data.username]
      ]),
      vue.withDirectives(vue.createElementVNode("input", {
        type: "password",
        class: "input-box",
        inputBorder: false,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.password = $event),
        placeholder: _ctx.$t("pwdLogin.passwordPlaceholder")
      }, null, 8, ["placeholder"]), [
        [vue.vModelText, $data.password]
      ]),
      $data.captchaBase64 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "captcha-box"
      }, [
        vue.createElementVNode("image", {
          class: "captcha-img",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.createCaptcha && $options.createCaptcha(...args)),
          src: $data.captchaBase64,
          mode: "widthFix"
        }, null, 8, ["src"]),
        vue.withDirectives(vue.createElementVNode("input", {
          type: "text",
          class: "input-box captcha",
          inputBorder: false,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.captcha = $event),
          placeholder: _ctx.$t("pwdLogin.verifyCodePlaceholder")
        }, null, 8, ["placeholder"]), [
          [vue.vModelText, $data.captcha]
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createVNode(_component_uni_agreements, {
        onSetAgree: _cache[4] || (_cache[4] = ($event) => $data.agree = $event)
      }),
      vue.createElementVNode("button", {
        class: "send-btn",
        disabled: !$options.canLogin,
        type: $options.canLogin ? "primary" : "default",
        onClick: _cache[5] || (_cache[5] = (...args) => $options.pwdLogin && $options.pwdLogin(...args))
      }, vue.toDisplayString(_ctx.$t("pwdLogin.login")), 9, ["disabled", "type"]),
      vue.createCommentVNode(" \u5FD8\u8BB0\u5BC6\u7801 "),
      vue.createElementVNode("view", { class: "auth-box" }, [
        vue.createElementVNode("text", {
          class: "link",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.toRetrievePwd && $options.toRetrievePwd(...args))
        }, vue.toDisplayString(_ctx.$t("pwdLogin.forgetPassword")), 1),
        vue.createElementVNode("text", {
          class: "link",
          onClick: _cache[7] || (_cache[7] = (...args) => $options.toRegister && $options.toRegister(...args))
        }, vue.toDisplayString(_ctx.$t("pwdLogin.register")), 1)
      ]),
      vue.createVNode(_component_uni_quick_login, {
        agree: $data.agree,
        ref: "uniQuickLogin"
      }, null, 8, ["agree"])
    ]);
  }
  var PagesUcenterLoginPagePwdLoginPwdLogin = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/ucenter/login-page/pwd-login/pwd-login.vue"]]);
  const _sfc_main$f = {
    name: "uniFormsItem",
    props: {
      custom: {
        type: Boolean,
        default: false
      },
      showMessage: {
        type: Boolean,
        default: true
      },
      name: String,
      required: Boolean,
      validateTrigger: {
        type: String,
        default: ""
      },
      leftIcon: String,
      iconColor: {
        type: String,
        default: "#606266"
      },
      label: String,
      labelWidth: {
        type: [Number, String],
        default: ""
      },
      labelAlign: {
        type: String,
        default: ""
      },
      labelPosition: {
        type: String,
        default: ""
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      },
      rules: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        errorTop: false,
        errorBottom: false,
        labelMarginBottom: "",
        errorWidth: "",
        errMsg: "",
        val: "",
        labelPos: "",
        labelWid: "",
        labelAli: "",
        showMsg: "undertext",
        border: false,
        isFirstBorder: false,
        isArray: false,
        arrayField: ""
      };
    },
    computed: {
      msg() {
        return this.errorMessage || this.errMsg;
      },
      fieldStyle() {
        let style = {};
        if (this.labelPos == "top") {
          style.padding = "0 0";
          this.labelMarginBottom = "6px";
        }
        if (this.labelPos == "left" && this.msg !== false && this.msg != "") {
          style.paddingBottom = "0px";
          this.errorBottom = true;
          this.errorTop = false;
        } else if (this.labelPos == "top" && this.msg !== false && this.msg != "") {
          this.errorBottom = false;
          this.errorTop = true;
        } else {
          this.errorTop = false;
          this.errorBottom = false;
        }
        return style;
      },
      justifyContent() {
        if (this.labelAli === "left")
          return "flex-start";
        if (this.labelAli === "center")
          return "center";
        if (this.labelAli === "right")
          return "flex-end";
      },
      labelLeft() {
        return (this.labelPos === "left" ? parseInt(this.labelWid) : 0) + "px";
      }
    },
    watch: {
      validateTrigger(trigger) {
        this.formTrigger = trigger;
      }
    },
    created() {
      this.form = this.getForm();
      this.group = this.getForm("uniGroup");
      this.formRules = [];
      this.formTrigger = this.validateTrigger;
      if (this.name && this.name.indexOf("[") !== -1 && this.name.indexOf("]") !== -1) {
        this.isArray = true;
        this.arrayField = this.name;
        this.form.formData[this.name] = this.form._getValue(this.name, "");
      }
    },
    mounted() {
      if (this.form) {
        this.form.childrens.push(this);
      }
      this.init();
    },
    unmounted() {
      this.__isUnmounted = true;
      this.unInit();
    },
    methods: {
      init() {
        if (this.form) {
          let { formRules, validator: validator2, formData, value, labelPosition, labelWidth, labelAlign, errShowType } = this.form;
          this.labelPos = this.labelPosition ? this.labelPosition : labelPosition;
          if (this.label) {
            this.labelWid = this.labelWidth ? this.labelWidth : labelWidth || 70;
          } else {
            this.labelWid = this.labelWidth ? this.labelWidth : labelWidth || "auto";
          }
          if (this.labelWid && this.labelWid !== "auto") {
            this.labelWid += "px";
          }
          this.labelAli = this.labelAlign ? this.labelAlign : labelAlign;
          if (!this.form.isFirstBorder) {
            this.form.isFirstBorder = true;
            this.isFirstBorder = true;
          }
          if (this.group) {
            if (!this.group.isFirstBorder) {
              this.group.isFirstBorder = true;
              this.isFirstBorder = true;
            }
          }
          this.border = this.form.border;
          this.showMsg = errShowType;
          let name = this.isArray ? this.arrayField : this.name;
          if (!name)
            return;
          if (formRules && this.rules.length > 0) {
            if (!formRules[name]) {
              formRules[name] = {
                rules: this.rules
              };
            }
            validator2.updateSchema(formRules);
          }
          this.formRules = formRules[name] || {};
          this.validator = validator2;
        } else {
          this.labelPos = this.labelPosition || "left";
          this.labelWid = this.labelWidth || 65;
          this.labelAli = this.labelAlign || "left";
        }
      },
      unInit() {
        if (this.form) {
          this.form.childrens.forEach((item, index) => {
            if (item === this) {
              this.form.childrens.splice(index, 1);
              delete this.form.formData[item.name];
            }
          });
        }
      },
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      clearValidate() {
        this.errMsg = "";
      },
      setValue(value) {
        let name = this.isArray ? this.arrayField : this.name;
        if (name) {
          if (this.errMsg)
            this.errMsg = "";
          this.form.formData[name] = this.form._getValue(name, value);
          if (!this.formRules || typeof this.formRules && JSON.stringify(this.formRules) === "{}")
            return;
          this.triggerCheck(this.form._getValue(this.name, value));
        }
      },
      async triggerCheck(value, formTrigger) {
        this.errMsg = "";
        if (!this.validator || Object.keys(this.formRules).length === 0)
          return;
        const isNoField = this.isRequired(this.formRules.rules || []);
        let isTrigger = this.isTrigger(this.formRules.validateTrigger, this.validateTrigger, this.form.validateTrigger);
        let result = null;
        if (!!isTrigger || formTrigger) {
          let name = this.isArray ? this.arrayField : this.name;
          result = await this.validator.validateUpdate({
            [name]: value
          }, this.form.formData);
        }
        if (!isNoField && (value === void 0 || value === "")) {
          result = null;
        }
        const inputComp = this.form.inputChildrens.find((child) => child.rename === this.name);
        if ((isTrigger || formTrigger) && result && result.errorMessage) {
          if (inputComp) {
            inputComp.errMsg = result.errorMessage;
          }
          if (this.form.errShowType === "toast") {
            uni.showToast({
              title: result.errorMessage || "\u6821\u9A8C\u9519\u8BEF",
              icon: "none"
            });
          }
          if (this.form.errShowType === "modal") {
            uni.showModal({
              title: "\u63D0\u793A",
              content: result.errorMessage || "\u6821\u9A8C\u9519\u8BEF"
            });
          }
        } else {
          if (inputComp) {
            inputComp.errMsg = "";
          }
        }
        this.errMsg = !result ? "" : result.errorMessage;
        this.form.validateCheck(result ? result : null);
        return result ? result : null;
      },
      isTrigger(rule, itemRlue, parentRule) {
        if (rule === "submit" || !rule) {
          if (rule === void 0) {
            if (itemRlue !== "bind") {
              if (!itemRlue) {
                return parentRule === "bind" ? true : false;
              }
              return false;
            }
            return true;
          }
          return false;
        }
        return true;
      },
      isRequired(rules2) {
        let isNoField = false;
        for (let i2 = 0; i2 < rules2.length; i2++) {
          const ruleData = rules2[i2];
          if (ruleData.required) {
            isNoField = true;
            break;
          }
        }
        return isNoField;
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-forms-item", { "uni-forms-item--border": $data.border, "is-first-border": $data.border && $data.isFirstBorder, "uni-forms-item-error": $options.msg }])
    }, [
      vue.createElementVNode("view", { class: "uni-forms-item__box" }, [
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["uni-forms-item__inner", ["is-direction-" + $data.labelPos]])
        }, [
          vue.createElementVNode("view", {
            class: "uni-forms-item__label",
            style: vue.normalizeStyle({ width: $data.labelWid, justifyContent: $options.justifyContent })
          }, [
            vue.renderSlot(_ctx.$slots, "label", {}, () => [
              $props.required ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "is-required"
              }, "*")) : vue.createCommentVNode("v-if", true),
              $props.leftIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                key: 1,
                class: "label-icon",
                size: "16",
                type: $props.leftIcon,
                color: $props.iconColor
              }, null, 8, ["type", "color"])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("text", { class: "label-text" }, vue.toDisplayString($props.label), 1),
              $props.label ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: "label-seat"
              })) : vue.createCommentVNode("v-if", true)
            ], true)
          ], 4),
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["uni-forms-item__content", { "is-input-error-border": $options.msg }])
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 2)
        ], 2),
        $options.msg ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: vue.normalizeClass(["uni-error-message", { "uni-error-msg--boeder": $data.border }]),
          style: vue.normalizeStyle({
            paddingLeft: $options.labelLeft
          })
        }, [
          vue.createElementVNode("text", { class: "uni-error-message-text" }, vue.toDisplayString($data.showMsg === "undertext" ? $options.msg : ""), 1)
        ], 6)) : vue.createCommentVNode("v-if", true)
      ])
    ], 2);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-61dfc0d0"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue"]]);
  var pattern = {
    email: /^\S+?@\S+?\.\S+?$/,
    idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i")
  };
  const FORMAT_MAPPING = {
    "int": "integer",
    "bool": "boolean",
    "double": "number",
    "long": "number",
    "password": "string"
  };
  function formatMessage(args, resources = "") {
    var defaultMessage = ["label"];
    defaultMessage.forEach((item) => {
      if (args[item] === void 0) {
        args[item] = "";
      }
    });
    let str = resources;
    for (let key in args) {
      let reg = new RegExp("{" + key + "}");
      str = str.replace(reg, args[key]);
    }
    return str;
  }
  function isEmptyValue(value, type) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (typeof value === "string" && !value) {
      return true;
    }
    if (Array.isArray(value) && !value.length) {
      return true;
    }
    if (type === "object" && !Object.keys(value).length) {
      return true;
    }
    return false;
  }
  const types = {
    integer(value) {
      return types.number(value) && parseInt(value, 10) === value;
    },
    string(value) {
      return typeof value === "string";
    },
    number(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof value === "number";
    },
    "boolean": function(value) {
      return typeof value === "boolean";
    },
    "float": function(value) {
      return types.number(value) && !types.integer(value);
    },
    array(value) {
      return Array.isArray(value);
    },
    object(value) {
      return typeof value === "object" && !types.array(value);
    },
    date(value) {
      return value instanceof Date;
    },
    timestamp(value) {
      if (!this.integer(value) || Math.abs(value).toString().length > 16) {
        return false;
      }
      return true;
    },
    file(value) {
      return typeof value.url === "string";
    },
    email(value) {
      return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
    },
    url(value) {
      return typeof value === "string" && !!value.match(pattern.url);
    },
    pattern(reg, value) {
      try {
        return new RegExp(reg).test(value);
      } catch (e) {
        return false;
      }
    },
    method(value) {
      return typeof value === "function";
    },
    idcard(value) {
      return typeof value === "string" && !!value.match(pattern.idcard);
    },
    "url-https"(value) {
      return this.url(value) && value.startsWith("https://");
    },
    "url-scheme"(value) {
      return value.startsWith("://");
    },
    "url-web"(value) {
      return false;
    }
  };
  class RuleValidator {
    constructor(message) {
      this._message = message;
    }
    async validateRule(fieldKey, fieldValue, value, data, allData) {
      var result = null;
      let rules2 = fieldValue.rules;
      let hasRequired = rules2.findIndex((item) => {
        return item.required;
      });
      if (hasRequired < 0) {
        if (value === null || value === void 0) {
          return result;
        }
        if (typeof value === "string" && !value.length) {
          return result;
        }
      }
      var message = this._message;
      if (rules2 === void 0) {
        return message["default"];
      }
      for (var i2 = 0; i2 < rules2.length; i2++) {
        let rule = rules2[i2];
        let vt2 = this._getValidateType(rule);
        Object.assign(rule, {
          label: fieldValue.label || `["${fieldKey}"]`
        });
        if (RuleValidatorHelper[vt2]) {
          result = RuleValidatorHelper[vt2](rule, value, message);
          if (result != null) {
            break;
          }
        }
        if (rule.validateExpr) {
          let now = Date.now();
          let resultExpr = rule.validateExpr(value, allData, now);
          if (resultExpr === false) {
            result = this._getMessage(rule, rule.errorMessage || this._message["default"]);
            break;
          }
        }
        if (rule.validateFunction) {
          result = await this.validateFunction(rule, value, data, allData, vt2);
          if (result !== null) {
            break;
          }
        }
      }
      if (result !== null) {
        result = message.TAG + result;
      }
      return result;
    }
    async validateFunction(rule, value, data, allData, vt2) {
      let result = null;
      try {
        let callbackMessage = null;
        const res2 = await rule.validateFunction(rule, value, allData || data, (message) => {
          callbackMessage = message;
        });
        if (callbackMessage || typeof res2 === "string" && res2 || res2 === false) {
          result = this._getMessage(rule, callbackMessage || res2, vt2);
        }
      } catch (e) {
        result = this._getMessage(rule, e.message, vt2);
      }
      return result;
    }
    _getMessage(rule, message, vt2) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt2] || message["default"]);
    }
    _getValidateType(rule) {
      var result = "";
      if (rule.required) {
        result = "required";
      } else if (rule.format) {
        result = "format";
      } else if (rule.arrayType) {
        result = "arrayTypeFormat";
      } else if (rule.range) {
        result = "range";
      } else if (rule.maximum !== void 0 || rule.minimum !== void 0) {
        result = "rangeNumber";
      } else if (rule.maxLength !== void 0 || rule.minLength !== void 0) {
        result = "rangeLength";
      } else if (rule.pattern) {
        result = "pattern";
      } else if (rule.validateFunction) {
        result = "validateFunction";
      }
      return result;
    }
  }
  const RuleValidatorHelper = {
    required(rule, value, message) {
      if (rule.required && isEmptyValue(value, rule.format || typeof value)) {
        return formatMessage(rule, rule.errorMessage || message.required);
      }
      return null;
    },
    range(rule, value, message) {
      const {
        range,
        errorMessage
      } = rule;
      let list = new Array(range.length);
      for (let i2 = 0; i2 < range.length; i2++) {
        const item = range[i2];
        if (types.object(item) && item.value !== void 0) {
          list[i2] = item.value;
        } else {
          list[i2] = item;
        }
      }
      let result = false;
      if (Array.isArray(value)) {
        result = new Set(value.concat(list)).size === list.length;
      } else {
        if (list.indexOf(value) > -1) {
          result = true;
        }
      }
      if (!result) {
        return formatMessage(rule, errorMessage || message["enum"]);
      }
      return null;
    },
    rangeNumber(rule, value, message) {
      if (!types.number(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let {
        minimum,
        maximum,
        exclusiveMinimum,
        exclusiveMaximum
      } = rule;
      let min = exclusiveMinimum ? value <= minimum : value < minimum;
      let max = exclusiveMaximum ? value >= maximum : value > maximum;
      if (minimum !== void 0 && min) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMinimum ? "exclusiveMinimum" : "minimum"]);
      } else if (maximum !== void 0 && max) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMaximum ? "exclusiveMaximum" : "maximum"]);
      } else if (minimum !== void 0 && maximum !== void 0 && (min || max)) {
        return formatMessage(rule, rule.errorMessage || message["number"].range);
      }
      return null;
    },
    rangeLength(rule, value, message) {
      if (!types.string(value) && !types.array(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let min = rule.minLength;
      let max = rule.maxLength;
      let val = value.length;
      if (min !== void 0 && val < min) {
        return formatMessage(rule, rule.errorMessage || message["length"].minLength);
      } else if (max !== void 0 && val > max) {
        return formatMessage(rule, rule.errorMessage || message["length"].maxLength);
      } else if (min !== void 0 && max !== void 0 && (val < min || val > max)) {
        return formatMessage(rule, rule.errorMessage || message["length"].range);
      }
      return null;
    },
    pattern(rule, value, message) {
      if (!types["pattern"](rule.pattern, value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      return null;
    },
    format(rule, value, message) {
      var customTypes = Object.keys(types);
      var format2 = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
      if (customTypes.indexOf(format2) > -1) {
        if (!types[format2](value)) {
          return formatMessage(rule, rule.errorMessage || message.typeError);
        }
      }
      return null;
    },
    arrayTypeFormat(rule, value, message) {
      if (!Array.isArray(value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
      for (let i2 = 0; i2 < value.length; i2++) {
        const element = value[i2];
        let formatResult = this.format(rule, element, message);
        if (formatResult !== null) {
          return formatResult;
        }
      }
      return null;
    }
  };
  class SchemaValidator extends RuleValidator {
    constructor(schema, options) {
      super(SchemaValidator.message);
      this._schema = schema;
      this._options = options || null;
    }
    updateSchema(schema) {
      this._schema = schema;
    }
    async validate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async validateAll(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, true, allData);
      }
      return result;
    }
    async validateUpdate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidateUpdate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async invokeValidate(data, all, allData) {
      let result = [];
      let schema = this._schema;
      for (let key in schema) {
        let value = schema[key];
        let errorMessage = await this.validateRule(key, value, data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    async invokeValidateUpdate(data, all, allData) {
      let result = [];
      for (let key in data) {
        let errorMessage = await this.validateRule(key, this._schema[key], data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    _checkFieldInSchema(data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return "";
      }
      var noExistFields = keys.filter((key) => {
        return keys2.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields)
      }, SchemaValidator.message.TAG + SchemaValidator.message["defaultInvalid"]);
      return [{
        key: "invalid",
        errorMessage
      }];
    }
  }
  function Message() {
    return {
      TAG: "",
      default: "\u9A8C\u8BC1\u9519\u8BEF",
      defaultInvalid: "\u63D0\u4EA4\u7684\u5B57\u6BB5{field}\u5728\u6570\u636E\u5E93\u4E2D\u5E76\u4E0D\u5B58\u5728",
      validateFunction: "\u9A8C\u8BC1\u65E0\u6548",
      required: "{label}\u5FC5\u586B",
      "enum": "{label}\u8D85\u51FA\u8303\u56F4",
      timestamp: "{label}\u683C\u5F0F\u65E0\u6548",
      whitespace: "{label}\u4E0D\u80FD\u4E3A\u7A7A",
      typeError: "{label}\u7C7B\u578B\u65E0\u6548",
      date: {
        format: "{label}\u65E5\u671F{value}\u683C\u5F0F\u65E0\u6548",
        parse: "{label}\u65E5\u671F\u65E0\u6CD5\u89E3\u6790,{value}\u65E0\u6548",
        invalid: "{label}\u65E5\u671F{value}\u65E0\u6548"
      },
      length: {
        minLength: "{label}\u957F\u5EA6\u4E0D\u80FD\u5C11\u4E8E{minLength}",
        maxLength: "{label}\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7{maxLength}",
        range: "{label}\u5FC5\u987B\u4ECB\u4E8E{minLength}\u548C{maxLength}\u4E4B\u95F4"
      },
      number: {
        minimum: "{label}\u4E0D\u80FD\u5C0F\u4E8E{minimum}",
        maximum: "{label}\u4E0D\u80FD\u5927\u4E8E{maximum}",
        exclusiveMinimum: "{label}\u4E0D\u80FD\u5C0F\u4E8E\u7B49\u4E8E{minimum}",
        exclusiveMaximum: "{label}\u4E0D\u80FD\u5927\u4E8E\u7B49\u4E8E{maximum}",
        range: "{label}\u5FC5\u987B\u4ECB\u4E8E{minimum}and{maximum}\u4E4B\u95F4"
      },
      pattern: {
        mismatch: "{label}\u683C\u5F0F\u4E0D\u5339\u914D"
      }
    };
  }
  SchemaValidator.message = new Message();
  const _sfc_main$e = {
    name: "uniForms",
    components: {},
    emits: ["input", "reset", "validate", "submit"],
    props: {
      value: {
        type: Object,
        default() {
          return {};
        }
      },
      modelValue: {
        type: Object,
        default() {
          return {};
        }
      },
      rules: {
        type: Object,
        default() {
          return {};
        }
      },
      validateTrigger: {
        type: String,
        default: ""
      },
      labelPosition: {
        type: String,
        default: "left"
      },
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      labelAlign: {
        type: String,
        default: "left"
      },
      errShowType: {
        type: String,
        default: "undertext"
      },
      border: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        formData: {}
      };
    },
    computed: {
      dataValue() {
        if (JSON.stringify(this.modelValue) === "{}") {
          return this.value;
        } else {
          return this.modelValue;
        }
      }
    },
    watch: {
      rules(newVal) {
        this.init(newVal);
      },
      labelPosition() {
        this.childrens.forEach((vm) => {
          vm.init();
        });
      }
    },
    created() {
      let getbinddata = getApp().$vm.$.appContext.config.globalProperties.binddata;
      if (!getbinddata) {
        getApp().$vm.$.appContext.config.globalProperties.binddata = function(name, value, formName) {
          if (formName) {
            this.$refs[formName].setValue(name, value);
          } else {
            let formVm;
            for (let i2 in this.$refs) {
              const vm = this.$refs[i2];
              if (vm && vm.$options && vm.$options.name === "uniForms") {
                formVm = vm;
                break;
              }
            }
            if (!formVm)
              return formatAppLog("error", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:152", "\u5F53\u524D uni-froms \u7EC4\u4EF6\u7F3A\u5C11 ref \u5C5E\u6027");
            formVm.setValue(name, value);
          }
        };
      }
      this.unwatchs = [];
      this.childrens = [];
      this.inputChildrens = [];
      this.checkboxChildrens = [];
      this.formRules = [];
      this.init(this.rules);
    },
    methods: {
      init(formRules) {
        if (Object.keys(formRules).length === 0) {
          this.formData = this.dataValue;
          return;
        }
        this.formRules = formRules;
        this.validator = new SchemaValidator(formRules);
        this.registerWatch();
      },
      registerWatch() {
        this.unwatchs.forEach((v2) => v2());
        this.childrens.forEach((v2) => {
          v2.init();
        });
        Object.keys(this.dataValue).forEach((key) => {
          let watch = this.$watch("dataValue." + key, (value) => {
            if (!value)
              return;
            if (value.toString() === "[object Object]") {
              for (let i2 in value) {
                let name = `${key}[${i2}]`;
                this.formData[name] = this._getValue(name, value[i2]);
              }
            } else {
              this.formData[key] = this._getValue(key, value);
            }
          }, {
            deep: true,
            immediate: true
          });
          this.unwatchs.push(watch);
        });
      },
      setRules(formRules) {
        this.init(formRules);
      },
      setValue(name, value, callback) {
        let example = this.childrens.find((child) => child.name === name);
        if (!example)
          return null;
        value = this._getValue(example.name, value);
        this.formData[name] = value;
        example.val = value;
        return example.triggerCheck(value, callback);
      },
      resetForm(event) {
        this.childrens.forEach((item) => {
          item.errMsg = "";
          const inputComp = this.inputChildrens.find((child) => child.rename === item.name);
          if (inputComp) {
            inputComp.errMsg = "";
            inputComp.is_reset = true;
            inputComp.$emit("input", inputComp.multiple ? [] : "");
            inputComp.$emit("update:modelValue", inputComp.multiple ? [] : "");
          }
        });
        this.childrens.forEach((item) => {
          if (item.name) {
            this.formData[item.name] = this._getValue(item.name, "");
          }
        });
        this.$emit("reset", event);
      },
      validateCheck(validate) {
        if (validate === null)
          validate = null;
        this.$emit("validate", validate);
      },
      async validateAll(invalidFields, type, keepitem, callback) {
        let childrens = [];
        for (let i2 in invalidFields) {
          const item = this.childrens.find((v2) => v2.name === i2);
          if (item) {
            childrens.push(item);
          }
        }
        if (!callback && typeof keepitem === "function") {
          callback = keepitem;
        }
        let promise;
        if (!callback && typeof callback !== "function" && Promise) {
          promise = new Promise((resolve, reject) => {
            callback = function(valid, invalidFields2) {
              !valid ? resolve(invalidFields2) : reject(valid);
            };
          });
        }
        let results = [];
        let newFormData = {};
        if (this.validator) {
          for (let key in childrens) {
            const child = childrens[key];
            let name = child.isArray ? child.arrayField : child.name;
            if (child.isArray) {
              if (child.name.indexOf("[") !== -1 && child.name.indexOf("]") !== -1) {
                const fieldData = child.name.split("[");
                const fieldName = fieldData[0];
                const fieldValue = fieldData[1].replace("]", "");
                if (!newFormData[fieldName]) {
                  newFormData[fieldName] = {};
                }
                newFormData[fieldName][fieldValue] = this._getValue(name, invalidFields[name]);
              }
            } else {
              newFormData[name] = this._getValue(name, invalidFields[name]);
            }
            const result = await child.triggerCheck(invalidFields[name], true);
            if (result) {
              results.push(result);
              if (this.errShowType === "toast" || this.errShowType === "modal")
                break;
            }
          }
        } else {
          newFormData = invalidFields;
        }
        if (Array.isArray(results)) {
          if (results.length === 0)
            results = null;
        }
        if (Array.isArray(keepitem)) {
          keepitem.forEach((v2) => {
            newFormData[v2] = this.dataValue[v2];
          });
        }
        if (type === "submit") {
          this.$emit("submit", {
            detail: {
              value: newFormData,
              errors: results
            }
          });
        } else {
          this.$emit("validate", results);
        }
        callback && typeof callback === "function" && callback(results, newFormData);
        if (promise && callback) {
          return promise;
        } else {
          return null;
        }
      },
      submitForm() {
      },
      submit(keepitem, callback, type) {
        for (let i2 in this.dataValue) {
          const itemData = this.childrens.find((v2) => v2.name === i2);
          if (itemData) {
            if (this.formData[i2] === void 0) {
              this.formData[i2] = this._getValue(i2, this.dataValue[i2]);
            }
          }
        }
        if (!type) {
          formatAppLog("warn", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:371", "submit \u65B9\u6CD5\u5373\u5C06\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528validate\u65B9\u6CD5\u4EE3\u66FF\uFF01");
        }
        return this.validateAll(this.formData, "submit", keepitem, callback);
      },
      validate(keepitem, callback) {
        return this.submit(keepitem, callback, true);
      },
      validateField(props, callback) {
        props = [].concat(props);
        let invalidFields = {};
        this.childrens.forEach((item) => {
          if (props.indexOf(item.name) !== -1) {
            invalidFields = Object.assign({}, invalidFields, {
              [item.name]: this.formData[item.name]
            });
          }
        });
        return this.validateAll(invalidFields, "submit", [], callback);
      },
      resetFields() {
        this.resetForm();
      },
      clearValidate(props) {
        props = [].concat(props);
        this.childrens.forEach((item) => {
          const inputComp = this.inputChildrens.find((child) => child.rename === item.name);
          if (props.length === 0) {
            item.errMsg = "";
            if (inputComp) {
              inputComp.errMsg = "";
            }
          } else {
            if (props.indexOf(item.name) !== -1) {
              item.errMsg = "";
              if (inputComp) {
                inputComp.errMsg = "";
              }
            }
          }
        });
      },
      _getValue(key, value) {
        const rules2 = this.formRules[key] && this.formRules[key].rules || [];
        const isRuleNum = rules2.find((val) => val.format && this.type_filter(val.format));
        const isRuleBool = rules2.find((val) => val.format && val.format === "boolean" || val.format === "bool");
        if (isRuleNum) {
          value = isNaN(value) ? value : value === "" || value === null ? null : Number(value);
        }
        if (isRuleBool) {
          value = !value ? false : true;
        }
        return value;
      },
      type_filter(format2) {
        return format2 === "int" || format2 === "double" || format2 === "number" || format2 === "timestamp";
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-forms", { "uni-forms--top": !$props.border }])
    }, [
      vue.createElementVNode("form", {
        onSubmit: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.submitForm && $options.submitForm(...args), ["stop"])),
        onReset: _cache[1] || (_cache[1] = (...args) => $options.resetForm && $options.resetForm(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 32)
    ], 2);
  }
  var __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-7ae0e404"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"]]);
  const _sfc_main$d = {
    mixins: [mixin],
    data() {
      return {
        lock: false,
        formData: {
          "phone": "",
          "code": "",
          "pwd": "",
          "pwd2": ""
        },
        rules: {
          phone: {
            rules: [
              {
                required: true,
                errorMessage: this.$t("common.phonePlaceholder")
              },
              {
                pattern: /^1\d{10}$/,
                errorMessage: this.$t("common.formatErr")
              }
            ]
          },
          code: {
            rules: [
              {
                required: true,
                errorMessage: this.$t("common.verifyCodePlaceholder")
              },
              {
                pattern: /^.{6}$/,
                errorMessage: this.$t("common.sixDigitCode")
              }
            ]
          },
          pwd: {
            rules: [
              {
                required: true,
                errorMessage: this.$t("common.newPasswordPlaceholder")
              },
              {
                pattern: /^.{6,20}$/,
                errorMessage: this.$t("common.passwordDigits")
              }
            ]
          },
          pwd2: {
            rules: [
              {
                required: true,
                errorMessage: this.$t("common.confirmPassword")
              },
              {
                pattern: /^.{6,20}$/,
                errorMessage: this.$t("common.passwordDigits")
              },
              {
                validateFunction: function(rule, value, data, callback) {
                  if (value != data.pwd) {
                    callback("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4");
                  }
                  return true;
                }
              }
            ]
          }
        }
      };
    },
    computed: {
      canSubmit() {
        return this.isPhone && this.isPwd && this.isCode;
      },
      isPhone() {
        let reg_phone = /^1\d{10}$/;
        let isPhone = reg_phone.test(this.formData.phone);
        return isPhone;
      },
      isPwd() {
        let reg_pwd = /^.{6,20}$/;
        let isPwd = reg_pwd.test(this.formData.pwd);
        return isPwd;
      },
      isCode() {
        let reg_code = /^\d{6}$/;
        let isCode = reg_code.test(this.formData.code);
        return isCode;
      }
    },
    onLoad(event) {
      if (event && event.phoneNumber) {
        this.formData.phone = event.phoneNumber;
        this.lock = true;
      }
      uni.setNavigationBarTitle({
        title: this.$t("common.resetNavTitle")
      });
    },
    onReady() {
      if (this.formData.phone) {
        this.$refs.shortCode.start();
      }
      this.$refs.form.setRules(this.rules);
    },
    methods: {
      submit() {
        formatAppLog("log", "at pages/ucenter/login-page/pwd-retrieve/pwd-retrieve.vue:143", "formData", this.formData);
        formatAppLog("log", "at pages/ucenter/login-page/pwd-retrieve/pwd-retrieve.vue:144", "rules", this.rules);
        this.$refs.form.validate().then((res2) => {
          St.callFunction({
            name: "uni-id-cf",
            data: {
              action: "resetPwdBySmsCode",
              params: {
                "mobile": this.formData.phone,
                "code": this.formData.code,
                "password": this.formData.pwd
              }
            },
            success: ({ result }) => {
              formatAppLog("log", "at pages/ucenter/login-page/pwd-retrieve/pwd-retrieve.vue:158", result);
              uni.showToast({
                title: result.msg || "\u66F4\u65B0\u6210\u529F",
                icon: "none"
              });
              if (result.code === 0) {
                uni.navigateBack();
              }
            }
          });
        });
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_2);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_0$1);
    const _component_uni_send_sms_code = resolveEasycom(vue.resolveDynamicComponent("uni-send-sms-code"), __easycom_0$6);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_3$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createCommentVNode(" \u9876\u90E8\u6587\u5B57 "),
      vue.createCommentVNode(" \u767B\u5F55\u6846 (\u9009\u62E9\u624B\u673A\u53F7\u6240\u5C5E\u56FD\u5BB6\u548C\u5730\u533A\u9700\u8981\u53E6\u884C\u5B9E\u73B0) "),
      vue.createVNode(_component_uni_forms, {
        ref: "form",
        value: $data.formData
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_forms_item, { name: "phone" }, {
            default: vue.withCtx(() => [
              vue.createCommentVNode(" focus\u89C4\u5219\u5982\u679C\u4E0A\u4E00\u9875\u643A\u5E26\u6765\u201C\u624B\u673A\u53F7\u7801\u201D\u6570\u636E\u5C31focus\u9A8C\u8BC1\u7801\u8F93\u5165\u6846\uFF0C\u5426\u5219focus\u624B\u673A\u53F7\u7801\u8F93\u5165\u6846 "),
              vue.createVNode(_component_uni_easyinput, {
                disabled: $data.lock,
                focus: $data.formData.phone.length != 11,
                type: "number",
                class: "easyinput",
                inputBorder: false,
                modelValue: $data.formData.phone,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.formData.phone = $event),
                maxlength: "11",
                placeholder: _ctx.$t("common.phonePlaceholder")
              }, null, 8, ["disabled", "focus", "modelValue", "placeholder"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_forms_item, { name: "code" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                focus: $data.formData.phone.length == 11,
                type: "number",
                class: "easyinput",
                inputBorder: false,
                modelValue: $data.formData.code,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.formData.code = $event),
                maxlength: "6",
                placeholder: _ctx.$t("common.verifyCodePlaceholder")
              }, {
                right: vue.withCtx(() => [
                  vue.createVNode(_component_uni_send_sms_code, {
                    ref: "shortCode",
                    phone: $data.formData.phone
                  }, null, 8, ["phone"])
                ]),
                _: 1
              }, 8, ["focus", "modelValue", "placeholder"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_forms_item, { name: "pwd" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "password",
                class: "easyinput",
                inputBorder: false,
                modelValue: $data.formData.pwd,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formData.pwd = $event),
                placeholder: _ctx.$t("common.newPasswordPlaceholder")
              }, null, 8, ["modelValue", "placeholder"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_forms_item, { name: "pwd2" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "password",
                class: "easyinput",
                inputBorder: false,
                modelValue: $data.formData.pwd2,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.formData.pwd2 = $event),
                placeholder: _ctx.$t("common.confirmNewPasswordPlaceholder")
              }, null, 8, ["modelValue", "placeholder"])
            ]),
            _: 1
          }),
          vue.createElementVNode("button", {
            class: "send-btn-box",
            disabled: !$options.canSubmit,
            type: $options.canSubmit ? "primary" : "default",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.submit && $options.submit(...args))
          }, vue.toDisplayString(_ctx.$t("common.complete")), 9, ["disabled", "type"])
        ]),
        _: 1
      }, 8, ["value"])
    ]);
  }
  var PagesUcenterLoginPagePwdRetrievePwdRetrieve = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/ucenter/login-page/pwd-retrieve/pwd-retrieve.vue"]]);
  const _sfc_main$c = {
    mixins: [mixin],
    data() {
      return {
        code: "",
        phone: ""
      };
    },
    computed: {
      tipText() {
        return this.$t("common.verifyCodeSend") + `${this.phone}\u3002`;
      },
      canSubmit() {
        return this.code.length == 6;
      }
    },
    onLoad({ phoneNumber, phoneArea }) {
      this.phone = phoneNumber;
    },
    onReady() {
      if (this.phone.length == 11) {
        this.$refs.sendSmsCode.start();
      }
    },
    methods: {
      submit() {
        St.callFunction({
          name: "uni-id-cf",
          data: {
            action: "loginBySms",
            params: {
              "mobile": this.phone,
              "code": this.code
            }
          },
          success: ({ result }) => {
            if (result.code === 0) {
              this.loginSuccess(result);
            } else {
              uni.showModal({
                content: result.msg,
                showCancel: false
              });
            }
          }
        });
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_send_sms_code = resolveEasycom(vue.resolveDynamicComponent("uni-send-sms-code"), __easycom_0$6);
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_2);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_3$1);
    const _component_uni_quick_login = resolveEasycom(vue.resolveDynamicComponent("uni-quick-login"), __easycom_3$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createCommentVNode(" \u9876\u90E8\u6587\u5B57 "),
      vue.createElementVNode("text", { class: "tit" }, vue.toDisplayString(_ctx.$t("common.verifyCodePlaceholder")), 1),
      vue.createElementVNode("text", { class: "tip" }, vue.toDisplayString($options.tipText), 1),
      vue.createVNode(_component_uni_forms, null, {
        default: vue.withCtx(() => [
          vue.createCommentVNode(" \u767B\u5F55\u6846 (\u9009\u62E9\u624B\u673A\u53F7\u6240\u5C5E\u56FD\u5BB6\u548C\u5730\u533A\u9700\u8981\u53E6\u884C\u5B9E\u73B0) "),
          vue.createVNode(_component_uni_easyinput, {
            type: "number",
            class: "easyinput",
            inputBorder: false,
            modelValue: $data.code,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.code = $event),
            maxlength: "6",
            placeholder: _ctx.$t("common.verifyCodePlaceholder")
          }, {
            right: vue.withCtx(() => [
              vue.createVNode(_component_uni_send_sms_code, {
                phone: $data.phone,
                ref: "sendSmsCode"
              }, null, 8, ["phone"])
            ]),
            _: 1
          }, 8, ["modelValue", "placeholder"]),
          vue.createElementVNode("button", {
            class: "send-btn",
            disabled: !$options.canSubmit,
            type: $options.canSubmit ? "primary" : "default",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.submit && $options.submit(...args))
          }, vue.toDisplayString(_ctx.$t("common.login")), 9, ["disabled", "type"])
        ]),
        _: 1
      }),
      vue.createVNode(_component_uni_quick_login, { agree: "" })
    ]);
  }
  var PagesUcenterLoginPagePhoneCodePhoneCode = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/ucenter/login-page/phone-code/phone-code.vue"]]);
  const _sfc_main$b = {
    onLoad({ url, title }) {
      if (url.substring(0, 4) != "http") {
        uni.showModal({
          title: "\u9519\u8BEF",
          content: '\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u7F51\u7AD9\u94FE\u63A5,"' + url + '"',
          showCancel: false,
          confirmText: "\u77E5\u9053\u4E86",
          complete: () => {
            uni.navigateBack();
          }
        });
        title = "\u9875\u9762\u8DEF\u5F84\u9519\u8BEF";
      } else {
        formatAppLog("log", "at pages/common/webview/webview.vue:22", url, title);
        this.url = url;
      }
      if (title) {
        uni.setNavigationBarTitle({ title });
      }
    },
    data() {
      return {
        url: null
      };
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      $data.url ? (vue.openBlock(), vue.createElementBlock("web-view", {
        key: 0,
        src: $data.url
      }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var PagesCommonWebviewWebview = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/common/webview/webview.vue"]]);
  var rules = {
    "username": {
      "rules": [
        {
          required: true,
          errorMessage: "\u8BF7\u8F93\u5165\u7528\u6237\u540D"
        },
        {
          minLength: 3,
          maxLength: 32,
          errorMessage: "\u7528\u6237\u540D\u957F\u5EA6\u5728 {minLength} \u5230 {maxLength} \u4E2A\u5B57\u7B26"
        },
        {
          validateFunction: function(rule, value, data, callback) {
            formatAppLog("log", "at pages/ucenter/login-page/register/validator.js:14", value);
            if (/^1\d{10}$/.test(value) || /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value)) {
              callback("\u7528\u6237\u540D\u4E0D\u80FD\u662F\uFF1A\u624B\u673A\u53F7\u6216\u90AE\u7BB1");
            }
            return true;
          }
        }
      ],
      "label": "\u7528\u6237\u540D"
    },
    "password": {
      "rules": [
        {
          required: true,
          errorMessage: "\u8BF7\u8F93\u5165\u5BC6\u7801"
        },
        {
          minLength: 6,
          maxLength: 20,
          errorMessage: "\u5BC6\u7801\u957F\u5EA6\u5728 {minLength} \u5230 {maxLength} \u4E2A\u5B57\u7B26"
        }
      ],
      "label": "\u5BC6\u7801"
    },
    "pwd2": {
      "rules": [
        {
          required: true,
          errorMessage: "\u518D\u6B21\u8F93\u5165\u5BC6\u7801"
        },
        {
          minLength: 6,
          maxLength: 20,
          errorMessage: "\u5BC6\u7801\u957F\u5EA6\u5728 {minLength} \u5230 {maxLength} \u4E2A\u5B57\u7B26"
        },
        {
          validateFunction: function(rule, value, data, callback) {
            formatAppLog("log", "at pages/ucenter/login-page/register/validator.js:51", value);
            if (value != data.password) {
              callback("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4");
            }
            return true;
          }
        }
      ],
      "label": "\u786E\u8BA4\u5BC6\u7801"
    }
  };
  const _sfc_main$a = {
    mixins: [mixin],
    data() {
      return {
        formData: {
          "username": "",
          "nickname": "",
          "password": "",
          "pwd2": ""
        },
        rules,
        agree: false
      };
    },
    onReady() {
      this.$refs.form.setRules(this.rules);
    },
    onLoad() {
      uni.setNavigationBarTitle({
        title: this.$t("register.navigationBarTitle")
      });
    },
    methods: {
      submit() {
        if (!this.agree) {
          return uni.showToast({
            title: this.$t("common").noAgree,
            icon: "none"
          });
        }
        uni.showLoading({
          mask: true
        });
        this.$refs.form.validate().then((res2) => {
          this.submitForm(res2);
        }).catch((errors) => {
          formatAppLog("log", "at pages/ucenter/login-page/register/register.vue:64", errors);
        }).finally(() => {
          uni.hideLoading();
        });
      },
      submitForm(params) {
        St.callFunction({
          name: "uni-id-cf",
          data: {
            action: "register",
            params
          },
          success: ({ result }) => {
            formatAppLog("log", "at pages/ucenter/login-page/register/register.vue:78", result);
            if (result.code === 0) {
              this.loginSuccess(result);
            } else {
              uni.showModal({
                content: result.msg,
                showCancel: false
              });
            }
          }
        });
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_2);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_0$1);
    const _component_uni_agreements = resolveEasycom(vue.resolveDynamicComponent("uni-agreements"), __easycom_2$2);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_3$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-container" }, [
      vue.createVNode(_component_uni_forms, {
        ref: "form",
        value: $data.formData,
        rules: $data.rules,
        "validate-trigger": "submit",
        "err-show-type": "undertext"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_forms_item, {
            name: "username",
            required: ""
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                inputBorder: false,
                class: "easyinput",
                placeholder: _ctx.$t("register.usernamePlaceholder"),
                modelValue: $data.formData.username,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.formData.username = $event),
                trim: "both"
              }, null, 8, ["placeholder", "modelValue"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_forms_item, { name: "nickname" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                inputBorder: false,
                class: "easyinput",
                placeholder: _ctx.$t("register.nicknamePlaceholder"),
                modelValue: $data.formData.nickname,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.formData.nickname = $event),
                trim: "both",
                style: { "width": "660rpx" }
              }, null, 8, ["placeholder", "modelValue"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_forms_item, {
            name: "password",
            modelValue: $data.formData.password,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.formData.password = $event),
            required: ""
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                inputBorder: false,
                class: "easyinput",
                placeholder: _ctx.$t("register.passwordDigitsPlaceholder"),
                type: "password",
                modelValue: $data.formData.password,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formData.password = $event),
                trim: "both"
              }, null, 8, ["placeholder", "modelValue"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          vue.createVNode(_component_uni_forms_item, {
            name: "pwd2",
            modelValue: $data.formData.pwd2,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.formData.pwd2 = $event),
            required: ""
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                inputBorder: false,
                class: "easyinput",
                placeholder: _ctx.$t("register.passwordAgain"),
                type: "password",
                modelValue: $data.formData.pwd2,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.formData.pwd2 = $event),
                trim: "both"
              }, null, 8, ["placeholder", "modelValue"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          vue.createVNode(_component_uni_agreements, {
            onSetAgree: _cache[6] || (_cache[6] = ($event) => $data.agree = $event)
          }),
          vue.createElementVNode("button", {
            class: "send-btn",
            type: "primary",
            onClick: _cache[7] || (_cache[7] = (...args) => $options.submit && $options.submit(...args))
          }, vue.toDisplayString(_ctx.$t("register.registerAndLogin")), 1)
        ]),
        _: 1
      }, 8, ["value", "rules"])
    ]);
  }
  var PagesUcenterLoginPageRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/ucenter/login-page/register/register.vue"]]);
  var en$1 = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  var zhHans$2 = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u663E\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F7D...",
    "uni-load-more.contentnomore": "\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86"
  };
  var zhHant = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u986F\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F09...",
    "uni-load-more.contentnomore": "\u6C92\u6709\u66F4\u591A\u6578\u64DA\u4E86"
  };
  var messages$2 = {
    en: en$1,
    "zh-Hans": zhHans$2,
    "zh-Hant": zhHant
  };
  let platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  const {
    t: t$1
  } = initVueI18n(messages$2);
  const _sfc_main$9 = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        webviewHide: false,
        platform,
        imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZVHb98LM+F5bHL8khA1iSeiyQBCRM+YGqKUnnJTDLGI0BGZlKDIU2MMglUiDApEZvSsZnQtBRJtKwQNKQMFYeRDR10WOLd8ljYXdh+v8v5fR3Od+797t1dnOnO/Ofce77z+J//+b/P+ZqtXbs2sJ9MJhNUV1cHJ06cCJo3bx7EPc2aNcvpy7pWrVoF+/fvDyoqKoI2bdoE9fX1F7TjN8a+EXBn/fkfvw942Tf+wYMHg9mzZwfjxo0LDhw4EPa1x2MbFw/fOGfPng1qa2tzcCkILsLDydq2bRsunpOTMM7TD/W/tZDZhPdeKD+yGxHhdu3aBV27dg3OnDlzMVANMheLAO3btw8KCwuDmpoaX5OxbgUIMEq7K8IcPnw4KCsrC/r37x8cP378/4cAXAB3vqSkJMuiDhTkw+XcuXNhOWbMmKBly5YhUT8xArhyFvP0BfwRsAuwxJZJsm/nzp2DTp06he/OU+cZ64K6o0ePBkOHDg2GDx8e6gEbJ5Q/NHNuAJQ1hgBeHUDlR7nVTkY8rQAvAi4z34vR/mPs1FoRsaCgIJThI0eOBC1atEiFGGV+5MiRoS45efJkqFjJFXV1dQuA012m2WcwTw98fy6CqBdsaiIO4CScrGPHjvk4odhavPquRtFWXEC25VgkREKOCh/qDSq+vn37htzD/mZTOmOc5U7zKzBPEedygWshcDyWvs30igAbU+6oyMgJBCFhwQE0fccxN60Ay9iebbjoDh06hMowjQxT4fXq1SskArmHZpkArvixp/kWzHdMeArExSJEaiXIjjRjRJ4DaAGWpibLzXN3Fm1vA5teBgh3j1Rv3bp1YgKwPdmf2p9zcyNYYgPKMfY0T5f5nNYdw158nJ8QawW4CLKwiOBSEgO/hok2eBydR+3dYH+PLxA5J8Vv0KBBwenTp0P2JWAx6+yFEBfs8lMY+y0SWMBNI9E4ThKi58VKTg3FQZS1RQF1cz27eC0QHMu+3E0SkUowjhVt5VdaWhp07949ZHv2Qd1EjDXM2cla1M0nl3GxAs3J9yREzyTdFVKVFOaE9qRA8GM0WebRuo9JGZKA7Mv2SeS/Z8+eoQ9BArMfFrLGo6jvxbhHbJZnKX2Rzz1O7QhJJ9Cs2ZMaWIyq/zhdeqPNfIoHd58clIQD+JSXl4dKlyIAuBdVXZwFVWKspSSoxE++h8x4k3uCnEhE4I5KwRiFWGOU0QWKiCYLbdoRMRKAu2kQ9vkfLU6dOhX06NEjlH+yMRZSinnuyWnYosVcji8CEA/6Cg2JF+IIUBqnGKUTCNwtwBN4f89RiK1R96DEgO2o0NDmtEdvVFdVVYV+P3UAPUEs6GFwV3PHmXkD4vh74iDFJysVI/MlaQhwKeBNTLYX5VuA8T4/gZxA4MRGFxDB6R7OmYPfyykGRJbyie+XnGYnQIC/coH9+vULiYrxrkL9ZA9+0ykaHIfEpM7ge8TiJ2CsHYwyMfafAF1yCGBHYIbCVDjDjKt7BeB51D+LgQa6OkG7IDYEEtvQ7lnXLKLtLdLuJBpE4gPUXcW2+PkZwOex+4cGDhwYDBkyRL7/HFcEwUGPo/8uWRUpYnfxGHco8HkewLHLyYmAawAPuIFZxhOpDfJQ8gbUv41yORAptMWBNr6oqMhWird5+u+iHmBb2nhjDV7HWBNQTgK8y11l5NetWzc5ULscAtSj7nbNI0skhWeUZCc0W4nyH/jO4Vz0u1IeYhbk4AiwM6tjxIWByHsoZ9qcIBPJd/y+DwPfBESOmCa/QF3WiZHucLlEDpNxcNhmheEOPgdQNx6/VZFQzFZ5TN08AHXQt2Ii3EdyFuUsPtTcGPhW5iMiCNELvz+Gdn9huG4HUJaW/w3g0wxV0XaG7arG2WeKiUWYM4Y7GO5ezshTARbbWGw/DvXkpp/ivVvE0JVoMxN4rpGzJMhE5Pl+xlATsDIqikP9F9D2z3h9nOksEUFhK+qO4rcPkoalMQ/HqJLIyb3F3JdjrCcw1yZ8joyJLR5gCo54etlag7qIoeNh1N1BRYj3DTFJ0elotxPlVzkGuYAmL0VSJVGAJA41c4Z6A3BzTLfn0HYwYKEI6CUAMzZEWvLsIcQOo1AmmyyM72nHJCfYsogflGV6jEk9vyQZXSuq6w4c16NsGcGZbwOPr+H1RkOk2LEzjNepxQkihHSCQ4ynAYNRx2zMKV92CQMWqj8J0BRE8EShxRFN6YrfCRhC0x3r/Zm4IbQCcmJoV0kMamllccR6FjHqUC5F2R/wS2dcymOlfAKOS4KmzQb5cpNC2MC7JhVn5wjXoJ44rYhLh8n0eXOCorJxa7POjbSlCGVczr34/RsAmrcvo9s+wGp3tzVhntxiXiJ4nvEYb4FJkf0O8HocAePmLvCxnL0AORraVekJk6TYjDabRVXfRE2lCN1h6ZQRN1+InUbsCpKwoBZHh0dODN9JBCUffItXxEavTQkUtnfTVAplCWL3JISz29h4NjotnuSsQKJCk8dF+kJR6RARjrqFVmfPnj3ZbK8cIJ0msd6jgHPGtfVTQ8VLmlvh4mct9sobRmPic0DyDQQnx/NlfYUgyz59+oScsH379pAwXABD32nTpoUHIToESeI5mnbE/UqDdyLcafEBf2MCqgC7NwxIbMREJQ0g4D4sfJwnD+AmRrII05cfMWJE+L1169bQr+fip06dGp4oJ83lmYd5wj/EmMa4TaHivo4EeCguYZBnkB5g2aWA69OIEnUHOaGysjIYMGBAMGnSpODYsWPZwCpFmm4lNq+4gSLQA7jcX8DwtjEyRC8wjabnXEx9kfWnTJkSJkAo90xpJVV+FmcVNeYAF5zWngS4C4O91MBxmAv8blLEpbjI5sz9MTdAhcgkCT1RO8mZkAjfiYpTEvStAS53Uw1vAiUGgZ3GpuQEYvoiBqlIan7kSDHnTwJQFNiPu0+5VxCVYhcZIjNrdXUDdp+Eq5AZ3Gkg8QAyVZRZIk4Tl4QAbF9cXJxNYZMAtAokgs4BrNxEpCtteXg7DDTMDKYNSuQdKsnJBek7HxewvxaosWxLYXtw+cJp18217wql4aKCfBNoEu0O5VU+PhctJ0YeXD4C6JQpyrlpSLTojpGGGN5YwNziChdIZLk4lvLcFJ9jMX3QdiImY9bmGQU+TRUL5CHITTRlgF8D9ouD1MfmLoEPl5xokIumZ2cfgMpHt47IW9N64Hsh7wQYYjyIugWuF5fCqYncXRd5vPMWyizzvhi/32+nvG0dZc9vR6fZOu0md5e+uC408FvKSIOZwXlGvxPv95izA2Vtvg1xKFWARI+vMX66HUhpQQb643uW1bSjuTWyw2SBvDrBvjFic1eGGlz5esq3ko9uSIlBRqPuFcCv8F4WIcN12nVaBd0SaYwI6PDDImR11JkqgHcPmQssjxIn6bUshygDFJUTxPMpHk+jfjPgupgdnYV2R/g7xSjtpah8RJBewhwf0gGK6XI92u4wXFEU40afJ4DN4h5LcAd+40HI3JgJecuT0c062W0i2hQJUTcxan3/CMW1PF2K6bbA+Daz4xRs1D3Br1Cm0OihKCqizW78/nXAF/G5TXrEcVzaNMH6CyMswqsAHqDyDLEyou8lwOXnKF8DjI6KjV3KzMBiXkDH8ij/H214J5A596ekrZ3F0zXlWeL7+P5eUrNo3/QwC15uxthuzidy7DzKRwEDaAViiDgKbTbz7CJnzo0bN7pIfIiid8SuPwn25o3QCmpnyjlZkyxPP8EomCJzrGb7GJMx7tNsq4MT2xMUYaiErZOluTzKsnz3gwCeCZyVRZJfYplNEokEjwrPtxlxjeYAk+F1F74VAzPxQRNYYdtpOUvWs8J1sGhBJMNsb7igN8plJs1eSmLIhLKE4rvaCX27gOhLpLOsIzJ7qn/i+wZzcvSOZ23/du8TZjwV8zHIXoP4R3ifBxiFz1dcVpa3aPntPE+c6TmIWE9EtcMmAcPdWAhYhAXxcLOQi9L1WhD1Sc8p1d2oL7XGiRKp8F4A2i8K/nfI+y/gsTDJ/YC/8+AD5Uh04KHiGl+cIFPnBDDrPMjwRGkLXyxO4VGbfQWnDH2v0bVWE3C9QOXlepbgjEfIJQI6XDG3z5ahD9cw2pS78ipB85wyScNTvsVzlzzhL8/jRrnmVjfFJK/m3m4nj9vbgQTguT8XZTjsm672R5uJKEaQmBI/c58gyus8ZDagLpEVSJBIyHp4jn++xqPV71OgQgJYEWOtZ/haxRtKmWOBu8xdBLftWltsY84zE6WIEy/eIOWL+BaayMx+KHtL7EAkqdNDLiEXmEMUHniedtJqg9HmZtfvt26vNi0BdG3Ft3g8ZOf7PAu59TxtzivLNIekyi+wD1i8CuUiD9FXAa8C+/xS3JPmZnomyc7H+fb4/Se0bk41Fel621r4cgVxbq91V4jVqwB7HTe2M7jgB+QWHavZkDRPmZcASoZEmBx6i75bGjPcMdL4/VKGFAGWZkGzPG0XAbdL9A81G5LOmUnC9hHKJeO7dcUMjblSl12867ElFTtaGl20xvvLGPdVz/8TVuU7y0x1PG7vtNg24oz9Uo/Z412++VFWI7Fcog9tu9Lm6gvRmIPv9x1xmQAu6RDkXtbOtlGEmpgD5Nvnyc0dcv0EE6cfdi1HmhMf9wDF3k3gtRvEedhxjpgfqPb9PU9iEJHnyOUA7bQUXh6kq/D7l2iTjWv7XOD530BDr8jIrus+srXjt4MzumJMHuTsBa63YKE1+RR5lBjEikCCnWKWiHdzOgKO+nRIBAF88za/IFmJ3eMZov4CYxGBabcpGL8EYx+SeMXJeRwHNsV/h+vdxeuhEpN3ZyNY78Gm2fknJxVGhyjixPiQvVkNzT1elD9Py/aTAL64Hb9vcYmC9zfdXdT/C1LeGbg4rnBaAihDFJH12W5ulfNCNe/xTsP3bp8ikzJs5BF+5PNfAQYAPaseTdsEcaYAAAAASUVORK5CYII="
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t$1("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t$1("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t$1("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages = getCurrentPages();
      var page = pages[pages.length - 1];
      var currentWebview2 = page.$getAppWebview();
      currentWebview2.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview2.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.webviewHide && ($props.iconType === "circle" || $props.iconType === "auto" && $data.platform === "android") && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
        class: "uni-load-more__img uni-load-more__img--android-MP"
      }, [
        vue.createElementVNode("view", {
          class: "uni-load-more__img-icon",
          style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
        }, null, 4),
        vue.createElementVNode("view", {
          class: "uni-load-more__img-icon",
          style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
        }, null, 4),
        vue.createElementVNode("view", {
          class: "uni-load-more__img-icon",
          style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
        }, null, 4)
      ], 4)) : !$data.webviewHide && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
        class: "uni-load-more__img uni-load-more__img--ios-H5"
      }, [
        vue.createElementVNode("image", {
          src: $data.imgBase64,
          mode: "widthFix"
        }, null, 8, ["src"])
      ], 4)) : vue.createCommentVNode("v-if", true),
      $props.showText ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 2,
        class: "uni-load-more__text",
        style: vue.normalizeStyle({ color: $props.color })
      }, vue.toDisplayString($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText), 5)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-90d4256a"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);
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
  var zhHans$1 = {
    noData,
    noNetwork,
    toSet,
    error
  };
  var messages$1 = {
    en,
    "zh-Hans": zhHans$1
  };
  var _imports_0$1 = "/static/uni-load-state/disconnection.png";
  const {
    t
  } = initVueI18n(messages$1);
  const _sfc_main$8 = {
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
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", {
      onAppear: _cache[1] || (_cache[1] = (...args) => $options.appear && $options.appear(...args))
    }, [
      $props.state.error ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
        $data.networkType == "none" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "box"
        }, [
          vue.createElementVNode("image", {
            class: "icon-image",
            src: _imports_0$1,
            mode: "widthFix"
          }),
          vue.createElementVNode("text", { class: "tip-text" }, vue.toDisplayString($options.noNetwork), 1),
          vue.createElementVNode("view", {
            class: "btn btn-default",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.openSettings && $options.openSettings(...args))
          }, [
            vue.createElementVNode("text", { class: "btn-text" }, vue.toDisplayString($options.toSet), 1)
          ])
        ])) : (vue.openBlock(), vue.createElementBlock("text", {
          key: 1,
          class: "error"
        }, vue.toDisplayString($options.error) + "\uFF1A" + vue.toDisplayString(JSON.stringify($props.state.error)), 1))
      ])) : (vue.openBlock(), vue.createBlock(_component_uni_load_more, {
        key: 1,
        class: "uni-load-more",
        status: $props.state.loading ? "loading" : $props.state.hasMore ? "hasMore" : "noMore"
      }, null, 8, ["status"]))
    ], 32);
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-91bd4738"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/components/uni-load-state/uni-load-state.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {
        isLoading: true,
        loadMore: {
          contentdown: "",
          contentrefresh: "",
          contentnomore: ""
        },
        readNewsLog: [],
        udbWhere: ""
      };
    },
    onLoad() {
      this.readNewsLog = uni.getStorageSync("readNewsLog") || [];
      let readNewsLogIds = this.readNewsLog.map(({ article_id }) => article_id);
      formatAppLog("log", "at pages/ucenter/read-news-log/read-news-log.vue:40", typeof readNewsLogIds, readNewsLogIds);
      this.udbWhere = `"_id" in ${JSON.stringify(readNewsLogIds)}`;
      uni.setNavigationBarTitle({
        title: this.$t("newsLog.navigationBarTitle")
      });
    },
    onPullDownRefresh() {
      this.refreshData();
    },
    onReachBottom() {
      this.$refs.udb.loadMore();
    },
    methods: {
      refreshData() {
        this.$refs.udb.loadData({
          clear: true
        }, (res2) => {
          formatAppLog("log", "at pages/ucenter/read-news-log/read-news-log.vue:57", res2);
          uni.stopPullDownRefresh();
        });
      },
      handleItemClick(item) {
        formatAppLog("log", "at pages/ucenter/read-news-log/read-news-log.vue:62", item);
        uni.navigateTo({
          url: "/pages/list/detail?id=" + item._id + "&title=" + item.title
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_dateformat = resolveEasycom(vue.resolveDynamicComponent("uni-dateformat"), __easycom_0$7);
    const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_1$1);
    const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_2$1);
    const _component_uni_load_state = resolveEasycom(vue.resolveDynamicComponent("uni-load-state"), __easycom_3);
    const _component_unicloud_db = resolveEasycom(vue.resolveDynamicComponent("unicloud-db"), __easycom_4$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createVNode(_component_unicloud_db, {
        ref: "udb",
        where: $data.udbWhere,
        collection: "opendb-news-articles",
        onLoad: _cache[0] || (_cache[0] = ($event) => $data.isLoading == false),
        onError: _cache[1] || (_cache[1] = ($event) => $data.isLoading == false),
        field: "title,_id",
        "page-size": 10
      }, {
        default: vue.withCtx(({ data, pagination, loading, hasMore, error: error2 }) => [
          vue.createVNode(_component_uni_list, null, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(data, (item, index) => {
                return vue.openBlock(), vue.createBlock(_component_uni_list_item, {
                  key: index,
                  clickable: true,
                  onClick: ($event) => $options.handleItemClick(item)
                }, {
                  body: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "item" }, [
                      vue.createElementVNode("text", null, vue.toDisplayString(item.title), 1),
                      vue.createVNode(_component_uni_dateformat, {
                        class: "article-date",
                        date: $data.readNewsLog[index].last_time,
                        format: "yyyy-MM-dd hh:mm",
                        threshold: [0, 0]
                      }, null, 8, ["date"])
                    ])
                  ]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 128))
            ]),
            _: 2
          }, 1024),
          vue.createVNode(_component_uni_load_state, {
            onNetworkResume: $options.refreshData,
            state: { data, pagination, hasMore, loading, error: error2 }
          }, null, 8, ["onNetworkResume", "state"])
        ]),
        _: 1
      }, 8, ["where"])
    ]);
  }
  var PagesUcenterReadNewsLogReadNewsLog = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/ucenter/read-news-log/read-news-log.vue"]]);
  var _imports_0 = "/static/h5/download-app/ios.png";
  var _imports_1 = "/static/h5/download-app/android.png";
  const _sfc_main$6 = {
    computed: {
      uniStarterConfig() {
        return getApp().globalData.config;
      }
    },
    data() {
      return {
        about: {},
        code: "",
        isIos: "",
        showMask: false,
        downloadUrl: {
          "ios": "",
          "android": ""
        }
      };
    },
    created() {
      this.about = this.uniStarterConfig.about;
      this.downloadUrl = this.uniStarterConfig.download;
      this.year = new Date().getFullYear();
      var userAgent = navigator.userAgent;
      var ua = userAgent.toLowerCase();
      this.isWeixin = ua.indexOf("micromessenger") != -1;
      this.isIos = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    },
    onLoad({
      code
    }) {
      this.code = code;
      document.getElementById("openApp").style.display = "none";
      document.getElementsByTagName("body")[0].style = "";
    },
    methods: {
      download() {
        if (this.code) {
          uni.setClipboardData({
            data: this.code,
            complete: (e) => {
              formatAppLog("log", "at pages/ucenter/invite/invite.vue:66", e);
              uni.hideToast();
              document.getElementById("#clipboard").style.top = "-999px";
              uni.hideKeyboard();
            }
          });
        }
        if (this.isIos) {
          window.location.href = this.downloadUrl.ios;
        } else {
          if (this.isWeixin) {
            this.showMask = true;
          } else {
            window.location.href = this.downloadUrl.android;
          }
        }
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "about" }, [
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("image", {
          class: "logoImg",
          src: $data.about.logo
        }, null, 8, ["src"]),
        vue.createElementVNode("text", { class: "tip appName" }, vue.toDisplayString($data.about.appName), 1),
        vue.createElementVNode("text", { class: "tip" }, vue.toDisplayString($data.about.slogan), 1),
        vue.createElementVNode("view", {
          onClick: _cache[0] || (_cache[0] = (...args) => $options.download && $options.download(...args)),
          id: "download"
        }, [
          $data.isIos ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 0,
            class: "icon",
            src: _imports_0,
            mode: "widthFix"
          })) : (vue.openBlock(), vue.createElementBlock("image", {
            key: 1,
            class: "icon",
            src: _imports_1,
            mode: "widthFix"
          })),
          vue.createElementVNode("text", { class: "download-text" }, vue.toDisplayString(_ctx.$t("invite.download")), 1)
        ]),
        vue.createElementVNode("text", { class: "tip" }, "version " + vue.toDisplayString($data.about.version), 1)
      ]),
      vue.createElementVNode("view", { class: "copyright" }, [
        vue.createElementVNode("text", { class: "hint" }, vue.toDisplayString($data.about.company), 1)
      ]),
      $data.showMask ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "mask"
      }, [
        vue.createElementVNode("image", {
          src: "/static/h5/download-app/openImg.png",
          mode: "widthFix"
        })
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var PagesUcenterInviteInvite = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/ucenter/invite/invite.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {};
    },
    onLoad() {
      uni.setNavigationBarTitle({
        title: this.$t("deactivate.navigationBarTitle")
      });
    },
    methods: __spreadProps(__spreadValues({}, mapActions({
      logout: "user/logout"
    })), {
      cancel() {
        uni.navigateBack();
      },
      nextStep() {
        uni.showModal({
          content: "\u5DF2\u7ECF\u4ED4\u7EC6\u9605\u8BFB\u6CE8\u9500\u63D0\u793A\uFF0C\u77E5\u6653\u53EF\u80FD\u5E26\u6765\u7684\u540E\u679C\uFF0C\u5E76\u786E\u8BA4\u8981\u6CE8\u9500",
          complete: (e) => {
            if (e.confirm) {
              St.callFunction({
                name: "uni-id-cf",
                data: {
                  "action": "closeAccount"
                },
                complete: (e2) => {
                  formatAppLog("log", "at pages/ucenter/settings/deactivate/deactivate.vue:57", e2);
                  if (e2.result.code === 0) {
                    uni.showToast({
                      title: "\u6CE8\u9500\u6210\u529F"
                    });
                    this.logout();
                    uni.navigateTo({
                      url: "/pages/ucenter/login-page/index/index"
                    });
                  } else {
                    uni.showToast({
                      icon: "error",
                      title: e2.result.errMsg
                    });
                  }
                }
              });
            } else {
              uni.navigateBack();
            }
          }
        });
      }
    })
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("text", {
        class: "words",
        space: "emsp"
      }, " \u4E00\u3001\u6CE8\u9500\u662F\u4E0D\u53EF\u9006\u64CD\u4F5C\uFF0C\u6CE8\u9500\u540E:\\n 1.\u5E10\u53F7\u5C06\u65E0\u6CD5\u767B\u5F55\u3001\u65E0\u6CD5\u627E\u56DE\u3002\\n 2.\u5E10\u53F7\u6240\u6709\u4FE1\u606F\u90FD\u4F1A\u6E05\u9664(\u4E2A\u4EBA\u8EAB\u4EFD\u4FE1\u606F\u3001\u7C89\u4E1D\u6570\u7B49;\u53D1\u5E03\u7684\u4F5C\u54C1\u3001\u8BC4\u8BBA\u3001\u70B9\u8D5E\u7B49;\u4EA4\u6613\u4FE1\u606F\u7B49)\uFF0C\u4F60 \u7684\u670B\u53CB\u5C06\u65E0\u6CD5\u901A\u8FC7\u672C\u5E94\u7528\u5E10\u53F7\u8054\u7CFB\u4F60\uFF0C\u8BF7\u81EA\u884C\u5907\u4EFD\u76F8\u5173 \u4FE1\u606F\u548C\u6570\u636E\u3002\\n \u4E8C\u3001\u91CD\u8981\u63D0\u793A\\n 1.\u5C01\u7981\u5E10\u53F7(\u6C38\u4E45\u5C01\u7981\u3001\u793E\u4EA4\u5C01\u7981\u3001\u76F4\u64AD\u6743\u9650\u5C01\u7981)\u4E0D\u80FD\u7533\u8BF7\u6CE8\u9500\u3002\\n 2.\u6CE8\u9500\u540E\uFF0C\u4F60\u7684\u8EAB\u4EFD\u8BC1\u3001\u4E09\u65B9\u5E10\u53F7(\u5FAE\u4FE1\u3001QQ\u3001\u5FAE\u535A\u3001\u652F\u4ED8\u5B9D)\u3001\u624B\u673A\u53F7\u7B49\u7ED1\u5B9A\u5173\u7CFB\u5C06\u89E3\u9664\uFF0C\u89E3\u9664\u540E\u53EF\u4EE5\u7ED1\u5B9A\u5230\u5176\u4ED6\u5E10\u53F7\u3002\\n 3.\u6CE8\u9500\u540E\uFF0C\u624B\u673A\u53F7\u53EF\u4EE5\u6CE8\u518C\u65B0\u7684\u5E10\u53F7\uFF0C\u65B0\u5E10\u53F7\u4E0D\u4F1A\u5B58\u5728\u4E4B\u524D\u5E10\u53F7\u7684\u4EFB\u4F55\u4FE1\u606F(\u4F5C\u54C1\u3001\u7C89\u4E1D\u3001\u8BC4\u8BBA\u3001\u4E2A\u4EBA\u4FE1\u606F\u7B49)\u3002\\n 4.\u6CE8\u9500\u672C\u5E94\u7528\u5E10\u53F7\u524D\uFF0C\u9700\u5C3D\u5FEB\u5904\u7406\u5E10\u53F7\u4E0B\u7684\u8D44\u91D1\u95EE\u9898\u3002\\n 5.\u89C6\u5177\u4F53\u5E10\u53F7\u60C5\u51B5\u800C\u5B9A\uFF0C\u6CE8\u9500\u6700\u591A\u9700\u89817\u5929\u3002\\n "),
      vue.createElementVNode("view", { class: "button-group" }, [
        vue.createElementVNode("button", {
          onClick: _cache[0] || (_cache[0] = (...args) => $options.nextStep && $options.nextStep(...args)),
          class: "next",
          type: "default"
        }, vue.toDisplayString(_ctx.$t("deactivate.nextStep")), 1),
        vue.createElementVNode("button", {
          onClick: _cache[1] || (_cache[1] = (...args) => $options.cancel && $options.cancel(...args)),
          type: "warn"
        }, vue.toDisplayString(_ctx.$t("deactivate.cancelText")), 1)
      ])
    ]);
  }
  var PagesUcenterSettingsDeactivateDeactivate = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/ucenter/settings/deactivate/deactivate.vue"]]);
  const ERR_MSG_OK = "chooseAndUploadFile:ok";
  const ERR_MSG_FAIL = "chooseAndUploadFile:fail";
  function chooseImage(opts) {
    const {
      count,
      sizeType = ["original", "compressed"],
      sourceType = ["album", "camera"],
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      uni.chooseImage({
        count,
        sizeType,
        sourceType,
        extension,
        success(res2) {
          resolve(normalizeChooseAndUploadFileRes(res2, "image"));
        },
        fail(res2) {
          reject({
            errMsg: res2.errMsg.replace("chooseImage:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function chooseVideo(opts) {
    const {
      camera,
      compressed,
      maxDuration,
      sourceType = ["album", "camera"],
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      uni.chooseVideo({
        camera,
        compressed,
        maxDuration,
        sourceType,
        extension,
        success(res2) {
          const {
            tempFilePath,
            duration,
            size,
            height,
            width
          } = res2;
          resolve(normalizeChooseAndUploadFileRes({
            errMsg: "chooseVideo:ok",
            tempFilePaths: [tempFilePath],
            tempFiles: [
              {
                name: res2.tempFile && res2.tempFile.name || "",
                path: tempFilePath,
                size,
                type: res2.tempFile && res2.tempFile.type || "",
                width,
                height,
                duration,
                fileType: "video",
                cloudPath: ""
              }
            ]
          }, "video"));
        },
        fail(res2) {
          reject({
            errMsg: res2.errMsg.replace("chooseVideo:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function chooseAll(opts) {
    const {
      count,
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      let chooseFile = uni.chooseFile;
      if (typeof wx !== "undefined" && typeof wx.chooseMessageFile === "function") {
        chooseFile = wx.chooseMessageFile;
      }
      if (typeof chooseFile !== "function") {
        return reject({
          errMsg: ERR_MSG_FAIL + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002"
        });
      }
      chooseFile({
        type: "all",
        count,
        extension,
        success(res2) {
          resolve(normalizeChooseAndUploadFileRes(res2));
        },
        fail(res2) {
          reject({
            errMsg: res2.errMsg.replace("chooseFile:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function normalizeChooseAndUploadFileRes(res2, fileType) {
    res2.tempFiles.forEach((item, index) => {
      if (!item.name) {
        item.name = item.path.substring(item.path.lastIndexOf("/") + 1);
      }
      if (fileType) {
        item.fileType = fileType;
      }
      item.cloudPath = Date.now() + "_" + index + item.name.substring(item.name.lastIndexOf("."));
    });
    if (!res2.tempFilePaths) {
      res2.tempFilePaths = res2.tempFiles.map((file) => file.path);
    }
    return res2;
  }
  function uploadCloudFiles(files, max = 5, onUploadProgress) {
    files = JSON.parse(JSON.stringify(files));
    const len = files.length;
    let count = 0;
    let self2 = this;
    return new Promise((resolve) => {
      while (count < max) {
        next();
      }
      function next() {
        let cur = count++;
        if (cur >= len) {
          !files.find((item) => !item.url && !item.errMsg) && resolve(files);
          return;
        }
        const fileItem = files[cur];
        const index = self2.files.findIndex((v2) => v2.uuid === fileItem.uuid);
        fileItem.url = "";
        delete fileItem.errMsg;
        St.uploadFile({
          filePath: fileItem.path,
          cloudPath: fileItem.cloudPath,
          fileType: fileItem.fileType,
          onUploadProgress: (res2) => {
            res2.index = index;
            onUploadProgress && onUploadProgress(res2);
          }
        }).then((res2) => {
          fileItem.url = res2.fileID;
          fileItem.index = index;
          if (cur < len) {
            next();
          }
        }).catch((res2) => {
          fileItem.errMsg = res2.errMsg || res2.message;
          fileItem.index = index;
          if (cur < len) {
            next();
          }
        });
      }
    });
  }
  function uploadFiles(choosePromise, {
    onChooseFile,
    onUploadProgress
  }) {
    return choosePromise.then((res2) => {
      if (onChooseFile) {
        const customChooseRes = onChooseFile(res2);
        if (typeof customChooseRes !== "undefined") {
          return Promise.resolve(customChooseRes).then((chooseRes) => typeof chooseRes === "undefined" ? res2 : chooseRes);
        }
      }
      return res2;
    }).then((res2) => {
      if (res2 === false) {
        return {
          errMsg: ERR_MSG_OK,
          tempFilePaths: [],
          tempFiles: []
        };
      }
      return res2;
    });
  }
  function chooseAndUploadFile(opts = {
    type: "all"
  }) {
    if (opts.type === "image") {
      return uploadFiles(chooseImage(opts), opts);
    } else if (opts.type === "video") {
      return uploadFiles(chooseVideo(opts), opts);
    }
    return uploadFiles(chooseAll(opts), opts);
  }
  const get_file_ext = (name) => {
    const last_len = name.lastIndexOf(".");
    const len = name.length;
    return {
      name: name.substring(0, last_len),
      ext: name.substring(last_len + 1, len)
    };
  };
  const get_extname = (fileExtname) => {
    if (!Array.isArray(fileExtname)) {
      let extname = fileExtname.replace(/(\[|\])/g, "");
      return extname.split(",");
    } else {
      return fileExtname;
    }
  };
  const get_files_and_is_max = (res2, _extname) => {
    let filePaths = [];
    let files = [];
    if (!_extname || _extname.length === 0) {
      return {
        filePaths,
        files
      };
    }
    res2.tempFiles.forEach((v2) => {
      let fileFullName = get_file_ext(v2.name);
      const extname = fileFullName.ext.toLowerCase();
      if (_extname.indexOf(extname) !== -1) {
        files.push(v2);
        filePaths.push(v2.path);
      }
    });
    if (files.length !== res2.tempFiles.length) {
      uni.showToast({
        title: `\u5F53\u524D\u9009\u62E9\u4E86${res2.tempFiles.length}\u4E2A\u6587\u4EF6 \uFF0C${res2.tempFiles.length - files.length} \u4E2A\u6587\u4EF6\u683C\u5F0F\u4E0D\u6B63\u786E`,
        icon: "none",
        duration: 5e3
      });
    }
    return {
      filePaths,
      files
    };
  };
  const get_file_info = (filepath) => {
    return new Promise((resolve, reject) => {
      uni.getImageInfo({
        src: filepath,
        success(res2) {
          resolve(res2);
        },
        fail(err) {
          reject(err);
        }
      });
    });
  };
  const get_file_data = async (files, type = "image") => {
    let fileFullName = get_file_ext(files.name);
    const extname = fileFullName.ext.toLowerCase();
    let filedata = {
      name: files.name,
      uuid: files.uuid,
      extname: extname || "",
      cloudPath: files.cloudPath,
      fileType: files.fileType,
      url: files.path || files.path,
      size: files.size,
      image: {},
      path: files.path,
      video: {}
    };
    if (type === "image") {
      const imageinfo = await get_file_info(files.path);
      delete filedata.video;
      filedata.image.width = imageinfo.width;
      filedata.image.height = imageinfo.height;
      filedata.image.location = imageinfo.path;
    } else {
      delete filedata.image;
    }
    return filedata;
  };
  const _sfc_main$4 = {
    name: "uploadImage",
    emits: ["uploadFiles", "choose", "delFile"],
    props: {
      filesList: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disablePreview: {
        type: Boolean,
        default: false
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      imageStyles: {
        type: Object,
        default() {
          return {
            width: "auto",
            height: "auto",
            border: {}
          };
        }
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      styles() {
        let styles = {
          width: "auto",
          height: "auto",
          border: {}
        };
        return Object.assign(styles, this.imageStyles);
      },
      boxStyle() {
        const {
          width = "auto",
          height = "auto"
        } = this.styles;
        let obj = {};
        if (height === "auto") {
          if (width !== "auto") {
            obj.height = this.value2px(width);
            obj["padding-top"] = 0;
          } else {
            obj.height = 0;
          }
        } else {
          obj.height = this.value2px(height);
          obj["padding-top"] = 0;
        }
        if (width === "auto") {
          if (height !== "auto") {
            obj.width = this.value2px(height);
          } else {
            obj.width = "33.3%";
          }
        } else {
          obj.width = this.value2px(width);
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      },
      borderStyle() {
        let {
          border
        } = this.styles;
        let obj = {};
        const widthDefaultValue = 1;
        const radiusDefaultValue = 3;
        if (typeof border === "boolean") {
          obj.border = border ? "1px #eee solid" : "none";
        } else {
          let width = border && border.width || widthDefaultValue;
          width = this.value2px(width);
          let radius = border && border.radius || radiusDefaultValue;
          radius = this.value2px(radius);
          obj = {
            "border-width": width,
            "border-style": border && border.style || "solid",
            "border-color": border && border.color || "#eee",
            "border-radius": radius
          };
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      }
    },
    methods: {
      uploadFiles(item, index) {
        this.$emit("uploadFiles", item);
      },
      choose() {
        this.$emit("choose");
      },
      delFile(index) {
        this.$emit("delFile", index);
      },
      prviewImage(img, index) {
        let urls = [];
        if (Number(this.limit) === 1 && this.disablePreview && !this.disabled) {
          this.$emit("choose");
        }
        if (this.disablePreview)
          return;
        this.filesList.forEach((i2) => {
          urls.push(i2.url);
        });
        uni.previewImage({
          urls,
          current: index
        });
      },
      value2px(value) {
        if (typeof value === "number") {
          value += "px";
        } else {
          if (value.indexOf("%") === -1) {
            value = value.indexOf("px") !== -1 ? value : value + "px";
          }
        }
        return value;
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker__container" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.filesList, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "file-picker__box",
          key: index,
          style: vue.normalizeStyle($options.boxStyle)
        }, [
          vue.createElementVNode("view", {
            class: "file-picker__box-content",
            style: vue.normalizeStyle($options.borderStyle)
          }, [
            vue.createElementVNode("image", {
              class: "file-image",
              src: item.url,
              mode: "aspectFill",
              onClick: vue.withModifiers(($event) => $options.prviewImage(item, index), ["stop"])
            }, null, 8, ["src", "onClick"]),
            $props.delIcon && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "icon-del-box",
              onClick: vue.withModifiers(($event) => $options.delFile(index), ["stop"])
            }, [
              vue.createElementVNode("view", { class: "icon-del" }),
              vue.createElementVNode("view", { class: "icon-del rotate" })
            ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
            item.progress && item.progress !== 100 || item.progress === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "file-picker__progress"
            }, [
              vue.createElementVNode("progress", {
                class: "file-picker__progress-item",
                percent: item.progress === -1 ? 0 : item.progress,
                "stroke-width": "4",
                backgroundColor: item.errMsg ? "#ff5a5f" : "#EBEBEB"
              }, null, 8, ["percent", "backgroundColor"])
            ])) : vue.createCommentVNode("v-if", true),
            item.errMsg ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "file-picker__mask",
              onClick: vue.withModifiers(($event) => $options.uploadFiles(item, index), ["stop"])
            }, " \u70B9\u51FB\u91CD\u8BD5 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
          ], 4)
        ], 4);
      }), 128)),
      $props.filesList.length < $props.limit && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "file-picker__box",
        style: vue.normalizeStyle($options.boxStyle)
      }, [
        vue.createElementVNode("view", {
          class: "file-picker__box-content is-add",
          style: vue.normalizeStyle($options.borderStyle),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("view", { class: "icon-add" }),
            vue.createElementVNode("view", { class: "icon-add rotate" })
          ], true)
        ], 4)
      ], 4)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var uploadImage = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-4c5c5653"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-file-picker/components/uni-file-picker/upload-image.vue"]]);
  const _sfc_main$3 = {
    name: "uploadFile",
    emits: ["uploadFiles", "choose", "delFile"],
    props: {
      filesList: {
        type: Array,
        default() {
          return [];
        }
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      showType: {
        type: String,
        default: ""
      },
      listStyles: {
        type: Object,
        default() {
          return {
            border: true,
            dividline: true,
            borderStyle: {}
          };
        }
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      list() {
        let files = [];
        this.filesList.forEach((v2) => {
          files.push(v2);
        });
        return files;
      },
      styles() {
        let styles = {
          border: true,
          dividline: true,
          "border-style": {}
        };
        return Object.assign(styles, this.listStyles);
      },
      borderStyle() {
        let {
          borderStyle,
          border
        } = this.styles;
        let obj = {};
        if (!border) {
          obj.border = "none";
        } else {
          let width = borderStyle && borderStyle.width || 1;
          width = this.value2px(width);
          let radius = borderStyle && borderStyle.radius || 5;
          radius = this.value2px(radius);
          obj = {
            "border-width": width,
            "border-style": borderStyle && borderStyle.style || "solid",
            "border-color": borderStyle && borderStyle.color || "#eee",
            "border-radius": radius
          };
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      },
      borderLineStyle() {
        let obj = {};
        let {
          borderStyle
        } = this.styles;
        if (borderStyle && borderStyle.color) {
          obj["border-color"] = borderStyle.color;
        }
        if (borderStyle && borderStyle.width) {
          let width = borderStyle && borderStyle.width || 1;
          let style = borderStyle && borderStyle.style || 0;
          if (typeof width === "number") {
            width += "px";
          } else {
            width = width.indexOf("px") ? width : width + "px";
          }
          obj["border-width"] = width;
          if (typeof style === "number") {
            style += "px";
          } else {
            style = style.indexOf("px") ? style : style + "px";
          }
          obj["border-top-style"] = style;
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      }
    },
    methods: {
      uploadFiles(item, index) {
        this.$emit("uploadFiles", {
          item,
          index
        });
      },
      choose() {
        this.$emit("choose");
      },
      delFile(index) {
        this.$emit("delFile", index);
      },
      value2px(value) {
        if (typeof value === "number") {
          value += "px";
        } else {
          value = value.indexOf("px") !== -1 ? value : value + "px";
        }
        return value;
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker__files" }, [
      !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "files-button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(` :class="{'is-text-box':showType === 'list'}" `),
      $options.list.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-file-picker__lists is-text-box",
        style: vue.normalizeStyle($options.borderStyle)
      }, [
        vue.createCommentVNode(" ,'is-list-card':showType === 'list-card' "),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.list, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(["uni-file-picker__lists-box", {
              "files-border": index !== 0 && $options.styles.dividline
            }]),
            key: index,
            style: vue.normalizeStyle(index !== 0 && $options.styles.dividline && $options.borderLineStyle)
          }, [
            vue.createElementVNode("view", { class: "uni-file-picker__item" }, [
              vue.createCommentVNode(` :class="{'is-text-image':showType === 'list'}" `),
              vue.createCommentVNode(' 	<view class="files__image is-text-image">\n						<image class="header-image" :src="item.logo" mode="aspectFit"></image>\n					</view> '),
              vue.createElementVNode("view", { class: "files__name" }, vue.toDisplayString(item.name), 1),
              $props.delIcon && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "icon-del-box icon-files",
                onClick: ($event) => $options.delFile(index)
              }, [
                vue.createElementVNode("view", { class: "icon-del icon-files" }),
                vue.createElementVNode("view", { class: "icon-del rotate" })
              ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
            ]),
            item.progress && item.progress !== 100 || item.progress === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "file-picker__progress"
            }, [
              vue.createElementVNode("progress", {
                class: "file-picker__progress-item",
                percent: item.progress === -1 ? 0 : item.progress,
                "stroke-width": "4",
                backgroundColor: item.errMsg ? "#ff5a5f" : "#EBEBEB"
              }, null, 8, ["percent", "backgroundColor"])
            ])) : vue.createCommentVNode("v-if", true),
            item.status === "error" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "file-picker__mask",
              onClick: vue.withModifiers(($event) => $options.uploadFiles(item, index), ["stop"])
            }, " \u70B9\u51FB\u91CD\u8BD5 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
          ], 6);
        }), 128))
      ], 4)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var uploadFile = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-4f822398"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-file-picker/components/uni-file-picker/upload-file.vue"]]);
  const _sfc_main$2 = {
    name: "uniFilePicker",
    components: {
      uploadImage,
      uploadFile
    },
    emits: ["select", "success", "fail", "progress", "delete", "update:modelValue", "input"],
    props: {
      modelValue: {
        type: [Array, Object],
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disablePreview: {
        type: Boolean,
        default: false
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      autoUpload: {
        type: Boolean,
        default: true
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      mode: {
        type: String,
        default: "grid"
      },
      fileMediatype: {
        type: String,
        default: "image"
      },
      fileExtname: {
        type: [Array, String],
        default() {
          return [];
        }
      },
      title: {
        type: String,
        default: ""
      },
      listStyles: {
        type: Object,
        default() {
          return {
            border: true,
            dividline: true,
            borderStyle: {}
          };
        }
      },
      imageStyles: {
        type: Object,
        default() {
          return {
            width: "auto",
            height: "auto"
          };
        }
      },
      readonly: {
        type: Boolean,
        default: false
      },
      returnType: {
        type: String,
        default: "array"
      },
      sizeType: {
        type: Array,
        default() {
          return ["original", "compressed"];
        }
      }
    },
    data() {
      return {
        files: [],
        localValue: []
      };
    },
    watch: {
      modelValue: {
        handler(newVal, oldVal) {
          this.setValue(newVal, oldVal);
        },
        immediate: true
      }
    },
    computed: {
      filesList() {
        let files = [];
        this.files.forEach((v2) => {
          files.push(v2);
        });
        return files;
      },
      showType() {
        if (this.fileMediatype === "image") {
          return this.mode;
        }
        return "list";
      },
      limitLength() {
        if (this.returnType === "object") {
          return 1;
        }
        if (!this.limit) {
          return 1;
        }
        if (this.limit >= 9) {
          return 9;
        }
        return this.limit;
      }
    },
    created() {
      if (!(St.config && St.config.provider)) {
        this.noSpace = true;
        St.chooseAndUploadFile = chooseAndUploadFile;
      }
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
      if (this.form && this.formItem) {
        if (this.formItem.name) {
          this.rename = this.formItem.name;
          this.form.inputChildrens.push(this);
        }
      }
    },
    methods: {
      clearFiles(index) {
        if (index !== 0 && !index) {
          this.files = [];
          this.$nextTick(() => {
            this.setEmit();
          });
        } else {
          this.files.splice(index, 1);
        }
        this.$nextTick(() => {
          this.setEmit();
        });
      },
      upload() {
        let files = [];
        this.files.forEach((v2, index) => {
          if (v2.status === "ready" || v2.status === "error") {
            files.push(Object.assign({}, v2));
          }
        });
        this.uploadFiles(files);
      },
      async setValue(newVal, oldVal) {
        const newData = async (v2) => {
          const reg = /cloud:\/\/([\w.]+\/?)\S*/;
          let url = "";
          if (v2.fileID) {
            url = v2.fileID;
          } else {
            url = v2.url;
          }
          if (reg.test(url)) {
            v2.fileID = url;
            v2.url = await this.getTempFileURL(url);
          }
          if (v2.url)
            v2.path = v2.url;
          return v2;
        };
        if (this.returnType === "object") {
          if (newVal) {
            await newData(newVal);
          } else {
            newVal = {};
          }
        } else {
          if (!newVal)
            newVal = [];
          for (let i2 = 0; i2 < newVal.length; i2++) {
            let v2 = newVal[i2];
            await newData(v2);
          }
        }
        this.localValue = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(this.localValue);
        }
        let filesData = Object.keys(newVal).length > 0 ? newVal : [];
        this.files = [].concat(filesData);
      },
      choose() {
        if (this.disabled)
          return;
        if (this.files.length >= Number(this.limitLength) && this.showType !== "grid" && this.returnType === "array") {
          uni.showToast({
            title: `\u60A8\u6700\u591A\u9009\u62E9 ${this.limitLength} \u4E2A\u6587\u4EF6`,
            icon: "none"
          });
          return;
        }
        this.chooseFiles();
      },
      chooseFiles() {
        const _extname = get_extname(this.fileExtname);
        St.chooseAndUploadFile({
          type: this.fileMediatype,
          compressed: false,
          sizeType: this.sizeType,
          extension: _extname.length > 0 ? _extname : void 0,
          count: this.limitLength - this.files.length,
          onChooseFile: this.chooseFileCallback,
          onUploadProgress: (progressEvent) => {
            this.setProgress(progressEvent, progressEvent.index);
          }
        }).then((result) => {
          this.setSuccessAndError(result.tempFiles);
        }).catch((err) => {
          formatAppLog("log", "at uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue:361", "\u9009\u62E9\u5931\u8D25", err);
        });
      },
      async chooseFileCallback(res2) {
        const _extname = get_extname(this.fileExtname);
        const is_one = Number(this.limitLength) === 1 && this.disablePreview && !this.disabled || this.returnType === "object";
        if (is_one) {
          this.files = [];
        }
        let {
          filePaths,
          files
        } = get_files_and_is_max(res2, _extname);
        if (!(_extname && _extname.length > 0)) {
          filePaths = res2.tempFilePaths;
          files = res2.tempFiles;
        }
        let currentData = [];
        for (let i2 = 0; i2 < files.length; i2++) {
          if (this.limitLength - this.files.length <= 0)
            break;
          files[i2].uuid = Date.now();
          let filedata = await get_file_data(files[i2], this.fileMediatype);
          filedata.progress = 0;
          filedata.status = "ready";
          this.files.push(filedata);
          currentData.push(__spreadProps(__spreadValues({}, filedata), {
            file: files[i2]
          }));
        }
        this.$emit("select", {
          tempFiles: currentData,
          tempFilePaths: filePaths
        });
        res2.tempFiles = files;
        if (!this.autoUpload || this.noSpace) {
          res2.tempFiles = [];
        }
      },
      uploadFiles(files) {
        files = [].concat(files);
        uploadCloudFiles.call(this, files, 5, (res2) => {
          this.setProgress(res2, res2.index, true);
        }).then((result) => {
          this.setSuccessAndError(result);
        }).catch((err) => {
          formatAppLog("log", "at uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue:426", err);
        });
      },
      async setSuccessAndError(res2, fn) {
        let successData = [];
        let errorData = [];
        let tempFilePath = [];
        let errorTempFilePath = [];
        for (let i2 = 0; i2 < res2.length; i2++) {
          const item = res2[i2];
          const index = item.uuid ? this.files.findIndex((p2) => p2.uuid === item.uuid) : item.index;
          if (index === -1 || !this.files)
            break;
          if (item.errMsg === "request:fail") {
            this.files[index].url = item.path;
            this.files[index].status = "error";
            this.files[index].errMsg = item.errMsg;
            errorData.push(this.files[index]);
            errorTempFilePath.push(this.files[index].url);
          } else {
            this.files[index].errMsg = "";
            this.files[index].fileID = item.url;
            const reg = /cloud:\/\/([\w.]+\/?)\S*/;
            if (reg.test(item.url)) {
              this.files[index].url = await this.getTempFileURL(item.url);
            } else {
              this.files[index].url = item.url;
            }
            this.files[index].status = "success";
            this.files[index].progress += 1;
            successData.push(this.files[index]);
            tempFilePath.push(this.files[index].fileID);
          }
        }
        if (successData.length > 0) {
          this.setEmit();
          this.$emit("success", {
            tempFiles: this.backObject(successData),
            tempFilePaths: tempFilePath
          });
        }
        if (errorData.length > 0) {
          this.$emit("fail", {
            tempFiles: this.backObject(errorData),
            tempFilePaths: errorTempFilePath
          });
        }
      },
      setProgress(progressEvent, index, type) {
        this.files.length;
        const percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
        let idx = index;
        if (!type) {
          idx = this.files.findIndex((p2) => p2.uuid === progressEvent.tempFile.uuid);
        }
        if (idx === -1 || !this.files[idx])
          return;
        this.files[idx].progress = percentCompleted - 1;
        this.$emit("progress", {
          index: idx,
          progress: parseInt(percentCompleted),
          tempFile: this.files[idx]
        });
      },
      delFile(index) {
        this.$emit("delete", {
          tempFile: this.files[index],
          tempFilePath: this.files[index].url
        });
        this.files.splice(index, 1);
        this.$nextTick(() => {
          this.setEmit();
        });
      },
      getFileExt(name) {
        const last_len = name.lastIndexOf(".");
        const len = name.length;
        return {
          name: name.substring(0, last_len),
          ext: name.substring(last_len + 1, len)
        };
      },
      setEmit() {
        let data = [];
        if (this.returnType === "object") {
          data = this.backObject(this.files)[0];
          this.localValue = data ? data : null;
        } else {
          data = this.backObject(this.files);
          if (!this.localValue) {
            this.localValue = [];
          }
          this.localValue = [...data];
        }
        this.$emit("update:modelValue", this.localValue);
      },
      backObject(files) {
        let newFilesData = [];
        files.forEach((v2) => {
          newFilesData.push({
            extname: v2.extname,
            fileType: v2.fileType,
            image: v2.image,
            name: v2.name,
            path: v2.path,
            size: v2.size,
            fileID: v2.fileID,
            url: v2.url
          });
        });
        return newFilesData;
      },
      async getTempFileURL(fileList) {
        fileList = {
          fileList: [].concat(fileList)
        };
        const urls = await St.getTempFileURL(fileList);
        return urls.fileList[0].tempFileURL || "";
      },
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_upload_image = vue.resolveComponent("upload-image");
    const _component_upload_file = vue.resolveComponent("upload-file");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker" }, [
      $props.title ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-file-picker__header"
      }, [
        vue.createElementVNode("text", { class: "file-title" }, vue.toDisplayString($props.title), 1),
        vue.createElementVNode("text", { class: "file-count" }, vue.toDisplayString($options.filesList.length) + "/" + vue.toDisplayString($options.limitLength), 1)
      ])) : vue.createCommentVNode("v-if", true),
      $props.fileMediatype === "image" && $options.showType === "grid" ? (vue.openBlock(), vue.createBlock(_component_upload_image, {
        key: 1,
        readonly: $props.readonly,
        "image-styles": $props.imageStyles,
        "files-list": $options.filesList,
        limit: $options.limitLength,
        disablePreview: $props.disablePreview,
        delIcon: $props.delIcon,
        onUploadFiles: $options.uploadFiles,
        onChoose: $options.choose,
        onDelFile: $options.delFile
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("view", { class: "is-add" }, [
              vue.createElementVNode("view", { class: "icon-add" }),
              vue.createElementVNode("view", { class: "icon-add rotate" })
            ])
          ], true)
        ]),
        _: 3
      }, 8, ["readonly", "image-styles", "files-list", "limit", "disablePreview", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true),
      $props.fileMediatype !== "image" || $options.showType !== "grid" ? (vue.openBlock(), vue.createBlock(_component_upload_file, {
        key: 2,
        readonly: $props.readonly,
        "list-styles": $props.listStyles,
        "files-list": $options.filesList,
        showType: $options.showType,
        delIcon: $props.delIcon,
        onUploadFiles: $options.uploadFiles,
        onChoose: $options.choose,
        onDelFile: $options.delFile
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("button", {
              type: "primary",
              size: "mini"
            }, "\u9009\u62E9\u6587\u4EF6")
          ], true)
        ]),
        _: 3
      }, 8, ["readonly", "list-styles", "files-list", "showType", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-363ace0e"], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue"]]);
  const validator = {
    "content": {
      "rules": [
        {
          "required": true
        },
        {
          "format": "string"
        }
      ],
      "label": "\u7559\u8A00\u5185\u5BB9/\u56DE\u590D\u5185\u5BB9"
    },
    "imgs": {
      "rules": [
        {
          "format": "array"
        },
        {
          "arrayType": "file"
        },
        {
          "maxLength": 6
        }
      ],
      "label": "\u56FE\u7247\u5217\u8868"
    },
    "contact": {
      "rules": [
        {
          "format": "string"
        }
      ],
      "label": "\u8054\u7CFB\u4EBA"
    },
    "mobile": {
      "rules": [
        {
          "format": "string"
        },
        {
          "pattern": "^\\+?[0-9-]{3,20}$"
        }
      ],
      "label": "\u8054\u7CFB\u7535\u8BDD"
    }
  };
  formatAppLog("log", "at uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback.vue:29", validator);
  const db$1 = St.database();
  const dbCollectionName = "opendb-feedback";
  function getValidator(fields) {
    let result = {};
    for (let key in validator) {
      if (fields.indexOf(key) > -1) {
        result[key] = validator[key];
      }
    }
    return result;
  }
  const _sfc_main$1 = {
    data() {
      let formData = {
        "content": "",
        "imgs": [],
        "contact": "",
        "mobile": ""
      };
      return {
        formData,
        formOptions: {},
        rules: __spreadValues({}, getValidator(Object.keys(formData)))
      };
    },
    onReady() {
      this.$refs.form.setRules(this.rules);
    },
    methods: {
      submit() {
        uni.showLoading({
          mask: true
        });
        this.$refs.form.validate().then((res2) => {
          this.submitForm(res2);
        }).catch(() => {
          uni.hideLoading();
        });
      },
      submitForm(value) {
        db$1.collection(dbCollectionName).add(value).then((res2) => {
          uni.showToast({
            icon: "none",
            title: "\u63D0\u4EA4\u6210\u529F"
          });
          this.getOpenerEventChannel().emit("refreshData");
          setTimeout(() => uni.navigateBack(), 500);
        }).catch((err) => {
          uni.showModal({
            content: err.message || "\u8BF7\u6C42\u670D\u52A1\u5931\u8D25",
            showCancel: false
          });
        }).finally(() => {
          uni.hideLoading();
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_0$1);
    const _component_uni_file_picker = resolveEasycom(vue.resolveDynamicComponent("uni-file-picker"), __easycom_1);
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_2);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_3$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-container" }, [
      vue.createVNode(_component_uni_forms, {
        ref: "form",
        value: $data.formData,
        "validate-trigger": "submit",
        "err-show-type": "toast"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_forms_item, {
            name: "content",
            label: "\u7559\u8A00\u5185\u5BB9/\u56DE\u590D\u5185\u5BB9",
            required: ""
          }, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode("textarea", {
                onInput: _cache[0] || (_cache[0] = ($event) => _ctx.binddata("content", $event.detail.value)),
                class: "uni-textarea-border",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.formData.content = $event),
                trim: "right"
              }, null, 544), [
                [vue.vModelText, $data.formData.content]
              ])
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_forms_item, {
            name: "imgs",
            label: "\u56FE\u7247\u5217\u8868"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_file_picker, {
                "file-mediatype": "image",
                limit: 6,
                "return-type": "array",
                modelValue: $data.formData.imgs,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formData.imgs = $event)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_forms_item, {
            name: "contact",
            label: "\u8054\u7CFB\u4EBA"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.formData.contact,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.formData.contact = $event),
                trim: "both"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_forms_item, {
            name: "mobile",
            label: "\u8054\u7CFB\u7535\u8BDD"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.formData.mobile,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.formData.mobile = $event),
                trim: "both"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          vue.createElementVNode("view", { class: "uni-button-group" }, [
            vue.createElementVNode("button", {
              type: "primary",
              class: "uni-button",
              onClick: _cache[5] || (_cache[5] = (...args) => $options.submit && $options.submit(...args))
            }, "\u63D0\u4EA4")
          ])
        ]),
        _: 1
      }, 8, ["value"])
    ]);
  }
  var Uni_modulesUniFeedbackPagesOpendbFeedbackOpendbFeedback = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback.vue"]]);
  __definePage("pages/grid/grid", PagesGridGrid);
  __definePage("pages/ucenter/login-page/index/index", PagesUcenterLoginPageIndexIndex);
  __definePage("pages/list/detail", PagesListDetail);
  __definePage("pages/ucenter/userinfo/bind-mobile/bind-mobile", PagesUcenterUserinfoBindMobileBindMobile);
  __definePage("pages/ucenter/ucenter", PagesUcenterUcenter);
  __definePage("pages/ucenter/about/about", PagesUcenterAboutAbout);
  __definePage("uni_modules/uni-upgrade-center-app/pages/upgrade-popup", Uni_modulesUniUpgradeCenterAppPagesUpgradePopup);
  __definePage("pages/ucenter/settings/settings", PagesUcenterSettingsSettings);
  __definePage("pages/ucenter/userinfo/userinfo", PagesUcenterUserinfoUserinfo);
  __definePage("pages/ucenter/userinfo/cropImage", PagesUcenterUserinfoCropImage);
  __definePage("pages/ucenter/login-page/pwd-login/pwd-login", PagesUcenterLoginPagePwdLoginPwdLogin);
  __definePage("pages/ucenter/login-page/pwd-retrieve/pwd-retrieve", PagesUcenterLoginPagePwdRetrievePwdRetrieve);
  __definePage("pages/ucenter/login-page/phone-code/phone-code", PagesUcenterLoginPagePhoneCodePhoneCode);
  __definePage("pages/common/webview/webview", PagesCommonWebviewWebview);
  __definePage("pages/ucenter/login-page/register/register", PagesUcenterLoginPageRegisterRegister);
  __definePage("pages/ucenter/read-news-log/read-news-log", PagesUcenterReadNewsLogReadNewsLog);
  __definePage("pages/ucenter/invite/invite", PagesUcenterInviteInvite);
  __definePage("pages/ucenter/settings/deactivate/deactivate", PagesUcenterSettingsDeactivateDeactivate);
  __definePage("uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback", Uni_modulesUniFeedbackPagesOpendbFeedbackOpendbFeedback);
  var uniStarterConfig = {
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
  let userInfoHistory = uni.getStorageSync("userInfo") || {};
  let state = {
    hasLogin: Boolean(Object.keys(userInfoHistory).length),
    info: userInfoHistory
  }, getters = {
    info(state2) {
      return state2.info;
    },
    hasLogin(state2) {
      return state2.hasLogin;
    }
  }, mutations = {
    login(state2, info) {
      let _info = state2.info;
      state2.info = Object.assign({}, _info, info);
      state2.hasLogin = true;
      formatAppLog("log", "at store/modules/user.js:24", "state.info", state2.info);
      uni.setStorageSync("userInfo", state2.info);
      if (info.token) {
        uni.setStorage({
          key: "uni_id_token",
          data: state2.info.token,
          complete(e) {
          }
        });
        uni.setStorageSync("uni_id_token_expired", state2.info.tokenExpired);
      }
    },
    logout(state2) {
      state2.info = {};
      state2.hasLogin = false;
      uni.setStorageSync("userInfo", {});
      uni.removeStorageSync("uni_id_token");
      uni.setStorageSync("uni_id_token_expired", 0);
    }
  }, actions = {
    logout(context) {
      uni.showLoading({ mask: true });
      St.callFunction({
        name: "uni-id-cf",
        data: { action: "logout" },
        complete: (e) => {
          formatAppLog("log", "at store/modules/user.js:53", e);
          context.commit("logout");
          uni.hideLoading();
        }
      });
    }
  };
  var user = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  };
  const store = createStore({
    modules: {
      user
    }
  });
  function interceptorChooseImage() {
    uni.addInterceptor("chooseImage", {
      fail(e) {
        formatAppLog("log", "at uni_modules/json-interceptor-chooseImage/js_sdk/main.js:5", e);
        if (uni.getSystemInfoSync().platform == "android" && e.errMsg == "chooseImage:fail No Permission") {
          if (e.code === 11) {
            uni.showModal({
              title: "\u65E0\u6CD5\u8BBF\u95EE\u6444\u50CF\u5934",
              content: "\u5F53\u524D\u65E0\u6444\u50CF\u5934\u8BBF\u95EE\u6743\u9650\uFF0C\u5EFA\u8BAE\u524D\u5F80\u8BBE\u7F6E",
              confirmText: "\u524D\u5F80\u8BBE\u7F6E",
              success(e2) {
                if (e2.confirm) {
                  gotoAppPermissionSetting();
                }
              }
            });
          } else {
            uni.showModal({
              title: "\u65E0\u6CD5\u8BBF\u95EE\u76F8\u518C",
              content: "\u5F53\u524D\u65E0\u7CFB\u7EDF\u76F8\u518C\u8BBF\u95EE\u6743\u9650\uFF0C\u5EFA\u8BAE\u524D\u5F80\u8BBE\u7F6E",
              confirmText: "\u524D\u5F80\u8BBE\u7F6E",
              success(e2) {
                if (e2.confirm) {
                  gotoAppPermissionSetting();
                }
              }
            });
          }
        } else if (e.errCode === 2 && e.errMsg == "chooseImage:fail No filming permission") {
          formatAppLog("log", "at uni_modules/json-interceptor-chooseImage/js_sdk/main.js:31", "e.errMsg === 2  ios\u65E0\u6CD5\u62CD\u7167\u6743\u9650 ");
          uni.showModal({
            title: "\u65E0\u6CD5\u8BBF\u95EE\u6444\u50CF\u5934",
            content: "\u5F53\u524D\u65E0\u6444\u50CF\u5934\u8BBF\u95EE\u6743\u9650\uFF0C\u5EFA\u8BAE\u524D\u5F80\u8BBE\u7F6E",
            confirmText: "\u524D\u5F80\u8BBE\u7F6E",
            success(e2) {
              if (e2.confirm) {
                gotoAppPermissionSetting();
              }
            }
          });
        }
      }
    });
    function gotoAppPermissionSetting() {
      if (uni.getSystemInfoSync().platform == "ios") {
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
  }
  const db = St.database();
  async function initApp() {
    let loginConfig = uniStarterConfig.router.login;
    await new Promise((callBack) => {
      plus.oauth.getServices((oauthServices) => {
        loginConfig = loginConfig.filter((item) => {
          if (["univerify", "weixin", "apple"].includes(item)) {
            let index = oauthServices.findIndex((e) => e.id == item);
            if (index == -1) {
              return false;
            } else {
              return oauthServices[index].nativeClient;
            }
          } else {
            return true;
          }
        });
        if (loginConfig.includes("univerify")) {
          uni.preLogin({
            provider: "univerify",
            complete: (e) => {
              formatAppLog("log", "at common/appInit.js:32", e);
            }
          });
        }
        callBack();
      }, (err) => {
        formatAppLog("error", "at common/appInit.js:38", "\u83B7\u53D6\u670D\u52A1\u4F9B\u5E94\u5546\u5931\u8D25\uFF1A" + JSON.stringify(err));
      });
    });
    uniStarterConfig.router.login = loginConfig;
    setTimeout(() => {
      getApp({
        allowDefault: true
      }).globalData.config = uniStarterConfig;
    }, 1);
    initAppVersion();
    interceptorChooseImage();
    function onDBError({
      code,
      message
    }) {
      formatAppLog("log", "at common/appInit.js:80", "onDBError", {
        code,
        message
      });
      formatAppLog("error", "at common/appInit.js:85", code, message);
      if ([
        "TOKEN_INVALID_INVALID_CLIENTID",
        "TOKEN_INVALID",
        "TOKEN_INVALID_TOKEN_EXPIRED",
        "TOKEN_INVALID_WRONG_TOKEN",
        "TOKEN_INVALID_ANONYMOUS_USER"
      ].includes(code)) {
        uni.navigateTo({
          url: "/pages/ucenter/login-page/index/index"
        });
      }
    }
    db.on("error", onDBError);
    db.on("refreshToken", function({
      token,
      tokenExpired
    }) {
      formatAppLog("log", "at common/appInit.js:107", "\u76D1\u542C\u5230clientDB\u7684refreshToken", {
        token,
        tokenExpired
      });
      store.commit("user/login", {
        token,
        tokenExpired
      });
    });
    uni.addInterceptor("setStorage", {
      invoke(args) {
        if (args.data && args.key == "uni_id_token") {
          let oldToken = uni.getStorageSync("uni_id_token");
          if (oldToken.length) {
            formatAppLog("log", "at common/appInit.js:122", "\u76D1\u542C\u5230token\u66F4\u65B0\uFF0C\u5C31\u5237\u65B0push_clientid\u7684\u6709\u6548\u671F");
            let push_clientid;
            try {
              push_clientid = plus.push.getClientInfo().clientid;
            } catch (e) {
              uni.showModal({
                content: "\u83B7\u53D6\u63A8\u9001\u6807\u8BC6\u5931\u8D25\u3002\u5982\u679C\u4F60\u7684\u5E94\u7528\u4E0D\u9700\u8981\u63A8\u9001\u529F\u80FD\uFF0C\u8BF7\u6CE8\u91CA\u6389\u672C\u4EE3\u7801\u5757",
                showCancel: false,
                confirmText: "\u597D\u7684"
              });
              formatAppLog("log", "at common/appInit.js:133", e);
            }
            St.callFunction({
              name: "uni-id-cf",
              data: {
                "action": "renewDeviceTokenExpiredxpired",
                "params": { push_clientid }
              },
              complete: (e) => {
                formatAppLog("log", "at common/appInit.js:142", e);
              }
            });
          }
        }
      },
      complete(e) {
      }
    });
    let callFunctionOption;
    St.addInterceptor("callFunction", {
      async invoke(option) {
        if (option.name == "uni-id-cf" && (option.data.action == "register" || option.data.action.slice(0, 5) == "login")) {
          option.data.deviceInfo = await getDeviceInfo();
          formatAppLog("log", "at common/appInit.js:166", "\u91CD\u65B0\u767B\u5F55/\u6CE8\u518C\uFF0C\u83B7\u53D6\u8BBE\u5907id", option.data.deviceInfo);
          option.data.inviteCode = await new Promise((callBack) => {
            uni.getClipboardData({
              success: function(res2) {
                if (res2.data.slice(0, 18) == "uniInvitationCode:") {
                  let uniInvitationCode = res2.data.slice(18, 38);
                  formatAppLog("log", "at common/appInit.js:172", "\u5F53\u524D\u7528\u6237\u662F\u5176\u4ED6\u7528\u6237\u63A8\u8350\u4E0B\u8F7D\u7684,\u63A8\u8350\u8005\u7684code\u662F\uFF1A" + uniInvitationCode);
                  callBack(uniInvitationCode);
                } else {
                  callBack(false);
                }
              },
              fail() {
                callBack(false);
              },
              complete() {
              }
            });
          });
        }
        callFunctionOption = option;
      },
      complete(e) {
      },
      fail(e) {
        {
          uni.showModal({
            content: "\u7CFB\u7EDF\u9519\u8BEF\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01",
            showCancel: false,
            confirmText: "\u77E5\u9053\u4E86"
          });
        }
        uni.getNetworkType({
          complete: (res2) => {
            if (res2.networkType == "none") {
              uni.showToast({
                title: "\u624B\u673A\u7F51\u7EDC\u5F02\u5E38",
                icon: "none"
              });
              formatAppLog("log", "at common/appInit.js:224", "\u624B\u673A\u7F51\u7EDC\u5F02\u5E38");
              let callBack = (res3) => {
                formatAppLog("log", "at common/appInit.js:226", res3);
                if (res3.isConnected) {
                  uni.showToast({
                    title: "\u6062\u590D\u8054\u7F51\u81EA\u52A8\u91CD\u65B0\u6267\u884C",
                    icon: "none"
                  });
                  formatAppLog("log", "at common/appInit.js:232", res3.networkType, "\u6062\u590D\u8054\u7F51\u81EA\u52A8\u91CD\u65B0\u6267\u884C");
                  uni.offNetworkStatusChange((e2) => {
                    formatAppLog("log", "at common/appInit.js:234", "\u79FB\u9664\u76D1\u542C\u6210\u529F", e2);
                  });
                  St.callFunction(callFunctionOption);
                  uni.offNetworkStatusChange(callBack);
                }
              };
              uni.onNetworkStatusChange(callBack);
            }
          }
        });
      },
      success: (e) => {
        const {
          token,
          tokenExpired
        } = e.result;
        if (token && tokenExpired) {
          store.commit("user/login", {
            token,
            tokenExpired
          });
        }
        switch (e.result.code) {
          case 403:
            uni.navigateTo({
              url: "/pages/ucenter/login-page/index/index"
            });
            break;
          case 30203:
            uni.navigateTo({
              url: "/pages/ucenter/login-page/index/index"
            });
            break;
          case 50101:
            uni.showToast({
              title: e.result.msg,
              icon: "none",
              duration: 2e3
            });
            break;
          default:
            formatAppLog("log", "at common/appInit.js:276", "code\u7684\u503C\u662F\uFF1A" + e.result.code, "\u53EF\u4EE5\u5728\u4E0A\u9762\u6DFB\u52A0case\uFF0C\u81EA\u52A8\u5904\u7406\u54CD\u5E94\u4F53");
            break;
        }
        switch (e.result.errCode) {
          case "uni-id-token-not-exist":
            uni.showToast({
              title: "\u767B\u5F55\u4FE1\u606F\u5931\u6548",
              icon: "none"
            });
            uni.navigateTo({
              url: "/pages/ucenter/login-page/index/index"
            });
            break;
        }
      }
    });
    const {
      "router": {
        needLogin,
        visitor,
        login
      }
    } = uniStarterConfig;
    let list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    list.forEach((item) => {
      uni.addInterceptor(item, {
        invoke(e) {
          const token = uni.getStorageSync("uni_id_token"), tokenExpired = uni.getStorageSync("uni_id_token_expired") < Date.now(), url = e.url.split("?")[0];
          const pages = getCurrentPages();
          if (!pages.length) {
            formatAppLog("log", "at common/appInit.js:318", "\u9996\u9875\u542F\u52A8\u8C03\u7528\u4E86");
            return e;
          }
          const fromUrl = pages[pages.length - 1].route;
          let inLoginPage = fromUrl.split("/")[2] == "login-page";
          if (url == "/pages/ucenter/login-page/index/index" && !inLoginPage) {
            if (login[0] == "username") {
              e.url = "/pages/ucenter/login-page/pwd-login/pwd-login";
            } else {
              if (e.url == url) {
                e.url += "?";
              }
              e.url += "type=" + login[0];
            }
          } else {
            let pass = true;
            if (needLogin) {
              pass = needLogin.every((item2) => {
                if (typeof item2 == "object" && item2.pattern) {
                  return !item2.pattern.test(url);
                }
                return url != item2;
              });
            }
            if (visitor) {
              pass = visitor.some((item2) => {
                if (typeof item2 == "object" && item2.pattern) {
                  return item2.pattern.test(url);
                }
                return url == item2;
              });
            }
            if (!pass && (token == "" || tokenExpired)) {
              uni.showToast({
                title: "\u8BF7\u5148\u767B\u5F55",
                icon: "none"
              });
              uni.navigateTo({
                url: "/pages/ucenter/login-page/index/index"
              });
              return false;
            }
          }
          return e;
        },
        fail(err) {
          formatAppLog("log", "at common/appInit.js:376", err);
        }
      });
    });
    uni.onNetworkStatusChange((res2) => {
      formatAppLog("log", "at common/appInit.js:391", res2.isConnected);
      formatAppLog("log", "at common/appInit.js:392", res2.networkType);
      if (res2.networkType != "none") {
        uni.showToast({
          title: "\u5F53\u524D\u7F51\u7EDC\u7C7B\u578B\uFF1A" + res2.networkType,
          icon: "none",
          duration: 3e3
        });
      } else {
        uni.showToast({
          title: "\u7F51\u7EDC\u7C7B\u578B\uFF1A" + res2.networkType,
          icon: "none",
          duration: 3e3
        });
      }
    });
  }
  function initAppVersion() {
    let appid = plus.runtime.appid;
    plus.runtime.getProperty(appid, (wgtInfo) => {
      let appVersion = plus.runtime;
      let currentVersion = appVersion.versionCode > wgtInfo.versionCode ? appVersion : wgtInfo;
      getApp({
        allowDefault: true
      }).appVersion = __spreadProps(__spreadValues({}, currentVersion), {
        appid,
        hasNew: false
      });
      callCheckVersion().then((res2) => {
        if (res2.result.code > 0) {
          getApp({
            allowDefault: true
          }).appVersion.hasNew = true;
        }
      });
    });
  }
  async function getDeviceInfo() {
    let deviceInfo = {
      "uuid": "",
      "vendor": "",
      "push_clientid": "",
      "imei": "",
      "oaid": "",
      "idfa": "",
      "model": "",
      "platform": ""
    };
    const {
      model,
      platform: platform2
    } = uni.getSystemInfoSync();
    Object.assign(deviceInfo, {
      model,
      platform: platform2
    });
    await new Promise((callBack, fail) => {
      if (deviceInfo.platform == "android") {
        plus.device.getOAID({
          success: function(e) {
            callBack(e.oaid);
          },
          fail: function(e) {
            callBack();
            formatAppLog("log", "at common/appInit.js:471", "getOAID failed: " + JSON.stringify(e));
          }
        });
      } else {
        callBack();
      }
    });
    const {
      imei,
      uuid
    } = await new Promise((callBack, fail) => {
      plus.device.getInfo({
        success: function(e) {
          callBack(e);
        },
        fail: function(e) {
          callBack();
          formatAppLog("log", "at common/appInit.js:489", "getOAID failed: " + JSON.stringify(e));
        }
      });
    }), idfa = plus.storage.getItem("idfa") || "", vendor = plus.device.vendor;
    try {
      deviceInfo.push_clientid = plus.push.getClientInfo().clientid;
    } catch (e) {
      uni.showModal({
        content: "\u83B7\u53D6\u63A8\u9001\u6807\u8BC6\u5931\u8D25\u3002\u5982\u679C\u4F60\u7684\u5E94\u7528\u4E0D\u9700\u8981\u63A8\u9001\u529F\u80FD\uFF0C\u8BF7\u6CE8\u91CA\u6389\u672C\u4EE3\u7801\u5757",
        showCancel: false,
        confirmText: "\u597D\u7684"
      });
      formatAppLog("log", "at common/appInit.js:503", e);
    }
    Object.assign(deviceInfo, {
      imei,
      uuid,
      idfa,
      vendor
    });
    return deviceInfo;
  }
  uniStarterConfig.h5.openApp || {};
  const _sfc_main = {
    globalData: {
      searchText: "",
      appVersion: {},
      config: {},
      $i18n: {},
      $t: {}
    },
    onLaunch: function() {
      formatAppLog("log", "at App.vue:14", "App Launch");
      this.globalData.$i18n = this.$i18n;
      this.globalData.$t = (str) => this.$t(str);
      initApp();
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:47", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:50", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/App.vue"]]);
  var langEn = {
    tabbar: "List,Grid,contacts,Mine",
    agreementsTitle: "User service agreement,Privacy policy",
    common: {
      wechatFriends: "friends",
      wechatBbs: "bbs",
      weibo: "weibo",
      more: "more",
      agree: "agree",
      copy: "copy",
      wechatApplet: "applet",
      cancelShare: "cancel sharing",
      updateSucceeded: "update succeeded",
      phonePlaceholder: "Please enter your mobile phone number",
      verifyCodePlaceholder: "Please enter the verification code",
      newPasswordPlaceholder: "Please enter a new password",
      confirmNewPasswordPlaceholder: "Please confirm the new password",
      confirmPassword: "Please confirm the password",
      verifyCodeSend: "Verification code has been sent to via SMS",
      passwordDigits: "The password is 6 - 20 digits",
      getVerifyCode: "Get Code",
      noAgree: "You have not agreed to the privacy policy agreement",
      gotIt: "got it",
      login: "sign in",
      error: "error",
      complete: "complete",
      submit: "Submit",
      formatErr: "Incorrect mobile phone number format",
      sixDigitCode: "Please enter a 6-digit verification code",
      resetNavTitle: "Reset password"
    },
    list: {
      inputPlaceholder: "Please enter the search content"
    },
    search: {
      cancelText: "cancel",
      searchHistory: "search history",
      searchDiscovery: "search discovery",
      deleteAll: "delete all",
      delete: "delete",
      deleteTip: "Are you sure to clear the search history ?",
      complete: "complete",
      searchHiddenTip: "Current search found hidden"
    },
    grid: {
      grid: "Grid Assembly",
      visibleToAll: "Visible to all",
      invisibleToTourists: "Invisible to tourists",
      adminVisible: "Admin visible",
      clickTip: "Click the",
      clickTipGrid: "grid"
    },
    mine: {
      showText: "Text",
      signIn: "Check In Reward",
      signInByAd: "Check In Reward By AD",
      toEvaluate: "To Evaluate",
      readArticles: "Read Articles",
      myScore: "My Score",
      invite: "Invite Friends",
      feedback: "Problems And Feedback",
      settings: "Settings",
      about: "About",
      checkUpdate: "Check for Updates",
      clicked: "You Clicked",
      checkScore: "Please check your points after logging in",
      currentScore: "The current score is ",
      noScore: "There are currently no points",
      notLogged: "not logged in"
    },
    userinfo: {
      navigationBarTitle: "My Profile",
      ProfilePhoto: "Profile Photo",
      nickname: "Nickname",
      notSet: "not set",
      phoneNumber: "Phone Number",
      notSpecified: "Not Specified",
      setNickname: "Set Nickname ",
      setNicknamePlaceholder: "Please enter a nickname to set",
      bindPhoneNumber: "One click binding of local number",
      bindOtherLogin: "Other number binding",
      noChange: "No change",
      uploading: "uploading",
      requestFail: "Request for service failed",
      setting: "setting",
      deleteSucceeded: "Delete succeeded",
      setSucceeded: "Set successfully"
    },
    smsCode: {
      resendVerifyCode: "resend",
      phoneErrTip: "Mobile phone number format error",
      sendSuccessTip: "SMS verification code sent successfully"
    },
    loadMore: {
      noData: "No Data",
      noNetwork: "Network error",
      toSet: "Go to settings",
      error: "error"
    },
    uniFeedback: {
      navigationBarTitle: "Problems and feedback",
      msgTitle: "Message content",
      imgTitle: "Picture list",
      contacts: "contacts",
      phone: "contact number",
      submit: "submit"
    },
    settings: {
      navigationBarTitle: "Settings",
      userInfo: "Personal Data",
      changePassword: "change password",
      clearTmp: "clean cache",
      pushServer: "push function",
      fingerPrint: "fingerprint unlock",
      facial: "face unlock",
      deactivate: "Deactivate",
      logOut: "Logout",
      login: "Login",
      changeLanguage: "Language",
      please: "please",
      successText: "success",
      failTip: "Authentication failed. Please try again",
      authFailed: "authentication failed",
      deviceNoOpen: "The device is not turned on",
      fail: "fail",
      tips: "tips",
      exitLogin: "Do you want to log out\uFF1F",
      cancelText: "cancel",
      confirmText: "confirm",
      clearing: "clearing",
      clearedSuccessed: "Cleared successfully"
    },
    deactivate: {
      cancelText: "cancel",
      nextStep: "next step",
      navigationBarTitle: "Logout prompt"
    },
    about: {
      sacnQR: "Scan the QR Code and your friends can also download it",
      client: "applCantion",
      and: "And",
      about: "About"
    },
    invite: {
      download: "Download"
    },
    login: {
      phoneLogin: "After logging in, you can show yourself",
      phoneLoginTip: "Unregistered mobile phone numbers will be automatically registered after verification",
      getVerifyCode: "Get Code"
    },
    uniQuickLogin: {
      accountLogin: "Account",
      SMSLogin: "SMS",
      wechatLogin: "wechat",
      appleLogin: "Apple",
      oneClickLogin: "One click login",
      QQLogin: "QQ",
      xiaomiLogin: "Xiaomi",
      getProviderFail: "Failed to get service provider",
      loginErr: "Login service initialization error",
      chooseOtherLogin: "Click the third-party login"
    },
    pwdLogin: {
      pwdLogin: "User name password login",
      placeholder: "Please enter mobile number / user name",
      passwordPlaceholder: "Please input a password",
      verifyCodePlaceholder: "Please enter the verification code",
      login: "sign in",
      forgetPassword: "Forget password",
      register: "Registered account"
    },
    register: {
      navigationBarTitle: "register",
      usernamePlaceholder: "Please enter user name",
      nicknamePlaceholder: "Please enter user nickname",
      passwordDigitsPlaceholder: "Please enter a 6-20 digit password",
      passwordAgain: "Enter the password again",
      registerAndLogin: "Register and log in"
    },
    listDetail: {
      follow: "Click follow",
      newsErr: "Error, news ID is empty"
    },
    newsLog: {
      navigationBarTitle: "Reading Log"
    },
    bindMobile: {
      navigationBarTitle: "Bind Mobile"
    }
  };
  var zhHans = {
    tabbar: "\u5217\u8868,\u5BAB\u683C,\u901A\u8BAF\u5F55,\u6211\u7684",
    agreementsTitle: "\u7528\u6237\u670D\u52A1\u534F\u8BAE,\u9690\u79C1\u653F\u7B56",
    common: {
      wechatFriends: "\u5FAE\u4FE1\u597D\u53CB",
      wechatBbs: "\u5FAE\u4FE1\u670B\u53CB\u5708",
      weibo: "\u5FAE\u535A",
      more: "\u66F4\u591A",
      agree: "\u540C\u610F",
      copy: "\u590D\u5236",
      wechatApplet: "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F",
      cancelShare: "\u53D6\u6D88\u5206\u4EAB",
      updateSucceeded: "\u66F4\u65B0\u6210\u529F",
      phonePlaceholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
      verifyCodePlaceholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
      newPasswordPlaceholder: "\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",
      confirmNewPasswordPlaceholder: "\u8BF7\u786E\u8BA4\u65B0\u5BC6\u7801",
      confirmPassword: "\u8BF7\u786E\u8BA4\u5BC6\u7801",
      verifyCodeSend: "\u9A8C\u8BC1\u7801\u5DF2\u901A\u8FC7\u77ED\u4FE1\u53D1\u9001\u81F3",
      passwordDigits: "\u5BC6\u7801\u4E3A6 - 20\u4F4D",
      getVerifyCode: "\u83B7\u53D6\u9A8C\u8BC1\u7801",
      noAgree: "\u4F60\u672A\u540C\u610F\u9690\u79C1\u653F\u7B56\u534F\u8BAE",
      gotIt: "\u77E5\u9053\u4E86",
      login: "\u767B\u5F55",
      error: "\u9519\u8BEF",
      complete: "\u5B8C\u6210",
      submit: "\u63D0\u4EA4",
      formatErr: "\u624B\u673A\u53F7\u7801\u683C\u5F0F\u4E0D\u6B63\u786E",
      sixDigitCode: "\u8BF7\u8F93\u51656\u4F4D\u9A8C\u8BC1\u7801",
      resetNavTitle: "\u91CD\u7F6E\u5BC6\u7801"
    },
    list: {
      inputPlaceholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9"
    },
    search: {
      cancelText: "\u53D6\u6D88",
      searchHistory: "\u641C\u7D22\u5386\u53F2",
      searchDiscovery: "\u641C\u7D22\u53D1\u73B0",
      deleteAll: "\u5168\u90E8\u5220\u9664",
      delete: "\u5220\u9664",
      deleteTip: "\u786E\u8BA4\u6E05\u7A7A\u641C\u7D22\u5386\u53F2\u5417\uFF1F",
      complete: "\u5B8C\u6210",
      searchHiddenTip: "\u5F53\u524D\u641C\u7D22\u53D1\u73B0\u5DF2\u9690\u85CF"
    },
    grid: {
      grid: "\u5BAB\u683C\u7EC4\u4EF6",
      visibleToAll: "\u6240\u6709\u4EBA\u53EF\u89C1",
      invisibleToTourists: "\u6E38\u5BA2\u4E0D\u53EF\u89C1",
      adminVisible: "\u7BA1\u7406\u5458\u53EF\u89C1",
      clickTip: "\u70B9\u51FB\u7B2C",
      clickTipGrid: "\u4E2A\u5BAB\u683C"
    },
    mine: {
      showText: "\u6587\u5B57",
      signIn: "\u666E\u901A\u7B7E\u5230",
      signInByAd: "\u770B\u5E7F\u544A\u7B7E\u5230",
      toEvaluate: "\u53BB\u8BC4\u5206",
      readArticles: "\u9605\u8BFB\u8FC7\u7684\u6587\u7AE0",
      myScore: "\u6211\u7684\u79EF\u5206",
      invite: "\u5206\u9500\u63A8\u8350",
      feedback: "\u95EE\u9898\u4E0E\u53CD\u9988",
      settings: "\u8BBE\u7F6E",
      checkUpdate: "\u68C0\u67E5\u66F4\u65B0",
      about: "\u5173\u4E8E",
      clicked: "\u4F60\u70B9\u51FB\u4E86",
      checkScore: "\u8BF7\u767B\u5F55\u540E\u67E5\u770B\u79EF\u5206",
      currentScore: "\u5F53\u524D\u79EF\u5206\u4E3A",
      noScore: "\u5F53\u524D\u65E0\u79EF\u5206",
      notLogged: "\u672A\u767B\u5F55"
    },
    userinfo: {
      navigationBarTitle: "\u4E2A\u4EBA\u8D44\u6599",
      ProfilePhoto: "\u5934\u50CF",
      nickname: "\u6635\u79F0",
      notSet: "\u672A\u8BBE\u7F6E",
      phoneNumber: "\u624B\u673A\u53F7",
      notSpecified: "\u672A\u7ED1\u5B9A",
      setNickname: "\u8BBE\u7F6E\u6635\u79F0",
      setNicknamePlaceholder: "\u8BF7\u8F93\u5165\u8981\u8BBE\u7F6E\u7684\u6635\u79F0",
      bindPhoneNumber: "\u672C\u673A\u53F7\u7801\u4E00\u952E\u7ED1\u5B9A",
      bindOtherLogin: "\u5176\u4ED6\u53F7\u7801\u7ED1\u5B9A",
      noChange: "\u6CA1\u6709\u53D8\u5316",
      uploading: "\u6B63\u5728\u4E0A\u4F20",
      requestFail: "\u8BF7\u6C42\u670D\u52A1\u5931\u8D25",
      setting: "\u8BBE\u7F6E\u4E2D",
      deleteSucceeded: "\u5220\u9664\u6210\u529F",
      setSucceeded: "\u8BBE\u7F6E\u6210\u529F"
    },
    smsCode: {
      resendVerifyCode: "\u91CD\u65B0\u53D1\u9001",
      phoneErrTip: "\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF",
      sendSuccessTip: "\u77ED\u4FE1\u9A8C\u8BC1\u7801\u53D1\u9001\u6210\u529F"
    },
    loadMore: {
      noData: "\u6682\u65E0\u6570\u636E",
      noNetwork: "\u7F51\u7EDC\u5F02\u5E38",
      toSet: "\u524D\u5F80\u8BBE\u7F6E",
      error: "\u9519\u8BEF"
    },
    uniFeedback: {
      navigationBarTitle: "\u95EE\u9898\u4E0E\u53CD\u9988",
      msgTitle: "\u7559\u8A00\u5185\u5BB9",
      imgTitle: "\u56FE\u7247\u5217\u8868",
      contacts: "\u8054\u7CFB\u4EBA",
      phone: "\u8054\u7CFB\u7535\u8BDD",
      submit: "\u63D0\u4EA4"
    },
    settings: {
      navigationBarTitle: "\u8BBE\u7F6E",
      userInfo: "\u4E2A\u4EBA\u8D44\u6599",
      changePassword: "\u4FEE\u6539\u5BC6\u7801",
      clearTmp: "\u6E05\u7406\u7F13\u5B58",
      pushServer: "\u63A8\u9001\u529F\u80FD",
      fingerPrint: "\u6307\u7EB9\u89E3\u9501",
      facial: "\u4EBA\u8138\u89E3\u9501",
      deactivate: "\u6CE8\u9500\u8D26\u53F7",
      logOut: "\u9000\u51FA\u767B\u5F55",
      login: "\u767B\u5F55",
      failTip: "\u8BA4\u8BC1\u5931\u8D25\u8BF7\u91CD\u8BD5",
      authFailed: "\u8BA4\u8BC1\u5931\u8D25",
      changeLanguage: "\u5207\u6362\u8BED\u8A00",
      please: "\u8BF7\u7528",
      successText: "\u6210\u529F",
      deviceNoOpen: "\u8BBE\u5907\u672A\u5F00\u542F",
      fail: "\u5931\u8D25",
      tips: "\u63D0\u793A",
      exitLogin: "\u662F\u5426\u9000\u51FA\u767B\u5F55?",
      clearing: "\u6E05\u9664\u4E2D",
      clearedSuccessed: "\u6E05\u9664\u6210\u529F",
      confirmText: "\u786E\u5B9A",
      cancelText: "\u53D6\u6D88"
    },
    deactivate: {
      cancelText: "\u53D6\u6D88",
      nextStep: "\u4E0B\u4E00\u6B65",
      navigationBarTitle: "\u6CE8\u9500\u63D0\u793A"
    },
    about: {
      sacnQR: "\u626B\u63CF\u4E8C\u7EF4\u7801\uFF0C\u60A8\u7684\u670B\u53CB\u4E5F\u53EF\u4EE5\u4E0B\u8F7D",
      client: "\u5BA2\u6237\u7AEF",
      and: "\u548C",
      about: "\u5173\u4E8E"
    },
    invite: {
      download: "\u4E0B\u8F7D"
    },
    login: {
      phoneLogin: "\u767B\u5F55\u540E\u5373\u53EF\u5C55\u793A\u81EA\u5DF1",
      phoneLoginTip: "\u672A\u6CE8\u518C\u7684\u624B\u673A\u53F7\u9A8C\u8BC1\u901A\u8FC7\u540E\u5C06\u81EA\u52A8\u6CE8\u518C",
      getVerifyCode: "\u83B7\u53D6\u9A8C\u8BC1\u7801"
    },
    uniQuickLogin: {
      accountLogin: "\u8D26\u53F7\u767B\u5F55",
      SMSLogin: "\u77ED\u4FE1\u9A8C\u8BC1\u7801",
      wechatLogin: "\u5FAE\u4FE1\u767B\u5F55",
      appleLogin: "\u82F9\u679C\u767B\u5F55",
      oneClickLogin: "\u4E00\u952E\u767B\u5F55",
      QQLogin: "QQ\u767B\u5F55",
      xiaomiLogin: "\u5C0F\u7C73\u767B\u5F55",
      getProviderFail: "\u83B7\u53D6\u670D\u52A1\u4F9B\u5E94\u5546\u5931\u8D25",
      loginErr: "\u767B\u5F55\u670D\u52A1\u521D\u59CB\u5316\u9519\u8BEF",
      chooseOtherLogin: "\u70B9\u51FB\u4E86\u7B2C\u4E09\u65B9\u767B\u5F55"
    },
    pwdLogin: {
      pwdLogin: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55",
      placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7/\u7528\u6237\u540D",
      passwordPlaceholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
      verifyCodePlaceholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
      login: "\u767B\u5F55",
      forgetPassword: "\u5FD8\u8BB0\u5BC6\u7801",
      register: "\u6CE8\u518C\u8D26\u53F7"
    },
    register: {
      navigationBarTitle: "\u6CE8\u518C",
      usernamePlaceholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
      nicknamePlaceholder: "\u8BF7\u8F93\u5165\u7528\u6237\u6635\u79F0",
      registerAndLogin: "\u6CE8\u518C\u5E76\u767B\u5F55",
      passwordDigitsPlaceholder: "\u8BF7\u8F93\u51656-20\u4F4D\u5BC6\u7801",
      passwordAgain: "\u518D\u6B21\u8F93\u5165\u5BC6\u7801"
    },
    listDetail: {
      follow: "\u70B9\u51FB\u5173\u6CE8",
      newsErr: "\u51FA\u9519\u4E86\uFF0C\u65B0\u95FBID\u4E3A\u7A7A"
    },
    newsLog: {
      navigationBarTitle: "\u9605\u8BFB\u8BB0\u5F55"
    },
    bindMobile: {
      navigationBarTitle: "\u7ED1\u5B9A\u624B\u673A\u53F7\u7801"
    }
  };
  /*!
    * @intlify/shared v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const inBrowser = typeof window !== "undefined";
  let mark;
  let measure;
  {
    const perf = inBrowser && window.performance;
    if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
      mark = (tag) => perf.mark(tag);
      measure = (name, startTag, endTag) => {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
      };
    }
  }
  const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
  function format(message, ...args) {
    if (args.length === 1 && isObject$1(args[0])) {
      args = args[0];
    }
    if (!args || !args.hasOwnProperty) {
      args = {};
    }
    return message.replace(RE_ARGS, (match, identifier) => {
      return args.hasOwnProperty(identifier) ? args[identifier] : "";
    });
  }
  const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
  const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
  const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
  const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
  const isNumber = (val) => typeof val === "number" && isFinite(val);
  const isDate = (val) => toTypeString(val) === "[object Date]";
  const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
  const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
  function warn(msg, err) {
    if (typeof console !== "undefined") {
      console.warn(`[intlify] ` + msg);
      if (err) {
        console.warn(err.stack);
      }
    }
  }
  const assign = Object.assign;
  let _globalThis;
  const getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };
  function escapeHtml(rawText) {
    return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  function hasOwn$1(obj, key) {
    return hasOwnProperty$1.call(obj, key);
  }
  const isArray = Array.isArray;
  const isFunction = (val) => typeof val === "function";
  const isString = (val) => typeof val === "string";
  const isBoolean = (val) => typeof val === "boolean";
  const isObject$1 = (val) => val !== null && typeof val === "object";
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const isPlainObject = (val) => toTypeString(val) === "[object Object]";
  const toDisplayString = (val) => {
    return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
  };
  const RANGE = 2;
  function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res2 = [];
    for (let i2 = 0; i2 < lines.length; i2++) {
      count += lines[i2].length + 1;
      if (count >= start) {
        for (let j2 = i2 - RANGE; j2 <= i2 + RANGE || end > count; j2++) {
          if (j2 < 0 || j2 >= lines.length)
            continue;
          const line = j2 + 1;
          res2.push(`${line}${" ".repeat(3 - String(line).length)}|  ${lines[j2]}`);
          const lineLength = lines[j2].length;
          if (j2 === i2) {
            const pad2 = start - (count - lineLength) + 1;
            const length = Math.max(1, end > count ? lineLength - pad2 : end - start);
            res2.push(`   |  ` + " ".repeat(pad2) + "^".repeat(length));
          } else if (j2 > i2) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res2.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + 1;
          }
        }
        break;
      }
    }
    return res2.join("\n");
  }
  function createEmitter() {
    const events2 = /* @__PURE__ */ new Map();
    const emitter = {
      events: events2,
      on(event, handler) {
        const handlers = events2.get(event);
        const added = handlers && handlers.push(handler);
        if (!added) {
          events2.set(event, [handler]);
        }
      },
      off(event, handler) {
        const handlers = events2.get(event);
        if (handlers) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        }
      },
      emit(event, payload) {
        (events2.get(event) || []).slice().map((handler) => handler(payload));
        (events2.get("*") || []).slice().map((handler) => handler(event, payload));
      }
    };
    return emitter;
  }
  /*!
    * @intlify/message-resolver v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }
  const isObject = (val) => val !== null && typeof val === "object";
  const pathStateMachine = [];
  pathStateMachine[0] = {
    ["w"]: [0],
    ["i"]: [3, 0],
    ["["]: [4],
    ["o"]: [7]
  };
  pathStateMachine[1] = {
    ["w"]: [1],
    ["."]: [2],
    ["["]: [4],
    ["o"]: [7]
  };
  pathStateMachine[2] = {
    ["w"]: [2],
    ["i"]: [3, 0],
    ["0"]: [3, 0]
  };
  pathStateMachine[3] = {
    ["i"]: [3, 0],
    ["0"]: [3, 0],
    ["w"]: [1, 1],
    ["."]: [2, 1],
    ["["]: [4, 1],
    ["o"]: [7, 1]
  };
  pathStateMachine[4] = {
    ["'"]: [5, 0],
    ['"']: [6, 0],
    ["["]: [
      4,
      2
    ],
    ["]"]: [1, 3],
    ["o"]: 8,
    ["l"]: [4, 0]
  };
  pathStateMachine[5] = {
    ["'"]: [4, 0],
    ["o"]: 8,
    ["l"]: [5, 0]
  };
  pathStateMachine[6] = {
    ['"']: [4, 0],
    ["o"]: 8,
    ["l"]: [6, 0]
  };
  const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function isLiteral(exp) {
    return literalValueRE.test(exp);
  }
  function stripQuotes(str) {
    const a2 = str.charCodeAt(0);
    const b2 = str.charCodeAt(str.length - 1);
    return a2 === b2 && (a2 === 34 || a2 === 39) ? str.slice(1, -1) : str;
  }
  function getPathCharType(ch) {
    if (ch === void 0 || ch === null) {
      return "o";
    }
    const code = ch.charCodeAt(0);
    switch (code) {
      case 91:
      case 93:
      case 46:
      case 34:
      case 39:
        return ch;
      case 95:
      case 36:
      case 45:
        return "i";
      case 9:
      case 10:
      case 13:
      case 160:
      case 65279:
      case 8232:
      case 8233:
        return "w";
    }
    return "i";
  }
  function formatSubPath(path) {
    const trimmed = path.trim();
    if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
      return false;
    }
    return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
  }
  function parse(path) {
    const keys = [];
    let index = -1;
    let mode = 0;
    let subPathDepth = 0;
    let c2;
    let key;
    let newChar;
    let type;
    let transition;
    let action;
    let typeMap;
    const actions2 = [];
    actions2[0] = () => {
      if (key === void 0) {
        key = newChar;
      } else {
        key += newChar;
      }
    };
    actions2[1] = () => {
      if (key !== void 0) {
        keys.push(key);
        key = void 0;
      }
    };
    actions2[2] = () => {
      actions2[0]();
      subPathDepth++;
    };
    actions2[3] = () => {
      if (subPathDepth > 0) {
        subPathDepth--;
        mode = 4;
        actions2[0]();
      } else {
        subPathDepth = 0;
        if (key === void 0) {
          return false;
        }
        key = formatSubPath(key);
        if (key === false) {
          return false;
        } else {
          actions2[1]();
        }
      }
    };
    function maybeUnescapeQuote() {
      const nextChar = path[index + 1];
      if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
        index++;
        newChar = "\\" + nextChar;
        actions2[0]();
        return true;
      }
    }
    while (mode !== null) {
      index++;
      c2 = path[index];
      if (c2 === "\\" && maybeUnescapeQuote()) {
        continue;
      }
      type = getPathCharType(c2);
      typeMap = pathStateMachine[mode];
      transition = typeMap[type] || typeMap["l"] || 8;
      if (transition === 8) {
        return;
      }
      mode = transition[0];
      if (transition[1] !== void 0) {
        action = actions2[transition[1]];
        if (action) {
          newChar = c2;
          if (action() === false) {
            return;
          }
        }
      }
      if (mode === 7) {
        return keys;
      }
    }
  }
  const cache = /* @__PURE__ */ new Map();
  function resolveValue(obj, path) {
    if (!isObject(obj)) {
      return null;
    }
    let hit = cache.get(path);
    if (!hit) {
      hit = parse(path);
      if (hit) {
        cache.set(path, hit);
      }
    }
    if (!hit) {
      return null;
    }
    const len = hit.length;
    let last = obj;
    let i2 = 0;
    while (i2 < len) {
      const val = last[hit[i2]];
      if (val === void 0) {
        return null;
      }
      last = val;
      i2++;
    }
    return last;
  }
  function handleFlatJson(obj) {
    if (!isObject(obj)) {
      return obj;
    }
    for (const key in obj) {
      if (!hasOwn(obj, key)) {
        continue;
      }
      if (!key.includes(".")) {
        if (isObject(obj[key])) {
          handleFlatJson(obj[key]);
        }
      } else {
        const subKeys = key.split(".");
        const lastIndex = subKeys.length - 1;
        let currentObj = obj;
        for (let i2 = 0; i2 < lastIndex; i2++) {
          if (!(subKeys[i2] in currentObj)) {
            currentObj[subKeys[i2]] = {};
          }
          currentObj = currentObj[subKeys[i2]];
        }
        currentObj[subKeys[lastIndex]] = obj[key];
        delete obj[key];
        if (isObject(currentObj[subKeys[lastIndex]])) {
          handleFlatJson(currentObj[subKeys[lastIndex]]);
        }
      }
    }
    return obj;
  }
  /*!
    * @intlify/runtime v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const DEFAULT_MODIFIER = (str) => str;
  const DEFAULT_MESSAGE = (ctx) => "";
  const DEFAULT_MESSAGE_DATA_TYPE = "text";
  const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
  const DEFAULT_INTERPOLATE = toDisplayString;
  function pluralDefault(choice, choicesLength) {
    choice = Math.abs(choice);
    if (choicesLength === 2) {
      return choice ? choice > 1 ? 1 : 0 : 1;
    }
    return choice ? Math.min(choice, 2) : 0;
  }
  function getPluralIndex(options) {
    const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
    return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index : index;
  }
  function normalizeNamed(pluralIndex, props) {
    if (!props.count) {
      props.count = pluralIndex;
    }
    if (!props.n) {
      props.n = pluralIndex;
    }
  }
  function createMessageContext(options = {}) {
    const locale = options.locale;
    const pluralIndex = getPluralIndex(options);
    const pluralRule = isObject$1(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
    const orgPluralRule = isObject$1(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
    const plural = (messages2) => messages2[pluralRule(pluralIndex, messages2.length, orgPluralRule)];
    const _list = options.list || [];
    const list = (index) => _list[index];
    const _named = options.named || {};
    isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
    const named = (key) => _named[key];
    function message(key) {
      const msg = isFunction(options.messages) ? options.messages(key) : isObject$1(options.messages) ? options.messages[key] : false;
      return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
    }
    const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
    const normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
    const interpolate = isPlainObject(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
    const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
    const ctx = {
      ["list"]: list,
      ["named"]: named,
      ["plural"]: plural,
      ["linked"]: (key, modifier) => {
        const msg = message(key)(ctx);
        return isString(modifier) ? _modifier(modifier)(msg) : msg;
      },
      ["message"]: message,
      ["type"]: type,
      ["interpolate"]: interpolate,
      ["normalize"]: normalize
    };
    return ctx;
  }
  /*!
    * @intlify/message-compiler v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const errorMessages$2 = {
    [0]: `Expected token: '{0}'`,
    [1]: `Invalid token in placeholder: '{0}'`,
    [2]: `Unterminated single quote in placeholder`,
    [3]: `Unknown escape sequence: \\{0}`,
    [4]: `Invalid unicode escape sequence: {0}`,
    [5]: `Unbalanced closing brace`,
    [6]: `Unterminated closing brace`,
    [7]: `Empty placeholder`,
    [8]: `Not allowed nest placeholder`,
    [9]: `Invalid linked format`,
    [10]: `Plural must have messages`,
    [11]: `Unexpected empty linked modifier`,
    [12]: `Unexpected empty linked key`,
    [13]: `Unexpected lexical analysis in token: '{0}'`
  };
  function createCompileError(code, loc, options = {}) {
    const { domain, messages: messages2, args } = options;
    const msg = format((messages2 || errorMessages$2)[code] || "", ...args || []);
    const error2 = new SyntaxError(String(msg));
    error2.code = code;
    if (loc) {
      error2.location = loc;
    }
    error2.domain = domain;
    return error2;
  }
  /*!
    * @intlify/devtools-if v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const IntlifyDevToolsHooks = {
    I18nInit: "i18n:init",
    FunctionTranslate: "function:translate"
  };
  /*!
    * @intlify/core-base v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  let devtools = null;
  function setDevToolsHook(hook) {
    devtools = hook;
  }
  function initI18nDevTools(i18n2, version, meta) {
    devtools && devtools.emit(IntlifyDevToolsHooks.I18nInit, {
      timestamp: Date.now(),
      i18n: i18n2,
      version,
      meta
    });
  }
  const translateDevTools = /* @__PURE__ */ createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
  function createDevToolsHook(hook) {
    return (payloads) => devtools && devtools.emit(hook, payloads);
  }
  const warnMessages$1 = {
    [0]: `Not found '{key}' key in '{locale}' locale messages.`,
    [1]: `Fall back to translate '{key}' key with '{target}' locale.`,
    [2]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
    [3]: `Fall back to number format '{key}' key with '{target}' locale.`,
    [4]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
    [5]: `Fall back to datetime format '{key}' key with '{target}' locale.`
  };
  function getWarnMessage$1(code, ...args) {
    return format(warnMessages$1[code], ...args);
  }
  const VERSION$1 = "9.1.9";
  const NOT_REOSLVED = -1;
  const MISSING_RESOLVE_VALUE = "";
  function getDefaultLinkedModifiers() {
    return {
      upper: (val) => isString(val) ? val.toUpperCase() : val,
      lower: (val) => isString(val) ? val.toLowerCase() : val,
      capitalize: (val) => isString(val) ? `${val.charAt(0).toLocaleUpperCase()}${val.substr(1)}` : val
    };
  }
  let _compiler;
  let _additionalMeta = null;
  const setAdditionalMeta = (meta) => {
    _additionalMeta = meta;
  };
  const getAdditionalMeta = () => _additionalMeta;
  let _cid = 0;
  function createCoreContext(options = {}) {
    const version = isString(options.version) ? options.version : VERSION$1;
    const locale = isString(options.locale) ? options.locale : "en-US";
    const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
    const messages2 = isPlainObject(options.messages) ? options.messages : { [locale]: {} };
    const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
    const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : { [locale]: {} };
    const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
    const pluralRules = options.pluralRules || {};
    const missing = isFunction(options.missing) ? options.missing : null;
    const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
    const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
    const fallbackFormat = !!options.fallbackFormat;
    const unresolving = !!options.unresolving;
    const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
    const processor = isPlainObject(options.processor) ? options.processor : null;
    const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    const escapeParameter = !!options.escapeParameter;
    const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
    const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
    const internalOptions = options;
    const __datetimeFormatters = isObject$1(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
    const __numberFormatters = isObject$1(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
    const __meta = isObject$1(internalOptions.__meta) ? internalOptions.__meta : {};
    _cid++;
    const context = {
      version,
      cid: _cid,
      locale,
      fallbackLocale,
      messages: messages2,
      datetimeFormats,
      numberFormats,
      modifiers,
      pluralRules,
      missing,
      missingWarn,
      fallbackWarn,
      fallbackFormat,
      unresolving,
      postTranslation,
      processor,
      warnHtmlMessage,
      escapeParameter,
      messageCompiler,
      onWarn,
      __datetimeFormatters,
      __numberFormatters,
      __meta
    };
    {
      context.__v_emitter = internalOptions.__v_emitter != null ? internalOptions.__v_emitter : void 0;
    }
    {
      initI18nDevTools(context, version, __meta);
    }
    return context;
  }
  function isTranslateFallbackWarn(fallback, key) {
    return fallback instanceof RegExp ? fallback.test(key) : fallback;
  }
  function isTranslateMissingWarn(missing, key) {
    return missing instanceof RegExp ? missing.test(key) : missing;
  }
  function handleMissing(context, key, locale, missingWarn, type) {
    const { missing, onWarn } = context;
    {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("missing", {
          locale,
          key,
          type,
          groupId: `${type}:${key}`
        });
      }
    }
    if (missing !== null) {
      const ret = missing(context, locale, key, type);
      return isString(ret) ? ret : key;
    } else {
      if (isTranslateMissingWarn(missingWarn, key)) {
        onWarn(getWarnMessage$1(0, { key, locale }));
      }
      return key;
    }
  }
  function getLocaleChain(ctx, fallback, start) {
    const context = ctx;
    if (!context.__localeChainCache) {
      context.__localeChainCache = /* @__PURE__ */ new Map();
    }
    let chain = context.__localeChainCache.get(start);
    if (!chain) {
      chain = [];
      let block = [start];
      while (isArray(block)) {
        block = appendBlockToChain(chain, block, fallback);
      }
      const defaults = isArray(fallback) ? fallback : isPlainObject(fallback) ? fallback["default"] ? fallback["default"] : null : fallback;
      block = isString(defaults) ? [defaults] : defaults;
      if (isArray(block)) {
        appendBlockToChain(chain, block, false);
      }
      context.__localeChainCache.set(start, chain);
    }
    return chain;
  }
  function appendBlockToChain(chain, block, blocks) {
    let follow = true;
    for (let i2 = 0; i2 < block.length && isBoolean(follow); i2++) {
      const locale = block[i2];
      if (isString(locale)) {
        follow = appendLocaleToChain(chain, block[i2], blocks);
      }
    }
    return follow;
  }
  function appendLocaleToChain(chain, locale, blocks) {
    let follow;
    const tokens = locale.split("-");
    do {
      const target = tokens.join("-");
      follow = appendItemToChain(chain, target, blocks);
      tokens.splice(-1, 1);
    } while (tokens.length && follow === true);
    return follow;
  }
  function appendItemToChain(chain, target, blocks) {
    let follow = false;
    if (!chain.includes(target)) {
      follow = true;
      if (target) {
        follow = target[target.length - 1] !== "!";
        const locale = target.replace(/!/g, "");
        chain.push(locale);
        if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale]) {
          follow = blocks[locale];
        }
      }
    }
    return follow;
  }
  function updateFallbackLocale(ctx, locale, fallback) {
    const context = ctx;
    context.__localeChainCache = /* @__PURE__ */ new Map();
    getLocaleChain(ctx, fallback, locale);
  }
  function createCoreError(code) {
    return createCompileError(code, null, { messages: errorMessages$1 });
  }
  const errorMessages$1 = {
    [14]: "Invalid arguments",
    [15]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
    [16]: "The argument provided is not a valid ISO date string"
  };
  const NOOP_MESSAGE_FUNCTION = () => "";
  const isMessageFunction = (val) => isFunction(val);
  function translate(context, ...args) {
    const { fallbackFormat, postTranslation, unresolving, fallbackLocale, messages: messages2 } = context;
    const [key, options] = parseTranslateArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
    const resolvedMessage = !!options.resolvedMessage;
    const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : key : fallbackFormat ? key : "";
    const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
    const locale = isString(options.locale) ? options.locale : context.locale;
    escapeParameter && escapeParams(options);
    let [format2, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
      key,
      locale,
      messages2[locale] || {}
    ];
    let cacheBaseKey = key;
    if (!resolvedMessage && !(isString(format2) || isMessageFunction(format2))) {
      if (enableDefaultMsg) {
        format2 = defaultMsgOrKey;
        cacheBaseKey = format2;
      }
    }
    if (!resolvedMessage && (!(isString(format2) || isMessageFunction(format2)) || !isString(targetLocale))) {
      return unresolving ? NOT_REOSLVED : key;
    }
    if (isString(format2) && context.messageCompiler == null) {
      warn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${key}'.`);
      return key;
    }
    let occurred = false;
    const errorDetector = () => {
      occurred = true;
    };
    const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) : format2;
    if (occurred) {
      return format2;
    }
    const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
    const msgContext = createMessageContext(ctxOptions);
    const messaged = evaluateMessage(context, msg, msgContext);
    const ret = postTranslation ? postTranslation(messaged) : messaged;
    {
      const payloads = {
        timestamp: Date.now(),
        key: isString(key) ? key : isMessageFunction(format2) ? format2.key : "",
        locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ""),
        format: isString(format2) ? format2 : isMessageFunction(format2) ? format2.source : "",
        message: ret
      };
      payloads.meta = assign({}, context.__meta, getAdditionalMeta() || {});
      translateDevTools(payloads);
    }
    return ret;
  }
  function escapeParams(options) {
    if (isArray(options.list)) {
      options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
    } else if (isObject$1(options.named)) {
      Object.keys(options.named).forEach((key) => {
        if (isString(options.named[key])) {
          options.named[key] = escapeHtml(options.named[key]);
        }
      });
    }
  }
  function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
    const { messages: messages2, onWarn } = context;
    const locales = getLocaleChain(context, fallbackLocale, locale);
    let message = {};
    let targetLocale;
    let format2 = null;
    let from = locale;
    let to = null;
    const type = "translate";
    for (let i2 = 0; i2 < locales.length; i2++) {
      targetLocale = to = locales[i2];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(1, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      message = messages2[targetLocale] || {};
      let start = null;
      let startTag;
      let endTag;
      if (inBrowser) {
        start = window.performance.now();
        startTag = "intlify-message-resolve-start";
        endTag = "intlify-message-resolve-end";
        mark && mark(startTag);
      }
      if ((format2 = resolveValue(message, key)) === null) {
        format2 = message[key];
      }
      if (inBrowser) {
        const end = window.performance.now();
        const emitter = context.__v_emitter;
        if (emitter && start && format2) {
          emitter.emit("message-resolve", {
            type: "message-resolve",
            key,
            message: format2,
            time: end - start,
            groupId: `${type}:${key}`
          });
        }
        if (startTag && endTag && mark && measure) {
          mark(endTag);
          measure("intlify message resolve", startTag, endTag);
        }
      }
      if (isString(format2) || isFunction(format2))
        break;
      const missingRet = handleMissing(context, key, targetLocale, missingWarn, type);
      if (missingRet !== key) {
        format2 = missingRet;
      }
      from = to;
    }
    return [format2, targetLocale, message];
  }
  function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) {
    const { messageCompiler, warnHtmlMessage } = context;
    if (isMessageFunction(format2)) {
      const msg2 = format2;
      msg2.locale = msg2.locale || targetLocale;
      msg2.key = msg2.key || key;
      return msg2;
    }
    let start = null;
    let startTag;
    let endTag;
    if (inBrowser) {
      start = window.performance.now();
      startTag = "intlify-message-compilation-start";
      endTag = "intlify-message-compilation-end";
      mark && mark(startTag);
    }
    const msg = messageCompiler(format2, getCompileOptions(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, errorDetector));
    if (inBrowser) {
      const end = window.performance.now();
      const emitter = context.__v_emitter;
      if (emitter && start) {
        emitter.emit("message-compilation", {
          type: "message-compilation",
          message: format2,
          time: end - start,
          groupId: `${"translate"}:${key}`
        });
      }
      if (startTag && endTag && mark && measure) {
        mark(endTag);
        measure("intlify message compilation", startTag, endTag);
      }
    }
    msg.locale = targetLocale;
    msg.key = key;
    msg.source = format2;
    return msg;
  }
  function evaluateMessage(context, msg, msgCtx) {
    let start = null;
    let startTag;
    let endTag;
    if (inBrowser) {
      start = window.performance.now();
      startTag = "intlify-message-evaluation-start";
      endTag = "intlify-message-evaluation-end";
      mark && mark(startTag);
    }
    const messaged = msg(msgCtx);
    if (inBrowser) {
      const end = window.performance.now();
      const emitter = context.__v_emitter;
      if (emitter && start) {
        emitter.emit("message-evaluation", {
          type: "message-evaluation",
          value: messaged,
          time: end - start,
          groupId: `${"translate"}:${msg.key}`
        });
      }
      if (startTag && endTag && mark && measure) {
        mark(endTag);
        measure("intlify message evaluation", startTag, endTag);
      }
    }
    return messaged;
  }
  function parseTranslateArgs(...args) {
    const [arg1, arg2, arg3] = args;
    const options = {};
    if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1)) {
      throw createCoreError(14);
    }
    const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
    if (isNumber(arg2)) {
      options.plural = arg2;
    } else if (isString(arg2)) {
      options.default = arg2;
    } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
      options.named = arg2;
    } else if (isArray(arg2)) {
      options.list = arg2;
    }
    if (isNumber(arg3)) {
      options.plural = arg3;
    } else if (isString(arg3)) {
      options.default = arg3;
    } else if (isPlainObject(arg3)) {
      assign(options, arg3);
    }
    return [key, options];
  }
  function getCompileOptions(context, locale, key, source, warnHtmlMessage, errorDetector) {
    return {
      warnHtmlMessage,
      onError: (err) => {
        errorDetector && errorDetector(err);
        {
          const message = `Message compilation error: ${err.message}`;
          const codeFrame = err.location && generateCodeFrame(source, err.location.start.offset, err.location.end.offset);
          const emitter = context.__v_emitter;
          if (emitter) {
            emitter.emit("compile-error", {
              message: source,
              error: err.message,
              start: err.location && err.location.start.offset,
              end: err.location && err.location.end.offset,
              groupId: `${"translate"}:${key}`
            });
          }
          console.error(codeFrame ? `${message}
${codeFrame}` : message);
        }
      },
      onCacheKey: (source2) => generateFormatCacheKey(locale, key, source2)
    };
  }
  function getMessageContextOptions(context, locale, message, options) {
    const { modifiers, pluralRules } = context;
    const resolveMessage = (key) => {
      const val = resolveValue(message, key);
      if (isString(val)) {
        let occurred = false;
        const errorDetector = () => {
          occurred = true;
        };
        const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
        return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
      } else if (isMessageFunction(val)) {
        return val;
      } else {
        return NOOP_MESSAGE_FUNCTION;
      }
    };
    const ctxOptions = {
      locale,
      modifiers,
      pluralRules,
      messages: resolveMessage
    };
    if (context.processor) {
      ctxOptions.processor = context.processor;
    }
    if (options.list) {
      ctxOptions.list = options.list;
    }
    if (options.named) {
      ctxOptions.named = options.named;
    }
    if (isNumber(options.plural)) {
      ctxOptions.pluralIndex = options.plural;
    }
    return ctxOptions;
  }
  const intlDefined = typeof Intl !== "undefined";
  const Availabilities = {
    dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== "undefined",
    numberFormat: intlDefined && typeof Intl.NumberFormat !== "undefined"
  };
  function datetime(context, ...args) {
    const { datetimeFormats, unresolving, fallbackLocale, onWarn } = context;
    const { __datetimeFormatters } = context;
    if (!Availabilities.dateTimeFormat) {
      onWarn(getWarnMessage$1(4));
      return MISSING_RESOLVE_VALUE;
    }
    const [key, value, options, overrides] = parseDateTimeArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const part = !!options.part;
    const locale = isString(options.locale) ? options.locale : context.locale;
    const locales = getLocaleChain(context, fallbackLocale, locale);
    if (!isString(key) || key === "") {
      return new Intl.DateTimeFormat(locale).format(value);
    }
    let datetimeFormat = {};
    let targetLocale;
    let format2 = null;
    let from = locale;
    let to = null;
    const type = "datetime format";
    for (let i2 = 0; i2 < locales.length; i2++) {
      targetLocale = to = locales[i2];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(5, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      datetimeFormat = datetimeFormats[targetLocale] || {};
      format2 = datetimeFormat[key];
      if (isPlainObject(format2))
        break;
      handleMissing(context, key, targetLocale, missingWarn, type);
      from = to;
    }
    if (!isPlainObject(format2) || !isString(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!isEmptyObject(overrides)) {
      id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __datetimeFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format2, overrides));
      __datetimeFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  function parseDateTimeArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    let options = {};
    let overrides = {};
    let value;
    if (isString(arg1)) {
      if (!/\d{4}-\d{2}-\d{2}(T.*)?/.test(arg1)) {
        throw createCoreError(16);
      }
      value = new Date(arg1);
      try {
        value.toISOString();
      } catch (e) {
        throw createCoreError(16);
      }
    } else if (isDate(arg1)) {
      if (isNaN(arg1.getTime())) {
        throw createCoreError(15);
      }
      value = arg1;
    } else if (isNumber(arg1)) {
      value = arg1;
    } else {
      throw createCoreError(14);
    }
    if (isString(arg2)) {
      options.key = arg2;
    } else if (isPlainObject(arg2)) {
      options = arg2;
    }
    if (isString(arg3)) {
      options.locale = arg3;
    } else if (isPlainObject(arg3)) {
      overrides = arg3;
    }
    if (isPlainObject(arg4)) {
      overrides = arg4;
    }
    return [options.key || "", value, options, overrides];
  }
  function clearDateTimeFormat(ctx, locale, format2) {
    const context = ctx;
    for (const key in format2) {
      const id = `${locale}__${key}`;
      if (!context.__datetimeFormatters.has(id)) {
        continue;
      }
      context.__datetimeFormatters.delete(id);
    }
  }
  function number(context, ...args) {
    const { numberFormats, unresolving, fallbackLocale, onWarn } = context;
    const { __numberFormatters } = context;
    if (!Availabilities.numberFormat) {
      onWarn(getWarnMessage$1(2));
      return MISSING_RESOLVE_VALUE;
    }
    const [key, value, options, overrides] = parseNumberArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const part = !!options.part;
    const locale = isString(options.locale) ? options.locale : context.locale;
    const locales = getLocaleChain(context, fallbackLocale, locale);
    if (!isString(key) || key === "") {
      return new Intl.NumberFormat(locale).format(value);
    }
    let numberFormat = {};
    let targetLocale;
    let format2 = null;
    let from = locale;
    let to = null;
    const type = "number format";
    for (let i2 = 0; i2 < locales.length; i2++) {
      targetLocale = to = locales[i2];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(3, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      numberFormat = numberFormats[targetLocale] || {};
      format2 = numberFormat[key];
      if (isPlainObject(format2))
        break;
      handleMissing(context, key, targetLocale, missingWarn, type);
      from = to;
    }
    if (!isPlainObject(format2) || !isString(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!isEmptyObject(overrides)) {
      id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __numberFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.NumberFormat(targetLocale, assign({}, format2, overrides));
      __numberFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  function parseNumberArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    let options = {};
    let overrides = {};
    if (!isNumber(arg1)) {
      throw createCoreError(14);
    }
    const value = arg1;
    if (isString(arg2)) {
      options.key = arg2;
    } else if (isPlainObject(arg2)) {
      options = arg2;
    }
    if (isString(arg3)) {
      options.locale = arg3;
    } else if (isPlainObject(arg3)) {
      overrides = arg3;
    }
    if (isPlainObject(arg4)) {
      overrides = arg4;
    }
    return [options.key || "", value, options, overrides];
  }
  function clearNumberFormat(ctx, locale, format2) {
    const context = ctx;
    for (const key in format2) {
      const id = `${locale}__${key}`;
      if (!context.__numberFormatters.has(id)) {
        continue;
      }
      context.__numberFormatters.delete(id);
    }
  }
  /*!
    * @intlify/vue-devtools v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const VueDevToolsLabels = {
    ["vue-devtools-plugin-vue-i18n"]: "Vue I18n devtools",
    ["vue-i18n-resource-inspector"]: "I18n Resources",
    ["vue-i18n-timeline"]: "Vue I18n"
  };
  const VueDevToolsPlaceholders = {
    ["vue-i18n-resource-inspector"]: "Search for scopes ..."
  };
  const VueDevToolsTimelineColors = {
    ["vue-i18n-timeline"]: 16764185
  };
  /*!
    * vue-i18n v9.1.9
    * (c) 2022 kazuya kawaguchi
    * Released under the MIT License.
    */
  const VERSION = "9.1.9";
  function initFeatureFlags() {
    let needWarn = false;
    {
      needWarn = true;
    }
    if (needWarn) {
      console.warn(`You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.`);
    }
  }
  const warnMessages = {
    [6]: `Fall back to {type} '{key}' with root locale.`,
    [7]: `Not supported 'preserve'.`,
    [8]: `Not supported 'formatter'.`,
    [9]: `Not supported 'preserveDirectiveContent'.`,
    [10]: `Not supported 'getChoiceIndex'.`,
    [11]: `Component name legacy compatible: '{name}' -> 'i18n'`,
    [12]: `Not found parent scope. use the global scope.`
  };
  function getWarnMessage(code, ...args) {
    return format(warnMessages[code], ...args);
  }
  function createI18nError(code, ...args) {
    return createCompileError(code, null, { messages: errorMessages, args });
  }
  const errorMessages = {
    [14]: "Unexpected return type in composer",
    [15]: "Invalid argument",
    [16]: "Must be called at the top of a `setup` function",
    [17]: "Need to install with `app.use` function",
    [22]: "Unexpected error",
    [18]: "Not available in legacy mode",
    [19]: `Required in value: {0}`,
    [20]: `Invalid value`,
    [21]: `Cannot setup vue-devtools plugin`
  };
  const DEVTOOLS_META = "__INTLIFY_META__";
  const TransrateVNodeSymbol = makeSymbol("__transrateVNode");
  const DatetimePartsSymbol = makeSymbol("__datetimeParts");
  const NumberPartsSymbol = makeSymbol("__numberParts");
  const EnableEmitter = makeSymbol("__enableEmitter");
  const DisableEmitter = makeSymbol("__disableEmitter");
  const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
  makeSymbol("__intlifyMeta");
  const InejctWithOption = makeSymbol("__injectWithOption");
  let composerID = 0;
  function defineCoreMissingHandler(missing) {
    return (ctx, locale, key, type) => {
      return missing(locale, key, vue.getCurrentInstance() || void 0, type);
    };
  }
  function getLocaleMessages(locale, options) {
    const { messages: messages2, __i18n } = options;
    const ret = isPlainObject(messages2) ? messages2 : isArray(__i18n) ? {} : { [locale]: {} };
    if (isArray(__i18n)) {
      __i18n.forEach(({ locale: locale2, resource }) => {
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource, ret[locale2]);
        } else {
          deepCopy(resource, ret);
        }
      });
    }
    if (options.flatJson) {
      for (const key in ret) {
        if (hasOwn$1(ret, key)) {
          handleFlatJson(ret[key]);
        }
      }
    }
    return ret;
  }
  const isNotObjectOrIsArray = (val) => !isObject$1(val) || isArray(val);
  function deepCopy(src, des) {
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
      throw createI18nError(20);
    }
    for (const key in src) {
      if (hasOwn$1(src, key)) {
        if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
          des[key] = src[key];
        } else {
          deepCopy(src[key], des[key]);
        }
      }
    }
  }
  const getMetaInfo = () => {
    const instance = vue.getCurrentInstance();
    return instance && instance.type[DEVTOOLS_META] ? { [DEVTOOLS_META]: instance.type[DEVTOOLS_META] } : null;
  };
  function createComposer(options = {}) {
    const { __root } = options;
    const _isGlobal = __root === void 0;
    let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
    const _locale = vue.ref(__root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : "en-US");
    const _fallbackLocale = vue.ref(__root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value);
    const _messages = vue.ref(getLocaleMessages(_locale.value, options));
    const _datetimeFormats = vue.ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
    const _numberFormats = vue.ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
    let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
    let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
    let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
    let _fallbackFormat = !!options.fallbackFormat;
    let _missing = isFunction(options.missing) ? options.missing : null;
    let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
    let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
    let _warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    let _escapeParameter = !!options.escapeParameter;
    const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
    let _pluralRules = options.pluralRules || __root && __root.pluralRules;
    let _context;
    function getCoreContext() {
      return createCoreContext({
        version: VERSION,
        locale: _locale.value,
        fallbackLocale: _fallbackLocale.value,
        messages: _messages.value,
        messageCompiler: function compileToFunction(source) {
          return (ctx) => {
            return ctx.normalize([source]);
          };
        },
        datetimeFormats: _datetimeFormats.value,
        numberFormats: _numberFormats.value,
        modifiers: _modifiers,
        pluralRules: _pluralRules,
        missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
        missingWarn: _missingWarn,
        fallbackWarn: _fallbackWarn,
        fallbackFormat: _fallbackFormat,
        unresolving: true,
        postTranslation: _postTranslation === null ? void 0 : _postTranslation,
        warnHtmlMessage: _warnHtmlMessage,
        escapeParameter: _escapeParameter,
        __datetimeFormatters: isPlainObject(_context) ? _context.__datetimeFormatters : void 0,
        __numberFormatters: isPlainObject(_context) ? _context.__numberFormatters : void 0,
        __v_emitter: isPlainObject(_context) ? _context.__v_emitter : void 0,
        __meta: { framework: "vue" }
      });
    }
    _context = getCoreContext();
    updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
    function trackReactivityValues() {
      return [
        _locale.value,
        _fallbackLocale.value,
        _messages.value,
        _datetimeFormats.value,
        _numberFormats.value
      ];
    }
    const locale = vue.computed({
      get: () => _locale.value,
      set: (val) => {
        _locale.value = val;
        _context.locale = _locale.value;
      }
    });
    const fallbackLocale = vue.computed({
      get: () => _fallbackLocale.value,
      set: (val) => {
        _fallbackLocale.value = val;
        _context.fallbackLocale = _fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, val);
      }
    });
    const messages2 = vue.computed(() => _messages.value);
    const datetimeFormats = vue.computed(() => _datetimeFormats.value);
    const numberFormats = vue.computed(() => _numberFormats.value);
    function getPostTranslationHandler() {
      return isFunction(_postTranslation) ? _postTranslation : null;
    }
    function setPostTranslationHandler(handler) {
      _postTranslation = handler;
      _context.postTranslation = handler;
    }
    function getMissingHandler() {
      return _missing;
    }
    function setMissingHandler(handler) {
      if (handler !== null) {
        _runtimeMissing = defineCoreMissingHandler(handler);
      }
      _missing = handler;
      _context.missing = _runtimeMissing;
    }
    function isResolvedTranslateMessage(type, arg) {
      return type !== "translate" || !!arg.resolvedMessage === false;
    }
    function wrapWithDeps(fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) {
      trackReactivityValues();
      let ret;
      {
        try {
          setAdditionalMeta(getMetaInfo());
          ret = fn(_context);
        } finally {
          setAdditionalMeta(null);
        }
      }
      if (isNumber(ret) && ret === NOT_REOSLVED) {
        const [key, arg2] = argumentParser();
        if (__root && isString(key) && isResolvedTranslateMessage(warnType, arg2)) {
          if (_fallbackRoot && (isTranslateFallbackWarn(_fallbackWarn, key) || isTranslateMissingWarn(_missingWarn, key))) {
            warn(getWarnMessage(6, {
              key,
              type: warnType
            }));
          }
          {
            const { __v_emitter: emitter } = _context;
            if (emitter && _fallbackRoot) {
              emitter.emit("fallback", {
                type: warnType,
                key,
                to: "global",
                groupId: `${warnType}:${key}`
              });
            }
          }
        }
        return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
      } else if (successCondition(ret)) {
        return ret;
      } else {
        throw createI18nError(14);
      }
    }
    function t2(...args) {
      return wrapWithDeps((context) => translate(context, ...args), () => parseTranslateArgs(...args), "translate", (root) => root.t(...args), (key) => key, (val) => isString(val));
    }
    function rt2(...args) {
      const [arg1, arg2, arg3] = args;
      if (arg3 && !isObject$1(arg3)) {
        throw createI18nError(15);
      }
      return t2(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
    }
    function d2(...args) {
      return wrapWithDeps((context) => datetime(context, ...args), () => parseDateTimeArgs(...args), "datetime format", (root) => root.d(...args), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
    }
    function n2(...args) {
      return wrapWithDeps((context) => number(context, ...args), () => parseNumberArgs(...args), "number format", (root) => root.n(...args), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
    }
    function normalize(values) {
      return values.map((val) => isString(val) ? vue.createVNode(vue.Text, null, val, 0) : val);
    }
    const interpolate = (val) => val;
    const processor = {
      normalize,
      interpolate,
      type: "vnode"
    };
    function transrateVNode(...args) {
      return wrapWithDeps((context) => {
        let ret;
        const _context2 = context;
        try {
          _context2.processor = processor;
          ret = translate(_context2, ...args);
        } finally {
          _context2.processor = null;
        }
        return ret;
      }, () => parseTranslateArgs(...args), "translate", (root) => root[TransrateVNodeSymbol](...args), (key) => [vue.createVNode(vue.Text, null, key, 0)], (val) => isArray(val));
    }
    function numberParts(...args) {
      return wrapWithDeps((context) => number(context, ...args), () => parseNumberArgs(...args), "number format", (root) => root[NumberPartsSymbol](...args), () => [], (val) => isString(val) || isArray(val));
    }
    function datetimeParts(...args) {
      return wrapWithDeps((context) => datetime(context, ...args), () => parseDateTimeArgs(...args), "datetime format", (root) => root[DatetimePartsSymbol](...args), () => [], (val) => isString(val) || isArray(val));
    }
    function setPluralRules(rules2) {
      _pluralRules = rules2;
      _context.pluralRules = _pluralRules;
    }
    function te2(key, locale2) {
      const targetLocale = isString(locale2) ? locale2 : _locale.value;
      const message = getLocaleMessage(targetLocale);
      return resolveValue(message, key) !== null;
    }
    function resolveMessages(key) {
      let messages3 = null;
      const locales = getLocaleChain(_context, _fallbackLocale.value, _locale.value);
      for (let i2 = 0; i2 < locales.length; i2++) {
        const targetLocaleMessages = _messages.value[locales[i2]] || {};
        const messageValue = resolveValue(targetLocaleMessages, key);
        if (messageValue != null) {
          messages3 = messageValue;
          break;
        }
      }
      return messages3;
    }
    function tm(key) {
      const messages3 = resolveMessages(key);
      return messages3 != null ? messages3 : __root ? __root.tm(key) || {} : {};
    }
    function getLocaleMessage(locale2) {
      return _messages.value[locale2] || {};
    }
    function setLocaleMessage(locale2, message) {
      _messages.value[locale2] = message;
      _context.messages = _messages.value;
    }
    function mergeLocaleMessage(locale2, message) {
      _messages.value[locale2] = _messages.value[locale2] || {};
      deepCopy(message, _messages.value[locale2]);
      _context.messages = _messages.value;
    }
    function getDateTimeFormat(locale2) {
      return _datetimeFormats.value[locale2] || {};
    }
    function setDateTimeFormat(locale2, format2) {
      _datetimeFormats.value[locale2] = format2;
      _context.datetimeFormats = _datetimeFormats.value;
      clearDateTimeFormat(_context, locale2, format2);
    }
    function mergeDateTimeFormat(locale2, format2) {
      _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format2);
      _context.datetimeFormats = _datetimeFormats.value;
      clearDateTimeFormat(_context, locale2, format2);
    }
    function getNumberFormat(locale2) {
      return _numberFormats.value[locale2] || {};
    }
    function setNumberFormat(locale2, format2) {
      _numberFormats.value[locale2] = format2;
      _context.numberFormats = _numberFormats.value;
      clearNumberFormat(_context, locale2, format2);
    }
    function mergeNumberFormat(locale2, format2) {
      _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format2);
      _context.numberFormats = _numberFormats.value;
      clearNumberFormat(_context, locale2, format2);
    }
    composerID++;
    if (__root) {
      vue.watch(__root.locale, (val) => {
        if (_inheritLocale) {
          _locale.value = val;
          _context.locale = val;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      });
      vue.watch(__root.fallbackLocale, (val) => {
        if (_inheritLocale) {
          _fallbackLocale.value = val;
          _context.fallbackLocale = val;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      });
    }
    const composer = {
      id: composerID,
      locale,
      fallbackLocale,
      get inheritLocale() {
        return _inheritLocale;
      },
      set inheritLocale(val) {
        _inheritLocale = val;
        if (val && __root) {
          _locale.value = __root.locale.value;
          _fallbackLocale.value = __root.fallbackLocale.value;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      },
      get availableLocales() {
        return Object.keys(_messages.value).sort();
      },
      messages: messages2,
      datetimeFormats,
      numberFormats,
      get modifiers() {
        return _modifiers;
      },
      get pluralRules() {
        return _pluralRules || {};
      },
      get isGlobal() {
        return _isGlobal;
      },
      get missingWarn() {
        return _missingWarn;
      },
      set missingWarn(val) {
        _missingWarn = val;
        _context.missingWarn = _missingWarn;
      },
      get fallbackWarn() {
        return _fallbackWarn;
      },
      set fallbackWarn(val) {
        _fallbackWarn = val;
        _context.fallbackWarn = _fallbackWarn;
      },
      get fallbackRoot() {
        return _fallbackRoot;
      },
      set fallbackRoot(val) {
        _fallbackRoot = val;
      },
      get fallbackFormat() {
        return _fallbackFormat;
      },
      set fallbackFormat(val) {
        _fallbackFormat = val;
        _context.fallbackFormat = _fallbackFormat;
      },
      get warnHtmlMessage() {
        return _warnHtmlMessage;
      },
      set warnHtmlMessage(val) {
        _warnHtmlMessage = val;
        _context.warnHtmlMessage = val;
      },
      get escapeParameter() {
        return _escapeParameter;
      },
      set escapeParameter(val) {
        _escapeParameter = val;
        _context.escapeParameter = val;
      },
      t: t2,
      rt: rt2,
      d: d2,
      n: n2,
      te: te2,
      tm,
      getLocaleMessage,
      setLocaleMessage,
      mergeLocaleMessage,
      getDateTimeFormat,
      setDateTimeFormat,
      mergeDateTimeFormat,
      getNumberFormat,
      setNumberFormat,
      mergeNumberFormat,
      getPostTranslationHandler,
      setPostTranslationHandler,
      getMissingHandler,
      setMissingHandler,
      [TransrateVNodeSymbol]: transrateVNode,
      [NumberPartsSymbol]: numberParts,
      [DatetimePartsSymbol]: datetimeParts,
      [SetPluralRulesSymbol]: setPluralRules,
      [InejctWithOption]: options.__injectWithOption
    };
    {
      composer[EnableEmitter] = (emitter) => {
        _context.__v_emitter = emitter;
      };
      composer[DisableEmitter] = () => {
        _context.__v_emitter = void 0;
      };
    }
    return composer;
  }
  function convertComposerOptions(options) {
    const locale = isString(options.locale) ? options.locale : "en-US";
    const fallbackLocale = isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
    const missing = isFunction(options.missing) ? options.missing : void 0;
    const missingWarn = isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
    const fallbackWarn = isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
    const fallbackRoot = isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
    const fallbackFormat = !!options.formatFallbackMessages;
    const modifiers = isPlainObject(options.modifiers) ? options.modifiers : {};
    const pluralizationRules = options.pluralizationRules;
    const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : void 0;
    const warnHtmlMessage = isString(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== "off" : true;
    const escapeParameter = !!options.escapeParameterHtml;
    const inheritLocale = isBoolean(options.sync) ? options.sync : true;
    if (options.formatter) {
      warn(getWarnMessage(8));
    }
    if (options.preserveDirectiveContent) {
      warn(getWarnMessage(9));
    }
    let messages2 = options.messages;
    if (isPlainObject(options.sharedMessages)) {
      const sharedMessages = options.sharedMessages;
      const locales = Object.keys(sharedMessages);
      messages2 = locales.reduce((messages3, locale2) => {
        const message = messages3[locale2] || (messages3[locale2] = {});
        assign(message, sharedMessages[locale2]);
        return messages3;
      }, messages2 || {});
    }
    const { __i18n, __root, __injectWithOption } = options;
    const datetimeFormats = options.datetimeFormats;
    const numberFormats = options.numberFormats;
    const flatJson = options.flatJson;
    return {
      locale,
      fallbackLocale,
      messages: messages2,
      flatJson,
      datetimeFormats,
      numberFormats,
      missing,
      missingWarn,
      fallbackWarn,
      fallbackRoot,
      fallbackFormat,
      modifiers,
      pluralRules: pluralizationRules,
      postTranslation,
      warnHtmlMessage,
      escapeParameter,
      inheritLocale,
      __i18n,
      __root,
      __injectWithOption
    };
  }
  function createVueI18n(options = {}) {
    const composer = createComposer(convertComposerOptions(options));
    const vueI18n = {
      id: composer.id,
      get locale() {
        return composer.locale.value;
      },
      set locale(val) {
        composer.locale.value = val;
      },
      get fallbackLocale() {
        return composer.fallbackLocale.value;
      },
      set fallbackLocale(val) {
        composer.fallbackLocale.value = val;
      },
      get messages() {
        return composer.messages.value;
      },
      get datetimeFormats() {
        return composer.datetimeFormats.value;
      },
      get numberFormats() {
        return composer.numberFormats.value;
      },
      get availableLocales() {
        return composer.availableLocales;
      },
      get formatter() {
        warn(getWarnMessage(8));
        return {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(val) {
        warn(getWarnMessage(8));
      },
      get missing() {
        return composer.getMissingHandler();
      },
      set missing(handler) {
        composer.setMissingHandler(handler);
      },
      get silentTranslationWarn() {
        return isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
      },
      set silentTranslationWarn(val) {
        composer.missingWarn = isBoolean(val) ? !val : val;
      },
      get silentFallbackWarn() {
        return isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
      },
      set silentFallbackWarn(val) {
        composer.fallbackWarn = isBoolean(val) ? !val : val;
      },
      get modifiers() {
        return composer.modifiers;
      },
      get formatFallbackMessages() {
        return composer.fallbackFormat;
      },
      set formatFallbackMessages(val) {
        composer.fallbackFormat = val;
      },
      get postTranslation() {
        return composer.getPostTranslationHandler();
      },
      set postTranslation(handler) {
        composer.setPostTranslationHandler(handler);
      },
      get sync() {
        return composer.inheritLocale;
      },
      set sync(val) {
        composer.inheritLocale = val;
      },
      get warnHtmlInMessage() {
        return composer.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(val) {
        composer.warnHtmlMessage = val !== "off";
      },
      get escapeParameterHtml() {
        return composer.escapeParameter;
      },
      set escapeParameterHtml(val) {
        composer.escapeParameter = val;
      },
      get preserveDirectiveContent() {
        warn(getWarnMessage(9));
        return true;
      },
      set preserveDirectiveContent(val) {
        warn(getWarnMessage(9));
      },
      get pluralizationRules() {
        return composer.pluralRules || {};
      },
      __composer: composer,
      t(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = {};
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(15);
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return composer.t(key, list || named || {}, options2);
      },
      rt(...args) {
        return composer.rt(...args);
      },
      tc(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = { plural: 1 };
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(15);
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isNumber(arg2)) {
          options2.plural = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isString(arg3)) {
          options2.locale = arg3;
        } else if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return composer.t(key, list || named || {}, options2);
      },
      te(key, locale) {
        return composer.te(key, locale);
      },
      tm(key) {
        return composer.tm(key);
      },
      getLocaleMessage(locale) {
        return composer.getLocaleMessage(locale);
      },
      setLocaleMessage(locale, message) {
        composer.setLocaleMessage(locale, message);
      },
      mergeLocaleMessage(locale, message) {
        composer.mergeLocaleMessage(locale, message);
      },
      d(...args) {
        return composer.d(...args);
      },
      getDateTimeFormat(locale) {
        return composer.getDateTimeFormat(locale);
      },
      setDateTimeFormat(locale, format2) {
        composer.setDateTimeFormat(locale, format2);
      },
      mergeDateTimeFormat(locale, format2) {
        composer.mergeDateTimeFormat(locale, format2);
      },
      n(...args) {
        return composer.n(...args);
      },
      getNumberFormat(locale) {
        return composer.getNumberFormat(locale);
      },
      setNumberFormat(locale, format2) {
        composer.setNumberFormat(locale, format2);
      },
      mergeNumberFormat(locale, format2) {
        composer.mergeNumberFormat(locale, format2);
      },
      getChoiceIndex(choice, choicesLength) {
        warn(getWarnMessage(10));
        return -1;
      },
      __onComponentInstanceCreated(target) {
        const { componentInstanceCreatedListener } = options;
        if (componentInstanceCreatedListener) {
          componentInstanceCreatedListener(target, vueI18n);
        }
      }
    };
    {
      vueI18n.__enableEmitter = (emitter) => {
        const __composer = composer;
        __composer[EnableEmitter] && __composer[EnableEmitter](emitter);
      };
      vueI18n.__disableEmitter = () => {
        const __composer = composer;
        __composer[DisableEmitter] && __composer[DisableEmitter]();
      };
    }
    return vueI18n;
  }
  const baseFormatProps = {
    tag: {
      type: [String, Object]
    },
    locale: {
      type: String
    },
    scope: {
      type: String,
      validator: (val) => val === "parent" || val === "global",
      default: "parent"
    },
    i18n: {
      type: Object
    }
  };
  const Translation = {
    name: "i18n-t",
    props: assign({
      keypath: {
        type: String,
        required: true
      },
      plural: {
        type: [Number, String],
        validator: (val) => isNumber(val) || !isNaN(val)
      }
    }, baseFormatProps),
    setup(props, context) {
      const { slots, attrs: attrs2 } = context;
      const i18n2 = props.i18n || useI18n({
        useScope: props.scope,
        __useComponent: true
      });
      const keys = Object.keys(slots).filter((key) => key !== "_");
      return () => {
        const options = {};
        if (props.locale) {
          options.locale = props.locale;
        }
        if (props.plural !== void 0) {
          options.plural = isString(props.plural) ? +props.plural : props.plural;
        }
        const arg = getInterpolateArg(context, keys);
        const children = i18n2[TransrateVNodeSymbol](props.keypath, arg, options);
        const assignedAttrs = assign({}, attrs2);
        return isString(props.tag) ? vue.h(props.tag, assignedAttrs, children) : isObject$1(props.tag) ? vue.h(props.tag, assignedAttrs, children) : vue.h(vue.Fragment, assignedAttrs, children);
      };
    }
  };
  function getInterpolateArg({ slots }, keys) {
    if (keys.length === 1 && keys[0] === "default") {
      return slots.default ? slots.default() : [];
    } else {
      return keys.reduce((arg, key) => {
        const slot = slots[key];
        if (slot) {
          arg[key] = slot();
        }
        return arg;
      }, {});
    }
  }
  function renderFormatter(props, context, slotKeys, partFormatter) {
    const { slots, attrs: attrs2 } = context;
    return () => {
      const options = { part: true };
      let overrides = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (isString(props.format)) {
        options.key = props.format;
      } else if (isObject$1(props.format)) {
        if (isString(props.format.key)) {
          options.key = props.format.key;
        }
        overrides = Object.keys(props.format).reduce((options2, prop) => {
          return slotKeys.includes(prop) ? assign({}, options2, { [prop]: props.format[prop] }) : options2;
        }, {});
      }
      const parts = partFormatter(...[props.value, options, overrides]);
      let children = [options.key];
      if (isArray(parts)) {
        children = parts.map((part, index) => {
          const slot = slots[part.type];
          return slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
        });
      } else if (isString(parts)) {
        children = [parts];
      }
      const assignedAttrs = assign({}, attrs2);
      return isString(props.tag) ? vue.h(props.tag, assignedAttrs, children) : isObject$1(props.tag) ? vue.h(props.tag, assignedAttrs, children) : vue.h(vue.Fragment, assignedAttrs, children);
    };
  }
  const NUMBER_FORMAT_KEYS = [
    "localeMatcher",
    "style",
    "unit",
    "unitDisplay",
    "currency",
    "currencyDisplay",
    "useGrouping",
    "numberingSystem",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "notation",
    "formatMatcher"
  ];
  const NumberFormat = {
    name: "i18n-n",
    props: assign({
      value: {
        type: Number,
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    setup(props, context) {
      const i18n2 = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
      return renderFormatter(props, context, NUMBER_FORMAT_KEYS, (...args) => i18n2[NumberPartsSymbol](...args));
    }
  };
  const DATETIME_FORMAT_KEYS = [
    "dateStyle",
    "timeStyle",
    "fractionalSecondDigits",
    "calendar",
    "dayPeriod",
    "numberingSystem",
    "localeMatcher",
    "timeZone",
    "hour12",
    "hourCycle",
    "formatMatcher",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName"
  ];
  const DatetimeFormat = {
    name: "i18n-d",
    props: assign({
      value: {
        type: [Number, Date],
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    setup(props, context) {
      const i18n2 = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
      return renderFormatter(props, context, DATETIME_FORMAT_KEYS, (...args) => i18n2[DatetimePartsSymbol](...args));
    }
  };
  function getComposer$2(i18n2, instance) {
    const i18nInternal = i18n2;
    if (i18n2.mode === "composition") {
      return i18nInternal.__getInstance(instance) || i18n2.global;
    } else {
      const vueI18n = i18nInternal.__getInstance(instance);
      return vueI18n != null ? vueI18n.__composer : i18n2.global.__composer;
    }
  }
  function vTDirective(i18n2) {
    const bind = (el, { instance, value, modifiers }) => {
      if (!instance || !instance.$) {
        throw createI18nError(22);
      }
      const composer = getComposer$2(i18n2, instance.$);
      if (modifiers.preserve) {
        warn(getWarnMessage(7));
      }
      const parsedValue = parseValue(value);
      el.textContent = composer.t(...makeParams(parsedValue));
    };
    return {
      beforeMount: bind,
      beforeUpdate: bind
    };
  }
  function parseValue(value) {
    if (isString(value)) {
      return { path: value };
    } else if (isPlainObject(value)) {
      if (!("path" in value)) {
        throw createI18nError(19, "path");
      }
      return value;
    } else {
      throw createI18nError(20);
    }
  }
  function makeParams(value) {
    const { path, locale, args, choice, plural } = value;
    const options = {};
    const named = args || {};
    if (isString(locale)) {
      options.locale = locale;
    }
    if (isNumber(choice)) {
      options.plural = choice;
    }
    if (isNumber(plural)) {
      options.plural = plural;
    }
    return [path, named, options];
  }
  function apply(app, i18n2, ...options) {
    const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
    const useI18nComponentName = !!pluginOptions.useI18nComponentName;
    const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
    if (globalInstall && useI18nComponentName) {
      warn(getWarnMessage(11, {
        name: Translation.name
      }));
    }
    if (globalInstall) {
      app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
      app.component(NumberFormat.name, NumberFormat);
      app.component(DatetimeFormat.name, DatetimeFormat);
    }
    app.directive("t", vTDirective(i18n2));
  }
  const VUE_I18N_COMPONENT_TYPES = "vue-i18n: composer properties";
  let devtoolsApi;
  async function enableDevTools(app, i18n2) {
    return new Promise((resolve, reject) => {
      try {
        setupDevtoolsPlugin({
          id: "vue-devtools-plugin-vue-i18n",
          label: VueDevToolsLabels["vue-devtools-plugin-vue-i18n"],
          packageName: "vue-i18n",
          homepage: "https://vue-i18n.intlify.dev",
          logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
          componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
          app
        }, (api) => {
          devtoolsApi = api;
          api.on.visitComponentTree(({ componentInstance, treeNode }) => {
            updateComponentTreeTags(componentInstance, treeNode, i18n2);
          });
          api.on.inspectComponent(({ componentInstance, instanceData }) => {
            if (componentInstance.vnode.el.__VUE_I18N__ && instanceData) {
              if (i18n2.mode === "legacy") {
                if (componentInstance.vnode.el.__VUE_I18N__ !== i18n2.global.__composer) {
                  inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
                }
              } else {
                inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
              }
            }
          });
          api.addInspector({
            id: "vue-i18n-resource-inspector",
            label: VueDevToolsLabels["vue-i18n-resource-inspector"],
            icon: "language",
            treeFilterPlaceholder: VueDevToolsPlaceholders["vue-i18n-resource-inspector"]
          });
          api.on.getInspectorTree((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              registerScope(payload, i18n2);
            }
          });
          api.on.getInspectorState((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              inspectScope(payload, i18n2);
            }
          });
          api.on.editInspectorState((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              editScope(payload, i18n2);
            }
          });
          api.addTimelineLayer({
            id: "vue-i18n-timeline",
            label: VueDevToolsLabels["vue-i18n-timeline"],
            color: VueDevToolsTimelineColors["vue-i18n-timeline"]
          });
          resolve(true);
        });
      } catch (e) {
        console.error(e);
        reject(false);
      }
    });
  }
  function updateComponentTreeTags(instance, treeNode, i18n2) {
    const global2 = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    if (instance && instance.vnode.el.__VUE_I18N__) {
      if (instance.vnode.el.__VUE_I18N__ !== global2) {
        const label = instance.type.name || instance.type.displayName || instance.type.__file;
        const tag = {
          label: `i18n (${label} Scope)`,
          textColor: 0,
          backgroundColor: 16764185
        };
        treeNode.tags.push(tag);
      }
    }
  }
  function inspectComposer(instanceData, composer) {
    const type = VUE_I18N_COMPONENT_TYPES;
    instanceData.state.push({
      type,
      key: "locale",
      editable: true,
      value: composer.locale.value
    });
    instanceData.state.push({
      type,
      key: "availableLocales",
      editable: false,
      value: composer.availableLocales
    });
    instanceData.state.push({
      type,
      key: "fallbackLocale",
      editable: true,
      value: composer.fallbackLocale.value
    });
    instanceData.state.push({
      type,
      key: "inheritLocale",
      editable: true,
      value: composer.inheritLocale
    });
    instanceData.state.push({
      type,
      key: "messages",
      editable: false,
      value: getLocaleMessageValue(composer.messages.value)
    });
    instanceData.state.push({
      type,
      key: "datetimeFormats",
      editable: false,
      value: composer.datetimeFormats.value
    });
    instanceData.state.push({
      type,
      key: "numberFormats",
      editable: false,
      value: composer.numberFormats.value
    });
  }
  function getLocaleMessageValue(messages2) {
    const value = {};
    Object.keys(messages2).forEach((key) => {
      const v2 = messages2[key];
      if (isFunction(v2) && "source" in v2) {
        value[key] = getMessageFunctionDetails(v2);
      } else if (isObject$1(v2)) {
        value[key] = getLocaleMessageValue(v2);
      } else {
        value[key] = v2;
      }
    });
    return value;
  }
  const ESC = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "&": "&amp;"
  };
  function escape$1(s2) {
    return s2.replace(/[<>"&]/g, escapeChar);
  }
  function escapeChar(a2) {
    return ESC[a2] || a2;
  }
  function getMessageFunctionDetails(func) {
    const argString = func.source ? `("${escape$1(func.source)}")` : `(?)`;
    return {
      _custom: {
        type: "function",
        display: `<span>\u0192</span> ${argString}`
      }
    };
  }
  function registerScope(payload, i18n2) {
    payload.rootNodes.push({
      id: "global",
      label: "Global Scope"
    });
    const global2 = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    for (const [keyInstance, instance] of i18n2.__instances) {
      const composer = i18n2.mode === "composition" ? instance : instance.__composer;
      if (global2 === composer) {
        continue;
      }
      const label = keyInstance.type.name || keyInstance.type.displayName || keyInstance.type.__file;
      payload.rootNodes.push({
        id: composer.id.toString(),
        label: `${label} Scope`
      });
    }
  }
  function getComposer$1(nodeId, i18n2) {
    if (nodeId === "global") {
      return i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    } else {
      const instance = Array.from(i18n2.__instances.values()).find((item) => item.id.toString() === nodeId);
      if (instance) {
        return i18n2.mode === "composition" ? instance : instance.__composer;
      } else {
        return null;
      }
    }
  }
  function inspectScope(payload, i18n2) {
    const composer = getComposer$1(payload.nodeId, i18n2);
    if (composer) {
      payload.state = makeScopeInspectState(composer);
    }
  }
  function makeScopeInspectState(composer) {
    const state2 = {};
    const localeType = "Locale related info";
    const localeStates = [
      {
        type: localeType,
        key: "locale",
        editable: true,
        value: composer.locale.value
      },
      {
        type: localeType,
        key: "fallbackLocale",
        editable: true,
        value: composer.fallbackLocale.value
      },
      {
        type: localeType,
        key: "availableLocales",
        editable: false,
        value: composer.availableLocales
      },
      {
        type: localeType,
        key: "inheritLocale",
        editable: true,
        value: composer.inheritLocale
      }
    ];
    state2[localeType] = localeStates;
    const localeMessagesType = "Locale messages info";
    const localeMessagesStates = [
      {
        type: localeMessagesType,
        key: "messages",
        editable: false,
        value: getLocaleMessageValue(composer.messages.value)
      }
    ];
    state2[localeMessagesType] = localeMessagesStates;
    const datetimeFormatsType = "Datetime formats info";
    const datetimeFormatsStates = [
      {
        type: datetimeFormatsType,
        key: "datetimeFormats",
        editable: false,
        value: composer.datetimeFormats.value
      }
    ];
    state2[datetimeFormatsType] = datetimeFormatsStates;
    const numberFormatsType = "Datetime formats info";
    const numberFormatsStates = [
      {
        type: numberFormatsType,
        key: "numberFormats",
        editable: false,
        value: composer.numberFormats.value
      }
    ];
    state2[numberFormatsType] = numberFormatsStates;
    return state2;
  }
  function addTimelineEvent(event, payload) {
    if (devtoolsApi) {
      let groupId;
      if (payload && "groupId" in payload) {
        groupId = payload.groupId;
        delete payload.groupId;
      }
      devtoolsApi.addTimelineEvent({
        layerId: "vue-i18n-timeline",
        event: {
          title: event,
          groupId,
          time: Date.now(),
          meta: {},
          data: payload || {},
          logType: event === "compile-error" ? "error" : event === "fallback" || event === "missing" ? "warning" : "default"
        }
      });
    }
  }
  function editScope(payload, i18n2) {
    const composer = getComposer$1(payload.nodeId, i18n2);
    if (composer) {
      const [field] = payload.path;
      if (field === "locale" && isString(payload.state.value)) {
        composer.locale.value = payload.state.value;
      } else if (field === "fallbackLocale" && (isString(payload.state.value) || isArray(payload.state.value) || isObject$1(payload.state.value))) {
        composer.fallbackLocale.value = payload.state.value;
      } else if (field === "inheritLocale" && isBoolean(payload.state.value)) {
        composer.inheritLocale = payload.state.value;
      }
    }
  }
  function defineMixin(vuei18n, composer, i18n2) {
    return {
      beforeCreate() {
        const instance = vue.getCurrentInstance();
        if (!instance) {
          throw createI18nError(22);
        }
        const options = this.$options;
        if (options.i18n) {
          const optionsI18n = options.i18n;
          if (options.__i18n) {
            optionsI18n.__i18n = options.__i18n;
          }
          optionsI18n.__root = composer;
          if (this === this.$root) {
            this.$i18n = mergeToRoot(vuei18n, optionsI18n);
          } else {
            optionsI18n.__injectWithOption = true;
            this.$i18n = createVueI18n(optionsI18n);
          }
        } else if (options.__i18n) {
          if (this === this.$root) {
            this.$i18n = mergeToRoot(vuei18n, options);
          } else {
            this.$i18n = createVueI18n({
              __i18n: options.__i18n,
              __injectWithOption: true,
              __root: composer
            });
          }
        } else {
          this.$i18n = vuei18n;
        }
        vuei18n.__onComponentInstanceCreated(this.$i18n);
        i18n2.__setInstance(instance, this.$i18n);
        this.$t = (...args) => this.$i18n.t(...args);
        this.$rt = (...args) => this.$i18n.rt(...args);
        this.$tc = (...args) => this.$i18n.tc(...args);
        this.$te = (key, locale) => this.$i18n.te(key, locale);
        this.$d = (...args) => this.$i18n.d(...args);
        this.$n = (...args) => this.$i18n.n(...args);
        this.$tm = (key) => this.$i18n.tm(key);
      },
      mounted() {
        {
          this.$el.__VUE_I18N__ = this.$i18n.__composer;
          const emitter = this.__v_emitter = createEmitter();
          const _vueI18n = this.$i18n;
          _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
          emitter.on("*", addTimelineEvent);
        }
      },
      beforeUnmount() {
        const instance = vue.getCurrentInstance();
        if (!instance) {
          throw createI18nError(22);
        }
        {
          if (this.__v_emitter) {
            this.__v_emitter.off("*", addTimelineEvent);
            delete this.__v_emitter;
          }
          const _vueI18n = this.$i18n;
          _vueI18n.__disableEmitter && _vueI18n.__disableEmitter();
          delete this.$el.__VUE_I18N__;
        }
        delete this.$t;
        delete this.$rt;
        delete this.$tc;
        delete this.$te;
        delete this.$d;
        delete this.$n;
        delete this.$tm;
        i18n2.__deleteInstance(instance);
        delete this.$i18n;
      }
    };
  }
  function mergeToRoot(root, options) {
    root.locale = options.locale || root.locale;
    root.fallbackLocale = options.fallbackLocale || root.fallbackLocale;
    root.missing = options.missing || root.missing;
    root.silentTranslationWarn = options.silentTranslationWarn || root.silentFallbackWarn;
    root.silentFallbackWarn = options.silentFallbackWarn || root.silentFallbackWarn;
    root.formatFallbackMessages = options.formatFallbackMessages || root.formatFallbackMessages;
    root.postTranslation = options.postTranslation || root.postTranslation;
    root.warnHtmlInMessage = options.warnHtmlInMessage || root.warnHtmlInMessage;
    root.escapeParameterHtml = options.escapeParameterHtml || root.escapeParameterHtml;
    root.sync = options.sync || root.sync;
    root.__composer[SetPluralRulesSymbol](options.pluralizationRules || root.pluralizationRules);
    const messages2 = getLocaleMessages(root.locale, {
      messages: options.messages,
      __i18n: options.__i18n
    });
    Object.keys(messages2).forEach((locale) => root.mergeLocaleMessage(locale, messages2[locale]));
    if (options.datetimeFormats) {
      Object.keys(options.datetimeFormats).forEach((locale) => root.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
    }
    if (options.numberFormats) {
      Object.keys(options.numberFormats).forEach((locale) => root.mergeNumberFormat(locale, options.numberFormats[locale]));
    }
    return root;
  }
  function createI18n(options = {}) {
    const __legacyMode = isBoolean(options.legacy) ? options.legacy : true;
    const __globalInjection = !!options.globalInjection;
    const __instances = /* @__PURE__ */ new Map();
    const __global = __legacyMode ? createVueI18n(options) : createComposer(options);
    const symbol = makeSymbol("vue-i18n");
    const i18n2 = {
      get mode() {
        return __legacyMode ? "legacy" : "composition";
      },
      async install(app, ...options2) {
        {
          app.__VUE_I18N__ = i18n2;
        }
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n2);
        if (!__legacyMode && __globalInjection) {
          injectGlobalFields(app, i18n2.global);
        }
        {
          apply(app, i18n2, ...options2);
        }
        if (__legacyMode) {
          app.mixin(defineMixin(__global, __global.__composer, i18n2));
        }
        {
          const ret = await enableDevTools(app, i18n2);
          if (!ret) {
            throw createI18nError(21);
          }
          const emitter = createEmitter();
          if (__legacyMode) {
            const _vueI18n = __global;
            _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
          } else {
            const _composer = __global;
            _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
          }
          emitter.on("*", addTimelineEvent);
        }
      },
      get global() {
        return __global;
      },
      __instances,
      __getInstance(component) {
        return __instances.get(component) || null;
      },
      __setInstance(component, instance) {
        __instances.set(component, instance);
      },
      __deleteInstance(component) {
        __instances.delete(component);
      }
    };
    return i18n2;
  }
  function useI18n(options = {}) {
    const instance = vue.getCurrentInstance();
    if (instance == null) {
      throw createI18nError(16);
    }
    if (!instance.appContext.app.__VUE_I18N_SYMBOL__) {
      throw createI18nError(17);
    }
    const i18n2 = vue.inject(instance.appContext.app.__VUE_I18N_SYMBOL__);
    if (!i18n2) {
      throw createI18nError(22);
    }
    const global2 = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    const scope = isEmptyObject(options) ? "__i18n" in instance.type ? "local" : "global" : !options.useScope ? "local" : options.useScope;
    if (scope === "global") {
      let messages2 = isObject$1(options.messages) ? options.messages : {};
      if ("__i18nGlobal" in instance.type) {
        messages2 = getLocaleMessages(global2.locale.value, {
          messages: messages2,
          __i18n: instance.type.__i18nGlobal
        });
      }
      const locales = Object.keys(messages2);
      if (locales.length) {
        locales.forEach((locale) => {
          global2.mergeLocaleMessage(locale, messages2[locale]);
        });
      }
      if (isObject$1(options.datetimeFormats)) {
        const locales2 = Object.keys(options.datetimeFormats);
        if (locales2.length) {
          locales2.forEach((locale) => {
            global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
          });
        }
      }
      if (isObject$1(options.numberFormats)) {
        const locales2 = Object.keys(options.numberFormats);
        if (locales2.length) {
          locales2.forEach((locale) => {
            global2.mergeNumberFormat(locale, options.numberFormats[locale]);
          });
        }
      }
      return global2;
    }
    if (scope === "parent") {
      let composer2 = getComposer(i18n2, instance, options.__useComponent);
      if (composer2 == null) {
        {
          warn(getWarnMessage(12));
        }
        composer2 = global2;
      }
      return composer2;
    }
    if (i18n2.mode === "legacy") {
      throw createI18nError(18);
    }
    const i18nInternal = i18n2;
    let composer = i18nInternal.__getInstance(instance);
    if (composer == null) {
      const type = instance.type;
      const composerOptions = assign({}, options);
      if (type.__i18n) {
        composerOptions.__i18n = type.__i18n;
      }
      if (global2) {
        composerOptions.__root = global2;
      }
      composer = createComposer(composerOptions);
      setupLifeCycle(i18nInternal, instance, composer);
      i18nInternal.__setInstance(instance, composer);
    }
    return composer;
  }
  function getComposer(i18n2, target, useComponent = false) {
    let composer = null;
    const root = target.root;
    let current = target.parent;
    while (current != null) {
      const i18nInternal = i18n2;
      if (i18n2.mode === "composition") {
        composer = i18nInternal.__getInstance(current);
      } else {
        const vueI18n = i18nInternal.__getInstance(current);
        if (vueI18n != null) {
          composer = vueI18n.__composer;
        }
        if (useComponent && composer && !composer[InejctWithOption]) {
          composer = null;
        }
      }
      if (composer != null) {
        break;
      }
      if (root === current) {
        break;
      }
      current = current.parent;
    }
    return composer;
  }
  function setupLifeCycle(i18n2, target, composer) {
    let emitter = null;
    vue.onMounted(() => {
      if (target.vnode.el) {
        target.vnode.el.__VUE_I18N__ = composer;
        emitter = createEmitter();
        const _composer = composer;
        _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
        emitter.on("*", addTimelineEvent);
      }
    }, target);
    vue.onUnmounted(() => {
      if (target.vnode.el && target.vnode.el.__VUE_I18N__) {
        emitter && emitter.off("*", addTimelineEvent);
        const _composer = composer;
        _composer[DisableEmitter] && _composer[DisableEmitter]();
        delete target.vnode.el.__VUE_I18N__;
      }
      i18n2.__deleteInstance(target);
    }, target);
  }
  const globalExportProps = [
    "locale",
    "fallbackLocale",
    "availableLocales"
  ];
  const globalExportMethods = ["t", "rt", "d", "n", "tm"];
  function injectGlobalFields(app, composer) {
    const i18n2 = /* @__PURE__ */ Object.create(null);
    globalExportProps.forEach((prop) => {
      const desc = Object.getOwnPropertyDescriptor(composer, prop);
      if (!desc) {
        throw createI18nError(22);
      }
      const wrap = vue.isRef(desc.value) ? {
        get() {
          return desc.value.value;
        },
        set(val) {
          desc.value.value = val;
        }
      } : {
        get() {
          return desc.get && desc.get();
        }
      };
      Object.defineProperty(i18n2, prop, wrap);
    });
    app.config.globalProperties.$i18n = i18n2;
    globalExportMethods.forEach((method) => {
      const desc = Object.getOwnPropertyDescriptor(composer, method);
      if (!desc || !desc.value) {
        throw createI18nError(22);
      }
      Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
    });
  }
  {
    initFeatureFlags();
  }
  {
    const target = getGlobalThis();
    target.__INTLIFY__ = true;
    setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
  }
  const { i18n: { enable: i18nEnable } } = uniStarterConfig;
  const messages = {
    "en": langEn,
    "zh-Hans": zhHans
  };
  let currentLang;
  if (i18nEnable) {
    currentLang = uni.getStorageSync("CURRENT_LANG");
  } else {
    currentLang = "zh-Hans";
  }
  if (!currentLang) {
    if (uni.getLocale) {
      formatAppLog("log", "at lang/i18n.js:18", "\u83B7\u53D6\u5E94\u7528\u8BED\u8A00:", uni.getLocale());
      let language = "en";
      if (uni.getLocale() != "en") {
        language = "zh-Hans";
      }
      uni.setStorageSync("CURRENT_LANG", language);
      currentLang = language;
    } else {
      uni.getSystemInfo({
        success: function(res2) {
          formatAppLog("log", "at lang/i18n.js:28", "\u83B7\u53D6\u8BBE\u5907\u4FE1\u606F:", res2);
          let language = "zh-Hans";
          if (res2.language == "en") {
            language = "en";
          }
          uni.setStorageSync("CURRENT_LANG", language);
          currentLang = language;
        },
        fail: (err) => {
          formatAppLog("error", "at lang/i18n.js:37", err);
        }
      });
    }
  }
  let i18nConfig = {
    locale: currentLang,
    messages
  };
  const i18n = createI18n(i18nConfig);
  if (i18nEnable) {
    formatAppLog("log", "at lang/i18n.js:65", `
	\u4F60\u5DF2\u5F00\u542F\u591A\u8BED\u8A00\u56FD\u9645\u5316\uFF0C\u5C06\u81EA\u52A8\u6839\u636E\u8BED\u8A00\u83B7\u53D6\u3010lang/en.js\u3011\u6216\u3010lang/en.js\u3011\u6587\u4EF6\u4E2D\u914D\u7F6E\u7684tabbar\u7684\u503C\uFF0C
	\u8986\u76D6\u4F60\u5728pages.json\u4E2D\u7684tabbar\u7684\u503C
	\u5982\u679C\u4F60\u4E0D\u9700\u8981\u591A\u8BED\u8A00\u56FD\u9645\u5316\uFF0C\u8BF7\u6253\u5F00\u914D\u7F6E\u6587\u4EF6uni-starter.config.js\u627E\u5230 -> i18n -> enable\u628A\u503C\u8BBE\u7F6E\u4E3Afalse
`);
    let initLanguageAfter = () => {
      function $i18n(e) {
        return i18n.global.messages[i18n.global.locale][e];
      }
      setTimeout(function() {
        $i18n("tabbar").split(",").forEach((text, index) => {
          uni.setTabBarItem({
            index,
            text,
            complete: (e) => {
            }
          });
        });
      }, 1);
      let agreementsTitle = $i18n("agreementsTitle").split(",");
      let agreements = uniStarterConfig.about.agreements;
      agreements[0].title = agreementsTitle[0];
      agreements[1].title = agreementsTitle[1];
      uniStarterConfig.about.agreements = agreements;
    };
    initLanguageAfter();
    uni.$on("changeLanguage", (e) => {
      formatAppLog("log", "at lang/i18n.js:99", "changeLanguage", e);
      initLanguageAfter();
    });
  }
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(i18n);
    app.use(store);
    return { app };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
