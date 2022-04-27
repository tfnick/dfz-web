"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // ../../../../../../Users/mac/Projects/WEB/dfz-web/dfz-web/unpackage/dist/dev/.nvue/unicloud-db.js
  var import_vue = __toESM(require_vue());

  // ../../../../../../Users/mac/Projects/WEB/dfz-web/dfz-web/unpackage/dist/dev/.nvue/plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../../../../Users/mac/Projects/WEB/dfz-web/dfz-web/unpackage/dist/dev/.nvue/unicloud-db.js
  var __defProp2 = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp2.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
  Object.freeze({});
  Object.freeze([]);
  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  var hasOwn$1 = (val, key) => hasOwnProperty$1.call(val, key);
  var isString = (val) => typeof val === "string";
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var UNI_SSR = "__uniSSR";
  var UNI_SSR_DATA = "data";
  var UNI_SSR_GLOBAL_DATA = "globalData";
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k2, p2) {
    switch (toRawType(p2)) {
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
      const type2 = toTypeString(v2).toLowerCase();
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
          const vType = toRawType(v2).toUpperCase();
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
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  var isArray = Array.isArray;
  var isObject = (val) => val !== null && typeof val === "object";
  var defaultDelimiters = ["{", "}"];
  var BaseFormatter = class {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  };
  var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
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
    const mode = isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
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
  var LOCALE_ZH_HANS = "zh-Hans";
  var LOCALE_ZH_HANT = "zh-Hant";
  var LOCALE_EN = "en";
  var LOCALE_FR = "fr";
  var LOCALE_ES = "es";
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages22) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages22 && messages22[locale]) {
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
  var I18n = class {
    constructor({ locale, fallbackLocale, messages: messages22, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages22 || {};
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
            if (!hasOwn(curMessages, key)) {
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
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  };
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
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
  function initVueI18n(locale, messages22 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages22] = [
        messages22,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages22,
      watcher
    });
    let t22 = (key, values) => {
      if (typeof getApp !== "function") {
        t22 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t22 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t22(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t22(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  function t$1(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function n(e, t22, n2) {
    return e(n2 = { path: t22, exports: {}, require: function(e2, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(t3 == null && n2.path);
    } }, n2.exports), n2.exports;
  }
  var s = n(function(e, t22) {
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
  });
  var r = (n(function(e, t22) {
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
  }), n(function(e, t22) {
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
  }), n(function(e, t22) {
    e.exports = s.HmacMD5;
  }));
  var o = "FUNCTION";
  var i = "OBJECT";
  var a = "CLIENT_DB";
  function c(e) {
    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
  }
  function u(e) {
    return c(e) === "object";
  }
  function h(e) {
    return e && typeof e == "string" ? JSON.parse(e) : e;
  }
  var l = true;
  var d = "app";
  var f = h('{\n    "address": [\n        "127.0.0.1",\n        "192.168.1.199"\n    ],\n    "debugPort": 51401,\n    "initialLaunchType": "remote",\n    "servePort": 51402,\n    "skipFiles": [\n        "<node_internals>/**/*.js",\n        "/Applications/HBuilderX.app/Contents/HBuilderX/plugins/unicloud/**/*.js"\n    ]\n}\n');
  var p = h('[{"provider":"aliyun","spaceName":"uni-dfz-dev","spaceId":"544a5364-586c-4c57-b5ed-feb12a030343","clientSecret":"omGMZnMek+a+XQ8YM2rKEA==","endpoint":"https://api.bspapp.com"}]');
  var m = "";
  try {
    m = "__UNI__C0C2D81";
  } catch (e) {
  }
  var y = {};
  function _(e, t22 = {}) {
    var n2, s2;
    return n2 = y, s2 = e, Object.prototype.hasOwnProperty.call(n2, s2) || (y[e] = t22), y[e];
  }
  var w = ["invoke", "success", "fail", "complete"];
  var k = _("_globalUniCloudInterceptor");
  function v(e, t22) {
    k[e] || (k[e] = {}), u(t22) && Object.keys(t22).forEach((n2) => {
      w.indexOf(n2) > -1 && function(e2, t3, n3) {
        let s2 = k[e2][t3];
        s2 || (s2 = k[e2][t3] = []), s2.indexOf(n3) === -1 && typeof n3 == "function" && s2.push(n3);
      }(e, n2, t22[n2]);
    });
  }
  function S(e, t22) {
    k[e] || (k[e] = {}), u(t22) ? Object.keys(t22).forEach((n2) => {
      w.indexOf(n2) > -1 && function(e2, t3, n3) {
        const s2 = k[e2][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e, n2, t22[n2]);
    }) : delete k[e];
  }
  function T(e, t22) {
    return e && e.length !== 0 ? e.reduce((e2, n2) => e2.then(() => n2(t22)), Promise.resolve()) : Promise.resolve();
  }
  function A(e, t22) {
    return k[e] && k[e][t22] || [];
  }
  function P(e, t22) {
    return t22 ? function(n2) {
      let s2, r2 = false;
      if (t22 === "callFunction") {
        const e2 = n2 && n2.type || o;
        r2 = e2 !== o;
      }
      s2 = this.isReady ? Promise.resolve() : this.initUniCloud, n2 = n2 || {};
      const i2 = s2.then(() => r2 ? Promise.resolve() : T(A(t22, "invoke"), n2)).then(() => e.call(this, n2)).then((e2) => r2 ? Promise.resolve(e2) : T(A(t22, "success"), e2).then(() => T(A(t22, "complete"), e2)).then(() => Promise.resolve(e2)), (e2) => r2 ? Promise.reject(e2) : T(A(t22, "fail"), e2).then(() => T(A(t22, "complete"), e2)).then(() => Promise.reject(e2)));
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
  var I = class extends Error {
    constructor(e) {
      super(e.message), this.errMsg = e.message || "", this.errCode = this.code = e.code, this.requestId = e.requestId, Object.defineProperties(this, { message: { get() {
        return this.errMsg;
      }, set(e2) {
        this.errMsg = e2;
      } } });
    }
  };
  var b;
  function O() {
    const e = uni.getLocale && uni.getLocale() || "en";
    if (b)
      return __spreadProps(__spreadValues({}, b), { LOCALE: e });
    const { deviceId: t22, platform: n2 } = uni.getSystemInfoSync();
    return b = { PLATFORM: d, OS: n2, APPID: m, DEVICEID: t22, CLIENT_SDK_VERSION: "1.0.25" }, __spreadProps(__spreadValues({}, b), { LOCALE: e });
  }
  var E = { sign: function(e, t22) {
    let n2 = "";
    return Object.keys(e).sort().forEach(function(t3) {
      e[t3] && (n2 = n2 + "&" + t3 + "=" + e[t3]);
    }), n2 = n2.slice(1), r(n2, t22).toString();
  }, wrappedRequest: function(e, t22) {
    return new Promise((n2, s2) => {
      t22(Object.assign(e, { complete(e2) {
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
  var C = { request: (e) => uni.request(e), uploadFile: (e) => uni.uploadFile(e), setStorageSync: (e, t22) => uni.setStorageSync(e, t22), getStorageSync: (e) => uni.getStorageSync(e), removeStorageSync: (e) => uni.removeStorageSync(e), clearStorageSync: () => uni.clearStorageSync() };
  var U = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };
  var { t: x } = initVueI18n({ "zh-Hans": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, "zh-Hant": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, en: U, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: U }, "zh-Hans");
  var D = class {
    constructor(e) {
      ["spaceId", "clientSecret"].forEach((t22) => {
        if (!Object.prototype.hasOwnProperty.call(e, t22))
          throw new Error(x("uniCloud.init.paramRequired", { param: t22 }));
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
    request(e, t22) {
      return Promise.resolve().then(() => this.hasAccessToken ? t22 ? this.requestWrapped(e) : this.requestWrapped(e).catch((t3) => new Promise((e2, n2) => {
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
      const t22 = Object.assign({}, e);
      return t22.data.token = this.accessToken, t22.header["x-basement-token"] = this.accessToken, t22.header["x-serverless-sign"] = E.sign(t22.data, this.config.clientSecret), t22;
    }
    setupRequest(e, t22) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return t22 !== "auth" && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = E.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      if (this._getAccessTokenPromiseStatus === "pending")
        return this._getAccessTokenPromise;
      this._getAccessTokenPromiseStatus = "pending";
      return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e) => new Promise((t22, n2) => {
        e.result && e.result.accessToken ? (this.setAccessToken(e.result.accessToken), this._getAccessTokenPromiseStatus = "fulfilled", t22(this.accessToken)) : (this._getAccessTokenPromiseStatus = "rejected", n2(new I({ code: "AUTH_FAILED", message: "\u83B7\u53D6accessToken\u5931\u8D25" })));
      }), (e) => (this._getAccessTokenPromiseStatus = "rejected", Promise.reject(e))), this._getAccessTokenPromise;
    }
    authorize() {
      this.getAccessToken();
    }
    callFunction(e) {
      const t22 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };
      return this.request(this.setupRequest(t22));
    }
    getOSSUploadOptionsFromPath(e) {
      const t22 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t22));
    }
    uploadFileToOSS({ url: e, formData: t22, name: n2, filePath: s2, fileType: r2, onUploadProgress: o2 }) {
      return new Promise((i2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t22, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e2) {
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
      const t22 = { method: "serverless.file.resource.report", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t22));
    }
    uploadFile({ filePath: e, cloudPath: t22, fileType: n2 = "image", onUploadProgress: s2, config: r2 }) {
      if (c(t22) !== "string")
        throw new I({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
      if (!(t22 = t22.trim()))
        throw new I({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      if (/:\/\//.test(t22))
        throw new I({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
      const o2 = r2 && r2.envType || this.config.envType;
      let i2, a2;
      return this.getOSSUploadOptionsFromPath({ env: o2, filename: t22 }).then((t3) => {
        const r3 = t3.result;
        i2 = r3.id, a2 = "https://" + r3.cdnDomain + "/" + r3.ossPath;
        const o3 = { url: "https://" + r3.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: r3.accessKeyId, Signature: r3.signature, host: r3.host, id: i2, key: r3.ossPath, policy: r3.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, o3, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ id: i2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e, fileID: a2 }) : s3(new I({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t22 = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };
      return this.request(this.setupRequest(t22));
    }
    getTempFileURL({ fileList: e } = {}) {
      return new Promise((t22, n2) => {
        Array.isArray(e) && e.length !== 0 || n2(new I({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" })), t22({ fileList: e.map((e2) => ({ fileID: e2, tempFileURL: e2 })) });
      });
    }
  };
  var q = { init(e) {
    const t22 = new D(e), n2 = { signInAnonymously: function() {
      return t22.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t22.auth = function() {
      return n2;
    }, t22.customAuth = t22.auth, t22;
  } };
  var R = typeof location != "undefined" && location.protocol === "http:" ? "http:" : "https:";
  var L;
  !function(e) {
    e.local = "local", e.none = "none", e.session = "session";
  }(L || (L = {}));
  var F = function() {
  };
  var N = () => {
    let e;
    if (!Promise) {
      e = () => {
      }, e.promise = {};
      const t3 = () => {
        throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');
      };
      return Object.defineProperty(e.promise, "then", { get: t3 }), Object.defineProperty(e.promise, "catch", { get: t3 }), e;
    }
    const t22 = new Promise((t3, n2) => {
      e = (e2, s2) => e2 ? n2(e2) : t3(s2);
    });
    return e.promise = t22, e;
  };
  function $(e) {
    return e === void 0;
  }
  function j(e) {
    return Object.prototype.toString.call(e) === "[object Null]";
  }
  var M;
  function B(e) {
    const t22 = (n2 = e, Object.prototype.toString.call(n2) === "[object Array]" ? e : [e]);
    var n2;
    for (const e2 of t22) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e2;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e) {
    e.WEB = "web", e.WX_MP = "wx_mp";
  }(M || (M = {}));
  var K = { adapter: null, runtime: void 0 };
  var H = ["anonymousUuidKey"];
  var W = class extends F {
    constructor() {
      super(), K.adapter.root.tcbObject || (K.adapter.root.tcbObject = {});
    }
    setItem(e, t22) {
      K.adapter.root.tcbObject[e] = t22;
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
  };
  function z(e, t22) {
    switch (e) {
      case "local":
        return t22.localStorage || new W();
      case "none":
        return new W();
      default:
        return t22.sessionStorage || new W();
    }
  }
  var J = class {
    constructor(e) {
      if (!this._storage) {
        this._persistence = K.adapter.primaryStorage || e.persistence, this._storage = z(this._persistence, K.adapter);
        const t22 = `access_token_${e.env}`, n2 = `access_token_expire_${e.env}`, s2 = `refresh_token_${e.env}`, r2 = `anonymous_uuid_${e.env}`, o2 = `login_type_${e.env}`, i2 = `user_info_${e.env}`;
        this.keys = { accessTokenKey: t22, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: o2, userInfoKey: i2 };
      }
    }
    updatePersistence(e) {
      if (e === this._persistence)
        return;
      const t22 = this._persistence === "local";
      this._persistence = e;
      const n2 = z(e, K.adapter);
      for (const e2 in this.keys) {
        const s2 = this.keys[e2];
        if (t22 && H.includes(e2))
          continue;
        const r2 = this._storage.getItem(s2);
        $(r2) || j(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e, t22, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t22 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e, r2);
      } catch (e2) {
        throw e2;
      }
    }
    getStore(e, t22) {
      try {
        if (!this._storage)
          return;
      } catch (e2) {
        return "";
      }
      t22 = t22 || "localCachev1";
      const n2 = this._storage.getItem(e);
      if (!n2)
        return "";
      if (n2.indexOf(t22) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e) {
      this._storage.removeItem(e);
    }
  };
  var V = {};
  var Y = {};
  function X(e) {
    return V[e];
  }
  var G = class {
    constructor(e, t22) {
      this.data = t22 || null, this.name = e;
    }
  };
  var Q = class extends G {
    constructor(e, t22) {
      super("error", { error: e, data: t22 }), this.error = e;
    }
  };
  var Z = new class {
    constructor() {
      this._listeners = {};
    }
    on(e, t22) {
      return function(e2, t3, n2) {
        n2[e2] = n2[e2] || [], n2[e2].push(t3);
      }(e, t22, this._listeners), this;
    }
    off(e, t22) {
      return function(e2, t3, n2) {
        if (n2 && n2[e2]) {
          const s2 = n2[e2].indexOf(t3);
          s2 !== -1 && n2[e2].splice(s2, 1);
        }
      }(e, t22, this._listeners), this;
    }
    fire(e, t22) {
      if (e instanceof Q)
        return console.error(e.error), this;
      const n2 = typeof e == "string" ? new G(e, t22 || {}) : e;
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
  function ee(e, t22) {
    Z.on(e, t22);
  }
  function te(e, t22 = {}) {
    Z.fire(e, t22);
  }
  function ne(e, t22) {
    Z.off(e, t22);
  }
  var se = "loginStateChanged";
  var re = "loginStateExpire";
  var oe = "loginTypeChanged";
  var ie = "anonymousConverted";
  var ae = "refreshAccessToken";
  var ce;
  !function(e) {
    e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
  }(ce || (ce = {}));
  var ue = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"];
  var he = { "X-SDK-Version": "1.3.5" };
  function le(e, t22, n2) {
    const s2 = e[t22];
    e[t22] = function(t3) {
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
  var fe = class {
    constructor(e = {}) {
      var t22;
      this.config = e, this._reqClass = new K.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `\u8BF7\u6C42\u5728${this.config.timeout / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD`, restrictedMethods: ["post"] }), this._cache = X(this.config.env), this._localCache = (t22 = this.config.env, Y[t22]), le(this._reqClass, "post", [de]), le(this._reqClass, "upload", [de]), le(this._reqClass, "download", [de]);
    }
    post(e) {
      return __async(this, null, function* () {
        return yield this._reqClass.post(e);
      });
    }
    upload(e) {
      return __async(this, null, function* () {
        return yield this._reqClass.upload(e);
      });
    }
    download(e) {
      return __async(this, null, function* () {
        return yield this._reqClass.download(e);
      });
    }
    refreshAccessToken() {
      return __async(this, null, function* () {
        let e, t22;
        this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
        try {
          e = yield this._refreshAccessTokenPromise;
        } catch (e2) {
          t22 = e2;
        }
        if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t22)
          throw t22;
        return e;
      });
    }
    _refreshAccessToken() {
      return __async(this, null, function* () {
        const { accessTokenKey: e, accessTokenExpireKey: t22, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
        this._cache.removeStore(e), this._cache.removeStore(t22);
        let o2 = this._cache.getStore(n2);
        if (!o2)
          throw new Error("\u672A\u767B\u5F55CloudBase");
        const i2 = { refresh_token: o2 }, a2 = yield this.request("auth.fetchAccessTokenWithRefreshToken", i2);
        if (a2.data.code) {
          const { code: e2 } = a2.data;
          if (e2 === "SIGN_PARAM_INVALID" || e2 === "REFRESH_TOKEN_EXPIRED" || e2 === "INVALID_REFRESH_TOKEN") {
            if (this._cache.getStore(s2) === ce.ANONYMOUS && e2 === "INVALID_REFRESH_TOKEN") {
              const e3 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = yield this.send("auth.signInAnonymously", { anonymous_uuid: e3, refresh_token: t3 });
              return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
            }
            te(re), this._cache.removeStore(n2);
          }
          throw new Error(`\u5237\u65B0access token\u5931\u8D25\uFF1A${a2.data.code}`);
        }
        if (a2.data.access_token)
          return te(ae), this._cache.setStore(e, a2.data.access_token), this._cache.setStore(t22, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
        a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
      });
    }
    getAccessToken() {
      return __async(this, null, function* () {
        const { accessTokenKey: e, accessTokenExpireKey: t22, refreshTokenKey: n2 } = this._cache.keys;
        if (!this._cache.getStore(n2))
          throw new Error("refresh token\u4E0D\u5B58\u5728\uFF0C\u767B\u5F55\u72B6\u6001\u5F02\u5E38");
        let s2 = this._cache.getStore(e), r2 = this._cache.getStore(t22), o2 = true;
        return this._shouldRefreshAccessTokenHook && !(yield this._shouldRefreshAccessTokenHook(s2, r2)) && (o2 = false), (!s2 || !r2 || r2 < Date.now()) && o2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
      });
    }
    request(e, t22, n2) {
      return __async(this, null, function* () {
        const s2 = `x-tcb-trace_${this.config.env}`;
        let r2 = "application/x-www-form-urlencoded";
        const o2 = __spreadValues({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t22);
        if (ue.indexOf(e) === -1) {
          const { refreshTokenKey: e2 } = this._cache.keys;
          this._cache.getStore(e2) && (o2.access_token = (yield this.getAccessToken()).accessToken);
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
        const { parse: u2, inQuery: h2, search: l2 } = t22;
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
        const p2 = yield this.post(__spreadValues({ url: f2, data: i2 }, a2)), g = p2.header && p2.header["x-tcb-trace"];
        if (g && this._localCache.setStore(s2, g), Number(p2.status) !== 200 && Number(p2.statusCode) !== 200 || !p2.data)
          throw new Error("network request error");
        return p2;
      });
    }
    send(_0) {
      return __async(this, arguments, function* (e, t22 = {}) {
        const n2 = yield this.request(e, t22, { onUploadProgress: t22.onUploadProgress });
        if (n2.data.code === "ACCESS_TOKEN_EXPIRED" && ue.indexOf(e) === -1) {
          yield this.refreshAccessToken();
          const n3 = yield this.request(e, t22, { onUploadProgress: t22.onUploadProgress });
          if (n3.data.code)
            throw new Error(`[${n3.data.code}] ${n3.data.message}`);
          return n3.data;
        }
        if (n2.data.code)
          throw new Error(`[${n2.data.code}] ${n2.data.message}`);
        return n2.data;
      });
    }
    setRefreshToken(e) {
      const { accessTokenKey: t22, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t22), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
  };
  var pe = {};
  function ge(e) {
    return pe[e];
  }
  var me = class {
    constructor(e) {
      this.config = e, this._cache = X(e.env), this._request = ge(e.env);
    }
    setRefreshToken(e) {
      const { accessTokenKey: t22, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t22), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
    setAccessToken(e, t22) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e), this._cache.setStore(s2, t22);
    }
    refreshUserInfo() {
      return __async(this, null, function* () {
        const { data: e } = yield this._request.send("auth.getUserInfo", {});
        return this.setLocalUserInfo(e), e;
      });
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t22 } = this._cache.keys;
      this._cache.setStore(t22, e);
    }
  };
  var ye = class {
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
    updatePassword(e, t22) {
      return this._request.send("auth.updatePassword", { oldPassword: t22, newPassword: e });
    }
    updateEmail(e) {
      return this._request.send("auth.updateEmail", { newEmail: e });
    }
    updateUsername(e) {
      if (typeof e != "string")
        throw new Error("username must be a string");
      return this._request.send("auth.updateUsername", { username: e });
    }
    getLinkedUidList() {
      return __async(this, null, function* () {
        const { data: e } = yield this._request.send("auth.getLinkedUidList", {});
        let t22 = false;
        const { users: n2 } = e;
        return n2.forEach((e2) => {
          e2.wxOpenId && e2.wxPublicId && (t22 = true);
        }), { users: n2, hasPrimaryUid: t22 };
      });
    }
    setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", { uid: e });
    }
    unlink(e) {
      return this._request.send("auth.unlink", { platform: e });
    }
    update(e) {
      return __async(this, null, function* () {
        const { nickName: t22, gender: n2, avatarUrl: s2, province: r2, country: o2, city: i2 } = e, { data: a2 } = yield this._request.send("auth.updateUserInfo", { nickName: t22, gender: n2, avatarUrl: s2, province: r2, country: o2, city: i2 });
        this.setLocalUserInfo(a2);
      });
    }
    refresh() {
      return __async(this, null, function* () {
        const { data: e } = yield this._request.send("auth.getUserInfo", {});
        return this.setLocalUserInfo(e), e;
      });
    }
    setUserInfo() {
      const { userInfoKey: e } = this._cache.keys, t22 = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e2) => {
        this[e2] = t22[e2];
      }), this.location = { country: t22.country, province: t22.province, city: t22.city };
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t22 } = this._cache.keys;
      this._cache.setStore(t22, e), this.setUserInfo();
    }
  };
  var _e = class {
    constructor(e) {
      if (!e)
        throw new Error("envId is not defined");
      this._cache = X(e);
      const { refreshTokenKey: t22, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t22), o2 = this._cache.getStore(n2), i2 = this._cache.getStore(s2);
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
  };
  var we = class extends me {
    signIn() {
      return __async(this, null, function* () {
        this._cache.updatePersistence("local");
        const { anonymousUuidKey: e, refreshTokenKey: t22 } = this._cache.keys, n2 = this._cache.getStore(e) || void 0, s2 = this._cache.getStore(t22) || void 0, r2 = yield this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
        if (r2.uuid && r2.refresh_token) {
          this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), yield this._request.refreshAccessToken(), te(se), te(oe, { env: this.config.env, loginType: ce.ANONYMOUS, persistence: "local" });
          const e2 = new _e(this.config.env);
          return yield e2.user.refresh(), e2;
        }
        throw new Error("\u533F\u540D\u767B\u5F55\u5931\u8D25");
      });
    }
    linkAndRetrieveDataWithTicket(e) {
      return __async(this, null, function* () {
        const { anonymousUuidKey: t22, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t22), r2 = this._cache.getStore(n2), o2 = yield this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e });
        if (o2.refresh_token)
          return this._clearAnonymousUUID(), this.setRefreshToken(o2.refresh_token), yield this._request.refreshAccessToken(), te(ie, { env: this.config.env }), te(oe, { loginType: ce.CUSTOM, persistence: "local" }), { credential: { refreshToken: o2.refresh_token } };
        throw new Error("\u533F\u540D\u8F6C\u5316\u5931\u8D25");
      });
    }
    _setAnonymousUUID(e) {
      const { anonymousUuidKey: t22, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t22), this._cache.setStore(t22, e), this._cache.setStore(n2, ce.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  };
  var ke = class extends me {
    signIn(e) {
      return __async(this, null, function* () {
        if (typeof e != "string")
          throw new Error("ticket must be a string");
        const { refreshTokenKey: t22 } = this._cache.keys, n2 = yield this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t22) || "" });
        if (n2.refresh_token)
          return this.setRefreshToken(n2.refresh_token), yield this._request.refreshAccessToken(), te(se), te(oe, { env: this.config.env, loginType: ce.CUSTOM, persistence: this.config.persistence }), yield this.refreshUserInfo(), new _e(this.config.env);
        throw new Error("\u81EA\u5B9A\u4E49\u767B\u5F55\u5931\u8D25");
      });
    }
  };
  var ve = class extends me {
    signIn(e, t22) {
      return __async(this, null, function* () {
        if (typeof e != "string")
          throw new Error("email must be a string");
        const { refreshTokenKey: n2 } = this._cache.keys, s2 = yield this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t22, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: o2, access_token_expire: i2 } = s2;
        if (r2)
          return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : yield this._request.refreshAccessToken(), yield this.refreshUserInfo(), te(se), te(oe, { env: this.config.env, loginType: ce.EMAIL, persistence: this.config.persistence }), new _e(this.config.env);
        throw s2.code ? new Error(`\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: [${s2.code}] ${s2.message}`) : new Error("\u90AE\u7BB1\u767B\u5F55\u5931\u8D25");
      });
    }
    activate(e) {
      return __async(this, null, function* () {
        return this._request.send("auth.activateEndUserMail", { token: e });
      });
    }
    resetPasswordWithToken(e, t22) {
      return __async(this, null, function* () {
        return this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t22 });
      });
    }
  };
  var Se = class extends me {
    signIn(e, t22) {
      return __async(this, null, function* () {
        if (typeof e != "string")
          throw new Error("username must be a string");
        typeof t22 != "string" && (t22 = "", console.warn("password is empty"));
        const { refreshTokenKey: n2 } = this._cache.keys, s2 = yield this._request.send("auth.signIn", { loginType: ce.USERNAME, username: e, password: t22, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: o2, access_token: i2 } = s2;
        if (r2)
          return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : yield this._request.refreshAccessToken(), yield this.refreshUserInfo(), te(se), te(oe, { env: this.config.env, loginType: ce.USERNAME, persistence: this.config.persistence }), new _e(this.config.env);
        throw s2.code ? new Error(`\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: [${s2.code}] ${s2.message}`) : new Error("\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25");
      });
    }
  };
  var Te = class {
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
    signInAnonymously() {
      return __async(this, null, function* () {
        return new we(this.config).signIn();
      });
    }
    signInWithEmailAndPassword(e, t22) {
      return __async(this, null, function* () {
        return new ve(this.config).signIn(e, t22);
      });
    }
    signInWithUsernameAndPassword(e, t22) {
      return new Se(this.config).signIn(e, t22);
    }
    linkAndRetrieveDataWithTicket(e) {
      return __async(this, null, function* () {
        this._anonymousAuthProvider || (this._anonymousAuthProvider = new we(this.config)), ee(ie, this._onAnonymousConverted);
        return yield this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
      });
    }
    signOut() {
      return __async(this, null, function* () {
        if (this.loginType === ce.ANONYMOUS)
          throw new Error("\u533F\u540D\u7528\u6237\u4E0D\u652F\u6301\u767B\u51FA\u64CD\u4F5C");
        const { refreshTokenKey: e, accessTokenKey: t22, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e);
        if (!s2)
          return;
        const r2 = yield this._request.send("auth.logout", { refresh_token: s2 });
        return this._cache.removeStore(e), this._cache.removeStore(t22), this._cache.removeStore(n2), te(se), te(oe, { env: this.config.env, loginType: ce.NULL, persistence: this.config.persistence }), r2;
      });
    }
    signUpWithEmailAndPassword(e, t22) {
      return __async(this, null, function* () {
        return this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t22 });
      });
    }
    sendPasswordResetEmail(e) {
      return __async(this, null, function* () {
        return this._request.send("auth.sendPasswordResetEmail", { email: e });
      });
    }
    onLoginStateChanged(e) {
      ee(se, () => {
        const t3 = this.hasLoginState();
        e.call(this, t3);
      });
      const t22 = this.hasLoginState();
      e.call(this, t22);
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
        const t22 = this.hasLoginState();
        e.call(this, t22);
      });
    }
    getAccessToken() {
      return __async(this, null, function* () {
        return { accessToken: (yield this._request.getAccessToken()).accessToken, env: this.config.env };
      });
    }
    hasLoginState() {
      const { refreshTokenKey: e } = this._cache.keys;
      return this._cache.getStore(e) ? new _e(this.config.env) : null;
    }
    isUsernameRegistered(e) {
      return __async(this, null, function* () {
        if (typeof e != "string")
          throw new Error("username must be a string");
        const { data: t22 } = yield this._request.send("auth.isUsernameRegistered", { username: e });
        return t22 && t22.isRegistered;
      });
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    signInWithTicket(e) {
      return __async(this, null, function* () {
        return new ke(this.config).signIn(e);
      });
    }
    shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e) => e.code ? e : __spreadProps(__spreadValues({}, e.data), { requestId: e.seqId }));
    }
    getAuthHeader() {
      const { refreshTokenKey: e, accessTokenKey: t22 } = this._cache.keys, n2 = this._cache.getStore(e);
      return { "x-cloudbase-credentials": this._cache.getStore(t22) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e) {
      const { env: t22 } = e.data;
      t22 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e) {
      const { loginType: t22, persistence: n2, env: s2 } = e.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t22));
    }
  };
  var Ae = function(e, t22) {
    t22 = t22 || N();
    const n2 = ge(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: o2, fileType: i2 = "image" } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: h2, cosFileId: l2 }, requestId: d2 } = e2, f2 = { key: s2, signature: c2, "x-cos-meta-fileid": l2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: f2, file: r2, name: s2, fileType: i2, onUploadProgress: o2 }).then((e3) => {
        e3.statusCode === 201 ? t22(null, { fileID: h2, requestId: d2 }) : t22(new Error(`STORAGE_REQUEST_FAIL: ${e3.data}`));
      }).catch((e3) => {
        t22(e3);
      });
    }).catch((e2) => {
      t22(e2);
    }), t22.promise;
  };
  var Pe = function(e, t22) {
    t22 = t22 || N();
    const n2 = ge(this.config.env), { cloudPath: s2 } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      t22(null, e2);
    }).catch((e2) => {
      t22(e2);
    }), t22.promise;
  };
  var Ie = function({ fileList: e }, t22) {
    if (t22 = t22 || N(), !e || !Array.isArray(e))
      return { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" };
    for (let t3 of e)
      if (!t3 || typeof t3 != "string")
        return { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" };
    const n2 = { fileid_list: e };
    return ge(this.config.env).send("storage.batchDeleteFile", n2).then((e2) => {
      e2.code ? t22(null, e2) : t22(null, { fileList: e2.data.delete_list, requestId: e2.requestId });
    }).catch((e2) => {
      t22(e2);
    }), t22.promise;
  };
  var be = function({ fileList: e }, t22) {
    t22 = t22 || N(), e && Array.isArray(e) || t22(null, { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" });
    let n2 = [];
    for (let s3 of e)
      typeof s3 == "object" ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t22(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5305\u542BfileID\u548CmaxAge\u7684\u5BF9\u8C61" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : typeof s3 == "string" ? n2.push({ fileid: s3 }) : t22(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5B57\u7B26\u4E32" });
    const s2 = { file_list: n2 };
    return ge(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e2) => {
      e2.code ? t22(null, e2) : t22(null, { fileList: e2.data.download_list, requestId: e2.requestId });
    }).catch((e2) => {
      t22(e2);
    }), t22.promise;
  };
  var Oe = function(_0, _1) {
    return __async(this, arguments, function* ({ fileID: e }, t22) {
      const n2 = (yield be.call(this, { fileList: [{ fileID: e, maxAge: 600 }] })).fileList[0];
      if (n2.code !== "SUCCESS")
        return t22 ? t22(n2) : new Promise((e2) => {
          e2(n2);
        });
      const s2 = ge(this.config.env);
      let r2 = n2.download_url;
      if (r2 = encodeURI(r2), !t22)
        return s2.download({ url: r2 });
      t22(yield s2.download({ url: r2 }));
    });
  };
  var Ee = function({ name: e, data: t22, query: n2, parse: s2, search: r2 }, o2) {
    const i2 = o2 || N();
    let a2;
    try {
      a2 = t22 ? JSON.stringify(t22) : "";
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
  };
  var Ce = { timeout: 15e3, persistence: "session" };
  var Ue = {};
  var xe = class {
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
      const t22 = e || K.adapter.primaryStorage || Ce.persistence;
      var n2;
      return t22 !== this.config.persistence && (this.config.persistence = t22), function(e2) {
        const { env: t3 } = e2;
        V[t3] = new J(e2), Y[t3] = new J(__spreadProps(__spreadValues({}, e2), { persistence: "local" }));
      }(this.config), n2 = this.config, pe[n2.env] = new fe(n2), this.authObj = new Te(this.config), this.authObj;
    }
    on(e, t22) {
      return ee.apply(this, [e, t22]);
    }
    off(e, t22) {
      return ne.apply(this, [e, t22]);
    }
    callFunction(e, t22) {
      return Ee.apply(this, [e, t22]);
    }
    deleteFile(e, t22) {
      return Ie.apply(this, [e, t22]);
    }
    getTempFileURL(e, t22) {
      return be.apply(this, [e, t22]);
    }
    downloadFile(e, t22) {
      return Oe.apply(this, [e, t22]);
    }
    uploadFile(e, t22) {
      return Ae.apply(this, [e, t22]);
    }
    getUploadMetadata(e, t22) {
      return Pe.apply(this, [e, t22]);
    }
    registerExtension(e) {
      Ue[e.name] = e;
    }
    invokeExtension(e, t22) {
      return __async(this, null, function* () {
        const n2 = Ue[e];
        if (!n2)
          throw Error(`\u6269\u5C55${e} \u5FC5\u987B\u5148\u6CE8\u518C`);
        return yield n2.invoke(t22, this);
      });
    }
    useAdapters(e) {
      const { adapter: t22, runtime: n2 } = B(e) || {};
      t22 && (K.adapter = t22), n2 && (K.runtime = n2);
    }
  };
  var De = new xe();
  function qe(e, t22, n2) {
    n2 === void 0 && (n2 = {});
    var s2 = /\?/.test(t22), r2 = "";
    for (var o2 in n2)
      r2 === "" ? !s2 && (t22 += "?") : r2 += "&", r2 += o2 + "=" + encodeURIComponent(n2[o2]);
    return /^http(s)?:\/\//.test(t22 += r2) ? t22 : "" + e + t22;
  }
  var Re = class {
    post(e) {
      const { url: t22, data: n2, headers: s2 } = e;
      return new Promise((e2, r2) => {
        C.request({ url: qe("https:", t22), data: n2, method: "POST", header: s2, success(t3) {
          e2(t3);
        }, fail(e3) {
          r2(e3);
        } });
      });
    }
    upload(e) {
      return new Promise((t22, n2) => {
        const { url: s2, file: r2, data: o2, headers: i2, fileType: a2 } = e, c2 = C.uploadFile({ url: qe("https:", s2), name: "file", formData: Object.assign({}, o2), filePath: r2, fileType: a2, header: i2, success(e2) {
          const n3 = { statusCode: e2.statusCode, data: e2.data || {} };
          e2.statusCode === 200 && o2.success_action_status && (n3.statusCode = parseInt(o2.success_action_status, 10)), t22(n3);
        }, fail(e2) {
          n2(new Error(e2.errMsg || "uploadFile:fail"));
        } });
        typeof e.onUploadProgress == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((t3) => {
          e.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  };
  var Le = { setItem(e, t22) {
    C.setStorageSync(e, t22);
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
  var Ne = De;
  var $e = Ne.init;
  Ne.init = function(e) {
    e.env = e.spaceId;
    const t22 = $e.call(this, e);
    t22.config.provider = "tencent", t22.config.spaceId = e.spaceId;
    const n2 = t22.auth;
    return t22.auth = function(e2) {
      const t3 = n2.call(this, e2);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e3) => {
        t3[e3] = P(t3[e3]).bind(t3);
      }), t3;
    }, t22.customAuth = t22.auth, t22;
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
      return new Promise((e, t22) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e(n2);
      });
    }
    setupRequest(e, t22) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      t22 !== "auth" && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = E.sign(n2, this.config.clientSecret);
      const r2 = O();
      s2["x-client-info"] = JSON.stringify(r2);
      const { token: o2 } = Be();
      return s2["x-client-token"] = o2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e, formData: t22, name: n2, filePath: s2, fileType: r2, onUploadProgress: o2 }) {
      return new Promise((i2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t22, name: n2, filePath: s2, fileType: r2, success(e2) {
          e2 && e2.statusCode < 400 ? i2(e2) : a2(new I({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new I({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        typeof o2 == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((e2) => {
          o2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e, cloudPath: t22, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t22)
        throw new I({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      let r2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t22 }).then((t3) => {
        const { url: o2, formData: i2, name: a2 } = t3.result;
        r2 = t3.result.fileUrl;
        const c2 = { url: o2, formData: i2, name: a2, filePath: e, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t22 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e, fileID: r2 }) : s3(new I({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t22 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t22));
    }
    getTempFileURL({ fileList: e } = {}) {
      const t22 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t22));
    }
  };
  var We = { init(e) {
    const t22 = new He(e), n2 = { signInAnonymously: function() {
      return t22.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t22.auth = function() {
      return n2;
    }, t22.customAuth = t22.auth, t22;
  } };
  function ze({ data: e }) {
    let t22;
    t22 = O();
    const n2 = JSON.parse(JSON.stringify(e || {}));
    if (Object.assign(n2, { clientInfo: t22 }), !n2.uniIdToken) {
      const { token: e2 } = Be();
      e2 && (n2.uniIdToken = e2);
    }
    return n2;
  }
  function Je({ name: e, data: t22 }) {
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
        return this._originCallFunction({ name: e, data: t22 });
      }
      return new Promise((e2, n4) => {
        const s4 = ze.call(this, { data: t22 });
        C.request({ method: "POST", url: a2, data: { provider: r2, platform: d, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new I({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e2({ result: s5 }), fail(e3) {
          n4(new I({ code: e3.code || e3.errCode || "SYS_ERR", message: e3.message || e3.errMsg || "request:fail" }));
        } });
      });
    });
  }
  var Ve = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "\uFF0C\u4E91\u51FD\u6570[{functionName}]\u5728\u4E91\u7AEF\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\u6B64\u4E91\u51FD\u6570\u540D\u79F0\u662F\u5426\u6B63\u786E\u4EE5\u53CA\u8BE5\u4E91\u51FD\u6570\u662F\u5426\u5DF2\u4E0A\u4F20\u5230\u670D\u52A1\u7A7A\u95F4", mode: "append" }];
  var Ye = /[\\^$.*+?()[\]{}|]/g;
  var Xe = RegExp(Ye.source);
  function Ge(e, t22, n2) {
    return e.replace(new RegExp((s2 = t22) && Xe.test(s2) ? s2.replace(Ye, "\\$&") : s2, "g"), n2);
    var s2;
  }
  function Qe({ functionName: e, result: t22, logPvd: n2 }) {
    if (this.config.useDebugFunction && t22 && t22.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t22.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Ze(e) {
    const t22 = e.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = ze.call(e, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider];
      return t22.call(this, n3).then((e2) => (Qe.call(this, { functionName: s2, result: e2, logPvd: r2 }), Promise.resolve(e2)), (e2) => (Qe.call(this, { functionName: s2, result: e2, logPvd: r2 }), e2 && e2.message && (e2.message = function({ message: e3 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
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
  var et = Symbol("CLIENT_DB_INTERNAL");
  function tt(e, t22) {
    return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = et, e.__v_raw = void 0, new Proxy(e, { get(e2, n2, s2) {
      if (n2 === "_uniClient")
        return null;
      if (n2 in e2 || typeof n2 != "string") {
        const t3 = e2[n2];
        return typeof t3 == "function" ? t3.bind(e2) : t3;
      }
      return t22.get(e2, n2, s2);
    } });
  }
  function nt(e) {
    return { on: (t22, n2) => {
      e[t22] = e[t22] || [], e[t22].indexOf(n2) > -1 || e[t22].push(n2);
    }, off: (t22, n2) => {
      e[t22] = e[t22] || [];
      const s2 = e[t22].indexOf(n2);
      s2 !== -1 && e[t22].splice(s2, 1);
    } };
  }
  var st = ["db.Geo", "db.command", "command.aggregate"];
  function rt(e, t22) {
    return st.indexOf(`${e}.${t22}`) > -1;
  }
  function ot(e) {
    switch (c(e = Me(e))) {
      case "array":
        return e.map((e2) => ot(e2));
      case "object":
        return e._internalType === et || Object.keys(e).forEach((t22) => {
          e[t22] = ot(e[t22]);
        }), e;
      case "regexp":
        return { $regexp: { source: e.source, flags: e.flags } };
      case "date":
        return { $date: e.toISOString() };
      default:
        return e;
    }
  }
  var it = class {
    constructor(e, t22, n2) {
      this.content = e, this.prevStage = t22 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e = this;
      const t22 = [e.content];
      for (; e.prevStage; )
        e = e.prevStage, t22.push(e.content);
      return { $db: t22.reverse().map((e2) => ({ $method: e2.$method, $param: ot(e2.$param) })) };
    }
    getAction() {
      const e = this.toJSON().$db.find((e2) => e2.$method === "action");
      return e && e.$param && e.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e) => e.$method !== "action") };
    }
    get useAggregate() {
      let e = this, t22 = false;
      for (; e.prevStage; ) {
        e = e.prevStage;
        const n2 = e.content.$method;
        if (n2 === "aggregate" || n2 === "pipeline") {
          t22 = true;
          break;
        }
      }
      return t22;
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
    _send(e, t22) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e, $param: ot(t22) }), l) {
        const e2 = s2.$db.find((e3) => e3.$method === "collection"), t3 = e2 && e2.$param;
        t3 && t3.length === 1 && typeof e2.$param[0] == "string" && e2.$param[0].indexOf(",") > -1 && console.warn("\u68C0\u6D4B\u5230\u4F7F\u7528JQL\u8BED\u6CD5\u8054\u8868\u67E5\u8BE2\u65F6\uFF0C\u672A\u4F7F\u7528getTemp\u5148\u8FC7\u6EE4\u4E3B\u8868\u6570\u636E\uFF0C\u5728\u4E3B\u8868\u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u67E5\u8BE2\u7F13\u6162\u3002\n- \u5982\u4F55\u4F18\u5316\u8BF7\u53C2\u8003\u6B64\u6587\u6863\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- \u5982\u679C\u4E3B\u8868\u6570\u636E\u91CF\u5F88\u5C0F\u8BF7\u5FFD\u7565\u6B64\u4FE1\u606F\uFF0C\u9879\u76EE\u53D1\u884C\u65F6\u4E0D\u4F1A\u51FA\u73B0\u6B64\u63D0\u793A\u3002");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  };
  function at(e, t22, n2) {
    return tt(new it(e, t22, n2), { get(e2, t3) {
      let s2 = "db";
      return e2 && e2.content && (s2 = e2.content.$method), rt(s2, t3) ? at({ $method: t3 }, e2, n2) : function() {
        return at({ $method: t3, $param: ot(Array.from(arguments)) }, e2, n2);
      };
    } });
  }
  function ct({ path: e, method: t22 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e.map((e2) => ({ $method: e2 })), { $method: t22, $param: this.param }] };
      }
    };
  }
  var ut = class extends class {
    constructor({ uniClient: e = {} } = {}) {
      this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e.isDefault && (this._dbCallBacks = _("_globalUniCloudDatabaseCallback")), this.auth = nt(this._authCallBacks), Object.assign(this, nt(this._dbCallBacks)), this.env = tt({}, { get: (e2, t22) => ({ $env: t22 }) }), this.Geo = tt({}, { get: (e2, t22) => ct({ path: ["Geo"], method: t22 }) }), this.serverDate = ct({ path: [], method: "serverDate" }), this.RegExp = ct({ path: [], method: "RegExp" });
    }
    getCloudEnv(e) {
      if (typeof e != "string" || !e.trim())
        throw new Error("getCloudEnv\u53C2\u6570\u9519\u8BEF");
      return { $env: e.replace("$cloudEnv_", "") };
    }
    _callback(e, t22) {
      const n2 = this._dbCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t22);
      });
    }
    _callbackAuth(e, t22) {
      const n2 = this._authCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t22);
      });
    }
    multiSend() {
      const e = Array.from(arguments), t22 = e.map((e2) => {
        const t3 = e2.getAction(), n2 = e2.getCommand();
        if (n2.$db[n2.$db.length - 1].$method !== "getTemp")
          throw new Error("multiSend\u53EA\u652F\u6301\u5B50\u547D\u4EE4\u5185\u4F7F\u7528getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t22, queryList: e });
    }
  } {
    _callCloudFunction({ action: e, command: t22, multiCommand: n2, queryList: s2 }) {
      function r2(e2, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && typeof r3.udb.setResult == "function" && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e2.result.dataList[n3]));
          }
      }
      const o2 = T(A("database", "invoke")), i2 = this._uniClient;
      return o2.then(() => i2.callFunction({ name: "DCloud-clientDB", type: a, data: { action: e, command: t22, multiCommand: n2 } })).then((e2) => {
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
  };
  function ht(e) {
    e.database = function(t22) {
      if (t22 && Object.keys(t22).length > 0)
        return e.init(t22).database();
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
  var lt;
  var dt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var ft = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function pt() {
    const e = Be().token || "", t22 = e.split(".");
    if (!e || t22.length !== 3)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t22[1], decodeURIComponent(lt(s2).split("").map(function(e2) {
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
    var t22;
    e += "==".slice(2 - (3 & e.length));
    for (var n2, s2, r2 = "", o2 = 0; o2 < e.length; )
      t22 = dt.indexOf(e.charAt(o2++)) << 18 | dt.indexOf(e.charAt(o2++)) << 12 | (n2 = dt.indexOf(e.charAt(o2++))) << 6 | (s2 = dt.indexOf(e.charAt(o2++))), r2 += n2 === 64 ? String.fromCharCode(t22 >> 16 & 255) : s2 === 64 ? String.fromCharCode(t22 >> 16 & 255, t22 >> 8 & 255) : String.fromCharCode(t22 >> 16 & 255, t22 >> 8 & 255, 255 & t22);
    return r2;
  } : atob;
  var gt = t$1(n(function(e, t22) {
    Object.defineProperty(t22, "__esModule", { value: true });
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
    t22.initChooseAndUploadFile = function(e2) {
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
  var mt = "manual";
  function yt(e) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e2 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t22) => {
          e2.push(this[t22]);
        }), e2;
      }, (e2, t22) => {
        if (this.loadtime === mt)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e2.length; r2++)
          e2[r2] !== t22[r2] && (s2.push(e2[r2]), n2 = true);
        e2[0] !== t22[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e2, t22) {
    }, mixinDatacomEasyGet({ getone: e2 = false, success: t22, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const o2 = e2 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = o2, t22 && t22(o2);
      }).catch((e3) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e3, n2 && n2(e3);
      }));
    }, mixinDatacomGet(t22 = {}) {
      let n2 = e.database(this.spaceInfo);
      const s2 = t22.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t22.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const o2 = t22.where || this.where;
      o2 && Object.keys(o2).length && (n2 = n2.where(o2));
      const i2 = t22.field || this.field;
      i2 && (n2 = n2.field(i2));
      const a2 = t22.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t22.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t22.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      (t22.distinct !== void 0 ? t22.distinct : this.distinct) === true && (n2 = n2.distinct());
      const h2 = t22.orderby || this.orderby;
      h2 && (n2 = n2.orderBy(h2));
      const l2 = t22.pageCurrent !== void 0 ? t22.pageCurrent : this.mixinDatacomPage.current, d2 = t22.pageSize !== void 0 ? t22.pageSize : this.mixinDatacomPage.size, f2 = t22.getcount !== void 0 ? t22.getcount : this.getcount, p2 = t22.gettree !== void 0 ? t22.gettree : this.gettree, g = t22.gettreepath !== void 0 ? t22.gettreepath : this.gettreepath, m2 = { getCount: f2 }, y2 = { limitLevel: t22.limitlevel !== void 0 ? t22.limitlevel : this.limitlevel, startWith: t22.startwith !== void 0 ? t22.startwith : this.startwith };
      return p2 && (m2.getTree = y2), g && (m2.getTreePath = y2), n2 = n2.skip(d2 * (l2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function _t(e) {
    return function(t22, n2 = {}) {
      n2 = function(e2, t3 = {}) {
        return e2.customUI = t3.customUI || e2.customUI, Object.assign(e2.loadingOptions, t3.loadingOptions), Object.assign(e2.errorOptions, t3.errorOptions), e2;
      }({ customUI: false, loadingOptions: { text: "\u52A0\u8F7D\u4E2D...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get: (n3, s3) => function n4(...c2) {
        return __async(this, null, function* () {
          let u2;
          a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
          try {
            u2 = yield e.callFunction({ name: t22, type: i, data: { method: s3, params: c2 } });
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
                  const { confirm: e3 } = yield function() {
                    return __async(this, arguments, function* ({ title: e4, content: t3, showCancel: n5, cancelText: s4, confirmText: r3 } = {}) {
                      return new Promise((o3, i2) => {
                        uni.showModal({ title: e4, content: t3, showCancel: n5, cancelText: s4, confirmText: r3, success(e5) {
                          o3(e5);
                        }, fail() {
                          o3({ confirm: false, cancel: true });
                        } });
                      });
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
        });
      } });
    };
  }
  function wt(e, t22) {
    return __async(this, null, function* () {
      const n2 = `http://${e}:${t22}/system/ping`;
      try {
        const e2 = yield (s2 = { url: n2, timeout: 500 }, new Promise((e3, t3) => {
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
    });
  }
  function kt(e) {
    if (e.initUniCloudStatus && e.initUniCloudStatus !== "rejected")
      return;
    let t22 = Promise.resolve();
    var n2;
    n2 = 1, t22 = new Promise((e2, t3) => {
      setTimeout(() => {
        e2();
      }, n2);
    }), e.isReady = false, e.isDefault = false;
    const s2 = e.auth();
    e.initUniCloudStatus = "pending", e.initUniCloud = t22.then(() => s2.getLoginState()).then((e2) => e2 ? Promise.resolve() : s2.signInAnonymously()).then(() => {
      if (e.debugInfo) {
        const { address: t3, servePort: n3 } = e.debugInfo;
        return function(e2, t4) {
          return __async(this, null, function* () {
            let n4;
            for (let s3 = 0; s3 < e2.length; s3++) {
              const r2 = e2[s3];
              if (yield wt(r2, t4)) {
                n4 = r2;
                break;
              }
            }
            return { address: n4, port: t4 };
          });
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
  var vt = new class {
    init(e) {
      let t22 = {};
      const n2 = e.debugFunction !== false && l && d === "app-plus";
      switch (e.provider) {
        case "tencent":
          t22 = je.init(Object.assign(e, { useDebugFunction: n2 }));
          break;
        case "aliyun":
          t22 = q.init(Object.assign(e, { useDebugFunction: n2 }));
          break;
        case "private":
          t22 = We.init(Object.assign(e, { useDebugFunction: n2 }));
          break;
        default:
          throw new Error("\u672A\u63D0\u4F9B\u6B63\u786E\u7684provider\u53C2\u6570");
      }
      const s2 = f;
      s2 && !s2.code && (t22.debugInfo = s2), kt(t22), t22.reInit = function() {
        kt(this);
      }, Ze(t22), function(e2) {
        const t3 = e2.uploadFile;
        e2.uploadFile = function(e3) {
          return t3.call(this, e3);
        };
      }(t22), ht(t22), function(e2) {
        e2.getCurrentUserInfo = pt, e2.chooseAndUploadFile = gt.initChooseAndUploadFile(e2), Object.assign(e2, { get mixinDatacom() {
          return yt(e2);
        } }), e2.importObject = _t(e2);
      }(t22);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e2) => {
        if (!t22[e2])
          return;
        const n3 = t22[e2];
        t22[e2] = function() {
          return t22.reInit(), n3.apply(t22, Array.from(arguments));
        }, t22[e2] = P(t22[e2], e2).bind(t22);
      }), t22.init = this.init, t22;
    }
  }();
  (() => {
    {
      const e = p;
      let t22 = {};
      if (e.length === 1)
        t22 = e[0], vt = vt.init(t22), vt.isDefault = true;
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
  function getSSRDataType() {
    return (0, import_vue.getCurrentInstance)() ? UNI_SSR_DATA : UNI_SSR_GLOBAL_DATA;
  }
  function assertKey(key, shallow = false) {
    if (!key) {
      throw new Error(`${shallow ? "shallowSsrRef" : "ssrRef"}: You must provide a key.`);
    }
  }
  var ssrClientRef = (value, key, shallow = false) => {
    const valRef = shallow ? (0, import_vue.shallowRef)(value) : (0, import_vue.ref)(value);
    if (typeof window === "undefined") {
      return valRef;
    }
    const __uniSSR = window[UNI_SSR];
    if (!__uniSSR) {
      return valRef;
    }
    const type = getSSRDataType();
    assertKey(key, shallow);
    if (hasOwn$1(__uniSSR[type], key)) {
      valRef.value = __uniSSR[type][key];
      if (type === UNI_SSR_DATA) {
        delete __uniSSR[type][key];
      }
    }
    return valRef;
  };
  var ssrRef = (value, key) => {
    return ssrClientRef(value, key);
  };
  var shallowSsrRef = (value, key) => {
    return ssrClientRef(value, key, true);
  };
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }
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
  var iconUrl = "/uni_modules/uni-icons/components/uni-icons/uniicons.ttf";
  var _style_0$3 = { "uni-icons": { "": { "fontFamily": "uniicons", "textDecoration": "none", "textAlign": "center" } } };
  var getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "uniicons",
    "src": "url('" + iconUrl + "')"
  });
  var _sfc_main$4 = {
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
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
      style: (0, import_vue.normalizeStyle)({ color: $props.color, "font-size": $options.iconSize }),
      class: "uni-icons",
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, (0, import_vue.toDisplayString)($options.unicode), 5);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["styles", [_style_0$3]], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  var _style_0$2 = { "uni-badge--x": { "": { "position": "relative" } }, "uni-badge--absolute": { "": { "position": "absolute" } }, "uni-badge--small": { "": { "transform": "scale(0.8)", "transformOrigin": "center center" } }, "uni-badge": { "": { "justifyContent": "center", "flexDirection": "row", "height": 20, "lineHeight": 18, "color": "#ffffff", "borderRadius": 100, "backgroundColor": "rgba(0,0,0,0)", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#ffffff", "textAlign": "center", "fontFamily": '"Helvetica Neue", Helvetica, sans-serif', "fontSize": 12 } }, "uni-badge--info": { "": { "color": "#ffffff", "backgroundColor": "#909399" } }, "uni-badge--primary": { "": { "backgroundColor": "#2979ff" } }, "uni-badge--success": { "": { "backgroundColor": "#4cd964" } }, "uni-badge--warning": { "": { "backgroundColor": "#f0ad4e" } }, "uni-badge--error": { "": { "backgroundColor": "#dd524d" } }, "uni-badge--inverted": { "": { "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 0, "color": "#909399" } }, "uni-badge--info-inverted": { "": { "color": "#909399", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--primary-inverted": { "": { "color": "#2979ff", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--success-inverted": { "": { "color": "#4cd964", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--warning-inverted": { "": { "color": "#f0ad4e", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--error-inverted": { "": { "color": "#dd524d", "backgroundColor": "rgba(0,0,0,0)" } } };
  var _sfc_main$3 = {
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
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", { class: "uni-badge--x" }, [
      (0, import_vue.renderSlot)(_ctx.$slots, "default"),
      $props.text ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
        key: 0,
        class: (0, import_vue.normalizeClass)([$options.classNames, "uni-badge"]),
        style: (0, import_vue.normalizeStyle)([$options.badgeWidth, $options.positionStyle, $props.customStyle, $options.dotStyle]),
        onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
      }, (0, import_vue.toDisplayString)($options.displayValue), 7)) : (0, import_vue.createCommentVNode)("v-if", true)
    ]);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["styles", [_style_0$2]], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
  var _style_0$1 = { "uni-list-item": { "": { "fontSize": 16, "position": "relative", "justifyContent": "space-between", "alignItems": "center", "backgroundColor": "#ffffff", "flexDirection": "row" } }, "uni-list-item--disabled": { "": { "opacity": 0.3 } }, "uni-list-item--hover": { "": { "backgroundColor": "#f1f1f1" } }, "uni-list-item__container": { "": { "position": "relative", "flexDirection": "row", "paddingTop": 12, "paddingRight": 15, "paddingBottom": 12, "paddingLeft": 15, "flex": 1, "overflow": "hidden" } }, "container--right": { "": { "paddingRight": 0 } }, "uni-list--border": { "": { "position": "absolute", "top": 0, "right": 0, "left": 0, "borderTopColor": "#e5e5e5", "borderTopStyle": "solid", "borderTopWidth": 0.5 } }, "uni-list-item__content": { "": { "paddingRight": 8, "flex": 1, "color": "#3b4144", "flexDirection": "column", "justifyContent": "space-between", "overflow": "hidden" } }, "uni-list-item__content--center": { "": { "justifyContent": "center" } }, "uni-list-item__content-title": { "": { "fontSize": 14, "color": "#3b4144", "overflow": "hidden" } }, "uni-list-item__content-note": { "": { "marginTop": "6rpx", "color": "#999999", "fontSize": 12, "overflow": "hidden" } }, "uni-list-item__extra": { "": { "flexDirection": "row", "justifyContent": "flex-end", "alignItems": "center" } }, "uni-list-item__header": { "": { "flexDirection": "row", "alignItems": "center" } }, "uni-list-item__icon": { "": { "marginRight": "18rpx", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "uni-list-item__icon-img": { "": { "height": 26, "width": 26, "marginRight": 10 } }, "uni-icon-wrapper": { "": { "alignItems": "center", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10 } }, "flex--direction": { "": { "flexDirection": "column" } }, "uni-list--lg": { "": { "height": 40, "width": 40 } }, "uni-list--base": { "": { "height": 26, "width": 26 } }, "uni-list--sm": { "": { "height": 20, "width": 20 } }, "uni-list-item__extra-text": { "": { "color": "#999999", "fontSize": 12 } }, "uni-ellipsis-1": { "": { "lines": 1, "textOverflow": "ellipsis" } }, "uni-ellipsis-2": { "": { "lines": 2, "textOverflow": "ellipsis" } } };
  var _sfc_main$2 = {
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
          success: (res) => {
            this.$emit("click", {
              data: res
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
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom((0, import_vue.resolveDynamicComponent)("uni-icons"), __easycom_0);
    const _component_uni_badge = resolveEasycom((0, import_vue.resolveDynamicComponent)("uni-badge"), __easycom_1);
    const _component_switch = (0, import_vue.resolveComponent)("switch");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", null, [
      (0, import_vue.createElementVNode)("view", {
        class: (0, import_vue.normalizeClass)([{ "uni-list-item--disabled": $props.disabled }, "uni-list-item"]),
        hoverClass: !$props.clickable && !$props.link || $props.disabled || $props.showSwitch ? "" : "uni-list-item--hover",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        !$data.isFirstChild ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
          key: 0,
          class: (0, import_vue.normalizeClass)(["border--left", { "uni-list--border": $props.border }])
        }, null, 2)) : (0, import_vue.createCommentVNode)("v-if", true),
        (0, import_vue.createElementVNode)("view", {
          class: (0, import_vue.normalizeClass)(["uni-list-item__container", { "container--right": $props.showArrow || $props.link, "flex--direction": $props.direction === "column" }])
        }, [
          (0, import_vue.renderSlot)(_ctx.$slots, "header", {}, () => [
            (0, import_vue.createElementVNode)("view", { class: "uni-list-item__header" }, [
              $props.thumb ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                key: 0,
                class: "uni-list-item__icon"
              }, [
                (0, import_vue.createElementVNode)("u-image", {
                  src: $props.thumb,
                  class: (0, import_vue.normalizeClass)(["uni-list-item__icon-img", ["uni-list--" + $props.thumbSize]])
                }, null, 10, ["src"])
              ])) : $props.showExtraIcon ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                key: 1,
                class: "uni-list-item__icon"
              }, [
                (0, import_vue.createVNode)(_component_uni_icons, {
                  color: $props.extraIcon.color,
                  size: $props.extraIcon.size,
                  type: $props.extraIcon.type
                }, null, 8, ["color", "size", "type"])
              ])) : (0, import_vue.createCommentVNode)("v-if", true)
            ])
          ]),
          (0, import_vue.renderSlot)(_ctx.$slots, "body", {}, () => [
            (0, import_vue.createElementVNode)("view", {
              class: (0, import_vue.normalizeClass)(["uni-list-item__content", { "uni-list-item__content--center": $props.thumb || $props.showExtraIcon || $props.showBadge || $props.showSwitch }])
            }, [
              $props.title ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
                key: 0,
                class: (0, import_vue.normalizeClass)(["uni-list-item__content-title", [$props.ellipsis !== 0 && $props.ellipsis <= 2 ? "uni-ellipsis-" + $props.ellipsis : ""]])
              }, (0, import_vue.toDisplayString)($props.title), 3)) : (0, import_vue.createCommentVNode)("v-if", true),
              $props.note ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
                key: 1,
                class: "uni-list-item__content-note"
              }, (0, import_vue.toDisplayString)($props.note), 1)) : (0, import_vue.createCommentVNode)("v-if", true)
            ], 2)
          ]),
          (0, import_vue.renderSlot)(_ctx.$slots, "footer", {}, () => [
            $props.rightText || $props.showBadge || $props.showSwitch ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
              key: 0,
              class: (0, import_vue.normalizeClass)(["uni-list-item__extra", { "flex--justify": $props.direction === "column" }])
            }, [
              $props.rightText ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
                key: 0,
                class: "uni-list-item__extra-text"
              }, (0, import_vue.toDisplayString)($props.rightText), 1)) : (0, import_vue.createCommentVNode)("v-if", true),
              $props.showBadge ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_uni_badge, {
                key: 1,
                type: $props.badgeType,
                text: $props.badgeText
              }, null, 8, ["type", "text"])) : (0, import_vue.createCommentVNode)("v-if", true),
              $props.showSwitch ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_switch, {
                key: 2,
                disabled: $props.disabled,
                checked: $props.switchChecked,
                onChange: $options.onSwitchChange
              }, null, 8, ["disabled", "checked", "onChange"])) : (0, import_vue.createCommentVNode)("v-if", true)
            ], 2)) : (0, import_vue.createCommentVNode)("v-if", true)
          ])
        ], 2),
        $props.showArrow || $props.link ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_uni_icons, {
          key: 1,
          size: 16,
          class: "uni-icon-wrapper",
          color: "#bbb",
          type: "arrowright"
        })) : (0, import_vue.createCommentVNode)("v-if", true)
      ], 10, ["hoverClass"])
    ]);
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$1]], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue"]]);
  var _style_0 = { "uni-list": { "": { "backgroundColor": "#ffffff", "position": "relative", "flexDirection": "column" } }, "uni-list--border": { "": { "position": "relative", "borderTopColor": "#e5e5e5", "borderTopStyle": "solid", "borderTopWidth": 0.5, "borderBottomColor": "#e5e5e5", "borderBottomStyle": "solid", "borderBottomWidth": 0.5, "zIndex": -1 } } };
  var _sfc_main$1 = {
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
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("list", {
      class: (0, import_vue.normalizeClass)(["uni-list", { "uni-list--border": $props.border }]),
      enableBackToTop: $props.enableBackToTop,
      loadmoreoffset: "15"
    }, [
      (0, import_vue.renderSlot)(_ctx.$slots, "default")
    ], 10, ["enableBackToTop"]);
  }
  var __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-list/components/uni-list/uni-list.vue"]]);
  var en = {
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
  var zhHans = {
    "uniCloud.component.add.success": "\u65B0\u589E\u6210\u529F",
    "uniCloud.component.update.success": "\u4FEE\u6539\u6210\u529F",
    "uniCloud.component.remove.showModal.title": "\u63D0\u793A",
    "uniCloud.component.remove.showModal.content": "\u662F\u5426\u5220\u9664\u8BE5\u6570\u636E"
  };
  var zhHant = {
    "uniCloud.component.add.success": "\u65B0\u589E\u6210\u529F",
    "uniCloud.component.update.success": "\u4FEE\u6539\u6210\u529F",
    "uniCloud.component.remove.showModal.title": "\u63D0\u793A",
    "uniCloud.component.remove.showModal.content": "\u662F\u5426\u522A\u9664\u6578\u64DA"
  };
  var messages = {
    en,
    es,
    fr,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  var { t } = initVueI18n(messages);
  var events = {
    load: "load",
    error: "error"
  };
  var pageMode = {
    add: "add",
    replace: "replace"
  };
  var loadMode = {
    auto: "auto",
    onready: "onready",
    manual: "manual"
  };
  var attrs = [
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
  var _sfc_main = {
    name: "UniClouddb",
    setup(props) {
      const dataListRef = props.getone ? shallowSsrRef(void 0, "xPuXDrLFoCd8LkFkA5cBtA==") : ssrRef([], "LNPRcRPOTQ2akGFgCU6oRQ==");
      const instance = (0, import_vue.getCurrentInstance)();
      (0, import_vue.onMounted)(() => {
        if ((!dataListRef.value || dataListRef.value.length === 0) && !props.manual && props.loadtime === loadMode.auto) {
          instance.proxy.loadData();
        }
      });
      return { dataList: dataListRef };
    },
    serverPrefetch() {
      return __async(this, null, function* () {
        if (!this.manual && this.loadtime === loadMode.auto) {
          return this.loadData();
        }
      });
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
        let db = St.database(this.spaceInfo);
        if (action) {
          db = db.action(action);
        }
        db.collection(this.mainCollection).add(value).then((res) => {
          success && success(res);
          if (showToast) {
            uni.showToast({
              title: toastTitle || t("uniCloud.component.add.success")
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
          title: confirmTitle || t("uniCloud.component.remove.showModal.title"),
          content: confirmContent || t("uniCloud.component.remove.showModal.content"),
          showCancel: true,
          success: (res) => {
            if (!res.confirm) {
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
        let db = St.database(this.spaceInfo);
        if (action) {
          db = db.action(action);
        }
        return db.collection(this.mainCollection).doc(id).update(value).then((res) => {
          success && success(res);
          if (showToast) {
            uni.showToast({
              title: toastTitle || t("uniCloud.component.update.success")
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
        let db = St.database(this.spaceInfo);
        if (this.action) {
          db = db.action(this.action);
        }
        db = db.collection(...this.collectionArgs);
        if (this.foreignKey) {
          db = db.foreignKey(this.foreignKey);
        }
        if (!(!this.where || !Object.keys(this.where).length)) {
          db = db.where(this.where);
        }
        if (this.field) {
          db = db.field(this.field);
        }
        if (this.groupby) {
          db = db.groupBy(this.groupby);
        }
        if (this.groupField) {
          db = db.groupField(this.groupField);
        }
        if (this.distinct === true) {
          db = db.distinct();
        }
        if (this.orderby) {
          db = db.orderBy(this.orderby);
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
        db = db.skip(size * (current - 1)).limit(size);
        if (isTemp) {
          db = db.getTemp(getOptions);
          db.udb = this;
        } else {
          db = db.get(getOptions);
        }
        return db;
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
        return this._getExec().then((res) => {
          this.loading = false;
          this._execLoadDataSuccess(res.result, callback, clear);
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
        const db = St.database(this.spaceInfo);
        const dbCmd = db.command;
        let exec = db;
        if (action) {
          exec = exec.action(action);
        }
        exec.collection(this.mainCollection).where({
          _id: dbCmd.in(ids)
        }).remove().then((res) => {
          success && success(res.result);
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
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", null, [
      (0, import_vue.renderSlot)(_ctx.$slots, "default", {
        options: $props.options,
        data: $setup.dataList,
        pagination: $data.paginationInternal,
        loading: $data.loading,
        hasMore: $data.hasMore,
        error: $data.errorMessage
      })
    ]);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.vue"]]);

  // ../../../../../../Users/mac/Projects/WEB/dfz-web/dfz-web/unpackage/dist/dev/.nvue/pages/list/search/search.js
  var import_vue2 = __toESM(require_vue());
  var en2 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  var zhHans2 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9"
  };
  var zhHant2 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "\u8ACB\u8F38\u5165\u641C\u7D22\u5167\u5BB9"
  };
  var messages2 = {
    en: en2,
    "zh-Hans": zhHans2,
    "zh-Hant": zhHant2
  };
  var _style_0$12 = { "uni-searchbar": { "": { "flexDirection": "row", "position": "relative", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10 } }, "uni-searchbar__box": { "": { "overflow": "hidden", "position": "relative", "flex": 1, "justifyContent": "center", "flexDirection": "row", "alignItems": "center", "height": 36, "paddingTop": 5, "paddingRight": 8, "paddingBottom": 5, "paddingLeft": 0 } }, "uni-searchbar__box-icon-search": { "": { "flexDirection": "row", "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "justifyContent": "center", "alignItems": "center", "color": "#B3B3B3" } }, "uni-searchbar__box-search-input": { "": { "flex": 1, "fontSize": 14, "color": "#333333" } }, "uni-searchbar__box-icon-clear": { "": { "alignItems": "center", "lineHeight": 24, "paddingLeft": 8 } }, "uni-searchbar__text-placeholder": { "": { "fontSize": 14, "color": "#B3B3B3", "marginLeft": 5 } }, "uni-searchbar__cancel": { "": { "paddingLeft": 10, "lineHeight": 36, "fontSize": 14, "color": "#333333" } } };
  var { t: t2 } = initVueI18n(messages2);
  var _sfc_main$12 = {
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
        return this.cancelText || t2("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t2("uni-search-bar.placeholder");
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
  function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-icons"), __easycom_0);
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", { class: "uni-searchbar" }, [
      (0, import_vue2.createElementVNode)("view", {
        style: (0, import_vue2.normalizeStyle)({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
        class: "uni-searchbar__box",
        onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
      }, [
        (0, import_vue2.createElementVNode)("view", { class: "uni-searchbar__box-icon-search" }, [
          (0, import_vue2.renderSlot)(_ctx.$slots, "searchIcon", {}, () => [
            (0, import_vue2.createVNode)(_component_uni_icons, {
              color: "#c0c4cc",
              size: "18",
              type: "search"
            })
          ])
        ]),
        $data.show || $data.searchVal ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-input", {
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
        }, null, 40, ["focus", "placeholder", "maxlength", "modelValue"])) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
          key: 1,
          class: "uni-searchbar__text-placeholder"
        }, (0, import_vue2.toDisplayString)($props.placeholder), 1)),
        $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
          key: 2,
          class: "uni-searchbar__box-icon-clear",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
        }, [
          (0, import_vue2.renderSlot)(_ctx.$slots, "clearIcon", {}, () => [
            (0, import_vue2.createVNode)(_component_uni_icons, {
              color: "#c0c4cc",
              size: "20",
              type: "clear"
            })
          ])
        ])) : (0, import_vue2.createCommentVNode)("v-if", true)
      ], 4),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
        key: 0,
        onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
        class: "uni-searchbar__cancel"
      }, (0, import_vue2.toDisplayString)($options.cancelTextI18n), 1)) : (0, import_vue2.createCommentVNode)("v-if", true)
    ]);
  }
  var __easycom_12 = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$12], ["styles", [_style_0$12]], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  var _style_02 = { "status-bar": { "": { "backgroundColor": "#ffffff" } }, "container": { "": { "flex": 1, "backgroundColor": "#f7f7f7" } }, "search-body": { "": { "backgroundColor": "#ffffff", "borderBottomRightRadius": 10, "borderBottomLeftRadius": 10 } }, "flex-center": { "": { "justifyContent": "center", "alignItems": "center" } }, "flex-row": { "": { "flexDirection": "row" } }, "uni-searchbar": { "": { "paddingLeft": 0 } }, "uni-searchbar__box": { "": { "borderWidth": 0 } }, "uni-input-placeholder": { "": { "fontSize": "28rpx" } }, "search-container": { "": { "height": 52, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "position": "relative", "backgroundColor": "#ffffff" } }, "search-container-bar": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "position": "absolute", "top": 0, "left": 0, "right": 0 } }, "search-associative": { "": { "position": "absolute", "top": 52, "left": 0, "right": 0, "bottom": 0, "backgroundColor": "#ffffff", "marginTop": "10rpx", "paddingLeft": "10rpx", "paddingRight": "10rpx" } }, "search-icons": { "": { "paddingTop": "16rpx", "paddingRight": "16rpx", "paddingBottom": "16rpx", "paddingLeft": "16rpx" } }, "word-display": { "": { "fontSize": "26rpx", "color": "#666666" } }, "word-container": { "": { "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx" } }, "word-container_header": { "": { "height": "72rpx", "lineHeight": "72rpx", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "word-container_header-text": { "": { "color": "#3e3e3e", "fontSize": "30rpx", "fontWeight": "bold" } }, "word-container_body": { "": { "flexWrap": "wrap", "flexDirection": "row" } }, "word-container_body-text": { "": { "fontSize": "26rpx", "color": "#666666", "justifyContent": "center", "alignItems": "center", "backgroundColor": "#f6f6f6", "paddingTop": "10rpx", "paddingRight": "20rpx", "paddingBottom": "10rpx", "paddingLeft": "20rpx", "marginTop": "20rpx", "marginRight": "30rpx", "marginBottom": 0, "marginLeft": 0, "borderRadius": "30rpx", "textAlign": "center" } }, "word-container_body-info": { "": { "flex": 1, "textAlign": "center", "fontSize": "26rpx", "color": "#808080", "marginTop": "20rpx" } } };
  var searchLogDbName = "opendb-search-log";
  var mallGoodsDbName = "opendb-news-articles";
  var associativeSearchField = "title";
  var associativeField = "_id,title";
  var localSearchListKey = "__local_search_history";
  var arrUnique = (arr) => {
    for (let i2 = arr.length - 1; i2 >= 0; i2--) {
      const curIndex = arr.indexOf(arr[i2]);
      const lastIndex = arr.lastIndexOf(arr[i2]);
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
  var _sfc_main2 = {
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
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-icons"), __easycom_0);
    const _component_uni_search_bar = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-search-bar"), __easycom_12);
    const _component_unicloud_db = resolveEasycom((0, import_vue2.resolveDynamicComponent)("unicloud-db"), __easycom_2);
    const _component_uni_list_item = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-list-item"), __easycom_3);
    const _component_uni_list = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-list"), __easycom_4);
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "container" }, [
        (0, import_vue2.createElementVNode)("view", { class: "search-container" }, [
          (0, import_vue2.createCommentVNode)(" \u641C\u7D22\u6846 "),
          (0, import_vue2.createElementVNode)("view", { class: "search-container-bar" }, [
            (0, import_vue2.createVNode)(_component_uni_icons, {
              class: "search-icons",
              color: $data.iconColor,
              size: "22",
              type: "mic-filled",
              onClick: $options.speech
            }, null, 8, ["color", "onClick"]),
            (0, import_vue2.createCommentVNode)(` :cancelText="keyBoardPopup ? '\u53D6\u6D88' : '\u641C\u7D22'" `),
            (0, import_vue2.createVNode)(_component_uni_search_bar, {
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
        (0, import_vue2.createElementVNode)("view", { class: "search-body" }, [
          (0, import_vue2.createCommentVNode)(" \u641C\u7D22\u5386\u53F2 "),
          $data.localSearchList.length ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
            key: 0,
            class: "word-container"
          }, [
            (0, import_vue2.createElementVNode)("view", { class: "word-container_header" }, [
              (0, import_vue2.createElementVNode)("u-text", { class: "word-container_header-text" }, "\u641C\u7D22\u5386\u53F2"),
              !$data.localSearchListDel ? ((0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_uni_icons, {
                key: 0,
                onClick: _cache[1] || (_cache[1] = ($event) => $data.localSearchListDel = true),
                class: "search-icons",
                style: { "padding-right": "0" },
                color: $data.iconColor,
                size: "18",
                type: "trash"
              }, null, 8, ["color"])) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                key: 1,
                class: "flex-center flex-row",
                style: { "font-weight": "500", "justify-content": "space-between" }
              }, [
                (0, import_vue2.createElementVNode)("u-text", {
                  style: { "font-size": "22rpx", "color": "#666", "padding-top": "4rpx", "padding-bottom": "4rpx", "padding-right": "20rpx" },
                  onClick: _cache[2] || (_cache[2] = (...args) => $options.LocalSearchListClear && $options.LocalSearchListClear(...args))
                }, "\u5168\u90E8\u5220\u9664"),
                (0, import_vue2.createElementVNode)("u-text", {
                  style: { "font-size": "22rpx", "color": "#c0402b", "padding-top": "4rpx", "padding-bottom": "4rpx", "padding-left": "20rpx" },
                  onClick: _cache[3] || (_cache[3] = ($event) => $data.localSearchListDel = false)
                }, "\u5B8C\u6210")
              ]))
            ]),
            (0, import_vue2.createElementVNode)("view", { class: "word-container_body" }, [
              ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(import_vue2.Fragment, null, (0, import_vue2.renderList)($data.localSearchList, (word, index) => {
                return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                  class: "flex-center flex-row word-container_body-text",
                  key: index,
                  onClick: ($event) => $options.LocalSearchlistItemClick(word, index)
                }, [
                  ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
                    class: "word-display",
                    key: word
                  }, (0, import_vue2.toDisplayString)(word), 1)),
                  $data.localSearchListDel ? ((0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_uni_icons, {
                    key: 0,
                    size: "12",
                    type: "closeempty"
                  })) : (0, import_vue2.createCommentVNode)("v-if", true)
                ], 8, ["onClick"]);
              }), 128))
            ])
          ])) : (0, import_vue2.createCommentVNode)("v-if", true),
          (0, import_vue2.createCommentVNode)(" \u641C\u7D22\u53D1\u73B0 "),
          (0, import_vue2.createElementVNode)("view", { class: "word-container" }, [
            (0, import_vue2.createElementVNode)("view", { class: "word-container_header" }, [
              (0, import_vue2.createElementVNode)("view", { class: "flex-center flex-row" }, [
                (0, import_vue2.createElementVNode)("u-text", { class: "word-container_header-text" }, "\u641C\u7D22\u53D1\u73B0"),
                !$data.netHotListIsHide ? ((0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_uni_icons, {
                  key: 0,
                  class: "search-icons",
                  color: $data.iconColor,
                  size: "14",
                  type: "reload",
                  onClick: $options.searchHotRefresh
                }, null, 8, ["color", "onClick"])) : (0, import_vue2.createCommentVNode)("v-if", true)
              ]),
              (0, import_vue2.createVNode)(_component_uni_icons, {
                class: "search-icons",
                style: { "padding-right": "0" },
                color: $data.iconColor,
                size: "18",
                type: $data.netHotListIsHide ? "eye-slash" : "eye",
                onClick: _cache[4] || (_cache[4] = ($event) => $data.netHotListIsHide = !$data.netHotListIsHide)
              }, null, 8, ["color", "type"])
            ]),
            (0, import_vue2.createVNode)(_component_unicloud_db, {
              ref: "udb",
              field: "content",
              collection: "opendb-search-hot",
              orderby: "create_date desc,count desc",
              "page-data": "replace",
              "page-size": 10
            }, {
              default: (0, import_vue2.withCtx)(({ data, loading, error, options }) => [
                loading && !$data.netHotListIsHide ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
                  key: 0,
                  class: "word-container_body-info"
                }, "\u6B63\u5728\u52A0\u8F7D...")) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                  key: 1,
                  class: "word-container_body"
                }, [
                  !$data.netHotListIsHide ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(import_vue2.Fragment, { key: 0 }, [
                    error ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
                      key: 0,
                      class: "word-container_body-info"
                    }, (0, import_vue2.toDisplayString)(error.message), 1)) : ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(import_vue2.Fragment, { key: 1 }, (0, import_vue2.renderList)(data, (word, index) => {
                      return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
                        class: "word-container_body-text",
                        key: index,
                        onClick: ($event) => $options.search(word.content)
                      }, (0, import_vue2.toDisplayString)(word.content), 9, ["onClick"]);
                    }), 128))
                  ], 2112)) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                    key: 1,
                    style: { "flex": "1" }
                  }, [
                    (0, import_vue2.createElementVNode)("u-text", { class: "word-container_body-info" }, "\u5F53\u524D\u641C\u7D22\u53D1\u73B0\u5DF2\u9690\u85CF")
                  ]))
                ]))
              ]),
              _: 1
            }, 512)
          ])
        ]),
        (0, import_vue2.createCommentVNode)(" \u641C\u7D22\u8054\u60F3 "),
        $options.associativeShow ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
          key: 0,
          class: "search-associative"
        }, [
          (0, import_vue2.createVNode)(_component_uni_list, null, {
            default: (0, import_vue2.withCtx)(() => [
              ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(import_vue2.Fragment, null, (0, import_vue2.renderList)($data.associativeList, (item, index) => {
                return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_uni_list_item, {
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
        ])) : (0, import_vue2.createCommentVNode)("v-if", true)
      ])
    ]);
  }
  var search = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/mac/Projects/WEB/dfz-web/dfz-web/pages/list/search/search.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/list/search/search";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    search.mpType = "page";
    const app = Vue.createPageApp(search, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...search.styles || []]));
    app.mount("#root");
  }
})();
