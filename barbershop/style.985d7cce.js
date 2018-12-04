// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"assets/styles/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\PTSansNarrowBold\\PTSansNarrowBold.eot":[["PTSansNarrowBold.4ab19686.eot","assets/fonts/PTSansNarrowBold/PTSansNarrowBold.eot"],"assets/fonts/PTSansNarrowBold/PTSansNarrowBold.eot"],"./..\\fonts\\PTSansNarrowBold\\PTSansNarrowBold.woff":[["PTSansNarrowBold.75766891.woff","assets/fonts/PTSansNarrowBold/PTSansNarrowBold.woff"],"assets/fonts/PTSansNarrowBold/PTSansNarrowBold.woff"],"./..\\fonts\\PTSansNarrowBold\\PTSansNarrowBold.ttf":[["PTSansNarrowBold.f97ca6f3.ttf","assets/fonts/PTSansNarrowBold/PTSansNarrowBold.ttf"],"assets/fonts/PTSansNarrowBold/PTSansNarrowBold.ttf"],"./..\\fonts\\PFCentroSlabProMedium\\PFCentroSlabProMedium.eot":[["PFCentroSlabProMedium.0c8b6f90.eot","assets/fonts/PFCentroSlabProMedium/PFCentroSlabProMedium.eot"],"assets/fonts/PFCentroSlabProMedium/PFCentroSlabProMedium.eot"],"./..\\fonts\\PFCentroSlabProMedium\\PFCentroSlabProMedium.woff":[["PFCentroSlabProMedium.f5102ad8.woff","assets/fonts/PFCentroSlabProMedium/PFCentroSlabProMedium.woff"],"assets/fonts/PFCentroSlabProMedium/PFCentroSlabProMedium.woff"],"./..\\fonts\\PFCentroSlabProMedium\\PFCentroSlabProMedium.ttf":[["PFCentroSlabProMedium.dd04fed7.ttf","assets/fonts/PFCentroSlabProMedium/PFCentroSlabProMedium.ttf"],"assets/fonts/PFCentroSlabProMedium/PFCentroSlabProMedium.ttf"],"./..\\fonts\\RalewayBold\\RalewayBold.eot":[["RalewayBold.6c38d6f1.eot","assets/fonts/RalewayBold/RalewayBold.eot"],"assets/fonts/RalewayBold/RalewayBold.eot"],"./..\\fonts\\RalewayBold\\RalewayBold.woff":[["RalewayBold.37803a83.woff","assets/fonts/RalewayBold/RalewayBold.woff"],"assets/fonts/RalewayBold/RalewayBold.woff"],"./..\\fonts\\RalewayBold\\RalewayBold.ttf":[["RalewayBold.1fdd93f1.ttf","assets/fonts/RalewayBold/RalewayBold.ttf"],"assets/fonts/RalewayBold/RalewayBold.ttf"],"./..\\fonts\\RalewayRegular\\RalewayRegular.eot":[["RalewayRegular.eba68c13.eot","assets/fonts/RalewayRegular/RalewayRegular.eot"],"assets/fonts/RalewayRegular/RalewayRegular.eot"],"./..\\fonts\\RalewayRegular\\RalewayRegular.woff":[["RalewayRegular.006d802c.woff","assets/fonts/RalewayRegular/RalewayRegular.woff"],"assets/fonts/RalewayRegular/RalewayRegular.woff"],"./..\\fonts\\RalewayRegular\\RalewayRegular.ttf":[["RalewayRegular.1da8959e.ttf","assets/fonts/RalewayRegular/RalewayRegular.ttf"],"assets/fonts/RalewayRegular/RalewayRegular.ttf"],"./..\\fonts\\RalewaySemiBold\\RalewaySemiBold.eot":[["RalewaySemiBold.2abc24b5.eot","assets/fonts/RalewaySemiBold/RalewaySemiBold.eot"],"assets/fonts/RalewaySemiBold/RalewaySemiBold.eot"],"./..\\fonts\\RalewaySemiBold\\RalewaySemiBold.woff":[["RalewaySemiBold.4cf6c0cb.woff","assets/fonts/RalewaySemiBold/RalewaySemiBold.woff"],"assets/fonts/RalewaySemiBold/RalewaySemiBold.woff"],"./..\\fonts\\RalewaySemiBold\\RalewaySemiBold.ttf":[["RalewaySemiBold.e828505a.ttf","assets/fonts/RalewaySemiBold/RalewaySemiBold.ttf"],"assets/fonts/RalewaySemiBold/RalewaySemiBold.ttf"],"./..\\fonts\\RobotoBold\\RobotoBold.eot":[["RobotoBold.fc7e4969.eot","assets/fonts/RobotoBold/RobotoBold.eot"],"assets/fonts/RobotoBold/RobotoBold.eot"],"./..\\fonts\\RobotoBold\\RobotoBold.woff":[["RobotoBold.0c7e778a.woff","assets/fonts/RobotoBold/RobotoBold.woff"],"assets/fonts/RobotoBold/RobotoBold.woff"],"./..\\fonts\\RobotoBold\\RobotoBold.ttf":[["RobotoBold.79ce65f5.ttf","assets/fonts/RobotoBold/RobotoBold.ttf"],"assets/fonts/RobotoBold/RobotoBold.ttf"],"./..\\images\\tint.jpg":[["tint.1cabfeb5.jpg","assets/images/tint.jpg"],"assets/images/tint.jpg"],"./..\\images\\icon-login.png":[["icon-login.87cc5537.png","assets/images/icon-login.png"],"assets/images/icon-login.png"],"./..\\images\\index-content-shadow.png":[["index-content-shadow.e5e9f519.png","assets/images/index-content-shadow.png"],"assets/images/index-content-shadow.png"],"./..\\images\\index-fon.png":[["index-fon.6fa1f4cc.png","assets/images/index-fon.png"],"assets/images/index-fon.png"],"./..\\images\\footer-fon.jpg":[["footer-fon.bd9e38f1.jpg","assets/images/footer-fon.jpg"],"assets/images/footer-fon.jpg"],"./..\\images\\vk-out.png":[["vk-out.c033536a.png","assets/images/vk-out.png"],"assets/images/vk-out.png"],"./..\\images\\vk-activ.png":[["vk-activ.e0d5e3c3.png","assets/images/vk-activ.png"],"assets/images/vk-activ.png"],"./..\\images\\f-out.png":[["f-out.68344bec.png","assets/images/f-out.png"],"assets/images/f-out.png"],"./..\\images\\f-activ.png":[["f-activ.a72d70c5.png","assets/images/f-activ.png"],"assets/images/f-activ.png"],"./..\\images\\ins-out.png":[["ins-out.acfea968.png","assets/images/ins-out.png"],"assets/images/ins-out.png"],"./..\\images\\ins-activ.png":[["ins-activ.08bf6e73.png","assets/images/ins-activ.png"],"assets/images/ins-activ.png"],"./..\\images\\user-icon.png":[["user-icon.c62db68e.png","assets/images/user-icon.png"],"assets/images/user-icon.png"],"./..\\images\\lock-icon.png":[["lock-icon.5e36ff61.png","assets/images/lock-icon.png"],"assets/images/lock-icon.png"],"./..\\images\\map.png":[["map.44b3d828.png","assets/images/map.png"],"assets/images/map.png"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64208" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]);
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)