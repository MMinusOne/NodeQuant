// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"j4Td5":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "89e477aff85271f3";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"duU8f":[function(require,module,exports,__globalThis) {
var _lightweightCharts = require("lightweight-charts");
const chartContainer = document.querySelector('#chart-container');
const reportId = window.location.toString().at(-2);
async function chart() {
    const chart = (0, _lightweightCharts.createChart)(chartContainer);
    const candleStickSeries = chart.addSeries((0, _lightweightCharts.CandlestickSeries));
    const priceData = await fetch(`http://localhost:2225/${reportId}/price-data`).then((r)=>r.json());
    candleStickSeries.setData(priceData.map((candle)=>{
        return {
            open: candle.at(1),
            high: candle.at(2),
            low: candle.at(3),
            close: candle.at(4),
            time: candle.at(0)
        };
    }));
    chart.timeScale().fitContent();
}
chart();

},{"lightweight-charts":"5VWW0"}],"5VWW0":[function(require,module,exports,__globalThis) {
/*!
 * @license
 * TradingView Lightweight Charts™ v5.0.2
 * Copyright (c) 2025 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AreaSeries", ()=>fe);
parcelHelpers.export(exports, "BarSeries", ()=>we);
parcelHelpers.export(exports, "BaselineSeries", ()=>ue);
parcelHelpers.export(exports, "CandlestickSeries", ()=>be);
parcelHelpers.export(exports, "ColorType", ()=>Ai);
parcelHelpers.export(exports, "CrosshairMode", ()=>Z);
parcelHelpers.export(exports, "HistogramSeries", ()=>Ce);
parcelHelpers.export(exports, "LastPriceAnimationMode", ()=>Vi);
parcelHelpers.export(exports, "LineSeries", ()=>Kn);
parcelHelpers.export(exports, "LineStyle", ()=>h);
parcelHelpers.export(exports, "LineType", ()=>r);
parcelHelpers.export(exports, "MismatchDirection", ()=>Pt);
parcelHelpers.export(exports, "PriceLineSource", ()=>Ii);
parcelHelpers.export(exports, "PriceScaleMode", ()=>di);
parcelHelpers.export(exports, "TickMarkType", ()=>Bi);
parcelHelpers.export(exports, "TrackingModeExitMode", ()=>Di);
parcelHelpers.export(exports, "createChart", ()=>Ln);
parcelHelpers.export(exports, "createChartEx", ()=>zn);
parcelHelpers.export(exports, "createImageWatermark", ()=>He);
parcelHelpers.export(exports, "createOptionsChart", ()=>ee);
parcelHelpers.export(exports, "createSeriesMarkers", ()=>er);
parcelHelpers.export(exports, "createTextWatermark", ()=>Ee);
parcelHelpers.export(exports, "createUpDownMarkers", ()=>dr);
parcelHelpers.export(exports, "createYieldCurveChart", ()=>ie);
parcelHelpers.export(exports, "customSeriesDefaultOptions", ()=>fr);
parcelHelpers.export(exports, "defaultHorzScaleBehavior", ()=>On);
parcelHelpers.export(exports, "isBusinessDay", ()=>zi);
parcelHelpers.export(exports, "isUTCTimestamp", ()=>Li);
parcelHelpers.export(exports, "version", ()=>pr);
var _fancyCanvas = require("fancy-canvas");
const e = {
    title: "",
    visible: !0,
    lastValueVisible: !0,
    priceLineVisible: !0,
    priceLineSource: 0,
    priceLineWidth: 1,
    priceLineColor: "",
    priceLineStyle: 2,
    baseLineVisible: !0,
    baseLineWidth: 1,
    baseLineColor: "#B2B5BE",
    baseLineStyle: 0,
    priceFormat: {
        type: "price",
        precision: 2,
        minMove: .01
    }
};
var r, h;
function a(t, i) {
    const s = {
        0: [],
        1: [
            t.lineWidth,
            t.lineWidth
        ],
        2: [
            2 * t.lineWidth,
            2 * t.lineWidth
        ],
        3: [
            6 * t.lineWidth,
            6 * t.lineWidth
        ],
        4: [
            t.lineWidth,
            4 * t.lineWidth
        ]
    }[i];
    t.setLineDash(s);
}
function l(t, i, s, n) {
    t.beginPath();
    const e = t.lineWidth % 2 ? .5 : 0;
    t.moveTo(s, i + e), t.lineTo(n, i + e), t.stroke();
}
function o(t, i) {
    if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""));
}
function _(t) {
    if (void 0 === t) throw new Error("Value is undefined");
    return t;
}
function u(t) {
    if (null === t) throw new Error("Value is null");
    return t;
}
function c(t) {
    return u(_(t));
}
!function(t) {
    t[t.Simple = 0] = "Simple", t[t.WithSteps = 1] = "WithSteps", t[t.Curved = 2] = "Curved";
}(r || (r = {})), function(t) {
    t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed", t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted";
}(h || (h = {}));
class d {
    constructor(){
        this.t = [];
    }
    i(t, i, s) {
        const n = {
            h: t,
            l: i,
            o: !0 === s
        };
        this.t.push(n);
    }
    _(t) {
        const i = this.t.findIndex((i)=>t === i.h);
        i > -1 && this.t.splice(i, 1);
    }
    u(t) {
        this.t = this.t.filter((i)=>i.l !== t);
    }
    p(t, i, s) {
        const n = [
            ...this.t
        ];
        this.t = this.t.filter((t)=>!t.o), n.forEach((n)=>n.h(t, i, s));
    }
    v() {
        return this.t.length > 0;
    }
    m() {
        this.t = [];
    }
}
function f(t, ...i) {
    for (const s of i)for(const i in s)void 0 !== s[i] && Object.prototype.hasOwnProperty.call(s, i) && ![
        "__proto__",
        "constructor",
        "prototype"
    ].includes(i) && ("object" != typeof s[i] || void 0 === t[i] || Array.isArray(s[i]) ? t[i] = s[i] : f(t[i], s[i]));
    return t;
}
function p(t) {
    return "number" == typeof t && isFinite(t);
}
function v(t) {
    return "number" == typeof t && t % 1 == 0;
}
function m(t) {
    return "string" == typeof t;
}
function w(t) {
    return "boolean" == typeof t;
}
function g(t) {
    const i = t;
    if (!i || "object" != typeof i) return i;
    let s, n, e;
    for(n in s = Array.isArray(i) ? [] : {}, i)i.hasOwnProperty(n) && (e = i[n], s[n] = e && "object" == typeof e ? g(e) : e);
    return s;
}
function M(t) {
    return null !== t;
}
function b(t) {
    return null === t ? void 0 : t;
}
const x = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";
function S(t, i, s) {
    return void 0 === i && (i = x), `${s = void 0 !== s ? `${s} ` : ""}${t}px ${i}`;
}
class C {
    constructor(t){
        this.M = {
            S: 1,
            C: 5,
            k: NaN,
            P: "",
            T: "",
            R: "",
            D: "",
            V: 0,
            I: 0,
            A: 0,
            B: 0,
            L: 0
        }, this.O = t;
    }
    N() {
        const t = this.M, i = this.W(), s = this.F();
        return t.k === i && t.T === s || (t.k = i, t.T = s, t.P = S(i, s), t.B = 2.5 / 12 * i, t.V = t.B, t.I = i / 12 * t.C, t.A = i / 12 * t.C, t.L = 0), t.R = this.H(), t.D = this.U(), this.M;
    }
    H() {
        return this.O.N().layout.textColor;
    }
    U() {
        return this.O.$();
    }
    W() {
        return this.O.N().layout.fontSize;
    }
    F() {
        return this.O.N().layout.fontFamily;
    }
}
function y(t) {
    return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0;
}
function k(t) {
    return .199 * t[0] + .687 * t[1] + .114 * t[2];
}
class P {
    constructor(t, i){
        this.q = new Map, this.Y = t, i && (this.q = i);
    }
    j(t, i) {
        if ("transparent" === t) return t;
        const s = this.Z(t), n = s[3];
        return `rgba(${s[0]}, ${s[1]}, ${s[2]}, ${i * n})`;
    }
    K(t) {
        const i = this.Z(t);
        return {
            X: `rgb(${i[0]}, ${i[1]}, ${i[2]})`,
            G: k(i) > 160 ? "black" : "white"
        };
    }
    J(t) {
        return k(this.Z(t));
    }
    tt(t, i, s) {
        const [n, e, r, h] = this.Z(t), [a, l, o, _] = this.Z(i), u = [
            y(n + s * (a - n)),
            y(e + s * (l - e)),
            y(r + s * (o - r)),
            (c = h + s * (_ - h), c <= 0 || c > 1 ? Math.min(Math.max(c, 0), 1) : Math.round(1e4 * c) / 1e4)
        ];
        var c;
        return `rgba(${u[0]}, ${u[1]}, ${u[2]}, ${u[3]})`;
    }
    Z(t) {
        const i = this.q.get(t);
        if (i) return i;
        const s = function(t) {
            const i = document.createElement("div");
            i.style.display = "none", document.body.appendChild(i), i.style.color = t;
            const s = window.getComputedStyle(i).color;
            return document.body.removeChild(i), s;
        }(t), n = s.match(/^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)$/);
        if (!n) {
            if (this.Y.length) for (const i of this.Y){
                const s = i(t);
                if (s) return this.q.set(t, s), s;
            }
            throw new Error(`Failed to parse color: ${t}`);
        }
        const e = [
            parseInt(n[1], 10),
            parseInt(n[2], 10),
            parseInt(n[3], 10),
            n[4] ? parseFloat(n[4]) : 1
        ];
        return this.q.set(t, e), e;
    }
}
class T {
    constructor(){
        this.it = [];
    }
    st(t) {
        this.it = t;
    }
    nt(t, i, s) {
        this.it.forEach((n)=>{
            n.nt(t, i, s);
        });
    }
}
class R {
    nt(t, i, s) {
        t.useBitmapCoordinateSpace((t)=>this.et(t, i, s));
    }
}
class D extends R {
    constructor(){
        super(...arguments), this.rt = null;
    }
    ht(t) {
        this.rt = t;
    }
    et({ context: t, horizontalPixelRatio: i, verticalPixelRatio: s }) {
        if (null === this.rt || null === this.rt.lt) return;
        const n = this.rt.lt, e = this.rt, r = Math.max(1, Math.floor(i)) % 2 / 2, h = (h)=>{
            t.beginPath();
            for(let a = n.to - 1; a >= n.from; --a){
                const n = e.ot[a], l = Math.round(n._t * i) + r, o = n.ut * s, _ = h * s + r;
                t.moveTo(l, o), t.arc(l, o, _, 0, 2 * Math.PI);
            }
            t.fill();
        };
        e.ct > 0 && (t.fillStyle = e.dt, h(e.ft + e.ct)), t.fillStyle = e.vt, h(e.ft);
    }
}
function V() {
    return {
        ot: [
            {
                _t: 0,
                ut: 0,
                wt: 0,
                gt: 0
            }
        ],
        vt: "",
        dt: "",
        ft: 0,
        ct: 0,
        lt: null
    };
}
const I = {
    from: 0,
    to: 1
};
class A {
    constructor(t, i, s){
        this.Mt = new T, this.bt = [], this.xt = [], this.St = !0, this.O = t, this.Ct = i, this.yt = s, this.Mt.st(this.bt);
    }
    kt(t) {
        this.Pt(), this.St = !0;
    }
    Tt() {
        return this.St && (this.Rt(), this.St = !1), this.Mt;
    }
    Pt() {
        const t = this.yt.Dt();
        t.length !== this.bt.length && (this.xt = t.map(V), this.bt = this.xt.map((t)=>{
            const i = new D;
            return i.ht(t), i;
        }), this.Mt.st(this.bt));
    }
    Rt() {
        const t = 2 === this.Ct.N().mode || !this.Ct.Vt(), i = this.yt.It(), s = this.Ct.At(), n = this.O.Bt();
        this.Pt(), i.forEach((i, e)=>{
            const r = this.xt[e], h = i.Et(s), a = i.zt();
            !t && null !== h && i.Vt() && null !== a ? (r.vt = h.Lt, r.ft = h.ft, r.ct = h.Ot, r.ot[0].gt = h.gt, r.ot[0].ut = i.Wt().Nt(h.gt, a.Ft), r.dt = h.Ht ?? this.O.Ut(r.ot[0].ut / i.Wt().$t()), r.ot[0].wt = s, r.ot[0]._t = n.qt(s), r.lt = I) : r.lt = null;
        });
    }
}
class B extends R {
    constructor(t){
        super(), this.Yt = t;
    }
    et({ context: t, bitmapSize: i, horizontalPixelRatio: s, verticalPixelRatio: n }) {
        if (null === this.Yt) return;
        const e = this.Yt.jt.Vt, r = this.Yt.Zt.Vt;
        if (!e && !r) return;
        const h = Math.round(this.Yt._t * s), o = Math.round(this.Yt.ut * n);
        t.lineCap = "butt", e && h >= 0 && (t.lineWidth = Math.floor(this.Yt.jt.ct * s), t.strokeStyle = this.Yt.jt.R, t.fillStyle = this.Yt.jt.R, a(t, this.Yt.jt.Kt), function(t, i, s, n) {
            t.beginPath();
            const e = t.lineWidth % 2 ? .5 : 0;
            t.moveTo(i + e, s), t.lineTo(i + e, n), t.stroke();
        }(t, h, 0, i.height)), r && o >= 0 && (t.lineWidth = Math.floor(this.Yt.Zt.ct * n), t.strokeStyle = this.Yt.Zt.R, t.fillStyle = this.Yt.Zt.R, a(t, this.Yt.Zt.Kt), l(t, o, 0, i.width));
    }
}
class E {
    constructor(t, i){
        this.St = !0, this.Xt = {
            jt: {
                ct: 1,
                Kt: 0,
                R: "",
                Vt: !1
            },
            Zt: {
                ct: 1,
                Kt: 0,
                R: "",
                Vt: !1
            },
            _t: 0,
            ut: 0
        }, this.Gt = new B(this.Xt), this.Jt = t, this.yt = i;
    }
    kt() {
        this.St = !0;
    }
    Tt(t) {
        return this.St && (this.Rt(), this.St = !1), this.Gt;
    }
    Rt() {
        const t = this.Jt.Vt(), i = this.yt.Qt().N().crosshair, s = this.Xt;
        if (2 === i.mode) return s.Zt.Vt = !1, void (s.jt.Vt = !1);
        s.Zt.Vt = t && this.Jt.ti(this.yt), s.jt.Vt = t && this.Jt.ii(), s.Zt.ct = i.horzLine.width, s.Zt.Kt = i.horzLine.style, s.Zt.R = i.horzLine.color, s.jt.ct = i.vertLine.width, s.jt.Kt = i.vertLine.style, s.jt.R = i.vertLine.color, s._t = this.Jt.si(), s.ut = this.Jt.ni();
    }
}
function z(t, i, s, n, e, r) {
    t.fillRect(i + r, s, n - 2 * r, r), t.fillRect(i + r, s + e - r, n - 2 * r, r), t.fillRect(i, s, r, e), t.fillRect(i + n - r, s, r, e);
}
function L(t, i, s, n, e, r) {
    t.save(), t.globalCompositeOperation = "copy", t.fillStyle = r, t.fillRect(i, s, n, e), t.restore();
}
function O(t, i, s, n, e, r) {
    t.beginPath(), t.roundRect ? t.roundRect(i, s, n, e, r) : (t.lineTo(i + n - r[1], s), 0 !== r[1] && t.arcTo(i + n, s, i + n, s + r[1], r[1]), t.lineTo(i + n, s + e - r[2]), 0 !== r[2] && t.arcTo(i + n, s + e, i + n - r[2], s + e, r[2]), t.lineTo(i + r[3], s + e), 0 !== r[3] && t.arcTo(i, s + e, i, s + e - r[3], r[3]), t.lineTo(i, s + r[0]), 0 !== r[0] && t.arcTo(i, s, i + r[0], s, r[0]));
}
function N(t, i, s, n, e, r, h = 0, a = [
    0,
    0,
    0,
    0
], l = "") {
    if (t.save(), !h || !l || l === r) return O(t, i, s, n, e, a), t.fillStyle = r, t.fill(), void t.restore();
    const o = h / 2;
    var _;
    O(t, i + o, s + o, n - h, e - h, (_ = -o, a.map((t)=>0 === t ? t : t + _))), "transparent" !== r && (t.fillStyle = r, t.fill()), "transparent" !== l && (t.lineWidth = h, t.strokeStyle = l, t.closePath(), t.stroke()), t.restore();
}
function W(t, i, s, n, e, r, h) {
    t.save(), t.globalCompositeOperation = "copy";
    const a = t.createLinearGradient(0, 0, 0, e);
    a.addColorStop(0, r), a.addColorStop(1, h), t.fillStyle = a, t.fillRect(i, s, n, e), t.restore();
}
class F {
    constructor(t, i){
        this.ht(t, i);
    }
    ht(t, i) {
        this.Yt = t, this.ei = i;
    }
    $t(t, i) {
        return this.Yt.Vt ? t.k + t.B + t.V : 0;
    }
    nt(t, i, s, n) {
        if (!this.Yt.Vt || 0 === this.Yt.ri.length) return;
        const e = this.Yt.R, r = this.ei.X, h = t.useBitmapCoordinateSpace((t)=>{
            const h = t.context;
            h.font = i.P;
            const a = this.hi(t, i, s, n), l = a.ai;
            return a.li ? N(h, l.oi, l._i, l.ui, l.ci, r, l.di, [
                l.ft,
                0,
                0,
                l.ft
            ], r) : N(h, l.fi, l._i, l.ui, l.ci, r, l.di, [
                0,
                l.ft,
                l.ft,
                0
            ], r), this.Yt.pi && (h.fillStyle = e, h.fillRect(l.fi, l.mi, l.wi - l.fi, l.gi)), this.Yt.Mi && (h.fillStyle = i.D, h.fillRect(a.li ? l.bi - l.di : 0, l._i, l.di, l.xi - l._i)), a;
        });
        t.useMediaCoordinateSpace(({ context: t })=>{
            const s = h.Si;
            t.font = i.P, t.textAlign = h.li ? "right" : "left", t.textBaseline = "middle", t.fillStyle = e, t.fillText(this.Yt.ri, s.Ci, (s._i + s.xi) / 2 + s.yi);
        });
    }
    hi(t, i, s, n) {
        const { context: e, bitmapSize: r, mediaSize: h, horizontalPixelRatio: a, verticalPixelRatio: l } = t, o = this.Yt.pi || !this.Yt.ki ? i.C : 0, _ = this.Yt.Pi ? i.S : 0, u = i.B + this.ei.Ti, c = i.V + this.ei.Ri, d = i.I, f = i.A, p = this.Yt.ri, v = i.k, m = s.Di(e, p), w = Math.ceil(s.Vi(e, p)), g = v + u + c, M = i.S + d + f + w + o, b = Math.max(1, Math.floor(l));
        let x = Math.round(g * l);
        x % 2 != b % 2 && (x += 1);
        const S = _ > 0 ? Math.max(1, Math.floor(_ * a)) : 0, C = Math.round(M * a), y = Math.round(o * a), k = this.ei.Ii ?? this.ei.Ai, P = Math.round(k * l) - Math.floor(.5 * l), T = Math.floor(P + b / 2 - x / 2), R = T + x, D = "right" === n, V = D ? h.width - _ : _, I = D ? r.width - S : S;
        let A, B, E;
        return D ? (A = I - C, B = I - y, E = V - o - d - _) : (A = I + C, B = I + y, E = V + o + d), {
            li: D,
            ai: {
                _i: T,
                mi: P,
                xi: R,
                ui: C,
                ci: x,
                ft: 2 * a,
                di: S,
                oi: A,
                fi: I,
                wi: B,
                gi: b,
                bi: r.width
            },
            Si: {
                _i: T / l,
                xi: R / l,
                Ci: E,
                yi: m
            }
        };
    }
}
class H {
    constructor(t){
        this.Bi = {
            Ai: 0,
            X: "#000",
            Ri: 0,
            Ti: 0
        }, this.Ei = {
            ri: "",
            Vt: !1,
            pi: !0,
            ki: !1,
            Ht: "",
            R: "#FFF",
            Mi: !1,
            Pi: !1
        }, this.zi = {
            ri: "",
            Vt: !1,
            pi: !1,
            ki: !0,
            Ht: "",
            R: "#FFF",
            Mi: !0,
            Pi: !0
        }, this.St = !0, this.Li = new (t || F)(this.Ei, this.Bi), this.Oi = new (t || F)(this.zi, this.Bi);
    }
    ri() {
        return this.Ni(), this.Ei.ri;
    }
    Ai() {
        return this.Ni(), this.Bi.Ai;
    }
    kt() {
        this.St = !0;
    }
    $t(t, i = !1) {
        return Math.max(this.Li.$t(t, i), this.Oi.$t(t, i));
    }
    Wi() {
        return this.Bi.Ii || 0;
    }
    Fi(t) {
        this.Bi.Ii = t;
    }
    Hi() {
        return this.Ni(), this.Ei.Vt || this.zi.Vt;
    }
    Ui() {
        return this.Ni(), this.Ei.Vt;
    }
    Tt(t) {
        return this.Ni(), this.Ei.pi = this.Ei.pi && t.N().ticksVisible, this.zi.pi = this.zi.pi && t.N().ticksVisible, this.Li.ht(this.Ei, this.Bi), this.Oi.ht(this.zi, this.Bi), this.Li;
    }
    $i() {
        return this.Ni(), this.Li.ht(this.Ei, this.Bi), this.Oi.ht(this.zi, this.Bi), this.Oi;
    }
    Ni() {
        this.St && (this.Ei.pi = !0, this.zi.pi = !1, this.qi(this.Ei, this.zi, this.Bi));
    }
}
class U extends H {
    constructor(t, i, s){
        super(), this.Jt = t, this.Yi = i, this.ji = s;
    }
    qi(t, i, s) {
        if (t.Vt = !1, 2 === this.Jt.N().mode) return;
        const n = this.Jt.N().horzLine;
        if (!n.labelVisible) return;
        const e = this.Yi.zt();
        if (!this.Jt.Vt() || this.Yi.Zi() || null === e) return;
        const r = this.Yi.Ki().K(n.labelBackgroundColor);
        s.X = r.X, t.R = r.G;
        const h = 2 / 12 * this.Yi.k();
        s.Ti = h, s.Ri = h;
        const a = this.ji(this.Yi);
        s.Ai = a.Ai, t.ri = this.Yi.Xi(a.gt, e), t.Vt = !0;
    }
}
const $ = /[1-9]/g;
class q {
    constructor(){
        this.Yt = null;
    }
    ht(t) {
        this.Yt = t;
    }
    nt(t, i) {
        if (null === this.Yt || !1 === this.Yt.Vt || 0 === this.Yt.ri.length) return;
        const s = t.useMediaCoordinateSpace(({ context: t })=>(t.font = i.P, Math.round(i.Gi.Vi(t, u(this.Yt).ri, $))));
        if (s <= 0) return;
        const n = i.Ji, e = s + 2 * n, r = e / 2, h = this.Yt.Qi;
        let a = this.Yt.Ai, l = Math.floor(a - r) + .5;
        l < 0 ? (a += Math.abs(0 - l), l = Math.floor(a - r) + .5) : l + e > h && (a -= Math.abs(h - (l + e)), l = Math.floor(a - r) + .5);
        const o = l + e, _ = Math.ceil(0 + i.S + i.C + i.B + i.k + i.V);
        t.useBitmapCoordinateSpace(({ context: t, horizontalPixelRatio: s, verticalPixelRatio: n })=>{
            const e = u(this.Yt);
            t.fillStyle = e.X;
            const r = Math.round(l * s), h = Math.round(0 * n), a = Math.round(o * s), c = Math.round(_ * n), d = Math.round(2 * s);
            if (t.beginPath(), t.moveTo(r, h), t.lineTo(r, c - d), t.arcTo(r, c, r + d, c, d), t.lineTo(a - d, c), t.arcTo(a, c, a, c - d, d), t.lineTo(a, h), t.fill(), e.pi) {
                const r = Math.round(e.Ai * s), a = h, l = Math.round((a + i.C) * n);
                t.fillStyle = e.R;
                const o = Math.max(1, Math.floor(s)), _ = Math.floor(.5 * s);
                t.fillRect(r - _, a, o, l - a);
            }
        }), t.useMediaCoordinateSpace(({ context: t })=>{
            const s = u(this.Yt), e = 0 + i.S + i.C + i.B + i.k / 2;
            t.font = i.P, t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = s.R;
            const r = i.Gi.Di(t, "Apr0");
            t.translate(l + n, e + r), t.fillText(s.ri, 0, 0);
        });
    }
}
class Y {
    constructor(t, i, s){
        this.St = !0, this.Gt = new q, this.Xt = {
            Vt: !1,
            X: "#4c525e",
            R: "white",
            ri: "",
            Qi: 0,
            Ai: NaN,
            pi: !0
        }, this.Ct = t, this.ts = i, this.ji = s;
    }
    kt() {
        this.St = !0;
    }
    Tt() {
        return this.St && (this.Rt(), this.St = !1), this.Gt.ht(this.Xt), this.Gt;
    }
    Rt() {
        const t = this.Xt;
        if (t.Vt = !1, 2 === this.Ct.N().mode) return;
        const i = this.Ct.N().vertLine;
        if (!i.labelVisible) return;
        const s = this.ts.Bt();
        if (s.Zi()) return;
        t.Qi = s.Qi();
        const n = this.ji();
        if (null === n) return;
        t.Ai = n.Ai;
        const e = s.ss(this.Ct.At());
        t.ri = s.ns(u(e)), t.Vt = !0;
        const r = this.ts.Ki().K(i.labelBackgroundColor);
        t.X = r.X, t.R = r.G, t.pi = s.N().ticksVisible;
    }
}
class j {
    constructor(){
        this.es = null, this.rs = 0;
    }
    hs() {
        return this.rs;
    }
    ls(t) {
        this.rs = t;
    }
    Wt() {
        return this.es;
    }
    _s(t) {
        this.es = t;
    }
    us(t) {
        return [];
    }
    cs() {
        return [];
    }
    Vt() {
        return !0;
    }
}
var Z;
!function(t) {
    t[t.Normal = 0] = "Normal", t[t.Magnet = 1] = "Magnet", t[t.Hidden = 2] = "Hidden";
}(Z || (Z = {}));
class K extends j {
    constructor(t, i){
        super(), this.yt = null, this.ds = NaN, this.fs = 0, this.ps = !0, this.vs = new Map, this.ws = !1, this.gs = new WeakMap, this.Ms = new WeakMap, this.bs = NaN, this.xs = NaN, this.Ss = NaN, this.Cs = NaN, this.ts = t, this.ys = i;
        this.ks = ((t, i)=>(s)=>{
                const n = i(), e = t();
                if (s === u(this.yt).Ps()) return {
                    gt: e,
                    Ai: n
                };
                {
                    const t = u(s.zt());
                    return {
                        gt: s.Ts(n, t),
                        Ai: n
                    };
                }
            })(()=>this.ds, ()=>this.xs);
        const s = ((t, i)=>()=>{
                const s = this.ts.Bt().Rs(t()), n = i();
                return s && Number.isFinite(n) ? {
                    wt: s,
                    Ai: n
                } : null;
            })(()=>this.fs, ()=>this.si());
        this.Ds = new Y(this, t, s);
    }
    N() {
        return this.ys;
    }
    Vs(t, i) {
        this.Ss = t, this.Cs = i;
    }
    Is() {
        this.Ss = NaN, this.Cs = NaN;
    }
    As() {
        return this.Ss;
    }
    Bs() {
        return this.Cs;
    }
    Es(t, i, s) {
        this.ws || (this.ws = !0), this.ps = !0, this.zs(t, i, s);
    }
    At() {
        return this.fs;
    }
    si() {
        return this.bs;
    }
    ni() {
        return this.xs;
    }
    Vt() {
        return this.ps;
    }
    Ls() {
        this.ps = !1, this.Os(), this.ds = NaN, this.bs = NaN, this.xs = NaN, this.yt = null, this.Is(), this.Ns();
    }
    Ws(t) {
        let i = this.gs.get(t);
        i || (i = new E(this, t), this.gs.set(t, i));
        let s = this.Ms.get(t);
        return s || (s = new A(this.ts, this, t), this.Ms.set(t, s)), [
            i,
            s
        ];
    }
    ti(t) {
        return t === this.yt && this.ys.horzLine.visible;
    }
    ii() {
        return this.ys.vertLine.visible;
    }
    Fs(t, i) {
        this.ps && this.yt === t || this.vs.clear();
        const s = [];
        return this.yt === t && s.push(this.Hs(this.vs, i, this.ks)), s;
    }
    cs() {
        return this.ps ? [
            this.Ds
        ] : [];
    }
    Us() {
        return this.yt;
    }
    Ns() {
        this.ts.$s().forEach((t)=>{
            this.gs.get(t)?.kt(), this.Ms.get(t)?.kt();
        }), this.vs.forEach((t)=>t.kt()), this.Ds.kt();
    }
    qs(t) {
        return t && !t.Ps().Zi() ? t.Ps() : null;
    }
    zs(t, i, s) {
        this.Ys(t, i, s) && this.Ns();
    }
    Ys(t, i, s) {
        const n = this.bs, e = this.xs, r = this.ds, h = this.fs, a = this.yt, l = this.qs(s);
        this.fs = t, this.bs = isNaN(t) ? NaN : this.ts.Bt().qt(t), this.yt = s;
        const o = null !== l ? l.zt() : null;
        return null !== l && null !== o ? (this.ds = i, this.xs = l.Nt(i, o)) : (this.ds = NaN, this.xs = NaN), n !== this.bs || e !== this.xs || h !== this.fs || r !== this.ds || a !== this.yt;
    }
    Os() {
        const t = this.ts.js().map((t)=>t.Ks().Zs()).filter(M), i = 0 === t.length ? null : Math.max(...t);
        this.fs = null !== i ? i : NaN;
    }
    Hs(t, i, s) {
        let n = t.get(i);
        return void 0 === n && (n = new U(this, i, s), t.set(i, n)), n;
    }
}
function X(t) {
    return "left" === t || "right" === t;
}
class G {
    constructor(t){
        this.Xs = new Map, this.Gs = [], this.Js = t;
    }
    Qs(t, i) {
        const s = function(t, i) {
            return void 0 === t ? i : {
                tn: Math.max(t.tn, i.tn),
                sn: t.sn || i.sn
            };
        }(this.Xs.get(t), i);
        this.Xs.set(t, s);
    }
    nn() {
        return this.Js;
    }
    en(t) {
        const i = this.Xs.get(t);
        return void 0 === i ? {
            tn: this.Js
        } : {
            tn: Math.max(this.Js, i.tn),
            sn: i.sn
        };
    }
    rn() {
        this.hn(), this.Gs = [
            {
                an: 0
            }
        ];
    }
    ln(t) {
        this.hn(), this.Gs = [
            {
                an: 1,
                Ft: t
            }
        ];
    }
    _n(t) {
        this.un(), this.Gs.push({
            an: 5,
            Ft: t
        });
    }
    hn() {
        this.un(), this.Gs.push({
            an: 6
        });
    }
    cn() {
        this.hn(), this.Gs = [
            {
                an: 4
            }
        ];
    }
    dn(t) {
        this.hn(), this.Gs.push({
            an: 2,
            Ft: t
        });
    }
    fn(t) {
        this.hn(), this.Gs.push({
            an: 3,
            Ft: t
        });
    }
    pn() {
        return this.Gs;
    }
    vn(t) {
        for (const i of t.Gs)this.mn(i);
        this.Js = Math.max(this.Js, t.Js), t.Xs.forEach((t, i)=>{
            this.Qs(i, t);
        });
    }
    static wn() {
        return new G(2);
    }
    static gn() {
        return new G(3);
    }
    mn(t) {
        switch(t.an){
            case 0:
                this.rn();
                break;
            case 1:
                this.ln(t.Ft);
                break;
            case 2:
                this.dn(t.Ft);
                break;
            case 3:
                this.fn(t.Ft);
                break;
            case 4:
                this.cn();
                break;
            case 5:
                this._n(t.Ft);
                break;
            case 6:
                this.un();
        }
    }
    un() {
        const t = this.Gs.findIndex((t)=>5 === t.an);
        -1 !== t && this.Gs.splice(t, 1);
    }
}
const J = ".";
function Q(t, i) {
    if (!p(t)) return "n/a";
    if (!v(i)) throw new TypeError("invalid length");
    if (i < 0 || i > 16) throw new TypeError("invalid length");
    if (0 === i) return t.toString();
    return ("0000000000000000" + t.toString()).slice(-i);
}
class tt {
    constructor(t, i){
        if (i || (i = 1), p(t) && v(t) || (t = 100), t < 0) throw new TypeError("invalid base");
        this.Yi = t, this.Mn = i, this.bn();
    }
    format(t) {
        const i = t < 0 ? "\u2212" : "";
        return t = Math.abs(t), i + this.xn(t);
    }
    bn() {
        if (this.Sn = 0, this.Yi > 0 && this.Mn > 0) {
            let t = this.Yi;
            for(; t > 1;)t /= 10, this.Sn++;
        }
    }
    xn(t) {
        const i = this.Yi / this.Mn;
        let s = Math.floor(t), n = "";
        const e = void 0 !== this.Sn ? this.Sn : NaN;
        if (i > 1) {
            let r = +(Math.round(t * i) - s * i).toFixed(this.Sn);
            r >= i && (r -= i, s += 1), n = J + Q(+r.toFixed(this.Sn) * this.Mn, e);
        } else s = Math.round(s * i) / i, e > 0 && (n = J + Q(0, e));
        return s.toFixed(0) + n;
    }
}
class it extends tt {
    constructor(t = 100){
        super(t);
    }
    format(t) {
        return `${super.format(t)}%`;
    }
}
class st {
    constructor(t){
        this.Cn = t;
    }
    format(t) {
        let i = "";
        return t < 0 && (i = "-", t = -t), t < 995 ? i + this.yn(t) : t < 999995 ? i + this.yn(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), i + this.yn(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), i + this.yn(t / 1e9) + "B");
    }
    yn(t) {
        let i;
        const s = Math.pow(10, this.Cn);
        return i = (t = Math.round(t * s) / s) >= 1e-15 && t < 1 ? t.toFixed(this.Cn).replace(/\.?0+$/, "") : String(t), i.replace(/(\.[1-9]*)0+$/, (t, i)=>i);
    }
}
const nt = /[2-9]/g;
class et {
    constructor(t = 50){
        this.kn = 0, this.Pn = 1, this.Tn = 1, this.Rn = {}, this.Dn = new Map, this.Vn = t;
    }
    In() {
        this.kn = 0, this.Dn.clear(), this.Pn = 1, this.Tn = 1, this.Rn = {};
    }
    Vi(t, i, s) {
        return this.An(t, i, s).width;
    }
    Di(t, i, s) {
        const n = this.An(t, i, s);
        return ((n.actualBoundingBoxAscent || 0) - (n.actualBoundingBoxDescent || 0)) / 2;
    }
    An(t, i, s) {
        const n = s || nt, e = String(i).replace(n, "0");
        if (this.Dn.has(e)) return _(this.Dn.get(e)).Bn;
        if (this.kn === this.Vn) {
            const t = this.Rn[this.Tn];
            delete this.Rn[this.Tn], this.Dn.delete(t), this.Tn++, this.kn--;
        }
        t.save(), t.textBaseline = "middle";
        const r = t.measureText(e);
        return t.restore(), 0 === r.width && i.length || (this.Dn.set(e, {
            Bn: r,
            En: this.Pn
        }), this.Rn[this.Pn] = e, this.kn++, this.Pn++), r;
    }
}
class rt {
    constructor(t){
        this.zn = null, this.M = null, this.Ln = "right", this.On = t;
    }
    Nn(t, i, s) {
        this.zn = t, this.M = i, this.Ln = s;
    }
    nt(t) {
        null !== this.M && null !== this.zn && this.zn.nt(t, this.M, this.On, this.Ln);
    }
}
class ht {
    constructor(t, i, s){
        this.Wn = t, this.On = new et(50), this.Fn = i, this.O = s, this.W = -1, this.Gt = new rt(this.On);
    }
    Tt() {
        const t = this.O.Hn(this.Fn);
        if (null === t) return null;
        const i = t.Un(this.Fn) ? t.$n() : this.Fn.Wt();
        if (null === i) return null;
        const s = t.qn(i);
        if ("overlay" === s) return null;
        const n = this.O.Yn();
        return n.k !== this.W && (this.W = n.k, this.On.In()), this.Gt.Nn(this.Wn.$i(), n, s), this.Gt;
    }
}
class at extends R {
    constructor(){
        super(...arguments), this.Yt = null;
    }
    ht(t) {
        this.Yt = t;
    }
    jn(t, i) {
        if (!this.Yt?.Vt) return null;
        const { ut: s, ct: n, Zn: e } = this.Yt;
        return i >= s - n - 7 && i <= s + n + 7 ? {
            Kn: this.Yt,
            Zn: e
        } : null;
    }
    et({ context: t, bitmapSize: i, horizontalPixelRatio: s, verticalPixelRatio: n }) {
        if (null === this.Yt) return;
        if (!1 === this.Yt.Vt) return;
        const e = Math.round(this.Yt.ut * n);
        e < 0 || e > i.height || (t.lineCap = "butt", t.strokeStyle = this.Yt.R, t.lineWidth = Math.floor(this.Yt.ct * s), a(t, this.Yt.Kt), l(t, e, 0, i.width));
    }
}
class lt {
    constructor(t){
        this.Xn = {
            ut: 0,
            R: "rgba(0, 0, 0, 0)",
            ct: 1,
            Kt: 0,
            Vt: !1
        }, this.Gn = new at, this.St = !0, this.Jn = t, this.Qn = t.Qt(), this.Gn.ht(this.Xn);
    }
    kt() {
        this.St = !0;
    }
    Tt() {
        return this.Jn.Vt() ? (this.St && (this.te(), this.St = !1), this.Gn) : null;
    }
}
class ot extends lt {
    constructor(t){
        super(t);
    }
    te() {
        this.Xn.Vt = !1;
        const t = this.Jn.Wt(), i = t.ie().ie;
        if (2 !== i && 3 !== i) return;
        const s = this.Jn.N();
        if (!s.baseLineVisible || !this.Jn.Vt()) return;
        const n = this.Jn.zt();
        null !== n && (this.Xn.Vt = !0, this.Xn.ut = t.Nt(n.Ft, n.Ft), this.Xn.R = s.baseLineColor, this.Xn.ct = s.baseLineWidth, this.Xn.Kt = s.baseLineStyle);
    }
}
class _t extends R {
    constructor(){
        super(...arguments), this.Yt = null;
    }
    ht(t) {
        this.Yt = t;
    }
    se() {
        return this.Yt;
    }
    et({ context: t, horizontalPixelRatio: i, verticalPixelRatio: s }) {
        const n = this.Yt;
        if (null === n) return;
        const e = Math.max(1, Math.floor(i)), r = e % 2 / 2, h = Math.round(n.ne.x * i) + r, a = n.ne.y * s;
        t.fillStyle = n.ee, t.beginPath();
        const l = Math.max(2, 1.5 * n.re) * i;
        t.arc(h, a, l, 0, 2 * Math.PI, !1), t.fill(), t.fillStyle = n.he, t.beginPath(), t.arc(h, a, n.ft * i, 0, 2 * Math.PI, !1), t.fill(), t.lineWidth = e, t.strokeStyle = n.ae, t.beginPath(), t.arc(h, a, n.ft * i + e / 2, 0, 2 * Math.PI, !1), t.stroke();
    }
}
const ut = [
    {
        le: 0,
        oe: .25,
        _e: 4,
        ue: 10,
        ce: .25,
        de: 0,
        fe: .4,
        pe: .8
    },
    {
        le: .25,
        oe: .525,
        _e: 10,
        ue: 14,
        ce: 0,
        de: 0,
        fe: .8,
        pe: 0
    },
    {
        le: .525,
        oe: 1,
        _e: 14,
        ue: 14,
        ce: 0,
        de: 0,
        fe: 0,
        pe: 0
    }
];
class ct {
    constructor(t){
        this.Gt = new _t, this.St = !0, this.ve = !0, this.me = performance.now(), this.we = this.me - 1, this.ge = t;
    }
    Me() {
        this.we = this.me - 1, this.kt();
    }
    be() {
        if (this.kt(), 2 === this.ge.N().lastPriceAnimation) {
            const t = performance.now(), i = this.we - t;
            if (i > 0) return void (i < 650 && (this.we += 2600));
            this.me = t, this.we = t + 2600;
        }
    }
    kt() {
        this.St = !0;
    }
    xe() {
        this.ve = !0;
    }
    Vt() {
        return 0 !== this.ge.N().lastPriceAnimation;
    }
    Se() {
        switch(this.ge.N().lastPriceAnimation){
            case 0:
                return !1;
            case 1:
                return !0;
            case 2:
                return performance.now() <= this.we;
        }
    }
    Tt() {
        return this.St ? (this.Rt(), this.St = !1, this.ve = !1) : this.ve && (this.Ce(), this.ve = !1), this.Gt;
    }
    Rt() {
        this.Gt.ht(null);
        const t = this.ge.Qt().Bt(), i = t.ye(), s = this.ge.zt();
        if (null === i || null === s) return;
        const n = this.ge.ke(!0);
        if (n.Pe || !i.Te(n.Re)) return;
        const e = {
            x: t.qt(n.Re),
            y: this.ge.Wt().Nt(n.gt, s.Ft)
        }, r = n.R, h = this.ge.N().lineWidth, a = this.De(this.Ve(), r);
        this.Gt.ht({
            ee: r,
            re: h,
            he: a.he,
            ae: a.ae,
            ft: a.ft,
            ne: e
        });
    }
    Ce() {
        const t = this.Gt.se();
        if (null !== t) {
            const i = this.De(this.Ve(), t.ee);
            t.he = i.he, t.ae = i.ae, t.ft = i.ft;
        }
    }
    Ve() {
        return this.Se() ? performance.now() - this.me : 2599;
    }
    Ie(t, i, s, n) {
        const e = s + (n - s) * i;
        return this.ge.Qt().Ki().j(t, e);
    }
    De(t, i) {
        const s = t % 2600 / 2600;
        let n;
        for (const t of ut)if (s >= t.le && s <= t.oe) {
            n = t;
            break;
        }
        o(void 0 !== n, "Last price animation internal logic error");
        const e = (s - n.le) / (n.oe - n.le);
        var r, h, a;
        return {
            he: this.Ie(i, e, n.ce, n.de),
            ae: this.Ie(i, e, n.fe, n.pe),
            ft: (r = e, h = n._e, a = n.ue, h + (a - h) * r)
        };
    }
}
class dt extends lt {
    constructor(t){
        super(t);
    }
    te() {
        const t = this.Xn;
        t.Vt = !1;
        const i = this.Jn.N();
        if (!i.priceLineVisible || !this.Jn.Vt()) return;
        const s = this.Jn.ke(0 === i.priceLineSource);
        s.Pe || (t.Vt = !0, t.ut = s.Ai, t.R = this.Jn.Ae(s.R), t.ct = i.priceLineWidth, t.Kt = i.priceLineStyle);
    }
}
class ft extends H {
    constructor(t){
        super(), this.Jt = t;
    }
    qi(t, i, s) {
        t.Vt = !1, i.Vt = !1;
        const n = this.Jt;
        if (!n.Vt()) return;
        const e = n.N(), r = e.lastValueVisible, h = "" !== n.Be(), a = 0 === e.seriesLastValueMode, l = n.ke(!1);
        if (l.Pe) return;
        r && (t.ri = this.Ee(l, r, a), t.Vt = 0 !== t.ri.length), (h || a) && (i.ri = this.ze(l, r, h, a), i.Vt = i.ri.length > 0);
        const o = n.Ae(l.R), _ = this.Jt.Qt().Ki().K(o);
        s.X = _.X, s.Ai = l.Ai, i.Ht = n.Qt().Ut(l.Ai / n.Wt().$t()), t.Ht = o, t.R = _.G, i.R = _.G;
    }
    ze(t, i, s, n) {
        let e = "";
        const r = this.Jt.Be();
        return s && 0 !== r.length && (e += `${r} `), i && n && (e += this.Jt.Wt().Le() ? t.Oe : t.Ne), e.trim();
    }
    Ee(t, i, s) {
        return i ? s ? this.Jt.Wt().Le() ? t.Ne : t.Oe : t.ri : "";
    }
}
function pt(t, i, s, n) {
    const e = Number.isFinite(i), r = Number.isFinite(s);
    return e && r ? t(i, s) : e || r ? e ? i : s : n;
}
class vt {
    constructor(t, i){
        this.We = t, this.Fe = i;
    }
    He(t) {
        return null !== t && this.We === t.We && this.Fe === t.Fe;
    }
    Ue() {
        return new vt(this.We, this.Fe);
    }
    $e() {
        return this.We;
    }
    qe() {
        return this.Fe;
    }
    Ye() {
        return this.Fe - this.We;
    }
    Zi() {
        return this.Fe === this.We || Number.isNaN(this.Fe) || Number.isNaN(this.We);
    }
    vn(t) {
        return null === t ? this : new vt(pt(Math.min, this.$e(), t.$e(), -1 / 0), pt(Math.max, this.qe(), t.qe(), 1 / 0));
    }
    je(t) {
        if (!p(t)) return;
        if (0 === this.Fe - this.We) return;
        const i = .5 * (this.Fe + this.We);
        let s = this.Fe - i, n = this.We - i;
        s *= t, n *= t, this.Fe = i + s, this.We = i + n;
    }
    Ze(t) {
        p(t) && (this.Fe += t, this.We += t);
    }
    Ke() {
        return {
            minValue: this.We,
            maxValue: this.Fe
        };
    }
    static Xe(t) {
        return null === t ? null : new vt(t.minValue, t.maxValue);
    }
}
class mt {
    constructor(t, i){
        this.Ge = t, this.Je = i || null;
    }
    Qe() {
        return this.Ge;
    }
    tr() {
        return this.Je;
    }
    Ke() {
        return {
            priceRange: null === this.Ge ? null : this.Ge.Ke(),
            margins: this.Je || void 0
        };
    }
    static Xe(t) {
        return null === t ? null : new mt(vt.Xe(t.priceRange), t.margins);
    }
}
class wt extends lt {
    constructor(t, i){
        super(t), this.ir = i;
    }
    te() {
        const t = this.Xn;
        t.Vt = !1;
        const i = this.ir.N();
        if (!this.Jn.Vt() || !i.lineVisible) return;
        const s = this.ir.sr();
        null !== s && (t.Vt = !0, t.ut = s, t.R = i.color, t.ct = i.lineWidth, t.Kt = i.lineStyle, t.Zn = this.ir.N().id);
    }
}
class gt extends H {
    constructor(t, i){
        super(), this.ge = t, this.ir = i;
    }
    qi(t, i, s) {
        t.Vt = !1, i.Vt = !1;
        const n = this.ir.N(), e = n.axisLabelVisible, r = "" !== n.title, h = this.ge;
        if (!e || !h.Vt()) return;
        const a = this.ir.sr();
        if (null === a) return;
        r && (i.ri = n.title, i.Vt = !0), i.Ht = h.Qt().Ut(a / h.Wt().$t()), t.ri = this.nr(n.price), t.Vt = !0;
        const l = this.ge.Qt().Ki().K(n.axisLabelColor || n.color);
        s.X = l.X;
        const o = n.axisLabelTextColor || l.G;
        t.R = o, i.R = o, s.Ai = a;
    }
    nr(t) {
        const i = this.ge.zt();
        return null === i ? "" : this.ge.Wt().Xi(t, i.Ft);
    }
}
class Mt {
    constructor(t, i){
        this.ge = t, this.ys = i, this.er = new wt(t, this), this.Wn = new gt(t, this), this.rr = new ht(this.Wn, t, t.Qt());
    }
    hr(t) {
        f(this.ys, t), this.kt(), this.ge.Qt().ar();
    }
    N() {
        return this.ys;
    }
    lr() {
        return this.er;
    }
    _r() {
        return this.rr;
    }
    ur() {
        return this.Wn;
    }
    kt() {
        this.er.kt(), this.Wn.kt();
    }
    sr() {
        const t = this.ge, i = t.Wt();
        if (t.Qt().Bt().Zi() || i.Zi()) return null;
        const s = t.zt();
        return null === s ? null : i.Nt(this.ys.price, s.Ft);
    }
}
class bt extends j {
    constructor(t){
        super(), this.ts = t;
    }
    Qt() {
        return this.ts;
    }
}
const xt = {
    Bar: (t, i, s, n)=>{
        const e = i.upColor, r = i.downColor, h = u(t(s, n)), a = c(h.Ft[0]) <= c(h.Ft[3]);
        return {
            cr: h.R ?? (a ? e : r)
        };
    },
    Candlestick: (t, i, s, n)=>{
        const e = i.upColor, r = i.downColor, h = i.borderUpColor, a = i.borderDownColor, l = i.wickUpColor, o = i.wickDownColor, _ = u(t(s, n)), d = c(_.Ft[0]) <= c(_.Ft[3]);
        return {
            cr: _.R ?? (d ? e : r),
            dr: _.Ht ?? (d ? h : a),
            pr: _.vr ?? (d ? l : o)
        };
    },
    Custom: (t, i, s, n)=>({
            cr: u(t(s, n)).R ?? i.color
        }),
    Area: (t, i, s, n)=>{
        const e = u(t(s, n));
        return {
            cr: e.vt ?? i.lineColor,
            vt: e.vt ?? i.lineColor,
            mr: e.mr ?? i.topColor,
            wr: e.wr ?? i.bottomColor
        };
    },
    Baseline: (t, i, s, n)=>{
        const e = u(t(s, n));
        return {
            cr: e.Ft[3] >= i.baseValue.price ? i.topLineColor : i.bottomLineColor,
            gr: e.gr ?? i.topLineColor,
            Mr: e.Mr ?? i.bottomLineColor,
            br: e.br ?? i.topFillColor1,
            Sr: e.Sr ?? i.topFillColor2,
            Cr: e.Cr ?? i.bottomFillColor1,
            yr: e.yr ?? i.bottomFillColor2
        };
    },
    Line: (t, i, s, n)=>{
        const e = u(t(s, n));
        return {
            cr: e.R ?? i.color,
            vt: e.R ?? i.color
        };
    },
    Histogram: (t, i, s, n)=>({
            cr: u(t(s, n)).R ?? i.color
        })
};
class St {
    constructor(t){
        this.kr = (t, i)=>void 0 !== i ? i.Ft : this.ge.Ks().Pr(t), this.ge = t, this.Tr = xt[t.Rr()];
    }
    Dr(t, i) {
        return this.Tr(this.kr, this.ge.N(), t, i);
    }
}
function Ct(t, i, s, n, e = 0, r = i.length) {
    let h = r - e;
    for(; 0 < h;){
        const r = h >> 1, a = e + r;
        n(i[a], s) === t ? (e = a + 1, h -= r + 1) : h = r;
    }
    return e;
}
const yt = Ct.bind(null, !0), kt = Ct.bind(null, !1);
var Pt;
!function(t) {
    t[t.NearestLeft = -1] = "NearestLeft", t[t.None = 0] = "None", t[t.NearestRight = 1] = "NearestRight";
}(Pt || (Pt = {}));
const Tt = 30;
class Rt {
    constructor(){
        this.Vr = [], this.Ir = new Map, this.Ar = new Map, this.Br = [];
    }
    Er() {
        return this.zr() > 0 ? this.Vr[this.Vr.length - 1] : null;
    }
    Lr() {
        return this.zr() > 0 ? this.Or(0) : null;
    }
    Zs() {
        return this.zr() > 0 ? this.Or(this.Vr.length - 1) : null;
    }
    zr() {
        return this.Vr.length;
    }
    Zi() {
        return 0 === this.zr();
    }
    Te(t) {
        return null !== this.Nr(t, 0);
    }
    Pr(t) {
        return this.Wr(t);
    }
    Wr(t, i = 0) {
        const s = this.Nr(t, i);
        return null === s ? null : {
            ...this.Fr(s),
            Re: this.Or(s)
        };
    }
    Hr() {
        return this.Vr;
    }
    Ur(t, i, s) {
        if (this.Zi()) return null;
        let n = null;
        for (const e of s)n = Dt(n, this.$r(t, i, e));
        return n;
    }
    ht(t) {
        this.Ar.clear(), this.Ir.clear(), this.Vr = t, this.Br = t.map((t)=>t.Re);
    }
    qr() {
        return this.Br;
    }
    Or(t) {
        return this.Vr[t].Re;
    }
    Fr(t) {
        return this.Vr[t];
    }
    Nr(t, i) {
        const s = this.Yr(t);
        if (null === s && 0 !== i) switch(i){
            case -1:
                return this.jr(t);
            case 1:
                return this.Zr(t);
            default:
                throw new TypeError("Unknown search mode");
        }
        return s;
    }
    jr(t) {
        let i = this.Kr(t);
        return i > 0 && (i -= 1), i !== this.Vr.length && this.Or(i) < t ? i : null;
    }
    Zr(t) {
        const i = this.Xr(t);
        return i !== this.Vr.length && t < this.Or(i) ? i : null;
    }
    Yr(t) {
        const i = this.Kr(t);
        return i === this.Vr.length || t < this.Vr[i].Re ? null : i;
    }
    Kr(t) {
        return yt(this.Vr, t, (t, i)=>t.Re < i);
    }
    Xr(t) {
        return kt(this.Vr, t, (t, i)=>t.Re > i);
    }
    Gr(t, i, s) {
        let n = null;
        for(let e = t; e < i; e++){
            const t = this.Vr[e].Ft[s];
            Number.isNaN(t) || (null === n ? n = {
                Jr: t,
                Qr: t
            } : (t < n.Jr && (n.Jr = t), t > n.Qr && (n.Qr = t)));
        }
        return n;
    }
    $r(t, i, s) {
        if (this.Zi()) return null;
        let n = null;
        const e = u(this.Lr()), r = u(this.Zs()), h = Math.max(t, e), a = Math.min(i, r), l = Math.ceil(h / Tt) * Tt, o = Math.max(l, Math.floor(a / Tt) * Tt);
        {
            const t = this.Kr(h), e = this.Xr(Math.min(a, l, i));
            n = Dt(n, this.Gr(t, e, s));
        }
        let _ = this.Ir.get(s);
        void 0 === _ && (_ = new Map, this.Ir.set(s, _));
        for(let t = Math.max(l + 1, h); t < o; t += Tt){
            const i = Math.floor(t / Tt);
            let e = _.get(i);
            if (void 0 === e) {
                const t = this.Kr(i * Tt), n = this.Xr((i + 1) * Tt - 1);
                e = this.Gr(t, n, s), _.set(i, e);
            }
            n = Dt(n, e);
        }
        {
            const t = this.Kr(o), i = this.Xr(a);
            n = Dt(n, this.Gr(t, i, s));
        }
        return n;
    }
}
function Dt(t, i) {
    if (null === t) return i;
    if (null === i) return t;
    return {
        Jr: Math.min(t.Jr, i.Jr),
        Qr: Math.max(t.Qr, i.Qr)
    };
}
class Vt {
    constructor(t){
        this.th = t;
    }
    nt(t, i, s) {
        this.th.draw(t);
    }
    ih(t, i, s) {
        this.th.drawBackground?.(t);
    }
}
class It {
    constructor(t){
        this.Dn = null, this.sh = t;
    }
    Tt() {
        const t = this.sh.renderer();
        if (null === t) return null;
        if (this.Dn?.nh === t) return this.Dn.eh;
        const i = new Vt(t);
        return this.Dn = {
            nh: t,
            eh: i
        }, i;
    }
    rh() {
        return this.sh.zOrder?.() ?? "normal";
    }
}
class At {
    constructor(t){
        this.hh = null, this.ah = t;
    }
    oh() {
        return this.ah;
    }
    Ns() {
        this.ah.updateAllViews?.();
    }
    Ws() {
        const t = this.ah.paneViews?.() ?? [];
        if (this.hh?.nh === t) return this.hh.eh;
        const i = t.map((t)=>new It(t));
        return this.hh = {
            nh: t,
            eh: i
        }, i;
    }
    jn(t, i) {
        return this.ah.hitTest?.(t, i) ?? null;
    }
}
let Bt = class extends At {
    us() {
        return [];
    }
};
class Et {
    constructor(t){
        this.th = t;
    }
    nt(t, i, s) {
        this.th.draw(t);
    }
    ih(t, i, s) {
        this.th.drawBackground?.(t);
    }
}
class zt {
    constructor(t){
        this.Dn = null, this.sh = t;
    }
    Tt() {
        const t = this.sh.renderer();
        if (null === t) return null;
        if (this.Dn?.nh === t) return this.Dn.eh;
        const i = new Et(t);
        return this.Dn = {
            nh: t,
            eh: i
        }, i;
    }
    rh() {
        return this.sh.zOrder?.() ?? "normal";
    }
}
function Lt(t) {
    return {
        ri: t.text(),
        Ai: t.coordinate(),
        Ii: t.fixedCoordinate?.(),
        R: t.textColor(),
        X: t.backColor(),
        Vt: t.visible?.() ?? !0,
        pi: t.tickVisible?.() ?? !0
    };
}
class Ot {
    constructor(t, i){
        this.Gt = new q, this._h = t, this.uh = i;
    }
    Tt() {
        return this.Gt.ht({
            Qi: this.uh.Qi(),
            ...Lt(this._h)
        }), this.Gt;
    }
}
class Nt extends H {
    constructor(t, i){
        super(), this._h = t, this.Yi = i;
    }
    qi(t, i, s) {
        const n = Lt(this._h);
        s.X = n.X, t.R = n.R;
        const e = 2 / 12 * this.Yi.k();
        s.Ti = e, s.Ri = e, s.Ai = n.Ai, s.Ii = n.Ii, t.ri = n.ri, t.Vt = n.Vt, t.pi = n.pi;
    }
}
class Wt extends At {
    constructor(t, i){
        super(t), this.dh = null, this.fh = null, this.ph = null, this.mh = null, this.ge = i;
    }
    cs() {
        const t = this.ah.timeAxisViews?.() ?? [];
        if (this.dh?.nh === t) return this.dh.eh;
        const i = this.ge.Qt().Bt(), s = t.map((t)=>new Ot(t, i));
        return this.dh = {
            nh: t,
            eh: s
        }, s;
    }
    Fs() {
        const t = this.ah.priceAxisViews?.() ?? [];
        if (this.fh?.nh === t) return this.fh.eh;
        const i = this.ge.Wt(), s = t.map((t)=>new Nt(t, i));
        return this.fh = {
            nh: t,
            eh: s
        }, s;
    }
    wh() {
        const t = this.ah.priceAxisPaneViews?.() ?? [];
        if (this.ph?.nh === t) return this.ph.eh;
        const i = t.map((t)=>new zt(t));
        return this.ph = {
            nh: t,
            eh: i
        }, i;
    }
    gh() {
        const t = this.ah.timeAxisPaneViews?.() ?? [];
        if (this.mh?.nh === t) return this.mh.eh;
        const i = t.map((t)=>new zt(t));
        return this.mh = {
            nh: t,
            eh: i
        }, i;
    }
    Mh(t, i) {
        return this.ah.autoscaleInfo?.(t, i) ?? null;
    }
}
function Ft(t, i, s, n) {
    t.forEach((t)=>{
        i(t).forEach((t)=>{
            t.rh() === s && n.push(t);
        });
    });
}
function Ht(t) {
    return t.Ws();
}
function Ut(t) {
    return t.wh();
}
function $t(t) {
    return t.gh();
}
const qt = [
    "Area",
    "Line",
    "Baseline"
];
class Yt extends bt {
    constructor(t, i, s, n, e){
        super(t), this.Yt = new Rt, this.er = new dt(this), this.bh = [], this.xh = new ot(this), this.Sh = null, this.Ch = null, this.yh = null, this.kh = [], this.ys = s, this.Ph = i;
        const r = new ft(this);
        this.vs = [
            r
        ], this.rr = new ht(r, this, t), qt.includes(this.Ph) && (this.Sh = new ct(this)), this.Th(), this.sh = n(this, this.Qt(), e);
    }
    m() {
        null !== this.yh && clearTimeout(this.yh);
    }
    Ae(t) {
        return this.ys.priceLineColor || t;
    }
    ke(t) {
        const i = {
            Pe: !0
        }, s = this.Wt();
        if (this.Qt().Bt().Zi() || s.Zi() || this.Yt.Zi()) return i;
        const n = this.Qt().Bt().ye(), e = this.zt();
        if (null === n || null === e) return i;
        let r, h;
        if (t) {
            const t = this.Yt.Er();
            if (null === t) return i;
            r = t, h = t.Re;
        } else {
            const t = this.Yt.Wr(n.bi(), -1);
            if (null === t) return i;
            if (r = this.Yt.Pr(t.Re), null === r) return i;
            h = t.Re;
        }
        const a = r.Ft[3], l = this.Rh().Dr(h, {
            Ft: r
        }), o = s.Nt(a, e.Ft);
        return {
            Pe: !1,
            gt: a,
            ri: s.Xi(a, e.Ft),
            Oe: s.Dh(a),
            Ne: s.Vh(a, e.Ft),
            R: l.cr,
            Ai: o,
            Re: h
        };
    }
    Rh() {
        return null !== this.Ch || (this.Ch = new St(this)), this.Ch;
    }
    N() {
        return this.ys;
    }
    hr(t) {
        const i = t.priceScaleId;
        void 0 !== i && i !== this.ys.priceScaleId && this.Qt().Ih(this, i), f(this.ys, t), void 0 !== t.priceFormat && (this.Th(), this.Qt().Ah()), this.Qt().Bh(this), this.Qt().Eh(), this.sh.kt("options");
    }
    ht(t, i) {
        this.Yt.ht(t), this.sh.kt("data"), null !== this.Sh && (i && i.zh ? this.Sh.be() : 0 === t.length && this.Sh.Me());
        const s = this.Qt().Hn(this);
        this.Qt().Lh(s), this.Qt().Bh(this), this.Qt().Eh(), this.Qt().ar();
    }
    Oh(t) {
        const i = new Mt(this, t);
        return this.bh.push(i), this.Qt().Bh(this), i;
    }
    Nh(t) {
        const i = this.bh.indexOf(t);
        -1 !== i && this.bh.splice(i, 1), this.Qt().Bh(this);
    }
    Wh() {
        return this.bh;
    }
    Rr() {
        return this.Ph;
    }
    zt() {
        const t = this.Fh();
        return null === t ? null : {
            Ft: t.Ft[3],
            Hh: t.wt
        };
    }
    Fh() {
        const t = this.Qt().Bt().ye();
        if (null === t) return null;
        const i = t.Uh();
        return this.Yt.Wr(i, 1);
    }
    Ks() {
        return this.Yt;
    }
    $h(t) {
        const i = this.Yt.Pr(t);
        return null === i ? null : "Bar" === this.Ph || "Candlestick" === this.Ph || "Custom" === this.Ph ? {
            qh: i.Ft[0],
            Yh: i.Ft[1],
            jh: i.Ft[2],
            Zh: i.Ft[3]
        } : i.Ft[3];
    }
    Kh(t) {
        const i = [];
        Ft(this.kh, Ht, "top", i);
        const s = this.Sh;
        return null !== s && s.Vt() ? (null === this.yh && s.Se() && (this.yh = setTimeout(()=>{
            this.yh = null, this.Qt().Xh();
        }, 0)), s.xe(), i.unshift(s), i) : i;
    }
    Ws() {
        const t = [];
        this.Gh() || t.push(this.xh), t.push(this.sh, this.er);
        const i = this.bh.map((t)=>t.lr());
        return t.push(...i), Ft(this.kh, Ht, "normal", t), t;
    }
    Jh() {
        return this.Qh(Ht, "bottom");
    }
    ta(t) {
        return this.Qh(Ut, t);
    }
    ia(t) {
        return this.Qh($t, t);
    }
    sa(t, i) {
        return this.kh.map((s)=>s.jn(t, i)).filter((t)=>null !== t);
    }
    us() {
        return [
            this.rr,
            ...this.bh.map((t)=>t._r())
        ];
    }
    Fs(t, i) {
        if (i !== this.es && !this.Gh()) return [];
        const s = [
            ...this.vs
        ];
        for (const t of this.bh)s.push(t.ur());
        return this.kh.forEach((t)=>{
            s.push(...t.Fs());
        }), s;
    }
    cs() {
        const t = [];
        return this.kh.forEach((i)=>{
            t.push(...i.cs());
        }), t;
    }
    Mh(t, i) {
        if (void 0 !== this.ys.autoscaleInfoProvider) {
            const s = this.ys.autoscaleInfoProvider(()=>{
                const s = this.na(t, i);
                return null === s ? null : s.Ke();
            });
            return mt.Xe(s);
        }
        return this.na(t, i);
    }
    ea() {
        return this.ys.priceFormat.minMove;
    }
    ra() {
        return this.ha;
    }
    Ns() {
        this.sh.kt();
        for (const t of this.vs)t.kt();
        for (const t of this.bh)t.kt();
        this.er.kt(), this.xh.kt(), this.Sh?.kt(), this.kh.forEach((t)=>t.Ns());
    }
    Wt() {
        return u(super.Wt());
    }
    Et(t) {
        if (!(("Line" === this.Ph || "Area" === this.Ph || "Baseline" === this.Ph) && this.ys.crosshairMarkerVisible)) return null;
        const i = this.Yt.Pr(t);
        if (null === i) return null;
        return {
            gt: i.Ft[3],
            ft: this.aa(),
            Ht: this.la(),
            Ot: this.oa(),
            Lt: this._a(t)
        };
    }
    Be() {
        return this.ys.title;
    }
    Vt() {
        return this.ys.visible;
    }
    ua(t) {
        this.kh.push(new Wt(t, this));
    }
    ca(t) {
        this.kh = this.kh.filter((i)=>i.oh() !== t);
    }
    da() {
        if ("Custom" === this.Ph) return (t)=>this.sh.fa(t);
    }
    pa() {
        if ("Custom" === this.Ph) return (t)=>this.sh.va(t);
    }
    ma() {
        return this.Yt.qr();
    }
    Gh() {
        return !X(this.Wt().wa());
    }
    na(t, i) {
        if (!v(t) || !v(i) || this.Yt.Zi()) return null;
        const s = "Line" === this.Ph || "Area" === this.Ph || "Baseline" === this.Ph || "Histogram" === this.Ph ? [
            3
        ] : [
            2,
            1
        ], n = this.Yt.Ur(t, i, s);
        let e = null !== n ? new vt(n.Jr, n.Qr) : null, r = null;
        if ("Histogram" === this.Rr()) {
            const t = this.ys.base, i = new vt(t, t);
            e = null !== e ? e.vn(i) : i;
        }
        return this.kh.forEach((s)=>{
            const n = s.Mh(t, i);
            if (n?.priceRange) {
                const t = new vt(n.priceRange.minValue, n.priceRange.maxValue);
                e = null !== e ? e.vn(t) : t;
            }
            n?.margins && (r = n.margins);
        }), new mt(e, r);
    }
    aa() {
        switch(this.Ph){
            case "Line":
            case "Area":
            case "Baseline":
                return this.ys.crosshairMarkerRadius;
        }
        return 0;
    }
    la() {
        switch(this.Ph){
            case "Line":
            case "Area":
            case "Baseline":
                {
                    const t = this.ys.crosshairMarkerBorderColor;
                    if (0 !== t.length) return t;
                }
        }
        return null;
    }
    oa() {
        switch(this.Ph){
            case "Line":
            case "Area":
            case "Baseline":
                return this.ys.crosshairMarkerBorderWidth;
        }
        return 0;
    }
    _a(t) {
        switch(this.Ph){
            case "Line":
            case "Area":
            case "Baseline":
                {
                    const t = this.ys.crosshairMarkerBackgroundColor;
                    if (0 !== t.length) return t;
                }
        }
        return this.Rh().Dr(t).cr;
    }
    Th() {
        switch(this.ys.priceFormat.type){
            case "custom":
                this.ha = {
                    format: this.ys.priceFormat.formatter
                };
                break;
            case "volume":
                this.ha = new st(this.ys.priceFormat.precision);
                break;
            case "percent":
                this.ha = new it(this.ys.priceFormat.precision);
                break;
            default:
                {
                    const t = Math.pow(10, this.ys.priceFormat.precision);
                    this.ha = new tt(t, this.ys.priceFormat.minMove * t);
                }
        }
        null !== this.es && this.es.ga();
    }
    Qh(t, i) {
        const s = [];
        return Ft(this.kh, t, i, s), s;
    }
}
class jt {
    constructor(t){
        this.ys = t;
    }
    Ma(t, i, s) {
        let n = t;
        if (0 === this.ys.mode) return n;
        const e = s.Ps(), r = e.zt();
        if (null === r) return n;
        const h = e.Nt(t, r), a = s.ba().filter((t)=>t instanceof Yt).reduce((t, n)=>{
            if (s.Un(n) || !n.Vt()) return t;
            const e = n.Wt(), r = n.Ks();
            if (e.Zi() || !r.Te(i)) return t;
            const h = r.Pr(i);
            if (null === h) return t;
            const a = c(n.zt());
            return t.concat([
                e.Nt(h.Ft[3], a.Ft)
            ]);
        }, []);
        if (0 === a.length) return n;
        a.sort((t, i)=>Math.abs(t - h) - Math.abs(i - h));
        const l = a[0];
        return n = e.Ts(l, r), n;
    }
}
class Zt extends R {
    constructor(){
        super(...arguments), this.Yt = null;
    }
    ht(t) {
        this.Yt = t;
    }
    et({ context: t, bitmapSize: i, horizontalPixelRatio: s, verticalPixelRatio: n }) {
        if (null === this.Yt) return;
        const e = Math.max(1, Math.floor(s));
        t.lineWidth = e, function(t, i) {
            t.save(), t.lineWidth % 2 && t.translate(.5, .5), i(), t.restore();
        }(t, ()=>{
            const r = u(this.Yt);
            if (r.xa) {
                t.strokeStyle = r.Sa, a(t, r.Ca), t.beginPath();
                for (const n of r.ya){
                    const r = Math.round(n.ka * s);
                    t.moveTo(r, -e), t.lineTo(r, i.height + e);
                }
                t.stroke();
            }
            if (r.Pa) {
                t.strokeStyle = r.Ta, a(t, r.Ra), t.beginPath();
                for (const s of r.Da){
                    const r = Math.round(s.ka * n);
                    t.moveTo(-e, r), t.lineTo(i.width + e, r);
                }
                t.stroke();
            }
        });
    }
}
class Kt {
    constructor(t){
        this.Gt = new Zt, this.St = !0, this.yt = t;
    }
    kt() {
        this.St = !0;
    }
    Tt() {
        if (this.St) {
            const t = this.yt.Qt().N().grid, i = {
                Pa: t.horzLines.visible,
                xa: t.vertLines.visible,
                Ta: t.horzLines.color,
                Sa: t.vertLines.color,
                Ra: t.horzLines.style,
                Ca: t.vertLines.style,
                Da: this.yt.Ps().Va(),
                ya: (this.yt.Qt().Bt().Va() || []).map((t)=>({
                        ka: t.coord
                    }))
            };
            this.Gt.ht(i), this.St = !1;
        }
        return this.Gt;
    }
}
class Xt {
    constructor(t){
        this.sh = new Kt(t);
    }
    lr() {
        return this.sh;
    }
}
const Gt = {
    Ia: 4,
    Aa: 1e-4
};
function Jt(t, i) {
    const s = 100 * (t - i) / i;
    return i < 0 ? -s : s;
}
function Qt(t, i) {
    const s = Jt(t.$e(), i), n = Jt(t.qe(), i);
    return new vt(s, n);
}
function ti(t, i) {
    const s = 100 * (t - i) / i + 100;
    return i < 0 ? -s : s;
}
function ii(t, i) {
    const s = ti(t.$e(), i), n = ti(t.qe(), i);
    return new vt(s, n);
}
function si(t, i) {
    const s = Math.abs(t);
    if (s < 1e-15) return 0;
    const n = Math.log10(s + i.Aa) + i.Ia;
    return t < 0 ? -n : n;
}
function ni(t, i) {
    const s = Math.abs(t);
    if (s < 1e-15) return 0;
    const n = Math.pow(10, s - i.Ia) - i.Aa;
    return t < 0 ? -n : n;
}
function ei(t, i) {
    if (null === t) return null;
    const s = si(t.$e(), i), n = si(t.qe(), i);
    return new vt(s, n);
}
function ri(t, i) {
    if (null === t) return null;
    const s = ni(t.$e(), i), n = ni(t.qe(), i);
    return new vt(s, n);
}
function hi(t) {
    if (null === t) return Gt;
    const i = Math.abs(t.qe() - t.$e());
    if (i >= 1 || i < 1e-15) return Gt;
    const s = Math.ceil(Math.abs(Math.log10(i))), n = Gt.Ia + s;
    return {
        Ia: n,
        Aa: 1 / Math.pow(10, n)
    };
}
function ai(t, i, s) {
    return Math.min(Math.max(t, i), s);
}
function li(t, i, s) {
    return i - t <= s;
}
function oi(t) {
    const i = Math.ceil(t);
    return i % 2 == 0 ? i - 1 : i;
}
class _i {
    constructor(t, i){
        if (this.Ba = t, this.Ea = i, function(t) {
            if (t < 0) return !1;
            for(let i = t; i > 1; i /= 10)if (i % 10 != 0) return !1;
            return !0;
        }(this.Ba)) this.za = [
            2,
            2.5,
            2
        ];
        else {
            this.za = [];
            for(let t = this.Ba; 1 !== t;){
                if (t % 2 == 0) this.za.push(2), t /= 2;
                else {
                    if (t % 5 != 0) throw new Error("unexpected base");
                    this.za.push(2, 2.5), t /= 5;
                }
                if (this.za.length > 100) throw new Error("something wrong with base");
            }
        }
    }
    La(t, i, s) {
        const n = 0 === this.Ba ? 0 : 1 / this.Ba;
        let e = Math.pow(10, Math.max(0, Math.ceil(Math.log10(t - i)))), r = 0, h = this.Ea[0];
        for(;;){
            const t = li(e, n, 1e-14) && e > n + 1e-14, i = li(e, s * h, 1e-14), a = li(e, 1, 1e-14);
            if (!(t && i && a)) break;
            e /= h, h = this.Ea[++r % this.Ea.length];
        }
        if (e <= n + 1e-14 && (e = n), e = Math.max(1, e), this.za.length > 0 && (a = e, l = 1, o = 1e-14, Math.abs(a - l) < o)) for(r = 0, h = this.za[0]; li(e, s * h, 1e-14) && e > n + 1e-14;)e /= h, h = this.za[++r % this.za.length];
        var a, l, o;
        return e;
    }
}
class ui {
    constructor(t, i, s, n){
        this.Oa = [], this.Yi = t, this.Ba = i, this.Na = s, this.Wa = n;
    }
    La(t, i) {
        if (t < i) throw new Error("high < low");
        const s = this.Yi.$t(), n = (t - i) * this.Fa() / s, e = new _i(this.Ba, [
            2,
            2.5,
            2
        ]), r = new _i(this.Ba, [
            2,
            2,
            2.5
        ]), h = new _i(this.Ba, [
            2.5,
            2,
            2
        ]), a = [];
        return a.push(e.La(t, i, n), r.La(t, i, n), h.La(t, i, n)), function(t) {
            if (t.length < 1) throw Error("array is empty");
            let i = t[0];
            for(let s = 1; s < t.length; ++s)t[s] < i && (i = t[s]);
            return i;
        }(a);
    }
    Ha() {
        const t = this.Yi, i = t.zt();
        if (null === i) return void (this.Oa = []);
        const s = t.$t(), n = this.Na(s - 1, i), e = this.Na(0, i), r = this.Yi.N().entireTextOnly ? this.Ua() / 2 : 0, h = r, a = s - 1 - r, l = Math.max(n, e), o = Math.min(n, e);
        if (l === o) return void (this.Oa = []);
        let _ = this.La(l, o), u = l % _;
        u += u < 0 ? _ : 0;
        const c = l >= o ? 1 : -1;
        let d = null, f = 0;
        for(let s = l - u; s > o; s -= _){
            const n = this.Wa(s, i, !0);
            null !== d && Math.abs(n - d) < this.Fa() || n < h || n > a || (f < this.Oa.length ? (this.Oa[f].ka = n, this.Oa[f].$a = t.qa(s)) : this.Oa.push({
                ka: n,
                $a: t.qa(s)
            }), f++, d = n, t.Ya() && (_ = this.La(s * c, o)));
        }
        this.Oa.length = f;
    }
    Va() {
        return this.Oa;
    }
    Ua() {
        return this.Yi.k();
    }
    Fa() {
        return Math.ceil(2.5 * this.Ua());
    }
}
function ci(t) {
    return t.slice().sort((t, i)=>u(t.hs()) - u(i.hs()));
}
var di;
!function(t) {
    t[t.Normal = 0] = "Normal", t[t.Logarithmic = 1] = "Logarithmic", t[t.Percentage = 2] = "Percentage", t[t.IndexedTo100 = 3] = "IndexedTo100";
}(di || (di = {}));
const fi = new it, pi = new tt(100, 1);
class vi {
    constructor(t, i, s, n, e){
        this.ja = 0, this.Za = null, this.Ge = null, this.Ka = null, this.Xa = {
            Ga: !1,
            Ja: null
        }, this.Qa = 0, this.tl = 0, this.il = new d, this.sl = new d, this.nl = [], this.el = null, this.rl = null, this.hl = null, this.al = null, this.ha = pi, this.ll = hi(null), this.ol = t, this.ys = i, this._l = s, this.ul = n, this.cl = e, this.dl = new ui(this, 100, this.fl.bind(this), this.pl.bind(this));
    }
    wa() {
        return this.ol;
    }
    N() {
        return this.ys;
    }
    hr(t) {
        if (f(this.ys, t), this.ga(), void 0 !== t.mode && this.vl({
            ie: t.mode
        }), void 0 !== t.scaleMargins) {
            const i = _(t.scaleMargins.top), s = _(t.scaleMargins.bottom);
            if (i < 0 || i > 1) throw new Error(`Invalid top margin - expect value between 0 and 1, given=${i}`);
            if (s < 0 || s > 1) throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${s}`);
            if (i + s > 1) throw new Error(`Invalid margins - sum of margins must be less than 1, given=${i + s}`);
            this.ml(), this.rl = null;
        }
    }
    wl() {
        return this.ys.autoScale;
    }
    Ya() {
        return 1 === this.ys.mode;
    }
    Le() {
        return 2 === this.ys.mode;
    }
    gl() {
        return 3 === this.ys.mode;
    }
    ie() {
        return {
            sn: this.ys.autoScale,
            Ml: this.ys.invertScale,
            ie: this.ys.mode
        };
    }
    vl(t) {
        const i = this.ie();
        let s = null;
        void 0 !== t.sn && (this.ys.autoScale = t.sn), void 0 !== t.ie && (this.ys.mode = t.ie, 2 !== t.ie && 3 !== t.ie || (this.ys.autoScale = !0), this.Xa.Ga = !1), 1 === i.ie && t.ie !== i.ie && (!function(t, i) {
            if (null === t) return !1;
            const s = ni(t.$e(), i), n = ni(t.qe(), i);
            return isFinite(s) && isFinite(n);
        }(this.Ge, this.ll) ? this.ys.autoScale = !0 : (s = ri(this.Ge, this.ll), null !== s && this.bl(s))), 1 === t.ie && t.ie !== i.ie && (s = ei(this.Ge, this.ll), null !== s && this.bl(s));
        const n = i.ie !== this.ys.mode;
        n && (2 === i.ie || this.Le()) && this.ga(), n && (3 === i.ie || this.gl()) && this.ga(), void 0 !== t.Ml && i.Ml !== t.Ml && (this.ys.invertScale = t.Ml, this.xl()), this.sl.p(i, this.ie());
    }
    Sl() {
        return this.sl;
    }
    k() {
        return this._l.fontSize;
    }
    $t() {
        return this.ja;
    }
    Cl(t) {
        this.ja !== t && (this.ja = t, this.ml(), this.rl = null);
    }
    yl() {
        if (this.Za) return this.Za;
        const t = this.$t() - this.kl() - this.Pl();
        return this.Za = t, t;
    }
    Qe() {
        return this.Tl(), this.Ge;
    }
    bl(t, i) {
        const s = this.Ge;
        (i || null === s && null !== t || null !== s && !s.He(t)) && (this.rl = null, this.Ge = t);
    }
    Zi() {
        return this.Tl(), 0 === this.ja || !this.Ge || this.Ge.Zi();
    }
    Rl(t) {
        return this.Ml() ? t : this.$t() - 1 - t;
    }
    Nt(t, i) {
        return this.Le() ? t = Jt(t, i) : this.gl() && (t = ti(t, i)), this.pl(t, i);
    }
    Dl(t, i, s) {
        this.Tl();
        const n = this.Pl(), e = u(this.Qe()), r = e.$e(), h = e.qe(), a = this.yl() - 1, l = this.Ml(), o = a / (h - r), _ = void 0 === s ? 0 : s.from, c = void 0 === s ? t.length : s.to, d = this.Vl();
        for(let s = _; s < c; s++){
            const e = t[s], h = e.gt;
            if (isNaN(h)) continue;
            let a = h;
            null !== d && (a = d(e.gt, i));
            const _ = n + o * (a - r), u = l ? _ : this.ja - 1 - _;
            e.ut = u;
        }
    }
    Il(t, i, s) {
        this.Tl();
        const n = this.Pl(), e = u(this.Qe()), r = e.$e(), h = e.qe(), a = this.yl() - 1, l = this.Ml(), o = a / (h - r), _ = void 0 === s ? 0 : s.from, c = void 0 === s ? t.length : s.to, d = this.Vl();
        for(let s = _; s < c; s++){
            const e = t[s];
            let h = e.qh, a = e.Yh, _ = e.jh, u = e.Zh;
            null !== d && (h = d(e.qh, i), a = d(e.Yh, i), _ = d(e.jh, i), u = d(e.Zh, i));
            let c = n + o * (h - r), f = l ? c : this.ja - 1 - c;
            e.Al = f, c = n + o * (a - r), f = l ? c : this.ja - 1 - c, e.Bl = f, c = n + o * (_ - r), f = l ? c : this.ja - 1 - c, e.El = f, c = n + o * (u - r), f = l ? c : this.ja - 1 - c, e.zl = f;
        }
    }
    Ts(t, i) {
        const s = this.fl(t, i);
        return this.Ll(s, i);
    }
    Ll(t, i) {
        let s = t;
        return this.Le() ? s = function(t, i) {
            return i < 0 && (t = -t), t / 100 * i + i;
        }(s, i) : this.gl() && (s = function(t, i) {
            return t -= 100, i < 0 && (t = -t), t / 100 * i + i;
        }(s, i)), s;
    }
    ba() {
        return this.nl;
    }
    Dt() {
        if (this.el) return this.el;
        let t = [];
        for(let i = 0; i < this.nl.length; i++){
            const s = this.nl[i];
            null === s.hs() && s.ls(i + 1), t.push(s);
        }
        return t = ci(t), this.el = t, this.el;
    }
    Ol(t) {
        -1 === this.nl.indexOf(t) && (this.nl.push(t), this.ga(), this.Nl());
    }
    Wl(t) {
        const i = this.nl.indexOf(t);
        if (-1 === i) throw new Error("source is not attached to scale");
        this.nl.splice(i, 1), 0 === this.nl.length && (this.vl({
            sn: !0
        }), this.bl(null)), this.ga(), this.Nl();
    }
    zt() {
        let t = null;
        for (const i of this.nl){
            const s = i.zt();
            null !== s && (null === t || s.Hh < t.Hh) && (t = s);
        }
        return null === t ? null : t.Ft;
    }
    Ml() {
        return this.ys.invertScale;
    }
    Va() {
        const t = null === this.zt();
        if (null !== this.rl && (t || this.rl.Fl === t)) return this.rl.Va;
        this.dl.Ha();
        const i = this.dl.Va();
        return this.rl = {
            Va: i,
            Fl: t
        }, this.il.p(), i;
    }
    Hl() {
        return this.il;
    }
    Ul(t) {
        this.Le() || this.gl() || null === this.hl && null === this.Ka && (this.Zi() || (this.hl = this.ja - t, this.Ka = u(this.Qe()).Ue()));
    }
    $l(t) {
        if (this.Le() || this.gl()) return;
        if (null === this.hl) return;
        this.vl({
            sn: !1
        }), (t = this.ja - t) < 0 && (t = 0);
        let i = (this.hl + .2 * (this.ja - 1)) / (t + .2 * (this.ja - 1));
        const s = u(this.Ka).Ue();
        i = Math.max(i, .1), s.je(i), this.bl(s);
    }
    ql() {
        this.Le() || this.gl() || (this.hl = null, this.Ka = null);
    }
    Yl(t) {
        this.wl() || null === this.al && null === this.Ka && (this.Zi() || (this.al = t, this.Ka = u(this.Qe()).Ue()));
    }
    jl(t) {
        if (this.wl()) return;
        if (null === this.al) return;
        const i = u(this.Qe()).Ye() / (this.yl() - 1);
        let s = t - this.al;
        this.Ml() && (s *= -1);
        const n = s * i, e = u(this.Ka).Ue();
        e.Ze(n), this.bl(e, !0), this.rl = null;
    }
    Zl() {
        this.wl() || null !== this.al && (this.al = null, this.Ka = null);
    }
    ra() {
        return this.ha || this.ga(), this.ha;
    }
    Xi(t, i) {
        switch(this.ys.mode){
            case 2:
                return this.Kl(Jt(t, i));
            case 3:
                return this.ra().format(ti(t, i));
            default:
                return this.nr(t);
        }
    }
    qa(t) {
        switch(this.ys.mode){
            case 2:
                return this.Kl(t);
            case 3:
                return this.ra().format(t);
            default:
                return this.nr(t);
        }
    }
    Dh(t) {
        return this.nr(t, u(this.Xl()).ra());
    }
    Vh(t, i) {
        return t = Jt(t, i), this.Kl(t, fi);
    }
    Gl() {
        return this.nl;
    }
    Jl(t) {
        this.Xa = {
            Ja: t,
            Ga: !1
        };
    }
    Ns() {
        this.nl.forEach((t)=>t.Ns());
    }
    ga() {
        this.rl = null;
        const t = this.Xl();
        let i = 100;
        null !== t && (i = Math.round(1 / t.ea())), this.ha = pi, this.Le() ? (this.ha = fi, i = 100) : this.gl() ? (this.ha = new tt(100, 1), i = 100) : null !== t && (this.ha = t.ra()), this.dl = new ui(this, i, this.fl.bind(this), this.pl.bind(this)), this.dl.Ha();
    }
    Nl() {
        this.el = null;
    }
    Ki() {
        return this.cl;
    }
    Xl() {
        return this.nl[0] || null;
    }
    kl() {
        return this.Ml() ? this.ys.scaleMargins.bottom * this.$t() + this.tl : this.ys.scaleMargins.top * this.$t() + this.Qa;
    }
    Pl() {
        return this.Ml() ? this.ys.scaleMargins.top * this.$t() + this.Qa : this.ys.scaleMargins.bottom * this.$t() + this.tl;
    }
    Tl() {
        this.Xa.Ga || (this.Xa.Ga = !0, this.Ql());
    }
    ml() {
        this.Za = null;
    }
    pl(t, i) {
        if (this.Tl(), this.Zi()) return 0;
        t = this.Ya() && t ? si(t, this.ll) : t;
        const s = u(this.Qe()), n = this.Pl() + (this.yl() - 1) * (t - s.$e()) / s.Ye();
        return this.Rl(n);
    }
    fl(t, i) {
        if (this.Tl(), this.Zi()) return 0;
        const s = this.Rl(t), n = u(this.Qe()), e = n.$e() + n.Ye() * ((s - this.Pl()) / (this.yl() - 1));
        return this.Ya() ? ni(e, this.ll) : e;
    }
    xl() {
        this.rl = null, this.dl.Ha();
    }
    Ql() {
        const t = this.Xa.Ja;
        if (null === t) return;
        let i = null;
        const s = this.Gl();
        let n = 0, e = 0;
        for (const r of s){
            if (!r.Vt()) continue;
            const s = r.zt();
            if (null === s) continue;
            const h = r.Mh(t.Uh(), t.bi());
            let a = h && h.Qe();
            if (null !== a) {
                switch(this.ys.mode){
                    case 1:
                        a = ei(a, this.ll);
                        break;
                    case 2:
                        a = Qt(a, s.Ft);
                        break;
                    case 3:
                        a = ii(a, s.Ft);
                }
                if (i = null === i ? a : i.vn(u(a)), null !== h) {
                    const t = h.tr();
                    null !== t && (n = Math.max(n, t.above), e = Math.max(e, t.below));
                }
            }
        }
        if (n === this.Qa && e === this.tl || (this.Qa = n, this.tl = e, this.rl = null, this.ml()), null !== i) {
            if (i.$e() === i.qe()) {
                const t = this.Xl(), s = 5 * (null === t || this.Le() || this.gl() ? 1 : t.ea());
                this.Ya() && (i = ri(i, this.ll)), i = new vt(i.$e() - s, i.qe() + s), this.Ya() && (i = ei(i, this.ll));
            }
            if (this.Ya()) {
                const t = ri(i, this.ll), s = hi(t);
                if (r = s, h = this.ll, r.Ia !== h.Ia || r.Aa !== h.Aa) {
                    const n = null !== this.Ka ? ri(this.Ka, this.ll) : null;
                    this.ll = s, i = ei(t, s), null !== n && (this.Ka = ei(n, s));
                }
            }
            this.bl(i);
        } else null === this.Ge && (this.bl(new vt(-0.5, .5)), this.ll = hi(null));
        var r, h;
        this.Xa.Ga = !0;
    }
    Vl() {
        return this.Le() ? Jt : this.gl() ? ti : this.Ya() ? (t)=>si(t, this.ll) : null;
    }
    io(t, i, s) {
        return void 0 === i ? (void 0 === s && (s = this.ra()), s.format(t)) : i(t);
    }
    nr(t, i) {
        return this.io(t, this.ul.priceFormatter, i);
    }
    Kl(t, i) {
        return this.io(t, this.ul.percentageFormatter, i);
    }
}
function mi(t) {
    return t instanceof Yt;
}
class wi {
    constructor(t, i){
        this.nl = [], this.so = new Map, this.ja = 0, this.no = 0, this.eo = 1e3, this.el = null, this.ro = new d, this.kh = [], this.uh = t, this.ts = i, this.ho = new Xt(this);
        const s = i.N();
        this.ao = this.lo("left", s.leftPriceScale), this.oo = this.lo("right", s.rightPriceScale), this.ao.Sl().i(this._o.bind(this, this.ao), this), this.oo.Sl().i(this._o.bind(this, this.oo), this), this.uo(s);
    }
    uo(t) {
        if (t.leftPriceScale && this.ao.hr(t.leftPriceScale), t.rightPriceScale && this.oo.hr(t.rightPriceScale), t.localization && (this.ao.ga(), this.oo.ga()), t.overlayPriceScales) {
            const i = Array.from(this.so.values());
            for (const s of i){
                const i = u(s[0].Wt());
                i.hr(t.overlayPriceScales), t.localization && i.ga();
            }
        }
    }
    co(t) {
        switch(t){
            case "left":
                return this.ao;
            case "right":
                return this.oo;
        }
        return this.so.has(t) ? _(this.so.get(t))[0].Wt() : null;
    }
    m() {
        this.Qt().do().u(this), this.ao.Sl().u(this), this.oo.Sl().u(this), this.nl.forEach((t)=>{
            t.m && t.m();
        }), this.kh = this.kh.filter((t)=>{
            const i = t.oh();
            return i.detached && i.detached(), !1;
        }), this.ro.p();
    }
    fo() {
        return this.eo;
    }
    po(t) {
        this.eo = t;
    }
    Qt() {
        return this.ts;
    }
    Qi() {
        return this.no;
    }
    $t() {
        return this.ja;
    }
    vo(t) {
        this.no = t, this.mo();
    }
    Cl(t) {
        this.ja = t, this.ao.Cl(t), this.oo.Cl(t), this.nl.forEach((i)=>{
            if (this.Un(i)) {
                const s = i.Wt();
                null !== s && s.Cl(t);
            }
        }), this.mo();
    }
    wo() {
        return this.nl.filter(mi);
    }
    ba() {
        return this.nl;
    }
    Un(t) {
        const i = t.Wt();
        return null === i || this.ao !== i && this.oo !== i;
    }
    Ol(t, i, s) {
        const n = void 0 !== s ? s : this.bo().Mo + 1;
        this.xo(t, i, n);
    }
    Wl(t) {
        const i = this.nl.indexOf(t);
        o(-1 !== i, "removeDataSource: invalid data source"), this.nl.splice(i, 1);
        const s = u(t.Wt()).wa();
        if (this.so.has(s)) {
            const i = _(this.so.get(s)), n = i.indexOf(t);
            -1 !== n && (i.splice(n, 1), 0 === i.length && this.so.delete(s));
        }
        const n = t.Wt();
        n && n.ba().indexOf(t) >= 0 && n.Wl(t), null !== n && (n.Nl(), this.So(n)), this.el = null;
    }
    qn(t) {
        return t === this.ao ? "left" : t === this.oo ? "right" : "overlay";
    }
    Co() {
        return this.ao;
    }
    yo() {
        return this.oo;
    }
    ko(t, i) {
        t.Ul(i);
    }
    Po(t, i) {
        t.$l(i), this.mo();
    }
    To(t) {
        t.ql();
    }
    Ro(t, i) {
        t.Yl(i);
    }
    Do(t, i) {
        t.jl(i), this.mo();
    }
    Vo(t) {
        t.Zl();
    }
    mo() {
        this.nl.forEach((t)=>{
            t.Ns();
        });
    }
    Ps() {
        let t = null;
        return this.ts.N().rightPriceScale.visible && 0 !== this.oo.ba().length ? t = this.oo : this.ts.N().leftPriceScale.visible && 0 !== this.ao.ba().length ? t = this.ao : 0 !== this.nl.length && (t = this.nl[0].Wt()), null === t && (t = this.oo), t;
    }
    $n() {
        let t = null;
        return this.ts.N().rightPriceScale.visible ? t = this.oo : this.ts.N().leftPriceScale.visible && (t = this.ao), t;
    }
    So(t) {
        null !== t && t.wl() && this.Io(t);
    }
    Ao(t) {
        const i = this.uh.ye();
        t.vl({
            sn: !0
        }), null !== i && t.Jl(i), this.mo();
    }
    Bo() {
        this.Io(this.ao), this.Io(this.oo);
    }
    Eo() {
        this.So(this.ao), this.So(this.oo), this.nl.forEach((t)=>{
            this.Un(t) && this.So(t.Wt());
        }), this.mo(), this.ts.ar();
    }
    Dt() {
        return null === this.el && (this.el = ci(this.nl)), this.el;
    }
    It() {
        return this.Dt().filter(mi);
    }
    zo() {
        return this.ro;
    }
    Lo() {
        return this.ho;
    }
    ua(t) {
        this.kh.push(new Bt(t));
    }
    ca(t) {
        this.kh = this.kh.filter((i)=>i.oh() !== t), t.detached && t.detached(), this.ts.ar();
    }
    Oo() {
        return this.kh;
    }
    sa(t, i) {
        return this.kh.map((s)=>s.jn(t, i)).filter((t)=>null !== t);
    }
    Io(t) {
        const i = t.Gl();
        if (i && i.length > 0 && !this.uh.Zi()) {
            const i = this.uh.ye();
            null !== i && t.Jl(i);
        }
        t.Ns();
    }
    bo() {
        const t = this.Dt();
        if (0 === t.length) return {
            No: 0,
            Mo: 0
        };
        let i = 0, s = 0;
        for(let n = 0; n < t.length; n++){
            const e = t[n].hs();
            null !== e && (e < i && (i = e), e > s && (s = e));
        }
        return {
            No: i,
            Mo: s
        };
    }
    xo(t, i, s) {
        let n = this.co(i);
        if (null === n && (n = this.lo(i, this.ts.N().overlayPriceScales)), this.nl.push(t), !X(i)) {
            const s = this.so.get(i) || [];
            s.push(t), this.so.set(i, s);
        }
        n.Ol(t), t._s(n), t.ls(s), this.So(n), this.el = null;
    }
    _o(t, i, s) {
        i.ie !== s.ie && this.Io(t);
    }
    lo(t, i) {
        const s = {
            visible: !0,
            autoScale: !0,
            ...g(i)
        }, n = new vi(t, s, this.ts.N().layout, this.ts.N().localization, this.ts.Ki());
        return n.Cl(this.$t()), n;
    }
}
function gi(t) {
    return {
        Wo: t.Wo,
        Fo: {
            Zn: t.Ho.externalId
        },
        Uo: t.Ho.cursorStyle
    };
}
function Mi(t, i, s, n) {
    for (const e of t){
        const t = e.Tt(n);
        if (null !== t && t.jn) {
            const n = t.jn(i, s);
            if (null !== n) return {
                $o: e,
                Fo: n
            };
        }
    }
    return null;
}
function bi(t) {
    return void 0 !== t.Ws;
}
function xi(t, i, s) {
    const n = [
        t,
        ...t.Dt()
    ], e = function(t, i, s) {
        let n, e;
        for (const a of t){
            const t = a.sa?.(i, s) ?? [];
            for (const i of t)r = i.zOrder, h = n?.zOrder, (!h || "top" === r && "top" !== h || "normal" === r && "bottom" === h) && (n = i, e = a);
        }
        var r, h;
        return n && e ? {
            Ho: n,
            Wo: e
        } : null;
    }(n, i, s);
    if ("top" === e?.Ho.zOrder) return gi(e);
    for (const r of n){
        if (e && e.Wo === r && "bottom" !== e.Ho.zOrder && !e.Ho.isBackground) return gi(e);
        if (bi(r)) {
            const n = Mi(r.Ws(t), i, s, t);
            if (null !== n) return {
                Wo: r,
                $o: n.$o,
                Fo: n.Fo
            };
        }
        if (e && e.Wo === r && "bottom" !== e.Ho.zOrder && e.Ho.isBackground) return gi(e);
    }
    return e?.Ho ? gi(e) : null;
}
class Si {
    constructor(t, i, s = 50){
        this.kn = 0, this.Pn = 1, this.Tn = 1, this.Dn = new Map, this.Rn = new Map, this.qo = t, this.Yo = i, this.Vn = s;
    }
    jo(t) {
        const i = t.time, s = this.Yo.cacheKey(i), n = this.Dn.get(s);
        if (void 0 !== n) return n.Zo;
        if (this.kn === this.Vn) {
            const t = this.Rn.get(this.Tn);
            this.Rn.delete(this.Tn), this.Dn.delete(_(t)), this.Tn++, this.kn--;
        }
        const e = this.qo(t);
        return this.Dn.set(s, {
            Zo: e,
            En: this.Pn
        }), this.Rn.set(this.Pn, s), this.kn++, this.Pn++, e;
    }
}
class Ci {
    constructor(t, i){
        o(t <= i, "right should be >= left"), this.Ko = t, this.Xo = i;
    }
    Uh() {
        return this.Ko;
    }
    bi() {
        return this.Xo;
    }
    Go() {
        return this.Xo - this.Ko + 1;
    }
    Te(t) {
        return this.Ko <= t && t <= this.Xo;
    }
    He(t) {
        return this.Ko === t.Uh() && this.Xo === t.bi();
    }
}
function yi(t, i) {
    return null === t || null === i ? t === i : t.He(i);
}
class ki {
    constructor(){
        this.Jo = new Map, this.Dn = null, this.Qo = !1;
    }
    t_(t) {
        this.Qo = t, this.Dn = null;
    }
    i_(t, i) {
        this.s_(i), this.Dn = null;
        for(let s = i; s < t.length; ++s){
            const i = t[s];
            let n = this.Jo.get(i.timeWeight);
            void 0 === n && (n = [], this.Jo.set(i.timeWeight, n)), n.push({
                index: s,
                time: i.time,
                weight: i.timeWeight,
                originalTime: i.originalTime
            });
        }
    }
    n_(t, i, s, n, e) {
        const r = Math.ceil(i / t);
        return null !== this.Dn && this.Dn.e_ === r && e === this.Dn.r_ && s === this.Dn.h_ || (this.Dn = {
            r_: e,
            h_: s,
            Va: this.a_(r, s, n),
            e_: r
        }), this.Dn.Va;
    }
    s_(t) {
        if (0 === t) return void this.Jo.clear();
        const i = [];
        this.Jo.forEach((s, n)=>{
            t <= s[0].index ? i.push(n) : s.splice(yt(s, t, (i)=>i.index < t), 1 / 0);
        });
        for (const t of i)this.Jo.delete(t);
    }
    a_(t, i, s) {
        let n = [];
        const e = (t)=>!i || s.has(t.index);
        for (const i of Array.from(this.Jo.keys()).sort((t, i)=>i - t)){
            if (!this.Jo.get(i)) continue;
            const s = n;
            n = [];
            const r = s.length;
            let h = 0;
            const a = _(this.Jo.get(i)), l = a.length;
            let o = 1 / 0, u = -1 / 0;
            for(let i = 0; i < l; i++){
                const l = a[i], _ = l.index;
                for(; h < r;){
                    const t = s[h], i = t.index;
                    if (!(i < _ && e(t))) {
                        o = i;
                        break;
                    }
                    h++, n.push(t), u = i, o = 1 / 0;
                }
                if (o - _ >= t && _ - u >= t && e(l)) n.push(l), u = _;
                else if (this.Qo) return s;
            }
            for(; h < r; h++)e(s[h]) && n.push(s[h]);
        }
        return n;
    }
}
class Pi {
    constructor(t){
        this.l_ = t;
    }
    o_() {
        return null === this.l_ ? null : new Ci(Math.floor(this.l_.Uh()), Math.ceil(this.l_.bi()));
    }
    __() {
        return this.l_;
    }
    static u_() {
        return new Pi(null);
    }
}
function Ti(t, i) {
    return t.weight > i.weight ? t : i;
}
class Ri {
    constructor(t, i, s, n){
        this.no = 0, this.c_ = null, this.d_ = [], this.al = null, this.hl = null, this.f_ = new ki, this.p_ = new Map, this.v_ = Pi.u_(), this.m_ = !0, this.w_ = new d, this.g_ = new d, this.M_ = new d, this.b_ = null, this.x_ = null, this.S_ = new Map, this.C_ = -1, this.y_ = [], this.ys = i, this.ul = s, this.k_ = i.rightOffset, this.P_ = i.barSpacing, this.ts = t, this.Yo = n, this.T_(), this.f_.t_(i.uniformDistribution), this.R_();
    }
    N() {
        return this.ys;
    }
    D_(t) {
        f(this.ul, t), this.V_(), this.T_();
    }
    hr(t, i) {
        f(this.ys, t), this.ys.fixLeftEdge && this.I_(), this.ys.fixRightEdge && this.A_(), void 0 !== t.barSpacing && this.ts.dn(t.barSpacing), void 0 !== t.rightOffset && this.ts.fn(t.rightOffset), void 0 === t.minBarSpacing && void 0 === t.maxBarSpacing || this.ts.dn(t.barSpacing ?? this.P_), void 0 !== t.ignoreWhitespaceIndices && t.ignoreWhitespaceIndices !== this.ys.ignoreWhitespaceIndices && this.R_(), this.V_(), this.T_(), this.M_.p();
    }
    Rs(t) {
        return this.d_[t]?.time ?? null;
    }
    ss(t) {
        return this.d_[t] ?? null;
    }
    B_(t, i) {
        if (this.d_.length < 1) return null;
        if (this.Yo.key(t) > this.Yo.key(this.d_[this.d_.length - 1].time)) return i ? this.d_.length - 1 : null;
        const s = yt(this.d_, this.Yo.key(t), (t, i)=>this.Yo.key(t.time) < i);
        return this.Yo.key(t) < this.Yo.key(this.d_[s].time) ? i ? s : null : s;
    }
    Zi() {
        return 0 === this.no || 0 === this.d_.length || null === this.c_;
    }
    E_() {
        return this.d_.length > 0;
    }
    ye() {
        return this.z_(), this.v_.o_();
    }
    L_() {
        return this.z_(), this.v_.__();
    }
    O_() {
        const t = this.ye();
        if (null === t) return null;
        const i = {
            from: t.Uh(),
            to: t.bi()
        };
        return this.N_(i);
    }
    N_(t) {
        const i = Math.round(t.from), s = Math.round(t.to), n = u(this.W_()), e = u(this.F_());
        return {
            from: u(this.ss(Math.max(n, i))),
            to: u(this.ss(Math.min(e, s)))
        };
    }
    H_(t) {
        return {
            from: u(this.B_(t.from, !0)),
            to: u(this.B_(t.to, !0))
        };
    }
    Qi() {
        return this.no;
    }
    vo(t) {
        if (!isFinite(t) || t <= 0) return;
        if (this.no === t) return;
        const i = this.L_(), s = this.no;
        if (this.no = t, this.m_ = !0, this.ys.lockVisibleTimeRangeOnResize && 0 !== s) {
            const i = this.P_ * t / s;
            this.P_ = i;
        }
        if (this.ys.fixLeftEdge && null !== i && i.Uh() <= 0) {
            const i = s - t;
            this.k_ -= Math.round(i / this.P_) + 1, this.m_ = !0;
        }
        this.U_(), this.q_();
    }
    qt(t) {
        if (this.Zi() || !v(t)) return 0;
        const i = this.Y_() + this.k_ - t;
        return this.no - (i + .5) * this.P_ - 1;
    }
    j_(t, i) {
        const s = this.Y_(), n = void 0 === i ? 0 : i.from, e = void 0 === i ? t.length : i.to;
        for(let i = n; i < e; i++){
            const n = t[i].wt, e = s + this.k_ - n, r = this.no - (e + .5) * this.P_ - 1;
            t[i]._t = r;
        }
    }
    Z_(t, i) {
        const s = Math.ceil(this.K_(t));
        return i && this.ys.ignoreWhitespaceIndices && !this.X_(s) ? this.G_(s) : s;
    }
    fn(t) {
        this.m_ = !0, this.k_ = t, this.q_(), this.ts.J_(), this.ts.ar();
    }
    Q_() {
        return this.P_;
    }
    dn(t) {
        this.tu(t), this.q_(), this.ts.J_(), this.ts.ar();
    }
    iu() {
        return this.k_;
    }
    Va() {
        if (this.Zi()) return null;
        if (null !== this.x_) return this.x_;
        const t = this.P_, i = 5 * (this.ts.N().layout.fontSize + 4) / 8 * (this.ys.tickMarkMaxCharacterLength || 8), s = Math.round(i / t), n = u(this.ye()), e = Math.max(n.Uh(), n.Uh() - s), r = Math.max(n.bi(), n.bi() - s), h = this.f_.n_(t, i, this.ys.ignoreWhitespaceIndices, this.S_, this.C_), a = this.W_() + s, l = this.F_() - s, o = this.su(), _ = this.ys.fixLeftEdge || o, c = this.ys.fixRightEdge || o;
        let d = 0;
        for (const t of h){
            if (!(e <= t.index && t.index <= r)) continue;
            let s;
            d < this.y_.length ? (s = this.y_[d], s.coord = this.qt(t.index), s.label = this.nu(t), s.weight = t.weight) : (s = {
                needAlignCoordinate: !1,
                coord: this.qt(t.index),
                label: this.nu(t),
                weight: t.weight
            }, this.y_.push(s)), this.P_ > i / 2 && !o ? s.needAlignCoordinate = !1 : s.needAlignCoordinate = _ && t.index <= a || c && t.index >= l, d++;
        }
        return this.y_.length = d, this.x_ = this.y_, this.y_;
    }
    eu() {
        this.m_ = !0, this.dn(this.ys.barSpacing), this.fn(this.ys.rightOffset);
    }
    ru(t) {
        this.m_ = !0, this.c_ = t, this.q_(), this.I_();
    }
    hu(t, i) {
        const s = this.K_(t), n = this.Q_(), e = n + i * (n / 10);
        this.dn(e), this.ys.rightBarStaysOnScroll || this.fn(this.iu() + (s - this.K_(t)));
    }
    Ul(t) {
        this.al && this.Zl(), null === this.hl && null === this.b_ && (this.Zi() || (this.hl = t, this.au()));
    }
    $l(t) {
        if (null === this.b_) return;
        const i = ai(this.no - t, 0, this.no), s = ai(this.no - u(this.hl), 0, this.no);
        0 !== i && 0 !== s && this.dn(this.b_.Q_ * i / s);
    }
    ql() {
        null !== this.hl && (this.hl = null, this.lu());
    }
    Yl(t) {
        null === this.al && null === this.b_ && (this.Zi() || (this.al = t, this.au()));
    }
    jl(t) {
        if (null === this.al) return;
        const i = (this.al - t) / this.Q_();
        this.k_ = u(this.b_).iu + i, this.m_ = !0, this.q_();
    }
    Zl() {
        null !== this.al && (this.al = null, this.lu());
    }
    ou() {
        this._u(this.ys.rightOffset);
    }
    _u(t, i = 400) {
        if (!isFinite(t)) throw new RangeError("offset is required and must be finite number");
        if (!isFinite(i) || i <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
        const s = this.k_, n = performance.now();
        this.ts._n({
            uu: (t)=>(t - n) / i >= 1,
            cu: (e)=>{
                const r = (e - n) / i;
                return r >= 1 ? t : s + (t - s) * r;
            }
        });
    }
    kt(t, i) {
        this.m_ = !0, this.d_ = t, this.f_.i_(t, i), this.q_();
    }
    du() {
        return this.w_;
    }
    fu() {
        return this.g_;
    }
    pu() {
        return this.M_;
    }
    Y_() {
        return this.c_ || 0;
    }
    vu(t) {
        const i = t.Go();
        this.tu(this.no / i), this.k_ = t.bi() - this.Y_(), this.q_(), this.m_ = !0, this.ts.J_(), this.ts.ar();
    }
    mu() {
        const t = this.W_(), i = this.F_();
        null !== t && null !== i && this.vu(new Ci(t, i + this.ys.rightOffset));
    }
    wu(t) {
        const i = new Ci(t.from, t.to);
        this.vu(i);
    }
    ns(t) {
        return void 0 !== this.ul.timeFormatter ? this.ul.timeFormatter(t.originalTime) : this.Yo.formatHorzItem(t.time);
    }
    R_() {
        if (!this.ys.ignoreWhitespaceIndices) return;
        this.S_.clear();
        const t = this.ts.js();
        for (const i of t)for (const t of i.ma())this.S_.set(t, !0);
        this.C_++;
    }
    su() {
        const t = this.ts.N().handleScroll, i = this.ts.N().handleScale;
        return !(t.horzTouchDrag || t.mouseWheel || t.pressedMouseMove || t.vertTouchDrag || i.axisDoubleClickReset.time || i.axisPressedMouseMove.time || i.mouseWheel || i.pinch);
    }
    W_() {
        return 0 === this.d_.length ? null : 0;
    }
    F_() {
        return 0 === this.d_.length ? null : this.d_.length - 1;
    }
    gu(t) {
        return (this.no - 1 - t) / this.P_;
    }
    K_(t) {
        const i = this.gu(t), s = this.Y_() + this.k_ - i;
        return Math.round(1e6 * s) / 1e6;
    }
    tu(t) {
        const i = this.P_;
        this.P_ = t, this.U_(), i !== this.P_ && (this.m_ = !0, this.Mu());
    }
    z_() {
        if (!this.m_) return;
        if (this.m_ = !1, this.Zi()) return void this.bu(Pi.u_());
        const t = this.Y_(), i = this.no / this.P_, s = this.k_ + t, n = new Ci(s - i + 1, s);
        this.bu(new Pi(n));
    }
    U_() {
        const t = ai(this.P_, this.xu(), this.Su());
        this.P_ !== t && (this.P_ = t, this.m_ = !0);
    }
    Su() {
        return this.ys.maxBarSpacing > 0 ? this.ys.maxBarSpacing : .5 * this.no;
    }
    xu() {
        return this.ys.fixLeftEdge && this.ys.fixRightEdge && 0 !== this.d_.length ? this.no / this.d_.length : this.ys.minBarSpacing;
    }
    q_() {
        const t = this.Cu();
        null !== t && this.k_ < t && (this.k_ = t, this.m_ = !0);
        const i = this.yu();
        this.k_ > i && (this.k_ = i, this.m_ = !0);
    }
    Cu() {
        const t = this.W_(), i = this.c_;
        if (null === t || null === i) return null;
        return t - i - 1 + (this.ys.fixLeftEdge ? this.no / this.P_ : Math.min(2, this.d_.length));
    }
    yu() {
        return this.ys.fixRightEdge ? 0 : this.no / this.P_ - Math.min(2, this.d_.length);
    }
    au() {
        this.b_ = {
            Q_: this.Q_(),
            iu: this.iu()
        };
    }
    lu() {
        this.b_ = null;
    }
    nu(t) {
        let i = this.p_.get(t.weight);
        return void 0 === i && (i = new Si((t)=>this.ku(t), this.Yo), this.p_.set(t.weight, i)), i.jo(t);
    }
    ku(t) {
        return this.Yo.formatTickmark(t, this.ul);
    }
    bu(t) {
        const i = this.v_;
        this.v_ = t, yi(i.o_(), this.v_.o_()) || this.w_.p(), yi(i.__(), this.v_.__()) || this.g_.p(), this.Mu();
    }
    Mu() {
        this.x_ = null;
    }
    V_() {
        this.Mu(), this.p_.clear();
    }
    T_() {
        this.Yo.updateFormatter(this.ul);
    }
    I_() {
        if (!this.ys.fixLeftEdge) return;
        const t = this.W_();
        if (null === t) return;
        const i = this.ye();
        if (null === i) return;
        const s = i.Uh() - t;
        if (s < 0) {
            const t = this.k_ - s - 1;
            this.fn(t);
        }
        this.U_();
    }
    A_() {
        this.q_(), this.U_();
    }
    X_(t) {
        return !this.ys.ignoreWhitespaceIndices || this.S_.get(t) || !1;
    }
    G_(t) {
        const i = function*(t) {
            const i = Math.round(t), s = i < t;
            let n = 1;
            for(;;)s ? (yield i + n, yield i - n) : (yield i - n, yield i + n), n++;
        }(t), s = this.F_();
        for(; s;){
            const t = i.next().value;
            if (this.S_.get(t)) return t;
            if (t < 0 || t > s) break;
        }
        return t;
    }
}
var Di, Vi, Ii, Ai, Bi;
!function(t) {
    t[t.OnTouchEnd = 0] = "OnTouchEnd", t[t.OnNextTap = 1] = "OnNextTap";
}(Di || (Di = {}));
class Ei {
    constructor(t, i, s){
        this.Pu = [], this.Tu = [], this.no = 0, this.Ru = null, this.Du = new d, this.Vu = new d, this.Iu = null, this.Au = t, this.ys = i, this.Yo = s, this.cl = new P(this.ys.layout.colorParsers), this.Bu = new C(this), this.uh = new Ri(this, i.timeScale, this.ys.localization, s), this.Ct = new K(this, i.crosshair), this.Eu = new jt(i.crosshair), this.zu(0), this.Pu[0].po(2e3), this.Lu = this.Ou(0), this.Nu = this.Ou(1);
    }
    Ah() {
        this.Wu(G.gn());
    }
    ar() {
        this.Wu(G.wn());
    }
    Xh() {
        this.Wu(new G(1));
    }
    Bh(t) {
        const i = this.Fu(t);
        this.Wu(i);
    }
    Hu() {
        return this.Ru;
    }
    Uu(t) {
        if (this.Ru?.Wo === t?.Wo && this.Ru?.Fo?.Zn === t?.Fo?.Zn) return;
        const i = this.Ru;
        this.Ru = t, null !== i && this.Bh(i.Wo), null !== t && t.Wo !== i?.Wo && this.Bh(t.Wo);
    }
    N() {
        return this.ys;
    }
    hr(t) {
        f(this.ys, t), this.Pu.forEach((i)=>i.uo(t)), void 0 !== t.timeScale && this.uh.hr(t.timeScale), void 0 !== t.localization && this.uh.D_(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.Du.p(), this.Lu = this.Ou(0), this.Nu = this.Ou(1), this.Ah();
    }
    $u(t, i) {
        if ("left" === t) return void this.hr({
            leftPriceScale: i
        });
        if ("right" === t) return void this.hr({
            rightPriceScale: i
        });
        const s = this.qu(t);
        null !== s && (s.Wt.hr(i), this.Du.p());
    }
    qu(t) {
        for (const i of this.Pu){
            const s = i.co(t);
            if (null !== s) return {
                Us: i,
                Wt: s
            };
        }
        return null;
    }
    Bt() {
        return this.uh;
    }
    $s() {
        return this.Pu;
    }
    Yu() {
        return this.Ct;
    }
    ju() {
        return this.Vu;
    }
    Zu(t, i) {
        t.Cl(i), this.J_();
    }
    vo(t) {
        this.no = t, this.uh.vo(this.no), this.Pu.forEach((i)=>i.vo(t)), this.J_();
    }
    Ku(t) {
        1 !== this.Pu.length && (o(t >= 0 && t < this.Pu.length, "Invalid pane index"), this.Pu.splice(t, 1), this.Ah());
    }
    Xu(t, i) {
        if (this.Pu.length < 2) return;
        o(t >= 0 && t < this.Pu.length, "Invalid pane index");
        const s = this.Pu[t], n = this.Pu.reduce((t, i)=>t + i.fo(), 0), e = this.Pu.reduce((t, i)=>t + i.$t(), 0), r = e - 30 * (this.Pu.length - 1);
        i = Math.min(r, Math.max(30, i));
        const h = n / e, a = s.$t();
        s.po(i * h);
        let l = i - a, _ = this.Pu.length - 1;
        for (const t of this.Pu)if (t !== s) {
            const i = Math.min(r, Math.max(30, t.$t() - l / _));
            l -= t.$t() - i, _ -= 1;
            const s = i * h;
            t.po(s);
        }
        this.Ah();
    }
    Gu(t, i) {
        o(t >= 0 && t < this.Pu.length && i >= 0 && i < this.Pu.length, "Invalid pane index");
        const s = this.Pu[t], n = this.Pu[i];
        this.Pu[t] = n, this.Pu[i] = s, this.Ah();
    }
    ko(t, i, s) {
        t.ko(i, s);
    }
    Po(t, i, s) {
        t.Po(i, s), this.Eh(), this.Wu(this.Ju(t, 2));
    }
    To(t, i) {
        t.To(i), this.Wu(this.Ju(t, 2));
    }
    Ro(t, i, s) {
        i.wl() || t.Ro(i, s);
    }
    Do(t, i, s) {
        i.wl() || (t.Do(i, s), this.Eh(), this.Wu(this.Ju(t, 2)));
    }
    Vo(t, i) {
        i.wl() || (t.Vo(i), this.Wu(this.Ju(t, 2)));
    }
    Ao(t, i) {
        t.Ao(i), this.Wu(this.Ju(t, 2));
    }
    Qu(t) {
        this.uh.Ul(t);
    }
    tc(t, i) {
        const s = this.Bt();
        if (s.Zi() || 0 === i) return;
        const n = s.Qi();
        t = Math.max(1, Math.min(t, n)), s.hu(t, i), this.J_();
    }
    sc(t) {
        this.nc(0), this.ec(t), this.rc();
    }
    hc(t) {
        this.uh.$l(t), this.J_();
    }
    ac() {
        this.uh.ql(), this.ar();
    }
    nc(t) {
        this.uh.Yl(t);
    }
    ec(t) {
        this.uh.jl(t), this.J_();
    }
    rc() {
        this.uh.Zl(), this.ar();
    }
    js() {
        return this.Tu;
    }
    lc(t, i, s, n, e) {
        this.Ct.Vs(t, i);
        let r = NaN, h = this.uh.Z_(t, !0);
        const a = this.uh.ye();
        null !== a && (h = Math.min(Math.max(a.Uh(), h), a.bi()));
        const l = n.Ps(), o = l.zt();
        null !== o && (r = l.Ts(i, o)), r = this.Eu.Ma(r, h, n), this.Ct.Es(h, r, n), this.Xh(), e || (this.oc(n, t, i), this.Vu.p(this.Ct.At(), {
            x: t,
            y: i
        }, s));
    }
    _c(t, i, s) {
        const n = s.Ps(), e = n.zt(), r = n.Nt(t, u(e)), h = this.uh.B_(i, !0), a = this.uh.qt(u(h));
        this.lc(a, r, null, s, !0);
    }
    uc(t) {
        this.Yu().Ls(), this.Xh(), t || this.Vu.p(null, null, null);
    }
    Eh() {
        const t = this.Ct.Us();
        if (null !== t) {
            const i = this.Ct.As(), s = this.Ct.Bs();
            this.lc(i, s, null, t);
        }
        this.Ct.Ns();
    }
    cc(t, i, s) {
        const n = this.uh.Rs(0);
        void 0 !== i && void 0 !== s && this.uh.kt(i, s);
        const e = this.uh.Rs(0), r = this.uh.Y_(), h = this.uh.ye();
        if (null !== h && null !== n && null !== e) {
            const i = h.Te(r), a = this.Yo.key(n) > this.Yo.key(e), l = null !== t && t > r && !a, o = this.uh.N().allowShiftVisibleRangeOnWhitespaceReplacement, _ = i && (!(void 0 === s) || o) && this.uh.N().shiftVisibleRangeOnNewBar;
            if (l && !_) {
                const i = t - r;
                this.uh.fn(this.uh.iu() - i);
            }
        }
        this.uh.ru(t);
    }
    Lh(t) {
        null !== t && t.Eo();
    }
    Hn(t) {
        if (function(t) {
            return t instanceof wi;
        }(t)) return t;
        const i = this.Pu.find((i)=>i.Dt().includes(t));
        return void 0 === i ? null : i;
    }
    J_() {
        this.Pu.forEach((t)=>t.Eo()), this.Eh();
    }
    m() {
        this.Pu.forEach((t)=>t.m()), this.Pu.length = 0, this.ys.localization.priceFormatter = void 0, this.ys.localization.percentageFormatter = void 0, this.ys.localization.timeFormatter = void 0;
    }
    dc() {
        return this.Bu;
    }
    Yn() {
        return this.Bu.N();
    }
    do() {
        return this.Du;
    }
    fc(t, i) {
        const s = this.zu(i);
        this.vc(t, s), this.Tu.push(t), 1 === this.Tu.length ? this.Ah() : this.ar();
    }
    mc(t) {
        const i = this.Hn(t), s = this.Tu.indexOf(t);
        o(-1 !== s, "Series not found");
        const n = u(i);
        this.Tu.splice(s, 1), n.Wl(t), t.m && t.m(), this.uh.R_(), this.wc(n);
    }
    Ih(t, i) {
        const s = u(this.Hn(t));
        s.Wl(t), s.Ol(t, i, u(t.hs()));
    }
    mu() {
        const t = G.wn();
        t.rn(), this.Wu(t);
    }
    gc(t) {
        const i = G.wn();
        i.ln(t), this.Wu(i);
    }
    cn() {
        const t = G.wn();
        t.cn(), this.Wu(t);
    }
    dn(t) {
        const i = G.wn();
        i.dn(t), this.Wu(i);
    }
    fn(t) {
        const i = G.wn();
        i.fn(t), this.Wu(i);
    }
    _n(t) {
        const i = G.wn();
        i._n(t), this.Wu(i);
    }
    hn() {
        const t = G.wn();
        t.hn(), this.Wu(t);
    }
    Mc() {
        return this.ys.rightPriceScale.visible ? "right" : "left";
    }
    bc(t, i) {
        o(i >= 0, "Index should be greater or equal to 0");
        if (i === this.xc(t)) return;
        const s = u(this.Hn(t));
        s.Wl(t);
        const n = this.zu(i);
        this.vc(t, n), 0 === s.ba().length && this.wc(s);
    }
    Sc() {
        return this.Nu;
    }
    $() {
        return this.Lu;
    }
    Ut(t) {
        const i = this.Nu, s = this.Lu;
        if (i === s) return i;
        if (t = Math.max(0, Math.min(100, Math.round(100 * t))), null === this.Iu || this.Iu.mr !== s || this.Iu.wr !== i) this.Iu = {
            mr: s,
            wr: i,
            Cc: new Map
        };
        else {
            const i = this.Iu.Cc.get(t);
            if (void 0 !== i) return i;
        }
        const n = this.cl.tt(s, i, t / 100);
        return this.Iu.Cc.set(t, n), n;
    }
    yc(t) {
        return this.Pu.indexOf(t);
    }
    Ki() {
        return this.cl;
    }
    oc(t, i, s) {
        if (t) {
            const n = xi(t, i, s);
            this.Uu(n && {
                Wo: n.Wo,
                Fo: n.Fo
            });
        }
    }
    zu(t) {
        if (o(t >= 0, "Index should be greater or equal to 0"), (t = Math.min(this.Pu.length, t)) < this.Pu.length) return this.Pu[t];
        const i = new wi(this.uh, this);
        this.Pu.push(i);
        const s = G.gn();
        return s.Qs(t, {
            tn: 0,
            sn: !0
        }), this.Wu(s), i;
    }
    xc(t) {
        return this.Pu.findIndex((i)=>i.wo().includes(t));
    }
    Ju(t, i) {
        const s = new G(i);
        if (null !== t) {
            const n = this.Pu.indexOf(t);
            s.Qs(n, {
                tn: i
            });
        }
        return s;
    }
    Fu(t, i) {
        return void 0 === i && (i = 2), this.Ju(this.Hn(t), i);
    }
    Wu(t) {
        this.Au && this.Au(t), this.Pu.forEach((t)=>t.Lo().lr().kt());
    }
    vc(t, i) {
        const s = t.N().priceScaleId, n = void 0 !== s ? s : this.Mc();
        i.Ol(t, n), X(n) || t.hr(t.N());
    }
    Ou(t) {
        const i = this.ys.layout;
        return "gradient" === i.background.type ? 0 === t ? i.background.topColor : i.background.bottomColor : i.background.color;
    }
    wc(t) {
        0 === t.ba().length && this.Pu.length > 1 && (this.Pu.splice(this.yc(t), 1), this.Ah());
    }
}
function zi(t) {
    return !p(t) && !m(t);
}
function Li(t) {
    return p(t);
}
!function(t) {
    t[t.Disabled = 0] = "Disabled", t[t.Continuous = 1] = "Continuous", t[t.OnDataUpdate = 2] = "OnDataUpdate";
}(Vi || (Vi = {})), function(t) {
    t[t.LastBar = 0] = "LastBar", t[t.LastVisible = 1] = "LastVisible";
}(Ii || (Ii = {})), function(t) {
    t.Solid = "solid", t.VerticalGradient = "gradient";
}(Ai || (Ai = {})), function(t) {
    t[t.Year = 0] = "Year", t[t.Month = 1] = "Month", t[t.DayOfMonth = 2] = "DayOfMonth", t[t.Time = 3] = "Time", t[t.TimeWithSeconds = 4] = "TimeWithSeconds";
}(Bi || (Bi = {}));
const Oi = (t)=>t.getUTCFullYear();
function Ni(t, i, s) {
    return i.replace(/yyyy/g, ((t)=>Q(Oi(t), 4))(t)).replace(/yy/g, ((t)=>Q(Oi(t) % 100, 2))(t)).replace(/MMMM/g, ((t, i)=>new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
            month: "long"
        }))(t, s)).replace(/MMM/g, ((t, i)=>new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
            month: "short"
        }))(t, s)).replace(/MM/g, ((t)=>Q(((t)=>t.getUTCMonth() + 1)(t), 2))(t)).replace(/dd/g, ((t)=>Q(((t)=>t.getUTCDate())(t), 2))(t));
}
class Wi {
    constructor(t = "yyyy-MM-dd", i = "default"){
        this.kc = t, this.Pc = i;
    }
    jo(t) {
        return Ni(t, this.kc, this.Pc);
    }
}
class Fi {
    constructor(t){
        this.Tc = t || "%h:%m:%s";
    }
    jo(t) {
        return this.Tc.replace("%h", Q(t.getUTCHours(), 2)).replace("%m", Q(t.getUTCMinutes(), 2)).replace("%s", Q(t.getUTCSeconds(), 2));
    }
}
const Hi = {
    Rc: "yyyy-MM-dd",
    Dc: "%h:%m:%s",
    Vc: " ",
    Ic: "default"
};
class Ui {
    constructor(t = {}){
        const i = {
            ...Hi,
            ...t
        };
        this.Ac = new Wi(i.Rc, i.Ic), this.Bc = new Fi(i.Dc), this.Ec = i.Vc;
    }
    jo(t) {
        return `${this.Ac.jo(t)}${this.Ec}${this.Bc.jo(t)}`;
    }
}
function $i(t) {
    return 60 * t * 60000;
}
function qi(t) {
    return 60 * t * 1e3;
}
const Yi = [
    {
        zc: (ji = 1, 1e3 * ji),
        Lc: 10
    },
    {
        zc: qi(1),
        Lc: 20
    },
    {
        zc: qi(5),
        Lc: 21
    },
    {
        zc: qi(30),
        Lc: 22
    },
    {
        zc: $i(1),
        Lc: 30
    },
    {
        zc: $i(3),
        Lc: 31
    },
    {
        zc: $i(6),
        Lc: 32
    },
    {
        zc: $i(12),
        Lc: 33
    }
];
var ji;
function Zi(t, i) {
    if (t.getUTCFullYear() !== i.getUTCFullYear()) return 70;
    if (t.getUTCMonth() !== i.getUTCMonth()) return 60;
    if (t.getUTCDate() !== i.getUTCDate()) return 50;
    for(let s = Yi.length - 1; s >= 0; --s)if (Math.floor(i.getTime() / Yi[s].zc) !== Math.floor(t.getTime() / Yi[s].zc)) return Yi[s].Lc;
    return 0;
}
function Ki(t) {
    let i = t;
    if (m(t) && (i = Gi(t)), !zi(i)) throw new Error("time must be of type BusinessDay");
    const s = new Date(Date.UTC(i.year, i.month - 1, i.day, 0, 0, 0, 0));
    return {
        Oc: Math.round(s.getTime() / 1e3),
        Nc: i
    };
}
function Xi(t) {
    if (!Li(t)) throw new Error("time must be of type isUTCTimestamp");
    return {
        Oc: t
    };
}
function Gi(t) {
    const i = new Date(t);
    if (isNaN(i.getTime())) throw new Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);
    return {
        day: i.getUTCDate(),
        month: i.getUTCMonth() + 1,
        year: i.getUTCFullYear()
    };
}
function Ji(t) {
    m(t.time) && (t.time = Gi(t.time));
}
class Qi {
    options() {
        return this.ys;
    }
    setOptions(t) {
        this.ys = t, this.updateFormatter(t.localization);
    }
    preprocessData(t) {
        Array.isArray(t) ? function(t) {
            t.forEach(Ji);
        }(t) : Ji(t);
    }
    createConverterToInternalObj(t) {
        return u(function(t) {
            return 0 === t.length ? null : zi(t[0].time) || m(t[0].time) ? Ki : Xi;
        }(t));
    }
    key(t) {
        return "object" == typeof t && "Oc" in t ? t.Oc : this.key(this.convertHorzItemToInternal(t));
    }
    cacheKey(t) {
        const i = t;
        return void 0 === i.Nc ? new Date(1e3 * i.Oc).getTime() : new Date(Date.UTC(i.Nc.year, i.Nc.month - 1, i.Nc.day)).getTime();
    }
    convertHorzItemToInternal(t) {
        var i;
        return Li(i = t) ? Xi(i) : zi(i) ? Ki(i) : Ki(Gi(i));
    }
    updateFormatter(t) {
        if (!this.ys) return;
        const i = t.dateFormat;
        this.ys.timeScale.timeVisible ? this.Wc = new Ui({
            Rc: i,
            Dc: this.ys.timeScale.secondsVisible ? "%h:%m:%s" : "%h:%m",
            Vc: "   ",
            Ic: t.locale
        }) : this.Wc = new Wi(i, t.locale);
    }
    formatHorzItem(t) {
        const i = t;
        return this.Wc.jo(new Date(1e3 * i.Oc));
    }
    formatTickmark(t, i) {
        const s = function(t, i, s) {
            switch(t){
                case 0:
                case 10:
                    return i ? s ? 4 : 3 : 2;
                case 20:
                case 21:
                case 22:
                case 30:
                case 31:
                case 32:
                case 33:
                    return i ? 3 : 2;
                case 50:
                    return 2;
                case 60:
                    return 1;
                case 70:
                    return 0;
            }
        }(t.weight, this.ys.timeScale.timeVisible, this.ys.timeScale.secondsVisible), n = this.ys.timeScale;
        if (void 0 !== n.tickMarkFormatter) {
            const e = n.tickMarkFormatter(t.originalTime, s, i.locale);
            if (null !== e) return e;
        }
        return function(t, i, s) {
            const n = {};
            switch(i){
                case 0:
                    n.year = "numeric";
                    break;
                case 1:
                    n.month = "short";
                    break;
                case 2:
                    n.day = "numeric";
                    break;
                case 3:
                    n.hour12 = !1, n.hour = "2-digit", n.minute = "2-digit";
                    break;
                case 4:
                    n.hour12 = !1, n.hour = "2-digit", n.minute = "2-digit", n.second = "2-digit";
            }
            const e = void 0 === t.Nc ? new Date(1e3 * t.Oc) : new Date(Date.UTC(t.Nc.year, t.Nc.month - 1, t.Nc.day));
            return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()).toLocaleString(s, n);
        }(t.time, s, i.locale);
    }
    maxTickMarkWeight(t) {
        let i = t.reduce(Ti, t[0]).weight;
        return i > 30 && i < 50 && (i = 30), i;
    }
    fillWeightsForPoints(t, i) {
        !function(t, i = 0) {
            if (0 === t.length) return;
            let s = 0 === i ? null : t[i - 1].time.Oc, n = null !== s ? new Date(1e3 * s) : null, e = 0;
            for(let r = i; r < t.length; ++r){
                const i = t[r], h = new Date(1e3 * i.time.Oc);
                null !== n && (i.timeWeight = Zi(h, n)), e += i.time.Oc - (s || i.time.Oc), s = i.time.Oc, n = h;
            }
            if (0 === i && t.length > 1) {
                const i = Math.ceil(e / (t.length - 1)), s = new Date(1e3 * (t[0].time.Oc - i));
                t[0].timeWeight = Zi(new Date(1e3 * t[0].time.Oc), s);
            }
        }(t, i);
    }
    static Fc(t) {
        return f({
            localization: {
                dateFormat: "dd MMM 'yy"
            }
        }, t ?? {});
    }
}
const ts = "undefined" != typeof window;
function is() {
    return !!ts && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
}
function ss() {
    return !!ts && /iPhone|iPad|iPod/.test(window.navigator.platform);
}
function ns(t) {
    return t + t % 2;
}
function es(t) {
    ts && void 0 !== window.chrome && t.addEventListener("mousedown", (t)=>{
        if (1 === t.button) return t.preventDefault(), !1;
    });
}
class rs {
    constructor(t, i, s){
        this.Hc = 0, this.Uc = null, this.$c = {
            _t: Number.NEGATIVE_INFINITY,
            ut: Number.POSITIVE_INFINITY
        }, this.qc = 0, this.Yc = null, this.jc = {
            _t: Number.NEGATIVE_INFINITY,
            ut: Number.POSITIVE_INFINITY
        }, this.Zc = null, this.Kc = !1, this.Xc = null, this.Gc = null, this.Jc = !1, this.Qc = !1, this.td = !1, this.sd = null, this.nd = null, this.ed = null, this.rd = null, this.hd = null, this.ad = null, this.ld = null, this.od = 0, this._d = !1, this.ud = !1, this.dd = !1, this.fd = 0, this.pd = null, this.vd = !ss(), this.md = (t)=>{
            this.wd(t);
        }, this.gd = (t)=>{
            if (this.Md(t)) {
                const i = this.bd(t);
                if (++this.qc, this.Yc && this.qc > 1) {
                    const { xd: s } = this.Sd(ls(t), this.jc);
                    s < 30 && !this.td && this.Cd(i, this.kd.yd), this.Pd();
                }
            } else {
                const i = this.bd(t);
                if (++this.Hc, this.Uc && this.Hc > 1) {
                    const { xd: s } = this.Sd(ls(t), this.$c);
                    s < 5 && !this.Qc && this.Td(i, this.kd.Rd), this.Dd();
                }
            }
        }, this.Vd = t, this.kd = i, this.ys = s, this.Id();
    }
    m() {
        null !== this.sd && (this.sd(), this.sd = null), null !== this.nd && (this.nd(), this.nd = null), null !== this.rd && (this.rd(), this.rd = null), null !== this.hd && (this.hd(), this.hd = null), null !== this.ad && (this.ad(), this.ad = null), null !== this.ed && (this.ed(), this.ed = null), this.Ad(), this.Dd();
    }
    Bd(t) {
        this.rd && this.rd();
        const i = this.Ed.bind(this);
        if (this.rd = ()=>{
            this.Vd.removeEventListener("mousemove", i);
        }, this.Vd.addEventListener("mousemove", i), this.Md(t)) return;
        const s = this.bd(t);
        this.Td(s, this.kd.zd), this.vd = !0;
    }
    Dd() {
        null !== this.Uc && clearTimeout(this.Uc), this.Hc = 0, this.Uc = null, this.$c = {
            _t: Number.NEGATIVE_INFINITY,
            ut: Number.POSITIVE_INFINITY
        };
    }
    Pd() {
        null !== this.Yc && clearTimeout(this.Yc), this.qc = 0, this.Yc = null, this.jc = {
            _t: Number.NEGATIVE_INFINITY,
            ut: Number.POSITIVE_INFINITY
        };
    }
    Ed(t) {
        if (this.dd || null !== this.Gc) return;
        if (this.Md(t)) return;
        const i = this.bd(t);
        this.Td(i, this.kd.Ld), this.vd = !0;
    }
    Od(t) {
        const i = _s(t.changedTouches, u(this.pd));
        if (null === i) return;
        if (this.fd = os(t), null !== this.ld) return;
        if (this.ud) return;
        this._d = !0;
        const s = this.Sd(ls(i), u(this.Gc)), { Nd: n, Wd: e, xd: r } = s;
        if (this.Jc || !(r < 5)) {
            if (!this.Jc) {
                const t = .5 * n, i = e >= t && !this.ys.Fd(), s = t > e && !this.ys.Hd();
                i || s || (this.ud = !0), this.Jc = !0, this.td = !0, this.Ad(), this.Pd();
            }
            if (!this.ud) {
                const s = this.bd(t, i);
                this.Cd(s, this.kd.Ud), as(t);
            }
        }
    }
    $d(t) {
        if (0 !== t.button) return;
        const i = this.Sd(ls(t), u(this.Xc)), { xd: s } = i;
        if (s >= 5 && (this.Qc = !0, this.Dd()), this.Qc) {
            const i = this.bd(t);
            this.Td(i, this.kd.qd);
        }
    }
    Sd(t, i) {
        const s = Math.abs(i._t - t._t), n = Math.abs(i.ut - t.ut);
        return {
            Nd: s,
            Wd: n,
            xd: s + n
        };
    }
    Yd(t) {
        let i = _s(t.changedTouches, u(this.pd));
        if (null === i && 0 === t.touches.length && (i = t.changedTouches[0]), null === i) return;
        this.pd = null, this.fd = os(t), this.Ad(), this.Gc = null, this.ad && (this.ad(), this.ad = null);
        const s = this.bd(t, i);
        if (this.Cd(s, this.kd.jd), ++this.qc, this.Yc && this.qc > 1) {
            const { xd: t } = this.Sd(ls(i), this.jc);
            t < 30 && !this.td && this.Cd(s, this.kd.yd), this.Pd();
        } else this.td || (this.Cd(s, this.kd.Zd), this.kd.Zd && as(t));
        0 === this.qc && as(t), 0 === t.touches.length && this.Kc && (this.Kc = !1, as(t));
    }
    wd(t) {
        if (0 !== t.button) return;
        const i = this.bd(t);
        if (this.Xc = null, this.dd = !1, this.hd && (this.hd(), this.hd = null), is()) this.Vd.ownerDocument.documentElement.removeEventListener("mouseleave", this.md);
        if (!this.Md(t)) {
            if (this.Td(i, this.kd.Kd), ++this.Hc, this.Uc && this.Hc > 1) {
                const { xd: s } = this.Sd(ls(t), this.$c);
                s < 5 && !this.Qc && this.Td(i, this.kd.Rd), this.Dd();
            } else this.Qc || this.Td(i, this.kd.Xd);
        }
    }
    Ad() {
        null !== this.Zc && (clearTimeout(this.Zc), this.Zc = null);
    }
    Gd(t) {
        if (null !== this.pd) return;
        const i = t.changedTouches[0];
        this.pd = i.identifier, this.fd = os(t);
        const s = this.Vd.ownerDocument.documentElement;
        this.td = !1, this.Jc = !1, this.ud = !1, this.Gc = ls(i), this.ad && (this.ad(), this.ad = null);
        {
            const i = this.Od.bind(this), n = this.Yd.bind(this);
            this.ad = ()=>{
                s.removeEventListener("touchmove", i), s.removeEventListener("touchend", n);
            }, s.addEventListener("touchmove", i, {
                passive: !1
            }), s.addEventListener("touchend", n, {
                passive: !1
            }), this.Ad(), this.Zc = setTimeout(this.Jd.bind(this, t), 240);
        }
        const n = this.bd(t, i);
        this.Cd(n, this.kd.Qd), this.Yc || (this.qc = 0, this.Yc = setTimeout(this.Pd.bind(this), 500), this.jc = ls(i));
    }
    tf(t) {
        if (0 !== t.button) return;
        const i = this.Vd.ownerDocument.documentElement;
        is() && i.addEventListener("mouseleave", this.md), this.Qc = !1, this.Xc = ls(t), this.hd && (this.hd(), this.hd = null);
        {
            const t = this.$d.bind(this), s = this.wd.bind(this);
            this.hd = ()=>{
                i.removeEventListener("mousemove", t), i.removeEventListener("mouseup", s);
            }, i.addEventListener("mousemove", t), i.addEventListener("mouseup", s);
        }
        if (this.dd = !0, this.Md(t)) return;
        const s = this.bd(t);
        this.Td(s, this.kd.if), this.Uc || (this.Hc = 0, this.Uc = setTimeout(this.Dd.bind(this), 500), this.$c = ls(t));
    }
    Id() {
        this.Vd.addEventListener("mouseenter", this.Bd.bind(this)), this.Vd.addEventListener("touchcancel", this.Ad.bind(this));
        {
            const t = this.Vd.ownerDocument, i = (t)=>{
                this.kd.sf && (t.composed && this.Vd.contains(t.composedPath()[0]) || t.target && this.Vd.contains(t.target) || this.kd.sf());
            };
            this.nd = ()=>{
                t.removeEventListener("touchstart", i);
            }, this.sd = ()=>{
                t.removeEventListener("mousedown", i);
            }, t.addEventListener("mousedown", i), t.addEventListener("touchstart", i, {
                passive: !0
            });
        }
        ss() && (this.ed = ()=>{
            this.Vd.removeEventListener("dblclick", this.gd);
        }, this.Vd.addEventListener("dblclick", this.gd)), this.Vd.addEventListener("mouseleave", this.nf.bind(this)), this.Vd.addEventListener("touchstart", this.Gd.bind(this), {
            passive: !0
        }), es(this.Vd), this.Vd.addEventListener("mousedown", this.tf.bind(this)), this.ef(), this.Vd.addEventListener("touchmove", ()=>{}, {
            passive: !1
        });
    }
    ef() {
        void 0 === this.kd.rf && void 0 === this.kd.hf && void 0 === this.kd.af || (this.Vd.addEventListener("touchstart", (t)=>this.lf(t.touches), {
            passive: !0
        }), this.Vd.addEventListener("touchmove", (t)=>{
            if (2 === t.touches.length && null !== this.ld && void 0 !== this.kd.hf) {
                const i = hs(t.touches[0], t.touches[1]) / this.od;
                this.kd.hf(this.ld, i), as(t);
            }
        }, {
            passive: !1
        }), this.Vd.addEventListener("touchend", (t)=>{
            this.lf(t.touches);
        }));
    }
    lf(t) {
        1 === t.length && (this._d = !1), 2 !== t.length || this._d || this.Kc ? this._f() : this.uf(t);
    }
    uf(t) {
        const i = this.Vd.getBoundingClientRect() || {
            left: 0,
            top: 0
        };
        this.ld = {
            _t: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
            ut: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2
        }, this.od = hs(t[0], t[1]), void 0 !== this.kd.rf && this.kd.rf(), this.Ad();
    }
    _f() {
        null !== this.ld && (this.ld = null, void 0 !== this.kd.af && this.kd.af());
    }
    nf(t) {
        if (this.rd && this.rd(), this.Md(t)) return;
        if (!this.vd) return;
        const i = this.bd(t);
        this.Td(i, this.kd.cf), this.vd = !ss();
    }
    Jd(t) {
        const i = _s(t.touches, u(this.pd));
        if (null === i) return;
        const s = this.bd(t, i);
        this.Cd(s, this.kd.df), this.td = !0, this.Kc = !0;
    }
    Md(t) {
        return t.sourceCapabilities && void 0 !== t.sourceCapabilities.firesTouchEvents ? t.sourceCapabilities.firesTouchEvents : os(t) < this.fd + 500;
    }
    Cd(t, i) {
        i && i.call(this.kd, t);
    }
    Td(t, i) {
        i && i.call(this.kd, t);
    }
    bd(t, i) {
        const s = i || t, n = this.Vd.getBoundingClientRect() || {
            left: 0,
            top: 0
        };
        return {
            clientX: s.clientX,
            clientY: s.clientY,
            pageX: s.pageX,
            pageY: s.pageY,
            screenX: s.screenX,
            screenY: s.screenY,
            localX: s.clientX - n.left,
            localY: s.clientY - n.top,
            ctrlKey: t.ctrlKey,
            altKey: t.altKey,
            shiftKey: t.shiftKey,
            metaKey: t.metaKey,
            ff: !t.type.startsWith("mouse") && "contextmenu" !== t.type && "click" !== t.type,
            pf: t.type,
            vf: s.target,
            $o: t.view,
            mf: ()=>{
                "touchstart" !== t.type && as(t);
            }
        };
    }
}
function hs(t, i) {
    const s = t.clientX - i.clientX, n = t.clientY - i.clientY;
    return Math.sqrt(s * s + n * n);
}
function as(t) {
    t.cancelable && t.preventDefault();
}
function ls(t) {
    return {
        _t: t.pageX,
        ut: t.pageY
    };
}
function os(t) {
    return t.timeStamp || performance.now();
}
function _s(t, i) {
    for(let s = 0; s < t.length; ++s)if (t[s].identifier === i) return t[s];
    return null;
}
class us {
    constructor(t, i, s){
        this.wf = null, this.gf = null, this.Mf = !0, this.bf = null, this.xf = t, this.Sf = t.Cf()[i], this.yf = t.Cf()[s], this.kf = document.createElement("tr"), this.kf.style.height = "1px", this.Pf = document.createElement("td"), this.Pf.style.position = "relative", this.Pf.style.padding = "0", this.Pf.style.margin = "0", this.Pf.setAttribute("colspan", "3"), this.Tf(), this.kf.appendChild(this.Pf), this.Mf = this.xf.N().layout.panes.enableResize, this.Mf ? this.Rf() : (this.wf = null, this.gf = null);
    }
    m() {
        null !== this.gf && this.gf.m();
    }
    Df() {
        return this.kf;
    }
    Vf() {
        return (0, _fancyCanvas.size)({
            width: this.Sf.Vf().width,
            height: 1
        });
    }
    If() {
        return (0, _fancyCanvas.size)({
            width: this.Sf.If().width,
            height: 1 * window.devicePixelRatio
        });
    }
    Af(t, i, s) {
        const n = this.If();
        t.fillStyle = this.xf.N().layout.panes.separatorColor, t.fillRect(i, s, n.width, n.height);
    }
    kt() {
        this.Tf(), this.xf.N().layout.panes.enableResize !== this.Mf && (this.Mf = this.xf.N().layout.panes.enableResize, this.Mf ? this.Rf() : (null !== this.wf && (this.Pf.removeChild(this.wf.Bf), this.Pf.removeChild(this.wf.Ef), this.wf = null), null !== this.gf && (this.gf.m(), this.gf = null)));
    }
    Rf() {
        const t = document.createElement("div"), i = t.style;
        i.position = "fixed", i.display = "none", i.zIndex = "49", i.top = "0", i.left = "0", i.width = "100%", i.height = "100%", i.cursor = "row-resize", this.Pf.appendChild(t);
        const s = document.createElement("div"), n = s.style;
        n.position = "absolute", n.zIndex = "50", n.top = "-4px", n.height = "9px", n.width = "100%", n.backgroundColor = "", n.cursor = "row-resize", this.Pf.appendChild(s);
        const e = {
            zd: this.zf.bind(this),
            cf: this.Lf.bind(this),
            if: this.Of.bind(this),
            Qd: this.Of.bind(this),
            qd: this.Nf.bind(this),
            Ud: this.Nf.bind(this),
            Kd: this.Wf.bind(this),
            jd: this.Wf.bind(this)
        };
        this.gf = new rs(s, e, {
            Fd: ()=>!1,
            Hd: ()=>!0
        }), this.wf = {
            Ef: s,
            Bf: t
        };
    }
    Tf() {
        this.Pf.style.background = this.xf.N().layout.panes.separatorColor;
    }
    zf(t) {
        null !== this.wf && (this.wf.Ef.style.backgroundColor = this.xf.N().layout.panes.separatorHoverColor);
    }
    Lf(t) {
        null !== this.wf && null === this.bf && (this.wf.Ef.style.backgroundColor = "");
    }
    Of(t) {
        if (null === this.wf) return;
        const i = this.Sf.Ff().fo() + this.yf.Ff().fo(), s = i / (this.Sf.Vf().height + this.yf.Vf().height), n = 30 * s;
        i <= 2 * n || (this.bf = {
            Hf: t.pageY,
            Uf: this.Sf.Ff().fo(),
            $f: i - n,
            qf: i,
            Yf: s,
            jf: n
        }, this.wf.Bf.style.display = "block");
    }
    Nf(t) {
        const i = this.bf;
        if (null === i) return;
        const s = (t.pageY - i.Hf) * i.Yf, n = ai(i.Uf + s, i.jf, i.$f);
        this.Sf.Ff().po(n), this.yf.Ff().po(i.qf - n), this.xf.Qt().Ah();
    }
    Wf(t) {
        null !== this.bf && null !== this.wf && (this.bf = null, this.wf.Bf.style.display = "none");
    }
}
function cs(t, i) {
    return t.Zf - i.Zf;
}
function ds(t, i, s) {
    const n = (t.Zf - i.Zf) / (t.wt - i.wt);
    return Math.sign(n) * Math.min(Math.abs(n), s);
}
class fs {
    constructor(t, i, s, n){
        this.Kf = null, this.Xf = null, this.Gf = null, this.Jf = null, this.Qf = null, this.tp = 0, this.ip = 0, this.sp = t, this.np = i, this.ep = s, this.Mn = n;
    }
    rp(t, i) {
        if (null !== this.Kf) {
            if (this.Kf.wt === i) return void (this.Kf.Zf = t);
            if (Math.abs(this.Kf.Zf - t) < this.Mn) return;
        }
        this.Jf = this.Gf, this.Gf = this.Xf, this.Xf = this.Kf, this.Kf = {
            wt: i,
            Zf: t
        };
    }
    le(t, i) {
        if (null === this.Kf || null === this.Xf) return;
        if (i - this.Kf.wt > 50) return;
        let s = 0;
        const n = ds(this.Kf, this.Xf, this.np), e = cs(this.Kf, this.Xf), r = [
            n
        ], h = [
            e
        ];
        if (s += e, null !== this.Gf) {
            const t = ds(this.Xf, this.Gf, this.np);
            if (Math.sign(t) === Math.sign(n)) {
                const i = cs(this.Xf, this.Gf);
                if (r.push(t), h.push(i), s += i, null !== this.Jf) {
                    const t = ds(this.Gf, this.Jf, this.np);
                    if (Math.sign(t) === Math.sign(n)) {
                        const i = cs(this.Gf, this.Jf);
                        r.push(t), h.push(i), s += i;
                    }
                }
            }
        }
        let a = 0;
        for(let t = 0; t < r.length; ++t)a += h[t] / s * r[t];
        Math.abs(a) < this.sp || (this.Qf = {
            Zf: t,
            wt: i
        }, this.ip = a, this.tp = function(t, i) {
            const s = Math.log(i);
            return Math.log(1 * s / -t) / s;
        }(Math.abs(a), this.ep));
    }
    cu(t) {
        const i = u(this.Qf), s = t - i.wt;
        return i.Zf + this.ip * (Math.pow(this.ep, s) - 1) / Math.log(this.ep);
    }
    uu(t) {
        return null === this.Qf || this.hp(t) === this.tp;
    }
    hp(t) {
        const i = t - u(this.Qf).wt;
        return Math.min(i, this.tp);
    }
}
class ps {
    constructor(t, i){
        this.ap = void 0, this.lp = void 0, this.op = void 0, this.ps = !1, this._p = t, this.up = i, this.cp();
    }
    kt() {
        this.cp();
    }
    dp() {
        this.ap && this._p.removeChild(this.ap), this.lp && this._p.removeChild(this.lp), this.ap = void 0, this.lp = void 0;
    }
    fp() {
        return this.ps !== this.pp() || this.op !== this.vp();
    }
    vp() {
        return this.up.Qt().Ki().J(this.up.N().layout.textColor) > 160 ? "dark" : "light";
    }
    pp() {
        return this.up.N().layout.attributionLogo;
    }
    mp() {
        const t = new URL(location.href);
        return t.hostname ? "&utm_source=" + t.hostname + t.pathname : "";
    }
    cp() {
        this.fp() && (this.dp(), this.ps = this.pp(), this.ps && (this.op = this.vp(), this.lp = document.createElement("style"), this.lp.innerText = "a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}", this.ap = document.createElement("a"), this.ap.href = `https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.mp()}`, this.ap.title = "Charting by TradingView", this.ap.id = "tv-attr-logo", this.ap.target = "_blank", this.ap.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>', this.ap.toggleAttribute("data-dark", "dark" === this.op), this._p.appendChild(this.lp), this._p.appendChild(this.ap)));
    }
}
function vs(t, s) {
    const n = u(t.ownerDocument).createElement("canvas");
    t.appendChild(n);
    const e = (0, _fancyCanvas.bindCanvasElementBitmapSizeTo)(n, {
        type: "device-pixel-content-box",
        options: {
            allowResizeObserver: !0
        },
        transform: (t, i)=>({
                width: Math.max(t.width, i.width),
                height: Math.max(t.height, i.height)
            })
    });
    return e.resizeCanvasElement(s), e;
}
function ms(t) {
    t.width = 1, t.height = 1, t.getContext("2d")?.clearRect(0, 0, 1, 1);
}
function ws(t, i, s, n) {
    t.ih && t.ih(i, s, n);
}
function gs(t, i, s, n) {
    t.nt(i, s, n);
}
function Ms(t, i, s, n) {
    const e = t(s, n);
    for (const t of e){
        const s = t.Tt(n);
        null !== s && i(s);
    }
}
function bs(t, i) {
    return (s)=>{
        if (!function(t) {
            return void 0 !== t.Wt;
        }(s)) return [];
        return (s.Wt()?.wa() ?? "") !== i ? [] : s.ta?.(t) ?? [];
    };
}
function xs(t, i, s, n) {
    if (!t.length) return;
    let e = 0;
    const r = t[0].$t(n, !0);
    let h = 1 === i ? s / 2 - (t[0].Wi() - r / 2) : t[0].Wi() - r / 2 - s / 2;
    h = Math.max(0, h);
    for(let r = 1; r < t.length; r++){
        const a = t[r], l = t[r - 1], o = l.$t(n, !1), _ = a.Wi(), u = l.Wi();
        if (1 === i ? _ > u - o : _ < u + o) {
            const n = u - o * i;
            a.Fi(n);
            const r = n - i * o / 2;
            if ((1 === i ? r < 0 : r > s) && h > 0) {
                const n = 1 === i ? -1 - r : r - s, a = Math.min(n, h);
                for(let s = e; s < t.length; s++)t[s].Fi(t[s].Wi() + i * a);
                h -= a;
            }
        } else e = r, h = 1 === i ? u - o - _ : _ - (u + o);
    }
}
class Ss {
    constructor(i, s, n, e){
        this.Yi = null, this.wp = null, this.gp = !1, this.Mp = new et(200), this.bp = null, this.xp = 0, this.Sp = !1, this.Cp = ()=>{
            this.Sp || this.yt.yp().Qt().ar();
        }, this.kp = ()=>{
            this.Sp || this.yt.yp().Qt().ar();
        }, this.yt = i, this.ys = s, this._l = s.layout, this.Bu = n, this.Pp = "left" === e, this.Tp = bs("normal", e), this.Rp = bs("top", e), this.Dp = bs("bottom", e), this.Pf = document.createElement("div"), this.Pf.style.height = "100%", this.Pf.style.overflow = "hidden", this.Pf.style.width = "25px", this.Pf.style.left = "0", this.Pf.style.position = "relative", this.Vp = vs(this.Pf, (0, _fancyCanvas.size)({
            width: 16,
            height: 16
        })), this.Vp.subscribeSuggestedBitmapSizeChanged(this.Cp);
        const r = this.Vp.canvasElement;
        r.style.position = "absolute", r.style.zIndex = "1", r.style.left = "0", r.style.top = "0", this.Ip = vs(this.Pf, (0, _fancyCanvas.size)({
            width: 16,
            height: 16
        })), this.Ip.subscribeSuggestedBitmapSizeChanged(this.kp);
        const h = this.Ip.canvasElement;
        h.style.position = "absolute", h.style.zIndex = "2", h.style.left = "0", h.style.top = "0";
        const a = {
            if: this.Of.bind(this),
            Qd: this.Of.bind(this),
            qd: this.Nf.bind(this),
            Ud: this.Nf.bind(this),
            sf: this.Ap.bind(this),
            Kd: this.Wf.bind(this),
            jd: this.Wf.bind(this),
            Rd: this.Bp.bind(this),
            yd: this.Bp.bind(this),
            zd: this.Ep.bind(this),
            cf: this.Lf.bind(this)
        };
        this.gf = new rs(this.Ip.canvasElement, a, {
            Fd: ()=>!this.ys.handleScroll.vertTouchDrag,
            Hd: ()=>!0
        });
    }
    m() {
        this.gf.m(), this.Ip.unsubscribeSuggestedBitmapSizeChanged(this.kp), ms(this.Ip.canvasElement), this.Ip.dispose(), this.Vp.unsubscribeSuggestedBitmapSizeChanged(this.Cp), ms(this.Vp.canvasElement), this.Vp.dispose(), null !== this.Yi && this.Yi.Hl().u(this), this.Yi = null;
    }
    Df() {
        return this.Pf;
    }
    k() {
        return this._l.fontSize;
    }
    zp() {
        const t = this.Bu.N();
        return this.bp !== t.P && (this.Mp.In(), this.bp = t.P), t;
    }
    Lp() {
        if (null === this.Yi) return 0;
        let t = 0;
        const i = this.zp(), s = u(this.Vp.canvasElement.getContext("2d", {
            colorSpace: this.yt.yp().N().layout.colorSpace
        }));
        s.save();
        const n = this.Yi.Va();
        s.font = this.Op(), n.length > 0 && (t = Math.max(this.Mp.Vi(s, n[0].$a), this.Mp.Vi(s, n[n.length - 1].$a)));
        const e = this.Np();
        for(let i = e.length; i--;){
            const n = this.Mp.Vi(s, e[i].ri());
            n > t && (t = n);
        }
        const r = this.Yi.zt();
        if (null !== r && null !== this.wp && 2 !== (h = this.ys.crosshair).mode && h.horzLine.visible && h.horzLine.labelVisible) {
            const i = this.Yi.Ts(1, r), n = this.Yi.Ts(this.wp.height - 2, r);
            t = Math.max(t, this.Mp.Vi(s, this.Yi.Xi(Math.floor(Math.min(i, n)) + .11111111111111, r)), this.Mp.Vi(s, this.Yi.Xi(Math.ceil(Math.max(i, n)) - .11111111111111, r)));
        }
        var h;
        s.restore();
        const a = t || 34;
        return ns(Math.ceil(i.S + i.C + i.I + i.A + 5 + a));
    }
    Wp(t) {
        null !== this.wp && (0, _fancyCanvas.equalSizes)(this.wp, t) || (this.wp = t, this.Sp = !0, this.Vp.resizeCanvasElement(t), this.Ip.resizeCanvasElement(t), this.Sp = !1, this.Pf.style.width = `${t.width}px`, this.Pf.style.height = `${t.height}px`);
    }
    Fp() {
        return u(this.wp).width;
    }
    _s(t) {
        this.Yi !== t && (null !== this.Yi && this.Yi.Hl().u(this), this.Yi = t, t.Hl().i(this.il.bind(this), this));
    }
    Wt() {
        return this.Yi;
    }
    In() {
        const t = this.yt.Ff();
        this.yt.yp().Qt().Ao(t, u(this.Wt()));
    }
    Hp(t) {
        if (null === this.wp) return;
        const i = {
            colorSpace: this.yt.yp().N().layout.colorSpace
        };
        if (1 !== t) {
            this.Up(), this.Vp.applySuggestedBitmapSize();
            const t = (0, _fancyCanvas.tryCreateCanvasRenderingTarget2D)(this.Vp, i);
            null !== t && (t.useBitmapCoordinateSpace((t)=>{
                this.$p(t), this.qp(t);
            }), this.yt.Yp(t, this.Dp), this.jp(t), this.yt.Yp(t, this.Tp), this.Zp(t));
        }
        this.Ip.applySuggestedBitmapSize();
        const s = (0, _fancyCanvas.tryCreateCanvasRenderingTarget2D)(this.Ip, i);
        null !== s && (s.useBitmapCoordinateSpace(({ context: t, bitmapSize: i })=>{
            t.clearRect(0, 0, i.width, i.height);
        }), this.Kp(s), this.yt.Yp(s, this.Rp));
    }
    If() {
        return this.Vp.bitmapSize;
    }
    Af(t, i, s) {
        const n = this.If();
        n.width > 0 && n.height > 0 && t.drawImage(this.Vp.canvasElement, i, s);
    }
    kt() {
        this.Yi?.Va();
    }
    Of(t) {
        if (null === this.Yi || this.Yi.Zi() || !this.ys.handleScale.axisPressedMouseMove.price) return;
        const i = this.yt.yp().Qt(), s = this.yt.Ff();
        this.gp = !0, i.ko(s, this.Yi, t.localY);
    }
    Nf(t) {
        if (null === this.Yi || !this.ys.handleScale.axisPressedMouseMove.price) return;
        const i = this.yt.yp().Qt(), s = this.yt.Ff(), n = this.Yi;
        i.Po(s, n, t.localY);
    }
    Ap() {
        if (null === this.Yi || !this.ys.handleScale.axisPressedMouseMove.price) return;
        const t = this.yt.yp().Qt(), i = this.yt.Ff(), s = this.Yi;
        this.gp && (this.gp = !1, t.To(i, s));
    }
    Wf(t) {
        if (null === this.Yi || !this.ys.handleScale.axisPressedMouseMove.price) return;
        const i = this.yt.yp().Qt(), s = this.yt.Ff();
        this.gp = !1, i.To(s, this.Yi);
    }
    Bp(t) {
        this.ys.handleScale.axisDoubleClickReset.price && this.In();
    }
    Ep(t) {
        if (null === this.Yi) return;
        !this.yt.yp().Qt().N().handleScale.axisPressedMouseMove.price || this.Yi.Le() || this.Yi.gl() || this.Xp(1);
    }
    Lf(t) {
        this.Xp(0);
    }
    Np() {
        const t = [], i = null === this.Yi ? void 0 : this.Yi;
        return ((s)=>{
            for(let n = 0; n < s.length; ++n){
                const e = s[n].Fs(this.yt.Ff(), i);
                for(let i = 0; i < e.length; i++)t.push(e[i]);
            }
        })(this.yt.Ff().Dt()), t;
    }
    $p({ context: t, bitmapSize: i }) {
        const { width: s, height: n } = i, e = this.yt.Ff().Qt(), r = e.$(), h = e.Sc();
        r === h ? L(t, 0, 0, s, n, r) : W(t, 0, 0, s, n, r, h);
    }
    qp({ context: t, bitmapSize: i, horizontalPixelRatio: s }) {
        if (null === this.wp || null === this.Yi || !this.Yi.N().borderVisible) return;
        t.fillStyle = this.Yi.N().borderColor;
        const n = Math.max(1, Math.floor(this.zp().S * s));
        let e;
        e = this.Pp ? i.width - n : 0, t.fillRect(e, 0, n, i.height);
    }
    jp(t) {
        if (null === this.wp || null === this.Yi) return;
        const i = this.Yi.Va(), s = this.Yi.N(), n = this.zp(), e = this.Pp ? this.wp.width - n.C : 0;
        s.borderVisible && s.ticksVisible && t.useBitmapCoordinateSpace(({ context: t, horizontalPixelRatio: r, verticalPixelRatio: h })=>{
            t.fillStyle = s.borderColor;
            const a = Math.max(1, Math.floor(h)), l = Math.floor(.5 * h), o = Math.round(n.C * r);
            t.beginPath();
            for (const s of i)t.rect(Math.floor(e * r), Math.round(s.ka * h) - l, o, a);
            t.fill();
        }), t.useMediaCoordinateSpace(({ context: t })=>{
            t.font = this.Op(), t.fillStyle = s.textColor ?? this._l.textColor, t.textAlign = this.Pp ? "right" : "left", t.textBaseline = "middle";
            const r = this.Pp ? Math.round(e - n.I) : Math.round(e + n.C + n.I), h = i.map((i)=>this.Mp.Di(t, i.$a));
            for(let s = i.length; s--;){
                const n = i[s];
                t.fillText(n.$a, r, n.ka + h[s]);
            }
        });
    }
    Up() {
        if (null === this.wp || null === this.Yi) return;
        let t = this.wp.height / 2;
        const i = [], s = this.Yi.Dt().slice(), n = this.yt.Ff(), e = this.zp();
        this.Yi === n.$n() && this.yt.Ff().Dt().forEach((t)=>{
            n.Un(t) && s.push(t);
        });
        const r = this.Yi.ba()[0], h = this.Yi;
        s.forEach((s)=>{
            const e = s.Fs(n, h);
            e.forEach((t)=>{
                t.Fi(null), t.Hi() && i.push(t);
            }), r === s && e.length > 0 && (t = e[0].Ai());
        }), i.forEach((t)=>t.Fi(t.Ai()));
        this.Yi.N().alignLabels && this.Gp(i, e, t);
    }
    Gp(t, i, s) {
        if (null === this.wp) return;
        const n = t.filter((t)=>t.Ai() <= s), e = t.filter((t)=>t.Ai() > s);
        n.sort((t, i)=>i.Ai() - t.Ai()), n.length && e.length && e.push(n[0]), e.sort((t, i)=>t.Ai() - i.Ai());
        for (const s of t){
            const t = Math.floor(s.$t(i) / 2), n = s.Ai();
            n > -t && n < t && s.Fi(t), n > this.wp.height - t && n < this.wp.height + t && s.Fi(this.wp.height - t);
        }
        xs(n, 1, this.wp.height, i), xs(e, -1, this.wp.height, i);
    }
    Zp(t) {
        if (null === this.wp) return;
        const i = this.Np(), s = this.zp(), n = this.Pp ? "right" : "left";
        i.forEach((i)=>{
            if (i.Ui()) i.Tt(u(this.Yi)).nt(t, s, this.Mp, n);
        });
    }
    Kp(t) {
        if (null === this.wp || null === this.Yi) return;
        const i = this.yt.yp().Qt(), s = [], n = this.yt.Ff(), e = i.Yu().Fs(n, this.Yi);
        e.length && s.push(e);
        const r = this.zp(), h = this.Pp ? "right" : "left";
        s.forEach((i)=>{
            i.forEach((i)=>{
                i.Tt(u(this.Yi)).nt(t, r, this.Mp, h);
            });
        });
    }
    Xp(t) {
        this.Pf.style.cursor = 1 === t ? "ns-resize" : "default";
    }
    il() {
        const t = this.Lp();
        this.xp < t && this.yt.yp().Qt().Ah(), this.xp = t;
    }
    Op() {
        return S(this._l.fontSize, this._l.fontFamily);
    }
}
function Cs(t, i) {
    return t.Jh?.(i) ?? [];
}
function ys(t, i) {
    return t.Ws?.(i) ?? [];
}
function ks(t, i) {
    return t.us?.(i) ?? [];
}
function Ps(t, i) {
    return t.Kh?.(i) ?? [];
}
class Ts {
    constructor(i, s){
        this.wp = (0, _fancyCanvas.size)({
            width: 0,
            height: 0
        }), this.Jp = null, this.Qp = null, this.tv = null, this.iv = null, this.sv = !1, this.nv = new d, this.ev = new d, this.rv = 0, this.hv = !1, this.av = null, this.lv = !1, this.ov = null, this._v = null, this.Sp = !1, this.Cp = ()=>{
            this.Sp || null === this.uv || this.ts().ar();
        }, this.kp = ()=>{
            this.Sp || null === this.uv || this.ts().ar();
        }, this.up = i, this.uv = s, this.uv.zo().i(this.cv.bind(this), this, !0), this.dv = document.createElement("td"), this.dv.style.padding = "0", this.dv.style.position = "relative";
        const n = document.createElement("div");
        n.style.width = "100%", n.style.height = "100%", n.style.position = "relative", n.style.overflow = "hidden", this.fv = document.createElement("td"), this.fv.style.padding = "0", this.pv = document.createElement("td"), this.pv.style.padding = "0", this.dv.appendChild(n), this.Vp = vs(n, (0, _fancyCanvas.size)({
            width: 16,
            height: 16
        })), this.Vp.subscribeSuggestedBitmapSizeChanged(this.Cp);
        const e = this.Vp.canvasElement;
        e.style.position = "absolute", e.style.zIndex = "1", e.style.left = "0", e.style.top = "0", this.Ip = vs(n, (0, _fancyCanvas.size)({
            width: 16,
            height: 16
        })), this.Ip.subscribeSuggestedBitmapSizeChanged(this.kp);
        const r = this.Ip.canvasElement;
        r.style.position = "absolute", r.style.zIndex = "2", r.style.left = "0", r.style.top = "0", this.kf = document.createElement("tr"), this.kf.appendChild(this.fv), this.kf.appendChild(this.dv), this.kf.appendChild(this.pv), this.vv(), this.gf = new rs(this.Ip.canvasElement, this, {
            Fd: ()=>null === this.av && !this.up.N().handleScroll.vertTouchDrag,
            Hd: ()=>null === this.av && !this.up.N().handleScroll.horzTouchDrag
        });
    }
    m() {
        null !== this.Jp && this.Jp.m(), null !== this.Qp && this.Qp.m(), this.tv = null, this.Ip.unsubscribeSuggestedBitmapSizeChanged(this.kp), ms(this.Ip.canvasElement), this.Ip.dispose(), this.Vp.unsubscribeSuggestedBitmapSizeChanged(this.Cp), ms(this.Vp.canvasElement), this.Vp.dispose(), null !== this.uv && (this.uv.zo().u(this), this.uv.m()), this.gf.m();
    }
    Ff() {
        return u(this.uv);
    }
    mv(t) {
        null !== this.uv && this.uv.zo().u(this), this.uv = t, null !== this.uv && this.uv.zo().i(Ts.prototype.cv.bind(this), this, !0), this.vv(), this.up.Cf().indexOf(this) === this.up.Cf().length - 1 ? (this.tv = this.tv ?? new ps(this.dv, this.up), this.tv.kt()) : (this.tv?.dp(), this.tv = null);
    }
    yp() {
        return this.up;
    }
    Df() {
        return this.kf;
    }
    vv() {
        if (null !== this.uv && (this.wv(), 0 !== this.ts().js().length)) {
            if (null !== this.Jp) {
                const t = this.uv.Co();
                this.Jp._s(u(t));
            }
            if (null !== this.Qp) {
                const t = this.uv.yo();
                this.Qp._s(u(t));
            }
        }
    }
    gv() {
        null !== this.Jp && this.Jp.kt(), null !== this.Qp && this.Qp.kt();
    }
    fo() {
        return null !== this.uv ? this.uv.fo() : 0;
    }
    po(t) {
        this.uv && this.uv.po(t);
    }
    zd(t) {
        if (!this.uv) return;
        this.Mv();
        const i = t.localX, s = t.localY;
        this.bv(i, s, t);
    }
    if(t) {
        this.Mv(), this.xv(), this.bv(t.localX, t.localY, t);
    }
    Ld(t) {
        if (!this.uv) return;
        this.Mv();
        const i = t.localX, s = t.localY;
        this.bv(i, s, t);
    }
    Xd(t) {
        null !== this.uv && (this.Mv(), this.Sv(t));
    }
    Rd(t) {
        null !== this.uv && this.Cv(this.ev, t);
    }
    yd(t) {
        this.Rd(t);
    }
    qd(t) {
        this.Mv(), this.yv(t), this.bv(t.localX, t.localY, t);
    }
    Kd(t) {
        null !== this.uv && (this.Mv(), this.hv = !1, this.kv(t));
    }
    Zd(t) {
        null !== this.uv && this.Sv(t);
    }
    df(t) {
        if (this.hv = !0, null === this.av) {
            const i = {
                x: t.localX,
                y: t.localY
            };
            this.Pv(i, i, t);
        }
    }
    cf(t) {
        null !== this.uv && (this.Mv(), this.uv.Qt().Uu(null), this.Tv());
    }
    Rv() {
        return this.nv;
    }
    Dv() {
        return this.ev;
    }
    rf() {
        this.rv = 1, this.ts().hn();
    }
    hf(t, i) {
        if (!this.up.N().handleScale.pinch) return;
        const s = 5 * (i - this.rv);
        this.rv = i, this.ts().tc(t._t, s);
    }
    Qd(t) {
        this.hv = !1, this.lv = null !== this.av, this.xv();
        const i = this.ts().Yu();
        null !== this.av && i.Vt() && (this.ov = {
            x: i.si(),
            y: i.ni()
        }, this.av = {
            x: t.localX,
            y: t.localY
        });
    }
    Ud(t) {
        if (null === this.uv) return;
        const i = t.localX, s = t.localY;
        if (null === this.av) this.yv(t);
        else {
            this.lv = !1;
            const n = u(this.ov), e = n.x + (i - this.av.x), r = n.y + (s - this.av.y);
            this.bv(e, r, t);
        }
    }
    jd(t) {
        0 === this.yp().N().trackingMode.exitMode && (this.lv = !0), this.Vv(), this.kv(t);
    }
    jn(t, i) {
        const s = this.uv;
        return null === s ? null : xi(s, t, i);
    }
    Iv(i, s) {
        u("left" === s ? this.Jp : this.Qp).Wp((0, _fancyCanvas.size)({
            width: i,
            height: this.wp.height
        }));
    }
    Vf() {
        return this.wp;
    }
    Wp(t) {
        (0, _fancyCanvas.equalSizes)(this.wp, t) || (this.wp = t, this.Sp = !0, this.Vp.resizeCanvasElement(t), this.Ip.resizeCanvasElement(t), this.Sp = !1, this.dv.style.width = t.width + "px", this.dv.style.height = t.height + "px");
    }
    Av() {
        const t = u(this.uv);
        t.So(t.Co()), t.So(t.yo());
        for (const i of t.ba())if (t.Un(i)) {
            const s = i.Wt();
            null !== s && t.So(s), i.Ns();
        }
        for (const i of t.Oo())i.Ns();
    }
    If() {
        return this.Vp.bitmapSize;
    }
    Af(t, i, s) {
        const n = this.If();
        n.width > 0 && n.height > 0 && t.drawImage(this.Vp.canvasElement, i, s);
    }
    Hp(t) {
        if (0 === t) return;
        if (null === this.uv) return;
        t > 1 && this.Av(), null !== this.Jp && this.Jp.Hp(t), null !== this.Qp && this.Qp.Hp(t);
        const i = {
            colorSpace: this.up.N().layout.colorSpace
        };
        if (1 !== t) {
            this.Vp.applySuggestedBitmapSize();
            const t = (0, _fancyCanvas.tryCreateCanvasRenderingTarget2D)(this.Vp, i);
            null !== t && (t.useBitmapCoordinateSpace((t)=>{
                this.$p(t);
            }), this.uv && (this.Bv(t, Cs), this.Ev(t), this.Bv(t, ys), this.Bv(t, ks)));
        }
        this.Ip.applySuggestedBitmapSize();
        const s = (0, _fancyCanvas.tryCreateCanvasRenderingTarget2D)(this.Ip, i);
        null !== s && (s.useBitmapCoordinateSpace(({ context: t, bitmapSize: i })=>{
            t.clearRect(0, 0, i.width, i.height);
        }), this.zv(s), this.Bv(s, Ps), this.Bv(s, ks));
    }
    Lv() {
        return this.Jp;
    }
    Ov() {
        return this.Qp;
    }
    Yp(t, i) {
        this.Bv(t, i);
    }
    cv() {
        null !== this.uv && this.uv.zo().u(this), this.uv = null;
    }
    Sv(t) {
        this.Cv(this.nv, t);
    }
    Cv(t, i) {
        const s = i.localX, n = i.localY;
        t.v() && t.p(this.ts().Bt().Z_(s), {
            x: s,
            y: n
        }, i);
    }
    $p({ context: t, bitmapSize: i }) {
        const { width: s, height: n } = i, e = this.ts(), r = e.$(), h = e.Sc();
        r === h ? L(t, 0, 0, s, n, h) : W(t, 0, 0, s, n, r, h);
    }
    Ev(t) {
        const i = u(this.uv), s = i.Lo().lr().Tt(i);
        null !== s && s.nt(t, !1);
    }
    zv(t) {
        this.Nv(t, ys, gs, this.ts().Yu());
    }
    Bv(t, i) {
        const s = u(this.uv), n = s.Dt(), e = s.Oo();
        for (const s of e)this.Nv(t, i, ws, s);
        for (const s of n)this.Nv(t, i, ws, s);
        for (const s of e)this.Nv(t, i, gs, s);
        for (const s of n)this.Nv(t, i, gs, s);
    }
    Nv(t, i, s, n) {
        const e = u(this.uv), r = e.Qt().Hu(), h = null !== r && r.Wo === n, a = null !== r && h && void 0 !== r.Fo ? r.Fo.Kn : void 0;
        Ms(i, (i)=>s(i, t, h, a), n, e);
    }
    wv() {
        if (null === this.uv) return;
        const t = this.up, i = this.uv.Co().N().visible, s = this.uv.yo().N().visible;
        i || null === this.Jp || (this.fv.removeChild(this.Jp.Df()), this.Jp.m(), this.Jp = null), s || null === this.Qp || (this.pv.removeChild(this.Qp.Df()), this.Qp.m(), this.Qp = null);
        const n = t.Qt().dc();
        i && null === this.Jp && (this.Jp = new Ss(this, t.N(), n, "left"), this.fv.appendChild(this.Jp.Df())), s && null === this.Qp && (this.Qp = new Ss(this, t.N(), n, "right"), this.pv.appendChild(this.Qp.Df()));
    }
    Wv(t) {
        return t.ff && this.hv || null !== this.av;
    }
    Fv(t) {
        return Math.max(0, Math.min(t, this.wp.width - 1));
    }
    Hv(t) {
        return Math.max(0, Math.min(t, this.wp.height - 1));
    }
    bv(t, i, s) {
        this.ts().lc(this.Fv(t), this.Hv(i), s, u(this.uv));
    }
    Tv() {
        this.ts().uc();
    }
    Vv() {
        this.lv && (this.av = null, this.Tv());
    }
    Pv(t, i, s) {
        this.av = t, this.lv = !1, this.bv(i.x, i.y, s);
        const n = this.ts().Yu();
        this.ov = {
            x: n.si(),
            y: n.ni()
        };
    }
    ts() {
        return this.up.Qt();
    }
    kv(t) {
        if (!this.sv) return;
        const i = this.ts(), s = this.Ff();
        if (i.Vo(s, s.Ps()), this.iv = null, this.sv = !1, i.rc(), null !== this._v) {
            const t = performance.now(), s = i.Bt();
            this._v.le(s.iu(), t), this._v.uu(t) || i._n(this._v);
        }
    }
    Mv() {
        this.av = null;
    }
    xv() {
        if (!this.uv) return;
        if (this.ts().hn(), document.activeElement !== document.body && document.activeElement !== document.documentElement) u(document.activeElement).blur();
        else {
            const t = document.getSelection();
            null !== t && t.removeAllRanges();
        }
        !this.uv.Ps().Zi() && this.ts().Bt().Zi();
    }
    yv(t) {
        if (null === this.uv) return;
        const i = this.ts(), s = i.Bt();
        if (s.Zi()) return;
        const n = this.up.N(), e = n.handleScroll, r = n.kineticScroll;
        if ((!e.pressedMouseMove || t.ff) && (!e.horzTouchDrag && !e.vertTouchDrag || !t.ff)) return;
        const h = this.uv.Ps(), a = performance.now();
        if (null !== this.iv || this.Wv(t) || (this.iv = {
            x: t.clientX,
            y: t.clientY,
            Oc: a,
            Uv: t.localX,
            $v: t.localY
        }), null !== this.iv && !this.sv && (this.iv.x !== t.clientX || this.iv.y !== t.clientY)) {
            if (t.ff && r.touch || !t.ff && r.mouse) {
                const t = s.Q_();
                this._v = new fs(.2 / t, 7 / t, .997, 15 / t), this._v.rp(s.iu(), this.iv.Oc);
            } else this._v = null;
            h.Zi() || i.Ro(this.uv, h, t.localY), i.nc(t.localX), this.sv = !0;
        }
        this.sv && (h.Zi() || i.Do(this.uv, h, t.localY), i.ec(t.localX), null !== this._v && this._v.rp(s.iu(), a));
    }
}
class Rs {
    constructor(i, s, n, e, r){
        this.St = !0, this.wp = (0, _fancyCanvas.size)({
            width: 0,
            height: 0
        }), this.Cp = ()=>this.Hp(3), this.Pp = "left" === i, this.Bu = n.dc, this.ys = s, this.qv = e, this.Yv = r, this.Pf = document.createElement("div"), this.Pf.style.width = "25px", this.Pf.style.height = "100%", this.Pf.style.overflow = "hidden", this.Vp = vs(this.Pf, (0, _fancyCanvas.size)({
            width: 16,
            height: 16
        })), this.Vp.subscribeSuggestedBitmapSizeChanged(this.Cp);
    }
    m() {
        this.Vp.unsubscribeSuggestedBitmapSizeChanged(this.Cp), ms(this.Vp.canvasElement), this.Vp.dispose();
    }
    Df() {
        return this.Pf;
    }
    Vf() {
        return this.wp;
    }
    Wp(t) {
        (0, _fancyCanvas.equalSizes)(this.wp, t) || (this.wp = t, this.Vp.resizeCanvasElement(t), this.Pf.style.width = `${t.width}px`, this.Pf.style.height = `${t.height}px`, this.St = !0);
    }
    Hp(t) {
        if (t < 3 && !this.St) return;
        if (0 === this.wp.width || 0 === this.wp.height) return;
        this.St = !1, this.Vp.applySuggestedBitmapSize();
        const i = (0, _fancyCanvas.tryCreateCanvasRenderingTarget2D)(this.Vp, {
            colorSpace: this.ys.layout.colorSpace
        });
        null !== i && i.useBitmapCoordinateSpace((t)=>{
            this.$p(t), this.qp(t);
        });
    }
    If() {
        return this.Vp.bitmapSize;
    }
    Af(t, i, s) {
        const n = this.If();
        n.width > 0 && n.height > 0 && t.drawImage(this.Vp.canvasElement, i, s);
    }
    qp({ context: t, bitmapSize: i, horizontalPixelRatio: s, verticalPixelRatio: n }) {
        if (!this.qv()) return;
        t.fillStyle = this.ys.timeScale.borderColor;
        const e = Math.floor(this.Bu.N().S * s), r = Math.floor(this.Bu.N().S * n), h = this.Pp ? i.width - e : 0;
        t.fillRect(h, 0, e, r);
    }
    $p({ context: t, bitmapSize: i }) {
        L(t, 0, 0, i.width, i.height, this.Yv());
    }
}
function Ds(t) {
    return (i)=>i.ia?.(t) ?? [];
}
const Vs = Ds("normal"), Is = Ds("top"), As = Ds("bottom");
class Bs {
    constructor(i, s){
        this.jv = null, this.Zv = null, this.M = null, this.Kv = !1, this.wp = (0, _fancyCanvas.size)({
            width: 0,
            height: 0
        }), this.Xv = new d, this.Mp = new et(5), this.Sp = !1, this.Cp = ()=>{
            this.Sp || this.up.Qt().ar();
        }, this.kp = ()=>{
            this.Sp || this.up.Qt().ar();
        }, this.up = i, this.Yo = s, this.ys = i.N().layout, this.ap = document.createElement("tr"), this.Gv = document.createElement("td"), this.Gv.style.padding = "0", this.Jv = document.createElement("td"), this.Jv.style.padding = "0", this.Pf = document.createElement("td"), this.Pf.style.height = "25px", this.Pf.style.padding = "0", this.Qv = document.createElement("div"), this.Qv.style.width = "100%", this.Qv.style.height = "100%", this.Qv.style.position = "relative", this.Qv.style.overflow = "hidden", this.Pf.appendChild(this.Qv), this.Vp = vs(this.Qv, (0, _fancyCanvas.size)({
            width: 16,
            height: 16
        })), this.Vp.subscribeSuggestedBitmapSizeChanged(this.Cp);
        const n = this.Vp.canvasElement;
        n.style.position = "absolute", n.style.zIndex = "1", n.style.left = "0", n.style.top = "0", this.Ip = vs(this.Qv, (0, _fancyCanvas.size)({
            width: 16,
            height: 16
        })), this.Ip.subscribeSuggestedBitmapSizeChanged(this.kp);
        const e = this.Ip.canvasElement;
        e.style.position = "absolute", e.style.zIndex = "2", e.style.left = "0", e.style.top = "0", this.ap.appendChild(this.Gv), this.ap.appendChild(this.Pf), this.ap.appendChild(this.Jv), this.tm(), this.up.Qt().do().i(this.tm.bind(this), this), this.gf = new rs(this.Ip.canvasElement, this, {
            Fd: ()=>!0,
            Hd: ()=>!this.up.N().handleScroll.horzTouchDrag
        });
    }
    m() {
        this.gf.m(), null !== this.jv && this.jv.m(), null !== this.Zv && this.Zv.m(), this.Ip.unsubscribeSuggestedBitmapSizeChanged(this.kp), ms(this.Ip.canvasElement), this.Ip.dispose(), this.Vp.unsubscribeSuggestedBitmapSizeChanged(this.Cp), ms(this.Vp.canvasElement), this.Vp.dispose();
    }
    Df() {
        return this.ap;
    }
    im() {
        return this.jv;
    }
    sm() {
        return this.Zv;
    }
    if(t) {
        if (this.Kv) return;
        this.Kv = !0;
        const i = this.up.Qt();
        !i.Bt().Zi() && this.up.N().handleScale.axisPressedMouseMove.time && i.Qu(t.localX);
    }
    Qd(t) {
        this.if(t);
    }
    sf() {
        const t = this.up.Qt();
        !t.Bt().Zi() && this.Kv && (this.Kv = !1, this.up.N().handleScale.axisPressedMouseMove.time && t.ac());
    }
    qd(t) {
        const i = this.up.Qt();
        !i.Bt().Zi() && this.up.N().handleScale.axisPressedMouseMove.time && i.hc(t.localX);
    }
    Ud(t) {
        this.qd(t);
    }
    Kd() {
        this.Kv = !1;
        const t = this.up.Qt();
        t.Bt().Zi() && !this.up.N().handleScale.axisPressedMouseMove.time || t.ac();
    }
    jd() {
        this.Kd();
    }
    Rd() {
        this.up.N().handleScale.axisDoubleClickReset.time && this.up.Qt().cn();
    }
    yd() {
        this.Rd();
    }
    zd() {
        this.up.Qt().N().handleScale.axisPressedMouseMove.time && this.Xp(1);
    }
    cf() {
        this.Xp(0);
    }
    Vf() {
        return this.wp;
    }
    nm() {
        return this.Xv;
    }
    rm(i, n, e) {
        (0, _fancyCanvas.equalSizes)(this.wp, i) || (this.wp = i, this.Sp = !0, this.Vp.resizeCanvasElement(i), this.Ip.resizeCanvasElement(i), this.Sp = !1, this.Pf.style.width = `${i.width}px`, this.Pf.style.height = `${i.height}px`, this.Xv.p(i)), null !== this.jv && this.jv.Wp((0, _fancyCanvas.size)({
            width: n,
            height: i.height
        })), null !== this.Zv && this.Zv.Wp((0, _fancyCanvas.size)({
            width: e,
            height: i.height
        }));
    }
    hm() {
        const t = this.am();
        return Math.ceil(t.S + t.C + t.k + t.B + t.V + t.lm);
    }
    kt() {
        this.up.Qt().Bt().Va();
    }
    If() {
        return this.Vp.bitmapSize;
    }
    Af(t, i, s) {
        const n = this.If();
        n.width > 0 && n.height > 0 && t.drawImage(this.Vp.canvasElement, i, s);
    }
    Hp(t) {
        if (0 === t) return;
        const i = {
            colorSpace: this.ys.colorSpace
        };
        if (1 !== t) {
            this.Vp.applySuggestedBitmapSize();
            const s = (0, _fancyCanvas.tryCreateCanvasRenderingTarget2D)(this.Vp, i);
            null !== s && (s.useBitmapCoordinateSpace((t)=>{
                this.$p(t), this.qp(t), this.om(s, As);
            }), this.jp(s), this.om(s, Vs)), null !== this.jv && this.jv.Hp(t), null !== this.Zv && this.Zv.Hp(t);
        }
        this.Ip.applySuggestedBitmapSize();
        const s = (0, _fancyCanvas.tryCreateCanvasRenderingTarget2D)(this.Ip, i);
        null !== s && (s.useBitmapCoordinateSpace(({ context: t, bitmapSize: i })=>{
            t.clearRect(0, 0, i.width, i.height);
        }), this._m([
            ...this.up.Qt().js(),
            this.up.Qt().Yu()
        ], s), this.om(s, Is));
    }
    om(t, i) {
        const s = this.up.Qt().js();
        for (const n of s)Ms(i, (i)=>ws(i, t, !1, void 0), n, void 0);
        for (const n of s)Ms(i, (i)=>gs(i, t, !1, void 0), n, void 0);
    }
    $p({ context: t, bitmapSize: i }) {
        L(t, 0, 0, i.width, i.height, this.up.Qt().Sc());
    }
    qp({ context: t, bitmapSize: i, verticalPixelRatio: s }) {
        if (this.up.N().timeScale.borderVisible) {
            t.fillStyle = this.um();
            const n = Math.max(1, Math.floor(this.am().S * s));
            t.fillRect(0, 0, i.width, n);
        }
    }
    jp(t) {
        const i = this.up.Qt().Bt(), s = i.Va();
        if (!s || 0 === s.length) return;
        const n = this.Yo.maxTickMarkWeight(s), e = this.am(), r = i.N();
        r.borderVisible && r.ticksVisible && t.useBitmapCoordinateSpace(({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n })=>{
            t.strokeStyle = this.um(), t.fillStyle = this.um();
            const r = Math.max(1, Math.floor(i)), h = Math.floor(.5 * i);
            t.beginPath();
            const a = Math.round(e.C * n);
            for(let n = s.length; n--;){
                const e = Math.round(s[n].coord * i);
                t.rect(e - h, 0, r, a);
            }
            t.fill();
        }), t.useMediaCoordinateSpace(({ context: t })=>{
            const i = e.S + e.C + e.B + e.k / 2;
            t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.H(), t.font = this.Op();
            for (const e of s)if (e.weight < n) {
                const s = e.needAlignCoordinate ? this.dm(t, e.coord, e.label) : e.coord;
                t.fillText(e.label, s, i);
            }
            this.up.N().timeScale.allowBoldLabels && (t.font = this.fm());
            for (const e of s)if (e.weight >= n) {
                const s = e.needAlignCoordinate ? this.dm(t, e.coord, e.label) : e.coord;
                t.fillText(e.label, s, i);
            }
        });
    }
    dm(t, i, s) {
        const n = this.Mp.Vi(t, s), e = n / 2, r = Math.floor(i - e) + .5;
        return r < 0 ? i += Math.abs(0 - r) : r + n > this.wp.width && (i -= Math.abs(this.wp.width - (r + n))), i;
    }
    _m(t, i) {
        const s = this.am();
        for (const n of t)for (const t of n.cs())t.Tt().nt(i, s);
    }
    um() {
        return this.up.N().timeScale.borderColor;
    }
    H() {
        return this.ys.textColor;
    }
    W() {
        return this.ys.fontSize;
    }
    Op() {
        return S(this.W(), this.ys.fontFamily);
    }
    fm() {
        return S(this.W(), this.ys.fontFamily, "bold");
    }
    am() {
        null === this.M && (this.M = {
            S: 1,
            L: NaN,
            B: NaN,
            V: NaN,
            Ji: NaN,
            C: 5,
            k: NaN,
            P: "",
            Gi: new et,
            lm: 0
        });
        const t = this.M, i = this.Op();
        if (t.P !== i) {
            const s = this.W();
            t.k = s, t.P = i, t.B = 3 * s / 12, t.V = 3 * s / 12, t.Ji = 9 * s / 12, t.L = 0, t.lm = 4 * s / 12, t.Gi.In();
        }
        return this.M;
    }
    Xp(t) {
        this.Pf.style.cursor = 1 === t ? "ew-resize" : "default";
    }
    tm() {
        const t = this.up.Qt(), i = t.N();
        i.leftPriceScale.visible || null === this.jv || (this.Gv.removeChild(this.jv.Df()), this.jv.m(), this.jv = null), i.rightPriceScale.visible || null === this.Zv || (this.Jv.removeChild(this.Zv.Df()), this.Zv.m(), this.Zv = null);
        const s = {
            dc: this.up.Qt().dc()
        }, n = ()=>i.leftPriceScale.borderVisible && t.Bt().N().borderVisible, e = ()=>t.Sc();
        i.leftPriceScale.visible && null === this.jv && (this.jv = new Rs("left", i, s, n, e), this.Gv.appendChild(this.jv.Df())), i.rightPriceScale.visible && null === this.Zv && (this.Zv = new Rs("right", i, s, n, e), this.Jv.appendChild(this.Zv.Df()));
    }
}
const Es = !!ts && !!navigator.userAgentData && navigator.userAgentData.brands.some((t)=>t.brand.includes("Chromium")) && !!ts && (navigator?.userAgentData?.platform ? "Windows" === navigator.userAgentData.platform : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
class zs {
    constructor(t, i, s){
        var n;
        this.pm = [], this.vm = [], this.wm = 0, this.ja = 0, this.no = 0, this.gm = 0, this.Mm = 0, this.bm = null, this.xm = !1, this.nv = new d, this.ev = new d, this.Vu = new d, this.Sm = null, this.Cm = null, this._p = t, this.ys = i, this.Yo = s, this.ap = document.createElement("div"), this.ap.classList.add("tv-lightweight-charts"), this.ap.style.overflow = "hidden", this.ap.style.direction = "ltr", this.ap.style.width = "100%", this.ap.style.height = "100%", (n = this.ap).style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.msUserSelect = "none", n.style.MozUserSelect = "none", n.style.webkitTapHighlightColor = "transparent", this.ym = document.createElement("table"), this.ym.setAttribute("cellspacing", "0"), this.ap.appendChild(this.ym), this.km = this.Pm.bind(this), Ls(this.ys) && this.Tm(!0), this.ts = new Ei(this.Au.bind(this), this.ys, s), this.Qt().ju().i(this.Rm.bind(this), this), this.Dm = new Bs(this, this.Yo), this.ym.appendChild(this.Dm.Df());
        const e = i.autoSize && this.Vm();
        let r = this.ys.width, h = this.ys.height;
        if (e || 0 === r || 0 === h) {
            const i = t.getBoundingClientRect();
            r = r || i.width, h = h || i.height;
        }
        this.Im(r, h), this.Am(), t.appendChild(this.ap), this.Bm(), this.ts.Bt().pu().i(this.ts.Ah.bind(this.ts), this), this.ts.do().i(this.ts.Ah.bind(this.ts), this);
    }
    Qt() {
        return this.ts;
    }
    N() {
        return this.ys;
    }
    Cf() {
        return this.pm;
    }
    Em() {
        return this.Dm;
    }
    m() {
        this.Tm(!1), 0 !== this.wm && window.cancelAnimationFrame(this.wm), this.ts.ju().u(this), this.ts.Bt().pu().u(this), this.ts.do().u(this), this.ts.m();
        for (const t of this.pm)this.ym.removeChild(t.Df()), t.Rv().u(this), t.Dv().u(this), t.m();
        this.pm = [];
        for (const t of this.vm)this.zm(t);
        this.vm = [], u(this.Dm).m(), null !== this.ap.parentElement && this.ap.parentElement.removeChild(this.ap), this.Vu.m(), this.nv.m(), this.ev.m(), this.Lm();
    }
    Im(i, s, n = !1) {
        if (this.ja === s && this.no === i) return;
        const e = function(i) {
            const s = Math.floor(i.width), n = Math.floor(i.height);
            return (0, _fancyCanvas.size)({
                width: s - s % 2,
                height: n - n % 2
            });
        }((0, _fancyCanvas.size)({
            width: i,
            height: s
        }));
        this.ja = e.height, this.no = e.width;
        const r = this.ja + "px", h = this.no + "px";
        u(this.ap).style.height = r, u(this.ap).style.width = h, this.ym.style.height = r, this.ym.style.width = h, n ? this.Om(G.gn(), performance.now()) : this.ts.Ah();
    }
    Hp(t) {
        void 0 === t && (t = G.gn());
        for(let i = 0; i < this.pm.length; i++)this.pm[i].Hp(t.en(i).tn);
        this.ys.timeScale.visible && this.Dm.Hp(t.nn());
    }
    hr(t) {
        const i = Ls(this.ys);
        this.ts.hr(t);
        const s = Ls(this.ys);
        s !== i && this.Tm(s), t.layout?.panes && this.Nm(), this.Bm(), this.Wm(t);
    }
    Rv() {
        return this.nv;
    }
    Dv() {
        return this.ev;
    }
    ju() {
        return this.Vu;
    }
    Fm() {
        null !== this.bm && (this.Om(this.bm, performance.now()), this.bm = null);
        const t = this.Hm(null), i = document.createElement("canvas");
        i.width = t.width, i.height = t.height;
        const s = u(i.getContext("2d"));
        return this.Hm(s), i;
    }
    Um(t) {
        if ("left" === t && !this.$m()) return 0;
        if ("right" === t && !this.qm()) return 0;
        if (0 === this.pm.length) return 0;
        return u("left" === t ? this.pm[0].Lv() : this.pm[0].Ov()).Fp();
    }
    Ym() {
        return this.ys.autoSize && null !== this.Sm;
    }
    Ef() {
        return this.ap;
    }
    jm(t) {
        this.Cm = t, this.Cm ? this.Ef().style.setProperty("cursor", t) : this.Ef().style.removeProperty("cursor");
    }
    Zm() {
        return this.Cm;
    }
    Km(t) {
        return _(this.pm[t]).Vf();
    }
    Nm() {
        this.vm.forEach((t)=>{
            t.kt();
        });
    }
    Wm(t) {
        (void 0 !== t.autoSize || !this.Sm || void 0 === t.width && void 0 === t.height) && (t.autoSize && !this.Sm && this.Vm(), !1 === t.autoSize && null !== this.Sm && this.Lm(), t.autoSize || void 0 === t.width && void 0 === t.height || this.Im(t.width || this.no, t.height || this.ja));
    }
    Hm(i) {
        let s = 0, n = 0;
        const e = this.pm[0], r = (t, s)=>{
            let n = 0;
            for(let e = 0; e < this.pm.length; e++){
                const r = this.pm[e], h = u("left" === t ? r.Lv() : r.Ov()), a = h.If();
                if (null !== i && h.Af(i, s, n), n += a.height, e < this.pm.length - 1) {
                    const t = this.vm[e], r = t.If();
                    null !== i && t.Af(i, s, n), n += r.height;
                }
            }
        };
        if (this.$m()) {
            r("left", 0);
            s += u(e.Lv()).If().width;
        }
        for(let t = 0; t < this.pm.length; t++){
            const e = this.pm[t], r = e.If();
            if (null !== i && e.Af(i, s, n), n += r.height, t < this.pm.length - 1) {
                const e = this.vm[t], r = e.If();
                null !== i && e.Af(i, s, n), n += r.height;
            }
        }
        if (s += e.If().width, this.qm()) {
            r("right", s);
            s += u(e.Ov()).If().width;
        }
        const h = (t, s, n)=>{
            u("left" === t ? this.Dm.im() : this.Dm.sm()).Af(u(i), s, n);
        };
        if (this.ys.timeScale.visible) {
            const t = this.Dm.If();
            if (null !== i) {
                let s = 0;
                this.$m() && (h("left", s, n), s = u(e.Lv()).If().width), this.Dm.Af(i, s, n), s += t.width, this.qm() && h("right", s, n);
            }
            n += t.height;
        }
        return (0, _fancyCanvas.size)({
            width: s,
            height: n
        });
    }
    Xm() {
        let i = 0, s = 0, n = 0;
        for (const t of this.pm)this.$m() && (s = Math.max(s, u(t.Lv()).Lp(), this.ys.leftPriceScale.minimumWidth)), this.qm() && (n = Math.max(n, u(t.Ov()).Lp(), this.ys.rightPriceScale.minimumWidth)), i += t.fo();
        s = ns(s), n = ns(n);
        const e = this.no, r = this.ja, h = Math.max(e - s - n, 0), a = 1 * this.vm.length, l = this.ys.timeScale.visible;
        let o = l ? Math.max(this.Dm.hm(), this.ys.timeScale.minimumHeight) : 0;
        var _;
        o = (_ = o) + _ % 2;
        const c = a + o, d = r < c ? 0 : r - c, f = d / i;
        let p = 0;
        const v = window.devicePixelRatio || 1;
        for(let i = 0; i < this.pm.length; ++i){
            const e = this.pm[i];
            e.mv(this.ts.$s()[i]);
            let r = 0, a = 0;
            a = i === this.pm.length - 1 ? Math.ceil((d - p) * v) / v : Math.round(e.fo() * f * v) / v, r = Math.max(a, 2), p += r, e.Wp((0, _fancyCanvas.size)({
                width: h,
                height: r
            })), this.$m() && e.Iv(s, "left"), this.qm() && e.Iv(n, "right"), e.Ff() && this.ts.Zu(e.Ff(), r);
        }
        this.Dm.rm((0, _fancyCanvas.size)({
            width: l ? h : 0,
            height: o
        }), l ? s : 0, l ? n : 0), this.ts.vo(h), this.gm !== s && (this.gm = s), this.Mm !== n && (this.Mm = n);
    }
    Tm(t) {
        t ? this.ap.addEventListener("wheel", this.km, {
            passive: !1
        }) : this.ap.removeEventListener("wheel", this.km);
    }
    Gm(t) {
        switch(t.deltaMode){
            case t.DOM_DELTA_PAGE:
                return 120;
            case t.DOM_DELTA_LINE:
                return 32;
        }
        return Es ? 1 / window.devicePixelRatio : 1;
    }
    Pm(t) {
        if (!(0 !== t.deltaX && this.ys.handleScroll.mouseWheel || 0 !== t.deltaY && this.ys.handleScale.mouseWheel)) return;
        const i = this.Gm(t), s = i * t.deltaX / 100, n = -i * t.deltaY / 100;
        if (t.cancelable && t.preventDefault(), 0 !== n && this.ys.handleScale.mouseWheel) {
            const i = Math.sign(n) * Math.min(1, Math.abs(n)), s = t.clientX - this.ap.getBoundingClientRect().left;
            this.Qt().tc(s, i);
        }
        0 !== s && this.ys.handleScroll.mouseWheel && this.Qt().sc(-80 * s);
    }
    Om(t, i) {
        const s = t.nn();
        3 === s && this.Jm(), 3 !== s && 2 !== s || (this.Qm(t), this.tw(t, i), this.Dm.kt(), this.pm.forEach((t)=>{
            t.gv();
        }), 3 === this.bm?.nn() && (this.bm.vn(t), this.Jm(), this.Qm(this.bm), this.tw(this.bm, i), t = this.bm, this.bm = null)), this.Hp(t);
    }
    tw(t, i) {
        for (const s of t.pn())this.mn(s, i);
    }
    Qm(t) {
        const i = this.ts.$s();
        for(let s = 0; s < i.length; s++)t.en(s).sn && i[s].Bo();
    }
    mn(t, i) {
        const s = this.ts.Bt();
        switch(t.an){
            case 0:
                s.mu();
                break;
            case 1:
                s.wu(t.Ft);
                break;
            case 2:
                s.dn(t.Ft);
                break;
            case 3:
                s.fn(t.Ft);
                break;
            case 4:
                s.eu();
                break;
            case 5:
                t.Ft.uu(i) || s.fn(t.Ft.cu(i));
        }
    }
    Au(t) {
        null !== this.bm ? this.bm.vn(t) : this.bm = t, this.xm || (this.xm = !0, this.wm = window.requestAnimationFrame((t)=>{
            if (this.xm = !1, this.wm = 0, null !== this.bm) {
                const i = this.bm;
                this.bm = null, this.Om(i, t);
                for (const s of i.pn())if (5 === s.an && !s.Ft.uu(t)) {
                    this.Qt()._n(s.Ft);
                    break;
                }
            }
        }));
    }
    Jm() {
        this.Am();
    }
    zm(t) {
        this.ym.removeChild(t.Df()), t.m();
    }
    Am() {
        const t = this.ts.$s(), i = t.length, s = this.pm.length;
        for(let t = i; t < s; t++){
            const t = _(this.pm.pop());
            this.ym.removeChild(t.Df()), t.Rv().u(this), t.Dv().u(this), t.m();
            const i = this.vm.pop();
            void 0 !== i && this.zm(i);
        }
        for(let n = s; n < i; n++){
            const i = new Ts(this, t[n]);
            if (i.Rv().i(this.iw.bind(this, i), this), i.Dv().i(this.sw.bind(this, i), this), this.pm.push(i), n > 0) {
                const t = new us(this, n - 1, n);
                this.vm.push(t), this.ym.insertBefore(t.Df(), this.Dm.Df());
            }
            this.ym.insertBefore(i.Df(), this.Dm.Df());
        }
        for(let s = 0; s < i; s++){
            const i = t[s], n = this.pm[s];
            n.Ff() !== i ? n.mv(i) : n.vv();
        }
        this.Bm(), this.Xm();
    }
    nw(t, i, s, n) {
        const e = new Map;
        if (null !== t) this.ts.js().forEach((i)=>{
            const s = i.Ks().Wr(t);
            null !== s && e.set(i, s);
        });
        let r;
        if (null !== t) {
            const i = this.ts.Bt().ss(t)?.originalTime;
            void 0 !== i && (r = i);
        }
        const h = this.Qt().Hu(), a = null !== h && h.Wo instanceof Yt ? h.Wo : void 0, l = null !== h && void 0 !== h.Fo ? h.Fo.Zn : void 0, o = this.ew(n);
        return {
            rw: r,
            Re: t ?? void 0,
            hw: i ?? void 0,
            aw: -1 !== o ? o : void 0,
            lw: a,
            ow: e,
            _w: l,
            uw: s ?? void 0
        };
    }
    ew(t) {
        let i = -1;
        if (t) i = this.pm.indexOf(t);
        else {
            const t = this.Qt().Yu().Us();
            null !== t && (i = this.Qt().$s().indexOf(t));
        }
        return i;
    }
    iw(t, i, s, n) {
        this.nv.p(()=>this.nw(i, s, n, t));
    }
    sw(t, i, s, n) {
        this.ev.p(()=>this.nw(i, s, n, t));
    }
    Rm(t, i, s) {
        this.Vu.p(()=>this.nw(t, i, s));
    }
    Bm() {
        const t = this.ys.timeScale.visible ? "" : "none";
        this.Dm.Df().style.display = t;
    }
    $m() {
        return this.pm[0].Ff().Co().N().visible;
    }
    qm() {
        return this.pm[0].Ff().yo().N().visible;
    }
    Vm() {
        return "ResizeObserver" in window && (this.Sm = new ResizeObserver((t)=>{
            const i = t[t.length - 1];
            i && this.Im(i.contentRect.width, i.contentRect.height);
        }), this.Sm.observe(this._p, {
            box: "border-box"
        }), !0);
    }
    Lm() {
        null !== this.Sm && this.Sm.disconnect(), this.Sm = null;
    }
}
function Ls(t) {
    return Boolean(t.handleScroll.mouseWheel || t.handleScale.mouseWheel);
}
function Os(t) {
    return void 0 === t.open && void 0 === t.value;
}
function Ns(t) {
    return function(t) {
        return void 0 !== t.open;
    }(t) || function(t) {
        return void 0 !== t.value;
    }(t);
}
function Ws(t, i, s, n) {
    const e = s.value, r = {
        Re: i,
        wt: t,
        Ft: [
            e,
            e,
            e,
            e
        ],
        rw: n
    };
    return void 0 !== s.color && (r.R = s.color), r;
}
function Fs(t, i, s, n) {
    const e = s.value, r = {
        Re: i,
        wt: t,
        Ft: [
            e,
            e,
            e,
            e
        ],
        rw: n
    };
    return void 0 !== s.lineColor && (r.vt = s.lineColor), void 0 !== s.topColor && (r.mr = s.topColor), void 0 !== s.bottomColor && (r.wr = s.bottomColor), r;
}
function Hs(t, i, s, n) {
    const e = s.value, r = {
        Re: i,
        wt: t,
        Ft: [
            e,
            e,
            e,
            e
        ],
        rw: n
    };
    return void 0 !== s.topLineColor && (r.gr = s.topLineColor), void 0 !== s.bottomLineColor && (r.Mr = s.bottomLineColor), void 0 !== s.topFillColor1 && (r.br = s.topFillColor1), void 0 !== s.topFillColor2 && (r.Sr = s.topFillColor2), void 0 !== s.bottomFillColor1 && (r.Cr = s.bottomFillColor1), void 0 !== s.bottomFillColor2 && (r.yr = s.bottomFillColor2), r;
}
function Us(t, i, s, n) {
    const e = {
        Re: i,
        wt: t,
        Ft: [
            s.open,
            s.high,
            s.low,
            s.close
        ],
        rw: n
    };
    return void 0 !== s.color && (e.R = s.color), e;
}
function $s(t, i, s, n) {
    const e = {
        Re: i,
        wt: t,
        Ft: [
            s.open,
            s.high,
            s.low,
            s.close
        ],
        rw: n
    };
    return void 0 !== s.color && (e.R = s.color), void 0 !== s.borderColor && (e.Ht = s.borderColor), void 0 !== s.wickColor && (e.vr = s.wickColor), e;
}
function qs(t, i, s, n, e) {
    const r = _(e)(s), h = Math.max(...r), a = Math.min(...r), l = r[r.length - 1], o = [
        l,
        h,
        a,
        l
    ], { time: u, color: c, ...d } = s;
    return {
        Re: i,
        wt: t,
        Ft: o,
        rw: n,
        se: d,
        R: c
    };
}
function Ys(t) {
    return void 0 !== t.Ft;
}
function js(t, i) {
    return void 0 !== i.customValues && (t.cw = i.customValues), t;
}
function Zs(t) {
    return (i, s, n, e, r, h)=>(function(t, i) {
            return i ? i(t) : Os(t);
        })(n, h) ? js({
            wt: i,
            Re: s,
            rw: e
        }, n) : js(t(i, s, n, e, r), n);
}
function Ks(t) {
    return ({
        Candlestick: Zs($s),
        Bar: Zs(Us),
        Area: Zs(Fs),
        Baseline: Zs(Hs),
        Histogram: Zs(Ws),
        Line: Zs(Ws),
        Custom: Zs(qs)
    })[t];
}
function Xs(t) {
    return {
        Re: 0,
        dw: new Map,
        Hh: t
    };
}
function Gs(t, i) {
    if (void 0 !== t && 0 !== t.length) return {
        fw: i.key(t[0].wt),
        pw: i.key(t[t.length - 1].wt)
    };
}
function Js(t) {
    let i;
    return t.forEach((t)=>{
        void 0 === i && (i = t.rw);
    }), _(i);
}
class Qs {
    constructor(t){
        this.mw = new Map, this.ww = new Map, this.gw = new Map, this.Mw = [], this.Yo = t;
    }
    m() {
        this.mw.clear(), this.ww.clear(), this.gw.clear(), this.Mw = [];
    }
    bw(t, i) {
        let s = 0 !== this.mw.size, n = !1;
        const e = this.ww.get(t);
        if (void 0 !== e) {
            if (1 === this.ww.size) s = !1, n = !0, this.mw.clear();
            else for (const i of this.Mw)i.pointData.dw.delete(t) && (n = !0);
        }
        let r = [];
        if (0 !== i.length) {
            const s = i.map((t)=>t.time), e = this.Yo.createConverterToInternalObj(i), h = Ks(t.Rr()), a = t.da(), l = t.pa();
            r = i.map((i, r)=>{
                const o = e(i.time), _ = this.Yo.key(o);
                let u = this.mw.get(_);
                void 0 === u && (u = Xs(o), this.mw.set(_, u), n = !0);
                const c = h(o, u.Re, i, s[r], a, l);
                return u.dw.set(t, c), c;
            });
        }
        s && this.xw(), this.Sw(t, r);
        let h = -1;
        if (n) {
            const t = [];
            this.mw.forEach((i)=>{
                t.push({
                    timeWeight: 0,
                    time: i.Hh,
                    pointData: i,
                    originalTime: Js(i.dw)
                });
            }), t.sort((t, i)=>this.Yo.key(t.time) - this.Yo.key(i.time)), h = this.Cw(t);
        }
        return this.yw(t, h, function(t, i, s) {
            const n = Gs(t, s), e = Gs(i, s);
            if (void 0 !== n && void 0 !== e) return {
                kw: !1,
                zh: n.pw >= e.pw && n.fw >= e.fw
            };
        }(this.ww.get(t), e, this.Yo));
    }
    mc(t) {
        return this.bw(t, []);
    }
    Pw(t, i, s) {
        const n = i;
        !function(t) {
            void 0 === t.rw && (t.rw = t.time);
        }(n), this.Yo.preprocessData(i);
        const e = this.Yo.createConverterToInternalObj([
            i
        ])(i.time), r = this.gw.get(t);
        if (!s && void 0 !== r && this.Yo.key(e) < this.Yo.key(r)) throw new Error(`Cannot update oldest data, last time=${r}, new time=${e}`);
        let h = this.mw.get(this.Yo.key(e));
        if (s && void 0 === h) throw new Error("Cannot update non-existing data point when historicalUpdate is true");
        const a = void 0 === h;
        void 0 === h && (h = Xs(e), this.mw.set(this.Yo.key(e), h));
        const l = Ks(t.Rr()), o = t.da(), _ = t.pa(), u = l(e, h.Re, i, n.rw, o, _);
        h.dw.set(t, u), s ? this.Tw(t, u, h.Re) : this.Rw(t, u);
        const c = {
            zh: Ys(u),
            kw: s
        };
        if (!a) return this.yw(t, -1, c);
        const d = {
            timeWeight: 0,
            time: h.Hh,
            pointData: h,
            originalTime: Js(h.dw)
        }, f = yt(this.Mw, this.Yo.key(d.time), (t, i)=>this.Yo.key(t.time) < i);
        this.Mw.splice(f, 0, d);
        for(let t = f; t < this.Mw.length; ++t)tn(this.Mw[t].pointData, t);
        return this.Yo.fillWeightsForPoints(this.Mw, f), this.yw(t, f, c);
    }
    Rw(t, i) {
        let s = this.ww.get(t);
        void 0 === s && (s = [], this.ww.set(t, s));
        const n = 0 !== s.length ? s[s.length - 1] : null;
        null === n || this.Yo.key(i.wt) > this.Yo.key(n.wt) ? Ys(i) && s.push(i) : Ys(i) ? s[s.length - 1] = i : s.splice(-1, 1), this.gw.set(t, i.wt);
    }
    Tw(t, i, s) {
        const n = this.ww.get(t);
        if (void 0 === n) return;
        const e = yt(n, s, (t, i)=>t.Re < i);
        Ys(i) ? n[e] = i : n.splice(e, 1);
    }
    Sw(t, i) {
        0 !== i.length ? (this.ww.set(t, i.filter(Ys)), this.gw.set(t, i[i.length - 1].wt)) : (this.ww.delete(t), this.gw.delete(t));
    }
    xw() {
        for (const t of this.Mw)0 === t.pointData.dw.size && this.mw.delete(this.Yo.key(t.time));
    }
    Cw(t) {
        let i = -1;
        for(let s = 0; s < this.Mw.length && s < t.length; ++s){
            const n = this.Mw[s], e = t[s];
            if (this.Yo.key(n.time) !== this.Yo.key(e.time)) {
                i = s;
                break;
            }
            e.timeWeight = n.timeWeight, tn(e.pointData, s);
        }
        if (-1 === i && this.Mw.length !== t.length && (i = Math.min(this.Mw.length, t.length)), -1 === i) return -1;
        for(let s = i; s < t.length; ++s)tn(t[s].pointData, s);
        return this.Yo.fillWeightsForPoints(t, i), this.Mw = t, i;
    }
    Dw() {
        if (0 === this.ww.size) return null;
        let t = 0;
        return this.ww.forEach((i)=>{
            0 !== i.length && (t = Math.max(t, i[i.length - 1].Re));
        }), t;
    }
    yw(t, i, s) {
        const n = {
            wo: new Map,
            Bt: {
                Y_: this.Dw()
            }
        };
        if (-1 !== i) this.ww.forEach((i, e)=>{
            n.wo.set(e, {
                se: i,
                Vw: e === t ? s : void 0
            });
        }), this.ww.has(t) || n.wo.set(t, {
            se: [],
            Vw: s
        }), n.Bt.Iw = this.Mw, n.Bt.Aw = i;
        else {
            const i = this.ww.get(t);
            n.wo.set(t, {
                se: i || [],
                Vw: s
            });
        }
        return n;
    }
}
function tn(t, i) {
    t.Re = i, t.dw.forEach((t)=>{
        t.Re = i;
    });
}
function sn(t, i) {
    return t.wt < i;
}
function nn(t, i) {
    return i < t.wt;
}
function en(t, i, s) {
    const n = i.Uh(), e = i.bi(), r = yt(t, n, sn), h = kt(t, e, nn);
    if (!s) return {
        from: r,
        to: h
    };
    let a = r, l = h;
    return r > 0 && r < t.length && t[r].wt >= n && (a = r - 1), h > 0 && h < t.length && t[h - 1].wt <= e && (l = h + 1), {
        from: a,
        to: l
    };
}
class rn {
    constructor(t, i, s){
        this.Bw = !0, this.Ew = !0, this.zw = !0, this.Lw = [], this.Ow = null, this.Jn = t, this.Qn = i, this.Nw = s;
    }
    kt(t) {
        this.Bw = !0, "data" === t && (this.Ew = !0), "options" === t && (this.zw = !0);
    }
    Tt() {
        return this.Jn.Vt() ? (this.Ww(), null === this.Ow ? null : this.Fw) : null;
    }
    Hw() {
        this.Lw = this.Lw.map((t)=>({
                ...t,
                ...this.Jn.Rh().Dr(t.wt)
            }));
    }
    Uw() {
        this.Ow = null;
    }
    Ww() {
        this.Ew && (this.$w(), this.Ew = !1), this.zw && (this.Hw(), this.zw = !1), this.Bw && (this.qw(), this.Bw = !1);
    }
    qw() {
        const t = this.Jn.Wt(), i = this.Qn.Bt();
        if (this.Uw(), i.Zi() || t.Zi()) return;
        const s = i.ye();
        if (null === s) return;
        if (0 === this.Jn.Ks().zr()) return;
        const n = this.Jn.zt();
        null !== n && (this.Ow = en(this.Lw, s, this.Nw), this.Yw(t, i, n.Ft), this.jw());
    }
}
class hn {
    constructor(t, i){
        this.Zw = t, this.Yi = i;
    }
    nt(t, i, s) {
        this.Zw.draw(t, this.Yi, i, s);
    }
}
class an extends rn {
    constructor(t, i, s){
        super(t, i, !1), this.sh = s, this.Fw = new hn(this.sh.renderer(), (i)=>{
            const s = t.zt();
            return null === s ? null : t.Wt().Nt(i, s.Ft);
        });
    }
    fa(t) {
        return this.sh.priceValueBuilder(t);
    }
    va(t) {
        return this.sh.isWhitespace(t);
    }
    $w() {
        const t = this.Jn.Rh();
        this.Lw = this.Jn.Ks().Hr().map((i)=>({
                wt: i.Re,
                _t: NaN,
                ...t.Dr(i.Re),
                Kw: i.se
            }));
    }
    Yw(t, i) {
        i.j_(this.Lw, b(this.Ow));
    }
    jw() {
        this.sh.update({
            bars: this.Lw.map(ln),
            barSpacing: this.Qn.Bt().Q_(),
            visibleRange: this.Ow
        }, this.Jn.N());
    }
}
function ln(t) {
    return {
        x: t._t,
        time: t.wt,
        originalData: t.Kw,
        barColor: t.cr
    };
}
const on = {
    color: "#2196f3"
}, _n = (t, i, s)=>{
    const n = c(s);
    return new an(t, i, n);
};
function un(t) {
    const i = {
        value: t.Ft[3],
        time: t.rw
    };
    return void 0 !== t.cw && (i.customValues = t.cw), i;
}
function cn(t) {
    const i = un(t);
    return void 0 !== t.R && (i.color = t.R), i;
}
function dn(t) {
    const i = un(t);
    return void 0 !== t.vt && (i.lineColor = t.vt), void 0 !== t.mr && (i.topColor = t.mr), void 0 !== t.wr && (i.bottomColor = t.wr), i;
}
function fn(t) {
    const i = un(t);
    return void 0 !== t.gr && (i.topLineColor = t.gr), void 0 !== t.Mr && (i.bottomLineColor = t.Mr), void 0 !== t.br && (i.topFillColor1 = t.br), void 0 !== t.Sr && (i.topFillColor2 = t.Sr), void 0 !== t.Cr && (i.bottomFillColor1 = t.Cr), void 0 !== t.yr && (i.bottomFillColor2 = t.yr), i;
}
function pn(t) {
    const i = {
        open: t.Ft[0],
        high: t.Ft[1],
        low: t.Ft[2],
        close: t.Ft[3],
        time: t.rw
    };
    return void 0 !== t.cw && (i.customValues = t.cw), i;
}
function vn(t) {
    const i = pn(t);
    return void 0 !== t.R && (i.color = t.R), i;
}
function mn(t) {
    const i = pn(t), { R: s, Ht: n, vr: e } = t;
    return void 0 !== s && (i.color = s), void 0 !== n && (i.borderColor = n), void 0 !== e && (i.wickColor = e), i;
}
function wn(t) {
    return ({
        Area: dn,
        Line: cn,
        Baseline: fn,
        Histogram: cn,
        Bar: vn,
        Candlestick: mn,
        Custom: gn
    })[t];
}
function gn(t) {
    const i = t.rw;
    return {
        ...t.se,
        time: i
    };
}
const Mn = {
    vertLine: {
        color: "#9598A1",
        width: 1,
        style: 3,
        visible: !0,
        labelVisible: !0,
        labelBackgroundColor: "#131722"
    },
    horzLine: {
        color: "#9598A1",
        width: 1,
        style: 3,
        visible: !0,
        labelVisible: !0,
        labelBackgroundColor: "#131722"
    },
    mode: 1
}, bn = {
    vertLines: {
        color: "#D6DCDE",
        style: 0,
        visible: !0
    },
    horzLines: {
        color: "#D6DCDE",
        style: 0,
        visible: !0
    }
}, xn = {
    background: {
        type: "solid",
        color: "#FFFFFF"
    },
    textColor: "#191919",
    fontSize: 12,
    fontFamily: x,
    panes: {
        enableResize: !0,
        separatorColor: "#E0E3EB",
        separatorHoverColor: "rgba(178, 181, 189, 0.2)"
    },
    attributionLogo: !0,
    colorSpace: "srgb",
    colorParsers: []
}, Sn = {
    autoScale: !0,
    mode: 0,
    invertScale: !1,
    alignLabels: !0,
    borderVisible: !0,
    borderColor: "#2B2B43",
    entireTextOnly: !1,
    visible: !1,
    ticksVisible: !1,
    scaleMargins: {
        bottom: .1,
        top: .2
    },
    minimumWidth: 0
}, Cn = {
    rightOffset: 0,
    barSpacing: 6,
    minBarSpacing: .5,
    maxBarSpacing: 0,
    fixLeftEdge: !1,
    fixRightEdge: !1,
    lockVisibleTimeRangeOnResize: !1,
    rightBarStaysOnScroll: !1,
    borderVisible: !0,
    borderColor: "#2B2B43",
    visible: !0,
    timeVisible: !1,
    secondsVisible: !0,
    shiftVisibleRangeOnNewBar: !0,
    allowShiftVisibleRangeOnWhitespaceReplacement: !1,
    ticksVisible: !1,
    uniformDistribution: !1,
    minimumHeight: 0,
    allowBoldLabels: !0,
    ignoreWhitespaceIndices: !1
};
function yn() {
    return {
        width: 0,
        height: 0,
        autoSize: !1,
        layout: xn,
        crosshair: Mn,
        grid: bn,
        overlayPriceScales: {
            ...Sn
        },
        leftPriceScale: {
            ...Sn,
            visible: !1
        },
        rightPriceScale: {
            ...Sn,
            visible: !0
        },
        timeScale: Cn,
        localization: {
            locale: ts ? navigator.language : "",
            dateFormat: "dd MMM 'yy"
        },
        handleScroll: {
            mouseWheel: !0,
            pressedMouseMove: !0,
            horzTouchDrag: !0,
            vertTouchDrag: !0
        },
        handleScale: {
            axisPressedMouseMove: {
                time: !0,
                price: !0
            },
            axisDoubleClickReset: {
                time: !0,
                price: !0
            },
            mouseWheel: !0,
            pinch: !0
        },
        kineticScroll: {
            mouse: !1,
            touch: !0
        },
        trackingMode: {
            exitMode: 1
        }
    };
}
class kn {
    constructor(t, i, s, n){
        this.xf = t, this.yt = s, this.Xw = i, this.Gw = n;
    }
    getHeight() {
        return this.yt.$t();
    }
    setHeight(t) {
        const i = this.xf.Qt(), s = i.yc(this.yt);
        i.Xu(s, t);
    }
    paneIndex() {
        return this.xf.Qt().yc(this.yt);
    }
    moveTo(t) {
        const i = this.paneIndex();
        i !== t && (o(t >= 0 && t < this.xf.Cf().length, "Invalid pane index"), this.xf.Qt().Gu(i, t));
    }
    getSeries() {
        return this.yt.wo().map((t)=>this.Xw(t)) ?? [];
    }
    getHTMLElement() {
        return this.xf.Cf()[this.paneIndex()].Df();
    }
    attachPrimitive(t) {
        this.yt.ua(t), t.attached && t.attached({
            chart: this.Gw,
            requestUpdate: ()=>this.yt.Qt().Ah()
        });
    }
    detachPrimitive(t) {
        this.yt.ca(t);
    }
}
class Pn {
    constructor(t, i){
        this.xf = t, this.Jw = i;
    }
    applyOptions(t) {
        this.xf.Qt().$u(this.Jw, t);
    }
    options() {
        return this.Yi().N();
    }
    width() {
        return X(this.Jw) ? this.xf.Um(this.Jw) : 0;
    }
    Yi() {
        return u(this.xf.Qt().qu(this.Jw)).Wt;
    }
}
const Tn = {
    color: "#FF0000",
    price: 0,
    lineStyle: 2,
    lineWidth: 1,
    lineVisible: !0,
    axisLabelVisible: !0,
    title: "",
    axisLabelColor: "",
    axisLabelTextColor: ""
};
class Rn {
    constructor(t){
        this.ir = t;
    }
    applyOptions(t) {
        this.ir.hr(t);
    }
    options() {
        return this.ir.N();
    }
    Qw() {
        return this.ir;
    }
}
class Dn {
    constructor(t, i, s, n, e, r){
        this.tg = new d, this.Jn = t, this.ig = i, this.sg = s, this.Yo = e, this.Gw = n, this.ng = r;
    }
    m() {
        this.tg.m();
    }
    priceFormatter() {
        return this.Jn.ra();
    }
    priceToCoordinate(t) {
        const i = this.Jn.zt();
        return null === i ? null : this.Jn.Wt().Nt(t, i.Ft);
    }
    coordinateToPrice(t) {
        const i = this.Jn.zt();
        return null === i ? null : this.Jn.Wt().Ts(t, i.Ft);
    }
    barsInLogicalRange(t) {
        if (null === t) return null;
        const i = new Pi(new Ci(t.from, t.to)).o_(), s = this.Jn.Ks();
        if (s.Zi()) return null;
        const n = s.Wr(i.Uh(), 1), e = s.Wr(i.bi(), -1), r = u(s.Lr()), h = u(s.Zs());
        if (null !== n && null !== e && n.Re > e.Re) return {
            barsBefore: t.from - r,
            barsAfter: h - t.to
        };
        const a = {
            barsBefore: null === n || n.Re === r ? t.from - r : n.Re - r,
            barsAfter: null === e || e.Re === h ? h - t.to : h - e.Re
        };
        return null !== n && null !== e && (a.from = n.rw, a.to = e.rw), a;
    }
    setData(t) {
        this.Yo, this.Jn.Rr(), this.ig.eg(this.Jn, t), this.rg("full");
    }
    update(t, i = !1) {
        this.Jn.Rr(), this.ig.hg(this.Jn, t, i), this.rg("update");
    }
    dataByIndex(t, i) {
        const s = this.Jn.Ks().Wr(t, i);
        if (null === s) return null;
        return wn(this.seriesType())(s);
    }
    data() {
        const t = wn(this.seriesType());
        return this.Jn.Ks().Hr().map((i)=>t(i));
    }
    subscribeDataChanged(t) {
        this.tg.i(t);
    }
    unsubscribeDataChanged(t) {
        this.tg._(t);
    }
    applyOptions(t) {
        this.Jn.hr(t);
    }
    options() {
        return g(this.Jn.N());
    }
    priceScale() {
        return this.sg.priceScale(this.Jn.Wt().wa());
    }
    createPriceLine(t) {
        const i = f(g(Tn), t), s = this.Jn.Oh(i);
        return new Rn(s);
    }
    removePriceLine(t) {
        this.Jn.Nh(t.Qw());
    }
    priceLines() {
        return this.Jn.Wh().map((t)=>new Rn(t));
    }
    seriesType() {
        return this.Jn.Rr();
    }
    attachPrimitive(t) {
        this.Jn.ua(t), t.attached && t.attached({
            chart: this.Gw,
            series: this,
            requestUpdate: ()=>this.Jn.Qt().Ah(),
            horzScaleBehavior: this.Yo
        });
    }
    detachPrimitive(t) {
        this.Jn.ca(t), t.detached && t.detached(), this.Jn.Qt().Ah();
    }
    getPane() {
        const t = this.Jn, i = u(this.Jn.Qt().Hn(t));
        return this.ng(i);
    }
    moveToPane(t) {
        this.Jn.Qt().bc(this.Jn, t);
    }
    rg(t) {
        this.tg.v() && this.tg.p(t);
    }
}
class Vn {
    constructor(t, i, s){
        this.ag = new d, this.g_ = new d, this.Xv = new d, this.ts = t, this.uh = t.Bt(), this.Dm = i, this.uh.du().i(this.lg.bind(this)), this.uh.fu().i(this.og.bind(this)), this.Dm.nm().i(this._g.bind(this)), this.Yo = s;
    }
    m() {
        this.uh.du().u(this), this.uh.fu().u(this), this.Dm.nm().u(this), this.ag.m(), this.g_.m(), this.Xv.m();
    }
    scrollPosition() {
        return this.uh.iu();
    }
    scrollToPosition(t, i) {
        i ? this.uh._u(t, 1e3) : this.ts.fn(t);
    }
    scrollToRealTime() {
        this.uh.ou();
    }
    getVisibleRange() {
        const t = this.uh.O_();
        return null === t ? null : {
            from: t.from.originalTime,
            to: t.to.originalTime
        };
    }
    setVisibleRange(t) {
        const i = {
            from: this.Yo.convertHorzItemToInternal(t.from),
            to: this.Yo.convertHorzItemToInternal(t.to)
        }, s = this.uh.H_(i);
        this.ts.gc(s);
    }
    getVisibleLogicalRange() {
        const t = this.uh.L_();
        return null === t ? null : {
            from: t.Uh(),
            to: t.bi()
        };
    }
    setVisibleLogicalRange(t) {
        o(t.from <= t.to, "The from index cannot be after the to index."), this.ts.gc(t);
    }
    resetTimeScale() {
        this.ts.cn();
    }
    fitContent() {
        this.ts.mu();
    }
    logicalToCoordinate(t) {
        const i = this.ts.Bt();
        return i.Zi() ? null : i.qt(t);
    }
    coordinateToLogical(t) {
        return this.uh.Zi() ? null : this.uh.Z_(t);
    }
    timeToIndex(t, i) {
        const s = this.Yo.convertHorzItemToInternal(t);
        return this.uh.B_(s, i);
    }
    timeToCoordinate(t) {
        const i = this.timeToIndex(t, !1);
        return null === i ? null : this.uh.qt(i);
    }
    coordinateToTime(t) {
        const i = this.ts.Bt(), s = i.Z_(t), n = i.ss(s);
        return null === n ? null : n.originalTime;
    }
    width() {
        return this.Dm.Vf().width;
    }
    height() {
        return this.Dm.Vf().height;
    }
    subscribeVisibleTimeRangeChange(t) {
        this.ag.i(t);
    }
    unsubscribeVisibleTimeRangeChange(t) {
        this.ag._(t);
    }
    subscribeVisibleLogicalRangeChange(t) {
        this.g_.i(t);
    }
    unsubscribeVisibleLogicalRangeChange(t) {
        this.g_._(t);
    }
    subscribeSizeChange(t) {
        this.Xv.i(t);
    }
    unsubscribeSizeChange(t) {
        this.Xv._(t);
    }
    applyOptions(t) {
        this.uh.hr(t);
    }
    options() {
        return {
            ...g(this.uh.N()),
            barSpacing: this.uh.Q_()
        };
    }
    lg() {
        this.ag.v() && this.ag.p(this.getVisibleRange());
    }
    og() {
        this.g_.v() && this.g_.p(this.getVisibleLogicalRange());
    }
    _g(t) {
        this.Xv.p(t.width, t.height);
    }
}
function In(t) {
    if (void 0 === t || "custom" === t.type) return;
    const i = t;
    void 0 !== i.minMove && void 0 === i.precision && (i.precision = function(t) {
        if (t >= 1) return 0;
        let i = 0;
        for(; i < 8; i++){
            const s = Math.round(t);
            if (Math.abs(s - t) < 1e-8) return i;
            t *= 10;
        }
        return i;
    }(i.minMove));
}
function An(t) {
    return function(t) {
        if (w(t.handleScale)) {
            const i = t.handleScale;
            t.handleScale = {
                axisDoubleClickReset: {
                    time: i,
                    price: i
                },
                axisPressedMouseMove: {
                    time: i,
                    price: i
                },
                mouseWheel: i,
                pinch: i
            };
        } else if (void 0 !== t.handleScale) {
            const { axisPressedMouseMove: i, axisDoubleClickReset: s } = t.handleScale;
            w(i) && (t.handleScale.axisPressedMouseMove = {
                time: i,
                price: i
            }), w(s) && (t.handleScale.axisDoubleClickReset = {
                time: s,
                price: s
            });
        }
        const i = t.handleScroll;
        w(i) && (t.handleScroll = {
            horzTouchDrag: i,
            vertTouchDrag: i,
            mouseWheel: i,
            pressedMouseMove: i
        });
    }(t), t;
}
class Bn {
    constructor(t, i, s){
        this.ug = new Map, this.cg = new Map, this.dg = new d, this.fg = new d, this.pg = new d, this.Pu = new WeakMap, this.vg = new Qs(i);
        const n = void 0 === s ? g(yn()) : f(g(yn()), An(s));
        this.mg = i, this.xf = new zs(t, n, i), this.xf.Rv().i((t)=>{
            this.dg.v() && this.dg.p(this.wg(t()));
        }, this), this.xf.Dv().i((t)=>{
            this.fg.v() && this.fg.p(this.wg(t()));
        }, this), this.xf.ju().i((t)=>{
            this.pg.v() && this.pg.p(this.wg(t()));
        }, this);
        const e = this.xf.Qt();
        this.gg = new Vn(e, this.xf.Em(), this.mg);
    }
    remove() {
        this.xf.Rv().u(this), this.xf.Dv().u(this), this.xf.ju().u(this), this.gg.m(), this.xf.m(), this.ug.clear(), this.cg.clear(), this.dg.m(), this.fg.m(), this.pg.m(), this.vg.m();
    }
    resize(t, i, s) {
        this.autoSizeActive() || this.xf.Im(t, i, s);
    }
    addCustomSeries(t, i = {}, s = 0) {
        const n = ((t)=>({
                type: "Custom",
                isBuiltIn: !1,
                defaultOptions: {
                    ...on,
                    ...t.defaultOptions()
                },
                Mg: _n,
                bg: t
            }))(c(t));
        return this.xg(n, i, s);
    }
    addSeries(t, i = {}, s = 0) {
        return this.xg(t, i, s);
    }
    removeSeries(t) {
        const i = _(this.ug.get(t)), s = this.vg.mc(i);
        this.xf.Qt().mc(i), this.Sg(s), this.ug.delete(t), this.cg.delete(i);
    }
    eg(t, i) {
        this.Sg(this.vg.bw(t, i));
    }
    hg(t, i, s) {
        this.Sg(this.vg.Pw(t, i, s));
    }
    subscribeClick(t) {
        this.dg.i(t);
    }
    unsubscribeClick(t) {
        this.dg._(t);
    }
    subscribeCrosshairMove(t) {
        this.pg.i(t);
    }
    unsubscribeCrosshairMove(t) {
        this.pg._(t);
    }
    subscribeDblClick(t) {
        this.fg.i(t);
    }
    unsubscribeDblClick(t) {
        this.fg._(t);
    }
    priceScale(t) {
        return new Pn(this.xf, t);
    }
    timeScale() {
        return this.gg;
    }
    applyOptions(t) {
        this.xf.hr(An(t));
    }
    options() {
        return this.xf.N();
    }
    takeScreenshot() {
        return this.xf.Fm();
    }
    removePane(t) {
        this.xf.Qt().Ku(t);
    }
    swapPanes(t, i) {
        this.xf.Qt().Gu(t, i);
    }
    autoSizeActive() {
        return this.xf.Ym();
    }
    chartElement() {
        return this.xf.Ef();
    }
    panes() {
        return this.xf.Qt().$s().map((t)=>this.Cg(t));
    }
    paneSize(t = 0) {
        const i = this.xf.Km(t);
        return {
            height: i.height,
            width: i.width
        };
    }
    setCrosshairPosition(t, i, s) {
        const n = this.ug.get(s);
        if (void 0 === n) return;
        const e = this.xf.Qt().Hn(n);
        null !== e && this.xf.Qt()._c(t, i, e);
    }
    clearCrosshairPosition() {
        this.xf.Qt().uc(!0);
    }
    horzBehaviour() {
        return this.mg;
    }
    xg(t, i = {}, s = 0) {
        o(void 0 !== t.Mg), In(i.priceFormat), "Candlestick" === t.type && function(t) {
            void 0 !== t.borderColor && (t.borderUpColor = t.borderColor, t.borderDownColor = t.borderColor), void 0 !== t.wickColor && (t.wickUpColor = t.wickColor, t.wickDownColor = t.wickColor);
        }(i);
        const n = f(g(e), g(t.defaultOptions), i), r = t.Mg, h = new Yt(this.xf.Qt(), t.type, n, r, t.bg);
        this.xf.Qt().fc(h, s);
        const a = new Dn(h, this, this, this, this.mg, (t)=>this.Cg(t));
        return this.ug.set(a, h), this.cg.set(h, a), a;
    }
    Sg(t) {
        const i = this.xf.Qt();
        i.cc(t.Bt.Y_, t.Bt.Iw, t.Bt.Aw), t.wo.forEach((t, i)=>i.ht(t.se, t.Vw)), i.Bt().R_(), i.J_();
    }
    yg(t) {
        return _(this.cg.get(t));
    }
    wg(t) {
        const i = new Map;
        t.ow.forEach((t, s)=>{
            const n = s.Rr(), e = wn(n)(t);
            if ("Custom" !== n) o(Ns(e));
            else {
                const t = s.pa();
                o(!t || !1 === t(e));
            }
            i.set(this.yg(s), e);
        });
        const s = void 0 !== t.lw && this.cg.has(t.lw) ? this.yg(t.lw) : void 0;
        return {
            time: t.rw,
            logical: t.Re,
            point: t.hw,
            paneIndex: t.aw,
            hoveredSeries: s,
            hoveredObjectId: t._w,
            seriesData: i,
            sourceEvent: t.uw
        };
    }
    Cg(t) {
        let i = this.Pu.get(t);
        return i || (i = new kn(this.xf, (t)=>this.yg(t), t, this), this.Pu.set(t, i)), i;
    }
}
function En(t) {
    if (m(t)) {
        const i = document.getElementById(t);
        return o(null !== i, `Cannot find element in DOM with id=${t}`), i;
    }
    return t;
}
function zn(t, i, s) {
    const n = En(t), e = new Bn(n, i, s);
    return i.setOptions(e.options()), e;
}
function Ln(t, i) {
    return zn(t, new Qi, Qi.Fc(i));
}
function On() {
    return Qi;
}
class Nn extends rn {
    constructor(t, i){
        super(t, i, !0);
    }
    Yw(t, i, s) {
        i.j_(this.Lw, b(this.Ow)), t.Dl(this.Lw, s, b(this.Ow));
    }
    kg(t, i) {
        return {
            wt: t,
            gt: i,
            _t: NaN,
            ut: NaN
        };
    }
    $w() {
        const t = this.Jn.Rh();
        this.Lw = this.Jn.Ks().Hr().map((i)=>{
            const s = i.Ft[3];
            return this.Pg(i.Re, s, t);
        });
    }
}
function Wn(t, i, s, n, e, r, h) {
    if (0 === i.length || n.from >= i.length || n.to <= 0) return;
    const { context: a, horizontalPixelRatio: l, verticalPixelRatio: o } = t, _ = i[n.from];
    let u = r(t, _), c = _;
    if (n.to - n.from < 2) {
        const i = e / 2;
        a.beginPath();
        const s = {
            _t: _._t - i,
            ut: _.ut
        }, n = {
            _t: _._t + i,
            ut: _.ut
        };
        a.moveTo(s._t * l, s.ut * o), a.lineTo(n._t * l, n.ut * o), h(t, u, s, n);
    } else {
        const e = (i, s)=>{
            h(t, u, c, s), a.beginPath(), u = i, c = s;
        };
        let d = c;
        a.beginPath(), a.moveTo(_._t * l, _.ut * o);
        for(let h = n.from + 1; h < n.to; ++h){
            d = i[h];
            const n = r(t, d);
            switch(s){
                case 0:
                    a.lineTo(d._t * l, d.ut * o);
                    break;
                case 1:
                    a.lineTo(d._t * l, i[h - 1].ut * o), n !== u && (e(n, d), a.lineTo(d._t * l, i[h - 1].ut * o)), a.lineTo(d._t * l, d.ut * o);
                    break;
                case 2:
                    {
                        const [t, s] = $n(i, h - 1, h);
                        a.bezierCurveTo(t._t * l, t.ut * o, s._t * l, s.ut * o, d._t * l, d.ut * o);
                        break;
                    }
            }
            1 !== s && n !== u && (e(n, d), a.moveTo(d._t * l, d.ut * o));
        }
        (c !== d || c === d && 1 === s) && h(t, u, c, d);
    }
}
const Fn = 6;
function Hn(t, i) {
    return {
        _t: t._t - i._t,
        ut: t.ut - i.ut
    };
}
function Un(t, i) {
    return {
        _t: t._t / i,
        ut: t.ut / i
    };
}
function $n(t, i, s) {
    const n = Math.max(0, i - 1), e = Math.min(t.length - 1, s + 1);
    var r, h;
    return [
        (r = t[i], h = Un(Hn(t[s], t[n]), Fn), {
            _t: r._t + h._t,
            ut: r.ut + h.ut
        }),
        Hn(t[s], Un(Hn(t[e], t[i]), Fn))
    ];
}
function qn(t, i) {
    const s = t.context;
    s.strokeStyle = i, s.stroke();
}
class Yn extends R {
    constructor(){
        super(...arguments), this.rt = null;
    }
    ht(t) {
        this.rt = t;
    }
    et(t) {
        if (null === this.rt) return;
        const { ot: i, lt: s, Tg: n, Rg: e, ct: r, Kt: h, Dg: l } = this.rt;
        if (null === s) return;
        const o = t.context;
        o.lineCap = "butt", o.lineWidth = r * t.verticalPixelRatio, a(o, h), o.lineJoin = "round";
        const _ = this.Vg.bind(this);
        void 0 !== e && Wn(t, i, e, s, n, _, qn), l && function(t, i, s, n, e) {
            if (n.to - n.from <= 0) return;
            const { horizontalPixelRatio: r, verticalPixelRatio: h, context: a } = t;
            let l = null;
            const o = Math.max(1, Math.floor(r)) % 2 / 2, _ = s * h + o;
            for(let s = n.to - 1; s >= n.from; --s){
                const n = i[s];
                if (n) {
                    const i = e(t, n);
                    i !== l && (a.beginPath(), null !== l && a.fill(), a.fillStyle = i, l = i);
                    const s = Math.round(n._t * r) + o, u = n.ut * h;
                    a.moveTo(s, u), a.arc(s, u, _, 0, 2 * Math.PI);
                }
            }
            a.fill();
        }(t, i, l, s, _);
    }
}
class jn extends Yn {
    Vg(t, i) {
        return i.vt;
    }
}
class Zn extends Nn {
    constructor(){
        super(...arguments), this.Fw = new jn;
    }
    Pg(t, i, s) {
        return {
            ...this.kg(t, i),
            ...s.Dr(t)
        };
    }
    jw() {
        const t = this.Jn.N(), i = {
            ot: this.Lw,
            Kt: t.lineStyle,
            Rg: t.lineVisible ? t.lineType : void 0,
            ct: t.lineWidth,
            Dg: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0,
            lt: this.Ow,
            Tg: this.Qn.Bt().Q_()
        };
        this.Fw.ht(i);
    }
}
const Kn = {
    type: "Line",
    isBuiltIn: !0,
    defaultOptions: {
        color: "#2196f3",
        lineStyle: 0,
        lineWidth: 3,
        lineType: 0,
        lineVisible: !0,
        crosshairMarkerVisible: !0,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: "",
        crosshairMarkerBorderWidth: 2,
        crosshairMarkerBackgroundColor: "",
        lastPriceAnimation: 0,
        pointMarkersVisible: !1
    },
    Mg: (t, i)=>new Zn(t, i)
};
function Xn(t, i) {
    return t.weight > i.weight ? t : i;
}
class Gn {
    constructor(){
        this.Ig = new d, this.Ag = function(t) {
            let i = !1;
            return function(...s) {
                i || (i = !0, queueMicrotask(()=>{
                    t(...s), i = !1;
                }));
            };
        }(()=>this.Ig.p(this.Bg)), this.Bg = 0;
    }
    Eg() {
        return this.Ig;
    }
    m() {
        this.Ig.m();
    }
    options() {
        return this.ys;
    }
    setOptions(t) {
        this.ys = t;
    }
    preprocessData(t) {}
    updateFormatter(t) {
        this.ys && (this.ys.localization = t);
    }
    createConverterToInternalObj(t) {
        return this.Ag(), (t)=>(t > this.Bg && (this.Bg = t), t);
    }
    key(t) {
        return t;
    }
    cacheKey(t) {
        return t;
    }
    convertHorzItemToInternal(t) {
        return t;
    }
    formatHorzItem(t) {
        return this.zg(t);
    }
    formatTickmark(t) {
        return this.zg(t.time);
    }
    maxTickMarkWeight(t) {
        return t.reduce(Xn, t[0]).weight;
    }
    fillWeightsForPoints(t, i) {
        for(let n = i; n < t.length; ++n)t[n].timeWeight = (s = t[n].time) % 120 == 0 ? 10 : s % 60 == 0 ? 9 : s % 36 == 0 ? 8 : s % 12 == 0 ? 7 : s % 6 == 0 ? 6 : s % 3 == 0 ? 5 : s % 1 == 0 ? 4 : 0;
        var s;
        this.Bg = t[t.length - 1].time, this.Ag();
    }
    zg(t) {
        if (this.ys.localization?.timeFormatter) return this.ys.localization.timeFormatter(t);
        if (t < 12) return `${t}M`;
        const i = Math.floor(t / 12), s = t % 12;
        return 0 === s ? `${i}Y` : `${i}Y${s}M`;
    }
}
const Jn = {
    yieldCurve: {
        baseResolution: 1,
        minimumTimeRange: 120,
        startTimeRange: 0
    },
    timeScale: {
        ignoreWhitespaceIndices: !0
    },
    leftPriceScale: {
        visible: !0
    },
    rightPriceScale: {
        visible: !1
    },
    localization: {
        priceFormatter: (t)=>t.toFixed(3) + "%"
    }
}, Qn = {
    lastValueVisible: !1,
    priceLineVisible: !1
};
class te extends Bn {
    constructor(t, i){
        const s = f(Jn, i || {}), n = new Gn;
        super(t, n, s), n.setOptions(this.options()), this._initWhitespaceSeries();
    }
    addSeries(t, i = {}, s = 0) {
        if (t.isBuiltIn && !1 === [
            "Area",
            "Line"
        ].includes(t.type)) throw new Error("Yield curve only support Area and Line series");
        const n = {
            ...Qn,
            ...i
        };
        return super.addSeries(t, n, s);
    }
    _initWhitespaceSeries() {
        const t = this.horzBehaviour(), i = this.addSeries(Kn);
        let s;
        function n(n) {
            const e = function(t, i) {
                return {
                    le: Math.max(0, t.startTimeRange),
                    oe: Math.max(0, t.minimumTimeRange, i || 0),
                    Lg: Math.max(1, t.baseResolution)
                };
            }(t.options().yieldCurve, n), r = (({ le: t, oe: i, Lg: s })=>`${t}~${i}~${s}`)(e);
            r !== s && (s = r, i.setData(function({ le: t, oe: i, Lg: s }) {
                return Array.from({
                    length: Math.floor((i - t) / s) + 1
                }, (i, n)=>({
                        time: t + n * s
                    }));
            }(e)));
        }
        n(0), t.Eg().i(n);
    }
}
function ie(t, i) {
    const s = En(t);
    return new te(s, i);
}
function se(t, i) {
    return t.weight > i.weight ? t : i;
}
class ne {
    options() {
        return this.ys;
    }
    setOptions(t) {
        this.ys = t;
    }
    preprocessData(t) {}
    updateFormatter(t) {
        this.ys && (this.ys.localization = t);
    }
    createConverterToInternalObj(t) {
        return (t)=>t;
    }
    key(t) {
        return t;
    }
    cacheKey(t) {
        return t;
    }
    convertHorzItemToInternal(t) {
        return t;
    }
    formatHorzItem(t) {
        return t.toFixed(this.Cn());
    }
    formatTickmark(t, i) {
        return t.time.toFixed(this.Cn());
    }
    maxTickMarkWeight(t) {
        return t.reduce(se, t[0]).weight;
    }
    fillWeightsForPoints(t, i) {
        for(let n = i; n < t.length; ++n)t[n].timeWeight = (s = t[n].time) === 100 * Math.ceil(s / 100) ? 8 : s === 50 * Math.ceil(s / 50) ? 7 : s === 25 * Math.ceil(s / 25) ? 6 : s === 10 * Math.ceil(s / 10) ? 5 : s === 5 * Math.ceil(s / 5) ? 4 : s === Math.ceil(s) ? 3 : 2 * s === Math.ceil(2 * s) ? 1 : 0;
        var s;
    }
    Cn() {
        return this.ys.localization.precision;
    }
}
function ee(t, i) {
    return zn(t, new ne, i);
}
function re(t, i, s, n, e) {
    const { context: r, horizontalPixelRatio: h, verticalPixelRatio: a } = i;
    r.lineTo(e._t * h, t * a), r.lineTo(n._t * h, t * a), r.closePath(), r.fillStyle = s, r.fill();
}
class he extends R {
    constructor(){
        super(...arguments), this.rt = null;
    }
    ht(t) {
        this.rt = t;
    }
    et(t) {
        if (null === this.rt) return;
        const { ot: i, lt: s, Tg: n, ct: e, Kt: r, Rg: h } = this.rt, l = this.rt.Og ?? (this.rt.Ng ? 0 : t.mediaSize.height);
        if (null === s) return;
        const o = t.context;
        o.lineCap = "butt", o.lineJoin = "round", o.lineWidth = e, a(o, r), o.lineWidth = 1, Wn(t, i, h, s, n, this.Wg.bind(this), re.bind(null, l));
    }
}
class ae {
    Fg(t, i) {
        const s = this.Hg, { Ug: n, $g: e, qg: r, Yg: h, Og: a, jg: l, Zg: o } = i;
        if (void 0 === this.Kg || void 0 === s || s.Ug !== n || s.$g !== e || s.qg !== r || s.Yg !== h || s.Og !== a || s.jg !== l || s.Zg !== o) {
            const { verticalPixelRatio: s } = t, _ = a || l > 0 ? s : 1, u = l * _, c = o === t.bitmapSize.height ? o : o * _, d = (a ?? 0) * _, f = t.context.createLinearGradient(0, u, 0, c);
            if (f.addColorStop(0, n), null != a) {
                const t = ai((d - u) / (c - u), 0, 1);
                f.addColorStop(t, e), f.addColorStop(t, r);
            }
            f.addColorStop(1, h), this.Kg = f, this.Hg = i;
        }
        return this.Kg;
    }
}
class le extends he {
    constructor(){
        super(...arguments), this.Xg = new ae;
    }
    Wg(t, i) {
        const s = this.rt;
        return this.Xg.Fg(t, {
            Ug: i.br,
            $g: i.Sr,
            qg: i.Cr,
            Yg: i.yr,
            Og: s.Og,
            jg: s.jg ?? 0,
            Zg: s.Zg ?? t.bitmapSize.height
        });
    }
}
class oe extends Yn {
    constructor(){
        super(...arguments), this.Gg = new ae;
    }
    Vg(t, i) {
        const s = this.rt;
        return this.Gg.Fg(t, {
            Ug: i.gr,
            $g: i.gr,
            qg: i.Mr,
            Yg: i.Mr,
            Og: s.Og,
            jg: s.jg ?? 0,
            Zg: s.Zg ?? t.bitmapSize.height
        });
    }
}
class _e extends Nn {
    constructor(t, i){
        super(t, i), this.Fw = new T, this.Jg = new le, this.Qg = new oe, this.Fw.st([
            this.Jg,
            this.Qg
        ]);
    }
    Pg(t, i, s) {
        return {
            ...this.kg(t, i),
            ...s.Dr(t)
        };
    }
    jw() {
        const t = this.Jn.zt();
        if (null === t) return;
        const i = this.Jn.N(), s = this.Jn.Wt().Nt(i.baseValue.price, t.Ft), n = this.Qn.Bt().Q_();
        if (null === this.Ow || 0 === this.Lw.length) return;
        let e, r;
        if (i.relativeGradient) {
            e = this.Lw[this.Ow.from].ut, r = this.Lw[this.Ow.from].ut;
            for(let t = this.Ow.from; t < this.Ow.to; t++){
                const i = this.Lw[t];
                i.ut < e && (e = i.ut), i.ut > r && (r = i.ut);
            }
        }
        this.Jg.ht({
            ot: this.Lw,
            ct: i.lineWidth,
            Kt: i.lineStyle,
            Rg: i.lineType,
            Og: s,
            jg: e,
            Zg: r,
            Ng: !1,
            lt: this.Ow,
            Tg: n
        }), this.Qg.ht({
            ot: this.Lw,
            ct: i.lineWidth,
            Kt: i.lineStyle,
            Rg: i.lineVisible ? i.lineType : void 0,
            Dg: i.pointMarkersVisible ? i.pointMarkersRadius || i.lineWidth / 2 + 2 : void 0,
            Og: s,
            jg: e,
            Zg: r,
            lt: this.Ow,
            Tg: n
        });
    }
}
const ue = {
    type: "Baseline",
    isBuiltIn: !0,
    defaultOptions: {
        baseValue: {
            type: "price",
            price: 0
        },
        relativeGradient: !1,
        topFillColor1: "rgba(38, 166, 154, 0.28)",
        topFillColor2: "rgba(38, 166, 154, 0.05)",
        topLineColor: "rgba(38, 166, 154, 1)",
        bottomFillColor1: "rgba(239, 83, 80, 0.05)",
        bottomFillColor2: "rgba(239, 83, 80, 0.28)",
        bottomLineColor: "rgba(239, 83, 80, 1)",
        lineWidth: 3,
        lineStyle: 0,
        lineType: 0,
        lineVisible: !0,
        crosshairMarkerVisible: !0,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: "",
        crosshairMarkerBorderWidth: 2,
        crosshairMarkerBackgroundColor: "",
        lastPriceAnimation: 0,
        pointMarkersVisible: !1
    },
    Mg: (t, i)=>new _e(t, i)
};
class ce extends he {
    constructor(){
        super(...arguments), this.Xg = new ae;
    }
    Wg(t, i) {
        return this.Xg.Fg(t, {
            Ug: i.mr,
            $g: "",
            qg: "",
            Yg: i.wr,
            jg: this.rt?.jg ?? 0,
            Zg: t.bitmapSize.height
        });
    }
}
class de extends Nn {
    constructor(t, i){
        super(t, i), this.Fw = new T, this.tM = new ce, this.iM = new jn, this.Fw.st([
            this.tM,
            this.iM
        ]);
    }
    Pg(t, i, s) {
        return {
            ...this.kg(t, i),
            ...s.Dr(t)
        };
    }
    jw() {
        const t = this.Jn.N();
        if (null === this.Ow || 0 === this.Lw.length) return;
        let i;
        if (t.relativeGradient) {
            i = this.Lw[this.Ow.from].ut;
            for(let t = this.Ow.from; t < this.Ow.to; t++){
                const s = this.Lw[t];
                s.ut < i && (i = s.ut);
            }
        }
        this.tM.ht({
            Rg: t.lineType,
            ot: this.Lw,
            Kt: t.lineStyle,
            ct: t.lineWidth,
            Og: null,
            jg: i,
            Ng: t.invertFilledArea,
            lt: this.Ow,
            Tg: this.Qn.Bt().Q_()
        }), this.iM.ht({
            Rg: t.lineVisible ? t.lineType : void 0,
            ot: this.Lw,
            Kt: t.lineStyle,
            ct: t.lineWidth,
            lt: this.Ow,
            Tg: this.Qn.Bt().Q_(),
            Dg: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0
        });
    }
}
const fe = {
    type: "Area",
    isBuiltIn: !0,
    defaultOptions: {
        topColor: "rgba( 46, 220, 135, 0.4)",
        bottomColor: "rgba( 40, 221, 100, 0)",
        invertFilledArea: !1,
        relativeGradient: !1,
        lineColor: "#33D778",
        lineStyle: 0,
        lineWidth: 3,
        lineType: 0,
        lineVisible: !0,
        crosshairMarkerVisible: !0,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: "",
        crosshairMarkerBorderWidth: 2,
        crosshairMarkerBackgroundColor: "",
        lastPriceAnimation: 0,
        pointMarkersVisible: !1
    },
    Mg: (t, i)=>new de(t, i)
};
class pe extends R {
    constructor(){
        super(...arguments), this.Yt = null, this.sM = 0, this.nM = 0;
    }
    ht(t) {
        this.Yt = t;
    }
    et({ context: t, horizontalPixelRatio: i, verticalPixelRatio: s }) {
        if (null === this.Yt || 0 === this.Yt.Ks.length || null === this.Yt.lt) return;
        if (this.sM = this.eM(i), this.sM >= 2) Math.max(1, Math.floor(i)) % 2 != this.sM % 2 && this.sM--;
        this.nM = this.Yt.rM ? Math.min(this.sM, Math.floor(i)) : this.sM;
        let n = null;
        const e = this.nM <= this.sM && this.Yt.Q_ >= Math.floor(1.5 * i);
        for(let r = this.Yt.lt.from; r < this.Yt.lt.to; ++r){
            const h = this.Yt.Ks[r];
            n !== h.cr && (t.fillStyle = h.cr, n = h.cr);
            const a = Math.floor(.5 * this.nM), l = Math.round(h._t * i), o = l - a, _ = this.nM, u = o + _ - 1, c = Math.min(h.Bl, h.El), d = Math.max(h.Bl, h.El), f = Math.round(c * s) - a, p = Math.round(d * s) + a, v = Math.max(p - f, this.nM);
            t.fillRect(o, f, _, v);
            const m = Math.ceil(1.5 * this.sM);
            if (e) {
                if (this.Yt.hM) {
                    const i = l - m;
                    let n = Math.max(f, Math.round(h.Al * s) - a), e = n + _ - 1;
                    e > f + v - 1 && (e = f + v - 1, n = e - _ + 1), t.fillRect(i, n, o - i, e - n + 1);
                }
                const i = l + m;
                let n = Math.max(f, Math.round(h.zl * s) - a), e = n + _ - 1;
                e > f + v - 1 && (e = f + v - 1, n = e - _ + 1), t.fillRect(u + 1, n, i - u, e - n + 1);
            }
        }
    }
    eM(t) {
        const i = Math.floor(t);
        return Math.max(i, Math.floor(function(t, i) {
            return Math.floor(.3 * t * i);
        }(u(this.Yt).Q_, t)));
    }
}
class ve extends rn {
    constructor(t, i){
        super(t, i, !1);
    }
    Yw(t, i, s) {
        i.j_(this.Lw, b(this.Ow)), t.Il(this.Lw, s, b(this.Ow));
    }
    aM(t, i, s) {
        return {
            wt: t,
            qh: i.Ft[0],
            Yh: i.Ft[1],
            jh: i.Ft[2],
            Zh: i.Ft[3],
            _t: NaN,
            Al: NaN,
            Bl: NaN,
            El: NaN,
            zl: NaN
        };
    }
    $w() {
        const t = this.Jn.Rh();
        this.Lw = this.Jn.Ks().Hr().map((i)=>this.Pg(i.Re, i, t));
    }
}
class me extends ve {
    constructor(){
        super(...arguments), this.Fw = new pe;
    }
    Pg(t, i, s) {
        return {
            ...this.aM(t, i, s),
            ...s.Dr(t)
        };
    }
    jw() {
        const t = this.Jn.N();
        this.Fw.ht({
            Ks: this.Lw,
            Q_: this.Qn.Bt().Q_(),
            hM: t.openVisible,
            rM: t.thinBars,
            lt: this.Ow
        });
    }
}
const we = {
    type: "Bar",
    isBuiltIn: !0,
    defaultOptions: {
        upColor: "#26a69a",
        downColor: "#ef5350",
        openVisible: !0,
        thinBars: !0
    },
    Mg: (t, i)=>new me(t, i)
};
class ge extends R {
    constructor(){
        super(...arguments), this.Yt = null, this.sM = 0;
    }
    ht(t) {
        this.Yt = t;
    }
    et(t) {
        if (null === this.Yt || 0 === this.Yt.Ks.length || null === this.Yt.lt) return;
        const { horizontalPixelRatio: i } = t;
        if (this.sM = function(t, i) {
            if (t >= 2.5 && t <= 4) return Math.floor(3 * i);
            const s = 1 - .2 * Math.atan(Math.max(4, t) - 4) / (.5 * Math.PI), n = Math.floor(t * s * i), e = Math.floor(t * i), r = Math.min(n, e);
            return Math.max(Math.floor(i), r);
        }(this.Yt.Q_, i), this.sM >= 2) Math.floor(i) % 2 != this.sM % 2 && this.sM--;
        const s = this.Yt.Ks;
        this.Yt.lM && this.oM(t, s, this.Yt.lt), this.Yt.Mi && this.qp(t, s, this.Yt.lt);
        const n = this._M(i);
        (!this.Yt.Mi || this.sM > 2 * n) && this.uM(t, s, this.Yt.lt);
    }
    oM(t, i, s) {
        if (null === this.Yt) return;
        const { context: n, horizontalPixelRatio: e, verticalPixelRatio: r } = t;
        let h = "", a = Math.min(Math.floor(e), Math.floor(this.Yt.Q_ * e));
        a = Math.max(Math.floor(e), Math.min(a, this.sM));
        const l = Math.floor(.5 * a);
        let o = null;
        for(let t = s.from; t < s.to; t++){
            const s = i[t];
            s.pr !== h && (n.fillStyle = s.pr, h = s.pr);
            const _ = Math.round(Math.min(s.Al, s.zl) * r), u = Math.round(Math.max(s.Al, s.zl) * r), c = Math.round(s.Bl * r), d = Math.round(s.El * r);
            let f = Math.round(e * s._t) - l;
            const p = f + a - 1;
            null !== o && (f = Math.max(o + 1, f), f = Math.min(f, p));
            const v = p - f + 1;
            n.fillRect(f, c, v, _ - c), n.fillRect(f, u + 1, v, d - u), o = p;
        }
    }
    _M(t) {
        let i = Math.floor(1 * t);
        this.sM <= 2 * i && (i = Math.floor(.5 * (this.sM - 1)));
        const s = Math.max(Math.floor(t), i);
        return this.sM <= 2 * s ? Math.max(Math.floor(t), Math.floor(1 * t)) : s;
    }
    qp(t, i, s) {
        if (null === this.Yt) return;
        const { context: n, horizontalPixelRatio: e, verticalPixelRatio: r } = t;
        let h = "";
        const a = this._M(e);
        let l = null;
        for(let t = s.from; t < s.to; t++){
            const s = i[t];
            s.dr !== h && (n.fillStyle = s.dr, h = s.dr);
            let o = Math.round(s._t * e) - Math.floor(.5 * this.sM);
            const _ = o + this.sM - 1, u = Math.round(Math.min(s.Al, s.zl) * r), c = Math.round(Math.max(s.Al, s.zl) * r);
            if (null !== l && (o = Math.max(l + 1, o), o = Math.min(o, _)), this.Yt.Q_ * e > 2 * a) z(n, o, u, _ - o + 1, c - u + 1, a);
            else {
                const t = _ - o + 1;
                n.fillRect(o, u, t, c - u + 1);
            }
            l = _;
        }
    }
    uM(t, i, s) {
        if (null === this.Yt) return;
        const { context: n, horizontalPixelRatio: e, verticalPixelRatio: r } = t;
        let h = "";
        const a = this._M(e);
        for(let t = s.from; t < s.to; t++){
            const s = i[t];
            let l = Math.round(Math.min(s.Al, s.zl) * r), o = Math.round(Math.max(s.Al, s.zl) * r), _ = Math.round(s._t * e) - Math.floor(.5 * this.sM), u = _ + this.sM - 1;
            if (s.cr !== h) {
                const t = s.cr;
                n.fillStyle = t, h = t;
            }
            this.Yt.Mi && (_ += a, l += a, u -= a, o -= a), l > o || n.fillRect(_, l, u - _ + 1, o - l + 1);
        }
    }
}
class Me extends ve {
    constructor(){
        super(...arguments), this.Fw = new ge;
    }
    Pg(t, i, s) {
        return {
            ...this.aM(t, i, s),
            ...s.Dr(t)
        };
    }
    jw() {
        const t = this.Jn.N();
        this.Fw.ht({
            Ks: this.Lw,
            Q_: this.Qn.Bt().Q_(),
            lM: t.wickVisible,
            Mi: t.borderVisible,
            lt: this.Ow
        });
    }
}
const be = {
    type: "Candlestick",
    isBuiltIn: !0,
    defaultOptions: {
        upColor: "#26a69a",
        downColor: "#ef5350",
        wickVisible: !0,
        borderVisible: !0,
        borderColor: "#378658",
        borderUpColor: "#26a69a",
        borderDownColor: "#ef5350",
        wickColor: "#737375",
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350"
    },
    Mg: (t, i)=>new Me(t, i)
};
class xe extends R {
    constructor(){
        super(...arguments), this.Yt = null, this.cM = [];
    }
    ht(t) {
        this.Yt = t, this.cM = [];
    }
    et({ context: t, horizontalPixelRatio: i, verticalPixelRatio: s }) {
        if (null === this.Yt || 0 === this.Yt.ot.length || null === this.Yt.lt) return;
        this.cM.length || this.dM(i);
        const n = Math.max(1, Math.floor(s)), e = Math.round(this.Yt.fM * s) - Math.floor(n / 2), r = e + n;
        for(let i = this.Yt.lt.from; i < this.Yt.lt.to; i++){
            const h = this.Yt.ot[i], a = this.cM[i - this.Yt.lt.from], l = Math.round(h.ut * s);
            let o, _;
            t.fillStyle = h.cr, l <= e ? (o = l, _ = r) : (o = e, _ = l - Math.floor(n / 2) + n), t.fillRect(a.Uh, o, a.bi - a.Uh + 1, _ - o);
        }
    }
    dM(t) {
        if (null === this.Yt || 0 === this.Yt.ot.length || null === this.Yt.lt) return void (this.cM = []);
        const i = Math.ceil(this.Yt.Q_ * t) <= 1 ? 0 : Math.max(1, Math.floor(t)), s = Math.round(this.Yt.Q_ * t) - i;
        this.cM = new Array(this.Yt.lt.to - this.Yt.lt.from);
        for(let i = this.Yt.lt.from; i < this.Yt.lt.to; i++){
            const n = this.Yt.ot[i], e = Math.round(n._t * t);
            let r, h;
            if (s % 2) {
                const t = (s - 1) / 2;
                r = e - t, h = e + t;
            } else {
                const t = s / 2;
                r = e - t, h = e + t - 1;
            }
            this.cM[i - this.Yt.lt.from] = {
                Uh: r,
                bi: h,
                pM: e,
                ne: n._t * t,
                wt: n.wt
            };
        }
        for(let t = this.Yt.lt.from + 1; t < this.Yt.lt.to; t++){
            const s = this.cM[t - this.Yt.lt.from], n = this.cM[t - this.Yt.lt.from - 1];
            s.wt === n.wt + 1 && s.Uh - n.bi !== i + 1 && (n.pM > n.ne ? n.bi = s.Uh - i - 1 : s.Uh = n.bi + i + 1);
        }
        let n = Math.ceil(this.Yt.Q_ * t);
        for(let t = this.Yt.lt.from; t < this.Yt.lt.to; t++){
            const i = this.cM[t - this.Yt.lt.from];
            i.bi < i.Uh && (i.bi = i.Uh);
            const s = i.bi - i.Uh + 1;
            n = Math.min(s, n);
        }
        if (i > 0 && n < 4) for(let t = this.Yt.lt.from; t < this.Yt.lt.to; t++){
            const i = this.cM[t - this.Yt.lt.from];
            i.bi - i.Uh + 1 > n && (i.pM > i.ne ? i.bi -= 1 : i.Uh += 1);
        }
    }
}
class Se extends Nn {
    constructor(){
        super(...arguments), this.Fw = new xe;
    }
    Pg(t, i, s) {
        return {
            ...this.kg(t, i),
            ...s.Dr(t)
        };
    }
    jw() {
        const t = {
            ot: this.Lw,
            Q_: this.Qn.Bt().Q_(),
            lt: this.Ow,
            fM: this.Jn.Wt().Nt(this.Jn.N().base, u(this.Jn.zt()).Ft)
        };
        this.Fw.ht(t);
    }
}
const Ce = {
    type: "Histogram",
    isBuiltIn: !0,
    defaultOptions: {
        color: "#26a69a",
        base: 0
    },
    Mg: (t, i)=>new Se(t, i)
};
class ye {
    constructor(t, i){
        this.yt = t, this.vM = i, this.mM();
    }
    detach() {
        this.yt.detachPrimitive(this.vM);
    }
    getPane() {
        return this.yt;
    }
    applyOptions(t) {
        this.vM.hr?.(t);
    }
    mM() {
        this.yt.attachPrimitive(this.vM);
    }
}
const ke = {
    visible: !0,
    horzAlign: "center",
    vertAlign: "center",
    lines: []
}, Pe = {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 48,
    fontFamily: x,
    fontStyle: "",
    text: ""
};
class Te {
    constructor(t){
        this.wM = new Map, this.Yt = t;
    }
    draw(t) {
        t.useMediaCoordinateSpace((t)=>{
            if (!this.Yt.visible) return;
            const { context: i, mediaSize: s } = t;
            let n = 0;
            for (const t of this.Yt.lines){
                if (0 === t.text.length) continue;
                i.font = t.P;
                const e = this.gM(i, t.text);
                e > s.width ? t.hu = s.width / e : t.hu = 1, n += t.lineHeight * t.hu;
            }
            let e = 0;
            switch(this.Yt.vertAlign){
                case "top":
                    e = 0;
                    break;
                case "center":
                    e = Math.max((s.height - n) / 2, 0);
                    break;
                case "bottom":
                    e = Math.max(s.height - n, 0);
            }
            for (const t of this.Yt.lines){
                i.save(), i.fillStyle = t.color;
                let n = 0;
                switch(this.Yt.horzAlign){
                    case "left":
                        i.textAlign = "left", n = t.lineHeight / 2;
                        break;
                    case "center":
                        i.textAlign = "center", n = s.width / 2;
                        break;
                    case "right":
                        i.textAlign = "right", n = s.width - 1 - t.lineHeight / 2;
                }
                i.translate(n, e), i.textBaseline = "top", i.font = t.P, i.scale(t.hu, t.hu), i.fillText(t.text, 0, t.MM), i.restore(), e += t.lineHeight * t.hu;
            }
        });
    }
    gM(t, i) {
        const s = this.bM(t.font);
        let n = s.get(i);
        return void 0 === n && (n = t.measureText(i).width, s.set(i, n)), n;
    }
    bM(t) {
        let i = this.wM.get(t);
        return void 0 === i && (i = new Map, this.wM.set(t, i)), i;
    }
}
class Re {
    constructor(t){
        this.ys = Ve(t);
    }
    kt(t) {
        this.ys = Ve(t);
    }
    renderer() {
        return new Te(this.ys);
    }
}
function De(t) {
    return {
        ...t,
        P: S(t.fontSize, t.fontFamily, t.fontStyle),
        lineHeight: t.lineHeight || 1.2 * t.fontSize,
        MM: 0,
        hu: 0
    };
}
function Ve(t) {
    return {
        ...t,
        lines: t.lines.map(De)
    };
}
function Ie(t) {
    return {
        ...Pe,
        ...t
    };
}
function Ae(t) {
    return {
        ...ke,
        ...t,
        lines: t.lines?.map(Ie) ?? []
    };
}
class Be {
    constructor(t){
        this.ys = Ae(t), this.xM = [
            new Re(this.ys)
        ];
    }
    updateAllViews() {
        this.xM.forEach((t)=>t.kt(this.ys));
    }
    paneViews() {
        return this.xM;
    }
    attached({ requestUpdate: t }) {
        this.SM = t;
    }
    detached() {
        this.SM = void 0;
    }
    hr(t) {
        this.ys = Ae({
            ...this.ys,
            ...t
        }), this.SM && this.SM();
    }
}
function Ee(t, i) {
    return new ye(t, new Be(i));
}
const ze = {
    alpha: 1,
    padding: 0
};
class Le {
    constructor(t){
        this.Yt = t;
    }
    draw(t) {
        t.useMediaCoordinateSpace((t)=>{
            const i = t.context, s = this.CM(this.Yt, t.mediaSize);
            s && this.Yt.yM && (i.globalAlpha = this.Yt.alpha ?? 1, i.drawImage(this.Yt.yM, s._t, s.ut, s.Qi, s.$t));
        });
    }
    CM(t, i) {
        const { maxHeight: s, maxWidth: n, kM: e, PM: r, padding: h } = t, a = Math.round(i.width / 2), l = Math.round(i.height / 2), o = h ?? 0;
        let _ = i.width - 2 * o, u = i.height - 2 * o;
        s && (u = Math.min(u, s)), n && (_ = Math.min(_, n));
        const c = _ / r, d = u / e, f = Math.min(c, d), p = r * f, v = e * f;
        return {
            _t: a - .5 * p,
            ut: l - .5 * v,
            $t: v,
            Qi: p
        };
    }
}
class Oe {
    constructor(t){
        this.TM = null, this.RM = 0, this.DM = 0, this.ys = t, this.M = Ne(this.ys, this.TM, this.RM, this.DM);
    }
    VM(t) {
        void 0 !== t.IM && (this.RM = t.IM), void 0 !== t.AM && (this.DM = t.AM), void 0 !== t.BM && (this.TM = t.BM), this.kt();
    }
    EM(t) {
        this.ys = t, this.kt();
    }
    zOrder() {
        return "bottom";
    }
    kt() {
        this.M = Ne(this.ys, this.TM, this.RM, this.DM);
    }
    renderer() {
        return new Le(this.M);
    }
}
function Ne(t, i, s, n) {
    return {
        ...t,
        yM: i,
        PM: s,
        kM: n
    };
}
function We(t) {
    return {
        ...ze,
        ...t
    };
}
class Fe {
    constructor(t, i){
        this.zM = null, this.LM = t, this.ys = We(i), this.xM = [
            new Oe(this.ys)
        ];
    }
    updateAllViews() {
        this.xM.forEach((t)=>t.kt());
    }
    paneViews() {
        return this.xM;
    }
    attached(t) {
        const { requestUpdate: i } = t;
        this.OM = i, this.zM = new Image, this.zM.onload = ()=>{
            const t = this.zM?.naturalHeight ?? 1, i = this.zM?.naturalWidth ?? 1;
            this.xM.forEach((s)=>s.VM({
                    AM: t,
                    IM: i,
                    BM: this.zM
                })), this.OM && this.OM();
        }, this.zM.src = this.LM;
    }
    detached() {
        this.OM = void 0, this.zM = null;
    }
    hr(t) {
        this.ys = We({
            ...this.ys,
            ...t
        }), this.NM(), this.SM && this.SM();
    }
    SM() {
        this.OM && this.OM();
    }
    NM() {
        this.xM.forEach((t)=>t.EM(this.ys));
    }
}
function He(t, i, s) {
    return new ye(t, new Fe(i, s));
}
class Ue {
    constructor(t, i){
        this.Jn = t, this.ah = i, this.mM();
    }
    detach() {
        this.Jn.detachPrimitive(this.ah);
    }
    getSeries() {
        return this.Jn;
    }
    applyOptions(t) {
        this.ah && this.ah.hr && this.ah.hr(t);
    }
    mM() {
        this.Jn.attachPrimitive(this.ah);
    }
}
function $e(t, i) {
    return oi(Math.min(Math.max(t, 12), 30) * i);
}
function qe(t, i) {
    switch(t){
        case "arrowDown":
        case "arrowUp":
            return $e(i, 1);
        case "circle":
            return $e(i, .8);
        case "square":
            return $e(i, .7);
    }
}
function Ye(t) {
    return function(t) {
        const i = Math.ceil(t);
        return i % 2 != 0 ? i - 1 : i;
    }($e(t, 1));
}
function je(t) {
    return Math.max($e(t, .1), 3);
}
function Ze(t, i, s) {
    return i ? t : s ? Math.ceil(t / 2) : 0;
}
function Ke(t, i, s, n) {
    const e = (qe("arrowUp", n) - 1) / 2 * s.WM, r = (oi(n / 2) - 1) / 2 * s.WM;
    i.beginPath(), t ? (i.moveTo(s._t - e, s.ut), i.lineTo(s._t, s.ut - e), i.lineTo(s._t + e, s.ut), i.lineTo(s._t + r, s.ut), i.lineTo(s._t + r, s.ut + e), i.lineTo(s._t - r, s.ut + e), i.lineTo(s._t - r, s.ut)) : (i.moveTo(s._t - e, s.ut), i.lineTo(s._t, s.ut + e), i.lineTo(s._t + e, s.ut), i.lineTo(s._t + r, s.ut), i.lineTo(s._t + r, s.ut - e), i.lineTo(s._t - r, s.ut - e), i.lineTo(s._t - r, s.ut)), i.fill();
}
function Xe(t, i, s, n, e, r) {
    const h = (qe("arrowUp", n) - 1) / 2, a = (oi(n / 2) - 1) / 2;
    if (e >= i - a - 2 && e <= i + a + 2 && r >= (t ? s : s - h) - 2 && r <= (t ? s + h : s) + 2) return !0;
    return (()=>{
        if (e < i - h - 3 || e > i + h + 3 || r < (t ? s - h - 3 : s) || r > (t ? s : s + h + 3)) return !1;
        const n = Math.abs(e - i);
        return Math.abs(r - s) + 3 >= n / 2;
    })();
}
class Ge {
    constructor(){
        this.Yt = null, this.On = new et, this.W = -1, this.F = "", this.bp = "";
    }
    ht(t) {
        this.Yt = t;
    }
    Nn(t, i) {
        this.W === t && this.F === i || (this.W = t, this.F = i, this.bp = S(t, i), this.On.In());
    }
    jn(t, i) {
        if (null === this.Yt || null === this.Yt.lt) return null;
        for(let s = this.Yt.lt.from; s < this.Yt.lt.to; s++){
            const n = this.Yt.ot[s];
            if (n && Qe(n, t, i)) return {
                zOrder: "normal",
                externalId: n.Zn ?? ""
            };
        }
        return null;
    }
    draw(t) {
        t.useBitmapCoordinateSpace((t)=>{
            this.et(t);
        });
    }
    et({ context: t, horizontalPixelRatio: i, verticalPixelRatio: s }) {
        if (null !== this.Yt && null !== this.Yt.lt) {
            t.textBaseline = "middle", t.font = this.bp;
            for(let n = this.Yt.lt.from; n < this.Yt.lt.to; n++){
                const e = this.Yt.ot[n];
                void 0 !== e.ri && (e.ri.Qi = this.On.Vi(t, e.ri.FM), e.ri.$t = this.W, e.ri._t = e._t - e.ri.Qi / 2), Je(e, t, i, s);
            }
        }
    }
}
function Je(t, i, s, n) {
    i.fillStyle = t.R, void 0 !== t.ri && function(t, i, s, n, e, r) {
        t.save(), t.scale(e, r), t.fillText(i, s, n), t.restore();
    }(i, t.ri.FM, t.ri._t, t.ri.ut, s, n), function(t, i, s) {
        if (0 === t.zr) return;
        switch(t.HM){
            case "arrowDown":
                return void Ke(!1, i, s, t.zr);
            case "arrowUp":
                return void Ke(!0, i, s, t.zr);
            case "circle":
                return void function(t, i, s) {
                    const n = (qe("circle", s) - 1) / 2;
                    t.beginPath(), t.arc(i._t, i.ut, n * i.WM, 0, 2 * Math.PI, !1), t.fill();
                }(i, s, t.zr);
            case "square":
                return void function(t, i, s) {
                    const n = qe("square", s), e = (n - 1) * i.WM / 2, r = i._t - e, h = i.ut - e;
                    t.fillRect(r, h, n * i.WM, n * i.WM);
                }(i, s, t.zr);
        }
        t.HM;
    }(t, i, function(t, i, s) {
        const n = Math.max(1, Math.floor(i)) % 2 / 2;
        return {
            _t: Math.round(t._t * i) + n,
            ut: t.ut * s,
            WM: i
        };
    }(t, s, n));
}
function Qe(t, i, s) {
    return !(void 0 === t.ri || !function(t, i, s, n, e, r) {
        const h = n / 2;
        return e >= t && e <= t + s && r >= i - h && r <= i + h;
    }(t.ri._t, t.ri.ut, t.ri.Qi, t.ri.$t, i, s)) || function(t, i, s) {
        if (0 === t.zr) return !1;
        switch(t.HM){
            case "arrowDown":
                return Xe(!0, t._t, t.ut, t.zr, i, s);
            case "arrowUp":
                return Xe(!1, t._t, t.ut, t.zr, i, s);
            case "circle":
                return function(t, i, s, n, e) {
                    const r = 2 + qe("circle", s) / 2, h = t - n, a = i - e;
                    return Math.sqrt(h * h + a * a) <= r;
                }(t._t, t.ut, t.zr, i, s);
            case "square":
                return function(t, i, s, n, e) {
                    const r = qe("square", s), h = (r - 1) / 2, a = t - h, l = i - h;
                    return n >= a && n <= a + r && e >= l && e <= l + r;
                }(t._t, t.ut, t.zr, i, s);
        }
    }(t, i, s);
}
function tr(t, i, s, n, e, r, h, a) {
    const l = a.timeScale();
    let o, _, c;
    if ("value" in (d = s) && "number" == typeof d.value) o = s.value, _ = s.value, c = s.value;
    else {
        if (!function(t) {
            return "open" in t && "high" in t && "low" in t && "close" in t;
        }(s)) return;
        o = s.close, _ = s.high, c = s.low;
    }
    var d;
    const f = p(i.size) ? Math.max(i.size, 0) : 1, v = Ye(l.options().barSpacing) * f, m = v / 2;
    switch(t.zr = v, i.position){
        case "inBar":
            return t.ut = u(h.priceToCoordinate(o)), void (void 0 !== t.ri && (t.ri.ut = t.ut + m + r + .6 * e));
        case "aboveBar":
            return t.ut = u(h.priceToCoordinate(_)) - m - n.UM, void 0 !== t.ri && (t.ri.ut = t.ut - m - .6 * e, n.UM += 1.2 * e), void (n.UM += v + r);
        case "belowBar":
            return t.ut = u(h.priceToCoordinate(c)) + m + n.$M, void 0 !== t.ri && (t.ri.ut = t.ut + m + r + .6 * e, n.$M += 1.2 * e), void (n.$M += v + r);
    }
    i.position;
}
class ir {
    constructor(t, i){
        this.qM = [], this.St = !0, this.YM = !0, this.Gt = new Ge, this.ge = t, this.up = i, this.Yt = {
            ot: [],
            lt: null
        };
    }
    renderer() {
        if (!this.ge.options().visible) return null;
        this.St && this.jM();
        const t = this.up.options().layout;
        return this.Gt.Nn(t.fontSize, t.fontFamily), this.Gt.ht(this.Yt), this.Gt;
    }
    ZM(t) {
        this.qM = t, this.kt("data");
    }
    kt(t) {
        this.St = !0, "data" === t && (this.YM = !0);
    }
    jM() {
        const t = this.up.timeScale(), i = this.qM;
        this.YM && (this.Yt.ot = i.map((t)=>({
                wt: t.time,
                _t: 0,
                ut: 0,
                zr: 0,
                HM: t.shape,
                R: t.color,
                Zn: t.id,
                KM: t.KM,
                ri: void 0
            })), this.YM = !1);
        const s = this.up.options().layout;
        this.Yt.lt = null;
        const n = t.getVisibleLogicalRange();
        if (null === n) return;
        const e = new Ci(Math.floor(n.from), Math.ceil(n.to));
        if (null === this.ge.data()[0]) return;
        if (0 === this.Yt.ot.length) return;
        let r = NaN;
        const h = je(t.options().barSpacing), a = {
            UM: h,
            $M: h
        };
        this.Yt.lt = en(this.Yt.ot, e, !0);
        for(let n = this.Yt.lt.from; n < this.Yt.lt.to; n++){
            const e = i[n];
            e.time !== r && (a.UM = h, a.$M = h, r = e.time);
            const l = this.Yt.ot[n];
            l._t = u(t.logicalToCoordinate(e.time)), void 0 !== e.text && e.text.length > 0 && (l.ri = {
                FM: e.text,
                _t: 0,
                ut: 0,
                Qi: 0,
                $t: 0
            });
            const o = u(this.ge.dataByIndex(e.time, -1));
            null !== o && tr(l, e, o, a, s.fontSize, h, this.ge, this.up);
        }
        this.St = !1;
    }
}
class sr {
    constructor(){
        this.sh = null, this.qM = [], this.XM = [], this.GM = null, this.ge = null, this.up = null, this.JM = !0, this.QM = null, this.tb = null, this.ib = null;
    }
    attached(t) {
        this.sb(), this.up = t.chart, this.ge = t.series, this.sh = new ir(this.ge, u(this.up)), this.OM = t.requestUpdate, this.ge.subscribeDataChanged((t)=>this.rg(t)), this.SM();
    }
    SM() {
        this.OM && this.OM();
    }
    detached() {
        this.ge && this.GM && this.ge.unsubscribeDataChanged(this.GM), this.up = null, this.ge = null, this.sh = null, this.GM = null;
    }
    ZM(t) {
        this.qM = t, this.sb(), this.JM = !0, this.tb = null, this.SM();
    }
    nb() {
        return this.qM;
    }
    paneViews() {
        return this.sh ? [
            this.sh
        ] : [];
    }
    updateAllViews() {
        this.eb();
    }
    hitTest(t, i) {
        return this.sh ? this.sh.renderer()?.jn(t, i) ?? null : null;
    }
    autoscaleInfo(t, i) {
        if (this.sh) {
            const t = this.rb();
            if (t) return {
                priceRange: null,
                margins: t
            };
        }
        return null;
    }
    rb() {
        const t = u(this.up).timeScale().options().barSpacing;
        if (this.JM || t !== this.ib) {
            if (this.ib = t, this.qM.length > 0) {
                const i = je(t), s = 1.5 * Ye(t) + 2 * i, n = this.hb();
                this.QM = {
                    above: Ze(s, n.aboveBar, n.inBar),
                    below: Ze(s, n.belowBar, n.inBar)
                };
            } else this.QM = null;
            this.JM = !1;
        }
        return this.QM;
    }
    hb() {
        return null === this.tb && (this.tb = this.qM.reduce((t, i)=>(t[i.position] || (t[i.position] = !0), t), {
            inBar: !1,
            aboveBar: !1,
            belowBar: !1
        })), this.tb;
    }
    sb() {
        if (!this.up || !this.ge) return;
        const t = this.up.timeScale();
        if (null == t.getVisibleLogicalRange() || !this.ge || 0 === this.ge?.data().length) return void (this.XM = []);
        const i = this.ge?.data(), s = t.timeToIndex(u(i[0].time), !0);
        this.XM = this.qM.map((i, n)=>{
            const e = t.timeToIndex(i.time, !0), r = e < s ? 1 : -1, h = u(this.ge).dataByIndex(e, r);
            return {
                time: t.timeToIndex(u(h).time, !1),
                position: i.position,
                shape: i.shape,
                color: i.color,
                id: i.id,
                KM: n,
                text: i.text,
                size: i.size,
                rw: i.time
            };
        });
    }
    eb(t) {
        this.sh && (this.sb(), this.sh.ZM(this.XM), this.sh.kt(t));
    }
    rg(t) {
        this.SM();
    }
}
class nr extends Ue {
    constructor(t, i, s){
        super(t, i), s && this.setMarkers(s);
    }
    setMarkers(t) {
        this.ah.ZM(t);
    }
    markers() {
        return this.ah.nb();
    }
}
function er(t, i) {
    const s = new nr(t, new sr);
    return i && s.setMarkers(i), s;
}
class rr {
    constructor(t){
        this.qM = new Map, this.ab = t;
    }
    lb(t, i, s) {
        if (this.ob(i), void 0 !== s) {
            const n = window.setTimeout(()=>{
                this.qM.delete(i), this._b();
            }, s), e = {
                ...t,
                ub: n,
                cb: Date.now() + s
            };
            this.qM.set(i, e);
        } else this.qM.set(i, {
            ...t,
            ub: void 0,
            cb: void 0
        });
        this._b();
    }
    ob(t) {
        const i = this.qM.get(t);
        i && void 0 !== i.ub && window.clearTimeout(i.ub), this.qM.delete(t), this._b();
    }
    fb() {
        for (const [t] of this.qM)this.ob(t);
    }
    pb() {
        const t = Date.now(), i = [];
        for (const [s, n] of this.qM)!n.cb || n.cb > t ? i.push({
            time: n.time,
            sign: n.sign,
            value: n.value
        }) : this.ob(s);
        return i;
    }
    mb(t) {
        this.ab = t;
    }
    _b() {
        this.ab && this.ab();
    }
}
const hr = {
    positiveColor: "#22AB94",
    negativeColor: "#F7525F",
    updateVisibilityDuration: 5e3
};
class ar {
    constructor(t, i, s, n){
        this.Yt = t, this.wb = i, this.gb = s, this.Mb = n;
    }
    draw(t) {
        t.useBitmapCoordinateSpace((t)=>{
            const i = t.context, s = Math.max(1, Math.floor(t.horizontalPixelRatio)) % 2 / 2, n = 4 * t.verticalPixelRatio + s;
            this.Yt.forEach((e)=>{
                const r = Math.round(e._t * t.horizontalPixelRatio) + s;
                i.beginPath();
                const h = this.bb(e.xb);
                i.fillStyle = h, i.arc(r, e.ut * t.verticalPixelRatio, n, 0, 2 * Math.PI, !1), i.fill(), e.xb && (i.strokeStyle = h, i.lineWidth = Math.floor(2 * t.horizontalPixelRatio), i.beginPath(), i.moveTo((e._t - 4.7) * t.horizontalPixelRatio + s, (e.ut - 7 * e.xb) * t.verticalPixelRatio), i.lineTo(e._t * t.horizontalPixelRatio + s, (e.ut - 7 * e.xb - 7 * e.xb * .5) * t.verticalPixelRatio), i.lineTo((e._t + 4.7) * t.horizontalPixelRatio + s, (e.ut - 7 * e.xb) * t.verticalPixelRatio), i.stroke());
            });
        });
    }
    bb(t) {
        return 0 === t ? this.wb : t > 0 ? this.Mb : this.gb;
    }
}
class lr {
    constructor(t, i, s){
        this.Yt = [], this.ge = t, this.uh = i, this.ys = s;
    }
    kt(t) {
        this.Yt = t.map((t)=>{
            const i = this.ge.priceToCoordinate(t.value);
            if (null === i) return null;
            return {
                _t: u(this.uh.timeToCoordinate(t.time)),
                ut: i,
                xb: t.sign
            };
        }).filter(M);
    }
    renderer() {
        const t = function(t, i) {
            return function(t, i) {
                return "Area" === i;
            }(0, i) ? t.lineColor : t.color;
        }(this.ge.options(), this.ge.seriesType());
        return new ar(this.Yt, t, this.ys.negativeColor, this.ys.positiveColor);
    }
}
function or(t, i) {
    return "Line" === i || "Area" === i;
}
class _r {
    constructor(t){
        this.up = void 0, this.ge = void 0, this.xM = [], this.Yo = null, this.Sb = new Map, this.Cb = new rr(()=>this.SM()), this.ys = {
            ...hr,
            ...t
        };
    }
    hr(t) {
        this.ys = {
            ...this.ys,
            ...t
        }, this.SM();
    }
    ZM(t) {
        this.Cb.fb();
        const i = this.Yo;
        i && t.forEach((t)=>{
            this.Cb.lb(t, i.key(t.time));
        });
    }
    nb() {
        return this.Cb.pb();
    }
    SM() {
        this.OM?.();
    }
    attached(t) {
        const { chart: i, series: s, requestUpdate: n, horzScaleBehavior: e } = t;
        this.up = i, this.ge = s, this.Yo = e;
        const r = this.ge.seriesType();
        if ("Area" !== r && "Line" !== r) throw new Error("UpDownMarkersPrimitive is only supported for Area and Line series types");
        this.xM = [
            new lr(this.ge, this.up.timeScale(), this.ys)
        ], this.OM = n, this.SM();
    }
    detached() {
        this.up = void 0, this.ge = void 0, this.OM = void 0;
    }
    yp() {
        return _(this.up);
    }
    wo() {
        return _(this.ge);
    }
    updateAllViews() {
        this.xM.forEach((t)=>t.kt(this.nb()));
    }
    paneViews() {
        return this.xM;
    }
    ht(t) {
        if (!this.ge) throw new Error("Primitive not attached to series");
        const i = this.ge.seriesType();
        this.Sb.clear();
        const s = this.Yo;
        s && t.forEach((t)=>{
            Ns(t) && or(0, i) && this.Sb.set(s.key(t.time), t.value);
        }), _(this.ge).setData(t);
    }
    kt(t, i) {
        if (!this.ge || !this.Yo) throw new Error("Primitive not attached to series");
        const s = this.ge.seriesType(), n = this.Yo.key(t.time);
        if (Os(t) && this.Sb.delete(n), Ns(t) && or(0, s)) {
            const i = this.Sb.get(n);
            i && this.Cb.lb({
                time: t.time,
                value: t.value,
                sign: ur(t.value, i)
            }, n, this.ys.updateVisibilityDuration);
        }
        _(this.ge).update(t, i);
    }
    yb() {
        this.Cb.fb();
    }
}
function ur(t, i) {
    return t === i ? 0 : t - i > 0 ? 1 : -1;
}
class cr extends Ue {
    setData(t) {
        return this.ah.ht(t);
    }
    update(t, i) {
        return this.ah.kt(t, i);
    }
    markers() {
        return this.ah.nb();
    }
    setMarkers(t) {
        return this.ah.ZM(t);
    }
    clearMarkers() {
        return this.ah.yb();
    }
}
function dr(t, i = {}) {
    return new cr(t, new _r(i));
}
const fr = {
    ...e,
    color: "#2196f3"
};
function pr() {
    return "5.0.2";
}

},{"fancy-canvas":"8QAPv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8QAPv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "size", ()=>(0, _sizeMjs.size));
parcelHelpers.export(exports, "equalSizes", ()=>(0, _sizeMjs.equalSizes));
parcelHelpers.export(exports, "bindCanvasElementBitmapSizeTo", ()=>(0, _canvasElementBitmapSizeMjs.bindTo));
parcelHelpers.export(exports, "CanvasRenderingTarget2D", ()=>(0, _canvasRenderingTargetMjs.CanvasRenderingTarget2D));
parcelHelpers.export(exports, "createCanvasRenderingTarget2D", ()=>(0, _canvasRenderingTargetMjs.createCanvasRenderingTarget2D));
parcelHelpers.export(exports, "tryCreateCanvasRenderingTarget2D", ()=>(0, _canvasRenderingTargetMjs.tryCreateCanvasRenderingTarget2D));
var _sizeMjs = require("./size.mjs");
var _canvasElementBitmapSizeMjs = require("./canvas-element-bitmap-size.mjs");
var _canvasRenderingTargetMjs = require("./canvas-rendering-target.mjs");

},{"./size.mjs":"bJXHM","./canvas-element-bitmap-size.mjs":"fuSCy","./canvas-rendering-target.mjs":"l8gnP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bJXHM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "size", ()=>size);
parcelHelpers.export(exports, "equalSizes", ()=>equalSizes);
function size(_a) {
    var width = _a.width, height = _a.height;
    if (width < 0) throw new Error('Negative width is not allowed for Size');
    if (height < 0) throw new Error('Negative height is not allowed for Size');
    return {
        width: width,
        height: height
    };
}
function equalSizes(first, second) {
    return first.width === second.width && first.height === second.height;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fuSCy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bindTo", ()=>bindTo);
var _sizeMjs = require("./size.mjs");
var _devicePixelRatioMjs = require("./device-pixel-ratio.mjs");
var DevicePixelContentBoxBinding = /** @class */ function() {
    function DevicePixelContentBoxBinding(canvasElement, transformBitmapSize, options) {
        var _a;
        this._canvasElement = null;
        this._bitmapSizeChangedListeners = [];
        this._suggestedBitmapSize = null;
        this._suggestedBitmapSizeChangedListeners = [];
        // devicePixelRatio approach
        this._devicePixelRatioObservable = null;
        // ResizeObserver approach
        this._canvasElementResizeObserver = null;
        this._canvasElement = canvasElement;
        this._canvasElementClientSize = (0, _sizeMjs.size)({
            width: this._canvasElement.clientWidth,
            height: this._canvasElement.clientHeight
        });
        this._transformBitmapSize = transformBitmapSize !== null && transformBitmapSize !== void 0 ? transformBitmapSize : function(size) {
            return size;
        };
        this._allowResizeObserver = (_a = options === null || options === void 0 ? void 0 : options.allowResizeObserver) !== null && _a !== void 0 ? _a : true;
        this._chooseAndInitObserver();
    // we MAY leave the constuctor without any bitmap size observation mechanics initialized
    }
    DevicePixelContentBoxBinding.prototype.dispose = function() {
        var _a, _b;
        if (this._canvasElement === null) throw new Error('Object is disposed');
        (_a = this._canvasElementResizeObserver) === null || _a === void 0 || _a.disconnect();
        this._canvasElementResizeObserver = null;
        (_b = this._devicePixelRatioObservable) === null || _b === void 0 || _b.dispose();
        this._devicePixelRatioObservable = null;
        this._suggestedBitmapSizeChangedListeners.length = 0;
        this._bitmapSizeChangedListeners.length = 0;
        this._canvasElement = null;
    };
    Object.defineProperty(DevicePixelContentBoxBinding.prototype, "canvasElement", {
        get: function() {
            if (this._canvasElement === null) throw new Error('Object is disposed');
            return this._canvasElement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevicePixelContentBoxBinding.prototype, "canvasElementClientSize", {
        get: function() {
            return this._canvasElementClientSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevicePixelContentBoxBinding.prototype, "bitmapSize", {
        get: function() {
            return (0, _sizeMjs.size)({
                width: this.canvasElement.width,
                height: this.canvasElement.height
            });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Use this function to change canvas element client size until binding is disposed
     * @param clientSize New client size for bound HTMLCanvasElement
     */ DevicePixelContentBoxBinding.prototype.resizeCanvasElement = function(clientSize) {
        this._canvasElementClientSize = (0, _sizeMjs.size)(clientSize);
        this.canvasElement.style.width = "".concat(this._canvasElementClientSize.width, "px");
        this.canvasElement.style.height = "".concat(this._canvasElementClientSize.height, "px");
        this._invalidateBitmapSize();
    };
    DevicePixelContentBoxBinding.prototype.subscribeBitmapSizeChanged = function(listener) {
        this._bitmapSizeChangedListeners.push(listener);
    };
    DevicePixelContentBoxBinding.prototype.unsubscribeBitmapSizeChanged = function(listener) {
        this._bitmapSizeChangedListeners = this._bitmapSizeChangedListeners.filter(function(l) {
            return l !== listener;
        });
    };
    Object.defineProperty(DevicePixelContentBoxBinding.prototype, "suggestedBitmapSize", {
        get: function() {
            return this._suggestedBitmapSize;
        },
        enumerable: false,
        configurable: true
    });
    DevicePixelContentBoxBinding.prototype.subscribeSuggestedBitmapSizeChanged = function(listener) {
        this._suggestedBitmapSizeChangedListeners.push(listener);
    };
    DevicePixelContentBoxBinding.prototype.unsubscribeSuggestedBitmapSizeChanged = function(listener) {
        this._suggestedBitmapSizeChangedListeners = this._suggestedBitmapSizeChangedListeners.filter(function(l) {
            return l !== listener;
        });
    };
    DevicePixelContentBoxBinding.prototype.applySuggestedBitmapSize = function() {
        if (this._suggestedBitmapSize === null) // nothing to apply
        return;
        var oldSuggestedSize = this._suggestedBitmapSize;
        this._suggestedBitmapSize = null;
        this._resizeBitmap(oldSuggestedSize);
        this._emitSuggestedBitmapSizeChanged(oldSuggestedSize, this._suggestedBitmapSize);
    };
    DevicePixelContentBoxBinding.prototype._resizeBitmap = function(newSize) {
        var oldSize = this.bitmapSize;
        if ((0, _sizeMjs.equalSizes)(oldSize, newSize)) return;
        this.canvasElement.width = newSize.width;
        this.canvasElement.height = newSize.height;
        this._emitBitmapSizeChanged(oldSize, newSize);
    };
    DevicePixelContentBoxBinding.prototype._emitBitmapSizeChanged = function(oldSize, newSize) {
        var _this = this;
        this._bitmapSizeChangedListeners.forEach(function(listener) {
            return listener.call(_this, oldSize, newSize);
        });
    };
    DevicePixelContentBoxBinding.prototype._suggestNewBitmapSize = function(newSize) {
        var oldSuggestedSize = this._suggestedBitmapSize;
        var finalNewSize = (0, _sizeMjs.size)(this._transformBitmapSize(newSize, this._canvasElementClientSize));
        var newSuggestedSize = (0, _sizeMjs.equalSizes)(this.bitmapSize, finalNewSize) ? null : finalNewSize;
        if (oldSuggestedSize === null && newSuggestedSize === null) return;
        if (oldSuggestedSize !== null && newSuggestedSize !== null && (0, _sizeMjs.equalSizes)(oldSuggestedSize, newSuggestedSize)) return;
        this._suggestedBitmapSize = newSuggestedSize;
        this._emitSuggestedBitmapSizeChanged(oldSuggestedSize, newSuggestedSize);
    };
    DevicePixelContentBoxBinding.prototype._emitSuggestedBitmapSizeChanged = function(oldSize, newSize) {
        var _this = this;
        this._suggestedBitmapSizeChangedListeners.forEach(function(listener) {
            return listener.call(_this, oldSize, newSize);
        });
    };
    DevicePixelContentBoxBinding.prototype._chooseAndInitObserver = function() {
        var _this = this;
        if (!this._allowResizeObserver) {
            this._initDevicePixelRatioObservable();
            return;
        }
        isDevicePixelContentBoxSupported().then(function(isSupported) {
            return isSupported ? _this._initResizeObserver() : _this._initDevicePixelRatioObservable();
        });
    };
    // devicePixelRatio approach
    DevicePixelContentBoxBinding.prototype._initDevicePixelRatioObservable = function() {
        var _this = this;
        if (this._canvasElement === null) // it looks like we are already dead
        return;
        var win = canvasElementWindow(this._canvasElement);
        if (win === null) throw new Error('No window is associated with the canvas');
        this._devicePixelRatioObservable = (0, _devicePixelRatioMjs.createObservable)(win);
        this._devicePixelRatioObservable.subscribe(function() {
            return _this._invalidateBitmapSize();
        });
        this._invalidateBitmapSize();
    };
    DevicePixelContentBoxBinding.prototype._invalidateBitmapSize = function() {
        var _a, _b;
        if (this._canvasElement === null) // it looks like we are already dead
        return;
        var win = canvasElementWindow(this._canvasElement);
        if (win === null) return;
        var ratio = (_b = (_a = this._devicePixelRatioObservable) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : win.devicePixelRatio;
        var canvasRects = this._canvasElement.getClientRects();
        var newSize = // eslint-disable-next-line no-negated-condition
        canvasRects[0] !== undefined ? predictedBitmapSize(canvasRects[0], ratio) : (0, _sizeMjs.size)({
            width: this._canvasElementClientSize.width * ratio,
            height: this._canvasElementClientSize.height * ratio
        });
        this._suggestNewBitmapSize(newSize);
    };
    // ResizeObserver approach
    DevicePixelContentBoxBinding.prototype._initResizeObserver = function() {
        var _this = this;
        if (this._canvasElement === null) // it looks like we are already dead
        return;
        this._canvasElementResizeObserver = new ResizeObserver(function(entries) {
            var entry = entries.find(function(entry) {
                return entry.target === _this._canvasElement;
            });
            if (!entry || !entry.devicePixelContentBoxSize || !entry.devicePixelContentBoxSize[0]) return;
            var entrySize = entry.devicePixelContentBoxSize[0];
            var newSize = (0, _sizeMjs.size)({
                width: entrySize.inlineSize,
                height: entrySize.blockSize
            });
            _this._suggestNewBitmapSize(newSize);
        });
        this._canvasElementResizeObserver.observe(this._canvasElement, {
            box: 'device-pixel-content-box'
        });
    };
    return DevicePixelContentBoxBinding;
}();
function bindTo(canvasElement, target) {
    if (target.type === 'device-pixel-content-box') return new DevicePixelContentBoxBinding(canvasElement, target.transform, target.options);
    throw new Error('Unsupported binding target');
}
function canvasElementWindow(canvasElement) {
    // According to DOM Level 2 Core specification, ownerDocument should never be null for HTMLCanvasElement
    // see https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#node-ownerDoc
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return canvasElement.ownerDocument.defaultView;
}
function isDevicePixelContentBoxSupported() {
    return new Promise(function(resolve) {
        var ro = new ResizeObserver(function(entries) {
            resolve(entries.every(function(entry) {
                return 'devicePixelContentBoxSize' in entry;
            }));
            ro.disconnect();
        });
        ro.observe(document.body, {
            box: 'device-pixel-content-box'
        });
    }).catch(function() {
        return false;
    });
}
function predictedBitmapSize(canvasRect, ratio) {
    return (0, _sizeMjs.size)({
        width: Math.round(canvasRect.left * ratio + canvasRect.width * ratio) - Math.round(canvasRect.left * ratio),
        height: Math.round(canvasRect.top * ratio + canvasRect.height * ratio) - Math.round(canvasRect.top * ratio)
    });
}

},{"./size.mjs":"bJXHM","./device-pixel-ratio.mjs":"dcJAu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dcJAu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createObservable", ()=>createObservable);
var Observable = /** @class */ function() {
    function Observable(win) {
        var _this = this;
        this._resolutionListener = function() {
            return _this._onResolutionChanged();
        };
        this._resolutionMediaQueryList = null;
        this._observers = [];
        this._window = win;
        this._installResolutionListener();
    }
    Observable.prototype.dispose = function() {
        this._uninstallResolutionListener();
        this._window = null;
    };
    Object.defineProperty(Observable.prototype, "value", {
        get: function() {
            return this._window.devicePixelRatio;
        },
        enumerable: false,
        configurable: true
    });
    Observable.prototype.subscribe = function(next) {
        var _this = this;
        var observer = {
            next: next
        };
        this._observers.push(observer);
        return {
            unsubscribe: function() {
                _this._observers = _this._observers.filter(function(o) {
                    return o !== observer;
                });
            }
        };
    };
    Observable.prototype._installResolutionListener = function() {
        if (this._resolutionMediaQueryList !== null) throw new Error('Resolution listener is already installed');
        var dppx = this._window.devicePixelRatio;
        this._resolutionMediaQueryList = this._window.matchMedia("all and (resolution: ".concat(dppx, "dppx)"));
        // IE and some versions of Edge do not support addEventListener/removeEventListener, and we are going to use the deprecated addListener/removeListener
        this._resolutionMediaQueryList.addListener(this._resolutionListener);
    };
    Observable.prototype._uninstallResolutionListener = function() {
        if (this._resolutionMediaQueryList !== null) {
            // IE and some versions of Edge do not support addEventListener/removeEventListener, and we are going to use the deprecated addListener/removeListener
            this._resolutionMediaQueryList.removeListener(this._resolutionListener);
            this._resolutionMediaQueryList = null;
        }
    };
    Observable.prototype._reinstallResolutionListener = function() {
        this._uninstallResolutionListener();
        this._installResolutionListener();
    };
    Observable.prototype._onResolutionChanged = function() {
        var _this = this;
        this._observers.forEach(function(observer) {
            return observer.next(_this._window.devicePixelRatio);
        });
        this._reinstallResolutionListener();
    };
    return Observable;
}();
function createObservable(win) {
    return new Observable(win);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8gnP":[function(require,module,exports,__globalThis) {
/**
 * @experimental
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CanvasRenderingTarget2D", ()=>CanvasRenderingTarget2D);
/**
 * @experimental
 */ parcelHelpers.export(exports, "createCanvasRenderingTarget2D", ()=>createCanvasRenderingTarget2D);
/**
 * @experimental
 */ parcelHelpers.export(exports, "tryCreateCanvasRenderingTarget2D", ()=>tryCreateCanvasRenderingTarget2D);
var CanvasRenderingTarget2D = /** @class */ function() {
    function CanvasRenderingTarget2D(context, mediaSize, bitmapSize) {
        if (mediaSize.width === 0 || mediaSize.height === 0) throw new TypeError('Rendering target could only be created on a media with positive width and height');
        this._mediaSize = mediaSize;
        // !Number.isInteger(bitmapSize.width) || !Number.isInteger(bitmapSize.height)
        if (bitmapSize.width === 0 || bitmapSize.height === 0) throw new TypeError('Rendering target could only be created using a bitmap with positive integer width and height');
        this._bitmapSize = bitmapSize;
        this._context = context;
    }
    CanvasRenderingTarget2D.prototype.useMediaCoordinateSpace = function(f) {
        try {
            this._context.save();
            // do not use resetTransform to support old versions of Edge
            this._context.setTransform(1, 0, 0, 1, 0, 0);
            this._context.scale(this._horizontalPixelRatio, this._verticalPixelRatio);
            return f({
                context: this._context,
                mediaSize: this._mediaSize
            });
        } finally{
            this._context.restore();
        }
    };
    CanvasRenderingTarget2D.prototype.useBitmapCoordinateSpace = function(f) {
        try {
            this._context.save();
            // do not use resetTransform to support old versions of Edge
            this._context.setTransform(1, 0, 0, 1, 0, 0);
            return f({
                context: this._context,
                mediaSize: this._mediaSize,
                bitmapSize: this._bitmapSize,
                horizontalPixelRatio: this._horizontalPixelRatio,
                verticalPixelRatio: this._verticalPixelRatio
            });
        } finally{
            this._context.restore();
        }
    };
    Object.defineProperty(CanvasRenderingTarget2D.prototype, "_horizontalPixelRatio", {
        get: function() {
            return this._bitmapSize.width / this._mediaSize.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasRenderingTarget2D.prototype, "_verticalPixelRatio", {
        get: function() {
            return this._bitmapSize.height / this._mediaSize.height;
        },
        enumerable: false,
        configurable: true
    });
    return CanvasRenderingTarget2D;
}();
function createCanvasRenderingTarget2D(binding, contextOptions) {
    var mediaSize = binding.canvasElementClientSize;
    var bitmapSize = binding.bitmapSize;
    var context = binding.canvasElement.getContext('2d', contextOptions);
    if (context === null) throw new Error('Could not get 2d drawing context from bound canvas element. Has the canvas already been set to a different context mode?');
    return new CanvasRenderingTarget2D(context, mediaSize, bitmapSize);
}
function tryCreateCanvasRenderingTarget2D(binding, contextOptions) {
    var mediaSize = binding.canvasElementClientSize;
    if (mediaSize.width === 0 || mediaSize.height === 0) return null;
    var bitmapSize = binding.bitmapSize;
    if (bitmapSize.width === 0 || bitmapSize.height === 0) return null;
    var context = binding.canvasElement.getContext('2d', contextOptions);
    if (context === null) return null;
    return new CanvasRenderingTarget2D(context, mediaSize, bitmapSize);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["j4Td5","duU8f"], "duU8f", "parcelRequire94c2")

//# sourceMappingURL=index.f85271f3.js.map
