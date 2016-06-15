'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaBootstrapperWebpack = require('./aurelia-bootstrapper-webpack');

Object.keys(_aureliaBootstrapperWebpack).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaBootstrapperWebpack[key];
    }
  });
});