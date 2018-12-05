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
})({"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"assets/styles/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\CuprumBold\\CuprumBold.eot":[["CuprumBold.000cf2b8.eot","assets/fonts/CuprumBold/CuprumBold.eot"],"assets/fonts/CuprumBold/CuprumBold.eot"],"./..\\fonts\\CuprumBold\\CuprumBold.woff":[["CuprumBold.e04f5556.woff","assets/fonts/CuprumBold/CuprumBold.woff"],"assets/fonts/CuprumBold/CuprumBold.woff"],"./..\\fonts\\CuprumBold\\CuprumBold.ttf":[["CuprumBold.fd23ce3a.ttf","assets/fonts/CuprumBold/CuprumBold.ttf"],"assets/fonts/CuprumBold/CuprumBold.ttf"],"./..\\fonts\\CuprumRegular\\CuprumRegular.eot":[["CuprumRegular.ae01a25e.eot","assets/fonts/CuprumRegular/CuprumRegular.eot"],"assets/fonts/CuprumRegular/CuprumRegular.eot"],"./..\\fonts\\CuprumRegular\\CuprumRegular.woff":[["CuprumRegular.151b3dae.woff","assets/fonts/CuprumRegular/CuprumRegular.woff"],"assets/fonts/CuprumRegular/CuprumRegular.woff"],"./..\\fonts\\CuprumRegular\\CuprumRegular.ttf":[["CuprumRegular.c7e29fd1.ttf","assets/fonts/CuprumRegular/CuprumRegular.ttf"],"assets/fonts/CuprumRegular/CuprumRegular.ttf"],"./..\\fonts\\CuprumItalic\\CuprumItalic.eot":[["CuprumItalic.f57fdb86.eot","assets/fonts/CuprumItalic/CuprumItalic.eot"],"assets/fonts/CuprumItalic/CuprumItalic.eot"],"./..\\fonts\\CuprumItalic\\CuprumItalic.woff":[["CuprumItalic.a3ddb6c2.woff","assets/fonts/CuprumItalic/CuprumItalic.woff"],"assets/fonts/CuprumItalic/CuprumItalic.woff"],"./..\\fonts\\CuprumItalic\\CuprumItalic.ttf":[["CuprumItalic.016a5349.ttf","assets/fonts/CuprumItalic/CuprumItalic.ttf"],"assets/fonts/CuprumItalic/CuprumItalic.ttf"],"./..\\fonts\\PTSansNarrowRegular\\PTSansNarrowRegular.eot":[["PTSansNarrowRegular.76a5beff.eot","assets/fonts/PTSansNarrowRegular/PTSansNarrowRegular.eot"],"assets/fonts/PTSansNarrowRegular/PTSansNarrowRegular.eot"],"./..\\fonts\\PTSansNarrowRegular\\PTSansNarrowRegular.woff":[["PTSansNarrowRegular.8aeb7f09.woff","assets/fonts/PTSansNarrowRegular/PTSansNarrowRegular.woff"],"assets/fonts/PTSansNarrowRegular/PTSansNarrowRegular.woff"],"./..\\fonts\\PTSansNarrowRegular\\PTSansNarrowRegular.ttf":[["PTSansNarrowRegular.fa7f32e2.ttf","assets/fonts/PTSansNarrowRegular/PTSansNarrowRegular.ttf"],"assets/fonts/PTSansNarrowRegular/PTSansNarrowRegular.ttf"],"./..\\fonts\\PTSansRegular\\PTSansRegular.eot":[["PTSansRegular.3634f53e.eot","assets/fonts/PTSansRegular/PTSansRegular.eot"],"assets/fonts/PTSansRegular/PTSansRegular.eot"],"./..\\fonts\\PTSansRegular\\PTSansRegular.woff":[["PTSansRegular.da944bb5.woff","assets/fonts/PTSansRegular/PTSansRegular.woff"],"assets/fonts/PTSansRegular/PTSansRegular.woff"],"./..\\fonts\\PTSansRegular\\PTSansRegular.ttf":[["PTSansRegular.f6874b37.ttf","assets/fonts/PTSansRegular/PTSansRegular.ttf"],"assets/fonts/PTSansRegular/PTSansRegular.ttf"],"./..\\fonts\\PTSansBold\\PTSansBold.eot":[["PTSansBold.0e14b378.eot","assets/fonts/PTSansBold/PTSansBold.eot"],"assets/fonts/PTSansBold/PTSansBold.eot"],"./..\\fonts\\PTSansBold\\PTSansBold.woff":[["PTSansBold.85682557.woff","assets/fonts/PTSansBold/PTSansBold.woff"],"assets/fonts/PTSansBold/PTSansBold.woff"],"./..\\fonts\\PTSansBold\\PTSansBold.ttf":[["PTSansBold.8481ceb5.ttf","assets/fonts/PTSansBold/PTSansBold.ttf"],"assets/fonts/PTSansBold/PTSansBold.ttf"],"./..\\images\\icon\\icon-search.png":[["icon-search.c1bb689b.png","assets/images/icon/icon-search.png"],"assets/images/icon/icon-search.png"],"./..\\images\\icon\\icon-search-hover.png":[["icon-search-hover.677d6b3a.png","assets/images/icon/icon-search-hover.png"],"assets/images/icon/icon-search-hover.png"],"./..\\images\\icon\\icon-search-focus.png":[["icon-search-focus.d74b21c6.png","assets/images/icon/icon-search-focus.png"],"assets/images/icon/icon-search-focus.png"],"./..\\images\\icon\\icon-cart.png":[["icon-cart.59f0d4ff.png","assets/images/icon/icon-cart.png"],"assets/images/icon/icon-cart.png"],"./..\\images\\icon\\icon-cart-hover.png":[["icon-cart-hover.b45bfae2.png","assets/images/icon/icon-cart-hover.png"],"assets/images/icon/icon-cart-hover.png"],"./..\\images\\icon\\icon-tab.png":[["icon-tab.9f2b3f8e.png","assets/images/icon/icon-tab.png"],"assets/images/icon/icon-tab.png"],"./..\\images\\icon\\icon-tab-hover.png":[["icon-tab-hover.dbade7e0.png","assets/images/icon/icon-tab-hover.png"],"assets/images/icon/icon-tab-hover.png"],"./..\\images\\icon\\icon-phone.png":[["icon-phone.8354ebf9.png","assets/images/icon/icon-phone.png"],"assets/images/icon/icon-phone.png"],"./..\\images\\icon\\icon-login.png":[["icon-login.1bf3aedf.png","assets/images/icon/icon-login.png"],"assets/images/icon/icon-login.png"],"./..\\images\\icon\\icon-login-hover.png":[["icon-login-hover.c0b44fcb.png","assets/images/icon/icon-login-hover.png"],"assets/images/icon/icon-login-hover.png"],"./..\\images\\slide-block-icon\\block1.png":[["block1.1ef9cf63.png","assets/images/slide-block-icon/block1.png"],"assets/images/slide-block-icon/block1.png"],"./..\\images\\slide-block-icon\\block2.png":[["block2.5fa25031.png","assets/images/slide-block-icon/block2.png"],"assets/images/slide-block-icon/block2.png"],"./..\\images\\slide-block-icon\\block3.png":[["block3.621e94fc.png","assets/images/slide-block-icon/block3.png"],"assets/images/slide-block-icon/block3.png"],"./..\\images\\slide-block-icon\\block5.png":[["block5.e4fa2ca9.png","assets/images/slide-block-icon/block5.png"],"assets/images/slide-block-icon/block5.png"],"./..\\images\\slide-block-icon\\block4.png":[["block4.cb40cc82.png","assets/images/slide-block-icon/block4.png"],"assets/images/slide-block-icon/block4.png"],"./..\\images\\new.png":[["new.c7ec7b1f.png","assets/images/new.png"],"assets/images/new.png"],"./..\\images\\slide-block-icon\\slider1.png":[["slider1.cda7d734.png","assets/images/slide-block-icon/slider1.png"],"assets/images/slide-block-icon/slider1.png"],"./..\\images\\slide-block-icon\\slider2.png":[["slider2.e15992d5.png","assets/images/slide-block-icon/slider2.png"],"assets/images/slide-block-icon/slider2.png"],"./..\\images\\servise-after.png":[["servise-after.cea47e4a.png","assets/images/servise-after.png"],"assets/images/servise-after.png"],"./..\\images\\delivery.png":[["delivery.5d0b3d2b.png","assets/images/delivery.png"],"assets/images/delivery.png"],"./..\\images\\warranty.png":[["warranty.8fe7d323.png","assets/images/warranty.png"],"assets/images/warranty.png"],"./..\\images\\credit.png":[["credit.166968dc.png","assets/images/credit.png"],"assets/images/credit.png"],"./..\\images\\icon\\icon-user.png":[["icon-user.57e1ca86.png","assets/images/icon/icon-user.png"],"assets/images/icon/icon-user.png"],"./..\\images\\icon\\icon-user-hover.png":[["icon-user-hover.f7f2e2a6.png","assets/images/icon/icon-user-hover.png"],"assets/images/icon/icon-user-hover.png"],"./..\\images\\icon\\icon-right-small.png":[["icon-right-small.13f3dbf4.png","assets/images/icon/icon-right-small.png"],"assets/images/icon/icon-right-small.png"],"./..\\images\\SVG\\checkbox-off.svg":[["checkbox-off.b76063d9.svg","assets/images/SVG/checkbox-off.svg"],"assets/images/SVG/checkbox-off.svg"],"./..\\images\\SVG\\checkbox-on.svg":[["checkbox-on.0056f77f.svg","assets/images/SVG/checkbox-on.svg"],"assets/images/SVG/checkbox-on.svg"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50124" + '/');

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
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)