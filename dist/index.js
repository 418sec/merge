(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('core-js/modules/es6.array.for-each'), require('core-js/modules/es6.object.keys'), require('core-js/modules/es6.array.reduce'), require('core-js/modules/es6.map'), require('core-js/modules/web.dom.iterable'), require('core-js/modules/es6.array.iterator'), require('core-js/modules/es6.object.to-string'), require('core-js/modules/es6.string.iterator'), require('core-js/modules/es6.set'), require('core-js/modules/es6.regexp.split'), require('core-js/modules/es6.array.is-array'), require('core-js/modules/es6.regexp.to-string'), require('core-js/modules/es6.date.to-string')) :
  typeof define === 'function' && define.amd ? define(['exports', 'core-js/modules/es6.array.for-each', 'core-js/modules/es6.object.keys', 'core-js/modules/es6.array.reduce', 'core-js/modules/es6.map', 'core-js/modules/web.dom.iterable', 'core-js/modules/es6.array.iterator', 'core-js/modules/es6.object.to-string', 'core-js/modules/es6.string.iterator', 'core-js/modules/es6.set', 'core-js/modules/es6.regexp.split', 'core-js/modules/es6.array.is-array', 'core-js/modules/es6.regexp.to-string', 'core-js/modules/es6.date.to-string'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.digger = {}));
}(this, (function (exports) { 'use strict';

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  (function (scope) {
    var pure = require('./pure');

    scope.Proxy = pure.Proxy;
    exports.isProxy = pure.isProxy;
  })(typeof process !== 'undefined' && {}.toString.call(process) === '[object process]' || typeof navigator !== 'undefined' && navigator.product === 'ReactNative' ? global : self);

  var checkIsProxy = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var isProxy = undefined; // check-is(Object)

  var isObject = function isObject(target) {
    return Object.prototype.toString.call(target) === '[object Object]' && !isProxy(target);
  }; // check-is(Array)

  var isArray = function isArray(target) {
    return Array.isArray(target);
  }; // check-is(Set)

  var isSet = function isSet(target) {
    return target instanceof Set;
  }; // check-is(Map)

  var isMap = function isMap(target) {
    return target instanceof Map;
  }; // check if is certain type

  var isType = function isType(target, type) {
    var _object$array$set$map, _object$array$set$map2, _object$array$set$map3;

    return (_object$array$set$map = (_object$array$set$map2 = {
      object: isObject,
      array: isArray,
      set: isSet,
      map: isMap,
      proxy: isProxy
    }) === null || _object$array$set$map2 === void 0 ? void 0 : (_object$array$set$map3 = _object$array$set$map2[type]) === null || _object$array$set$map3 === void 0 ? void 0 : _object$array$set$map3.call(_object$array$set$map2, target)) !== null && _object$array$set$map !== void 0 ? _object$array$set$map : false;
  }; // upper-case the first letter of string

  var formatType = function formatType(type) {
    var array = type.split('');
    array[0] = array[0].toUpperCase();
    return array.join('');
  }; // throw a type error

  var typeError = function typeError(value, type) {
    return new Error("Type-Error: ".concat(value, " is not an instance of ").concat(formatType(type)));
  };

  var mergeProperty = function mergeProperty(target, value) {
    if (isObject(value)) {
      var merged = target !== null && target !== void 0 ? target : {};
      return mergeObject(merged, value);
    } else if (isArray(value)) {
      var _merged = isArray(target) ? target : [];

      return mergeArray(_merged, value);
    } else if (isSet(value)) {
      var _merged2 = isSet(target) ? target : new Set();

      return mergeSet(_merged2, value);
    } else if (isMap(value)) {
      var _merged3 = isMap(target) ? target : new Map();

      return mergeMap(_merged3, value);
    } else {
      return value;
    }
  }; // merge Objects


  var mergeObject = function mergeObject() {
    for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
      objects[_key] = arguments[_key];
    }

    return objects.reduce(function (collection, object) {
      if (!isType(object, 'object')) {
        throw typeError(object, 'object');
      }

      return Object.keys(object).reduce(function (merged, key) {
        merged[key] = mergeProperty(merged[key], object[key]);
        return merged;
      }, collection);
    });
  }; // merge Arrays


  var mergeArray = function mergeArray() {
    for (var _len2 = arguments.length, arrays = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arrays[_key2] = arguments[_key2];
    }

    return arrays.reduce(function (collection, array) {
      if (!isType(array, 'array')) {
        throw typeError(array, 'array');
      }

      array.forEach(function (arrayItem, arrayIndex) {
        collection[arrayIndex] = mergeProperty(collection[arrayIndex], arrayItem);
        return collection;
      });
      return collection;
    });
  }; // merge Sets


  var mergeSet = function mergeSet() {
    for (var _len3 = arguments.length, sets = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      sets[_key3] = arguments[_key3];
    }

    var result = sets.reduce(function (collection, set) {
      if (!isType(set, 'set')) {
        throw typeError(set, 'set');
      }

      _toConsumableArray(set).forEach(function (value, index) {
        collection[index] = mergeProperty(collection[index], value);
      });

      return collection;
    }, []);
    return new Set(_toConsumableArray(result));
  }; // merge Maps


  var mergeMap = function mergeMap() {
    for (var _len4 = arguments.length, maps = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      maps[_key4] = arguments[_key4];
    }

    return maps.reduce(function (collection, map) {
      if (!isType(map, 'map')) {
        throw typeError(map, 'map');
      }

      var _iterator = _createForOfIteratorHelper(map.entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          collection.set(key, mergeProperty(collection.get(key), value));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return collection;
    }, new Map());
  }; // main function, merge freely
  // also this is the default export of the module


  var merge = function merge() {
    for (var _len5 = arguments.length, params = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      params[_key5] = arguments[_key5];
    }

    return params.reduce(function (collection, param) {
      return mergeProperty(collection, param);
    });
  }; // exports

  exports.default = merge;
  exports.merge = merge;
  exports.mergeArray = mergeArray;
  exports.mergeMap = mergeMap;
  exports.mergeObject = mergeObject;
  exports.mergeSet = mergeSet;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
