// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__assign = void 0;
exports.__read = __read;
exports.__rest = __rest;
exports.__spreadArray = __spreadArray;
exports.__values = __values;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
exports.__assign = __assign;
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
},{}],"node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NodeType = exports.IGNORED_NODE = void 0;
exports.addHoverClass = addHoverClass;
exports.buildNodeWithSN = buildNodeWithSN;
exports.createCache = createCache;
exports.is2DCanvasBlank = is2DCanvasBlank;
exports.isElement = isElement;
exports.isShadowRoot = isShadowRoot;
exports.maskInputValue = maskInputValue;
exports.needMaskingText = needMaskingText;
exports.rebuild = rebuild;
exports.serializeNodeWithId = serializeNodeWithId;
exports.snapshot = snapshot;
exports.transformAttribute = transformAttribute;
var NodeType;
(function (NodeType) {
  NodeType[NodeType["Document"] = 0] = "Document";
  NodeType[NodeType["DocumentType"] = 1] = "DocumentType";
  NodeType[NodeType["Element"] = 2] = "Element";
  NodeType[NodeType["Text"] = 3] = "Text";
  NodeType[NodeType["CDATA"] = 4] = "CDATA";
  NodeType[NodeType["Comment"] = 5] = "Comment";
})(NodeType || (exports.NodeType = NodeType = {}));
function isElement(n) {
  return n.nodeType === n.ELEMENT_NODE;
}
function isShadowRoot(n) {
  var _a;
  var host = (_a = n) === null || _a === void 0 ? void 0 : _a.host;
  return Boolean(host && host.shadowRoot && host.shadowRoot === n);
}
function maskInputValue(_a) {
  var maskInputOptions = _a.maskInputOptions,
    tagName = _a.tagName,
    type = _a.type,
    value = _a.value,
    maskInputFn = _a.maskInputFn;
  var text = value || '';
  if (maskInputOptions[tagName.toLowerCase()] || maskInputOptions[type]) {
    if (maskInputFn) {
      text = maskInputFn(text);
    } else {
      text = '*'.repeat(text.length);
    }
  }
  return text;
}
var ORIGINAL_ATTRIBUTE_NAME = '__rrweb_original__';
function is2DCanvasBlank(canvas) {
  var ctx = canvas.getContext('2d');
  if (!ctx) return true;
  var chunkSize = 50;
  for (var x = 0; x < canvas.width; x += chunkSize) {
    for (var y = 0; y < canvas.height; y += chunkSize) {
      var getImageData = ctx.getImageData;
      var originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData ? getImageData[ORIGINAL_ATTRIBUTE_NAME] : getImageData;
      var pixelBuffer = new Uint32Array(originalGetImageData.call(ctx, x, y, Math.min(chunkSize, canvas.width - x), Math.min(chunkSize, canvas.height - y)).data.buffer);
      if (pixelBuffer.some(function (pixel) {
        return pixel !== 0;
      })) return false;
    }
  }
  return true;
}
var _id = 1;
var tagNameRegex = new RegExp('[^a-z0-9-_:]');
var IGNORED_NODE = exports.IGNORED_NODE = -2;
function genId() {
  return _id++;
}
function getValidTagName(element) {
  if (element instanceof HTMLFormElement) {
    return 'form';
  }
  var processedTagName = element.tagName.toLowerCase().trim();
  if (tagNameRegex.test(processedTagName)) {
    return 'div';
  }
  return processedTagName;
}
function getCssRulesString(s) {
  try {
    var rules = s.rules || s.cssRules;
    return rules ? Array.from(rules).map(getCssRuleString).join('') : null;
  } catch (error) {
    return null;
  }
}
function getCssRuleString(rule) {
  var cssStringified = rule.cssText;
  if (isCSSImportRule(rule)) {
    try {
      cssStringified = getCssRulesString(rule.styleSheet) || cssStringified;
    } catch (_a) {}
  }
  return cssStringified;
}
function isCSSImportRule(rule) {
  return 'styleSheet' in rule;
}
function stringifyStyleSheet(sheet) {
  return sheet.cssRules ? Array.from(sheet.cssRules).map(function (rule) {
    return rule.cssText || '';
  }).join('') : '';
}
function extractOrigin(url) {
  var origin = '';
  if (url.indexOf('//') > -1) {
    origin = url.split('/').slice(0, 3).join('/');
  } else {
    origin = url.split('/')[0];
  }
  origin = origin.split('?')[0];
  return origin;
}
var canvasService;
var canvasCtx;
var URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
var RELATIVE_PATH = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/;
var DATA_URI = /^(data:)([^,]*),(.*)/i;
function absoluteToStylesheet(cssText, href) {
  return (cssText || '').replace(URL_IN_CSS_REF, function (origin, quote1, path1, quote2, path2, path3) {
    var filePath = path1 || path2 || path3;
    var maybeQuote = quote1 || quote2 || '';
    if (!filePath) {
      return origin;
    }
    if (!RELATIVE_PATH.test(filePath)) {
      return "url(" + maybeQuote + filePath + maybeQuote + ")";
    }
    if (DATA_URI.test(filePath)) {
      return "url(" + maybeQuote + filePath + maybeQuote + ")";
    }
    if (filePath[0] === '/') {
      return "url(" + maybeQuote + (extractOrigin(href) + filePath) + maybeQuote + ")";
    }
    var stack = href.split('/');
    var parts = filePath.split('/');
    stack.pop();
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
      var part = parts_1[_i];
      if (part === '.') {
        continue;
      } else if (part === '..') {
        stack.pop();
      } else {
        stack.push(part);
      }
    }
    return "url(" + maybeQuote + stack.join('/') + maybeQuote + ")";
  });
}
var SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
var SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
  if (attributeValue.trim() === '') {
    return attributeValue;
  }
  var pos = 0;
  function collectCharacters(regEx) {
    var chars;
    var match = regEx.exec(attributeValue.substring(pos));
    if (match) {
      chars = match[0];
      pos += chars.length;
      return chars;
    }
    return '';
  }
  var output = [];
  while (true) {
    collectCharacters(SRCSET_COMMAS_OR_SPACES);
    if (pos >= attributeValue.length) {
      break;
    }
    var url = collectCharacters(SRCSET_NOT_SPACES);
    if (url.slice(-1) === ',') {
      url = absoluteToDoc(doc, url.substring(0, url.length - 1));
      output.push(url);
    } else {
      var descriptorsStr = '';
      url = absoluteToDoc(doc, url);
      var inParens = false;
      while (true) {
        var c = attributeValue.charAt(pos);
        if (c === '') {
          output.push((url + descriptorsStr).trim());
          break;
        } else if (!inParens) {
          if (c === ',') {
            pos += 1;
            output.push((url + descriptorsStr).trim());
            break;
          } else if (c === '(') {
            inParens = true;
          }
        } else {
          if (c === ')') {
            inParens = false;
          }
        }
        descriptorsStr += c;
        pos += 1;
      }
    }
  }
  return output.join(', ');
}
function absoluteToDoc(doc, attributeValue) {
  if (!attributeValue || attributeValue.trim() === '') {
    return attributeValue;
  }
  var a = doc.createElement('a');
  a.href = attributeValue;
  return a.href;
}
function isSVGElement(el) {
  return Boolean(el.tagName === 'svg' || el.ownerSVGElement);
}
function getHref() {
  var a = document.createElement('a');
  a.href = '';
  return a.href;
}
function transformAttribute(doc, tagName, name, value) {
  if (name === 'src' || name === 'href' && value) {
    return absoluteToDoc(doc, value);
  } else if (name === 'xlink:href' && value && value[0] !== '#') {
    return absoluteToDoc(doc, value);
  } else if (name === 'background' && value && (tagName === 'table' || tagName === 'td' || tagName === 'th')) {
    return absoluteToDoc(doc, value);
  } else if (name === 'srcset' && value) {
    return getAbsoluteSrcsetString(doc, value);
  } else if (name === 'style' && value) {
    return absoluteToStylesheet(value, getHref());
  } else if (tagName === 'object' && name === 'data' && value) {
    return absoluteToDoc(doc, value);
  } else {
    return value;
  }
}
function _isBlockedElement(element, blockClass, blockSelector) {
  if (typeof blockClass === 'string') {
    if (element.classList.contains(blockClass)) {
      return true;
    }
  } else {
    for (var eIndex = 0; eIndex < element.classList.length; eIndex++) {
      var className = element.classList[eIndex];
      if (blockClass.test(className)) {
        return true;
      }
    }
  }
  if (blockSelector) {
    return element.matches(blockSelector);
  }
  return false;
}
function needMaskingText(node, maskTextClass, maskTextSelector) {
  if (!node) {
    return false;
  }
  if (node.nodeType === node.ELEMENT_NODE) {
    if (typeof maskTextClass === 'string') {
      if (node.classList.contains(maskTextClass)) {
        return true;
      }
    } else {
      for (var eIndex = 0; eIndex < node.classList.length; eIndex++) {
        var className = node.classList[eIndex];
        if (maskTextClass.test(className)) {
          return true;
        }
      }
    }
    if (maskTextSelector) {
      if (node.matches(maskTextSelector)) {
        return true;
      }
    }
    return needMaskingText(node.parentNode, maskTextClass, maskTextSelector);
  }
  if (node.nodeType === node.TEXT_NODE) {
    return needMaskingText(node.parentNode, maskTextClass, maskTextSelector);
  }
  return needMaskingText(node.parentNode, maskTextClass, maskTextSelector);
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
  var win = iframeEl.contentWindow;
  if (!win) {
    return;
  }
  var fired = false;
  var readyState;
  try {
    readyState = win.document.readyState;
  } catch (error) {
    return;
  }
  if (readyState !== 'complete') {
    var timer_1 = setTimeout(function () {
      if (!fired) {
        listener();
        fired = true;
      }
    }, iframeLoadTimeout);
    iframeEl.addEventListener('load', function () {
      clearTimeout(timer_1);
      fired = true;
      listener();
    });
    return;
  }
  var blankUrl = 'about:blank';
  if (win.location.href !== blankUrl || iframeEl.src === blankUrl || iframeEl.src === '') {
    setTimeout(listener, 0);
    return;
  }
  iframeEl.addEventListener('load', listener);
}
function serializeNode(n, options) {
  var _a;
  var doc = options.doc,
    blockClass = options.blockClass,
    blockSelector = options.blockSelector,
    maskTextClass = options.maskTextClass,
    maskTextSelector = options.maskTextSelector,
    inlineStylesheet = options.inlineStylesheet,
    _b = options.maskInputOptions,
    maskInputOptions = _b === void 0 ? {} : _b,
    maskTextFn = options.maskTextFn,
    maskInputFn = options.maskInputFn,
    _c = options.dataURLOptions,
    dataURLOptions = _c === void 0 ? {} : _c,
    inlineImages = options.inlineImages,
    recordCanvas = options.recordCanvas,
    keepIframeSrcFn = options.keepIframeSrcFn;
  var rootId;
  if (doc.__sn) {
    var docId = doc.__sn.id;
    rootId = docId === 1 ? undefined : docId;
  }
  switch (n.nodeType) {
    case n.DOCUMENT_NODE:
      if (n.compatMode !== 'CSS1Compat') {
        return {
          type: NodeType.Document,
          childNodes: [],
          compatMode: n.compatMode,
          rootId: rootId
        };
      } else {
        return {
          type: NodeType.Document,
          childNodes: [],
          rootId: rootId
        };
      }
    case n.DOCUMENT_TYPE_NODE:
      return {
        type: NodeType.DocumentType,
        name: n.name,
        publicId: n.publicId,
        systemId: n.systemId,
        rootId: rootId
      };
    case n.ELEMENT_NODE:
      var needBlock = _isBlockedElement(n, blockClass, blockSelector);
      var tagName = getValidTagName(n);
      var attributes_1 = {};
      for (var _i = 0, _d = Array.from(n.attributes); _i < _d.length; _i++) {
        var _e = _d[_i],
          name_1 = _e.name,
          value = _e.value;
        attributes_1[name_1] = transformAttribute(doc, tagName, name_1, value);
      }
      if (tagName === 'link' && inlineStylesheet) {
        var stylesheet = Array.from(doc.styleSheets).find(function (s) {
          return s.href === n.href;
        });
        var cssText = null;
        if (stylesheet) {
          cssText = getCssRulesString(stylesheet);
        }
        if (cssText) {
          delete attributes_1.rel;
          delete attributes_1.href;
          attributes_1._cssText = absoluteToStylesheet(cssText, stylesheet.href);
        }
      }
      if (tagName === 'style' && n.sheet && !(n.innerText || n.textContent || '').trim().length) {
        var cssText = getCssRulesString(n.sheet);
        if (cssText) {
          attributes_1._cssText = absoluteToStylesheet(cssText, getHref());
        }
      }
      if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
        var value = n.value;
        if (attributes_1.type !== 'radio' && attributes_1.type !== 'checkbox' && attributes_1.type !== 'submit' && attributes_1.type !== 'button' && value) {
          attributes_1.value = maskInputValue({
            type: attributes_1.type,
            tagName: tagName,
            value: value,
            maskInputOptions: maskInputOptions,
            maskInputFn: maskInputFn
          });
        } else if (n.checked) {
          attributes_1.checked = n.checked;
        }
      }
      if (tagName === 'option') {
        if (n.selected && !maskInputOptions['select']) {
          attributes_1.selected = true;
        } else {
          delete attributes_1.selected;
        }
      }
      if (tagName === 'canvas' && recordCanvas) {
        if (n.__context === '2d') {
          if (!is2DCanvasBlank(n)) {
            attributes_1.rr_dataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
          }
        } else if (!('__context' in n)) {
          var canvasDataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
          var blankCanvas = document.createElement('canvas');
          blankCanvas.width = n.width;
          blankCanvas.height = n.height;
          var blankCanvasDataURL = blankCanvas.toDataURL(dataURLOptions.type, dataURLOptions.quality);
          if (canvasDataURL !== blankCanvasDataURL) {
            attributes_1.rr_dataURL = canvasDataURL;
          }
        }
      }
      if (tagName === 'img' && inlineImages) {
        if (!canvasService) {
          canvasService = doc.createElement('canvas');
          canvasCtx = canvasService.getContext('2d');
        }
        var image_1 = n;
        var oldValue_1 = image_1.crossOrigin;
        image_1.crossOrigin = 'anonymous';
        var recordInlineImage = function () {
          try {
            canvasService.width = image_1.naturalWidth;
            canvasService.height = image_1.naturalHeight;
            canvasCtx.drawImage(image_1, 0, 0);
            attributes_1.rr_dataURL = canvasService.toDataURL(dataURLOptions.type, dataURLOptions.quality);
          } catch (err) {
            console.warn("Cannot inline img src=" + image_1.currentSrc + "! Error: " + err);
          }
          oldValue_1 ? attributes_1.crossOrigin = oldValue_1 : delete attributes_1.crossOrigin;
        };
        if (image_1.complete && image_1.naturalWidth !== 0) recordInlineImage();else image_1.onload = recordInlineImage;
      }
      if (tagName === 'audio' || tagName === 'video') {
        attributes_1.rr_mediaState = n.paused ? 'paused' : 'played';
        attributes_1.rr_mediaCurrentTime = n.currentTime;
      }
      if (n.scrollLeft) {
        attributes_1.rr_scrollLeft = n.scrollLeft;
      }
      if (n.scrollTop) {
        attributes_1.rr_scrollTop = n.scrollTop;
      }
      if (needBlock) {
        var _f = n.getBoundingClientRect(),
          width = _f.width,
          height = _f.height;
        attributes_1 = {
          "class": attributes_1["class"],
          rr_width: width + "px",
          rr_height: height + "px"
        };
      }
      if (tagName === 'iframe' && !keepIframeSrcFn(attributes_1.src)) {
        if (!n.contentDocument) {
          attributes_1.rr_src = attributes_1.src;
        }
        delete attributes_1.src;
      }
      return {
        type: NodeType.Element,
        tagName: tagName,
        attributes: attributes_1,
        childNodes: [],
        isSVG: isSVGElement(n) || undefined,
        needBlock: needBlock,
        rootId: rootId
      };
    case n.TEXT_NODE:
      var parentTagName = n.parentNode && n.parentNode.tagName;
      var textContent = n.textContent;
      var isStyle = parentTagName === 'STYLE' ? true : undefined;
      var isScript = parentTagName === 'SCRIPT' ? true : undefined;
      if (isStyle && textContent) {
        try {
          if (n.nextSibling || n.previousSibling) {} else if ((_a = n.parentNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) {
            textContent = stringifyStyleSheet(n.parentNode.sheet);
          }
        } catch (err) {
          console.warn("Cannot get CSS styles from text's parentNode. Error: " + err, n);
        }
        textContent = absoluteToStylesheet(textContent, getHref());
      }
      if (isScript) {
        textContent = 'SCRIPT_PLACEHOLDER';
      }
      if (!isStyle && !isScript && needMaskingText(n, maskTextClass, maskTextSelector) && textContent) {
        textContent = maskTextFn ? maskTextFn(textContent) : textContent.replace(/[\S]/g, '*');
      }
      return {
        type: NodeType.Text,
        textContent: textContent || '',
        isStyle: isStyle,
        rootId: rootId
      };
    case n.CDATA_SECTION_NODE:
      return {
        type: NodeType.CDATA,
        textContent: '',
        rootId: rootId
      };
    case n.COMMENT_NODE:
      return {
        type: NodeType.Comment,
        textContent: n.textContent || '',
        rootId: rootId
      };
    default:
      return false;
  }
}
function lowerIfExists(maybeAttr) {
  if (maybeAttr === undefined) {
    return '';
  } else {
    return maybeAttr.toLowerCase();
  }
}
function slimDOMExcluded(sn, slimDOMOptions) {
  if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
    return true;
  } else if (sn.type === NodeType.Element) {
    if (slimDOMOptions.script && (sn.tagName === 'script' || sn.tagName === 'link' && sn.attributes.rel === 'preload' && sn.attributes.as === 'script' || sn.tagName === 'link' && sn.attributes.rel === 'prefetch' && typeof sn.attributes.href === 'string' && sn.attributes.href.endsWith('.js'))) {
      return true;
    } else if (slimDOMOptions.headFavicon && (sn.tagName === 'link' && sn.attributes.rel === 'shortcut icon' || sn.tagName === 'meta' && (lowerIfExists(sn.attributes.name).match(/^msapplication-tile(image|color)$/) || lowerIfExists(sn.attributes.name) === 'application-name' || lowerIfExists(sn.attributes.rel) === 'icon' || lowerIfExists(sn.attributes.rel) === 'apple-touch-icon' || lowerIfExists(sn.attributes.rel) === 'shortcut icon'))) {
      return true;
    } else if (sn.tagName === 'meta') {
      if (slimDOMOptions.headMetaDescKeywords && lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
        return true;
      } else if (slimDOMOptions.headMetaSocial && (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) || lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) || lowerIfExists(sn.attributes.name) === 'pinterest')) {
        return true;
      } else if (slimDOMOptions.headMetaRobots && (lowerIfExists(sn.attributes.name) === 'robots' || lowerIfExists(sn.attributes.name) === 'googlebot' || lowerIfExists(sn.attributes.name) === 'bingbot')) {
        return true;
      } else if (slimDOMOptions.headMetaHttpEquiv && sn.attributes['http-equiv'] !== undefined) {
        return true;
      } else if (slimDOMOptions.headMetaAuthorship && (lowerIfExists(sn.attributes.name) === 'author' || lowerIfExists(sn.attributes.name) === 'generator' || lowerIfExists(sn.attributes.name) === 'framework' || lowerIfExists(sn.attributes.name) === 'publisher' || lowerIfExists(sn.attributes.name) === 'progid' || lowerIfExists(sn.attributes.property).match(/^article:/) || lowerIfExists(sn.attributes.property).match(/^product:/))) {
        return true;
      } else if (slimDOMOptions.headMetaVerification && (lowerIfExists(sn.attributes.name) === 'google-site-verification' || lowerIfExists(sn.attributes.name) === 'yandex-verification' || lowerIfExists(sn.attributes.name) === 'csrf-token' || lowerIfExists(sn.attributes.name) === 'p:domain_verify' || lowerIfExists(sn.attributes.name) === 'verify-v1' || lowerIfExists(sn.attributes.name) === 'verification' || lowerIfExists(sn.attributes.name) === 'shopify-checkout-api-token')) {
        return true;
      }
    }
  }
  return false;
}
function serializeNodeWithId(n, options) {
  var doc = options.doc,
    map = options.map,
    blockClass = options.blockClass,
    blockSelector = options.blockSelector,
    maskTextClass = options.maskTextClass,
    maskTextSelector = options.maskTextSelector,
    _a = options.skipChild,
    skipChild = _a === void 0 ? false : _a,
    _b = options.inlineStylesheet,
    inlineStylesheet = _b === void 0 ? true : _b,
    _c = options.maskInputOptions,
    maskInputOptions = _c === void 0 ? {} : _c,
    maskTextFn = options.maskTextFn,
    maskInputFn = options.maskInputFn,
    slimDOMOptions = options.slimDOMOptions,
    _d = options.dataURLOptions,
    dataURLOptions = _d === void 0 ? {} : _d,
    _e = options.inlineImages,
    inlineImages = _e === void 0 ? false : _e,
    _f = options.recordCanvas,
    recordCanvas = _f === void 0 ? false : _f,
    onSerialize = options.onSerialize,
    onIframeLoad = options.onIframeLoad,
    _g = options.iframeLoadTimeout,
    iframeLoadTimeout = _g === void 0 ? 5000 : _g,
    _h = options.keepIframeSrcFn,
    keepIframeSrcFn = _h === void 0 ? function () {
      return false;
    } : _h;
  var _j = options.preserveWhiteSpace,
    preserveWhiteSpace = _j === void 0 ? true : _j;
  var _serializedNode = serializeNode(n, {
    doc: doc,
    blockClass: blockClass,
    blockSelector: blockSelector,
    maskTextClass: maskTextClass,
    maskTextSelector: maskTextSelector,
    inlineStylesheet: inlineStylesheet,
    maskInputOptions: maskInputOptions,
    maskTextFn: maskTextFn,
    maskInputFn: maskInputFn,
    dataURLOptions: dataURLOptions,
    inlineImages: inlineImages,
    recordCanvas: recordCanvas,
    keepIframeSrcFn: keepIframeSrcFn
  });
  if (!_serializedNode) {
    console.warn(n, 'not serialized');
    return null;
  }
  var id;
  if ('__sn' in n) {
    id = n.__sn.id;
  } else if (slimDOMExcluded(_serializedNode, slimDOMOptions) || !preserveWhiteSpace && _serializedNode.type === NodeType.Text && !_serializedNode.isStyle && !_serializedNode.textContent.replace(/^\s+|\s+$/gm, '').length) {
    id = IGNORED_NODE;
  } else {
    id = genId();
  }
  var serializedNode = Object.assign(_serializedNode, {
    id: id
  });
  n.__sn = serializedNode;
  if (id === IGNORED_NODE) {
    return null;
  }
  map[id] = n;
  if (onSerialize) {
    onSerialize(n);
  }
  var recordChild = !skipChild;
  if (serializedNode.type === NodeType.Element) {
    recordChild = recordChild && !serializedNode.needBlock;
    delete serializedNode.needBlock;
    if (n.shadowRoot) serializedNode.isShadowHost = true;
  }
  if ((serializedNode.type === NodeType.Document || serializedNode.type === NodeType.Element) && recordChild) {
    if (slimDOMOptions.headWhitespace && _serializedNode.type === NodeType.Element && _serializedNode.tagName === 'head') {
      preserveWhiteSpace = false;
    }
    var bypassOptions = {
      doc: doc,
      map: map,
      blockClass: blockClass,
      blockSelector: blockSelector,
      maskTextClass: maskTextClass,
      maskTextSelector: maskTextSelector,
      skipChild: skipChild,
      inlineStylesheet: inlineStylesheet,
      maskInputOptions: maskInputOptions,
      maskTextFn: maskTextFn,
      maskInputFn: maskInputFn,
      slimDOMOptions: slimDOMOptions,
      dataURLOptions: dataURLOptions,
      inlineImages: inlineImages,
      recordCanvas: recordCanvas,
      preserveWhiteSpace: preserveWhiteSpace,
      onSerialize: onSerialize,
      onIframeLoad: onIframeLoad,
      iframeLoadTimeout: iframeLoadTimeout,
      keepIframeSrcFn: keepIframeSrcFn
    };
    for (var _i = 0, _k = Array.from(n.childNodes); _i < _k.length; _i++) {
      var childN = _k[_i];
      var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
      if (serializedChildNode) {
        serializedNode.childNodes.push(serializedChildNode);
      }
    }
    if (isElement(n) && n.shadowRoot) {
      for (var _l = 0, _m = Array.from(n.shadowRoot.childNodes); _l < _m.length; _l++) {
        var childN = _m[_l];
        var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
        if (serializedChildNode) {
          serializedChildNode.isShadow = true;
          serializedNode.childNodes.push(serializedChildNode);
        }
      }
    }
  }
  if (n.parentNode && isShadowRoot(n.parentNode)) {
    serializedNode.isShadow = true;
  }
  if (serializedNode.type === NodeType.Element && serializedNode.tagName === 'iframe') {
    onceIframeLoaded(n, function () {
      var iframeDoc = n.contentDocument;
      if (iframeDoc && onIframeLoad) {
        var serializedIframeNode = serializeNodeWithId(iframeDoc, {
          doc: iframeDoc,
          map: map,
          blockClass: blockClass,
          blockSelector: blockSelector,
          maskTextClass: maskTextClass,
          maskTextSelector: maskTextSelector,
          skipChild: false,
          inlineStylesheet: inlineStylesheet,
          maskInputOptions: maskInputOptions,
          maskTextFn: maskTextFn,
          maskInputFn: maskInputFn,
          slimDOMOptions: slimDOMOptions,
          dataURLOptions: dataURLOptions,
          inlineImages: inlineImages,
          recordCanvas: recordCanvas,
          preserveWhiteSpace: preserveWhiteSpace,
          onSerialize: onSerialize,
          onIframeLoad: onIframeLoad,
          iframeLoadTimeout: iframeLoadTimeout,
          keepIframeSrcFn: keepIframeSrcFn
        });
        if (serializedIframeNode) {
          onIframeLoad(n, serializedIframeNode);
        }
      }
    }, iframeLoadTimeout);
  }
  return serializedNode;
}
function snapshot(n, options) {
  var _a = options || {},
    _b = _a.blockClass,
    blockClass = _b === void 0 ? 'rr-block' : _b,
    _c = _a.blockSelector,
    blockSelector = _c === void 0 ? null : _c,
    _d = _a.maskTextClass,
    maskTextClass = _d === void 0 ? 'rr-mask' : _d,
    _e = _a.maskTextSelector,
    maskTextSelector = _e === void 0 ? null : _e,
    _f = _a.inlineStylesheet,
    inlineStylesheet = _f === void 0 ? true : _f,
    _g = _a.inlineImages,
    inlineImages = _g === void 0 ? false : _g,
    _h = _a.recordCanvas,
    recordCanvas = _h === void 0 ? false : _h,
    _j = _a.maskAllInputs,
    maskAllInputs = _j === void 0 ? false : _j,
    maskTextFn = _a.maskTextFn,
    maskInputFn = _a.maskInputFn,
    _k = _a.slimDOM,
    slimDOM = _k === void 0 ? false : _k,
    dataURLOptions = _a.dataURLOptions,
    preserveWhiteSpace = _a.preserveWhiteSpace,
    onSerialize = _a.onSerialize,
    onIframeLoad = _a.onIframeLoad,
    iframeLoadTimeout = _a.iframeLoadTimeout,
    _l = _a.keepIframeSrcFn,
    keepIframeSrcFn = _l === void 0 ? function () {
      return false;
    } : _l;
  var idNodeMap = {};
  var maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    'datetime-local': true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true,
    password: true
  } : maskAllInputs === false ? {
    password: true
  } : maskAllInputs;
  var slimDOMOptions = slimDOM === true || slimDOM === 'all' ? {
    script: true,
    comment: true,
    headFavicon: true,
    headWhitespace: true,
    headMetaDescKeywords: slimDOM === 'all',
    headMetaSocial: true,
    headMetaRobots: true,
    headMetaHttpEquiv: true,
    headMetaAuthorship: true,
    headMetaVerification: true
  } : slimDOM === false ? {} : slimDOM;
  return [serializeNodeWithId(n, {
    doc: n,
    map: idNodeMap,
    blockClass: blockClass,
    blockSelector: blockSelector,
    maskTextClass: maskTextClass,
    maskTextSelector: maskTextSelector,
    skipChild: false,
    inlineStylesheet: inlineStylesheet,
    maskInputOptions: maskInputOptions,
    maskTextFn: maskTextFn,
    maskInputFn: maskInputFn,
    slimDOMOptions: slimDOMOptions,
    dataURLOptions: dataURLOptions,
    inlineImages: inlineImages,
    recordCanvas: recordCanvas,
    preserveWhiteSpace: preserveWhiteSpace,
    onSerialize: onSerialize,
    onIframeLoad: onIframeLoad,
    iframeLoadTimeout: iframeLoadTimeout,
    keepIframeSrcFn: keepIframeSrcFn
  }), idNodeMap];
}
var commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
function parse(css, options) {
  if (options === void 0) {
    options = {};
  }
  var lineno = 1;
  var column = 1;
  function updatePosition(str) {
    var lines = str.match(/\n/g);
    if (lines) {
      lineno += lines.length;
    }
    var i = str.lastIndexOf('\n');
    column = i === -1 ? column + str.length : str.length - i;
  }
  function position() {
    var start = {
      line: lineno,
      column: column
    };
    return function (node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }
  var Position = function () {
    function Position(start) {
      this.start = start;
      this.end = {
        line: lineno,
        column: column
      };
      this.source = options.source;
    }
    return Position;
  }();
  Position.prototype.content = css;
  var errorsList = [];
  function error(msg) {
    var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = css;
    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }
  function stylesheet() {
    var rulesList = rules();
    return {
      type: 'stylesheet',
      stylesheet: {
        source: options.source,
        rules: rulesList,
        parsingErrors: errorsList
      }
    };
  }
  function open() {
    return match(/^{\s*/);
  }
  function close() {
    return match(/^}/);
  }
  function rules() {
    var node;
    var rules = [];
    whitespace();
    comments(rules);
    while (css.length && css.charAt(0) !== '}' && (node = atrule() || rule())) {
      if (node !== false) {
        rules.push(node);
        comments(rules);
      }
    }
    return rules;
  }
  function match(re) {
    var m = re.exec(css);
    if (!m) {
      return;
    }
    var str = m[0];
    updatePosition(str);
    css = css.slice(str.length);
    return m;
  }
  function whitespace() {
    match(/^\s*/);
  }
  function comments(rules) {
    if (rules === void 0) {
      rules = [];
    }
    var c;
    while (c = comment()) {
      if (c !== false) {
        rules.push(c);
      }
      c = comment();
    }
    return rules;
  }
  function comment() {
    var pos = position();
    if ('/' !== css.charAt(0) || '*' !== css.charAt(1)) {
      return;
    }
    var i = 2;
    while ('' !== css.charAt(i) && ('*' !== css.charAt(i) || '/' !== css.charAt(i + 1))) {
      ++i;
    }
    i += 2;
    if ('' === css.charAt(i - 1)) {
      return error('End of comment missing');
    }
    var str = css.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    css = css.slice(i);
    column += 2;
    return pos({
      type: 'comment',
      comment: str
    });
  }
  function selector() {
    var m = match(/^([^{]+)/);
    if (!m) {
      return;
    }
    return trim(m[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '').replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) {
      return m.replace(/,/g, '\u200C');
    }).split(/\s*(?![^(]*\)),\s*/).map(function (s) {
      return s.replace(/\u200C/g, ',');
    });
  }
  function declaration() {
    var pos = position();
    var propMatch = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
    if (!propMatch) {
      return;
    }
    var prop = trim(propMatch[0]);
    if (!match(/^:\s*/)) {
      return error("property missing ':'");
    }
    var val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
    var ret = pos({
      type: 'declaration',
      property: prop.replace(commentre, ''),
      value: val ? trim(val[0]).replace(commentre, '') : ''
    });
    match(/^[;\s]*/);
    return ret;
  }
  function declarations() {
    var decls = [];
    if (!open()) {
      return error("missing '{'");
    }
    comments(decls);
    var decl;
    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
      decl = declaration();
    }
    if (!close()) {
      return error("missing '}'");
    }
    return decls;
  }
  function keyframe() {
    var m;
    var vals = [];
    var pos = position();
    while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
      vals.push(m[1]);
      match(/^,\s*/);
    }
    if (!vals.length) {
      return;
    }
    return pos({
      type: 'keyframe',
      values: vals,
      declarations: declarations()
    });
  }
  function atkeyframes() {
    var pos = position();
    var m = match(/^@([-\w]+)?keyframes\s*/);
    if (!m) {
      return;
    }
    var vendor = m[1];
    m = match(/^([-\w]+)\s*/);
    if (!m) {
      return error('@keyframes missing name');
    }
    var name = m[1];
    if (!open()) {
      return error("@keyframes missing '{'");
    }
    var frame;
    var frames = comments();
    while (frame = keyframe()) {
      frames.push(frame);
      frames = frames.concat(comments());
    }
    if (!close()) {
      return error("@keyframes missing '}'");
    }
    return pos({
      type: 'keyframes',
      name: name,
      vendor: vendor,
      keyframes: frames
    });
  }
  function atsupports() {
    var pos = position();
    var m = match(/^@supports *([^{]+)/);
    if (!m) {
      return;
    }
    var supports = trim(m[1]);
    if (!open()) {
      return error("@supports missing '{'");
    }
    var style = comments().concat(rules());
    if (!close()) {
      return error("@supports missing '}'");
    }
    return pos({
      type: 'supports',
      supports: supports,
      rules: style
    });
  }
  function athost() {
    var pos = position();
    var m = match(/^@host\s*/);
    if (!m) {
      return;
    }
    if (!open()) {
      return error("@host missing '{'");
    }
    var style = comments().concat(rules());
    if (!close()) {
      return error("@host missing '}'");
    }
    return pos({
      type: 'host',
      rules: style
    });
  }
  function atmedia() {
    var pos = position();
    var m = match(/^@media *([^{]+)/);
    if (!m) {
      return;
    }
    var media = trim(m[1]);
    if (!open()) {
      return error("@media missing '{'");
    }
    var style = comments().concat(rules());
    if (!close()) {
      return error("@media missing '}'");
    }
    return pos({
      type: 'media',
      media: media,
      rules: style
    });
  }
  function atcustommedia() {
    var pos = position();
    var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
    if (!m) {
      return;
    }
    return pos({
      type: 'custom-media',
      name: trim(m[1]),
      media: trim(m[2])
    });
  }
  function atpage() {
    var pos = position();
    var m = match(/^@page */);
    if (!m) {
      return;
    }
    var sel = selector() || [];
    if (!open()) {
      return error("@page missing '{'");
    }
    var decls = comments();
    var decl;
    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }
    if (!close()) {
      return error("@page missing '}'");
    }
    return pos({
      type: 'page',
      selectors: sel,
      declarations: decls
    });
  }
  function atdocument() {
    var pos = position();
    var m = match(/^@([-\w]+)?document *([^{]+)/);
    if (!m) {
      return;
    }
    var vendor = trim(m[1]);
    var doc = trim(m[2]);
    if (!open()) {
      return error("@document missing '{'");
    }
    var style = comments().concat(rules());
    if (!close()) {
      return error("@document missing '}'");
    }
    return pos({
      type: 'document',
      document: doc,
      vendor: vendor,
      rules: style
    });
  }
  function atfontface() {
    var pos = position();
    var m = match(/^@font-face\s*/);
    if (!m) {
      return;
    }
    if (!open()) {
      return error("@font-face missing '{'");
    }
    var decls = comments();
    var decl;
    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }
    if (!close()) {
      return error("@font-face missing '}'");
    }
    return pos({
      type: 'font-face',
      declarations: decls
    });
  }
  var atimport = _compileAtrule('import');
  var atcharset = _compileAtrule('charset');
  var atnamespace = _compileAtrule('namespace');
  function _compileAtrule(name) {
    var re = new RegExp('^@' + name + '\\s*([^;]+);');
    return function () {
      var pos = position();
      var m = match(re);
      if (!m) {
        return;
      }
      var ret = {
        type: name
      };
      ret[name] = m[1].trim();
      return pos(ret);
    };
  }
  function atrule() {
    if (css[0] !== '@') {
      return;
    }
    return atkeyframes() || atmedia() || atcustommedia() || atsupports() || atimport() || atcharset() || atnamespace() || atdocument() || atpage() || athost() || atfontface();
  }
  function rule() {
    var pos = position();
    var sel = selector();
    if (!sel) {
      return error('selector missing');
    }
    comments();
    return pos({
      type: 'rule',
      selectors: sel,
      declarations: declarations()
    });
  }
  return addParent(stylesheet());
}
function trim(str) {
  return str ? str.replace(/^\s+|\s+$/g, '') : '';
}
function addParent(obj, parent) {
  var isNode = obj && typeof obj.type === 'string';
  var childParent = isNode ? obj : parent;
  for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
    var k = _a[_i];
    var value = obj[k];
    if (Array.isArray(value)) {
      value.forEach(function (v) {
        addParent(v, childParent);
      });
    } else if (value && typeof value === 'object') {
      addParent(value, childParent);
    }
  }
  if (isNode) {
    Object.defineProperty(obj, 'parent', {
      configurable: true,
      writable: true,
      enumerable: false,
      value: parent || null
    });
  }
  return obj;
}
var tagMap = {
  script: 'noscript',
  altglyph: 'altGlyph',
  altglyphdef: 'altGlyphDef',
  altglyphitem: 'altGlyphItem',
  animatecolor: 'animateColor',
  animatemotion: 'animateMotion',
  animatetransform: 'animateTransform',
  clippath: 'clipPath',
  feblend: 'feBlend',
  fecolormatrix: 'feColorMatrix',
  fecomponenttransfer: 'feComponentTransfer',
  fecomposite: 'feComposite',
  feconvolvematrix: 'feConvolveMatrix',
  fediffuselighting: 'feDiffuseLighting',
  fedisplacementmap: 'feDisplacementMap',
  fedistantlight: 'feDistantLight',
  fedropshadow: 'feDropShadow',
  feflood: 'feFlood',
  fefunca: 'feFuncA',
  fefuncb: 'feFuncB',
  fefuncg: 'feFuncG',
  fefuncr: 'feFuncR',
  fegaussianblur: 'feGaussianBlur',
  feimage: 'feImage',
  femerge: 'feMerge',
  femergenode: 'feMergeNode',
  femorphology: 'feMorphology',
  feoffset: 'feOffset',
  fepointlight: 'fePointLight',
  fespecularlighting: 'feSpecularLighting',
  fespotlight: 'feSpotLight',
  fetile: 'feTile',
  feturbulence: 'feTurbulence',
  foreignobject: 'foreignObject',
  glyphref: 'glyphRef',
  lineargradient: 'linearGradient',
  radialgradient: 'radialGradient'
};
function getTagName(n) {
  var tagName = tagMap[n.tagName] ? tagMap[n.tagName] : n.tagName;
  if (tagName === 'link' && n.attributes._cssText) {
    tagName = 'style';
  }
  return tagName;
}
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
var HOVER_SELECTOR = /([^\\]):hover/;
var HOVER_SELECTOR_GLOBAL = new RegExp(HOVER_SELECTOR.source, 'g');
function addHoverClass(cssText, cache) {
  var cachedStyle = cache === null || cache === void 0 ? void 0 : cache.stylesWithHoverClass.get(cssText);
  if (cachedStyle) return cachedStyle;
  var ast = parse(cssText, {
    silent: true
  });
  if (!ast.stylesheet) {
    return cssText;
  }
  var selectors = [];
  ast.stylesheet.rules.forEach(function (rule) {
    if ('selectors' in rule) {
      (rule.selectors || []).forEach(function (selector) {
        if (HOVER_SELECTOR.test(selector)) {
          selectors.push(selector);
        }
      });
    }
  });
  if (selectors.length === 0) {
    return cssText;
  }
  var selectorMatcher = new RegExp(selectors.filter(function (selector, index) {
    return selectors.indexOf(selector) === index;
  }).sort(function (a, b) {
    return b.length - a.length;
  }).map(function (selector) {
    return escapeRegExp(selector);
  }).join('|'), 'g');
  var result = cssText.replace(selectorMatcher, function (selector) {
    var newSelector = selector.replace(HOVER_SELECTOR_GLOBAL, '$1.\\:hover');
    return selector + ", " + newSelector;
  });
  cache === null || cache === void 0 ? void 0 : cache.stylesWithHoverClass.set(cssText, result);
  return result;
}
function createCache() {
  var stylesWithHoverClass = new Map();
  return {
    stylesWithHoverClass: stylesWithHoverClass
  };
}
function buildNode(n, options) {
  var doc = options.doc,
    hackCss = options.hackCss,
    cache = options.cache;
  switch (n.type) {
    case NodeType.Document:
      return doc.implementation.createDocument(null, '', null);
    case NodeType.DocumentType:
      return doc.implementation.createDocumentType(n.name || 'html', n.publicId, n.systemId);
    case NodeType.Element:
      var tagName = getTagName(n);
      var node_1;
      if (n.isSVG) {
        node_1 = doc.createElementNS('http://www.w3.org/2000/svg', tagName);
      } else {
        node_1 = doc.createElement(tagName);
      }
      var _loop_1 = function (name_1) {
        if (!n.attributes.hasOwnProperty(name_1)) {
          return "continue";
        }
        var value = n.attributes[name_1];
        if (tagName === 'option' && name_1 === 'selected' && value === false) {
          return "continue";
        }
        value = typeof value === 'boolean' || typeof value === 'number' ? '' : value;
        if (!name_1.startsWith('rr_')) {
          var isTextarea = tagName === 'textarea' && name_1 === 'value';
          var isRemoteOrDynamicCss = tagName === 'style' && name_1 === '_cssText';
          if (isRemoteOrDynamicCss && hackCss) {
            value = addHoverClass(value, cache);
          }
          if (isTextarea || isRemoteOrDynamicCss) {
            var child = doc.createTextNode(value);
            for (var _i = 0, _a = Array.from(node_1.childNodes); _i < _a.length; _i++) {
              var c = _a[_i];
              if (c.nodeType === node_1.TEXT_NODE) {
                node_1.removeChild(c);
              }
            }
            node_1.appendChild(child);
            return "continue";
          }
          try {
            if (n.isSVG && name_1 === 'xlink:href') {
              node_1.setAttributeNS('http://www.w3.org/1999/xlink', name_1, value);
            } else if (name_1 === 'onload' || name_1 === 'onclick' || name_1.substring(0, 7) === 'onmouse') {
              node_1.setAttribute('_' + name_1, value);
            } else if (tagName === 'meta' && n.attributes['http-equiv'] === 'Content-Security-Policy' && name_1 === 'content') {
              node_1.setAttribute('csp-content', value);
              return "continue";
            } else if (tagName === 'link' && n.attributes.rel === 'preload' && n.attributes.as === 'script') {} else if (tagName === 'link' && n.attributes.rel === 'prefetch' && typeof n.attributes.href === 'string' && n.attributes.href.endsWith('.js')) {} else if (tagName === 'img' && n.attributes.srcset && n.attributes.rr_dataURL) {
              node_1.setAttribute('rrweb-original-srcset', n.attributes.srcset);
            } else {
              node_1.setAttribute(name_1, value);
            }
          } catch (error) {}
        } else {
          if (tagName === 'canvas' && name_1 === 'rr_dataURL') {
            var image_1 = document.createElement('img');
            image_1.src = value;
            image_1.onload = function () {
              var ctx = node_1.getContext('2d');
              if (ctx) {
                ctx.drawImage(image_1, 0, 0, image_1.width, image_1.height);
              }
            };
          } else if (tagName === 'img' && name_1 === 'rr_dataURL') {
            var image = node_1;
            if (!image.currentSrc.startsWith('data:')) {
              image.setAttribute('rrweb-original-src', n.attributes.src);
              image.src = value;
            }
          }
          if (name_1 === 'rr_width') {
            node_1.style.width = value;
          } else if (name_1 === 'rr_height') {
            node_1.style.height = value;
          } else if (name_1 === 'rr_mediaCurrentTime') {
            node_1.currentTime = n.attributes.rr_mediaCurrentTime;
          } else if (name_1 === 'rr_mediaState') {
            switch (value) {
              case 'played':
                node_1.play()["catch"](function (e) {
                  return console.warn('media playback error', e);
                });
                break;
              case 'paused':
                node_1.pause();
                break;
            }
          }
        }
      };
      for (var name_1 in n.attributes) {
        _loop_1(name_1);
      }
      if (n.isShadowHost) {
        if (!node_1.shadowRoot) {
          node_1.attachShadow({
            mode: 'open'
          });
        } else {
          while (node_1.shadowRoot.firstChild) {
            node_1.shadowRoot.removeChild(node_1.shadowRoot.firstChild);
          }
        }
      }
      return node_1;
    case NodeType.Text:
      return doc.createTextNode(n.isStyle && hackCss ? addHoverClass(n.textContent, cache) : n.textContent);
    case NodeType.CDATA:
      return doc.createCDATASection(n.textContent);
    case NodeType.Comment:
      return doc.createComment(n.textContent);
    default:
      return null;
  }
}
function buildNodeWithSN(n, options) {
  var doc = options.doc,
    map = options.map,
    _a = options.skipChild,
    skipChild = _a === void 0 ? false : _a,
    _b = options.hackCss,
    hackCss = _b === void 0 ? true : _b,
    afterAppend = options.afterAppend,
    cache = options.cache;
  var node = buildNode(n, {
    doc: doc,
    hackCss: hackCss,
    cache: cache
  });
  if (!node) {
    return null;
  }
  if (n.rootId) {
    console.assert(map[n.rootId] === doc, 'Target document should has the same root id.');
  }
  if (n.type === NodeType.Document) {
    doc.close();
    doc.open();
    if (n.compatMode === 'BackCompat' && n.childNodes && n.childNodes[0].type !== NodeType.DocumentType) {
      if (n.childNodes[0].type === NodeType.Element && 'xmlns' in n.childNodes[0].attributes && n.childNodes[0].attributes.xmlns === 'http://www.w3.org/1999/xhtml') {
        doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">');
      } else {
        doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">');
      }
    }
    node = doc;
  }
  node.__sn = n;
  map[n.id] = node;
  if ((n.type === NodeType.Document || n.type === NodeType.Element) && !skipChild) {
    for (var _i = 0, _c = n.childNodes; _i < _c.length; _i++) {
      var childN = _c[_i];
      var childNode = buildNodeWithSN(childN, {
        doc: doc,
        map: map,
        skipChild: false,
        hackCss: hackCss,
        afterAppend: afterAppend,
        cache: cache
      });
      if (!childNode) {
        console.warn('Failed to rebuild', childN);
        continue;
      }
      if (childN.isShadow && isElement(node) && node.shadowRoot) {
        node.shadowRoot.appendChild(childNode);
      } else {
        node.appendChild(childNode);
      }
      if (afterAppend) {
        afterAppend(childNode);
      }
    }
  }
  return node;
}
function visit(idNodeMap, onVisit) {
  function walk(node) {
    onVisit(node);
  }
  for (var key in idNodeMap) {
    if (idNodeMap[key]) {
      walk(idNodeMap[key]);
    }
  }
}
function handleScroll(node) {
  var n = node.__sn;
  if (n.type !== NodeType.Element) {
    return;
  }
  var el = node;
  for (var name_2 in n.attributes) {
    if (!(n.attributes.hasOwnProperty(name_2) && name_2.startsWith('rr_'))) {
      continue;
    }
    var value = n.attributes[name_2];
    if (name_2 === 'rr_scrollLeft') {
      el.scrollLeft = value;
    }
    if (name_2 === 'rr_scrollTop') {
      el.scrollTop = value;
    }
  }
}
function rebuild(n, options) {
  var doc = options.doc,
    onVisit = options.onVisit,
    _a = options.hackCss,
    hackCss = _a === void 0 ? true : _a,
    afterAppend = options.afterAppend,
    cache = options.cache;
  var idNodeMap = {};
  var node = buildNodeWithSN(n, {
    doc: doc,
    map: idNodeMap,
    skipChild: false,
    hackCss: hackCss,
    afterAppend: afterAppend,
    cache: cache
  });
  visit(idNodeMap, function (visitedNode) {
    if (onVisit) {
      onVisit(visitedNode);
    }
    handleScroll(visitedNode);
  });
  return [node, idNodeMap];
}
},{}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReplayerEvents = exports.MouseInteractions = exports.MediaInteractions = exports.IncrementalSource = exports.EventType = exports.CanvasContext = void 0;
var EventType;
(function (EventType) {
  EventType[EventType["DomContentLoaded"] = 0] = "DomContentLoaded";
  EventType[EventType["Load"] = 1] = "Load";
  EventType[EventType["FullSnapshot"] = 2] = "FullSnapshot";
  EventType[EventType["IncrementalSnapshot"] = 3] = "IncrementalSnapshot";
  EventType[EventType["Meta"] = 4] = "Meta";
  EventType[EventType["Custom"] = 5] = "Custom";
  EventType[EventType["Plugin"] = 6] = "Plugin";
})(EventType || (exports.EventType = EventType = {}));
var IncrementalSource;
(function (IncrementalSource) {
  IncrementalSource[IncrementalSource["Mutation"] = 0] = "Mutation";
  IncrementalSource[IncrementalSource["MouseMove"] = 1] = "MouseMove";
  IncrementalSource[IncrementalSource["MouseInteraction"] = 2] = "MouseInteraction";
  IncrementalSource[IncrementalSource["Scroll"] = 3] = "Scroll";
  IncrementalSource[IncrementalSource["ViewportResize"] = 4] = "ViewportResize";
  IncrementalSource[IncrementalSource["Input"] = 5] = "Input";
  IncrementalSource[IncrementalSource["TouchMove"] = 6] = "TouchMove";
  IncrementalSource[IncrementalSource["MediaInteraction"] = 7] = "MediaInteraction";
  IncrementalSource[IncrementalSource["StyleSheetRule"] = 8] = "StyleSheetRule";
  IncrementalSource[IncrementalSource["CanvasMutation"] = 9] = "CanvasMutation";
  IncrementalSource[IncrementalSource["Font"] = 10] = "Font";
  IncrementalSource[IncrementalSource["Log"] = 11] = "Log";
  IncrementalSource[IncrementalSource["Drag"] = 12] = "Drag";
  IncrementalSource[IncrementalSource["StyleDeclaration"] = 13] = "StyleDeclaration";
})(IncrementalSource || (exports.IncrementalSource = IncrementalSource = {}));
var MouseInteractions;
(function (MouseInteractions) {
  MouseInteractions[MouseInteractions["MouseUp"] = 0] = "MouseUp";
  MouseInteractions[MouseInteractions["MouseDown"] = 1] = "MouseDown";
  MouseInteractions[MouseInteractions["Click"] = 2] = "Click";
  MouseInteractions[MouseInteractions["ContextMenu"] = 3] = "ContextMenu";
  MouseInteractions[MouseInteractions["DblClick"] = 4] = "DblClick";
  MouseInteractions[MouseInteractions["Focus"] = 5] = "Focus";
  MouseInteractions[MouseInteractions["Blur"] = 6] = "Blur";
  MouseInteractions[MouseInteractions["TouchStart"] = 7] = "TouchStart";
  MouseInteractions[MouseInteractions["TouchMove_Departed"] = 8] = "TouchMove_Departed";
  MouseInteractions[MouseInteractions["TouchEnd"] = 9] = "TouchEnd";
  MouseInteractions[MouseInteractions["TouchCancel"] = 10] = "TouchCancel";
})(MouseInteractions || (exports.MouseInteractions = MouseInteractions = {}));
var CanvasContext;
(function (CanvasContext) {
  CanvasContext[CanvasContext["2D"] = 0] = "2D";
  CanvasContext[CanvasContext["WebGL"] = 1] = "WebGL";
  CanvasContext[CanvasContext["WebGL2"] = 2] = "WebGL2";
})(CanvasContext || (exports.CanvasContext = CanvasContext = {}));
var MediaInteractions;
(function (MediaInteractions) {
  MediaInteractions[MediaInteractions["Play"] = 0] = "Play";
  MediaInteractions[MediaInteractions["Pause"] = 1] = "Pause";
  MediaInteractions[MediaInteractions["Seeked"] = 2] = "Seeked";
  MediaInteractions[MediaInteractions["VolumeChange"] = 3] = "VolumeChange";
})(MediaInteractions || (exports.MediaInteractions = MediaInteractions = {}));
var ReplayerEvents;
(function (ReplayerEvents) {
  ReplayerEvents["Start"] = "start";
  ReplayerEvents["Pause"] = "pause";
  ReplayerEvents["Resume"] = "resume";
  ReplayerEvents["Resize"] = "resize";
  ReplayerEvents["Finish"] = "finish";
  ReplayerEvents["FullsnapshotRebuilded"] = "fullsnapshot-rebuilded";
  ReplayerEvents["LoadStylesheetStart"] = "load-stylesheet-start";
  ReplayerEvents["LoadStylesheetEnd"] = "load-stylesheet-end";
  ReplayerEvents["SkipStart"] = "skip-start";
  ReplayerEvents["SkipEnd"] = "skip-end";
  ReplayerEvents["MouseInteraction"] = "mouse-interaction";
  ReplayerEvents["EventCast"] = "event-cast";
  ReplayerEvents["CustomEvent"] = "custom-event";
  ReplayerEvents["Flush"] = "flush";
  ReplayerEvents["StateChange"] = "state-change";
  ReplayerEvents["PlayBack"] = "play-back";
})(ReplayerEvents || (exports.ReplayerEvents = ReplayerEvents = {}));
},{}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._mirror = exports.TreeIndex = void 0;
exports.createMirror = createMirror;
exports.getBaseDimension = getBaseDimension;
exports.getWindowHeight = getWindowHeight;
exports.getWindowWidth = getWindowWidth;
exports.hasShadowRoot = hasShadowRoot;
exports.hookSetter = hookSetter;
exports.isAncestorRemoved = isAncestorRemoved;
exports.isBlocked = isBlocked;
exports.isIframeINode = isIframeINode;
exports.isIgnored = isIgnored;
exports.isTouchEvent = isTouchEvent;
exports.iterateResolveTree = iterateResolveTree;
exports.on = on;
exports.patch = patch;
exports.polyfill = polyfill;
exports.queueToResolveTrees = queueToResolveTrees;
exports.throttle = throttle;
var _tslibEs = require("../ext/tslib/tslib.es6.js");
var _types = require("./types.js");
var _rrwebSnapshot = require("../../rrweb-snapshot/es/rrweb-snapshot.js");
function on(type, fn, target) {
  if (target === void 0) {
    target = document;
  }
  var options = {
    capture: true,
    passive: true
  };
  target.addEventListener(type, fn, options);
  return function () {
    return target.removeEventListener(type, fn, options);
  };
}
function createMirror() {
  return {
    map: {},
    getId: function (n) {
      if (!n || !n.__sn) {
        return -1;
      }
      return n.__sn.id;
    },
    getNode: function (id) {
      return this.map[id] || null;
    },
    removeNodeFromMap: function (n) {
      var _this = this;
      var id = n.__sn && n.__sn.id;
      delete this.map[id];
      if (n.childNodes) {
        n.childNodes.forEach(function (child) {
          return _this.removeNodeFromMap(child);
        });
      }
    },
    has: function (id) {
      return this.map.hasOwnProperty(id);
    },
    reset: function () {
      this.map = {};
    }
  };
}
var DEPARTED_MIRROR_ACCESS_WARNING = 'Please stop import mirror directly. Instead of that,' + '\r\n' + 'now you can use replayer.getMirror() to access the mirror instance of a replayer,' + '\r\n' + 'or you can use record.mirror to access the mirror instance during recording.';
var _mirror = exports._mirror = {
  map: {},
  getId: function () {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return -1;
  },
  getNode: function () {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return null;
  },
  removeNodeFromMap: function () {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
  },
  has: function () {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return false;
  },
  reset: function () {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
  }
};
if (typeof window !== 'undefined' && window.Proxy && window.Reflect) {
  exports._mirror = _mirror = new Proxy(_mirror, {
    get: function (target, prop, receiver) {
      if (prop === 'map') {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}
function throttle(func, wait, options) {
  if (options === void 0) {
    options = {};
  }
  var timeout = null;
  var previous = 0;
  return function (arg) {
    var now = Date.now();
    if (!previous && options.leading === false) {
      previous = now;
    }
    var remaining = wait - (now - previous);
    var context = this;
    var args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(function () {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        func.apply(context, args);
      }, remaining);
    }
  };
}
function hookSetter(target, key, d, isRevoked, win) {
  if (win === void 0) {
    win = window;
  }
  var original = win.Object.getOwnPropertyDescriptor(target, key);
  win.Object.defineProperty(target, key, isRevoked ? d : {
    set: function (value) {
      var _this = this;
      setTimeout(function () {
        d.set.call(_this, value);
      }, 0);
      if (original && original.set) {
        original.set.call(this, value);
      }
    }
  });
  return function () {
    return hookSetter(target, key, original || {}, true);
  };
}
function patch(source, name, replacement) {
  try {
    if (!(name in source)) {
      return function () {};
    }
    var original_1 = source[name];
    var wrapped = replacement(original_1);
    if (typeof wrapped === 'function') {
      wrapped.prototype = wrapped.prototype || {};
      Object.defineProperties(wrapped, {
        __rrweb_original__: {
          enumerable: false,
          value: original_1
        }
      });
    }
    source[name] = wrapped;
    return function () {
      source[name] = original_1;
    };
  } catch (_a) {
    return function () {};
  }
}
function getWindowHeight() {
  return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
}
function getWindowWidth() {
  return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
}
function isBlocked(node, blockClass) {
  if (!node) {
    return false;
  }
  if (node.nodeType === node.ELEMENT_NODE) {
    var needBlock_1 = false;
    if (typeof blockClass === 'string') {
      if (node.closest !== undefined) {
        return node.closest('.' + blockClass) !== null;
      } else {
        needBlock_1 = node.classList.contains(blockClass);
      }
    } else {
      node.classList.forEach(function (className) {
        if (blockClass.test(className)) {
          needBlock_1 = true;
        }
      });
    }
    return needBlock_1 || isBlocked(node.parentNode, blockClass);
  }
  if (node.nodeType === node.TEXT_NODE) {
    return isBlocked(node.parentNode, blockClass);
  }
  return isBlocked(node.parentNode, blockClass);
}
function isIgnored(n) {
  if ('__sn' in n) {
    return n.__sn.id === _rrwebSnapshot.IGNORED_NODE;
  }
  return false;
}
function isAncestorRemoved(target, mirror) {
  if ((0, _rrwebSnapshot.isShadowRoot)(target)) {
    return false;
  }
  var id = mirror.getId(target);
  if (!mirror.has(id)) {
    return true;
  }
  if (target.parentNode && target.parentNode.nodeType === target.DOCUMENT_NODE) {
    return false;
  }
  if (!target.parentNode) {
    return true;
  }
  return isAncestorRemoved(target.parentNode, mirror);
}
function isTouchEvent(event) {
  return Boolean(event.changedTouches);
}
function polyfill(win) {
  if (win === void 0) {
    win = window;
  }
  if ('NodeList' in win && !win.NodeList.prototype.forEach) {
    win.NodeList.prototype.forEach = Array.prototype.forEach;
  }
  if ('DOMTokenList' in win && !win.DOMTokenList.prototype.forEach) {
    win.DOMTokenList.prototype.forEach = Array.prototype.forEach;
  }
  if (!Node.prototype.contains) {
    Node.prototype.contains = function contains(node) {
      if (!(0 in arguments)) {
        throw new TypeError('1 argument is required');
      }
      do {
        if (this === node) {
          return true;
        }
      } while (node = node && node.parentNode);
      return false;
    };
  }
}
var TreeIndex = exports.TreeIndex = function () {
  function TreeIndex() {
    this.reset();
  }
  TreeIndex.prototype.add = function (mutation) {
    var parentTreeNode = this.indexes.get(mutation.parentId);
    var treeNode = {
      id: mutation.node.id,
      mutation: mutation,
      children: [],
      texts: [],
      attributes: []
    };
    if (!parentTreeNode) {
      this.tree[treeNode.id] = treeNode;
    } else {
      treeNode.parent = parentTreeNode;
      parentTreeNode.children[treeNode.id] = treeNode;
    }
    this.indexes.set(treeNode.id, treeNode);
  };
  TreeIndex.prototype.remove = function (mutation, mirror) {
    var _this = this;
    var parentTreeNode = this.indexes.get(mutation.parentId);
    var treeNode = this.indexes.get(mutation.id);
    var deepRemoveFromMirror = function (id) {
      _this.removeIdSet.add(id);
      var node = mirror.getNode(id);
      node === null || node === void 0 ? void 0 : node.childNodes.forEach(function (childNode) {
        if ('__sn' in childNode) {
          deepRemoveFromMirror(childNode.__sn.id);
        }
      });
    };
    var deepRemoveFromTreeIndex = function (node) {
      _this.removeIdSet.add(node.id);
      Object.values(node.children).forEach(function (n) {
        return deepRemoveFromTreeIndex(n);
      });
      var _treeNode = _this.indexes.get(node.id);
      if (_treeNode) {
        var _parentTreeNode = _treeNode.parent;
        if (_parentTreeNode) {
          delete _treeNode.parent;
          delete _parentTreeNode.children[_treeNode.id];
          _this.indexes.delete(mutation.id);
        }
      }
    };
    if (!treeNode) {
      this.removeNodeMutations.push(mutation);
      deepRemoveFromMirror(mutation.id);
    } else if (!parentTreeNode) {
      delete this.tree[treeNode.id];
      this.indexes.delete(treeNode.id);
      deepRemoveFromTreeIndex(treeNode);
    } else {
      delete treeNode.parent;
      delete parentTreeNode.children[treeNode.id];
      this.indexes.delete(mutation.id);
      deepRemoveFromTreeIndex(treeNode);
    }
  };
  TreeIndex.prototype.text = function (mutation) {
    var treeNode = this.indexes.get(mutation.id);
    if (treeNode) {
      treeNode.texts.push(mutation);
    } else {
      this.textMutations.push(mutation);
    }
  };
  TreeIndex.prototype.attribute = function (mutation) {
    var treeNode = this.indexes.get(mutation.id);
    if (treeNode) {
      treeNode.attributes.push(mutation);
    } else {
      this.attributeMutations.push(mutation);
    }
  };
  TreeIndex.prototype.scroll = function (d) {
    this.scrollMap.set(d.id, d);
  };
  TreeIndex.prototype.input = function (d) {
    this.inputMap.set(d.id, d);
  };
  TreeIndex.prototype.flush = function () {
    var e_1, _a, e_2, _b;
    var _this = this;
    var _c = this,
      tree = _c.tree,
      removeNodeMutations = _c.removeNodeMutations,
      textMutations = _c.textMutations,
      attributeMutations = _c.attributeMutations;
    var batchMutationData = {
      source: _types.IncrementalSource.Mutation,
      removes: removeNodeMutations,
      texts: textMutations,
      attributes: attributeMutations,
      adds: []
    };
    var walk = function (treeNode, removed) {
      if (removed) {
        _this.removeIdSet.add(treeNode.id);
      }
      batchMutationData.texts = batchMutationData.texts.concat(removed ? [] : treeNode.texts).filter(function (m) {
        return !_this.removeIdSet.has(m.id);
      });
      batchMutationData.attributes = batchMutationData.attributes.concat(removed ? [] : treeNode.attributes).filter(function (m) {
        return !_this.removeIdSet.has(m.id);
      });
      if (!_this.removeIdSet.has(treeNode.id) && !_this.removeIdSet.has(treeNode.mutation.parentId) && !removed) {
        batchMutationData.adds.push(treeNode.mutation);
        if (treeNode.children) {
          Object.values(treeNode.children).forEach(function (n) {
            return walk(n, false);
          });
        }
      } else {
        Object.values(treeNode.children).forEach(function (n) {
          return walk(n, true);
        });
      }
    };
    Object.values(tree).forEach(function (n) {
      return walk(n, false);
    });
    try {
      for (var _d = (0, _tslibEs.__values)(this.scrollMap.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
        var id = _e.value;
        if (this.removeIdSet.has(id)) {
          this.scrollMap.delete(id);
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    try {
      for (var _f = (0, _tslibEs.__values)(this.inputMap.keys()), _g = _f.next(); !_g.done; _g = _f.next()) {
        var id = _g.value;
        if (this.removeIdSet.has(id)) {
          this.inputMap.delete(id);
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    var scrollMap = new Map(this.scrollMap);
    var inputMap = new Map(this.inputMap);
    this.reset();
    return {
      mutationData: batchMutationData,
      scrollMap: scrollMap,
      inputMap: inputMap
    };
  };
  TreeIndex.prototype.reset = function () {
    this.tree = [];
    this.indexes = new Map();
    this.removeNodeMutations = [];
    this.textMutations = [];
    this.attributeMutations = [];
    this.removeIdSet = new Set();
    this.scrollMap = new Map();
    this.inputMap = new Map();
  };
  TreeIndex.prototype.idRemoved = function (id) {
    return this.removeIdSet.has(id);
  };
  return TreeIndex;
}();
function queueToResolveTrees(queue) {
  var e_3, _a;
  var queueNodeMap = {};
  var putIntoMap = function (m, parent) {
    var nodeInTree = {
      value: m,
      parent: parent,
      children: []
    };
    queueNodeMap[m.node.id] = nodeInTree;
    return nodeInTree;
  };
  var queueNodeTrees = [];
  try {
    for (var queue_1 = (0, _tslibEs.__values)(queue), queue_1_1 = queue_1.next(); !queue_1_1.done; queue_1_1 = queue_1.next()) {
      var mutation = queue_1_1.value;
      var nextId = mutation.nextId,
        parentId = mutation.parentId;
      if (nextId && nextId in queueNodeMap) {
        var nextInTree = queueNodeMap[nextId];
        if (nextInTree.parent) {
          var idx = nextInTree.parent.children.indexOf(nextInTree);
          nextInTree.parent.children.splice(idx, 0, putIntoMap(mutation, nextInTree.parent));
        } else {
          var idx = queueNodeTrees.indexOf(nextInTree);
          queueNodeTrees.splice(idx, 0, putIntoMap(mutation, null));
        }
        continue;
      }
      if (parentId in queueNodeMap) {
        var parentInTree = queueNodeMap[parentId];
        parentInTree.children.push(putIntoMap(mutation, parentInTree));
        continue;
      }
      queueNodeTrees.push(putIntoMap(mutation, null));
    }
  } catch (e_3_1) {
    e_3 = {
      error: e_3_1
    };
  } finally {
    try {
      if (queue_1_1 && !queue_1_1.done && (_a = queue_1.return)) _a.call(queue_1);
    } finally {
      if (e_3) throw e_3.error;
    }
  }
  return queueNodeTrees;
}
function iterateResolveTree(tree, cb) {
  cb(tree.value);
  for (var i = tree.children.length - 1; i >= 0; i--) {
    iterateResolveTree(tree.children[i], cb);
  }
}
function isIframeINode(node) {
  if ('__sn' in node) {
    return node.__sn.type === _rrwebSnapshot.NodeType.Element && node.__sn.tagName === 'iframe';
  }
  return false;
}
function getBaseDimension(node, rootIframe) {
  var _a, _b;
  var frameElement = (_b = (_a = node.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView) === null || _b === void 0 ? void 0 : _b.frameElement;
  if (!frameElement || frameElement === rootIframe) {
    return {
      x: 0,
      y: 0,
      relativeScale: 1,
      absoluteScale: 1
    };
  }
  var frameDimension = frameElement.getBoundingClientRect();
  var frameBaseDimension = getBaseDimension(frameElement, rootIframe);
  var relativeScale = frameDimension.height / frameElement.clientHeight;
  return {
    x: frameDimension.x * frameBaseDimension.relativeScale + frameBaseDimension.x,
    y: frameDimension.y * frameBaseDimension.relativeScale + frameBaseDimension.y,
    relativeScale: relativeScale,
    absoluteScale: frameBaseDimension.absoluteScale * relativeScale
  };
}
function hasShadowRoot(n) {
  return Boolean(n === null || n === void 0 ? void 0 : n.shadowRoot);
}
},{"../ext/tslib/tslib.es6.js":"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js","./types.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js","../../rrweb-snapshot/es/rrweb-snapshot.js":"node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js"}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/mutation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tslibEs = require("../../ext/tslib/tslib.es6.js");
var _rrwebSnapshot = require("../../../rrweb-snapshot/es/rrweb-snapshot.js");
var _utils = require("../utils.js");
function isNodeInLinkedList(n) {
  return '__ln' in n;
}
var DoubleLinkedList = function () {
  function DoubleLinkedList() {
    this.length = 0;
    this.head = null;
  }
  DoubleLinkedList.prototype.get = function (position) {
    if (position >= this.length) {
      throw new Error('Position outside of list range');
    }
    var current = this.head;
    for (var index = 0; index < position; index++) {
      current = (current === null || current === void 0 ? void 0 : current.next) || null;
    }
    return current;
  };
  DoubleLinkedList.prototype.addNode = function (n) {
    var node = {
      value: n,
      previous: null,
      next: null
    };
    n.__ln = node;
    if (n.previousSibling && isNodeInLinkedList(n.previousSibling)) {
      var current = n.previousSibling.__ln.next;
      node.next = current;
      node.previous = n.previousSibling.__ln;
      n.previousSibling.__ln.next = node;
      if (current) {
        current.previous = node;
      }
    } else if (n.nextSibling && isNodeInLinkedList(n.nextSibling) && n.nextSibling.__ln.previous) {
      var current = n.nextSibling.__ln.previous;
      node.previous = current;
      node.next = n.nextSibling.__ln;
      n.nextSibling.__ln.previous = node;
      if (current) {
        current.next = node;
      }
    } else {
      if (this.head) {
        this.head.previous = node;
      }
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  };
  DoubleLinkedList.prototype.removeNode = function (n) {
    var current = n.__ln;
    if (!this.head) {
      return;
    }
    if (!current.previous) {
      this.head = current.next;
      if (this.head) {
        this.head.previous = null;
      }
    } else {
      current.previous.next = current.next;
      if (current.next) {
        current.next.previous = current.previous;
      }
    }
    if (n.__ln) {
      delete n.__ln;
    }
    this.length--;
  };
  return DoubleLinkedList;
}();
var moveKey = function (id, parentId) {
  return "".concat(id, "@").concat(parentId);
};
function isINode(n) {
  return '__sn' in n;
}
var MutationBuffer = function () {
  function MutationBuffer() {
    var _this = this;
    this.frozen = false;
    this.locked = false;
    this.texts = [];
    this.attributes = [];
    this.removes = [];
    this.mapRemoves = [];
    this.movedMap = {};
    this.addedSet = new Set();
    this.movedSet = new Set();
    this.droppedSet = new Set();
    this.processMutations = function (mutations) {
      mutations.forEach(_this.processMutation);
      _this.emit();
    };
    this.emit = function () {
      var e_1, _a, e_2, _b;
      if (_this.frozen || _this.locked) {
        return;
      }
      var adds = [];
      var addList = new DoubleLinkedList();
      var getNextId = function (n) {
        var ns = n;
        var nextId = _rrwebSnapshot.IGNORED_NODE;
        while (nextId === _rrwebSnapshot.IGNORED_NODE) {
          ns = ns && ns.nextSibling;
          nextId = ns && _this.mirror.getId(ns);
        }
        return nextId;
      };
      var pushAdd = function (n) {
        var _a, _b, _c, _d, _e;
        var shadowHost = n.getRootNode ? (_a = n.getRootNode()) === null || _a === void 0 ? void 0 : _a.host : null;
        var rootShadowHost = shadowHost;
        while ((_c = (_b = rootShadowHost === null || rootShadowHost === void 0 ? void 0 : rootShadowHost.getRootNode) === null || _b === void 0 ? void 0 : _b.call(rootShadowHost)) === null || _c === void 0 ? void 0 : _c.host) rootShadowHost = ((_e = (_d = rootShadowHost === null || rootShadowHost === void 0 ? void 0 : rootShadowHost.getRootNode) === null || _d === void 0 ? void 0 : _d.call(rootShadowHost)) === null || _e === void 0 ? void 0 : _e.host) || null;
        var notInDoc = !_this.doc.contains(n) && (rootShadowHost === null || !_this.doc.contains(rootShadowHost));
        if (!n.parentNode || notInDoc) {
          return;
        }
        var parentId = (0, _rrwebSnapshot.isShadowRoot)(n.parentNode) ? _this.mirror.getId(shadowHost) : _this.mirror.getId(n.parentNode);
        var nextId = getNextId(n);
        if (parentId === -1 || nextId === -1) {
          return addList.addNode(n);
        }
        var sn = (0, _rrwebSnapshot.serializeNodeWithId)(n, {
          doc: _this.doc,
          map: _this.mirror.map,
          blockClass: _this.blockClass,
          blockSelector: _this.blockSelector,
          maskTextClass: _this.maskTextClass,
          maskTextSelector: _this.maskTextSelector,
          skipChild: true,
          inlineStylesheet: _this.inlineStylesheet,
          maskInputOptions: _this.maskInputOptions,
          maskTextFn: _this.maskTextFn,
          maskInputFn: _this.maskInputFn,
          slimDOMOptions: _this.slimDOMOptions,
          recordCanvas: _this.recordCanvas,
          inlineImages: _this.inlineImages,
          onSerialize: function (currentN) {
            if ((0, _utils.isIframeINode)(currentN)) {
              _this.iframeManager.addIframe(currentN);
            }
            if ((0, _utils.hasShadowRoot)(n)) {
              _this.shadowDomManager.addShadowRoot(n.shadowRoot, document);
            }
          },
          onIframeLoad: function (iframe, childSn) {
            _this.iframeManager.attachIframe(iframe, childSn);
            _this.shadowDomManager.observeAttachShadow(iframe);
          }
        });
        if (sn) {
          adds.push({
            parentId: parentId,
            nextId: nextId,
            node: sn
          });
        }
      };
      while (_this.mapRemoves.length) {
        _this.mirror.removeNodeFromMap(_this.mapRemoves.shift());
      }
      try {
        for (var _c = (0, _tslibEs.__values)(_this.movedSet), _d = _c.next(); !_d.done; _d = _c.next()) {
          var n = _d.value;
          if (isParentRemoved(_this.removes, n, _this.mirror) && !_this.movedSet.has(n.parentNode)) {
            continue;
          }
          pushAdd(n);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      try {
        for (var _e = (0, _tslibEs.__values)(_this.addedSet), _f = _e.next(); !_f.done; _f = _e.next()) {
          var n = _f.value;
          if (!isAncestorInSet(_this.droppedSet, n) && !isParentRemoved(_this.removes, n, _this.mirror)) {
            pushAdd(n);
          } else if (isAncestorInSet(_this.movedSet, n)) {
            pushAdd(n);
          } else {
            _this.droppedSet.add(n);
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      var candidate = null;
      while (addList.length) {
        var node = null;
        if (candidate) {
          var parentId = _this.mirror.getId(candidate.value.parentNode);
          var nextId = getNextId(candidate.value);
          if (parentId !== -1 && nextId !== -1) {
            node = candidate;
          }
        }
        if (!node) {
          for (var index = addList.length - 1; index >= 0; index--) {
            var _node = addList.get(index);
            if (_node) {
              var parentId = _this.mirror.getId(_node.value.parentNode);
              var nextId = getNextId(_node.value);
              if (parentId !== -1 && nextId !== -1) {
                node = _node;
                break;
              }
            }
          }
        }
        if (!node) {
          while (addList.head) {
            addList.removeNode(addList.head.value);
          }
          break;
        }
        candidate = node.previous;
        addList.removeNode(node.value);
        pushAdd(node.value);
      }
      var payload = {
        texts: _this.texts.map(function (text) {
          return {
            id: _this.mirror.getId(text.node),
            value: text.value
          };
        }).filter(function (text) {
          return _this.mirror.has(text.id);
        }),
        attributes: _this.attributes.map(function (attribute) {
          return {
            id: _this.mirror.getId(attribute.node),
            attributes: attribute.attributes
          };
        }).filter(function (attribute) {
          return _this.mirror.has(attribute.id);
        }),
        removes: _this.removes,
        adds: adds
      };
      if (!payload.texts.length && !payload.attributes.length && !payload.removes.length && !payload.adds.length) {
        return;
      }
      _this.texts = [];
      _this.attributes = [];
      _this.removes = [];
      _this.addedSet = new Set();
      _this.movedSet = new Set();
      _this.droppedSet = new Set();
      _this.movedMap = {};
      _this.mutationCb(payload);
    };
    this.processMutation = function (m) {
      var e_3, _a, e_4, _b;
      if ((0, _utils.isIgnored)(m.target)) {
        return;
      }
      switch (m.type) {
        case 'characterData':
          {
            var value = m.target.textContent;
            if (!(0, _utils.isBlocked)(m.target, _this.blockClass) && value !== m.oldValue) {
              _this.texts.push({
                value: (0, _rrwebSnapshot.needMaskingText)(m.target, _this.maskTextClass, _this.maskTextSelector) && value ? _this.maskTextFn ? _this.maskTextFn(value) : value.replace(/[\S]/g, '*') : value,
                node: m.target
              });
            }
            break;
          }
        case 'attributes':
          {
            var target = m.target;
            var value = m.target.getAttribute(m.attributeName);
            if (m.attributeName === 'value') {
              value = (0, _rrwebSnapshot.maskInputValue)({
                maskInputOptions: _this.maskInputOptions,
                tagName: m.target.tagName,
                type: m.target.getAttribute('type'),
                value: value,
                maskInputFn: _this.maskInputFn
              });
            }
            if ((0, _utils.isBlocked)(m.target, _this.blockClass) || value === m.oldValue) {
              return;
            }
            var item = _this.attributes.find(function (a) {
              return a.node === m.target;
            });
            if (!item) {
              item = {
                node: m.target,
                attributes: {}
              };
              _this.attributes.push(item);
            }
            if (m.attributeName === 'style') {
              var old = _this.doc.createElement('span');
              if (m.oldValue) {
                old.setAttribute('style', m.oldValue);
              }
              if (item.attributes.style === undefined || item.attributes.style === null) {
                item.attributes.style = {};
              }
              var styleObj = item.attributes.style;
              try {
                for (var _c = (0, _tslibEs.__values)(Array.from(target.style)), _d = _c.next(); !_d.done; _d = _c.next()) {
                  var pname = _d.value;
                  var newValue = target.style.getPropertyValue(pname);
                  var newPriority = target.style.getPropertyPriority(pname);
                  if (newValue !== old.style.getPropertyValue(pname) || newPriority !== old.style.getPropertyPriority(pname)) {
                    if (newPriority === '') {
                      styleObj[pname] = newValue;
                    } else {
                      styleObj[pname] = [newValue, newPriority];
                    }
                  }
                }
              } catch (e_3_1) {
                e_3 = {
                  error: e_3_1
                };
              } finally {
                try {
                  if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                } finally {
                  if (e_3) throw e_3.error;
                }
              }
              try {
                for (var _e = (0, _tslibEs.__values)(Array.from(old.style)), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var pname = _f.value;
                  if (target.style.getPropertyValue(pname) === '') {
                    styleObj[pname] = false;
                  }
                }
              } catch (e_4_1) {
                e_4 = {
                  error: e_4_1
                };
              } finally {
                try {
                  if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                } finally {
                  if (e_4) throw e_4.error;
                }
              }
            } else {
              item.attributes[m.attributeName] = (0, _rrwebSnapshot.transformAttribute)(_this.doc, m.target.tagName, m.attributeName, value);
            }
            break;
          }
        case 'childList':
          {
            m.addedNodes.forEach(function (n) {
              return _this.genAdds(n, m.target);
            });
            m.removedNodes.forEach(function (n) {
              var nodeId = _this.mirror.getId(n);
              var parentId = (0, _rrwebSnapshot.isShadowRoot)(m.target) ? _this.mirror.getId(m.target.host) : _this.mirror.getId(m.target);
              if ((0, _utils.isBlocked)(m.target, _this.blockClass) || (0, _utils.isIgnored)(n)) {
                return;
              }
              if (_this.addedSet.has(n)) {
                deepDelete(_this.addedSet, n);
                _this.droppedSet.add(n);
              } else if (_this.addedSet.has(m.target) && nodeId === -1) ;else if ((0, _utils.isAncestorRemoved)(m.target, _this.mirror)) ;else if (_this.movedSet.has(n) && _this.movedMap[moveKey(nodeId, parentId)]) {
                deepDelete(_this.movedSet, n);
              } else {
                _this.removes.push({
                  parentId: parentId,
                  id: nodeId,
                  isShadow: (0, _rrwebSnapshot.isShadowRoot)(m.target) ? true : undefined
                });
              }
              _this.mapRemoves.push(n);
            });
            break;
          }
      }
    };
    this.genAdds = function (n, target) {
      if (target && (0, _utils.isBlocked)(target, _this.blockClass)) {
        return;
      }
      if (isINode(n)) {
        if ((0, _utils.isIgnored)(n)) {
          return;
        }
        _this.movedSet.add(n);
        var targetId = null;
        if (target && isINode(target)) {
          targetId = target.__sn.id;
        }
        if (targetId) {
          _this.movedMap[moveKey(n.__sn.id, targetId)] = true;
        }
      } else {
        _this.addedSet.add(n);
        _this.droppedSet.delete(n);
      }
      if (!(0, _utils.isBlocked)(n, _this.blockClass)) n.childNodes.forEach(function (childN) {
        return _this.genAdds(childN);
      });
    };
  }
  MutationBuffer.prototype.init = function (options) {
    var _this = this;
    ['mutationCb', 'blockClass', 'blockSelector', 'maskTextClass', 'maskTextSelector', 'inlineStylesheet', 'maskInputOptions', 'maskTextFn', 'maskInputFn', 'recordCanvas', 'inlineImages', 'slimDOMOptions', 'doc', 'mirror', 'iframeManager', 'shadowDomManager', 'canvasManager'].forEach(function (key) {
      _this[key] = options[key];
    });
  };
  MutationBuffer.prototype.freeze = function () {
    this.frozen = true;
    this.canvasManager.freeze();
  };
  MutationBuffer.prototype.unfreeze = function () {
    this.frozen = false;
    this.canvasManager.unfreeze();
    this.emit();
  };
  MutationBuffer.prototype.isFrozen = function () {
    return this.frozen;
  };
  MutationBuffer.prototype.lock = function () {
    this.locked = true;
    this.canvasManager.lock();
  };
  MutationBuffer.prototype.unlock = function () {
    this.locked = false;
    this.canvasManager.unlock();
    this.emit();
  };
  MutationBuffer.prototype.reset = function () {
    this.shadowDomManager.reset();
    this.canvasManager.reset();
  };
  return MutationBuffer;
}();
function deepDelete(addsSet, n) {
  addsSet.delete(n);
  n.childNodes.forEach(function (childN) {
    return deepDelete(addsSet, childN);
  });
}
function isParentRemoved(removes, n, mirror) {
  var parentNode = n.parentNode;
  if (!parentNode) {
    return false;
  }
  var parentId = mirror.getId(parentNode);
  if (removes.some(function (r) {
    return r.id === parentId;
  })) {
    return true;
  }
  return isParentRemoved(removes, parentNode, mirror);
}
function isAncestorInSet(set, n) {
  var parentNode = n.parentNode;
  if (!parentNode) {
    return false;
  }
  if (set.has(parentNode)) {
    return true;
  }
  return isAncestorInSet(set, parentNode);
}
var _default = exports.default = MutationBuffer;
},{"../../ext/tslib/tslib.es6.js":"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js","../../../rrweb-snapshot/es/rrweb-snapshot.js":"node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js","../utils.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js"}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INPUT_TAGS = void 0;
exports.initMutationObserver = initMutationObserver;
exports.initObservers = initObservers;
exports.initScrollObserver = initScrollObserver;
exports.mutationBuffers = void 0;
var _tslibEs = require("../../ext/tslib/tslib.es6.js");
var _rrwebSnapshot = require("../../../rrweb-snapshot/es/rrweb-snapshot.js");
var _utils = require("../utils.js");
var _types = require("../types.js");
var _mutation = _interopRequireDefault(require("./mutation.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var mutationBuffers = exports.mutationBuffers = [];
var isCSSGroupingRuleSupported = typeof CSSGroupingRule !== 'undefined';
var isCSSMediaRuleSupported = typeof CSSMediaRule !== 'undefined';
var isCSSSupportsRuleSupported = typeof CSSSupportsRule !== 'undefined';
var isCSSConditionRuleSupported = typeof CSSConditionRule !== 'undefined';
function getEventTarget(event) {
  try {
    if ('composedPath' in event) {
      var path = event.composedPath();
      if (path.length) {
        return path[0];
      }
    } else if ('path' in event && event.path.length) {
      return event.path[0];
    }
    return event.target;
  } catch (_a) {
    return event.target;
  }
}
function initMutationObserver(options, rootEl) {
  var _a, _b;
  var mutationBuffer = new _mutation.default();
  mutationBuffers.push(mutationBuffer);
  mutationBuffer.init(options);
  var mutationObserverCtor = window.MutationObserver || window.__rrMutationObserver;
  var angularZoneSymbol = (_b = (_a = window === null || window === void 0 ? void 0 : window.Zone) === null || _a === void 0 ? void 0 : _a.__symbol__) === null || _b === void 0 ? void 0 : _b.call(_a, 'MutationObserver');
  if (angularZoneSymbol && window[angularZoneSymbol]) {
    mutationObserverCtor = window[angularZoneSymbol];
  }
  var observer = new mutationObserverCtor(mutationBuffer.processMutations.bind(mutationBuffer));
  observer.observe(rootEl, {
    attributes: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true
  });
  return observer;
}
function initMoveObserver(_a) {
  var mousemoveCb = _a.mousemoveCb,
    sampling = _a.sampling,
    doc = _a.doc,
    mirror = _a.mirror;
  if (sampling.mousemove === false) {
    return function () {};
  }
  var threshold = typeof sampling.mousemove === 'number' ? sampling.mousemove : 50;
  var callbackThreshold = typeof sampling.mousemoveCallback === 'number' ? sampling.mousemoveCallback : 500;
  var positions = [];
  var timeBaseline;
  var wrappedCb = (0, _utils.throttle)(function (source) {
    var totalOffset = Date.now() - timeBaseline;
    mousemoveCb(positions.map(function (p) {
      p.timeOffset -= totalOffset;
      return p;
    }), source);
    positions = [];
    timeBaseline = null;
  }, callbackThreshold);
  var updatePosition = (0, _utils.throttle)(function (evt) {
    var target = getEventTarget(evt);
    var _a = (0, _utils.isTouchEvent)(evt) ? evt.changedTouches[0] : evt,
      clientX = _a.clientX,
      clientY = _a.clientY;
    if (!timeBaseline) {
      timeBaseline = Date.now();
    }
    positions.push({
      x: clientX,
      y: clientY,
      id: mirror.getId(target),
      timeOffset: Date.now() - timeBaseline
    });
    wrappedCb(typeof DragEvent !== 'undefined' && evt instanceof DragEvent ? _types.IncrementalSource.Drag : evt instanceof MouseEvent ? _types.IncrementalSource.MouseMove : _types.IncrementalSource.TouchMove);
  }, threshold, {
    trailing: false
  });
  var handlers = [(0, _utils.on)('mousemove', updatePosition, doc), (0, _utils.on)('touchmove', updatePosition, doc), (0, _utils.on)('drag', updatePosition, doc)];
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
function initMouseInteractionObserver(_a) {
  var mouseInteractionCb = _a.mouseInteractionCb,
    doc = _a.doc,
    mirror = _a.mirror,
    blockClass = _a.blockClass,
    sampling = _a.sampling;
  if (sampling.mouseInteraction === false) {
    return function () {};
  }
  var disableMap = sampling.mouseInteraction === true || sampling.mouseInteraction === undefined ? {} : sampling.mouseInteraction;
  var handlers = [];
  var getHandler = function (eventKey) {
    return function (event) {
      var target = getEventTarget(event);
      if ((0, _utils.isBlocked)(target, blockClass)) {
        return;
      }
      var e = (0, _utils.isTouchEvent)(event) ? event.changedTouches[0] : event;
      if (!e) {
        return;
      }
      var id = mirror.getId(target);
      var clientX = e.clientX,
        clientY = e.clientY;
      mouseInteractionCb({
        type: _types.MouseInteractions[eventKey],
        id: id,
        x: clientX,
        y: clientY
      });
    };
  };
  Object.keys(_types.MouseInteractions).filter(function (key) {
    return Number.isNaN(Number(key)) && !key.endsWith('_Departed') && disableMap[key] !== false;
  }).forEach(function (eventKey) {
    var eventName = eventKey.toLowerCase();
    var handler = getHandler(eventKey);
    handlers.push((0, _utils.on)(eventName, handler, doc));
  });
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
function initScrollObserver(_a) {
  var scrollCb = _a.scrollCb,
    doc = _a.doc,
    mirror = _a.mirror,
    blockClass = _a.blockClass,
    sampling = _a.sampling;
  var updatePosition = (0, _utils.throttle)(function (evt) {
    var target = getEventTarget(evt);
    if (!target || (0, _utils.isBlocked)(target, blockClass)) {
      return;
    }
    var id = mirror.getId(target);
    if (target === doc) {
      var scrollEl = doc.scrollingElement || doc.documentElement;
      scrollCb({
        id: id,
        x: scrollEl.scrollLeft,
        y: scrollEl.scrollTop
      });
    } else {
      scrollCb({
        id: id,
        x: target.scrollLeft,
        y: target.scrollTop
      });
    }
  }, sampling.scroll || 100);
  return (0, _utils.on)('scroll', updatePosition, doc);
}
function initViewportResizeObserver(_a) {
  var viewportResizeCb = _a.viewportResizeCb;
  var lastH = -1;
  var lastW = -1;
  var updateDimension = (0, _utils.throttle)(function () {
    var height = (0, _utils.getWindowHeight)();
    var width = (0, _utils.getWindowWidth)();
    if (lastH !== height || lastW !== width) {
      viewportResizeCb({
        width: Number(width),
        height: Number(height)
      });
      lastH = height;
      lastW = width;
    }
  }, 200);
  return (0, _utils.on)('resize', updateDimension, window);
}
function wrapEventWithUserTriggeredFlag(v, enable) {
  var value = (0, _tslibEs.__assign)({}, v);
  if (!enable) delete value.userTriggered;
  return value;
}
var INPUT_TAGS = exports.INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];
var lastInputValueMap = new WeakMap();
function initInputObserver(_a) {
  var inputCb = _a.inputCb,
    doc = _a.doc,
    mirror = _a.mirror,
    blockClass = _a.blockClass,
    ignoreClass = _a.ignoreClass,
    maskInputOptions = _a.maskInputOptions,
    maskInputFn = _a.maskInputFn,
    sampling = _a.sampling,
    userTriggeredOnInput = _a.userTriggeredOnInput;
  function eventHandler(event) {
    var target = getEventTarget(event);
    var userTriggered = event.isTrusted;
    if (target && target.tagName === 'OPTION') target = target.parentElement;
    if (!target || !target.tagName || INPUT_TAGS.indexOf(target.tagName) < 0 || (0, _utils.isBlocked)(target, blockClass)) {
      return;
    }
    var type = target.type;
    if (target.classList.contains(ignoreClass)) {
      return;
    }
    var text = target.value;
    var isChecked = false;
    if (type === 'radio' || type === 'checkbox') {
      isChecked = target.checked;
    } else if (maskInputOptions[target.tagName.toLowerCase()] || maskInputOptions[type]) {
      text = (0, _rrwebSnapshot.maskInputValue)({
        maskInputOptions: maskInputOptions,
        tagName: target.tagName,
        type: type,
        value: text,
        maskInputFn: maskInputFn
      });
    }
    cbWithDedup(target, wrapEventWithUserTriggeredFlag({
      text: text,
      isChecked: isChecked,
      userTriggered: userTriggered
    }, userTriggeredOnInput));
    var name = target.name;
    if (type === 'radio' && name && isChecked) {
      doc.querySelectorAll("input[type=\"radio\"][name=\"".concat(name, "\"]")).forEach(function (el) {
        if (el !== target) {
          cbWithDedup(el, wrapEventWithUserTriggeredFlag({
            text: el.value,
            isChecked: !isChecked,
            userTriggered: false
          }, userTriggeredOnInput));
        }
      });
    }
  }
  function cbWithDedup(target, v) {
    var lastInputValue = lastInputValueMap.get(target);
    if (!lastInputValue || lastInputValue.text !== v.text || lastInputValue.isChecked !== v.isChecked) {
      lastInputValueMap.set(target, v);
      var id = mirror.getId(target);
      inputCb((0, _tslibEs.__assign)((0, _tslibEs.__assign)({}, v), {
        id: id
      }));
    }
  }
  var events = sampling.input === 'last' ? ['change'] : ['input', 'change'];
  var handlers = events.map(function (eventName) {
    return (0, _utils.on)(eventName, eventHandler, doc);
  });
  var propertyDescriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
  var hookProperties = [[HTMLInputElement.prototype, 'value'], [HTMLInputElement.prototype, 'checked'], [HTMLSelectElement.prototype, 'value'], [HTMLTextAreaElement.prototype, 'value'], [HTMLSelectElement.prototype, 'selectedIndex'], [HTMLOptionElement.prototype, 'selected']];
  if (propertyDescriptor && propertyDescriptor.set) {
    handlers.push.apply(handlers, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(hookProperties.map(function (p) {
      return (0, _utils.hookSetter)(p[0], p[1], {
        set: function () {
          eventHandler({
            target: this
          });
        }
      });
    })), false));
  }
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
function getNestedCSSRulePositions(rule) {
  var positions = [];
  function recurse(childRule, pos) {
    if (isCSSGroupingRuleSupported && childRule.parentRule instanceof CSSGroupingRule || isCSSMediaRuleSupported && childRule.parentRule instanceof CSSMediaRule || isCSSSupportsRuleSupported && childRule.parentRule instanceof CSSSupportsRule || isCSSConditionRuleSupported && childRule.parentRule instanceof CSSConditionRule) {
      var rules = Array.from(childRule.parentRule.cssRules);
      var index = rules.indexOf(childRule);
      pos.unshift(index);
    } else {
      var rules = Array.from(childRule.parentStyleSheet.cssRules);
      var index = rules.indexOf(childRule);
      pos.unshift(index);
    }
    return pos;
  }
  return recurse(rule, positions);
}
function initStyleSheetObserver(_a, _b) {
  var styleSheetRuleCb = _a.styleSheetRuleCb,
    mirror = _a.mirror;
  var win = _b.win;
  var insertRule = win.CSSStyleSheet.prototype.insertRule;
  win.CSSStyleSheet.prototype.insertRule = function (rule, index) {
    var id = mirror.getId(this.ownerNode);
    if (id !== -1) {
      styleSheetRuleCb({
        id: id,
        adds: [{
          rule: rule,
          index: index
        }]
      });
    }
    return insertRule.apply(this, arguments);
  };
  var deleteRule = win.CSSStyleSheet.prototype.deleteRule;
  win.CSSStyleSheet.prototype.deleteRule = function (index) {
    var id = mirror.getId(this.ownerNode);
    if (id !== -1) {
      styleSheetRuleCb({
        id: id,
        removes: [{
          index: index
        }]
      });
    }
    return deleteRule.apply(this, arguments);
  };
  var supportedNestedCSSRuleTypes = {};
  if (isCSSGroupingRuleSupported) {
    supportedNestedCSSRuleTypes.CSSGroupingRule = win.CSSGroupingRule;
  } else {
    if (isCSSMediaRuleSupported) {
      supportedNestedCSSRuleTypes.CSSMediaRule = win.CSSMediaRule;
    }
    if (isCSSConditionRuleSupported) {
      supportedNestedCSSRuleTypes.CSSConditionRule = win.CSSConditionRule;
    }
    if (isCSSSupportsRuleSupported) {
      supportedNestedCSSRuleTypes.CSSSupportsRule = win.CSSSupportsRule;
    }
  }
  var unmodifiedFunctions = {};
  Object.entries(supportedNestedCSSRuleTypes).forEach(function (_a) {
    var _b = (0, _tslibEs.__read)(_a, 2),
      typeKey = _b[0],
      type = _b[1];
    unmodifiedFunctions[typeKey] = {
      insertRule: type.prototype.insertRule,
      deleteRule: type.prototype.deleteRule
    };
    type.prototype.insertRule = function (rule, index) {
      var id = mirror.getId(this.parentStyleSheet.ownerNode);
      if (id !== -1) {
        styleSheetRuleCb({
          id: id,
          adds: [{
            rule: rule,
            index: (0, _tslibEs.__spreadArray)((0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(getNestedCSSRulePositions(this)), false), [index || 0], false)
          }]
        });
      }
      return unmodifiedFunctions[typeKey].insertRule.apply(this, arguments);
    };
    type.prototype.deleteRule = function (index) {
      var id = mirror.getId(this.parentStyleSheet.ownerNode);
      if (id !== -1) {
        styleSheetRuleCb({
          id: id,
          removes: [{
            index: (0, _tslibEs.__spreadArray)((0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(getNestedCSSRulePositions(this)), false), [index], false)
          }]
        });
      }
      return unmodifiedFunctions[typeKey].deleteRule.apply(this, arguments);
    };
  });
  return function () {
    win.CSSStyleSheet.prototype.insertRule = insertRule;
    win.CSSStyleSheet.prototype.deleteRule = deleteRule;
    Object.entries(supportedNestedCSSRuleTypes).forEach(function (_a) {
      var _b = (0, _tslibEs.__read)(_a, 2),
        typeKey = _b[0],
        type = _b[1];
      type.prototype.insertRule = unmodifiedFunctions[typeKey].insertRule;
      type.prototype.deleteRule = unmodifiedFunctions[typeKey].deleteRule;
    });
  };
}
function initStyleDeclarationObserver(_a, _b) {
  var styleDeclarationCb = _a.styleDeclarationCb,
    mirror = _a.mirror;
  var win = _b.win;
  var setProperty = win.CSSStyleDeclaration.prototype.setProperty;
  win.CSSStyleDeclaration.prototype.setProperty = function (property, value, priority) {
    var _a, _b;
    var id = mirror.getId((_b = (_a = this.parentRule) === null || _a === void 0 ? void 0 : _a.parentStyleSheet) === null || _b === void 0 ? void 0 : _b.ownerNode);
    if (id !== -1) {
      styleDeclarationCb({
        id: id,
        set: {
          property: property,
          value: value,
          priority: priority
        },
        index: getNestedCSSRulePositions(this.parentRule)
      });
    }
    return setProperty.apply(this, arguments);
  };
  var removeProperty = win.CSSStyleDeclaration.prototype.removeProperty;
  win.CSSStyleDeclaration.prototype.removeProperty = function (property) {
    var _a, _b;
    var id = mirror.getId((_b = (_a = this.parentRule) === null || _a === void 0 ? void 0 : _a.parentStyleSheet) === null || _b === void 0 ? void 0 : _b.ownerNode);
    if (id !== -1) {
      styleDeclarationCb({
        id: id,
        remove: {
          property: property
        },
        index: getNestedCSSRulePositions(this.parentRule)
      });
    }
    return removeProperty.apply(this, arguments);
  };
  return function () {
    win.CSSStyleDeclaration.prototype.setProperty = setProperty;
    win.CSSStyleDeclaration.prototype.removeProperty = removeProperty;
  };
}
function initMediaInteractionObserver(_a) {
  var mediaInteractionCb = _a.mediaInteractionCb,
    blockClass = _a.blockClass,
    mirror = _a.mirror,
    sampling = _a.sampling;
  var handler = function (type) {
    return (0, _utils.throttle)(function (event) {
      var target = getEventTarget(event);
      if (!target || (0, _utils.isBlocked)(target, blockClass)) {
        return;
      }
      var _a = target,
        currentTime = _a.currentTime,
        volume = _a.volume,
        muted = _a.muted;
      mediaInteractionCb({
        type: type,
        id: mirror.getId(target),
        currentTime: currentTime,
        volume: volume,
        muted: muted
      });
    }, sampling.media || 500);
  };
  var handlers = [(0, _utils.on)('play', handler(0)), (0, _utils.on)('pause', handler(1)), (0, _utils.on)('seeked', handler(2)), (0, _utils.on)('volumechange', handler(3))];
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
function initFontObserver(_a) {
  var fontCb = _a.fontCb,
    doc = _a.doc;
  var win = doc.defaultView;
  if (!win) {
    return function () {};
  }
  var handlers = [];
  var fontMap = new WeakMap();
  var originalFontFace = win.FontFace;
  win.FontFace = function FontFace(family, source, descriptors) {
    var fontFace = new originalFontFace(family, source, descriptors);
    fontMap.set(fontFace, {
      family: family,
      buffer: typeof source !== 'string',
      descriptors: descriptors,
      fontSource: typeof source === 'string' ? source : JSON.stringify(Array.from(new Uint8Array(source)))
    });
    return fontFace;
  };
  var restoreHandler = (0, _utils.patch)(doc.fonts, 'add', function (original) {
    return function (fontFace) {
      setTimeout(function () {
        var p = fontMap.get(fontFace);
        if (p) {
          fontCb(p);
          fontMap.delete(fontFace);
        }
      }, 0);
      return original.apply(this, [fontFace]);
    };
  });
  handlers.push(function () {
    win.FontFace = originalFontFace;
  });
  handlers.push(restoreHandler);
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
function mergeHooks(o, hooks) {
  var mutationCb = o.mutationCb,
    mousemoveCb = o.mousemoveCb,
    mouseInteractionCb = o.mouseInteractionCb,
    scrollCb = o.scrollCb,
    viewportResizeCb = o.viewportResizeCb,
    inputCb = o.inputCb,
    mediaInteractionCb = o.mediaInteractionCb,
    styleSheetRuleCb = o.styleSheetRuleCb,
    styleDeclarationCb = o.styleDeclarationCb,
    canvasMutationCb = o.canvasMutationCb,
    fontCb = o.fontCb;
  o.mutationCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.mutation) {
      hooks.mutation.apply(hooks, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
    }
    mutationCb.apply(void 0, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
  };
  o.mousemoveCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.mousemove) {
      hooks.mousemove.apply(hooks, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
    }
    mousemoveCb.apply(void 0, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
  };
  o.mouseInteractionCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.mouseInteraction) {
      hooks.mouseInteraction.apply(hooks, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
    }
    mouseInteractionCb.apply(void 0, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
  };
  o.scrollCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.scroll) {
      hooks.scroll.apply(hooks, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
    }
    scrollCb.apply(void 0, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
  };
  o.viewportResizeCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.viewportResize) {
      hooks.viewportResize.apply(hooks, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
    }
    viewportResizeCb.apply(void 0, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
  };
  o.inputCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.input) {
      hooks.input.apply(hooks, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
    }
    inputCb.apply(void 0, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
  };
  o.mediaInteractionCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.mediaInteaction) {
      hooks.mediaInteaction.apply(hooks, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
    }
    mediaInteractionCb.apply(void 0, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
  };
  o.styleSheetRuleCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.styleSheetRule) {
      hooks.styleSheetRule.apply(hooks, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
    }
    styleSheetRuleCb.apply(void 0, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
  };
  o.styleDeclarationCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.styleDeclaration) {
      hooks.styleDeclaration.apply(hooks, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
    }
    styleDeclarationCb.apply(void 0, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
  };
  o.canvasMutationCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.canvasMutation) {
      hooks.canvasMutation.apply(hooks, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
    }
    canvasMutationCb.apply(void 0, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
  };
  o.fontCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.font) {
      hooks.font.apply(hooks, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
    }
    fontCb.apply(void 0, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(p), false));
  };
}
function initObservers(o, hooks) {
  var e_1, _a;
  if (hooks === void 0) {
    hooks = {};
  }
  var currentWindow = o.doc.defaultView;
  if (!currentWindow) {
    return function () {};
  }
  mergeHooks(o, hooks);
  var mutationObserver = initMutationObserver(o, o.doc);
  var mousemoveHandler = initMoveObserver(o);
  var mouseInteractionHandler = initMouseInteractionObserver(o);
  var scrollHandler = initScrollObserver(o);
  var viewportResizeHandler = initViewportResizeObserver(o);
  var inputHandler = initInputObserver(o);
  var mediaInteractionHandler = initMediaInteractionObserver(o);
  var styleSheetObserver = initStyleSheetObserver(o, {
    win: currentWindow
  });
  var styleDeclarationObserver = initStyleDeclarationObserver(o, {
    win: currentWindow
  });
  var fontObserver = o.collectFonts ? initFontObserver(o) : function () {};
  var pluginHandlers = [];
  try {
    for (var _b = (0, _tslibEs.__values)(o.plugins), _c = _b.next(); !_c.done; _c = _b.next()) {
      var plugin = _c.value;
      pluginHandlers.push(plugin.observer(plugin.callback, currentWindow, plugin.options));
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return function () {
    mutationBuffers.forEach(function (b) {
      return b.reset();
    });
    mutationObserver.disconnect();
    mousemoveHandler();
    mouseInteractionHandler();
    scrollHandler();
    viewportResizeHandler();
    inputHandler();
    mediaInteractionHandler();
    styleSheetObserver();
    styleDeclarationObserver();
    fontObserver();
    pluginHandlers.forEach(function (h) {
      return h();
    });
  };
}
},{"../../ext/tslib/tslib.es6.js":"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js","../../../rrweb-snapshot/es/rrweb-snapshot.js":"node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js","../utils.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js","../types.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js","./mutation.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/mutation.js"}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/iframe-manager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IframeManager = void 0;
var IframeManager = exports.IframeManager = function () {
  function IframeManager(options) {
    this.iframes = new WeakMap();
    this.mutationCb = options.mutationCb;
  }
  IframeManager.prototype.addIframe = function (iframeEl) {
    this.iframes.set(iframeEl, true);
  };
  IframeManager.prototype.addLoadListener = function (cb) {
    this.loadListener = cb;
  };
  IframeManager.prototype.attachIframe = function (iframeEl, childSn) {
    var _a;
    this.mutationCb({
      adds: [{
        parentId: iframeEl.__sn.id,
        nextId: null,
        node: childSn
      }],
      removes: [],
      texts: [],
      attributes: [],
      isAttachIframe: true
    });
    (_a = this.loadListener) === null || _a === void 0 ? void 0 : _a.call(this, iframeEl);
  };
  return IframeManager;
}();
},{}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/shadow-dom-manager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShadowDomManager = void 0;
var _tslibEs = require("../../ext/tslib/tslib.es6.js");
var _observer = require("./observer.js");
var _utils = require("../utils.js");
var ShadowDomManager = exports.ShadowDomManager = function () {
  function ShadowDomManager(options) {
    this.restorePatches = [];
    this.mutationCb = options.mutationCb;
    this.scrollCb = options.scrollCb;
    this.bypassOptions = options.bypassOptions;
    this.mirror = options.mirror;
    var manager = this;
    this.restorePatches.push((0, _utils.patch)(HTMLElement.prototype, 'attachShadow', function (original) {
      return function () {
        var shadowRoot = original.apply(this, arguments);
        if (this.shadowRoot) manager.addShadowRoot(this.shadowRoot, this.ownerDocument);
        return shadowRoot;
      };
    }));
  }
  ShadowDomManager.prototype.addShadowRoot = function (shadowRoot, doc) {
    (0, _observer.initMutationObserver)((0, _tslibEs.__assign)((0, _tslibEs.__assign)({}, this.bypassOptions), {
      doc: doc,
      mutationCb: this.mutationCb,
      mirror: this.mirror,
      shadowDomManager: this
    }), shadowRoot);
    (0, _observer.initScrollObserver)((0, _tslibEs.__assign)((0, _tslibEs.__assign)({}, this.bypassOptions), {
      scrollCb: this.scrollCb,
      doc: shadowRoot,
      mirror: this.mirror
    }));
  };
  ShadowDomManager.prototype.observeAttachShadow = function (iframeElement) {
    if (iframeElement.contentWindow) {
      var manager_1 = this;
      this.restorePatches.push((0, _utils.patch)(iframeElement.contentWindow.HTMLElement.prototype, 'attachShadow', function (original) {
        return function () {
          var shadowRoot = original.apply(this, arguments);
          if (this.shadowRoot) manager_1.addShadowRoot(this.shadowRoot, iframeElement.contentDocument);
          return shadowRoot;
        };
      }));
    }
  };
  ShadowDomManager.prototype.reset = function () {
    this.restorePatches.forEach(function (restorePatch) {
      return restorePatch();
    });
  };
  return ShadowDomManager;
}();
},{"../../ext/tslib/tslib.es6.js":"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js","./observer.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observer.js","../utils.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js"}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/2d.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tslibEs = require("../../../../ext/tslib/tslib.es6.js");
var _types = require("../../../types.js");
var _utils = require("../../../utils.js");
function initCanvas2DMutationObserver(cb, win, blockClass, mirror) {
  var e_1, _a;
  var handlers = [];
  var props2D = Object.getOwnPropertyNames(win.CanvasRenderingContext2D.prototype);
  var _loop_1 = function (prop) {
    try {
      if (typeof win.CanvasRenderingContext2D.prototype[prop] !== 'function') {
        return "continue";
      }
      var restoreHandler = (0, _utils.patch)(win.CanvasRenderingContext2D.prototype, prop, function (original) {
        return function () {
          var _this = this;
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          if (!(0, _utils.isBlocked)(this.canvas, blockClass)) {
            setTimeout(function () {
              var recordArgs = (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(args), false);
              if (prop === 'drawImage') {
                if (recordArgs[0] && recordArgs[0] instanceof HTMLCanvasElement) {
                  var canvas = recordArgs[0];
                  var ctx = canvas.getContext('2d');
                  var imgd = ctx === null || ctx === void 0 ? void 0 : ctx.getImageData(0, 0, canvas.width, canvas.height);
                  var pix = imgd === null || imgd === void 0 ? void 0 : imgd.data;
                  recordArgs[0] = JSON.stringify(pix);
                }
              }
              cb(_this.canvas, {
                type: _types.CanvasContext['2D'],
                property: prop,
                args: recordArgs
              });
            }, 0);
          }
          return original.apply(this, args);
        };
      });
      handlers.push(restoreHandler);
    } catch (_b) {
      var hookHandler = (0, _utils.hookSetter)(win.CanvasRenderingContext2D.prototype, prop, {
        set: function (v) {
          cb(this.canvas, {
            type: _types.CanvasContext['2D'],
            property: prop,
            args: [v],
            setter: true
          });
        }
      });
      handlers.push(hookHandler);
    }
  };
  try {
    for (var props2D_1 = (0, _tslibEs.__values)(props2D), props2D_1_1 = props2D_1.next(); !props2D_1_1.done; props2D_1_1 = props2D_1.next()) {
      var prop = props2D_1_1.value;
      _loop_1(prop);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (props2D_1_1 && !props2D_1_1.done && (_a = props2D_1.return)) _a.call(props2D_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
var _default = exports.default = initCanvas2DMutationObserver;
},{"../../../../ext/tslib/tslib.es6.js":"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js","../../../types.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js","../../../utils.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js"}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tslibEs = require("../../../../ext/tslib/tslib.es6.js");
var _utils = require("../../../utils.js");
function initCanvasContextObserver(win, blockClass) {
  var handlers = [];
  try {
    var restoreHandler = (0, _utils.patch)(win.HTMLCanvasElement.prototype, 'getContext', function (original) {
      return function (contextType) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        if (!(0, _utils.isBlocked)(this, blockClass)) {
          if (!('__context' in this)) this.__context = contextType;
        }
        return original.apply(this, (0, _tslibEs.__spreadArray)([contextType], (0, _tslibEs.__read)(args), false));
      };
    });
    handlers.push(restoreHandler);
  } catch (_a) {
    console.error('failed to patch HTMLCanvasElement.prototype.getContext');
  }
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
var _default = exports.default = initCanvasContextObserver;
},{"../../../../ext/tslib/tslib.es6.js":"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js","../../../utils.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js"}],"node_modules/rrweb/es/rrweb/ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encode = exports.decode = void 0;
/*
 * base64-arraybuffer 1.0.1 <https://github.com/niklasvh/base64-arraybuffer>
 * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var encode = function (arraybuffer) {
  var bytes = new Uint8Array(arraybuffer),
    i,
    len = bytes.length,
    base64 = '';
  for (i = 0; i < len; i += 3) {
    base64 += chars[bytes[i] >> 2];
    base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    base64 += chars[bytes[i + 2] & 63];
  }
  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + '=';
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + '==';
  }
  return base64;
};
exports.encode = encode;
var decode = function (base64) {
  var bufferLength = base64.length * 0.75,
    len = base64.length,
    i,
    p = 0,
    encoded1,
    encoded2,
    encoded3,
    encoded4;
  if (base64[base64.length - 1] === '=') {
    bufferLength--;
    if (base64[base64.length - 2] === '=') {
      bufferLength--;
    }
  }
  var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};
exports.decode = decode;
},{}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/serialize-args.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveWebGLVar = exports.isInstanceOfWebGLObject = void 0;
exports.serializeArg = serializeArg;
exports.serializeArgs = void 0;
exports.variableListFor = variableListFor;
var _tslibEs = require("../../../../ext/tslib/tslib.es6.js");
var _base64ArraybufferEs = require("../../../../../../ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js");
var webGLVarMap = new Map();
function variableListFor(ctx, ctor) {
  var contextMap = webGLVarMap.get(ctx);
  if (!contextMap) {
    contextMap = new Map();
    webGLVarMap.set(ctx, contextMap);
  }
  if (!contextMap.has(ctor)) {
    contextMap.set(ctor, []);
  }
  return contextMap.get(ctor);
}
var saveWebGLVar = function (value, win, ctx) {
  if (!value || !(isInstanceOfWebGLObject(value, win) || typeof value === 'object')) return;
  var name = value.constructor.name;
  var list = variableListFor(ctx, name);
  var index = list.indexOf(value);
  if (index === -1) {
    index = list.length;
    list.push(value);
  }
  return index;
};
exports.saveWebGLVar = saveWebGLVar;
function serializeArg(value, win, ctx) {
  if (value instanceof Array) {
    return value.map(function (arg) {
      return serializeArg(arg, win, ctx);
    });
  } else if (value === null) {
    return value;
  } else if (value instanceof Float32Array || value instanceof Float64Array || value instanceof Int32Array || value instanceof Uint32Array || value instanceof Uint8Array || value instanceof Uint16Array || value instanceof Int16Array || value instanceof Int8Array || value instanceof Uint8ClampedArray) {
    var name_1 = value.constructor.name;
    return {
      rr_type: name_1,
      args: [Object.values(value)]
    };
  } else if (value instanceof ArrayBuffer) {
    var name_2 = value.constructor.name;
    var base64 = (0, _base64ArraybufferEs.encode)(value);
    return {
      rr_type: name_2,
      base64: base64
    };
  } else if (value instanceof DataView) {
    var name_3 = value.constructor.name;
    return {
      rr_type: name_3,
      args: [serializeArg(value.buffer, win, ctx), value.byteOffset, value.byteLength]
    };
  } else if (value instanceof HTMLImageElement) {
    var name_4 = value.constructor.name;
    var src = value.src;
    return {
      rr_type: name_4,
      src: src
    };
  } else if (value instanceof ImageData) {
    var name_5 = value.constructor.name;
    return {
      rr_type: name_5,
      args: [serializeArg(value.data, win, ctx), value.width, value.height]
    };
  } else if (isInstanceOfWebGLObject(value, win) || typeof value === 'object') {
    var name_6 = value.constructor.name;
    var index = saveWebGLVar(value, win, ctx);
    return {
      rr_type: name_6,
      index: index
    };
  }
  return value;
}
var serializeArgs = function (args, win, ctx) {
  return (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(args), false).map(function (arg) {
    return serializeArg(arg, win, ctx);
  });
};
exports.serializeArgs = serializeArgs;
var isInstanceOfWebGLObject = function (value, win) {
  var webGLConstructorNames = ['WebGLActiveInfo', 'WebGLBuffer', 'WebGLFramebuffer', 'WebGLProgram', 'WebGLRenderbuffer', 'WebGLShader', 'WebGLShaderPrecisionFormat', 'WebGLTexture', 'WebGLUniformLocation', 'WebGLVertexArrayObject', 'WebGLVertexArrayObjectOES'];
  var supportedWebGLConstructorNames = webGLConstructorNames.filter(function (name) {
    return typeof win[name] === 'function';
  });
  return Boolean(supportedWebGLConstructorNames.find(function (name) {
    return value instanceof win[name];
  }));
};
exports.isInstanceOfWebGLObject = isInstanceOfWebGLObject;
},{"../../../../ext/tslib/tslib.es6.js":"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js","../../../../../../ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js":"node_modules/rrweb/es/rrweb/ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js"}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/webgl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tslibEs = require("../../../../ext/tslib/tslib.es6.js");
var _types = require("../../../types.js");
var _utils = require("../../../utils.js");
var _serializeArgs = require("./serialize-args.js");
function patchGLPrototype(prototype, type, cb, blockClass, mirror, win) {
  var e_1, _a;
  var handlers = [];
  var props = Object.getOwnPropertyNames(prototype);
  var _loop_1 = function (prop) {
    try {
      if (typeof prototype[prop] !== 'function') {
        return "continue";
      }
      var restoreHandler = (0, _utils.patch)(prototype, prop, function (original) {
        return function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var result = original.apply(this, args);
          (0, _serializeArgs.saveWebGLVar)(result, win, prototype);
          if (!(0, _utils.isBlocked)(this.canvas, blockClass)) {
            var id = mirror.getId(this.canvas);
            var recordArgs = (0, _serializeArgs.serializeArgs)((0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(args), false), win, prototype);
            var mutation = {
              type: type,
              property: prop,
              args: recordArgs
            };
            cb(this.canvas, mutation);
          }
          return result;
        };
      });
      handlers.push(restoreHandler);
    } catch (_b) {
      var hookHandler = (0, _utils.hookSetter)(prototype, prop, {
        set: function (v) {
          cb(this.canvas, {
            type: type,
            property: prop,
            args: [v],
            setter: true
          });
        }
      });
      handlers.push(hookHandler);
    }
  };
  try {
    for (var props_1 = (0, _tslibEs.__values)(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
      var prop = props_1_1.value;
      _loop_1(prop);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return handlers;
}
function initCanvasWebGLMutationObserver(cb, win, blockClass, mirror) {
  var handlers = [];
  handlers.push.apply(handlers, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(patchGLPrototype(win.WebGLRenderingContext.prototype, _types.CanvasContext.WebGL, cb, blockClass, mirror, win)), false));
  if (typeof win.WebGL2RenderingContext !== 'undefined') {
    handlers.push.apply(handlers, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(patchGLPrototype(win.WebGL2RenderingContext.prototype, _types.CanvasContext.WebGL2, cb, blockClass, mirror, win)), false));
  }
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
var _default = exports.default = initCanvasWebGLMutationObserver;
},{"../../../../ext/tslib/tslib.es6.js":"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js","../../../types.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js","../../../utils.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js","./serialize-args.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/serialize-args.js"}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas-manager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasManager = void 0;
var _tslibEs = require("../../../../ext/tslib/tslib.es6.js");
var _d = _interopRequireDefault(require("./2d.js"));
var _canvas = _interopRequireDefault(require("./canvas.js"));
var _webgl = _interopRequireDefault(require("./webgl.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CanvasManager = exports.CanvasManager = function () {
  function CanvasManager(options) {
    this.pendingCanvasMutations = new Map();
    this.rafStamps = {
      latestId: 0,
      invokeId: null
    };
    this.frozen = false;
    this.locked = false;
    this.processMutation = function (target, mutation) {
      var newFrame = this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId;
      if (newFrame || !this.rafStamps.invokeId) this.rafStamps.invokeId = this.rafStamps.latestId;
      if (!this.pendingCanvasMutations.has(target)) {
        this.pendingCanvasMutations.set(target, []);
      }
      this.pendingCanvasMutations.get(target).push(mutation);
    };
    this.mutationCb = options.mutationCb;
    this.mirror = options.mirror;
    if (options.recordCanvas === true) this.initCanvasMutationObserver(options.win, options.blockClass);
  }
  CanvasManager.prototype.reset = function () {
    this.pendingCanvasMutations.clear();
    this.resetObservers && this.resetObservers();
  };
  CanvasManager.prototype.freeze = function () {
    this.frozen = true;
  };
  CanvasManager.prototype.unfreeze = function () {
    this.frozen = false;
  };
  CanvasManager.prototype.lock = function () {
    this.locked = true;
  };
  CanvasManager.prototype.unlock = function () {
    this.locked = false;
  };
  CanvasManager.prototype.initCanvasMutationObserver = function (win, blockClass) {
    this.startRAFTimestamping();
    this.startPendingCanvasMutationFlusher();
    var canvasContextReset = (0, _canvas.default)(win, blockClass);
    var canvas2DReset = (0, _d.default)(this.processMutation.bind(this), win, blockClass, this.mirror);
    var canvasWebGL1and2Reset = (0, _webgl.default)(this.processMutation.bind(this), win, blockClass, this.mirror);
    this.resetObservers = function () {
      canvasContextReset();
      canvas2DReset();
      canvasWebGL1and2Reset();
    };
  };
  CanvasManager.prototype.startPendingCanvasMutationFlusher = function () {
    var _this = this;
    requestAnimationFrame(function () {
      return _this.flushPendingCanvasMutations();
    });
  };
  CanvasManager.prototype.startRAFTimestamping = function () {
    var _this = this;
    var setLatestRAFTimestamp = function (timestamp) {
      _this.rafStamps.latestId = timestamp;
      requestAnimationFrame(setLatestRAFTimestamp);
    };
    requestAnimationFrame(setLatestRAFTimestamp);
  };
  CanvasManager.prototype.flushPendingCanvasMutations = function () {
    var _this = this;
    this.pendingCanvasMutations.forEach(function (values, canvas) {
      var id = _this.mirror.getId(canvas);
      _this.flushPendingCanvasMutationFor(canvas, id);
    });
    requestAnimationFrame(function () {
      return _this.flushPendingCanvasMutations();
    });
  };
  CanvasManager.prototype.flushPendingCanvasMutationFor = function (canvas, id) {
    if (this.frozen || this.locked) {
      return;
    }
    var valuesWithType = this.pendingCanvasMutations.get(canvas);
    if (!valuesWithType || id === -1) return;
    var values = valuesWithType.map(function (value) {
      value.type;
      var rest = (0, _tslibEs.__rest)(value, ["type"]);
      return rest;
    });
    var type = valuesWithType[0].type;
    this.mutationCb({
      id: id,
      type: type,
      commands: values
    });
    this.pendingCanvasMutations.delete(canvas);
  };
  return CanvasManager;
}();
},{"../../../../ext/tslib/tslib.es6.js":"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js","./2d.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/2d.js","./canvas.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas.js","./webgl.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/webgl.js"}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tslibEs = require("../../ext/tslib/tslib.es6.js");
var _rrwebSnapshot = require("../../../rrweb-snapshot/es/rrweb-snapshot.js");
var _observer = require("./observer.js");
var _utils = require("../utils.js");
var _types = require("../types.js");
var _iframeManager = require("./iframe-manager.js");
var _shadowDomManager = require("./shadow-dom-manager.js");
var _canvasManager = require("./observers/canvas/canvas-manager.js");
function wrapEvent(e) {
  return (0, _tslibEs.__assign)((0, _tslibEs.__assign)({}, e), {
    timestamp: Date.now()
  });
}
var wrappedEmit;
var takeFullSnapshot;
var mirror = (0, _utils.createMirror)();
function record(options) {
  if (options === void 0) {
    options = {};
  }
  var emit = options.emit,
    checkoutEveryNms = options.checkoutEveryNms,
    checkoutEveryNth = options.checkoutEveryNth,
    _a = options.blockClass,
    blockClass = _a === void 0 ? 'rr-block' : _a,
    _b = options.blockSelector,
    blockSelector = _b === void 0 ? null : _b,
    _c = options.ignoreClass,
    ignoreClass = _c === void 0 ? 'rr-ignore' : _c,
    _d = options.maskTextClass,
    maskTextClass = _d === void 0 ? 'rr-mask' : _d,
    _e = options.maskTextSelector,
    maskTextSelector = _e === void 0 ? null : _e,
    _f = options.inlineStylesheet,
    inlineStylesheet = _f === void 0 ? true : _f,
    maskAllInputs = options.maskAllInputs,
    _maskInputOptions = options.maskInputOptions,
    _slimDOMOptions = options.slimDOMOptions,
    maskInputFn = options.maskInputFn,
    maskTextFn = options.maskTextFn,
    hooks = options.hooks,
    packFn = options.packFn,
    _g = options.sampling,
    sampling = _g === void 0 ? {} : _g,
    mousemoveWait = options.mousemoveWait,
    _h = options.recordCanvas,
    recordCanvas = _h === void 0 ? false : _h,
    _j = options.userTriggeredOnInput,
    userTriggeredOnInput = _j === void 0 ? false : _j,
    _k = options.collectFonts,
    collectFonts = _k === void 0 ? false : _k,
    _l = options.inlineImages,
    inlineImages = _l === void 0 ? false : _l,
    plugins = options.plugins,
    _m = options.keepIframeSrcFn,
    keepIframeSrcFn = _m === void 0 ? function () {
      return false;
    } : _m;
  if (!emit) {
    throw new Error('emit function is required');
  }
  if (mousemoveWait !== undefined && sampling.mousemove === undefined) {
    sampling.mousemove = mousemoveWait;
  }
  var maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    'datetime-local': true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true,
    password: true
  } : _maskInputOptions !== undefined ? _maskInputOptions : {
    password: true
  };
  var slimDOMOptions = _slimDOMOptions === true || _slimDOMOptions === 'all' ? {
    script: true,
    comment: true,
    headFavicon: true,
    headWhitespace: true,
    headMetaSocial: true,
    headMetaRobots: true,
    headMetaHttpEquiv: true,
    headMetaVerification: true,
    headMetaAuthorship: _slimDOMOptions === 'all',
    headMetaDescKeywords: _slimDOMOptions === 'all'
  } : _slimDOMOptions ? _slimDOMOptions : {};
  (0, _utils.polyfill)();
  var lastFullSnapshotEvent;
  var incrementalSnapshotCount = 0;
  var eventProcessor = function (e) {
    var e_1, _a;
    try {
      for (var _b = (0, _tslibEs.__values)(plugins || []), _c = _b.next(); !_c.done; _c = _b.next()) {
        var plugin = _c.value;
        if (plugin.eventProcessor) {
          e = plugin.eventProcessor(e);
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    if (packFn) {
      e = packFn(e);
    }
    return e;
  };
  wrappedEmit = function (e, isCheckout) {
    var _a;
    if (((_a = _observer.mutationBuffers[0]) === null || _a === void 0 ? void 0 : _a.isFrozen()) && e.type !== _types.EventType.FullSnapshot && !(e.type === _types.EventType.IncrementalSnapshot && e.data.source === _types.IncrementalSource.Mutation)) {
      _observer.mutationBuffers.forEach(function (buf) {
        return buf.unfreeze();
      });
    }
    emit(eventProcessor(e), isCheckout);
    if (e.type === _types.EventType.FullSnapshot) {
      lastFullSnapshotEvent = e;
      incrementalSnapshotCount = 0;
    } else if (e.type === _types.EventType.IncrementalSnapshot) {
      if (e.data.source === _types.IncrementalSource.Mutation && e.data.isAttachIframe) {
        return;
      }
      incrementalSnapshotCount++;
      var exceedCount = checkoutEveryNth && incrementalSnapshotCount >= checkoutEveryNth;
      var exceedTime = checkoutEveryNms && e.timestamp - lastFullSnapshotEvent.timestamp > checkoutEveryNms;
      if (exceedCount || exceedTime) {
        takeFullSnapshot(true);
      }
    }
  };
  var wrappedMutationEmit = function (m) {
    wrappedEmit(wrapEvent({
      type: _types.EventType.IncrementalSnapshot,
      data: (0, _tslibEs.__assign)({
        source: _types.IncrementalSource.Mutation
      }, m)
    }));
  };
  var wrappedScrollEmit = function (p) {
    return wrappedEmit(wrapEvent({
      type: _types.EventType.IncrementalSnapshot,
      data: (0, _tslibEs.__assign)({
        source: _types.IncrementalSource.Scroll
      }, p)
    }));
  };
  var wrappedCanvasMutationEmit = function (p) {
    return wrappedEmit(wrapEvent({
      type: _types.EventType.IncrementalSnapshot,
      data: (0, _tslibEs.__assign)({
        source: _types.IncrementalSource.CanvasMutation
      }, p)
    }));
  };
  var iframeManager = new _iframeManager.IframeManager({
    mutationCb: wrappedMutationEmit
  });
  var canvasManager = new _canvasManager.CanvasManager({
    recordCanvas: recordCanvas,
    mutationCb: wrappedCanvasMutationEmit,
    win: window,
    blockClass: blockClass,
    mirror: mirror
  });
  var shadowDomManager = new _shadowDomManager.ShadowDomManager({
    mutationCb: wrappedMutationEmit,
    scrollCb: wrappedScrollEmit,
    bypassOptions: {
      blockClass: blockClass,
      blockSelector: blockSelector,
      maskTextClass: maskTextClass,
      maskTextSelector: maskTextSelector,
      inlineStylesheet: inlineStylesheet,
      maskInputOptions: maskInputOptions,
      maskTextFn: maskTextFn,
      maskInputFn: maskInputFn,
      recordCanvas: recordCanvas,
      inlineImages: inlineImages,
      sampling: sampling,
      slimDOMOptions: slimDOMOptions,
      iframeManager: iframeManager,
      canvasManager: canvasManager
    },
    mirror: mirror
  });
  takeFullSnapshot = function (isCheckout) {
    var _a, _b, _c, _d;
    if (isCheckout === void 0) {
      isCheckout = false;
    }
    wrappedEmit(wrapEvent({
      type: _types.EventType.Meta,
      data: {
        href: window.location.href,
        width: (0, _utils.getWindowWidth)(),
        height: (0, _utils.getWindowHeight)()
      }
    }), isCheckout);
    _observer.mutationBuffers.forEach(function (buf) {
      return buf.lock();
    });
    var _e = (0, _tslibEs.__read)((0, _rrwebSnapshot.snapshot)(document, {
        blockClass: blockClass,
        blockSelector: blockSelector,
        maskTextClass: maskTextClass,
        maskTextSelector: maskTextSelector,
        inlineStylesheet: inlineStylesheet,
        maskAllInputs: maskInputOptions,
        maskTextFn: maskTextFn,
        slimDOM: slimDOMOptions,
        recordCanvas: recordCanvas,
        inlineImages: inlineImages,
        onSerialize: function (n) {
          if ((0, _utils.isIframeINode)(n)) {
            iframeManager.addIframe(n);
          }
          if ((0, _utils.hasShadowRoot)(n)) {
            shadowDomManager.addShadowRoot(n.shadowRoot, document);
          }
        },
        onIframeLoad: function (iframe, childSn) {
          iframeManager.attachIframe(iframe, childSn);
          shadowDomManager.observeAttachShadow(iframe);
        },
        keepIframeSrcFn: keepIframeSrcFn
      }), 2),
      node = _e[0],
      idNodeMap = _e[1];
    if (!node) {
      return console.warn('Failed to snapshot the document');
    }
    mirror.map = idNodeMap;
    wrappedEmit(wrapEvent({
      type: _types.EventType.FullSnapshot,
      data: {
        node: node,
        initialOffset: {
          left: window.pageXOffset !== undefined ? window.pageXOffset : (document === null || document === void 0 ? void 0 : document.documentElement.scrollLeft) || ((_b = (_a = document === null || document === void 0 ? void 0 : document.body) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.scrollLeft) || (document === null || document === void 0 ? void 0 : document.body.scrollLeft) || 0,
          top: window.pageYOffset !== undefined ? window.pageYOffset : (document === null || document === void 0 ? void 0 : document.documentElement.scrollTop) || ((_d = (_c = document === null || document === void 0 ? void 0 : document.body) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.scrollTop) || (document === null || document === void 0 ? void 0 : document.body.scrollTop) || 0
        }
      }
    }));
    _observer.mutationBuffers.forEach(function (buf) {
      return buf.unlock();
    });
  };
  try {
    var handlers_1 = [];
    handlers_1.push((0, _utils.on)('DOMContentLoaded', function () {
      wrappedEmit(wrapEvent({
        type: _types.EventType.DomContentLoaded,
        data: {}
      }));
    }));
    var observe_1 = function (doc) {
      var _a;
      return (0, _observer.initObservers)({
        mutationCb: wrappedMutationEmit,
        mousemoveCb: function (positions, source) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: {
              source: source,
              positions: positions
            }
          }));
        },
        mouseInteractionCb: function (d) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: (0, _tslibEs.__assign)({
              source: _types.IncrementalSource.MouseInteraction
            }, d)
          }));
        },
        scrollCb: wrappedScrollEmit,
        viewportResizeCb: function (d) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: (0, _tslibEs.__assign)({
              source: _types.IncrementalSource.ViewportResize
            }, d)
          }));
        },
        inputCb: function (v) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: (0, _tslibEs.__assign)({
              source: _types.IncrementalSource.Input
            }, v)
          }));
        },
        mediaInteractionCb: function (p) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: (0, _tslibEs.__assign)({
              source: _types.IncrementalSource.MediaInteraction
            }, p)
          }));
        },
        styleSheetRuleCb: function (r) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: (0, _tslibEs.__assign)({
              source: _types.IncrementalSource.StyleSheetRule
            }, r)
          }));
        },
        styleDeclarationCb: function (r) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: (0, _tslibEs.__assign)({
              source: _types.IncrementalSource.StyleDeclaration
            }, r)
          }));
        },
        canvasMutationCb: wrappedCanvasMutationEmit,
        fontCb: function (p) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: (0, _tslibEs.__assign)({
              source: _types.IncrementalSource.Font
            }, p)
          }));
        },
        blockClass: blockClass,
        ignoreClass: ignoreClass,
        maskTextClass: maskTextClass,
        maskTextSelector: maskTextSelector,
        maskInputOptions: maskInputOptions,
        inlineStylesheet: inlineStylesheet,
        sampling: sampling,
        recordCanvas: recordCanvas,
        inlineImages: inlineImages,
        userTriggeredOnInput: userTriggeredOnInput,
        collectFonts: collectFonts,
        doc: doc,
        maskInputFn: maskInputFn,
        maskTextFn: maskTextFn,
        blockSelector: blockSelector,
        slimDOMOptions: slimDOMOptions,
        mirror: mirror,
        iframeManager: iframeManager,
        shadowDomManager: shadowDomManager,
        canvasManager: canvasManager,
        plugins: ((_a = plugins === null || plugins === void 0 ? void 0 : plugins.filter(function (p) {
          return p.observer;
        })) === null || _a === void 0 ? void 0 : _a.map(function (p) {
          return {
            observer: p.observer,
            options: p.options,
            callback: function (payload) {
              return wrappedEmit(wrapEvent({
                type: _types.EventType.Plugin,
                data: {
                  plugin: p.name,
                  payload: payload
                }
              }));
            }
          };
        })) || []
      }, hooks);
    };
    iframeManager.addLoadListener(function (iframeEl) {
      handlers_1.push(observe_1(iframeEl.contentDocument));
    });
    var init_1 = function () {
      takeFullSnapshot();
      handlers_1.push(observe_1(document));
    };
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      init_1();
    } else {
      handlers_1.push((0, _utils.on)('load', function () {
        wrappedEmit(wrapEvent({
          type: _types.EventType.Load,
          data: {}
        }));
        init_1();
      }, window));
    }
    return function () {
      handlers_1.forEach(function (h) {
        return h();
      });
    };
  } catch (error) {
    console.warn(error);
  }
}
record.addCustomEvent = function (tag, payload) {
  if (!wrappedEmit) {
    throw new Error('please add custom event after start recording');
  }
  wrappedEmit(wrapEvent({
    type: _types.EventType.Custom,
    data: {
      tag: tag,
      payload: payload
    }
  }));
};
record.freezePage = function () {
  _observer.mutationBuffers.forEach(function (buf) {
    return buf.freeze();
  });
};
record.takeFullSnapshot = function (isCheckout) {
  if (!takeFullSnapshot) {
    throw new Error('please take full snapshot after start recording');
  }
  takeFullSnapshot(isCheckout);
};
record.mirror = mirror;
var _default = exports.default = record;
},{"../../ext/tslib/tslib.es6.js":"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js","../../../rrweb-snapshot/es/rrweb-snapshot.js":"node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js","./observer.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observer.js","../utils.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js","../types.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js","./iframe-manager.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/iframe-manager.js","./shadow-dom-manager.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/shadow-dom-manager.js","./observers/canvas/canvas-manager.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas-manager.js"}],"node_modules/rrweb/es/rrweb/ext/mitt/dist/mitt.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//      
// An event handler can take an optional event argument
// and should not return a value

// An array of all currently registered event handlers for a type

// A map of event types and their corresponding event handlers.

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all) {
  all = all || Object.create(null);
  return {
    /**
     * Register an event handler for the given type.
     *
     * @param  {String} type	Type of event to listen for, or `"*"` for all events
     * @param  {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on: function on(type, handler) {
      (all[type] || (all[type] = [])).push(handler);
    },
    /**
     * Remove an event handler for the given type.
     *
     * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
     * @param  {Function} handler Handler function to remove
     * @memberOf mitt
     */
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    /**
     * Invoke all handlers for the given type.
     * If present, `"*"` handlers are invoked after type-matched handlers.
     *
     * @param {String} type  The event type to invoke
     * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit: function emit(type, evt) {
      (all[type] || []).slice().map(function (handler) {
        handler(evt);
      });
      (all['*'] || []).slice().map(function (handler) {
        handler(type, evt);
      });
    }
  };
}
var _default = exports.default = mitt;
},{}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/smoothscroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.polyfill = polyfill;
function polyfill(w, d) {
  if (w === void 0) {
    w = window;
  }
  if (d === void 0) {
    d = document;
  }
  if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
    return;
  }
  var Element = w.HTMLElement || w.Element;
  var SCROLL_TIME = 468;
  var original = {
    scroll: w.scroll || w.scrollTo,
    scrollBy: w.scrollBy,
    elementScroll: Element.prototype.scroll || scrollElement,
    scrollIntoView: Element.prototype.scrollIntoView
  };
  var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
  function isMicrosoftBrowser(userAgent) {
    var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
    return new RegExp(userAgentPatterns.join('|')).test(userAgent);
  }
  var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
  function scrollElement(x, y) {
    this.scrollLeft = x;
    this.scrollTop = y;
  }
  function ease(k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  }
  function shouldBailOut(firstArg) {
    if (firstArg === null || typeof firstArg !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
      return true;
    }
    if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
      return false;
    }
    throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
  }
  function hasScrollableSpace(el, axis) {
    if (axis === 'Y') {
      return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
    }
    if (axis === 'X') {
      return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
    }
  }
  function canOverflow(el, axis) {
    var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
    return overflowValue === 'auto' || overflowValue === 'scroll';
  }
  function isScrollable(el) {
    var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
    var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
    return isScrollableY || isScrollableX;
  }
  function findScrollableParent(el) {
    while (el !== d.body && isScrollable(el) === false) {
      el = el.parentNode || el.host;
    }
    return el;
  }
  function step(context) {
    var time = now();
    var value;
    var currentX;
    var currentY;
    var elapsed = (time - context.startTime) / SCROLL_TIME;
    elapsed = elapsed > 1 ? 1 : elapsed;
    value = ease(elapsed);
    currentX = context.startX + (context.x - context.startX) * value;
    currentY = context.startY + (context.y - context.startY) * value;
    context.method.call(context.scrollable, currentX, currentY);
    if (currentX !== context.x || currentY !== context.y) {
      w.requestAnimationFrame(step.bind(w, context));
    }
  }
  function smoothScroll(el, x, y) {
    var scrollable;
    var startX;
    var startY;
    var method;
    var startTime = now();
    if (el === d.body) {
      scrollable = w;
      startX = w.scrollX || w.pageXOffset;
      startY = w.scrollY || w.pageYOffset;
      method = original.scroll;
    } else {
      scrollable = el;
      startX = el.scrollLeft;
      startY = el.scrollTop;
      method = scrollElement;
    }
    step({
      scrollable: scrollable,
      method: method,
      startTime: startTime,
      startX: startX,
      startY: startY,
      x: x,
      y: y
    });
  }
  w.scroll = w.scrollTo = function () {
    if (arguments[0] === undefined) {
      return;
    }
    if (shouldBailOut(arguments[0]) === true) {
      original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
      return;
    }
    smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
  };
  w.scrollBy = function () {
    if (arguments[0] === undefined) {
      return;
    }
    if (shouldBailOut(arguments[0])) {
      original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
      return;
    }
    smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
  };
  Element.prototype.scroll = Element.prototype.scrollTo = function () {
    if (arguments[0] === undefined) {
      return;
    }
    if (shouldBailOut(arguments[0]) === true) {
      if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
        throw new SyntaxError('Value could not be converted');
      }
      original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
      return;
    }
    var left = arguments[0].left;
    var top = arguments[0].top;
    smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
  };
  Element.prototype.scrollBy = function () {
    if (arguments[0] === undefined) {
      return;
    }
    if (shouldBailOut(arguments[0]) === true) {
      original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
      return;
    }
    this.scroll({
      left: ~~arguments[0].left + this.scrollLeft,
      top: ~~arguments[0].top + this.scrollTop,
      behavior: arguments[0].behavior
    });
  };
  Element.prototype.scrollIntoView = function () {
    if (shouldBailOut(arguments[0]) === true) {
      original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
      return;
    }
    var scrollableParent = findScrollableParent(this);
    var parentRects = scrollableParent.getBoundingClientRect();
    var clientRects = this.getBoundingClientRect();
    if (scrollableParent !== d.body) {
      smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);
      if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
        w.scrollBy({
          left: parentRects.left,
          top: parentRects.top,
          behavior: 'smooth'
        });
      }
    } else {
      w.scrollBy({
        left: clientRects.left,
        top: clientRects.top,
        behavior: 'smooth'
      });
    }
  };
}
},{}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/timer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timer = void 0;
exports.addDelay = addDelay;
var _types = require("../types.js");
var Timer = exports.Timer = function () {
  function Timer(actions, speed) {
    if (actions === void 0) {
      actions = [];
    }
    this.timeOffset = 0;
    this.raf = null;
    this.actions = actions;
    this.speed = speed;
  }
  Timer.prototype.addAction = function (action) {
    var index = this.findActionIndex(action);
    this.actions.splice(index, 0, action);
  };
  Timer.prototype.addActions = function (actions) {
    this.actions = this.actions.concat(actions);
  };
  Timer.prototype.start = function () {
    this.timeOffset = 0;
    var lastTimestamp = performance.now();
    var actions = this.actions;
    var self = this;
    function check() {
      var time = performance.now();
      self.timeOffset += (time - lastTimestamp) * self.speed;
      lastTimestamp = time;
      while (actions.length) {
        var action = actions[0];
        if (self.timeOffset >= action.delay) {
          actions.shift();
          action.doAction();
        } else {
          break;
        }
      }
      if (actions.length > 0 || self.liveMode) {
        self.raf = requestAnimationFrame(check);
      }
    }
    this.raf = requestAnimationFrame(check);
  };
  Timer.prototype.clear = function () {
    if (this.raf) {
      cancelAnimationFrame(this.raf);
      this.raf = null;
    }
    this.actions.length = 0;
  };
  Timer.prototype.setSpeed = function (speed) {
    this.speed = speed;
  };
  Timer.prototype.toggleLiveMode = function (mode) {
    this.liveMode = mode;
  };
  Timer.prototype.isActive = function () {
    return this.raf !== null;
  };
  Timer.prototype.findActionIndex = function (action) {
    var start = 0;
    var end = this.actions.length - 1;
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      if (this.actions[mid].delay < action.delay) {
        start = mid + 1;
      } else if (this.actions[mid].delay > action.delay) {
        end = mid - 1;
      } else {
        return mid + 1;
      }
    }
    return start;
  };
  return Timer;
}();
function addDelay(event, baselineTime) {
  if (event.type === _types.EventType.IncrementalSnapshot && event.data.source === _types.IncrementalSource.MouseMove) {
    var firstOffset = event.data.positions[0].timeOffset;
    var firstTimestamp = event.timestamp + firstOffset;
    event.delay = firstTimestamp - baselineTime;
    return firstTimestamp - baselineTime;
  }
  event.delay = event.timestamp - baselineTime;
  return event.delay;
}
},{"../types.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js"}],"node_modules/rrweb/es/rrweb/ext/@xstate/fsm/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpreterStatus = void 0;
exports.assign = o;
exports.createMachine = s;
exports.interpret = v;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t, n) {
  var e = "function" == typeof Symbol && t[Symbol.iterator];
  if (!e) return t;
  var r,
    o,
    i = e.call(t),
    a = [];
  try {
    for (; (void 0 === n || n-- > 0) && !(r = i.next()).done;) a.push(r.value);
  } catch (t) {
    o = {
      error: t
    };
  } finally {
    try {
      r && !r.done && (e = i.return) && e.call(i);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
var n;
!function (t) {
  t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
}(n || (exports.InterpreterStatus = n = {}));
var e = {
  type: "xstate.init"
};
function r(t) {
  return void 0 === t ? [] : [].concat(t);
}
function o(t) {
  return {
    type: "xstate.assign",
    assignment: t
  };
}
function i(t, n) {
  return "string" == typeof (t = "string" == typeof t && n && n[t] ? n[t] : t) ? {
    type: t
  } : "function" == typeof t ? {
    type: t.name,
    exec: t
  } : t;
}
function a(t) {
  return function (n) {
    return t === n;
  };
}
function u(t) {
  return "string" == typeof t ? {
    type: t
  } : t;
}
function c(t, n) {
  return {
    value: t,
    context: n,
    actions: [],
    changed: !1,
    matches: a(t)
  };
}
function f(t, n, e) {
  var r = n,
    o = !1;
  return [t.filter(function (t) {
    if ("xstate.assign" === t.type) {
      o = !0;
      var n = Object.assign({}, r);
      return "function" == typeof t.assignment ? n = t.assignment(r, e) : Object.keys(t.assignment).forEach(function (o) {
        n[o] = "function" == typeof t.assignment[o] ? t.assignment[o](r, e) : t.assignment[o];
      }), r = n, !1;
    }
    return !0;
  }), r, o];
}
function s(n, o) {
  void 0 === o && (o = {});
  var s = t(f(r(n.states[n.initial].entry).map(function (t) {
      return i(t, o.actions);
    }), n.context, e), 2),
    l = s[0],
    v = s[1],
    y = {
      config: n,
      _options: o,
      initialState: {
        value: n.initial,
        actions: l,
        context: v,
        matches: a(n.initial)
      },
      transition: function (e, o) {
        var s,
          l,
          v = "string" == typeof e ? {
            value: e,
            context: n.context
          } : e,
          p = v.value,
          g = v.context,
          d = u(o),
          x = n.states[p];
        if (x.on) {
          var m = r(x.on[d.type]);
          try {
            for (var h = function (t) {
                var n = "function" == typeof Symbol && Symbol.iterator,
                  e = n && t[n],
                  r = 0;
                if (e) return e.call(t);
                if (t && "number" == typeof t.length) return {
                  next: function () {
                    return t && r >= t.length && (t = void 0), {
                      value: t && t[r++],
                      done: !t
                    };
                  }
                };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
              }(m), b = h.next(); !b.done; b = h.next()) {
              var S = b.value;
              if (void 0 === S) return c(p, g);
              var w = "string" == typeof S ? {
                  target: S
                } : S,
                j = w.target,
                E = w.actions,
                R = void 0 === E ? [] : E,
                N = w.cond,
                O = void 0 === N ? function () {
                  return !0;
                } : N,
                _ = void 0 === j,
                k = null != j ? j : p,
                T = n.states[k];
              if (O(g, d)) {
                var q = t(f((_ ? r(R) : [].concat(x.exit, R, T.entry).filter(function (t) {
                    return t;
                  })).map(function (t) {
                    return i(t, y._options.actions);
                  }), g, d), 3),
                  z = q[0],
                  A = q[1],
                  B = q[2],
                  C = null != j ? j : p;
                return {
                  value: C,
                  context: A,
                  actions: z,
                  changed: j !== p || z.length > 0 || B,
                  matches: a(C)
                };
              }
            }
          } catch (t) {
            s = {
              error: t
            };
          } finally {
            try {
              b && !b.done && (l = h.return) && l.call(h);
            } finally {
              if (s) throw s.error;
            }
          }
        }
        return c(p, g);
      }
    };
  return y;
}
var l = function (t, n) {
  return t.actions.forEach(function (e) {
    var r = e.exec;
    return r && r(t.context, n);
  });
};
function v(t) {
  var r = t.initialState,
    o = n.NotStarted,
    i = new Set(),
    c = {
      _machine: t,
      send: function (e) {
        o === n.Running && (r = t.transition(r, e), l(r, u(e)), i.forEach(function (t) {
          return t(r);
        }));
      },
      subscribe: function (t) {
        return i.add(t), t(r), {
          unsubscribe: function () {
            return i.delete(t);
          }
        };
      },
      start: function (i) {
        if (i) {
          var u = "object" == typeof i ? i : {
            context: t.config.context,
            value: i
          };
          r = {
            value: u.value,
            actions: [],
            context: u.context,
            matches: a(u.value)
          };
        }
        return o = n.Running, l(r, e), c;
      },
      stop: function () {
        return o = n.Stopped, i.clear(), c;
      },
      get state() {
        return r;
      },
      get status() {
        return o;
      }
    };
  return c;
}
},{}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/machine.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPlayerService = createPlayerService;
exports.createSpeedService = createSpeedService;
exports.discardPriorSnapshots = discardPriorSnapshots;
var _tslibEs = require("../../ext/tslib/tslib.es6.js");
var _index = require("../../../../ext/@xstate/fsm/es/index.js");
var _types = require("../types.js");
var _timer = require("./timer.js");
function discardPriorSnapshots(events, baselineTime) {
  for (var idx = events.length - 1; idx >= 0; idx--) {
    var event_1 = events[idx];
    if (event_1.type === _types.EventType.Meta) {
      if (event_1.timestamp <= baselineTime) {
        return events.slice(idx);
      }
    }
  }
  return events;
}
function createPlayerService(context, _a) {
  var getCastFn = _a.getCastFn,
    applyEventsSynchronously = _a.applyEventsSynchronously,
    emitter = _a.emitter;
  var playerMachine = (0, _index.createMachine)({
    id: 'player',
    context: context,
    initial: 'paused',
    states: {
      playing: {
        on: {
          PAUSE: {
            target: 'paused',
            actions: ['pause']
          },
          CAST_EVENT: {
            target: 'playing',
            actions: 'castEvent'
          },
          END: {
            target: 'paused',
            actions: ['resetLastPlayedEvent', 'pause']
          },
          ADD_EVENT: {
            target: 'playing',
            actions: ['addEvent']
          }
        }
      },
      paused: {
        on: {
          PLAY: {
            target: 'playing',
            actions: ['recordTimeOffset', 'play']
          },
          CAST_EVENT: {
            target: 'paused',
            actions: 'castEvent'
          },
          TO_LIVE: {
            target: 'live',
            actions: ['startLive']
          },
          ADD_EVENT: {
            target: 'paused',
            actions: ['addEvent']
          }
        }
      },
      live: {
        on: {
          ADD_EVENT: {
            target: 'live',
            actions: ['addEvent']
          },
          CAST_EVENT: {
            target: 'live',
            actions: ['castEvent']
          }
        }
      }
    }
  }, {
    actions: {
      castEvent: (0, _index.assign)({
        lastPlayedEvent: function (ctx, event) {
          if (event.type === 'CAST_EVENT') {
            return event.payload.event;
          }
          return ctx.lastPlayedEvent;
        }
      }),
      recordTimeOffset: (0, _index.assign)(function (ctx, event) {
        var timeOffset = ctx.timeOffset;
        if ('payload' in event && 'timeOffset' in event.payload) {
          timeOffset = event.payload.timeOffset;
        }
        return (0, _tslibEs.__assign)((0, _tslibEs.__assign)({}, ctx), {
          timeOffset: timeOffset,
          baselineTime: ctx.events[0].timestamp + timeOffset
        });
      }),
      play: function (ctx) {
        var e_1, _a, e_2, _b;
        var _c;
        var timer = ctx.timer,
          events = ctx.events,
          baselineTime = ctx.baselineTime,
          lastPlayedEvent = ctx.lastPlayedEvent;
        timer.clear();
        try {
          for (var events_1 = (0, _tslibEs.__values)(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
            var event_2 = events_1_1.value;
            (0, _timer.addDelay)(event_2, baselineTime);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        var neededEvents = discardPriorSnapshots(events, baselineTime);
        var lastPlayedTimestamp = lastPlayedEvent === null || lastPlayedEvent === void 0 ? void 0 : lastPlayedEvent.timestamp;
        if ((lastPlayedEvent === null || lastPlayedEvent === void 0 ? void 0 : lastPlayedEvent.type) === _types.EventType.IncrementalSnapshot && lastPlayedEvent.data.source === _types.IncrementalSource.MouseMove) {
          lastPlayedTimestamp = lastPlayedEvent.timestamp + ((_c = lastPlayedEvent.data.positions[0]) === null || _c === void 0 ? void 0 : _c.timeOffset);
        }
        if (baselineTime < (lastPlayedTimestamp || 0)) {
          emitter.emit(_types.ReplayerEvents.PlayBack);
        }
        var syncEvents = new Array();
        var actions = new Array();
        var _loop_1 = function (event_3) {
          if (lastPlayedTimestamp && lastPlayedTimestamp < baselineTime && (event_3.timestamp <= lastPlayedTimestamp || event_3 === lastPlayedEvent)) {
            return "continue";
          }
          if (event_3.timestamp < baselineTime) {
            syncEvents.push(event_3);
          } else {
            var castFn_1 = getCastFn(event_3, false);
            actions.push({
              doAction: function () {
                castFn_1();
              },
              delay: event_3.delay
            });
          }
        };
        try {
          for (var neededEvents_1 = (0, _tslibEs.__values)(neededEvents), neededEvents_1_1 = neededEvents_1.next(); !neededEvents_1_1.done; neededEvents_1_1 = neededEvents_1.next()) {
            var event_3 = neededEvents_1_1.value;
            _loop_1(event_3);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (neededEvents_1_1 && !neededEvents_1_1.done && (_b = neededEvents_1.return)) _b.call(neededEvents_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
        applyEventsSynchronously(syncEvents);
        emitter.emit(_types.ReplayerEvents.Flush);
        timer.addActions(actions);
        timer.start();
      },
      pause: function (ctx) {
        ctx.timer.clear();
      },
      resetLastPlayedEvent: (0, _index.assign)(function (ctx) {
        return (0, _tslibEs.__assign)((0, _tslibEs.__assign)({}, ctx), {
          lastPlayedEvent: null
        });
      }),
      startLive: (0, _index.assign)({
        baselineTime: function (ctx, event) {
          ctx.timer.toggleLiveMode(true);
          ctx.timer.start();
          if (event.type === 'TO_LIVE' && event.payload.baselineTime) {
            return event.payload.baselineTime;
          }
          return Date.now();
        }
      }),
      addEvent: (0, _index.assign)(function (ctx, machineEvent) {
        var baselineTime = ctx.baselineTime,
          timer = ctx.timer,
          events = ctx.events;
        if (machineEvent.type === 'ADD_EVENT') {
          var event_4 = machineEvent.payload.event;
          (0, _timer.addDelay)(event_4, baselineTime);
          var end = events.length - 1;
          if (!events[end] || events[end].timestamp <= event_4.timestamp) {
            events.push(event_4);
          } else {
            var insertionIndex = -1;
            var start = 0;
            while (start <= end) {
              var mid = Math.floor((start + end) / 2);
              if (events[mid].timestamp <= event_4.timestamp) {
                start = mid + 1;
              } else {
                end = mid - 1;
              }
            }
            if (insertionIndex === -1) {
              insertionIndex = start;
            }
            events.splice(insertionIndex, 0, event_4);
          }
          var isSync = event_4.timestamp < baselineTime;
          var castFn_2 = getCastFn(event_4, isSync);
          if (isSync) {
            castFn_2();
          } else if (timer.isActive()) {
            timer.addAction({
              doAction: function () {
                castFn_2();
              },
              delay: event_4.delay
            });
          }
        }
        return (0, _tslibEs.__assign)((0, _tslibEs.__assign)({}, ctx), {
          events: events
        });
      })
    }
  });
  return (0, _index.interpret)(playerMachine);
}
function createSpeedService(context) {
  var speedMachine = (0, _index.createMachine)({
    id: 'speed',
    context: context,
    initial: 'normal',
    states: {
      normal: {
        on: {
          FAST_FORWARD: {
            target: 'skipping',
            actions: ['recordSpeed', 'setSpeed']
          },
          SET_SPEED: {
            target: 'normal',
            actions: ['setSpeed']
          }
        }
      },
      skipping: {
        on: {
          BACK_TO_NORMAL: {
            target: 'normal',
            actions: ['restoreSpeed']
          },
          SET_SPEED: {
            target: 'normal',
            actions: ['setSpeed']
          }
        }
      }
    }
  }, {
    actions: {
      setSpeed: function (ctx, event) {
        if ('payload' in event) {
          ctx.timer.setSpeed(event.payload.speed);
        }
      },
      recordSpeed: (0, _index.assign)({
        normalSpeed: function (ctx) {
          return ctx.timer.speed;
        }
      }),
      restoreSpeed: function (ctx) {
        ctx.timer.setSpeed(ctx.normalSpeed);
      }
    }
  });
  return (0, _index.interpret)(speedMachine);
}
},{"../../ext/tslib/tslib.es6.js":"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js","../../../../ext/@xstate/fsm/es/index.js":"node_modules/rrweb/es/rrweb/ext/@xstate/fsm/es/index.js","../types.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js","./timer.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/timer.js"}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/styles/inject-style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var rules = function (blockClass) {
  return [".".concat(blockClass, " { background: currentColor }"), 'noscript { display: none !important; }'];
};
var _default = exports.default = rules;
},{}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/virtual-styles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleRuleType = void 0;
exports.applyVirtualStyleRulesToNode = applyVirtualStyleRulesToNode;
exports.getNestedRule = getNestedRule;
exports.getPositionsAndIndex = getPositionsAndIndex;
exports.storeCSSRules = storeCSSRules;
var _tslibEs = require("../../ext/tslib/tslib.es6.js");
var StyleRuleType;
(function (StyleRuleType) {
  StyleRuleType[StyleRuleType["Insert"] = 0] = "Insert";
  StyleRuleType[StyleRuleType["Remove"] = 1] = "Remove";
  StyleRuleType[StyleRuleType["Snapshot"] = 2] = "Snapshot";
  StyleRuleType[StyleRuleType["SetProperty"] = 3] = "SetProperty";
  StyleRuleType[StyleRuleType["RemoveProperty"] = 4] = "RemoveProperty";
})(StyleRuleType || (exports.StyleRuleType = StyleRuleType = {}));
function getNestedRule(rules, position) {
  var rule = rules[position[0]];
  if (position.length === 1) {
    return rule;
  } else {
    return getNestedRule(rule.cssRules[position[1]].cssRules, position.slice(2));
  }
}
function getPositionsAndIndex(nestedIndex) {
  var positions = (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(nestedIndex), false);
  var index = positions.pop();
  return {
    positions: positions,
    index: index
  };
}
function applyVirtualStyleRulesToNode(storedRules, styleNode) {
  var sheet = styleNode.sheet;
  if (!sheet) {
    return;
  }
  storedRules.forEach(function (rule) {
    if (rule.type === StyleRuleType.Insert) {
      try {
        if (Array.isArray(rule.index)) {
          var _a = getPositionsAndIndex(rule.index),
            positions = _a.positions,
            index = _a.index;
          var nestedRule = getNestedRule(sheet.cssRules, positions);
          nestedRule.insertRule(rule.cssText, index);
        } else {
          sheet.insertRule(rule.cssText, rule.index);
        }
      } catch (e) {}
    } else if (rule.type === StyleRuleType.Remove) {
      try {
        if (Array.isArray(rule.index)) {
          var _b = getPositionsAndIndex(rule.index),
            positions = _b.positions,
            index = _b.index;
          var nestedRule = getNestedRule(sheet.cssRules, positions);
          nestedRule.deleteRule(index || 0);
        } else {
          sheet.deleteRule(rule.index);
        }
      } catch (e) {}
    } else if (rule.type === StyleRuleType.Snapshot) {
      restoreSnapshotOfStyleRulesToNode(rule.cssTexts, styleNode);
    } else if (rule.type === StyleRuleType.SetProperty) {
      var nativeRule = getNestedRule(sheet.cssRules, rule.index);
      nativeRule.style.setProperty(rule.property, rule.value, rule.priority);
    } else if (rule.type === StyleRuleType.RemoveProperty) {
      var nativeRule = getNestedRule(sheet.cssRules, rule.index);
      nativeRule.style.removeProperty(rule.property);
    }
  });
}
function restoreSnapshotOfStyleRulesToNode(cssTexts, styleNode) {
  var _a;
  try {
    var existingRules = Array.from(((_a = styleNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) || []).map(function (rule) {
      return rule.cssText;
    });
    var existingRulesReversed = Object.entries(existingRules).reverse();
    var lastMatch_1 = existingRules.length;
    existingRulesReversed.forEach(function (_a) {
      var _b;
      var _c = (0, _tslibEs.__read)(_a, 2),
        index = _c[0],
        rule = _c[1];
      var indexOf = cssTexts.indexOf(rule);
      if (indexOf === -1 || indexOf > lastMatch_1) {
        try {
          (_b = styleNode.sheet) === null || _b === void 0 ? void 0 : _b.deleteRule(Number(index));
        } catch (e) {}
      }
      lastMatch_1 = indexOf;
    });
    cssTexts.forEach(function (cssText, index) {
      var _a, _b, _c;
      try {
        if (((_b = (_a = styleNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules[index]) === null || _b === void 0 ? void 0 : _b.cssText) !== cssText) {
          (_c = styleNode.sheet) === null || _c === void 0 ? void 0 : _c.insertRule(cssText, index);
        }
      } catch (e) {}
    });
  } catch (e) {}
}
function storeCSSRules(parentElement, virtualStyleRulesMap) {
  var _a;
  try {
    var cssTexts = Array.from(((_a = parentElement.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) || []).map(function (rule) {
      return rule.cssText;
    });
    virtualStyleRulesMap.set(parentElement, [{
      type: StyleRuleType.Snapshot,
      cssTexts: cssTexts
    }]);
  } catch (e) {}
}
},{"../../ext/tslib/tslib.es6.js":"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js"}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/webgl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.deserializeArg = deserializeArg;
exports.variableListFor = variableListFor;
var _tslibEs = require("../../../ext/tslib/tslib.es6.js");
var _base64ArraybufferEs = require("../../../../../ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js");
var _types = require("../../types.js");
var webGLVarMap = new Map();
function variableListFor(ctx, ctor) {
  var contextMap = webGLVarMap.get(ctx);
  if (!contextMap) {
    contextMap = new Map();
    webGLVarMap.set(ctx, contextMap);
  }
  if (!contextMap.has(ctor)) {
    contextMap.set(ctor, []);
  }
  return contextMap.get(ctor);
}
function getContext(target, type) {
  try {
    if (type === _types.CanvasContext.WebGL) {
      return target.getContext('webgl') || target.getContext('experimental-webgl');
    }
    return target.getContext('webgl2');
  } catch (e) {
    return null;
  }
}
var WebGLVariableConstructorsNames = ['WebGLActiveInfo', 'WebGLBuffer', 'WebGLFramebuffer', 'WebGLProgram', 'WebGLRenderbuffer', 'WebGLShader', 'WebGLShaderPrecisionFormat', 'WebGLTexture', 'WebGLUniformLocation', 'WebGLVertexArrayObject'];
function saveToWebGLVarMap(ctx, result) {
  if (!(result === null || result === void 0 ? void 0 : result.constructor)) return;
  var name = result.constructor.name;
  if (!WebGLVariableConstructorsNames.includes(name)) return;
  var variables = variableListFor(ctx, name);
  if (!variables.includes(result)) variables.push(result);
}
function deserializeArg(imageMap, ctx) {
  return function (arg) {
    if (arg && typeof arg === 'object' && 'rr_type' in arg) {
      if ('index' in arg) {
        var name_1 = arg.rr_type,
          index = arg.index;
        return variableListFor(ctx, name_1)[index];
      } else if ('args' in arg) {
        var name_2 = arg.rr_type,
          args = arg.args;
        var ctor = window[name_2];
        return new (ctor.bind.apply(ctor, (0, _tslibEs.__spreadArray)([void 0], (0, _tslibEs.__read)(args.map(deserializeArg(imageMap, ctx))), false)))();
      } else if ('base64' in arg) {
        return (0, _base64ArraybufferEs.decode)(arg.base64);
      } else if ('src' in arg) {
        var image = imageMap.get(arg.src);
        if (image) {
          return image;
        } else {
          var image_1 = new Image();
          image_1.src = arg.src;
          imageMap.set(arg.src, image_1);
          return image_1;
        }
      }
    } else if (Array.isArray(arg)) {
      return arg.map(deserializeArg(imageMap, ctx));
    }
    return arg;
  };
}
function webglMutation(_a) {
  var mutation = _a.mutation,
    target = _a.target,
    type = _a.type,
    imageMap = _a.imageMap,
    errorHandler = _a.errorHandler;
  try {
    var ctx = getContext(target, type);
    if (!ctx) return;
    if (mutation.setter) {
      ctx[mutation.property] = mutation.args[0];
      return;
    }
    var original = ctx[mutation.property];
    var args = mutation.args.map(deserializeArg(imageMap, ctx));
    var result = original.apply(ctx, args);
    saveToWebGLVarMap(ctx, result);
    var debugMode = false;
    if (debugMode) {
      if (mutation.property === 'compileShader') {
        if (!ctx.getShaderParameter(args[0], ctx.COMPILE_STATUS)) console.warn('something went wrong in replay', ctx.getShaderInfoLog(args[0]));
      } else if (mutation.property === 'linkProgram') {
        ctx.validateProgram(args[0]);
        if (!ctx.getProgramParameter(args[0], ctx.LINK_STATUS)) console.warn('something went wrong in replay', ctx.getProgramInfoLog(args[0]));
      }
      var webglError = ctx.getError();
      if (webglError !== ctx.NO_ERROR) {
        console.warn.apply(console, (0, _tslibEs.__spreadArray)(['WEBGL ERROR', webglError, 'on command:', mutation.property], (0, _tslibEs.__read)(args), false));
      }
    }
  } catch (error) {
    errorHandler(mutation, error);
  }
}
var _default = exports.default = webglMutation;
},{"../../../ext/tslib/tslib.es6.js":"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js","../../../../../ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js":"node_modules/rrweb/es/rrweb/ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js","../../types.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js"}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/2d.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function canvasMutation(_a) {
  var event = _a.event,
    mutation = _a.mutation,
    target = _a.target,
    imageMap = _a.imageMap,
    errorHandler = _a.errorHandler;
  try {
    var ctx = target.getContext('2d');
    if (mutation.setter) {
      ctx[mutation.property] = mutation.args[0];
      return;
    }
    var original = ctx[mutation.property];
    if (mutation.property === 'drawImage' && typeof mutation.args[0] === 'string') {
      var image = imageMap.get(event);
      mutation.args[0] = image;
      original.apply(ctx, mutation.args);
    } else {
      original.apply(ctx, mutation.args);
    }
  } catch (error) {
    errorHandler(mutation, error);
  }
}
var _default = exports.default = canvasMutation;
},{}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _types = require("../../types.js");
var _webgl = _interopRequireDefault(require("./webgl.js"));
var _d = _interopRequireDefault(require("./2d.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function canvasMutation(_a) {
  var event = _a.event,
    mutation = _a.mutation,
    target = _a.target,
    imageMap = _a.imageMap,
    errorHandler = _a.errorHandler;
  try {
    var mutations = 'commands' in mutation ? mutation.commands : [mutation];
    if ([_types.CanvasContext.WebGL, _types.CanvasContext.WebGL2].includes(mutation.type)) {
      return mutations.forEach(function (command) {
        (0, _webgl.default)({
          mutation: command,
          type: mutation.type,
          target: target,
          imageMap: imageMap,
          errorHandler: errorHandler
        });
      });
    }
    return mutations.forEach(function (command) {
      (0, _d.default)({
        event: event,
        mutation: command,
        target: target,
        imageMap: imageMap,
        errorHandler: errorHandler
      });
    });
  } catch (error) {
    errorHandler(mutation, error);
  }
}
var _default = exports.default = canvasMutation;
},{"../../types.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js","./webgl.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/webgl.js","./2d.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/2d.js"}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Replayer = void 0;
var _tslibEs = require("../../ext/tslib/tslib.es6.js");
var _rrwebSnapshot = require("../../../rrweb-snapshot/es/rrweb-snapshot.js");
var _mittEs = _interopRequireWildcard(require("../../../../ext/mitt/dist/mitt.es.js"));
var mitt_es = _mittEs;
var _smoothscroll = require("./smoothscroll.js");
var _timer = require("./timer.js");
var _machine = require("./machine.js");
var _types = require("../types.js");
var _utils = require("../utils.js");
var _injectStyle = _interopRequireDefault(require("./styles/inject-style.js"));
var _virtualStyles = require("./virtual-styles.js");
var _index = _interopRequireDefault(require("./canvas/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var SKIP_TIME_THRESHOLD = 10 * 1000;
var SKIP_TIME_INTERVAL = 5 * 1000;
var mitt = _mittEs.default || mitt_es;
var REPLAY_CONSOLE_PREFIX = '[replayer]';
var defaultMouseTailConfig = {
  duration: 500,
  lineCap: 'round',
  lineWidth: 3,
  strokeStyle: 'red'
};
function indicatesTouchDevice(e) {
  return e.type == _types.EventType.IncrementalSnapshot && (e.data.source == _types.IncrementalSource.TouchMove || e.data.source == _types.IncrementalSource.MouseInteraction && e.data.type == _types.MouseInteractions.TouchStart);
}
var Replayer = exports.Replayer = function () {
  function Replayer(events, config) {
    var _this = this;
    this.mouseTail = null;
    this.tailPositions = [];
    this.emitter = mitt();
    this.legacy_missingNodeRetryMap = {};
    this.cache = (0, _rrwebSnapshot.createCache)();
    this.imageMap = new Map();
    this.mirror = (0, _utils.createMirror)();
    this.firstFullSnapshot = null;
    this.newDocumentQueue = [];
    this.mousePos = null;
    this.touchActive = null;
    if (!(config === null || config === void 0 ? void 0 : config.liveMode) && events.length < 2) {
      throw new Error('Replayer need at least 2 events.');
    }
    var defaultConfig = {
      speed: 1,
      maxSpeed: 360,
      root: document.body,
      loadTimeout: 0,
      skipInactive: false,
      showWarning: true,
      showDebug: false,
      blockClass: 'rr-block',
      liveMode: false,
      insertStyleRules: [],
      triggerFocus: true,
      UNSAFE_replayCanvas: false,
      pauseAnimation: true,
      mouseTail: defaultMouseTailConfig
    };
    this.config = Object.assign({}, defaultConfig, config);
    this.handleResize = this.handleResize.bind(this);
    this.getCastFn = this.getCastFn.bind(this);
    this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this);
    this.emitter.on(_types.ReplayerEvents.Resize, this.handleResize);
    this.setupDom();
    this.treeIndex = new _utils.TreeIndex();
    this.fragmentParentMap = new Map();
    this.elementStateMap = new Map();
    this.virtualStyleRulesMap = new Map();
    this.emitter.on(_types.ReplayerEvents.Flush, function () {
      var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
      var _e = _this.treeIndex.flush(),
        scrollMap = _e.scrollMap,
        inputMap = _e.inputMap,
        mutationData = _e.mutationData;
      _this.fragmentParentMap.forEach(function (parent, frag) {
        return _this.restoreRealParent(frag, parent);
      });
      try {
        for (var _f = (0, _tslibEs.__values)(mutationData.texts), _g = _f.next(); !_g.done; _g = _f.next()) {
          var d = _g.value;
          _this.applyText(d, mutationData);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      try {
        for (var _h = (0, _tslibEs.__values)(_this.virtualStyleRulesMap.keys()), _j = _h.next(); !_j.done; _j = _h.next()) {
          var node = _j.value;
          _this.restoreNodeSheet(node);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      _this.fragmentParentMap.clear();
      _this.elementStateMap.clear();
      _this.virtualStyleRulesMap.clear();
      try {
        for (var _k = (0, _tslibEs.__values)(scrollMap.values()), _l = _k.next(); !_l.done; _l = _k.next()) {
          var d = _l.value;
          _this.applyScroll(d, true);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      try {
        for (var _m = (0, _tslibEs.__values)(inputMap.values()), _o = _m.next(); !_o.done; _o = _m.next()) {
          var d = _o.value;
          _this.applyInput(d);
        }
      } catch (e_4_1) {
        e_4 = {
          error: e_4_1
        };
      } finally {
        try {
          if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
        } finally {
          if (e_4) throw e_4.error;
        }
      }
    });
    this.emitter.on(_types.ReplayerEvents.PlayBack, function () {
      _this.firstFullSnapshot = null;
      _this.mirror.reset();
    });
    var timer = new _timer.Timer([], (config === null || config === void 0 ? void 0 : config.speed) || defaultConfig.speed);
    this.service = (0, _machine.createPlayerService)({
      events: events.map(function (e) {
        if (config && config.unpackFn) {
          return config.unpackFn(e);
        }
        return e;
      }).sort(function (a1, a2) {
        return a1.timestamp - a2.timestamp;
      }),
      timer: timer,
      timeOffset: 0,
      baselineTime: 0,
      lastPlayedEvent: null
    }, {
      getCastFn: this.getCastFn,
      applyEventsSynchronously: this.applyEventsSynchronously,
      emitter: this.emitter
    });
    this.service.start();
    this.service.subscribe(function (state) {
      _this.emitter.emit(_types.ReplayerEvents.StateChange, {
        player: state
      });
    });
    this.speedService = (0, _machine.createSpeedService)({
      normalSpeed: -1,
      timer: timer
    });
    this.speedService.start();
    this.speedService.subscribe(function (state) {
      _this.emitter.emit(_types.ReplayerEvents.StateChange, {
        speed: state
      });
    });
    var firstMeta = this.service.state.context.events.find(function (e) {
      return e.type === _types.EventType.Meta;
    });
    var firstFullsnapshot = this.service.state.context.events.find(function (e) {
      return e.type === _types.EventType.FullSnapshot;
    });
    if (firstMeta) {
      var _a = firstMeta.data,
        width_1 = _a.width,
        height_1 = _a.height;
      setTimeout(function () {
        _this.emitter.emit(_types.ReplayerEvents.Resize, {
          width: width_1,
          height: height_1
        });
      }, 0);
    }
    if (firstFullsnapshot) {
      setTimeout(function () {
        if (_this.firstFullSnapshot) {
          return;
        }
        _this.firstFullSnapshot = firstFullsnapshot;
        _this.rebuildFullSnapshot(firstFullsnapshot);
        _this.iframe.contentWindow.scrollTo(firstFullsnapshot.data.initialOffset);
      }, 1);
    }
    if (this.service.state.context.events.find(indicatesTouchDevice)) {
      this.mouse.classList.add('touch-device');
    }
  }
  Object.defineProperty(Replayer.prototype, "timer", {
    get: function () {
      return this.service.state.context.timer;
    },
    enumerable: false,
    configurable: true
  });
  Replayer.prototype.on = function (event, handler) {
    this.emitter.on(event, handler);
    return this;
  };
  Replayer.prototype.off = function (event, handler) {
    this.emitter.off(event, handler);
    return this;
  };
  Replayer.prototype.setConfig = function (config) {
    var _this = this;
    Object.keys(config).forEach(function (key) {
      _this.config[key] = config[key];
    });
    if (!this.config.skipInactive) {
      this.backToNormal();
    }
    if (typeof config.speed !== 'undefined') {
      this.speedService.send({
        type: 'SET_SPEED',
        payload: {
          speed: config.speed
        }
      });
    }
    if (typeof config.mouseTail !== 'undefined') {
      if (config.mouseTail === false) {
        if (this.mouseTail) {
          this.mouseTail.style.display = 'none';
        }
      } else {
        if (!this.mouseTail) {
          this.mouseTail = document.createElement('canvas');
          this.mouseTail.width = Number.parseFloat(this.iframe.width);
          this.mouseTail.height = Number.parseFloat(this.iframe.height);
          this.mouseTail.classList.add('replayer-mouse-tail');
          this.wrapper.insertBefore(this.mouseTail, this.iframe);
        }
        this.mouseTail.style.display = 'inherit';
      }
    }
  };
  Replayer.prototype.getMetaData = function () {
    var firstEvent = this.service.state.context.events[0];
    var lastEvent = this.service.state.context.events[this.service.state.context.events.length - 1];
    return {
      startTime: firstEvent.timestamp,
      endTime: lastEvent.timestamp,
      totalTime: lastEvent.timestamp - firstEvent.timestamp
    };
  };
  Replayer.prototype.getCurrentTime = function () {
    return this.timer.timeOffset + this.getTimeOffset();
  };
  Replayer.prototype.getTimeOffset = function () {
    var _a = this.service.state.context,
      baselineTime = _a.baselineTime,
      events = _a.events;
    return baselineTime - events[0].timestamp;
  };
  Replayer.prototype.getMirror = function () {
    return this.mirror;
  };
  Replayer.prototype.play = function (timeOffset) {
    var _a;
    if (timeOffset === void 0) {
      timeOffset = 0;
    }
    if (this.service.state.matches('paused')) {
      this.service.send({
        type: 'PLAY',
        payload: {
          timeOffset: timeOffset
        }
      });
    } else {
      this.service.send({
        type: 'PAUSE'
      });
      this.service.send({
        type: 'PLAY',
        payload: {
          timeOffset: timeOffset
        }
      });
    }
    (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('html')[0].classList.remove('rrweb-paused');
    this.emitter.emit(_types.ReplayerEvents.Start);
  };
  Replayer.prototype.pause = function (timeOffset) {
    var _a;
    if (timeOffset === undefined && this.service.state.matches('playing')) {
      this.service.send({
        type: 'PAUSE'
      });
    }
    if (typeof timeOffset === 'number') {
      this.play(timeOffset);
      this.service.send({
        type: 'PAUSE'
      });
    }
    (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('html')[0].classList.add('rrweb-paused');
    this.emitter.emit(_types.ReplayerEvents.Pause);
  };
  Replayer.prototype.resume = function (timeOffset) {
    if (timeOffset === void 0) {
      timeOffset = 0;
    }
    console.warn("The 'resume' will be departed in 1.0. Please use 'play' method which has the same interface.");
    this.play(timeOffset);
    this.emitter.emit(_types.ReplayerEvents.Resume);
  };
  Replayer.prototype.startLive = function (baselineTime) {
    this.service.send({
      type: 'TO_LIVE',
      payload: {
        baselineTime: baselineTime
      }
    });
  };
  Replayer.prototype.addEvent = function (rawEvent) {
    var _this = this;
    var event = this.config.unpackFn ? this.config.unpackFn(rawEvent) : rawEvent;
    if (indicatesTouchDevice(event)) {
      this.mouse.classList.add('touch-device');
    }
    Promise.resolve().then(function () {
      return _this.service.send({
        type: 'ADD_EVENT',
        payload: {
          event: event
        }
      });
    });
  };
  Replayer.prototype.enableInteract = function () {
    this.iframe.setAttribute('scrolling', 'auto');
    this.iframe.style.pointerEvents = 'auto';
  };
  Replayer.prototype.disableInteract = function () {
    this.iframe.setAttribute('scrolling', 'no');
    this.iframe.style.pointerEvents = 'none';
  };
  Replayer.prototype.resetCache = function () {
    this.cache = (0, _rrwebSnapshot.createCache)();
  };
  Replayer.prototype.setupDom = function () {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('replayer-wrapper');
    this.config.root.appendChild(this.wrapper);
    this.mouse = document.createElement('div');
    this.mouse.classList.add('replayer-mouse');
    this.wrapper.appendChild(this.mouse);
    if (this.config.mouseTail !== false) {
      this.mouseTail = document.createElement('canvas');
      this.mouseTail.classList.add('replayer-mouse-tail');
      this.mouseTail.style.display = 'inherit';
      this.wrapper.appendChild(this.mouseTail);
    }
    this.iframe = document.createElement('iframe');
    var attributes = ['allow-same-origin'];
    if (this.config.UNSAFE_replayCanvas) {
      attributes.push('allow-scripts');
    }
    this.iframe.style.display = 'none';
    this.iframe.setAttribute('sandbox', attributes.join(' '));
    this.disableInteract();
    this.wrapper.appendChild(this.iframe);
    if (this.iframe.contentWindow && this.iframe.contentDocument) {
      (0, _smoothscroll.polyfill)(this.iframe.contentWindow, this.iframe.contentDocument);
      (0, _utils.polyfill)(this.iframe.contentWindow);
    }
  };
  Replayer.prototype.handleResize = function (dimension) {
    var e_5, _a;
    this.iframe.style.display = 'inherit';
    try {
      for (var _b = (0, _tslibEs.__values)([this.mouseTail, this.iframe]), _c = _b.next(); !_c.done; _c = _b.next()) {
        var el = _c.value;
        if (!el) {
          continue;
        }
        el.setAttribute('width', String(dimension.width));
        el.setAttribute('height', String(dimension.height));
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_5) throw e_5.error;
      }
    }
  };
  Replayer.prototype.applyEventsSynchronously = function (events) {
    var e_6, _a;
    try {
      for (var events_1 = (0, _tslibEs.__values)(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
        var event_1 = events_1_1.value;
        switch (event_1.type) {
          case _types.EventType.DomContentLoaded:
          case _types.EventType.Load:
          case _types.EventType.Custom:
            continue;
          case _types.EventType.FullSnapshot:
          case _types.EventType.Meta:
          case _types.EventType.Plugin:
            break;
          case _types.EventType.IncrementalSnapshot:
            switch (event_1.data.source) {
              case _types.IncrementalSource.MediaInteraction:
                continue;
              default:
                break;
            }
            break;
          default:
            break;
        }
        var castFn = this.getCastFn(event_1, true);
        castFn();
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
      } finally {
        if (e_6) throw e_6.error;
      }
    }
    if (this.mousePos) {
      this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, true, this.mousePos.debugData);
    }
    this.mousePos = null;
    if (this.touchActive === true) {
      this.mouse.classList.add('touch-active');
    } else if (this.touchActive === false) {
      this.mouse.classList.remove('touch-active');
    }
    this.touchActive = null;
  };
  Replayer.prototype.getCastFn = function (event, isSync) {
    var _this = this;
    if (isSync === void 0) {
      isSync = false;
    }
    var castFn;
    switch (event.type) {
      case _types.EventType.DomContentLoaded:
      case _types.EventType.Load:
        break;
      case _types.EventType.Custom:
        castFn = function () {
          _this.emitter.emit(_types.ReplayerEvents.CustomEvent, event);
        };
        break;
      case _types.EventType.Meta:
        castFn = function () {
          return _this.emitter.emit(_types.ReplayerEvents.Resize, {
            width: event.data.width,
            height: event.data.height
          });
        };
        break;
      case _types.EventType.FullSnapshot:
        castFn = function () {
          if (_this.firstFullSnapshot) {
            if (_this.firstFullSnapshot === event) {
              _this.firstFullSnapshot = true;
              return;
            }
          } else {
            _this.firstFullSnapshot = true;
          }
          _this.rebuildFullSnapshot(event, isSync);
          _this.iframe.contentWindow.scrollTo(event.data.initialOffset);
        };
        break;
      case _types.EventType.IncrementalSnapshot:
        castFn = function () {
          var e_7, _a;
          _this.applyIncremental(event, isSync);
          if (isSync) {
            return;
          }
          if (event === _this.nextUserInteractionEvent) {
            _this.nextUserInteractionEvent = null;
            _this.backToNormal();
          }
          if (_this.config.skipInactive && !_this.nextUserInteractionEvent) {
            try {
              for (var _b = (0, _tslibEs.__values)(_this.service.state.context.events), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _event = _c.value;
                if (_event.timestamp <= event.timestamp) {
                  continue;
                }
                if (_this.isUserInteraction(_event)) {
                  if (_event.delay - event.delay > SKIP_TIME_THRESHOLD * _this.speedService.state.context.timer.speed) {
                    _this.nextUserInteractionEvent = _event;
                  }
                  break;
                }
              }
            } catch (e_7_1) {
              e_7 = {
                error: e_7_1
              };
            } finally {
              try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              } finally {
                if (e_7) throw e_7.error;
              }
            }
            if (_this.nextUserInteractionEvent) {
              var skipTime = _this.nextUserInteractionEvent.delay - event.delay;
              var payload = {
                speed: Math.min(Math.round(skipTime / SKIP_TIME_INTERVAL), _this.config.maxSpeed)
              };
              _this.speedService.send({
                type: 'FAST_FORWARD',
                payload: payload
              });
              _this.emitter.emit(_types.ReplayerEvents.SkipStart, payload);
            }
          }
        };
        break;
    }
    var wrappedCastFn = function () {
      var e_8, _a;
      if (castFn) {
        castFn();
      }
      try {
        for (var _b = (0, _tslibEs.__values)(_this.config.plugins || []), _c = _b.next(); !_c.done; _c = _b.next()) {
          var plugin = _c.value;
          plugin.handler(event, isSync, {
            replayer: _this
          });
        }
      } catch (e_8_1) {
        e_8 = {
          error: e_8_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_8) throw e_8.error;
        }
      }
      _this.service.send({
        type: 'CAST_EVENT',
        payload: {
          event: event
        }
      });
      var last_index = _this.service.state.context.events.length - 1;
      if (event === _this.service.state.context.events[last_index]) {
        var finish_1 = function () {
          if (last_index < _this.service.state.context.events.length - 1) {
            return;
          }
          _this.backToNormal();
          _this.service.send('END');
          _this.emitter.emit(_types.ReplayerEvents.Finish);
        };
        if (event.type === _types.EventType.IncrementalSnapshot && event.data.source === _types.IncrementalSource.MouseMove && event.data.positions.length) {
          setTimeout(function () {
            finish_1();
          }, Math.max(0, -event.data.positions[0].timeOffset + 50));
        } else {
          finish_1();
        }
      }
      _this.emitter.emit(_types.ReplayerEvents.EventCast, event);
    };
    return wrappedCastFn;
  };
  Replayer.prototype.rebuildFullSnapshot = function (event, isSync) {
    var e_9, _a;
    var _this = this;
    if (isSync === void 0) {
      isSync = false;
    }
    if (!this.iframe.contentDocument) {
      return console.warn('Looks like your replayer has been destroyed.');
    }
    if (Object.keys(this.legacy_missingNodeRetryMap).length) {
      console.warn('Found unresolved missing node map', this.legacy_missingNodeRetryMap);
    }
    this.legacy_missingNodeRetryMap = {};
    var collected = [];
    this.mirror.map = (0, _rrwebSnapshot.rebuild)(event.data.node, {
      doc: this.iframe.contentDocument,
      afterAppend: function (builtNode) {
        _this.collectIframeAndAttachDocument(collected, builtNode);
      },
      cache: this.cache
    })[1];
    var _loop_1 = function (mutationInQueue, builtNode) {
      this_1.attachDocumentToIframe(mutationInQueue, builtNode);
      this_1.newDocumentQueue = this_1.newDocumentQueue.filter(function (m) {
        return m !== mutationInQueue;
      });
    };
    var this_1 = this;
    try {
      for (var collected_1 = (0, _tslibEs.__values)(collected), collected_1_1 = collected_1.next(); !collected_1_1.done; collected_1_1 = collected_1.next()) {
        var _b = collected_1_1.value,
          mutationInQueue = _b.mutationInQueue,
          builtNode = _b.builtNode;
        _loop_1(mutationInQueue, builtNode);
      }
    } catch (e_9_1) {
      e_9 = {
        error: e_9_1
      };
    } finally {
      try {
        if (collected_1_1 && !collected_1_1.done && (_a = collected_1.return)) _a.call(collected_1);
      } finally {
        if (e_9) throw e_9.error;
      }
    }
    var _c = this.iframe.contentDocument,
      documentElement = _c.documentElement,
      head = _c.head;
    this.insertStyleRules(documentElement, head);
    if (!this.service.state.matches('playing')) {
      this.iframe.contentDocument.getElementsByTagName('html')[0].classList.add('rrweb-paused');
    }
    this.emitter.emit(_types.ReplayerEvents.FullsnapshotRebuilded, event);
    if (!isSync) {
      this.waitForStylesheetLoad();
    }
    if (this.config.UNSAFE_replayCanvas) {
      this.preloadAllImages();
    }
  };
  Replayer.prototype.insertStyleRules = function (documentElement, head) {
    var styleEl = document.createElement('style');
    documentElement.insertBefore(styleEl, head);
    var injectStylesRules = (0, _injectStyle.default)(this.config.blockClass).concat(this.config.insertStyleRules);
    if (this.config.pauseAnimation) {
      injectStylesRules.push('html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }');
    }
    for (var idx = 0; idx < injectStylesRules.length; idx++) {
      styleEl.sheet.insertRule(injectStylesRules[idx], idx);
    }
  };
  Replayer.prototype.attachDocumentToIframe = function (mutation, iframeEl) {
    var e_10, _a;
    var _this = this;
    var collected = [];
    if (!iframeEl.contentDocument) {
      var parent_1 = iframeEl.parentNode;
      while (parent_1) {
        if (this.fragmentParentMap.has(parent_1)) {
          var frag = parent_1;
          var realParent = this.fragmentParentMap.get(frag);
          this.restoreRealParent(frag, realParent);
          break;
        }
        parent_1 = parent_1.parentNode;
      }
    }
    (0, _rrwebSnapshot.buildNodeWithSN)(mutation.node, {
      doc: iframeEl.contentDocument,
      map: this.mirror.map,
      hackCss: true,
      skipChild: false,
      afterAppend: function (builtNode) {
        _this.collectIframeAndAttachDocument(collected, builtNode);
        if (builtNode.__sn.type === _rrwebSnapshot.NodeType.Element && builtNode.__sn.tagName.toUpperCase() === 'HTML') {
          var _a = iframeEl.contentDocument,
            documentElement = _a.documentElement,
            head = _a.head;
          _this.insertStyleRules(documentElement, head);
        }
      },
      cache: this.cache
    });
    var _loop_2 = function (mutationInQueue, builtNode) {
      this_2.attachDocumentToIframe(mutationInQueue, builtNode);
      this_2.newDocumentQueue = this_2.newDocumentQueue.filter(function (m) {
        return m !== mutationInQueue;
      });
    };
    var this_2 = this;
    try {
      for (var collected_2 = (0, _tslibEs.__values)(collected), collected_2_1 = collected_2.next(); !collected_2_1.done; collected_2_1 = collected_2.next()) {
        var _b = collected_2_1.value,
          mutationInQueue = _b.mutationInQueue,
          builtNode = _b.builtNode;
        _loop_2(mutationInQueue, builtNode);
      }
    } catch (e_10_1) {
      e_10 = {
        error: e_10_1
      };
    } finally {
      try {
        if (collected_2_1 && !collected_2_1.done && (_a = collected_2.return)) _a.call(collected_2);
      } finally {
        if (e_10) throw e_10.error;
      }
    }
  };
  Replayer.prototype.collectIframeAndAttachDocument = function (collected, builtNode) {
    if ((0, _utils.isIframeINode)(builtNode)) {
      var mutationInQueue = this.newDocumentQueue.find(function (m) {
        return m.parentId === builtNode.__sn.id;
      });
      if (mutationInQueue) {
        collected.push({
          mutationInQueue: mutationInQueue,
          builtNode: builtNode
        });
      }
    }
  };
  Replayer.prototype.waitForStylesheetLoad = function () {
    var _this = this;
    var _a;
    var head = (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.head;
    if (head) {
      var unloadSheets_1 = new Set();
      var timer_1;
      var beforeLoadState_1 = this.service.state;
      var stateHandler_1 = function () {
        beforeLoadState_1 = _this.service.state;
      };
      this.emitter.on(_types.ReplayerEvents.Start, stateHandler_1);
      this.emitter.on(_types.ReplayerEvents.Pause, stateHandler_1);
      var unsubscribe_1 = function () {
        _this.emitter.off(_types.ReplayerEvents.Start, stateHandler_1);
        _this.emitter.off(_types.ReplayerEvents.Pause, stateHandler_1);
      };
      head.querySelectorAll('link[rel="stylesheet"]').forEach(function (css) {
        if (!css.sheet) {
          unloadSheets_1.add(css);
          css.addEventListener('load', function () {
            unloadSheets_1.delete(css);
            if (unloadSheets_1.size === 0 && timer_1 !== -1) {
              if (beforeLoadState_1.matches('playing')) {
                _this.play(_this.getCurrentTime());
              }
              _this.emitter.emit(_types.ReplayerEvents.LoadStylesheetEnd);
              if (timer_1) {
                clearTimeout(timer_1);
              }
              unsubscribe_1();
            }
          });
        }
      });
      if (unloadSheets_1.size > 0) {
        this.service.send({
          type: 'PAUSE'
        });
        this.emitter.emit(_types.ReplayerEvents.LoadStylesheetStart);
        timer_1 = setTimeout(function () {
          if (beforeLoadState_1.matches('playing')) {
            _this.play(_this.getCurrentTime());
          }
          timer_1 = -1;
          unsubscribe_1();
        }, this.config.loadTimeout);
      }
    }
  };
  Replayer.prototype.hasImageArg = function (args) {
    var e_11, _a;
    try {
      for (var args_1 = (0, _tslibEs.__values)(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
        var arg = args_1_1.value;
        if (!arg || typeof arg !== 'object') {} else if ('rr_type' in arg && 'args' in arg) {
          if (this.hasImageArg(arg.args)) return true;
        } else if ('rr_type' in arg && arg.rr_type === 'HTMLImageElement') {
          return true;
        } else if (arg instanceof Array) {
          if (this.hasImageArg(arg)) return true;
        }
      }
    } catch (e_11_1) {
      e_11 = {
        error: e_11_1
      };
    } finally {
      try {
        if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
      } finally {
        if (e_11) throw e_11.error;
      }
    }
    return false;
  };
  Replayer.prototype.getImageArgs = function (args) {
    var e_12, _a;
    var images = [];
    try {
      for (var args_2 = (0, _tslibEs.__values)(args), args_2_1 = args_2.next(); !args_2_1.done; args_2_1 = args_2.next()) {
        var arg = args_2_1.value;
        if (!arg || typeof arg !== 'object') {} else if ('rr_type' in arg && 'args' in arg) {
          images.push.apply(images, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(this.getImageArgs(arg.args)), false));
        } else if ('rr_type' in arg && arg.rr_type === 'HTMLImageElement') {
          images.push(arg.src);
        } else if (arg instanceof Array) {
          images.push.apply(images, (0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(this.getImageArgs(arg)), false));
        }
      }
    } catch (e_12_1) {
      e_12 = {
        error: e_12_1
      };
    } finally {
      try {
        if (args_2_1 && !args_2_1.done && (_a = args_2.return)) _a.call(args_2);
      } finally {
        if (e_12) throw e_12.error;
      }
    }
    return images;
  };
  Replayer.prototype.preloadAllImages = function () {
    var e_13, _a;
    var _this = this;
    this.service.state;
    var stateHandler = function () {
      _this.service.state;
    };
    this.emitter.on(_types.ReplayerEvents.Start, stateHandler);
    this.emitter.on(_types.ReplayerEvents.Pause, stateHandler);
    var _loop_3 = function (event_2) {
      if (event_2.type === _types.EventType.IncrementalSnapshot && event_2.data.source === _types.IncrementalSource.CanvasMutation) if ('commands' in event_2.data) {
        event_2.data.commands.forEach(function (c) {
          return _this.preloadImages(c, event_2);
        });
      } else {
        this_3.preloadImages(event_2.data, event_2);
      }
    };
    var this_3 = this;
    try {
      for (var _b = (0, _tslibEs.__values)(this.service.state.context.events), _c = _b.next(); !_c.done; _c = _b.next()) {
        var event_2 = _c.value;
        _loop_3(event_2);
      }
    } catch (e_13_1) {
      e_13 = {
        error: e_13_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_13) throw e_13.error;
      }
    }
  };
  Replayer.prototype.preloadImages = function (data, event) {
    var _this = this;
    if (data.property === 'drawImage' && typeof data.args[0] === 'string' && !this.imageMap.has(event)) {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var imgd = ctx === null || ctx === void 0 ? void 0 : ctx.createImageData(canvas.width, canvas.height);
      imgd === null || imgd === void 0 ? void 0 : imgd.data;
      JSON.parse(data.args[0]);
      ctx === null || ctx === void 0 ? void 0 : ctx.putImageData(imgd, 0, 0);
    } else if (this.hasImageArg(data.args)) {
      this.getImageArgs(data.args).forEach(function (url) {
        var image = new Image();
        image.src = url;
        _this.imageMap.set(url, image);
      });
    }
  };
  Replayer.prototype.applyIncremental = function (e, isSync) {
    var _this = this;
    var _a, _b;
    var d = e.data;
    switch (d.source) {
      case _types.IncrementalSource.Mutation:
        {
          if (isSync) {
            d.adds.forEach(function (m) {
              return _this.treeIndex.add(m);
            });
            d.texts.forEach(function (m) {
              var target = _this.mirror.getNode(m.id);
              var parent = target === null || target === void 0 ? void 0 : target.parentNode;
              if (parent && _this.virtualStyleRulesMap.has(parent)) _this.virtualStyleRulesMap.delete(parent);
              _this.treeIndex.text(m);
            });
            d.attributes.forEach(function (m) {
              return _this.treeIndex.attribute(m);
            });
            d.removes.forEach(function (m) {
              return _this.treeIndex.remove(m, _this.mirror);
            });
          }
          try {
            this.applyMutation(d, isSync);
          } catch (error) {
            this.warn("Exception in mutation ".concat(error.message || error), d);
          }
          break;
        }
      case _types.IncrementalSource.Drag:
      case _types.IncrementalSource.TouchMove:
      case _types.IncrementalSource.MouseMove:
        if (isSync) {
          var lastPosition = d.positions[d.positions.length - 1];
          this.mousePos = {
            x: lastPosition.x,
            y: lastPosition.y,
            id: lastPosition.id,
            debugData: d
          };
        } else {
          d.positions.forEach(function (p) {
            var action = {
              doAction: function () {
                _this.moveAndHover(p.x, p.y, p.id, isSync, d);
              },
              delay: p.timeOffset + e.timestamp - _this.service.state.context.baselineTime
            };
            _this.timer.addAction(action);
          });
          this.timer.addAction({
            doAction: function () {},
            delay: e.delay - ((_a = d.positions[0]) === null || _a === void 0 ? void 0 : _a.timeOffset)
          });
        }
        break;
      case _types.IncrementalSource.MouseInteraction:
        {
          if (d.id === -1) {
            break;
          }
          var event_3 = new Event(_types.MouseInteractions[d.type].toLowerCase());
          var target = this.mirror.getNode(d.id);
          if (!target) {
            return this.debugNodeNotFound(d, d.id);
          }
          this.emitter.emit(_types.ReplayerEvents.MouseInteraction, {
            type: d.type,
            target: target
          });
          var triggerFocus = this.config.triggerFocus;
          switch (d.type) {
            case _types.MouseInteractions.Blur:
              if ('blur' in target) {
                target.blur();
              }
              break;
            case _types.MouseInteractions.Focus:
              if (triggerFocus && target.focus) {
                target.focus({
                  preventScroll: true
                });
              }
              break;
            case _types.MouseInteractions.Click:
            case _types.MouseInteractions.TouchStart:
            case _types.MouseInteractions.TouchEnd:
              if (isSync) {
                if (d.type === _types.MouseInteractions.TouchStart) {
                  this.touchActive = true;
                } else if (d.type === _types.MouseInteractions.TouchEnd) {
                  this.touchActive = false;
                }
                this.mousePos = {
                  x: d.x,
                  y: d.y,
                  id: d.id,
                  debugData: d
                };
              } else {
                if (d.type === _types.MouseInteractions.TouchStart) {
                  this.tailPositions.length = 0;
                }
                this.moveAndHover(d.x, d.y, d.id, isSync, d);
                if (d.type === _types.MouseInteractions.Click) {
                  this.mouse.classList.remove('active');
                  void this.mouse.offsetWidth;
                  this.mouse.classList.add('active');
                } else if (d.type === _types.MouseInteractions.TouchStart) {
                  void this.mouse.offsetWidth;
                  this.mouse.classList.add('touch-active');
                } else if (d.type === _types.MouseInteractions.TouchEnd) {
                  this.mouse.classList.remove('touch-active');
                }
              }
              break;
            case _types.MouseInteractions.TouchCancel:
              if (isSync) {
                this.touchActive = false;
              } else {
                this.mouse.classList.remove('touch-active');
              }
              break;
            default:
              target.dispatchEvent(event_3);
          }
          break;
        }
      case _types.IncrementalSource.Scroll:
        {
          if (d.id === -1) {
            break;
          }
          if (isSync) {
            this.treeIndex.scroll(d);
            break;
          }
          this.applyScroll(d, false);
          break;
        }
      case _types.IncrementalSource.ViewportResize:
        this.emitter.emit(_types.ReplayerEvents.Resize, {
          width: d.width,
          height: d.height
        });
        break;
      case _types.IncrementalSource.Input:
        {
          if (d.id === -1) {
            break;
          }
          if (isSync) {
            this.treeIndex.input(d);
            break;
          }
          this.applyInput(d);
          break;
        }
      case _types.IncrementalSource.MediaInteraction:
        {
          var target = this.mirror.getNode(d.id);
          if (!target) {
            return this.debugNodeNotFound(d, d.id);
          }
          var mediaEl = target;
          try {
            if (d.currentTime) {
              mediaEl.currentTime = d.currentTime;
            }
            if (d.volume) {
              mediaEl.volume = d.volume;
            }
            if (d.muted) {
              mediaEl.muted = d.muted;
            }
            if (d.type === 1) {
              mediaEl.pause();
            }
            if (d.type === 0) {
              mediaEl.play();
            }
          } catch (error) {
            if (this.config.showWarning) {
              console.warn("Failed to replay media interactions: ".concat(error.message || error));
            }
          }
          break;
        }
      case _types.IncrementalSource.StyleSheetRule:
        {
          var target = this.mirror.getNode(d.id);
          if (!target) {
            return this.debugNodeNotFound(d, d.id);
          }
          var styleEl = target;
          var parent_2 = target.parentNode;
          var usingVirtualParent_1 = this.fragmentParentMap.has(parent_2);
          var styleSheet_1 = usingVirtualParent_1 ? null : styleEl.sheet;
          var rules_1;
          if (!styleSheet_1) {
            if (this.virtualStyleRulesMap.has(target)) {
              rules_1 = this.virtualStyleRulesMap.get(target);
            } else {
              rules_1 = [];
              this.virtualStyleRulesMap.set(target, rules_1);
            }
          }
          if (d.adds) {
            d.adds.forEach(function (_a) {
              var rule = _a.rule,
                nestedIndex = _a.index;
              if (styleSheet_1) {
                try {
                  if (Array.isArray(nestedIndex)) {
                    var _b = (0, _virtualStyles.getPositionsAndIndex)(nestedIndex),
                      positions = _b.positions,
                      index = _b.index;
                    var nestedRule = (0, _virtualStyles.getNestedRule)(styleSheet_1.cssRules, positions);
                    nestedRule.insertRule(rule, index);
                  } else {
                    var index = nestedIndex === undefined ? undefined : Math.min(nestedIndex, styleSheet_1.cssRules.length);
                    styleSheet_1.insertRule(rule, index);
                  }
                } catch (e) {}
              } else {
                rules_1 === null || rules_1 === void 0 ? void 0 : rules_1.push({
                  cssText: rule,
                  index: nestedIndex,
                  type: _virtualStyles.StyleRuleType.Insert
                });
              }
            });
          }
          if (d.removes) {
            d.removes.forEach(function (_a) {
              var nestedIndex = _a.index;
              if (usingVirtualParent_1) {
                rules_1 === null || rules_1 === void 0 ? void 0 : rules_1.push({
                  index: nestedIndex,
                  type: _virtualStyles.StyleRuleType.Remove
                });
              } else {
                try {
                  if (Array.isArray(nestedIndex)) {
                    var _b = (0, _virtualStyles.getPositionsAndIndex)(nestedIndex),
                      positions = _b.positions,
                      index = _b.index;
                    var nestedRule = (0, _virtualStyles.getNestedRule)(styleSheet_1.cssRules, positions);
                    nestedRule.deleteRule(index || 0);
                  } else {
                    styleSheet_1 === null || styleSheet_1 === void 0 ? void 0 : styleSheet_1.deleteRule(nestedIndex);
                  }
                } catch (e) {}
              }
            });
          }
          break;
        }
      case _types.IncrementalSource.StyleDeclaration:
        {
          var target = this.mirror.getNode(d.id);
          if (!target) {
            return this.debugNodeNotFound(d, d.id);
          }
          var styleEl = target;
          var parent_3 = target.parentNode;
          var usingVirtualParent = this.fragmentParentMap.has(parent_3);
          var styleSheet = usingVirtualParent ? null : styleEl.sheet;
          var rules = [];
          if (!styleSheet) {
            if (this.virtualStyleRulesMap.has(target)) {
              rules = this.virtualStyleRulesMap.get(target);
            } else {
              rules = [];
              this.virtualStyleRulesMap.set(target, rules);
            }
          }
          if (d.set) {
            if (styleSheet) {
              var rule = (0, _virtualStyles.getNestedRule)(styleSheet.rules, d.index);
              rule.style.setProperty(d.set.property, d.set.value, d.set.priority);
            } else {
              rules.push((0, _tslibEs.__assign)({
                type: _virtualStyles.StyleRuleType.SetProperty,
                index: d.index
              }, d.set));
            }
          }
          if (d.remove) {
            if (styleSheet) {
              var rule = (0, _virtualStyles.getNestedRule)(styleSheet.rules, d.index);
              rule.style.removeProperty(d.remove.property);
            } else {
              rules.push((0, _tslibEs.__assign)({
                type: _virtualStyles.StyleRuleType.RemoveProperty,
                index: d.index
              }, d.remove));
            }
          }
          break;
        }
      case _types.IncrementalSource.CanvasMutation:
        {
          if (!this.config.UNSAFE_replayCanvas) {
            return;
          }
          var target = this.mirror.getNode(d.id);
          if (!target) {
            return this.debugNodeNotFound(d, d.id);
          }
          (0, _index.default)({
            event: e,
            mutation: d,
            target: target,
            imageMap: this.imageMap,
            errorHandler: this.warnCanvasMutationFailed.bind(this)
          });
          break;
        }
      case _types.IncrementalSource.Font:
        {
          try {
            var fontFace = new FontFace(d.family, d.buffer ? new Uint8Array(JSON.parse(d.fontSource)) : d.fontSource, d.descriptors);
            (_b = this.iframe.contentDocument) === null || _b === void 0 ? void 0 : _b.fonts.add(fontFace);
          } catch (error) {
            if (this.config.showWarning) {
              console.warn(error);
            }
          }
          break;
        }
    }
  };
  Replayer.prototype.applyMutation = function (d, useVirtualParent) {
    var e_14, _a;
    var _this = this;
    d.removes.forEach(function (mutation) {
      var target = _this.mirror.getNode(mutation.id);
      if (!target) {
        if (d.removes.find(function (r) {
          return r.id === mutation.parentId;
        })) {
          return;
        }
        return _this.warnNodeNotFound(d, mutation.id);
      }
      if (_this.virtualStyleRulesMap.has(target)) {
        _this.virtualStyleRulesMap.delete(target);
      }
      var parent = _this.mirror.getNode(mutation.parentId);
      if (!parent) {
        return _this.warnNodeNotFound(d, mutation.parentId);
      }
      if (mutation.isShadow && (0, _utils.hasShadowRoot)(parent)) {
        parent = parent.shadowRoot;
      }
      _this.mirror.removeNodeFromMap(target);
      if (parent) {
        var realTarget = null;
        var realParent = '__sn' in parent ? _this.fragmentParentMap.get(parent) : undefined;
        if (realParent && realParent.contains(target)) {
          parent = realParent;
        } else if (_this.fragmentParentMap.has(target)) {
          realTarget = _this.fragmentParentMap.get(target);
          _this.fragmentParentMap.delete(target);
          target = realTarget;
        }
        try {
          parent.removeChild(target);
        } catch (error) {
          if (error instanceof DOMException) {
            _this.warn('parent could not remove child in mutation', parent, realParent, target, realTarget, d);
          } else {
            throw error;
          }
        }
      }
    });
    var legacy_missingNodeMap = (0, _tslibEs.__assign)({}, this.legacy_missingNodeRetryMap);
    var queue = [];
    var nextNotInDOM = function (mutation) {
      var next = null;
      if (mutation.nextId) {
        next = _this.mirror.getNode(mutation.nextId);
      }
      if (mutation.nextId !== null && mutation.nextId !== undefined && mutation.nextId !== -1 && !next) {
        return true;
      }
      return false;
    };
    var appendNode = function (mutation) {
      var e_15, _a;
      var _b, _c;
      if (!_this.iframe.contentDocument) {
        return console.warn('Looks like your replayer has been destroyed.');
      }
      var parent = _this.mirror.getNode(mutation.parentId);
      if (!parent) {
        if (mutation.node.type === _rrwebSnapshot.NodeType.Document) {
          return _this.newDocumentQueue.push(mutation);
        }
        return queue.push(mutation);
      }
      var parentInDocument = null;
      if (_this.iframe.contentDocument.contains) {
        parentInDocument = _this.iframe.contentDocument.contains(parent);
      } else if (_this.iframe.contentDocument.body.contains) {
        parentInDocument = _this.iframe.contentDocument.body.contains(parent);
      }
      var hasIframeChild = ((_c = (_b = parent).getElementsByTagName) === null || _c === void 0 ? void 0 : _c.call(_b, 'iframe').length) > 0;
      if (useVirtualParent && parentInDocument && !(0, _utils.isIframeINode)(parent) && !hasIframeChild) {
        var virtualParent = document.createDocumentFragment();
        _this.mirror.map[mutation.parentId] = virtualParent;
        _this.fragmentParentMap.set(virtualParent, parent);
        _this.storeState(parent);
        while (parent.firstChild) {
          virtualParent.appendChild(parent.firstChild);
        }
        parent = virtualParent;
      }
      if (mutation.node.isShadow) {
        if (!(0, _utils.hasShadowRoot)(parent)) {
          parent.attachShadow({
            mode: 'open'
          });
          parent = parent.shadowRoot;
        } else parent = parent.shadowRoot;
      }
      var previous = null;
      var next = null;
      if (mutation.previousId) {
        previous = _this.mirror.getNode(mutation.previousId);
      }
      if (mutation.nextId) {
        next = _this.mirror.getNode(mutation.nextId);
      }
      if (nextNotInDOM(mutation)) {
        return queue.push(mutation);
      }
      if (mutation.node.rootId && !_this.mirror.getNode(mutation.node.rootId)) {
        return;
      }
      var targetDoc = mutation.node.rootId ? _this.mirror.getNode(mutation.node.rootId) : _this.iframe.contentDocument;
      if ((0, _utils.isIframeINode)(parent)) {
        _this.attachDocumentToIframe(mutation, parent);
        return;
      }
      var target = (0, _rrwebSnapshot.buildNodeWithSN)(mutation.node, {
        doc: targetDoc,
        map: _this.mirror.map,
        skipChild: true,
        hackCss: true,
        cache: _this.cache
      });
      if (mutation.previousId === -1 || mutation.nextId === -1) {
        legacy_missingNodeMap[mutation.node.id] = {
          node: target,
          mutation: mutation
        };
        return;
      }
      if ('__sn' in parent && parent.__sn.type === _rrwebSnapshot.NodeType.Element && parent.__sn.tagName === 'textarea' && mutation.node.type === _rrwebSnapshot.NodeType.Text) {
        try {
          for (var _d = (0, _tslibEs.__values)(Array.from(parent.childNodes)), _e = _d.next(); !_e.done; _e = _d.next()) {
            var c = _e.value;
            if (c.nodeType === parent.TEXT_NODE) {
              parent.removeChild(c);
            }
          }
        } catch (e_15_1) {
          e_15 = {
            error: e_15_1
          };
        } finally {
          try {
            if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
          } finally {
            if (e_15) throw e_15.error;
          }
        }
      }
      if (previous && previous.nextSibling && previous.nextSibling.parentNode) {
        parent.insertBefore(target, previous.nextSibling);
      } else if (next && next.parentNode) {
        parent.contains(next) ? parent.insertBefore(target, next) : parent.insertBefore(target, null);
      } else {
        if (parent === targetDoc) {
          while (targetDoc.firstChild) {
            targetDoc.removeChild(targetDoc.firstChild);
          }
        }
        parent.appendChild(target);
      }
      if ((0, _utils.isIframeINode)(target)) {
        var mutationInQueue_1 = _this.newDocumentQueue.find(function (m) {
          return m.parentId === target.__sn.id;
        });
        if (mutationInQueue_1) {
          _this.attachDocumentToIframe(mutationInQueue_1, target);
          _this.newDocumentQueue = _this.newDocumentQueue.filter(function (m) {
            return m !== mutationInQueue_1;
          });
        }
      }
      if (mutation.previousId || mutation.nextId) {
        _this.legacy_resolveMissingNode(legacy_missingNodeMap, parent, target, mutation);
      }
    };
    d.adds.forEach(function (mutation) {
      appendNode(mutation);
    });
    var startTime = Date.now();
    while (queue.length) {
      var resolveTrees = (0, _utils.queueToResolveTrees)(queue);
      queue.length = 0;
      if (Date.now() - startTime > 500) {
        this.warn('Timeout in the loop, please check the resolve tree data:', resolveTrees);
        break;
      }
      try {
        for (var resolveTrees_1 = (e_14 = void 0, (0, _tslibEs.__values)(resolveTrees)), resolveTrees_1_1 = resolveTrees_1.next(); !resolveTrees_1_1.done; resolveTrees_1_1 = resolveTrees_1.next()) {
          var tree = resolveTrees_1_1.value;
          var parent_4 = this.mirror.getNode(tree.value.parentId);
          if (!parent_4) {
            this.debug('Drop resolve tree since there is no parent for the root node.', tree);
          } else {
            (0, _utils.iterateResolveTree)(tree, function (mutation) {
              appendNode(mutation);
            });
          }
        }
      } catch (e_14_1) {
        e_14 = {
          error: e_14_1
        };
      } finally {
        try {
          if (resolveTrees_1_1 && !resolveTrees_1_1.done && (_a = resolveTrees_1.return)) _a.call(resolveTrees_1);
        } finally {
          if (e_14) throw e_14.error;
        }
      }
    }
    if (Object.keys(legacy_missingNodeMap).length) {
      Object.assign(this.legacy_missingNodeRetryMap, legacy_missingNodeMap);
    }
    d.texts.forEach(function (mutation) {
      var target = _this.mirror.getNode(mutation.id);
      if (!target) {
        if (d.removes.find(function (r) {
          return r.id === mutation.id;
        })) {
          return;
        }
        return _this.warnNodeNotFound(d, mutation.id);
      }
      if (_this.fragmentParentMap.has(target)) {
        target = _this.fragmentParentMap.get(target);
      }
      target.textContent = mutation.value;
    });
    d.attributes.forEach(function (mutation) {
      var target = _this.mirror.getNode(mutation.id);
      if (!target) {
        if (d.removes.find(function (r) {
          return r.id === mutation.id;
        })) {
          return;
        }
        return _this.warnNodeNotFound(d, mutation.id);
      }
      if (_this.fragmentParentMap.has(target)) {
        target = _this.fragmentParentMap.get(target);
      }
      for (var attributeName in mutation.attributes) {
        if (typeof attributeName === 'string') {
          var value = mutation.attributes[attributeName];
          if (value === null) {
            target.removeAttribute(attributeName);
          } else if (typeof value === 'string') {
            try {
              target.setAttribute(attributeName, value);
            } catch (error) {
              if (_this.config.showWarning) {
                console.warn('An error occurred may due to the checkout feature.', error);
              }
            }
          } else if (attributeName === 'style') {
            var styleValues = value;
            var targetEl = target;
            for (var s in styleValues) {
              if (styleValues[s] === false) {
                targetEl.style.removeProperty(s);
              } else if (styleValues[s] instanceof Array) {
                var svp = styleValues[s];
                targetEl.style.setProperty(s, svp[0], svp[1]);
              } else {
                var svs = styleValues[s];
                targetEl.style.setProperty(s, svs);
              }
            }
          }
        }
      }
    });
  };
  Replayer.prototype.applyScroll = function (d, isSync) {
    var target = this.mirror.getNode(d.id);
    if (!target) {
      return this.debugNodeNotFound(d, d.id);
    }
    if (target === this.iframe.contentDocument) {
      this.iframe.contentWindow.scrollTo({
        top: d.y,
        left: d.x,
        behavior: isSync ? 'auto' : 'smooth'
      });
    } else if (target.__sn.type === _rrwebSnapshot.NodeType.Document) {
      target.defaultView.scrollTo({
        top: d.y,
        left: d.x,
        behavior: isSync ? 'auto' : 'smooth'
      });
    } else {
      try {
        target.scrollTop = d.y;
        target.scrollLeft = d.x;
      } catch (error) {}
    }
  };
  Replayer.prototype.applyInput = function (d) {
    var target = this.mirror.getNode(d.id);
    if (!target) {
      return this.debugNodeNotFound(d, d.id);
    }
    try {
      target.checked = d.isChecked;
      target.value = d.text;
    } catch (error) {}
  };
  Replayer.prototype.applyText = function (d, mutation) {
    var target = this.mirror.getNode(d.id);
    if (!target) {
      return this.debugNodeNotFound(mutation, d.id);
    }
    try {
      target.textContent = d.value;
    } catch (error) {}
  };
  Replayer.prototype.legacy_resolveMissingNode = function (map, parent, target, targetMutation) {
    var previousId = targetMutation.previousId,
      nextId = targetMutation.nextId;
    var previousInMap = previousId && map[previousId];
    var nextInMap = nextId && map[nextId];
    if (previousInMap) {
      var _a = previousInMap,
        node = _a.node,
        mutation = _a.mutation;
      parent.insertBefore(node, target);
      delete map[mutation.node.id];
      delete this.legacy_missingNodeRetryMap[mutation.node.id];
      if (mutation.previousId || mutation.nextId) {
        this.legacy_resolveMissingNode(map, parent, node, mutation);
      }
    }
    if (nextInMap) {
      var _b = nextInMap,
        node = _b.node,
        mutation = _b.mutation;
      parent.insertBefore(node, target.nextSibling);
      delete map[mutation.node.id];
      delete this.legacy_missingNodeRetryMap[mutation.node.id];
      if (mutation.previousId || mutation.nextId) {
        this.legacy_resolveMissingNode(map, parent, node, mutation);
      }
    }
  };
  Replayer.prototype.moveAndHover = function (x, y, id, isSync, debugData) {
    var target = this.mirror.getNode(id);
    if (!target) {
      return this.debugNodeNotFound(debugData, id);
    }
    var base = (0, _utils.getBaseDimension)(target, this.iframe);
    var _x = x * base.absoluteScale + base.x;
    var _y = y * base.absoluteScale + base.y;
    this.mouse.style.left = "".concat(_x, "px");
    this.mouse.style.top = "".concat(_y, "px");
    if (!isSync) {
      this.drawMouseTail({
        x: _x,
        y: _y
      });
    }
    this.hoverElements(target);
  };
  Replayer.prototype.drawMouseTail = function (position) {
    var _this = this;
    if (!this.mouseTail) {
      return;
    }
    var _a = this.config.mouseTail === true ? defaultMouseTailConfig : Object.assign({}, defaultMouseTailConfig, this.config.mouseTail),
      lineCap = _a.lineCap,
      lineWidth = _a.lineWidth,
      strokeStyle = _a.strokeStyle,
      duration = _a.duration;
    var draw = function () {
      if (!_this.mouseTail) {
        return;
      }
      var ctx = _this.mouseTail.getContext('2d');
      if (!ctx || !_this.tailPositions.length) {
        return;
      }
      ctx.clearRect(0, 0, _this.mouseTail.width, _this.mouseTail.height);
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.lineCap = lineCap;
      ctx.strokeStyle = strokeStyle;
      ctx.moveTo(_this.tailPositions[0].x, _this.tailPositions[0].y);
      _this.tailPositions.forEach(function (p) {
        return ctx.lineTo(p.x, p.y);
      });
      ctx.stroke();
    };
    this.tailPositions.push(position);
    draw();
    setTimeout(function () {
      _this.tailPositions = _this.tailPositions.filter(function (p) {
        return p !== position;
      });
      draw();
    }, duration / this.speedService.state.context.timer.speed);
  };
  Replayer.prototype.hoverElements = function (el) {
    var _a;
    (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.\\:hover').forEach(function (hoveredEl) {
      hoveredEl.classList.remove(':hover');
    });
    var currentEl = el;
    while (currentEl) {
      if (currentEl.classList) {
        currentEl.classList.add(':hover');
      }
      currentEl = currentEl.parentElement;
    }
  };
  Replayer.prototype.isUserInteraction = function (event) {
    if (event.type !== _types.EventType.IncrementalSnapshot) {
      return false;
    }
    return event.data.source > _types.IncrementalSource.Mutation && event.data.source <= _types.IncrementalSource.Input;
  };
  Replayer.prototype.backToNormal = function () {
    this.nextUserInteractionEvent = null;
    if (this.speedService.state.matches('normal')) {
      return;
    }
    this.speedService.send({
      type: 'BACK_TO_NORMAL'
    });
    this.emitter.emit(_types.ReplayerEvents.SkipEnd, {
      speed: this.speedService.state.context.normalSpeed
    });
  };
  Replayer.prototype.restoreRealParent = function (frag, parent) {
    this.mirror.map[parent.__sn.id] = parent;
    if (parent.__sn.type === _rrwebSnapshot.NodeType.Element && parent.__sn.tagName === 'textarea' && frag.textContent) {
      parent.value = frag.textContent;
    }
    parent.appendChild(frag);
    this.restoreState(parent);
  };
  Replayer.prototype.storeState = function (parent) {
    var e_16, _a;
    if (parent) {
      if (parent.nodeType === parent.ELEMENT_NODE) {
        var parentElement = parent;
        if (parentElement.scrollLeft || parentElement.scrollTop) {
          this.elementStateMap.set(parent, {
            scroll: [parentElement.scrollLeft, parentElement.scrollTop]
          });
        }
        if (parentElement.tagName === 'STYLE') (0, _virtualStyles.storeCSSRules)(parentElement, this.virtualStyleRulesMap);
        var children = parentElement.children;
        try {
          for (var _b = (0, _tslibEs.__values)(Array.from(children)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            this.storeState(child);
          }
        } catch (e_16_1) {
          e_16 = {
            error: e_16_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_16) throw e_16.error;
          }
        }
      }
    }
  };
  Replayer.prototype.restoreState = function (parent) {
    var e_17, _a;
    if (parent.nodeType === parent.ELEMENT_NODE) {
      var parentElement = parent;
      if (this.elementStateMap.has(parent)) {
        var storedState = this.elementStateMap.get(parent);
        if (storedState.scroll) {
          parentElement.scrollLeft = storedState.scroll[0];
          parentElement.scrollTop = storedState.scroll[1];
        }
        this.elementStateMap.delete(parent);
      }
      var children = parentElement.children;
      try {
        for (var _b = (0, _tslibEs.__values)(Array.from(children)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var child = _c.value;
          this.restoreState(child);
        }
      } catch (e_17_1) {
        e_17 = {
          error: e_17_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_17) throw e_17.error;
        }
      }
    }
  };
  Replayer.prototype.restoreNodeSheet = function (node) {
    var storedRules = this.virtualStyleRulesMap.get(node);
    if (node.nodeName !== 'STYLE') {
      return;
    }
    if (!storedRules) {
      return;
    }
    var styleNode = node;
    (0, _virtualStyles.applyVirtualStyleRulesToNode)(storedRules, styleNode);
  };
  Replayer.prototype.warnNodeNotFound = function (d, id) {
    if (this.treeIndex.idRemoved(id)) {
      this.warn("Node with id '".concat(id, "' was previously removed. "), d);
    } else {
      this.warn("Node with id '".concat(id, "' not found. "), d);
    }
  };
  Replayer.prototype.warnCanvasMutationFailed = function (d, error) {
    this.warn("Has error on canvas update", error, 'canvas mutation:', d);
  };
  Replayer.prototype.debugNodeNotFound = function (d, id) {
    if (this.treeIndex.idRemoved(id)) {
      this.debug(REPLAY_CONSOLE_PREFIX, "Node with id '".concat(id, "' was previously removed. "), d);
    } else {
      this.debug(REPLAY_CONSOLE_PREFIX, "Node with id '".concat(id, "' not found. "), d);
    }
  };
  Replayer.prototype.warn = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (!this.config.showWarning) {
      return;
    }
    console.warn.apply(console, (0, _tslibEs.__spreadArray)([REPLAY_CONSOLE_PREFIX], (0, _tslibEs.__read)(args), false));
  };
  Replayer.prototype.debug = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (!this.config.showDebug) {
      return;
    }
    console.log.apply(console, (0, _tslibEs.__spreadArray)([REPLAY_CONSOLE_PREFIX], (0, _tslibEs.__read)(args), false));
  };
  return Replayer;
}();
},{"../../ext/tslib/tslib.es6.js":"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js","../../../rrweb-snapshot/es/rrweb-snapshot.js":"node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js","../../../../ext/mitt/dist/mitt.es.js":"node_modules/rrweb/es/rrweb/ext/mitt/dist/mitt.es.js","./smoothscroll.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/smoothscroll.js","./timer.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/timer.js","./machine.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/machine.js","../types.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js","../utils.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js","./styles/inject-style.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/styles/inject-style.js","./virtual-styles.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/virtual-styles.js","./canvas/index.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/index.js"}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "EventType", {
  enumerable: true,
  get: function () {
    return _types.EventType;
  }
});
Object.defineProperty(exports, "IncrementalSource", {
  enumerable: true,
  get: function () {
    return _types.IncrementalSource;
  }
});
Object.defineProperty(exports, "MouseInteractions", {
  enumerable: true,
  get: function () {
    return _types.MouseInteractions;
  }
});
Object.defineProperty(exports, "Replayer", {
  enumerable: true,
  get: function () {
    return _index2.Replayer;
  }
});
Object.defineProperty(exports, "ReplayerEvents", {
  enumerable: true,
  get: function () {
    return _types.ReplayerEvents;
  }
});
exports.freezePage = exports.addCustomEvent = void 0;
Object.defineProperty(exports, "mirror", {
  enumerable: true,
  get: function () {
    return utils._mirror;
  }
});
Object.defineProperty(exports, "record", {
  enumerable: true,
  get: function () {
    return _index.default;
  }
});
exports.utils = void 0;
var _index = _interopRequireDefault(require("./record/index.js"));
var _index2 = require("./replay/index.js");
var utils = _interopRequireWildcard(require("./utils.js"));
exports.utils = utils;
var _types = require("./types.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var addCustomEvent = exports.addCustomEvent = _index.default.addCustomEvent;
var freezePage = exports.freezePage = _index.default.freezePage;
},{"./record/index.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/index.js","./replay/index.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/index.js","./utils.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js","./types.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js"}],"node_modules/rrweb/es/rrweb/ext/fflate/esm/browser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strFromU8 = strFromU8;
exports.strToU8 = strToU8;
exports.unzlibSync = unzlibSync;
exports.zlibSync = zlibSync;
// DEFLATE is a complex format; to read this code, you should probably check the RFC first:

// aliases for shorter compressed code (most minifers don't do this)
var u8 = Uint8Array,
  u16 = Uint16Array,
  u32 = Uint32Array;
// fixed length extra bits
var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, /* unused */0, 0, /* impossible */0]);
// fixed distance extra bits
// see fleb note
var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, /* unused */0, 0]);
// code length index map
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
// get base, reverse index map from extra bits
var freb = function (eb, start) {
  var b = new u16(31);
  for (var i = 0; i < 31; ++i) {
    b[i] = start += 1 << eb[i - 1];
  }
  // numbers here are at max 18 bits
  var r = new u32(b[30]);
  for (var i = 1; i < 30; ++i) {
    for (var j = b[i]; j < b[i + 1]; ++j) {
      r[j] = j - b[i] << 5 | i;
    }
  }
  return [b, r];
};
var _a = freb(fleb, 2),
  fl = _a[0],
  revfl = _a[1];
// we can ignore the fact that the other numbers are wrong; they never happen anyway
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0),
  fd = _b[0],
  revfd = _b[1];
// map of value to reverse (assuming 16 bits)
var rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
  // reverse table algorithm from SO
  var x = (i & 0xAAAA) >>> 1 | (i & 0x5555) << 1;
  x = (x & 0xCCCC) >>> 2 | (x & 0x3333) << 2;
  x = (x & 0xF0F0) >>> 4 | (x & 0x0F0F) << 4;
  rev[i] = ((x & 0xFF00) >>> 8 | (x & 0x00FF) << 8) >>> 1;
}
// create huffman tree from u8 "map": index -> code length for code index
// mb (max bits) must be at most 15
// TODO: optimize/split up?
var hMap = function (cd, mb, r) {
  var s = cd.length;
  // index
  var i = 0;
  // u16 "map": index -> # of codes with bit length = index
  var l = new u16(mb);
  // length of cd must be 288 (total # of codes)
  for (; i < s; ++i) ++l[cd[i] - 1];
  // u16 "map": index -> minimum code for bit length = index
  var le = new u16(mb);
  for (i = 0; i < mb; ++i) {
    le[i] = le[i - 1] + l[i - 1] << 1;
  }
  var co;
  if (r) {
    // u16 "map": index -> number of actual bits, symbol for code
    co = new u16(1 << mb);
    // bits to remove for reverser
    var rvb = 15 - mb;
    for (i = 0; i < s; ++i) {
      // ignore 0 lengths
      if (cd[i]) {
        // num encoding both symbol and bits read
        var sv = i << 4 | cd[i];
        // free bits
        var r_1 = mb - cd[i];
        // start value
        var v = le[cd[i] - 1]++ << r_1;
        // m is end value
        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          // every 16 bit value starting with the code yields the same result
          co[rev[v] >>> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i = 0; i < s; ++i) co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
  }
  return co;
};
// fixed length tree
var flt = new u8(288);
for (var i = 0; i < 144; ++i) flt[i] = 8;
for (var i = 144; i < 256; ++i) flt[i] = 9;
for (var i = 256; i < 280; ++i) flt[i] = 7;
for (var i = 280; i < 288; ++i) flt[i] = 8;
// fixed distance tree
var fdt = new u8(32);
for (var i = 0; i < 32; ++i) fdt[i] = 5;
// fixed length map
var flm = /*#__PURE__*/hMap(flt, 9, 0),
  flrm = /*#__PURE__*/hMap(flt, 9, 1);
// fixed distance map
var fdm = /*#__PURE__*/hMap(fdt, 5, 0),
  fdrm = /*#__PURE__*/hMap(fdt, 5, 1);
// find max of array
var max = function (a) {
  var m = a[0];
  for (var i = 1; i < a.length; ++i) {
    if (a[i] > m) m = a[i];
  }
  return m;
};
// read d, starting at bit p and mask with m
var bits = function (d, p, m) {
  var o = p / 8 >> 0;
  return (d[o] | d[o + 1] << 8) >>> (p & 7) & m;
};
// read d, starting at bit p continuing for at least 16 bits
var bits16 = function (d, p) {
  var o = p / 8 >> 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >>> (p & 7);
};
// get end of byte
var shft = function (p) {
  return (p / 8 >> 0) + (p & 7 && 1);
};
// typed array slice - allows garbage collector to free original reference,
// while being more compatible than .slice
var slc = function (v, s, e) {
  if (s == null || s < 0) s = 0;
  if (e == null || e > v.length) e = v.length;
  // can't use .constructor in case user-supplied
  var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
  n.set(v.subarray(s, e));
  return n;
};
// expands raw DEFLATE data
var inflt = function (dat, buf, st) {
  // source length
  var sl = dat.length;
  // have to estimate size
  var noBuf = !buf || st;
  // no state
  var noSt = !st || st.i;
  if (!st) st = {};
  // Assumes roughly 33% compression ratio average
  if (!buf) buf = new u8(sl * 3);
  // ensure buffer can fit at least l elements
  var cbuf = function (l) {
    var bl = buf.length;
    // need to increase size to fit
    if (l > bl) {
      // Double or set to necessary, whichever is greater
      var nbuf = new u8(Math.max(bl * 2, l));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  //  last chunk         bitpos           bytes
  var final = st.f || 0,
    pos = st.p || 0,
    bt = st.b || 0,
    lm = st.l,
    dm = st.d,
    lbt = st.m,
    dbt = st.n;
  // total bits
  var tbts = sl * 8;
  do {
    if (!lm) {
      // BFINAL - this is only 1 when last chunk is next
      st.f = final = bits(dat, pos, 1);
      // type: 0 = no compression, 1 = fixed huffman, 2 = dynamic huffman
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        // go to end of byte boundary
        var s = shft(pos) + 4,
          l = dat[s - 4] | dat[s - 3] << 8,
          t = s + l;
        if (t > sl) {
          if (noSt) throw 'unexpected EOF';
          break;
        }
        // ensure size
        if (noBuf) cbuf(bt + l);
        // Copy over uncompressed data
        buf.set(dat.subarray(s, t), bt);
        // Get new bitpos, update byte count
        st.b = bt += l, st.p = pos = t * 8;
        continue;
      } else if (type == 1) lm = flrm, dm = fdrm, lbt = 9, dbt = 5;else if (type == 2) {
        //  literal                            lengths
        var hLit = bits(dat, pos, 31) + 257,
          hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        // length+distance tree
        var ldt = new u8(tl);
        // code length tree
        var clt = new u8(19);
        for (var i = 0; i < hcLen; ++i) {
          // use index map to get real code
          clt[clim[i]] = bits(dat, pos + i * 3, 7);
        }
        pos += hcLen * 3;
        // code lengths bits
        var clb = max(clt),
          clbmsk = (1 << clb) - 1;
        if (!noSt && pos + tl * (clb + 7) > tbts) break;
        // code lengths map
        var clm = hMap(clt, clb, 1);
        for (var i = 0; i < tl;) {
          var r = clm[bits(dat, pos, clbmsk)];
          // bits read
          pos += r & 15;
          // symbol
          var s = r >>> 4;
          // code length to copy
          if (s < 16) {
            ldt[i++] = s;
          } else {
            //  copy   count
            var c = 0,
              n = 0;
            if (s == 16) n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];else if (s == 17) n = 3 + bits(dat, pos, 7), pos += 3;else if (s == 18) n = 11 + bits(dat, pos, 127), pos += 7;
            while (n--) ldt[i++] = c;
          }
        }
        //    length tree                 distance tree
        var lt = ldt.subarray(0, hLit),
          dt = ldt.subarray(hLit);
        // max length bits
        lbt = max(lt);
        // max dist bits
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else throw 'invalid block type';
      if (pos > tbts) throw 'unexpected EOF';
    }
    // Make sure the buffer can hold this + the largest possible addition
    // Maximum chunk size (practically, theoretically infinite) is 2^17;
    if (noBuf) cbuf(bt + 131072);
    var lms = (1 << lbt) - 1,
      dms = (1 << dbt) - 1;
    var mxa = lbt + dbt + 18;
    while (noSt || pos + mxa < tbts) {
      // bits read, code
      var c = lm[bits16(dat, pos) & lms],
        sym = c >>> 4;
      pos += c & 15;
      if (pos > tbts) throw 'unexpected EOF';
      if (!c) throw 'invalid length/literal';
      if (sym < 256) buf[bt++] = sym;else if (sym == 256) {
        lm = null;
        break;
      } else {
        var add = sym - 254;
        // no extra bits needed if less
        if (sym > 264) {
          // index
          var i = sym - 257,
            b = fleb[i];
          add = bits(dat, pos, (1 << b) - 1) + fl[i];
          pos += b;
        }
        // dist
        var d = dm[bits16(dat, pos) & dms],
          dsym = d >>> 4;
        if (!d) throw 'invalid distance';
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) throw 'unexpected EOF';
        if (noBuf) cbuf(bt + 131072);
        var end = bt + add;
        for (; bt < end; bt += 4) {
          buf[bt] = buf[bt - dt];
          buf[bt + 1] = buf[bt + 1 - dt];
          buf[bt + 2] = buf[bt + 2 - dt];
          buf[bt + 3] = buf[bt + 3 - dt];
        }
        bt = end;
      }
    }
    st.l = lm, st.p = pos, st.b = bt;
    if (lm) final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt == buf.length ? buf : slc(buf, 0, bt);
};
// starting at p, write the minimum number of bits that can hold v to d
var wbits = function (d, p, v) {
  v <<= p & 7;
  var o = p / 8 >> 0;
  d[o] |= v;
  d[o + 1] |= v >>> 8;
};
// starting at p, write the minimum number of bits (>8) that can hold v to d
var wbits16 = function (d, p, v) {
  v <<= p & 7;
  var o = p / 8 >> 0;
  d[o] |= v;
  d[o + 1] |= v >>> 8;
  d[o + 2] |= v >>> 16;
};
// creates code lengths from a frequency table
var hTree = function (d, mb) {
  // Need extra info to make a tree
  var t = [];
  for (var i = 0; i < d.length; ++i) {
    if (d[i]) t.push({
      s: i,
      f: d[i]
    });
  }
  var s = t.length;
  var t2 = t.slice();
  if (!s) return [new u8(0), 0];
  if (s == 1) {
    var v = new u8(t[0].s + 1);
    v[t[0].s] = 1;
    return [v, 1];
  }
  t.sort(function (a, b) {
    return a.f - b.f;
  });
  // after i2 reaches last ind, will be stopped
  // freq must be greater than largest possible number of symbols
  t.push({
    s: -1,
    f: 25001
  });
  var l = t[0],
    r = t[1],
    i0 = 0,
    i1 = 1,
    i2 = 2;
  t[0] = {
    s: -1,
    f: l.f + r.f,
    l: l,
    r: r
  };
  // efficient algorithm from UZIP.js
  // i0 is lookbehind, i2 is lookahead - after processing two low-freq
  // symbols that combined have high freq, will start processing i2 (high-freq,
  // non-composite) symbols instead
  // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/
  while (i1 != s - 1) {
    l = t[t[i0].f < t[i2].f ? i0++ : i2++];
    r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
    t[i1++] = {
      s: -1,
      f: l.f + r.f,
      l: l,
      r: r
    };
  }
  var maxSym = t2[0].s;
  for (var i = 1; i < s; ++i) {
    if (t2[i].s > maxSym) maxSym = t2[i].s;
  }
  // code lengths
  var tr = new u16(maxSym + 1);
  // max bits in tree
  var mbt = ln(t[i1 - 1], tr, 0);
  if (mbt > mb) {
    // more algorithms from UZIP.js
    // TODO: find out how this code works (debt)
    //  ind    debt
    var i = 0,
      dt = 0;
    //    left            cost
    var lft = mbt - mb,
      cst = 1 << lft;
    t2.sort(function (a, b) {
      return tr[b.s] - tr[a.s] || a.f - b.f;
    });
    for (; i < s; ++i) {
      var i2_1 = t2[i].s;
      if (tr[i2_1] > mb) {
        dt += cst - (1 << mbt - tr[i2_1]);
        tr[i2_1] = mb;
      } else break;
    }
    dt >>>= lft;
    while (dt > 0) {
      var i2_2 = t2[i].s;
      if (tr[i2_2] < mb) dt -= 1 << mb - tr[i2_2]++ - 1;else ++i;
    }
    for (; i >= 0 && dt; --i) {
      var i2_3 = t2[i].s;
      if (tr[i2_3] == mb) {
        --tr[i2_3];
        ++dt;
      }
    }
    mbt = mb;
  }
  return [new u8(tr), mbt];
};
// get the max length and assign length codes
var ln = function (n, l, d) {
  return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
// length codes generation
var lc = function (c) {
  var s = c.length;
  // Note that the semicolon was intentional
  while (s && !c[--s]);
  var cl = new u16(++s);
  //  ind      num         streak
  var cli = 0,
    cln = c[0],
    cls = 1;
  var w = function (v) {
    cl[cli++] = v;
  };
  for (var i = 1; i <= s; ++i) {
    if (c[i] == cln && i != s) ++cls;else {
      if (!cln && cls > 2) {
        for (; cls > 138; cls -= 138) w(32754);
        if (cls > 2) {
          w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
          cls = 0;
        }
      } else if (cls > 3) {
        w(cln), --cls;
        for (; cls > 6; cls -= 6) w(8304);
        if (cls > 2) w(cls - 3 << 5 | 8208), cls = 0;
      }
      while (cls--) w(cln);
      cls = 1;
      cln = c[i];
    }
  }
  return [cl.subarray(0, cli), s];
};
// calculate the length of output from tree, code lengths
var clen = function (cf, cl) {
  var l = 0;
  for (var i = 0; i < cl.length; ++i) l += cf[i] * cl[i];
  return l;
};
// writes a fixed block
// returns the new bit pos
var wfblk = function (out, pos, dat) {
  // no need to write 00 as type: TypedArray defaults to 0
  var s = dat.length;
  var o = shft(pos + 2);
  out[o] = s & 255;
  out[o + 1] = s >>> 8;
  out[o + 2] = out[o] ^ 255;
  out[o + 3] = out[o + 1] ^ 255;
  for (var i = 0; i < s; ++i) out[o + i + 4] = dat[i];
  return (o + 4 + s) * 8;
};
// writes a block
var wblk = function (dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
  wbits(out, p++, final);
  ++lf[256];
  var _a = hTree(lf, 15),
    dlt = _a[0],
    mlb = _a[1];
  var _b = hTree(df, 15),
    ddt = _b[0],
    mdb = _b[1];
  var _c = lc(dlt),
    lclt = _c[0],
    nlc = _c[1];
  var _d = lc(ddt),
    lcdt = _d[0],
    ndc = _d[1];
  var lcfreq = new u16(19);
  for (var i = 0; i < lclt.length; ++i) lcfreq[lclt[i] & 31]++;
  for (var i = 0; i < lcdt.length; ++i) lcfreq[lcdt[i] & 31]++;
  var _e = hTree(lcfreq, 7),
    lct = _e[0],
    mlcb = _e[1];
  var nlcc = 19;
  for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc);
  var flen = bl + 5 << 3;
  var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
  var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
  if (flen <= ftlen && flen <= dtlen) return wfblk(out, p, dat.subarray(bs, bs + bl));
  var lm, ll, dm, dl;
  wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
  if (dtlen < ftlen) {
    lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
    var llm = hMap(lct, mlcb, 0);
    wbits(out, p, nlc - 257);
    wbits(out, p + 5, ndc - 1);
    wbits(out, p + 10, nlcc - 4);
    p += 14;
    for (var i = 0; i < nlcc; ++i) wbits(out, p + 3 * i, lct[clim[i]]);
    p += 3 * nlcc;
    var lcts = [lclt, lcdt];
    for (var it = 0; it < 2; ++it) {
      var clct = lcts[it];
      for (var i = 0; i < clct.length; ++i) {
        var len = clct[i] & 31;
        wbits(out, p, llm[len]), p += lct[len];
        if (len > 15) wbits(out, p, clct[i] >>> 5 & 127), p += clct[i] >>> 12;
      }
    }
  } else {
    lm = flm, ll = flt, dm = fdm, dl = fdt;
  }
  for (var i = 0; i < li; ++i) {
    if (syms[i] > 255) {
      var len = syms[i] >>> 18 & 31;
      wbits16(out, p, lm[len + 257]), p += ll[len + 257];
      if (len > 7) wbits(out, p, syms[i] >>> 23 & 31), p += fleb[len];
      var dst = syms[i] & 31;
      wbits16(out, p, dm[dst]), p += dl[dst];
      if (dst > 3) wbits16(out, p, syms[i] >>> 5 & 8191), p += fdeb[dst];
    } else {
      wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
    }
  }
  wbits16(out, p, lm[256]);
  return p + ll[256];
};
// deflate options (nice << 13) | chain
var deo = /*#__PURE__*/new u32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
// empty
var et = /*#__PURE__*/new u8(0);
// compresses data into a raw DEFLATE buffer
var dflt = function (dat, lvl, plvl, pre, post, lst) {
  var s = dat.length;
  var o = new u8(pre + s + 5 * (1 + Math.floor(s / 7000)) + post);
  // writing to this writes to the output buffer
  var w = o.subarray(pre, o.length - post);
  var pos = 0;
  if (!lvl || s < 8) {
    for (var i = 0; i <= s; i += 65535) {
      // end
      var e = i + 65535;
      if (e < s) {
        // write full block
        pos = wfblk(w, pos, dat.subarray(i, e));
      } else {
        // write final block
        w[i] = lst;
        pos = wfblk(w, pos, dat.subarray(i, s));
      }
    }
  } else {
    var opt = deo[lvl - 1];
    var n = opt >>> 13,
      c = opt & 8191;
    var msk_1 = (1 << plvl) - 1;
    //    prev 2-byte val map    curr 2-byte val map
    var prev = new u16(32768),
      head = new u16(msk_1 + 1);
    var bs1_1 = Math.ceil(plvl / 3),
      bs2_1 = 2 * bs1_1;
    var hsh = function (i) {
      return (dat[i] ^ dat[i + 1] << bs1_1 ^ dat[i + 2] << bs2_1) & msk_1;
    };
    // 24576 is an arbitrary number of maximum symbols per block
    // 424 buffer for last block
    var syms = new u32(25000);
    // length/literal freq   distance freq
    var lf = new u16(288),
      df = new u16(32);
    //  l/lcnt  exbits  index  l/lind  waitdx  bitpos
    var lc_1 = 0,
      eb = 0,
      i = 0,
      li = 0,
      wi = 0,
      bs = 0;
    for (; i < s; ++i) {
      // hash value
      var hv = hsh(i);
      // index mod 32768
      var imod = i & 32767;
      // previous index with this value
      var pimod = head[hv];
      prev[imod] = pimod;
      head[hv] = imod;
      // We always should modify head and prev, but only add symbols if
      // this data is not yet processed ("wait" for wait index)
      if (wi <= i) {
        // bytes remaining
        var rem = s - i;
        if ((lc_1 > 7000 || li > 24576) && rem > 423) {
          pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
          li = lc_1 = eb = 0, bs = i;
          for (var j = 0; j < 286; ++j) lf[j] = 0;
          for (var j = 0; j < 30; ++j) df[j] = 0;
        }
        //  len    dist   chain
        var l = 2,
          d = 0,
          ch_1 = c,
          dif = imod - pimod & 32767;
        if (rem > 2 && hv == hsh(i - dif)) {
          var maxn = Math.min(n, rem) - 1;
          var maxd = Math.min(32767, i);
          // max possible length
          // not capped at dif because decompressors implement "rolling" index population
          var ml = Math.min(258, rem);
          while (dif <= maxd && --ch_1 && imod != pimod) {
            if (dat[i + l] == dat[i + l - dif]) {
              var nl = 0;
              for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl);
              if (nl > l) {
                l = nl, d = dif;
                // break out early when we reach "nice" (we are satisfied enough)
                if (nl > maxn) break;
                // now, find the rarest 2-byte sequence within this
                // length of literals and search for that instead.
                // Much faster than just using the start
                var mmd = Math.min(dif, nl - 2);
                var md = 0;
                for (var j = 0; j < mmd; ++j) {
                  var ti = i - dif + j + 32768 & 32767;
                  var pti = prev[ti];
                  var cd = ti - pti + 32768 & 32767;
                  if (cd > md) md = cd, pimod = ti;
                }
              }
            }
            // check the previous match
            imod = pimod, pimod = prev[imod];
            dif += imod - pimod + 32768 & 32767;
          }
        }
        // d will be nonzero only when a match was found
        if (d) {
          // store both dist and len data in one Uint32
          // Make sure this is recognized as a len/dist with 28th bit (2^28)
          syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
          var lin = revfl[l] & 31,
            din = revfd[d] & 31;
          eb += fleb[lin] + fdeb[din];
          ++lf[257 + lin];
          ++df[din];
          wi = i + l;
          ++lc_1;
        } else {
          syms[li++] = dat[i];
          ++lf[dat[i]];
        }
      }
    }
    pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
    // this is the easiest way to avoid needing to maintain state
    if (!lst) pos = wfblk(w, pos, et);
  }
  return slc(o, 0, pre + shft(pos) + post);
};
// Alder32
var adler = function () {
  var a = 1,
    b = 0;
  return {
    p: function (d) {
      // closures have awful performance
      var n = a,
        m = b;
      var l = d.length;
      for (var i = 0; i != l;) {
        var e = Math.min(i + 5552, l);
        for (; i < e; ++i) n += d[i], m += n;
        n %= 65521, m %= 65521;
      }
      a = n, b = m;
    },
    d: function () {
      return (a >>> 8 << 16 | (b & 255) << 8 | b >>> 8) + ((a & 255) << 23) * 2;
    }
  };
};
// deflate with opts
var dopt = function (dat, opt, pre, post, st) {
  return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 12 + opt.mem, pre, post, !st);
};
// write bytes
var wbytes = function (d, b, v) {
  for (; v; ++b) d[b] = v, v >>>= 8;
};
// zlib header
var zlh = function (c, o) {
  var lv = o.level,
    fl = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
  c[0] = 120, c[1] = fl << 6 | (fl ? 32 - 2 * fl : 1);
};
// zlib valid
var zlv = function (d) {
  if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31) throw 'invalid zlib data';
  if (d[1] & 32) throw 'invalid zlib data: preset dictionaries not supported';
};
/**
 * Compress data with Zlib
 * @param data The data to compress
 * @param opts The compression options
 * @returns The zlib-compressed version of the data
 */
function zlibSync(data, opts) {
  if (opts === void 0) {
    opts = {};
  }
  var a = adler();
  a.p(data);
  var d = dopt(data, opts, 2, 4);
  return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
}
/**
 * Expands Zlib data
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */
function unzlibSync(data, out) {
  return inflt((zlv(data), data.subarray(2, -4)), out);
}
/**
 * Converts a string into a Uint8Array for use with compression/decompression methods
 * @param str The string to encode
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless decoding a binary string.
 * @returns The string encoded in UTF-8/Latin-1 binary
 */
function strToU8(str, latin1) {
  var l = str.length;
  if (!latin1 && typeof TextEncoder != 'undefined') return new TextEncoder().encode(str);
  var ar = new u8(str.length + (str.length >>> 1));
  var ai = 0;
  var w = function (v) {
    ar[ai++] = v;
  };
  for (var i = 0; i < l; ++i) {
    if (ai + 5 > ar.length) {
      var n = new u8(ai + 8 + (l - i << 1));
      n.set(ar);
      ar = n;
    }
    var c = str.charCodeAt(i);
    if (c < 128 || latin1) w(c);else if (c < 2048) w(192 | c >>> 6), w(128 | c & 63);else if (c > 55295 && c < 57344) c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i) & 1023, w(240 | c >>> 18), w(128 | c >>> 12 & 63), w(128 | c >>> 6 & 63), w(128 | c & 63);else w(224 | c >>> 12), w(128 | c >>> 6 & 63), w(128 | c & 63);
  }
  return slc(ar, 0, ai);
}
/**
 * Converts a Uint8Array to a string
 * @param dat The data to decode to string
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless encoding to binary string.
 * @returns The original UTF-8/Latin-1 string
 */
function strFromU8(dat, latin1) {
  var r = '';
  if (!latin1 && typeof TextDecoder != 'undefined') return new TextDecoder().decode(dat);
  for (var i = 0; i < dat.length;) {
    var c = dat[i++];
    if (c < 128 || latin1) r += String.fromCharCode(c);else if (c < 224) r += String.fromCharCode((c & 31) << 6 | dat[i++] & 63);else if (c < 240) r += String.fromCharCode((c & 15) << 12 | (dat[i++] & 63) << 6 | dat[i++] & 63);else c = ((c & 15) << 18 | (dat[i++] & 63) << 12 | (dat[i++] & 63) << 6 | dat[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
  }
  return r;
}
},{}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/base.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MARK = void 0;
var MARK = exports.MARK = 'v1';
},{}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/pack.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pack = void 0;
var _tslibEs = require("../../ext/tslib/tslib.es6.js");
var _browser = require("../../../../ext/fflate/esm/browser.js");
var _base = require("./base.js");
var pack = function (event) {
  var _e = (0, _tslibEs.__assign)((0, _tslibEs.__assign)({}, event), {
    v: _base.MARK
  });
  return (0, _browser.strFromU8)((0, _browser.zlibSync)((0, _browser.strToU8)(JSON.stringify(_e))), true);
};
exports.pack = pack;
},{"../../ext/tslib/tslib.es6.js":"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js","../../../../ext/fflate/esm/browser.js":"node_modules/rrweb/es/rrweb/ext/fflate/esm/browser.js","./base.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/base.js"}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/unpack.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unpack = void 0;
var _browser = require("../../../../ext/fflate/esm/browser.js");
var _base = require("./base.js");
var unpack = function (raw) {
  if (typeof raw !== 'string') {
    return raw;
  }
  try {
    var e = JSON.parse(raw);
    if (e.timestamp) {
      return e;
    }
  } catch (error) {}
  try {
    var e = JSON.parse((0, _browser.strFromU8)((0, _browser.unzlibSync)((0, _browser.strToU8)(raw, true))));
    if (e.v === _base.MARK) {
      return e;
    }
    throw new Error("These events were packed with packer ".concat(e.v, " which is incompatible with current packer ").concat(_base.MARK, "."));
  } catch (error) {
    console.error(error);
    throw new Error('Unknown data format.');
  }
};
exports.unpack = unpack;
},{"../../../../ext/fflate/esm/browser.js":"node_modules/rrweb/es/rrweb/ext/fflate/esm/browser.js","./base.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/base.js"}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/error-stack-parser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StackFrame = exports.ErrorStackParser = void 0;
var StackFrame = exports.StackFrame = function () {
  function StackFrame(obj) {
    this.fileName = obj.fileName || '';
    this.functionName = obj.functionName || '';
    this.lineNumber = obj.lineNumber;
    this.columnNumber = obj.columnNumber;
  }
  StackFrame.prototype.toString = function () {
    var lineNumber = this.lineNumber || '';
    var columnNumber = this.columnNumber || '';
    if (this.functionName) {
      return this.functionName + ' (' + this.fileName + ':' + lineNumber + ':' + columnNumber + ')';
    }
    return this.fileName + ':' + lineNumber + ':' + columnNumber;
  };
  return StackFrame;
}();
var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
var ErrorStackParser = exports.ErrorStackParser = {
  parse: function (error) {
    if (!error) {
      return [];
    }
    if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
      return this.parseOpera(error);
    } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
      return this.parseV8OrIE(error);
    } else if (error.stack) {
      return this.parseFFOrSafari(error);
    } else {
      throw new Error('Cannot parse given Error object');
    }
  },
  extractLocation: function (urlLike) {
    if (urlLike.indexOf(':') === -1) {
      return [urlLike];
    }
    var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
    var parts = regExp.exec(urlLike.replace(/[()]/g, ''));
    if (!parts) throw new Error("Cannot parse given url: ".concat(urlLike));
    return [parts[1], parts[2] || undefined, parts[3] || undefined];
  },
  parseV8OrIE: function (error) {
    var filtered = error.stack.split('\n').filter(function (line) {
      return !!line.match(CHROME_IE_STACK_REGEXP);
    }, this);
    return filtered.map(function (line) {
      if (line.indexOf('(eval ') > -1) {
        line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^()]*)|(\),.*$)/g, '');
      }
      var sanitizedLine = line.replace(/^\s+/, '').replace(/\(eval code/g, '(');
      var location = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/);
      sanitizedLine = location ? sanitizedLine.replace(location[0], '') : sanitizedLine;
      var tokens = sanitizedLine.split(/\s+/).slice(1);
      var locationParts = this.extractLocation(location ? location[1] : tokens.pop());
      var functionName = tokens.join(' ') || undefined;
      var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];
      return new StackFrame({
        functionName: functionName,
        fileName: fileName,
        lineNumber: locationParts[1],
        columnNumber: locationParts[2]
      });
    }, this);
  },
  parseFFOrSafari: function (error) {
    var filtered = error.stack.split('\n').filter(function (line) {
      return !line.match(SAFARI_NATIVE_CODE_REGEXP);
    }, this);
    return filtered.map(function (line) {
      if (line.indexOf(' > eval') > -1) {
        line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ':$1');
      }
      if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
        return new StackFrame({
          functionName: line
        });
      } else {
        var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
        var matches = line.match(functionNameRegex);
        var functionName = matches && matches[1] ? matches[1] : undefined;
        var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));
        return new StackFrame({
          functionName: functionName,
          fileName: locationParts[0],
          lineNumber: locationParts[1],
          columnNumber: locationParts[2]
        });
      }
    }, this);
  },
  parseOpera: function (e) {
    if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
      return this.parseOpera9(e);
    } else if (!e.stack) {
      return this.parseOpera10(e);
    } else {
      return this.parseOpera11(e);
    }
  },
  parseOpera9: function (e) {
    var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
    var lines = e.message.split('\n');
    var result = [];
    for (var i = 2, len = lines.length; i < len; i += 2) {
      var match = lineRE.exec(lines[i]);
      if (match) {
        result.push(new StackFrame({
          fileName: match[2],
          lineNumber: parseFloat(match[1])
        }));
      }
    }
    return result;
  },
  parseOpera10: function (e) {
    var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
    var lines = e.stacktrace.split('\n');
    var result = [];
    for (var i = 0, len = lines.length; i < len; i += 2) {
      var match = lineRE.exec(lines[i]);
      if (match) {
        result.push(new StackFrame({
          functionName: match[3] || undefined,
          fileName: match[2],
          lineNumber: parseFloat(match[1])
        }));
      }
    }
    return result;
  },
  parseOpera11: function (error) {
    var filtered = error.stack.split('\n').filter(function (line) {
      return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
    }, this);
    return filtered.map(function (line) {
      var tokens = line.split('@');
      var locationParts = this.extractLocation(tokens.pop());
      var functionCall = tokens.shift() || '';
      var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^)]*\)/g, '') || undefined;
      return new StackFrame({
        functionName: functionName,
        fileName: locationParts[0],
        lineNumber: locationParts[1],
        columnNumber: locationParts[2]
      });
    }, this);
  }
};
},{}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/stringify.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = stringify;
var _tslibEs = require("../../../../ext/tslib/tslib.es6.js");
function pathToSelector(node) {
  if (!node || !node.outerHTML) {
    return '';
  }
  var path = '';
  while (node.parentElement) {
    var name_1 = node.localName;
    if (!name_1) {
      break;
    }
    name_1 = name_1.toLowerCase();
    var parent_1 = node.parentElement;
    var domSiblings = [];
    if (parent_1.children && parent_1.children.length > 0) {
      for (var i = 0; i < parent_1.children.length; i++) {
        var sibling = parent_1.children[i];
        if (sibling.localName && sibling.localName.toLowerCase) {
          if (sibling.localName.toLowerCase() === name_1) {
            domSiblings.push(sibling);
          }
        }
      }
    }
    if (domSiblings.length > 1) {
      name_1 += ':eq(' + domSiblings.indexOf(node) + ')';
    }
    path = name_1 + (path ? '>' + path : '');
    node = parent_1;
  }
  return path;
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
function isObjTooDeep(obj, limit) {
  var e_1, _a;
  if (limit === 0) {
    return true;
  }
  var keys = Object.keys(obj);
  try {
    for (var keys_1 = (0, _tslibEs.__values)(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
      var key = keys_1_1.value;
      if (isObject(obj[key]) && isObjTooDeep(obj[key], limit - 1)) {
        return true;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return false;
}
function stringify(obj, stringifyOptions) {
  var options = {
    numOfKeysLimit: 50,
    depthOfLimit: 4
  };
  Object.assign(options, stringifyOptions);
  var stack = [];
  var keys = [];
  return JSON.stringify(obj, function (key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (~stack.indexOf(value)) {
        if (stack[0] === value) {
          value = '[Circular ~]';
        } else {
          value = '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
        }
      }
    } else {
      stack.push(value);
    }
    if (value === null || value === undefined) {
      return value;
    }
    if (shouldIgnore(value)) {
      return toString(value);
    }
    if (value instanceof Event) {
      var eventResult = {};
      for (var eventKey in value) {
        var eventValue = value[eventKey];
        if (Array.isArray(eventValue)) {
          eventResult[eventKey] = pathToSelector(eventValue.length ? eventValue[0] : null);
        } else {
          eventResult[eventKey] = eventValue;
        }
      }
      return eventResult;
    } else if (value instanceof Node) {
      if (value instanceof HTMLElement) {
        return value ? value.outerHTML : '';
      }
      return value.nodeName;
    } else if (value instanceof Error) {
      return value.stack ? value.stack + '\nEnd of stack for Error object' : value.name + ': ' + value.message;
    }
    return value;
  });
  function shouldIgnore(_obj) {
    if (isObject(_obj) && Object.keys(_obj).length > options.numOfKeysLimit) {
      return true;
    }
    if (typeof _obj === 'function') {
      return true;
    }
    if (isObject(_obj) && isObjTooDeep(_obj, options.depthOfLimit)) {
      return true;
    }
    return false;
  }
  function toString(_obj) {
    var str = _obj.toString();
    if (options.stringLengthLimit && str.length > options.stringLengthLimit) {
      str = "".concat(str.slice(0, options.stringLengthLimit), "...");
    }
    return str;
  }
}
},{"../../../../ext/tslib/tslib.es6.js":"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js"}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRecordConsolePlugin = exports.PLUGIN_NAME = void 0;
var _tslibEs = require("../../../../ext/tslib/tslib.es6.js");
var _utils = require("../../../utils.js");
var _errorStackParser = require("./error-stack-parser.js");
var _stringify = require("./stringify.js");
var defaultLogOptions = {
  level: ['assert', 'clear', 'count', 'countReset', 'debug', 'dir', 'dirxml', 'error', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'table', 'time', 'timeEnd', 'timeLog', 'trace', 'warn'],
  lengthThreshold: 1000,
  logger: 'console'
};
function initLogObserver(cb, win, logOptions) {
  var e_1, _a;
  var loggerType = logOptions.logger;
  if (!loggerType) {
    return function () {};
  }
  var logger;
  if (typeof loggerType === 'string') {
    logger = win[loggerType];
  } else {
    logger = loggerType;
  }
  var logCount = 0;
  var cancelHandlers = [];
  if (logOptions.level.includes('error')) {
    if (window) {
      var errorHandler_1 = function (event) {
        var message = event.message,
          error = event.error;
        var trace = _errorStackParser.ErrorStackParser.parse(error).map(function (stackFrame) {
          return stackFrame.toString();
        });
        var payload = [(0, _stringify.stringify)(message, logOptions.stringifyOptions)];
        cb({
          level: 'error',
          trace: trace,
          payload: payload
        });
      };
      window.addEventListener('error', errorHandler_1);
      cancelHandlers.push(function () {
        if (window) window.removeEventListener('error', errorHandler_1);
      });
    }
  }
  try {
    for (var _b = (0, _tslibEs.__values)(logOptions.level), _c = _b.next(); !_c.done; _c = _b.next()) {
      var levelType = _c.value;
      cancelHandlers.push(replace(logger, levelType));
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return function () {
    cancelHandlers.forEach(function (h) {
      return h();
    });
  };
  function replace(_logger, level) {
    var _this = this;
    if (!_logger[level]) {
      return function () {};
    }
    return (0, _utils.patch)(_logger, level, function (original) {
      return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        original.apply(_this, args);
        try {
          var trace = _errorStackParser.ErrorStackParser.parse(new Error()).map(function (stackFrame) {
            return stackFrame.toString();
          }).splice(1);
          var payload = args.map(function (s) {
            return (0, _stringify.stringify)(s, logOptions.stringifyOptions);
          });
          logCount++;
          if (logCount < logOptions.lengthThreshold) {
            cb({
              level: level,
              trace: trace,
              payload: payload
            });
          } else if (logCount === logOptions.lengthThreshold) {
            cb({
              level: 'warn',
              trace: [],
              payload: [(0, _stringify.stringify)('The number of log records reached the threshold.')]
            });
          }
        } catch (error) {
          original.apply(void 0, (0, _tslibEs.__spreadArray)(['rrweb logger error:', error], (0, _tslibEs.__read)(args), false));
        }
      };
    });
  }
}
var PLUGIN_NAME = exports.PLUGIN_NAME = 'rrweb/console@1';
var getRecordConsolePlugin = function (options) {
  return {
    name: PLUGIN_NAME,
    observer: initLogObserver,
    options: options ? Object.assign({}, defaultLogOptions, options) : defaultLogOptions
  };
};
exports.getRecordConsolePlugin = getRecordConsolePlugin;
},{"../../../../ext/tslib/tslib.es6.js":"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js","../../../utils.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js","./error-stack-parser.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/error-stack-parser.js","./stringify.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/stringify.js"}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/replay/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReplayConsolePlugin = void 0;
var _tslibEs = require("../../../../ext/tslib/tslib.es6.js");
var _index = require("../record/index.js");
var _types = require("../../../types.js");
var ORIGINAL_ATTRIBUTE_NAME = '__rrweb_original__';
var defaultLogConfig = {
  level: ['assert', 'clear', 'count', 'countReset', 'debug', 'dir', 'dirxml', 'error', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'table', 'time', 'timeEnd', 'timeLog', 'trace', 'warn'],
  replayLogger: undefined
};
var LogReplayPlugin = function () {
  function LogReplayPlugin(config) {
    this.config = Object.assign(defaultLogConfig, config);
  }
  LogReplayPlugin.prototype.getConsoleLogger = function () {
    var e_1, _a;
    var _this = this;
    var replayLogger = {};
    var _loop_1 = function (level) {
      if (level === 'trace') {
        replayLogger[level] = function (data) {
          var logger = console.log[ORIGINAL_ATTRIBUTE_NAME] ? console.log[ORIGINAL_ATTRIBUTE_NAME] : console.log;
          logger.apply(void 0, (0, _tslibEs.__spreadArray)((0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(data.payload.map(function (s) {
            return JSON.parse(s);
          })), false), [_this.formatMessage(data)], false));
        };
      } else {
        replayLogger[level] = function (data) {
          var logger = console[level][ORIGINAL_ATTRIBUTE_NAME] ? console[level][ORIGINAL_ATTRIBUTE_NAME] : console[level];
          logger.apply(void 0, (0, _tslibEs.__spreadArray)((0, _tslibEs.__spreadArray)([], (0, _tslibEs.__read)(data.payload.map(function (s) {
            return JSON.parse(s);
          })), false), [_this.formatMessage(data)], false));
        };
      }
    };
    try {
      for (var _b = (0, _tslibEs.__values)(this.config.level), _c = _b.next(); !_c.done; _c = _b.next()) {
        var level = _c.value;
        _loop_1(level);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    return replayLogger;
  };
  LogReplayPlugin.prototype.formatMessage = function (data) {
    if (data.trace.length === 0) {
      return '';
    }
    var stackPrefix = '\n\tat ';
    var result = stackPrefix;
    result += data.trace.join(stackPrefix);
    return result;
  };
  return LogReplayPlugin;
}();
var getReplayConsolePlugin = function (options) {
  var replayLogger = (options === null || options === void 0 ? void 0 : options.replayLogger) || new LogReplayPlugin(options).getConsoleLogger();
  return {
    handler: function (event, _isSync, context) {
      var logData = null;
      if (event.type === _types.EventType.IncrementalSnapshot && event.data.source === _types.IncrementalSource.Log) {
        logData = event.data;
      } else if (event.type === _types.EventType.Plugin && event.data.plugin === _index.PLUGIN_NAME) {
        logData = event.data.payload;
      }
      if (logData) {
        try {
          if (typeof replayLogger[logData.level] === 'function') {
            replayLogger[logData.level](logData);
          }
        } catch (error) {
          if (context.replayer.config.showWarning) {
            console.warn(error);
          }
        }
      }
    }
  };
};
exports.getReplayConsolePlugin = getReplayConsolePlugin;
},{"../../../../ext/tslib/tslib.es6.js":"node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js","../record/index.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/index.js","../../../types.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js"}],"node_modules/rrweb/es/rrweb/packages/rrweb/src/entries/all.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "EventType", {
  enumerable: true,
  get: function () {
    return _types.EventType;
  }
});
Object.defineProperty(exports, "IncrementalSource", {
  enumerable: true,
  get: function () {
    return _types.IncrementalSource;
  }
});
Object.defineProperty(exports, "MouseInteractions", {
  enumerable: true,
  get: function () {
    return _types.MouseInteractions;
  }
});
Object.defineProperty(exports, "PLUGIN_NAME", {
  enumerable: true,
  get: function () {
    return _index2.PLUGIN_NAME;
  }
});
Object.defineProperty(exports, "Replayer", {
  enumerable: true,
  get: function () {
    return _index5.Replayer;
  }
});
Object.defineProperty(exports, "ReplayerEvents", {
  enumerable: true,
  get: function () {
    return _types.ReplayerEvents;
  }
});
Object.defineProperty(exports, "addCustomEvent", {
  enumerable: true,
  get: function () {
    return _index.addCustomEvent;
  }
});
Object.defineProperty(exports, "freezePage", {
  enumerable: true,
  get: function () {
    return _index.freezePage;
  }
});
Object.defineProperty(exports, "getRecordConsolePlugin", {
  enumerable: true,
  get: function () {
    return _index2.getRecordConsolePlugin;
  }
});
Object.defineProperty(exports, "getReplayConsolePlugin", {
  enumerable: true,
  get: function () {
    return _index3.getReplayConsolePlugin;
  }
});
Object.defineProperty(exports, "mirror", {
  enumerable: true,
  get: function () {
    return utils._mirror;
  }
});
Object.defineProperty(exports, "pack", {
  enumerable: true,
  get: function () {
    return _pack.pack;
  }
});
Object.defineProperty(exports, "record", {
  enumerable: true,
  get: function () {
    return _index4.default;
  }
});
Object.defineProperty(exports, "unpack", {
  enumerable: true,
  get: function () {
    return _unpack.unpack;
  }
});
exports.utils = void 0;
var _index = require("../index.js");
var _pack = require("../packer/pack.js");
var _unpack = require("../packer/unpack.js");
var _index2 = require("../plugins/console/record/index.js");
var _index3 = require("../plugins/console/replay/index.js");
var _index4 = _interopRequireDefault(require("../record/index.js"));
var _types = require("../types.js");
var _index5 = require("../replay/index.js");
var utils = _interopRequireWildcard(require("../utils.js"));
exports.utils = utils;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"../index.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/index.js","../packer/pack.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/pack.js","../packer/unpack.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/unpack.js","../plugins/console/record/index.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/index.js","../plugins/console/replay/index.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/replay/index.js","../record/index.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/record/index.js","../types.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js","../replay/index.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/index.js","../utils.js":"node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js"}],"node_modules/localforage/dist/localforage.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.localforage = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
'use strict';
var immediate = _dereq_(1);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
'use strict';
if (typeof global.Promise !== 'function') {
  global.Promise = _dereq_(2);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"2":2}],4:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getIDB() {
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
    } catch (e) {
        return;
    }
}

var idb = getIDB();

function isIndexedDBValid() {
    try {
        // Initialize IndexedDB; fall back to vendor-prefixed versions
        // if needed.
        if (!idb || !idb.open) {
            return false;
        }
        // We mimic PouchDB here;
        //
        // We test for openDatabase because IE Mobile identifies itself
        // as Safari. Oh the lulz...
        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

        // Safari <10.1 does not meet our requirements for IDB support
        // (see: https://github.com/pouchdb/pouchdb/issues/5572).
        // Safari 10.1 shipped with fetch, we can use that to detect it.
        // Note: this creates issues with `window.fetch` polyfills and
        // overrides; see:
        // https://github.com/localForage/localForage/issues/856
        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
        // some outdated implementations of IDB that appear on Samsung
        // and HTC Android devices <4.4 are missing IDBKeyRange
        // See: https://github.com/mozilla/localForage/issues/128
        // See: https://github.com/mozilla/localForage/issues/272
        typeof IDBKeyRange !== 'undefined';
    } catch (e) {
        return false;
    }
}

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
function createBlob(parts, properties) {
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
    parts = parts || [];
    properties = properties || {};
    try {
        return new Blob(parts, properties);
    } catch (e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();
        for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
        }
        return builder.getBlob(properties.type);
    }
}

// This is CommonJS because lie is an external dependency, so Rollup
// can just ignore it.
if (typeof Promise === 'undefined') {
    // In the "nopromises" build this will just throw if you don't have
    // a global promise object, but it would throw anyway later.
    _dereq_(3);
}
var Promise$1 = Promise;

function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
}

function executeTwoCallbacks(promise, callback, errorCallback) {
    if (typeof callback === 'function') {
        promise.then(callback);
    }

    if (typeof errorCallback === 'function') {
        promise["catch"](errorCallback);
    }
}

function normalizeKey(key) {
    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    return key;
}

function getCallback() {
    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        return arguments[arguments.length - 1];
    }
}

// Some code originally from async_storage.js in
// [Gaia](https://github.com/mozilla-b2g/gaia).

var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
var supportsBlobs = void 0;
var dbContexts = {};
var toString = Object.prototype.toString;

// Transaction Modes
var READ_ONLY = 'readonly';
var READ_WRITE = 'readwrite';

// Transform a binary string to an array buffer, because otherwise
// weird stuff happens when you try to work with the binary string directly.
// It is known.
// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function _binStringToArrayBuffer(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

//
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//
// Code borrowed from PouchDB. See:
// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
//
function _checkBlobSupportWithoutCaching(idb) {
    return new Promise$1(function (resolve) {
        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
        var blob = createBlob(['']);
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

        txn.onabort = function (e) {
            // If the transaction aborts now its due to not being able to
            // write to the database, likely due to the disk being full
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
        };

        txn.oncomplete = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            // MS Edge pretends to be Chrome 42:
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
        };
    })["catch"](function () {
        return false; // error, so assume unsupported
    });
}

function _checkBlobSupport(idb) {
    if (typeof supportsBlobs === 'boolean') {
        return Promise$1.resolve(supportsBlobs);
    }
    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
        supportsBlobs = value;
        return supportsBlobs;
    });
}

function _deferReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Create a deferred object representing the current database operation.
    var deferredOperation = {};

    deferredOperation.promise = new Promise$1(function (resolve, reject) {
        deferredOperation.resolve = resolve;
        deferredOperation.reject = reject;
    });

    // Enqueue the deferred operation.
    dbContext.deferredOperations.push(deferredOperation);

    // Chain its promise to the database readiness.
    if (!dbContext.dbReady) {
        dbContext.dbReady = deferredOperation.promise;
    } else {
        dbContext.dbReady = dbContext.dbReady.then(function () {
            return deferredOperation.promise;
        });
    }
}

function _advanceReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Resolve its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.resolve();
        return deferredOperation.promise;
    }
}

function _rejectReadiness(dbInfo, err) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Reject its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.reject(err);
        return deferredOperation.promise;
    }
}

function _getConnection(dbInfo, upgradeNeeded) {
    return new Promise$1(function (resolve, reject) {
        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

        if (dbInfo.db) {
            if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
            } else {
                return resolve(dbInfo.db);
            }
        }

        var dbArgs = [dbInfo.name];

        if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
        }

        var openreq = idb.open.apply(idb, dbArgs);

        if (upgradeNeeded) {
            openreq.onupgradeneeded = function (e) {
                var db = openreq.result;
                try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                } catch (ex) {
                    if (ex.name === 'ConstraintError') {
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                        throw ex;
                    }
                }
            };
        }

        openreq.onerror = function (e) {
            e.preventDefault();
            reject(openreq.error);
        };

        openreq.onsuccess = function () {
            var db = openreq.result;
            db.onversionchange = function (e) {
                // Triggered when the database is modified (e.g. adding an objectStore) or
                // deleted (even when initiated by other sessions in different tabs).
                // Closing the connection here prevents those operations from being blocked.
                // If the database is accessed again later by this instance, the connection
                // will be reopened or the database recreated as needed.
                e.target.close();
            };
            resolve(db);
            _advanceReadiness(dbInfo);
        };
    });
}

function _getOriginalConnection(dbInfo) {
    return _getConnection(dbInfo, false);
}

function _getUpgradedConnection(dbInfo) {
    return _getConnection(dbInfo, true);
}

function _isUpgradeNeeded(dbInfo, defaultVersion) {
    if (!dbInfo.db) {
        return true;
    }

    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
    var isDowngrade = dbInfo.version < dbInfo.db.version;
    var isUpgrade = dbInfo.version > dbInfo.db.version;

    if (isDowngrade) {
        // If the version is not the default one
        // then warn for impossible downgrade.
        if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
        }
        // Align the versions to prevent errors.
        dbInfo.version = dbInfo.db.version;
    }

    if (isUpgrade || isNewStore) {
        // If the store is new then increment the version (if needed).
        // This will trigger an "upgradeneeded" event which is required
        // for creating a store.
        if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
            }
        }

        return true;
    }

    return false;
}

// encode a blob for indexeddb engines that don't support blobs
function _encodeBlob(blob) {
    return new Promise$1(function (resolve, reject) {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = function (e) {
            var base64 = btoa(e.target.result || '');
            resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
            });
        };
        reader.readAsBinaryString(blob);
    });
}

// decode an encoded blob
function _decodeBlob(encodedBlob) {
    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
    return createBlob([arrayBuff], { type: encodedBlob.type });
}

// is this one of our fancy encoded blobs?
function _isEncodedBlob(value) {
    return value && value.__local_forage_encoded_blob;
}

// Specialize the default `ready()` function by making it dependent
// on the current database operations. Thus, the driver will be actually
// ready when it's been initialized (default) *and* there are no pending
// operations on the database (initiated by some other instances).
function _fullyReady(callback) {
    var self = this;

    var promise = self._initReady().then(function () {
        var dbContext = dbContexts[self._dbInfo.name];

        if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
        }
    });

    executeTwoCallbacks(promise, callback, callback);
    return promise;
}

// Try to establish a new db connection to replace the
// current one which is broken (i.e. experiencing
// InvalidStateError while creating a transaction).
function _tryReconnect(dbInfo) {
    _deferReadiness(dbInfo);

    var dbContext = dbContexts[dbInfo.name];
    var forages = dbContext.forages;

    for (var i = 0; i < forages.length; i++) {
        var forage = forages[i];
        if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
        }
    }
    dbInfo.db = null;

    return _getOriginalConnection(dbInfo).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        // store the latest db reference
        // in case the db was upgraded
        dbInfo.db = dbContext.db = db;
        for (var i = 0; i < forages.length; i++) {
            forages[i]._dbInfo.db = db;
        }
    })["catch"](function (err) {
        _rejectReadiness(dbInfo, err);
        throw err;
    });
}

// FF doesn't like Promises (micro-tasks) and IDDB store operations,
// so we have to do it with callbacks
function createTransaction(dbInfo, mode, callback, retries) {
    if (retries === undefined) {
        retries = 1;
    }

    try {
        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
        callback(null, tx);
    } catch (err) {
        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
            return Promise$1.resolve().then(function () {
                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                    // increase the db version, to create the new ObjectStore
                    if (dbInfo.db) {
                        dbInfo.version = dbInfo.db.version + 1;
                    }
                    // Reopen the database for upgrading.
                    return _getUpgradedConnection(dbInfo);
                }
            }).then(function () {
                return _tryReconnect(dbInfo).then(function () {
                    createTransaction(dbInfo, mode, callback, retries - 1);
                });
            })["catch"](callback);
        }

        callback(err);
    }
}

function createDbContext() {
    return {
        // Running localForages sharing a database.
        forages: [],
        // Shared database.
        db: null,
        // Database readiness (promise).
        dbReady: null,
        // Deferred operations on the database.
        deferredOperations: []
    };
}

// Open the IndexedDB database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    // Get the current context of the database;
    var dbContext = dbContexts[dbInfo.name];

    // ...or create a new context.
    if (!dbContext) {
        dbContext = createDbContext();
        // Register the new context in the global container.
        dbContexts[dbInfo.name] = dbContext;
    }

    // Register itself as a running localForage in the current context.
    dbContext.forages.push(self);

    // Replace the default `ready()` function with the specialized one.
    if (!self._initReady) {
        self._initReady = self.ready;
        self.ready = _fullyReady;
    }

    // Create an array of initialization states of the related localForages.
    var initPromises = [];

    function ignoreErrors() {
        // Don't handle errors here,
        // just makes sure related localForages aren't pending.
        return Promise$1.resolve();
    }

    for (var j = 0; j < dbContext.forages.length; j++) {
        var forage = dbContext.forages[j];
        if (forage !== self) {
            // Don't wait for itself...
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
        }
    }

    // Take a snapshot of the related localForages.
    var forages = dbContext.forages.slice(0);

    // Initialize the connection process only when
    // all the related localForages aren't pending.
    return Promise$1.all(initPromises).then(function () {
        dbInfo.db = dbContext.db;
        // Get the connection or open a new one without upgrade.
        return _getOriginalConnection(dbInfo);
    }).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        dbInfo.db = dbContext.db = db;
        self._dbInfo = dbInfo;
        // Share the final connection amongst related localForages.
        for (var k = 0; k < forages.length; k++) {
            var forage = forages[k];
            if (forage !== self) {
                // Self is already up-to-date.
                forage._dbInfo.db = dbInfo.db;
                forage._dbInfo.version = dbInfo.version;
            }
        }
    });
}

function getItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.get(key);

                    req.onsuccess = function () {
                        var value = req.result;
                        if (value === undefined) {
                            value = null;
                        }
                        if (_isEncodedBlob(value)) {
                            value = _decodeBlob(value);
                        }
                        resolve(value);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items stored in database.
function iterate(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var iterationNumber = 1;

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (cursor) {
                            var value = cursor.value;
                            if (_isEncodedBlob(value)) {
                                value = _decodeBlob(value);
                            }
                            var result = iterator(value, cursor.key, iterationNumber++);

                            // when the iterator callback returns any
                            // (non-`undefined`) value, then we stop
                            // the iteration immediately
                            if (result !== void 0) {
                                resolve(result);
                            } else {
                                cursor["continue"]();
                            }
                        } else {
                            resolve();
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);

    return promise;
}

function setItem(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        var dbInfo;
        self.ready().then(function () {
            dbInfo = self._dbInfo;
            if (toString.call(value) === '[object Blob]') {
                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                    if (blobSupport) {
                        return value;
                    }
                    return _encodeBlob(value);
                });
            }
            return value;
        }).then(function (value) {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);

                    // The reason we don't _save_ null is because IE 10 does
                    // not support saving the `null` type in IndexedDB. How
                    // ironic, given the bug below!
                    // See: https://github.com/mozilla/localForage/issues/161
                    if (value === null) {
                        value = undefined;
                    }

                    var req = store.put(value, key);

                    transaction.oncomplete = function () {
                        // Cast to undefined so the value passed to
                        // callback/promise is the same as what one would get out
                        // of `getItem()` later. This leads to some weirdness
                        // (setItem('foo', undefined) will return `null`), but
                        // it's not my fault localStorage is our baseline and that
                        // it's weird.
                        if (value === undefined) {
                            value = null;
                        }

                        resolve(value);
                    };
                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function removeItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    // We use a Grunt task to make this safe for IE and some
                    // versions of Android (including those used by Cordova).
                    // Normally IE won't like `.delete()` and will insist on
                    // using `['delete']()`, but we have a build step that
                    // fixes this for us now.
                    var req = store["delete"](key);
                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onerror = function () {
                        reject(req.error);
                    };

                    // The request will be also be aborted if we've exceeded our storage
                    // space.
                    transaction.onabort = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function clear(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.clear();

                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function length(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.count();

                    req.onsuccess = function () {
                        resolve(req.result);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function key(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        if (n < 0) {
            resolve(null);

            return;
        }

        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var advanced = false;
                    var req = store.openKeyCursor();

                    req.onsuccess = function () {
                        var cursor = req.result;
                        if (!cursor) {
                            // this means there weren't enough keys
                            resolve(null);

                            return;
                        }

                        if (n === 0) {
                            // We have the first key, return it if that's what they
                            // wanted.
                            resolve(cursor.key);
                        } else {
                            if (!advanced) {
                                // Otherwise, ask the cursor to skip ahead n
                                // records.
                                advanced = true;
                                cursor.advance(n);
                            } else {
                                // When we get here, we've got the nth key.
                                resolve(cursor.key);
                            }
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openKeyCursor();
                    var keys = [];

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (!cursor) {
                            resolve(keys);
                            return;
                        }

                        keys.push(cursor.key);
                        cursor["continue"]();
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
                forages[i]._dbInfo.db = db;
            }
            return db;
        });

        if (!options.storeName) {
            promise = dbPromise.then(function (db) {
                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                }

                var dropDBPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.deleteDatabase(options.name);

                    req.onerror = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        reject(req.error);
                    };

                    req.onblocked = function () {
                        // Closing all open connections in onversionchange handler should prevent this situation, but if
                        // we do get here, it just means the request remains pending - eventually it will succeed or error
                        console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        resolve(db);
                    };
                });

                return dropDBPromise.then(function (db) {
                    dbContext.db = db;
                    for (var i = 0; i < forages.length; i++) {
                        var _forage = forages[i];
                        _advanceReadiness(_forage._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        } else {
            promise = dbPromise.then(function (db) {
                if (!db.objectStoreNames.contains(options.storeName)) {
                    return;
                }

                var newVersion = db.version + 1;

                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                    forage._dbInfo.version = newVersion;
                }

                var dropObjectPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.open(options.name, newVersion);

                    req.onerror = function (err) {
                        var db = req.result;
                        db.close();
                        reject(err);
                    };

                    req.onupgradeneeded = function () {
                        var db = req.result;
                        db.deleteObjectStore(options.storeName);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        db.close();
                        resolve(db);
                    };
                });

                return dropObjectPromise.then(function (db) {
                    dbContext.db = db;
                    for (var j = 0; j < forages.length; j++) {
                        var _forage2 = forages[j];
                        _forage2._dbInfo.db = db;
                        _advanceReadiness(_forage2._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        }
    }

    executeCallback(promise, callback);
    return promise;
}

var asyncStorage = {
    _driver: 'asyncStorage',
    _initStorage: _initStorage,
    _support: isIndexedDBValid(),
    iterate: iterate,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear,
    length: length,
    key: key,
    keys: keys,
    dropInstance: dropInstance
};

function isWebSQLValid() {
    return typeof openDatabase === 'function';
}

// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
// it to Base64, so this is how we store it to prevent very strange errors with less
// verbose ways of binary <-> string data storage.
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

var BLOB_TYPE_PREFIX = '~~local_forage_type~';
var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

var SERIALIZED_MARKER = '__lfsc__:';
var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

// OMG the serializations!
var TYPE_ARRAYBUFFER = 'arbf';
var TYPE_BLOB = 'blob';
var TYPE_INT8ARRAY = 'si08';
var TYPE_UINT8ARRAY = 'ui08';
var TYPE_UINT8CLAMPEDARRAY = 'uic8';
var TYPE_INT16ARRAY = 'si16';
var TYPE_INT32ARRAY = 'si32';
var TYPE_UINT16ARRAY = 'ur16';
var TYPE_UINT32ARRAY = 'ui32';
var TYPE_FLOAT32ARRAY = 'fl32';
var TYPE_FLOAT64ARRAY = 'fl64';
var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

var toString$1 = Object.prototype.toString;

function stringToBuffer(serializedString) {
    // Fill the string into a ArrayBuffer.
    var bufferLength = serializedString.length * 0.75;
    var len = serializedString.length;
    var i;
    var p = 0;
    var encoded1, encoded2, encoded3, encoded4;

    if (serializedString[serializedString.length - 1] === '=') {
        bufferLength--;
        if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = new ArrayBuffer(bufferLength);
    var bytes = new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

        /*jslint bitwise: true */
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
}

// Converts a buffer to a string to store, serialized, in the backend
// storage library.
function bufferToString(buffer) {
    // base64-arraybuffer
    var bytes = new Uint8Array(buffer);
    var base64String = '';
    var i;

    for (i = 0; i < bytes.length; i += 3) {
        /*jslint bitwise: true */
        base64String += BASE_CHARS[bytes[i] >> 2];
        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64String += BASE_CHARS[bytes[i + 2] & 63];
    }

    if (bytes.length % 3 === 2) {
        base64String = base64String.substring(0, base64String.length - 1) + '=';
    } else if (bytes.length % 3 === 1) {
        base64String = base64String.substring(0, base64String.length - 2) + '==';
    }

    return base64String;
}

// Serialize a value, afterwards executing a callback (which usually
// instructs the `setItem()` callback/promise to be executed). This is how
// we store binary data with localStorage.
function serialize(value, callback) {
    var valueType = '';
    if (value) {
        valueType = toString$1.call(value);
    }

    // Cannot use `value instanceof ArrayBuffer` or such here, as these
    // checks fail when running the tests using casper.js...
    //
    // TODO: See why those tests fail and use a better solution.
    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
        // Convert binary arrays to a string and prefix the string with
        // a special marker.
        var buffer;
        var marker = SERIALIZED_MARKER;

        if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
        } else {
            buffer = value.buffer;

            if (valueType === '[object Int8Array]') {
                marker += TYPE_INT8ARRAY;
            } else if (valueType === '[object Uint8Array]') {
                marker += TYPE_UINT8ARRAY;
            } else if (valueType === '[object Uint8ClampedArray]') {
                marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === '[object Int16Array]') {
                marker += TYPE_INT16ARRAY;
            } else if (valueType === '[object Uint16Array]') {
                marker += TYPE_UINT16ARRAY;
            } else if (valueType === '[object Int32Array]') {
                marker += TYPE_INT32ARRAY;
            } else if (valueType === '[object Uint32Array]') {
                marker += TYPE_UINT32ARRAY;
            } else if (valueType === '[object Float32Array]') {
                marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === '[object Float64Array]') {
                marker += TYPE_FLOAT64ARRAY;
            } else {
                callback(new Error('Failed to get type for BinaryArray'));
            }
        }

        callback(marker + bufferToString(buffer));
    } else if (valueType === '[object Blob]') {
        // Conver the blob to a binaryArray and then to a string.
        var fileReader = new FileReader();

        fileReader.onload = function () {
            // Backwards-compatible prefix for the blob type.
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
        };

        fileReader.readAsArrayBuffer(value);
    } else {
        try {
            callback(JSON.stringify(value));
        } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);

            callback(null, e);
        }
    }
}

// Deserialize data we've inserted into a value column/field. We place
// special markers into our strings to mark them as encoded; this isn't
// as nice as a meta field, but it's the only sane thing we can do whilst
// keeping localStorage support intact.
//
// Oftentimes this will just deserialize JSON content, but if we have a
// special marker (SERIALIZED_MARKER, defined above), we will extract
// some kind of arraybuffer/binary data/typed array out of the string.
function deserialize(value) {
    // If we haven't marked this string as being specially serialized (i.e.
    // something other than serialized JSON), we can just return it and be
    // done with it.
    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
        return JSON.parse(value);
    }

    // The following code deals with deserializing some kind of Blob or
    // TypedArray. First we separate out the type of data we're dealing
    // with from the data itself.
    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

    var blobType;
    // Backwards-compatible blob type serialization strategy.
    // DBs created with older versions of localForage will simply not have the blob type.
    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
        blobType = matcher[1];
        serializedString = serializedString.substring(matcher[0].length);
    }
    var buffer = stringToBuffer(serializedString);

    // Return the right type based on the code/type set during
    // serialization.
    switch (type) {
        case TYPE_ARRAYBUFFER:
            return buffer;
        case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
        case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
        case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
        case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
        case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
        case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
        case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
        case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
        case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
        case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
        default:
            throw new Error('Unkown type: ' + type);
    }
}

var localforageSerializer = {
    serialize: serialize,
    deserialize: deserialize,
    stringToBuffer: stringToBuffer,
    bufferToString: bufferToString
};

/*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

function createDbTable(t, dbInfo, callback, errorCallback) {
    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
}

// Open the WebSQL database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage$1(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
        }
    }

    var dbInfoPromise = new Promise$1(function (resolve, reject) {
        // Open the database; the openDatabase API will automatically
        // create it for us if it doesn't exist.
        try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
        } catch (e) {
            return reject(e);
        }

        // Create our key/value table if it doesn't exist.
        dbInfo.db.transaction(function (t) {
            createDbTable(t, dbInfo, function () {
                self._dbInfo = dbInfo;
                resolve();
            }, function (t, error) {
                reject(error);
            });
        }, reject);
    });

    dbInfo.serializer = localforageSerializer;
    return dbInfoPromise;
}

function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
    t.executeSql(sqlStatement, args, callback, function (t, error) {
        if (error.code === error.SYNTAX_ERR) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
                if (!results.rows.length) {
                    // if the table is missing (was deleted)
                    // re-create it table and retry
                    createDbTable(t, dbInfo, function () {
                        t.executeSql(sqlStatement, args, callback, errorCallback);
                    }, errorCallback);
                } else {
                    errorCallback(t, error);
                }
            }, errorCallback);
        } else {
            errorCallback(t, error);
        }
    }, errorCallback);
}

function getItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;

                    // Check to see if this is serialized content we need to
                    // unpack.
                    if (result) {
                        result = dbInfo.serializer.deserialize(result);
                    }

                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function iterate$1(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;

            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                    var rows = results.rows;
                    var length = rows.length;

                    for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value;

                        // Check to see if this is serialized content
                        // we need to unpack.
                        if (result) {
                            result = dbInfo.serializer.deserialize(result);
                        }

                        result = iterator(result, item.key, i + 1);

                        // void(0) prevents problems with redefinition
                        // of `undefined`.
                        if (result !== void 0) {
                            resolve(result);
                            return;
                        }
                    }

                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function _setItem(key, value, callback, retriesLeft) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            // The localStorage API doesn't return undefined values in an
            // "expected" way, so undefined is always cast to null in all
            // drivers. See: https://github.com/mozilla/localForage/pull/42
            if (value === undefined) {
                value = null;
            }

            // Save the original value to pass to the callback.
            var originalValue = value;

            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    dbInfo.db.transaction(function (t) {
                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                            resolve(originalValue);
                        }, function (t, error) {
                            reject(error);
                        });
                    }, function (sqlError) {
                        // The transaction failed; check
                        // to see if it's a quota error.
                        if (sqlError.code === sqlError.QUOTA_ERR) {
                            // We reject the callback outright for now, but
                            // it's worth trying to re-run the transaction.
                            // Even if the user accepts the prompt to use
                            // more storage on Safari, this error will
                            // be called.
                            //
                            // Try to re-run the transaction.
                            if (retriesLeft > 0) {
                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                return;
                            }
                            reject(sqlError);
                        }
                    });
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function setItem$1(key, value, callback) {
    return _setItem.apply(this, [key, value, callback, 1]);
}

function removeItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Deletes every item in the table.
// TODO: Find out if this resets the AUTO_INCREMENT number.
function clear$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Does a simple `COUNT(key)` to get the number of items stored in
// localForage.
function length$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                // Ahhh, SQL makes this one soooooo easy.
                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                    var result = results.rows.item(0).c;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Return the key located at key index X; essentially gets the key from a
// `WHERE id = ?`. This is the most efficient way I can think to implement
// this rarely-used (in my experience) part of the API, but it can seem
// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
// the ID of each key will change every time it's updated. Perhaps a stored
// procedure for the `setItem()` SQL would solve this problem?
// TODO: Don't change ID on `setItem()`.
function key$1(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                    var keys = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                    }

                    resolve(keys);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// https://www.w3.org/TR/webdatabase/#databases
// > There is no way to enumerate or delete the databases available for an origin from this API.
function getAllStoreNames(db) {
    return new Promise$1(function (resolve, reject) {
        db.transaction(function (t) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
                var storeNames = [];

                for (var i = 0; i < results.rows.length; i++) {
                    storeNames.push(results.rows.item(i).name);
                }

                resolve({
                    db: db,
                    storeNames: storeNames
                });
            }, function (t, error) {
                reject(error);
            });
        }, function (sqlError) {
            reject(sqlError);
        });
    });
}

function dropInstance$1(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            var db;
            if (options.name === currentConfig.name) {
                // use the db reference of the current instance
                db = self._dbInfo.db;
            } else {
                db = openDatabase(options.name, '', '', 0);
            }

            if (!options.storeName) {
                // drop all database tables
                resolve(getAllStoreNames(db));
            } else {
                resolve({
                    db: db,
                    storeNames: [options.storeName]
                });
            }
        }).then(function (operationInfo) {
            return new Promise$1(function (resolve, reject) {
                operationInfo.db.transaction(function (t) {
                    function dropTable(storeName) {
                        return new Promise$1(function (resolve, reject) {
                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                                resolve();
                            }, function (t, error) {
                                reject(error);
                            });
                        });
                    }

                    var operations = [];
                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                        operations.push(dropTable(operationInfo.storeNames[i]));
                    }

                    Promise$1.all(operations).then(function () {
                        resolve();
                    })["catch"](function (e) {
                        reject(e);
                    });
                }, function (sqlError) {
                    reject(sqlError);
                });
            });
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var webSQLStorage = {
    _driver: 'webSQLStorage',
    _initStorage: _initStorage$1,
    _support: isWebSQLValid(),
    iterate: iterate$1,
    getItem: getItem$1,
    setItem: setItem$1,
    removeItem: removeItem$1,
    clear: clear$1,
    length: length$1,
    key: key$1,
    keys: keys$1,
    dropInstance: dropInstance$1
};

function isLocalStorageValid() {
    try {
        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
        // in IE8 typeof localStorage.setItem === 'object'
        !!localStorage.setItem;
    } catch (e) {
        return false;
    }
}

function _getKeyPrefix(options, defaultConfig) {
    var keyPrefix = options.name + '/';

    if (options.storeName !== defaultConfig.storeName) {
        keyPrefix += options.storeName + '/';
    }
    return keyPrefix;
}

// Check if localStorage throws when saving an item
function checkIfLocalStorageThrows() {
    var localStorageTestKey = '_localforage_support_test';

    try {
        localStorage.setItem(localStorageTestKey, true);
        localStorage.removeItem(localStorageTestKey);

        return false;
    } catch (e) {
        return true;
    }
}

// Check if localStorage is usable and allows to save an item
// This method checks if localStorage is usable in Safari Private Browsing
// mode, or in any other case where the available quota for localStorage
// is 0 and there wasn't any saved items yet.
function _isLocalStorageUsable() {
    return !checkIfLocalStorageThrows() || localStorage.length > 0;
}

// Config the localStorage backend, using options set in the config.
function _initStorage$2(options) {
    var self = this;
    var dbInfo = {};
    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

    if (!_isLocalStorageUsable()) {
        return Promise$1.reject();
    }

    self._dbInfo = dbInfo;
    dbInfo.serializer = localforageSerializer;

    return Promise$1.resolve();
}

// Remove all keys from the datastore, effectively destroying all data in
// the app's key/value store!
function clear$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var keyPrefix = self._dbInfo.keyPrefix;

        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key);
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Retrieve an item from the store. Unlike the original async_storage
// library in Gaia, we don't modify return values at all. If a key's value
// is `undefined`, we pass that value to the callback function.
function getItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result = localStorage.getItem(dbInfo.keyPrefix + key);

        // If a result was found, parse it from the serialized
        // string into a JS object. If result isn't truthy, the key
        // is likely undefined and we'll pass it straight to the
        // callback.
        if (result) {
            result = dbInfo.serializer.deserialize(result);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items in the store.
function iterate$2(iterator, callback) {
    var self = this;

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var keyPrefix = dbInfo.keyPrefix;
        var keyPrefixLength = keyPrefix.length;
        var length = localStorage.length;

        // We use a dedicated iterator instead of the `i` variable below
        // so other keys we fetch in localStorage aren't counted in
        // the `iterationNumber` argument passed to the `iterate()`
        // callback.
        //
        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
        var iterationNumber = 1;

        for (var i = 0; i < length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(keyPrefix) !== 0) {
                continue;
            }
            var value = localStorage.getItem(key);

            // If a result was found, parse it from the serialized
            // string into a JS object. If result isn't truthy, the
            // key is likely undefined and we'll pass it straight
            // to the iterator.
            if (value) {
                value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

            if (value !== void 0) {
                return value;
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Same as localStorage's key() method, except takes a callback.
function key$2(n, callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result;
        try {
            result = localStorage.key(n);
        } catch (error) {
            result = null;
        }

        // Remove the prefix from the key, if a key is found.
        if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var length = localStorage.length;
        var keys = [];

        for (var i = 0; i < length; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
        }

        return keys;
    });

    executeCallback(promise, callback);
    return promise;
}

// Supply the number of keys in the datastore to the callback function.
function length$2(callback) {
    var self = this;
    var promise = self.keys().then(function (keys) {
        return keys.length;
    });

    executeCallback(promise, callback);
    return promise;
}

// Remove an item from the store, nice and simple.
function removeItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        localStorage.removeItem(dbInfo.keyPrefix + key);
    });

    executeCallback(promise, callback);
    return promise;
}

// Set a key's value and run an optional callback once the value is set.
// Unlike Gaia's implementation, the callback function is passed the value,
// in case you want to operate on that value only after you're sure it
// saved, or something like that.
function setItem$2(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        // Convert undefined values to null.
        // https://github.com/mozilla/localForage/pull/42
        if (value === undefined) {
            value = null;
        }

        // Save the original value to pass to the callback.
        var originalValue = value;

        return new Promise$1(function (resolve, reject) {
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                    } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                            reject(e);
                        }
                        reject(e);
                    }
                }
            });
        });
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance$2(options, callback) {
    callback = getCallback.apply(this, arguments);

    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        var currentConfig = this.config();
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            if (!options.storeName) {
                resolve(options.name + '/');
            } else {
                resolve(_getKeyPrefix(options, self._defaultConfig));
            }
        }).then(function (keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                var key = localStorage.key(i);

                if (key.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key);
                }
            }
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var localStorageWrapper = {
    _driver: 'localStorageWrapper',
    _initStorage: _initStorage$2,
    _support: isLocalStorageValid(),
    iterate: iterate$2,
    getItem: getItem$2,
    setItem: setItem$2,
    removeItem: removeItem$2,
    clear: clear$2,
    length: length$2,
    key: key$2,
    keys: keys$2,
    dropInstance: dropInstance$2
};

var sameValue = function sameValue(x, y) {
    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
};

var includes = function includes(array, searchElement) {
    var len = array.length;
    var i = 0;
    while (i < len) {
        if (sameValue(array[i], searchElement)) {
            return true;
        }
        i++;
    }

    return false;
};

var isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};

// Drivers are stored here when `defineDriver()` is called.
// They are shared across all instances of localForage.
var DefinedDrivers = {};

var DriverSupport = {};

var DefaultDrivers = {
    INDEXEDDB: asyncStorage,
    WEBSQL: webSQLStorage,
    LOCALSTORAGE: localStorageWrapper
};

var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

var OptionalDriverMethods = ['dropInstance'];

var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

var DefaultConfig = {
    description: '',
    driver: DefaultDriverOrder.slice(),
    name: 'localforage',
    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
    // we can use without a prompt.
    size: 4980736,
    storeName: 'keyvaluepairs',
    version: 1.0
};

function callWhenReady(localForageInstance, libraryMethod) {
    localForageInstance[libraryMethod] = function () {
        var _args = arguments;
        return localForageInstance.ready().then(function () {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
        });
    };
}

function extend() {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];

        if (arg) {
            for (var _key in arg) {
                if (arg.hasOwnProperty(_key)) {
                    if (isArray(arg[_key])) {
                        arguments[0][_key] = arg[_key].slice();
                    } else {
                        arguments[0][_key] = arg[_key];
                    }
                }
            }
        }
    }

    return arguments[0];
}

var LocalForage = function () {
    function LocalForage(options) {
        _classCallCheck(this, LocalForage);

        for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                var driver = DefaultDrivers[driverTypeKey];
                var driverName = driver._driver;
                this[driverTypeKey] = driverName;

                if (!DefinedDrivers[driverName]) {
                    // we don't need to wait for the promise,
                    // since the default drivers can be defined
                    // in a blocking manner
                    this.defineDriver(driver);
                }
            }
        }

        this._defaultConfig = extend({}, DefaultConfig);
        this._config = extend({}, this._defaultConfig, options);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;

        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver)["catch"](function () {});
    }

    // Set any config values for localForage; can be called anytime before
    // the first API call (e.g. `getItem`, `setItem`).
    // We loop through options so we don't overwrite existing config
    // values.


    LocalForage.prototype.config = function config(options) {
        // If the options argument is an object, we use it to set values.
        // Otherwise, we return either a specified config value or all
        // config values.
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            // If localforage is ready and fully initialized, we can't set
            // any new configuration values. Instead, we return an error.
            if (this._ready) {
                return new Error("Can't call config() after localforage " + 'has been used.');
            }

            for (var i in options) {
                if (i === 'storeName') {
                    options[i] = options[i].replace(/\W/g, '_');
                }

                if (i === 'version' && typeof options[i] !== 'number') {
                    return new Error('Database version must be a number.');
                }

                this._config[i] = options[i];
            }

            // after all config options are set and
            // the driver option is used, try setting it
            if ('driver' in options && options.driver) {
                return this.setDriver(this._config.driver);
            }

            return true;
        } else if (typeof options === 'string') {
            return this._config[options];
        } else {
            return this._config;
        }
    };

    // Used to define a custom driver, shared across all instances of
    // localForage.


    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
        var promise = new Promise$1(function (resolve, reject) {
            try {
                var driverName = driverObject._driver;
                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                // A driver name should be defined and not overlap with the
                // library-defined, default drivers.
                if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                }

                var driverMethods = LibraryMethods.concat('_initStorage');
                for (var i = 0, len = driverMethods.length; i < len; i++) {
                    var driverMethodName = driverMethods[i];

                    // when the property is there,
                    // it should be a method even when optional
                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                        reject(complianceError);
                        return;
                    }
                }

                var configureMissingMethods = function configureMissingMethods() {
                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                        return function () {
                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                            var promise = Promise$1.reject(error);
                            executeCallback(promise, arguments[arguments.length - 1]);
                            return promise;
                        };
                    };

                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                        var optionalDriverMethod = OptionalDriverMethods[_i];
                        if (!driverObject[optionalDriverMethod]) {
                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                        }
                    }
                };

                configureMissingMethods();

                var setDriverSupport = function setDriverSupport(support) {
                    if (DefinedDrivers[driverName]) {
                        console.info('Redefining LocalForage driver: ' + driverName);
                    }
                    DefinedDrivers[driverName] = driverObject;
                    DriverSupport[driverName] = support;
                    // don't use a then, so that we can define
                    // drivers that have simple _support methods
                    // in a blocking manner
                    resolve();
                };

                if ('_support' in driverObject) {
                    if (driverObject._support && typeof driverObject._support === 'function') {
                        driverObject._support().then(setDriverSupport, reject);
                    } else {
                        setDriverSupport(!!driverObject._support);
                    }
                } else {
                    setDriverSupport(true);
                }
            } catch (e) {
                reject(e);
            }
        });

        executeTwoCallbacks(promise, callback, errorCallback);
        return promise;
    };

    LocalForage.prototype.driver = function driver() {
        return this._driver || null;
    };

    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
        return getDriverPromise;
    };

    LocalForage.prototype.getSerializer = function getSerializer(callback) {
        var serializerPromise = Promise$1.resolve(localforageSerializer);
        executeTwoCallbacks(serializerPromise, callback);
        return serializerPromise;
    };

    LocalForage.prototype.ready = function ready(callback) {
        var self = this;

        var promise = self._driverSet.then(function () {
            if (self._ready === null) {
                self._ready = self._initDriver();
            }

            return self._ready;
        });

        executeTwoCallbacks(promise, callback, callback);
        return promise;
    };

    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
        var self = this;

        if (!isArray(drivers)) {
            drivers = [drivers];
        }

        var supportedDrivers = this._getSupportedDrivers(drivers);

        function setDriverToConfig() {
            self._config.driver = self.driver();
        }

        function extendSelfWithDriver(driver) {
            self._extend(driver);
            setDriverToConfig();

            self._ready = self._initStorage(self._config);
            return self._ready;
        }

        function initDriver(supportedDrivers) {
            return function () {
                var currentDriverIndex = 0;

                function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;

                        self._dbInfo = null;
                        self._ready = null;

                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }

                    setDriverToConfig();
                    var error = new Error('No available storage method found.');
                    self._driverSet = Promise$1.reject(error);
                    return self._driverSet;
                }

                return driverPromiseLoop();
            };
        }

        // There might be a driver initialization in progress
        // so wait for it to finish in order to avoid a possible
        // race condition to set _dbInfo
        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
            return Promise$1.resolve();
        }) : Promise$1.resolve();

        this._driverSet = oldDriverSetDone.then(function () {
            var driverName = supportedDrivers[0];
            self._dbInfo = null;
            self._ready = null;

            return self.getDriver(driverName).then(function (driver) {
                self._driver = driver._driver;
                setDriverToConfig();
                self._wrapLibraryMethodsWithReady();
                self._initDriver = initDriver(supportedDrivers);
            });
        })["catch"](function () {
            setDriverToConfig();
            var error = new Error('No available storage method found.');
            self._driverSet = Promise$1.reject(error);
            return self._driverSet;
        });

        executeTwoCallbacks(this._driverSet, callback, errorCallback);
        return this._driverSet;
    };

    LocalForage.prototype.supports = function supports(driverName) {
        return !!DriverSupport[driverName];
    };

    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
        extend(this, libraryMethodsAndProperties);
    };

    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
        var supportedDrivers = [];
        for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
            }
        }
        return supportedDrivers;
    };

    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
        // Add a stub for each driver API method that delays the call to the
        // corresponding driver method until localForage is ready. These stubs
        // will be replaced by the driver methods as soon as the driver is
        // loaded, so there is no performance impact.
        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
        }
    };

    LocalForage.prototype.createInstance = function createInstance(options) {
        return new LocalForage(options);
    };

    return LocalForage;
}();

// The actual localForage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.


var localforage_js = new LocalForage();

module.exports = localforage_js;

},{"3":3}]},{},[4])(4)
});

},{}],"node_modules/rrweb-player/dist/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function e() {}
function t(e, t) {
  for (const n in t) e[n] = t[n];
  return e;
}
function n(e) {
  return e();
}
function r() {
  return Object.create(null);
}
function i(e) {
  e.forEach(n);
}
function o(e) {
  return "function" == typeof e;
}
function a(e, t) {
  return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e;
}
function s(e) {
  const t = {};
  for (const n in e) "$" !== n[0] && (t[n] = e[n]);
  return t;
}
function l(e, t) {
  e.appendChild(t);
}
function c(e, t, n) {
  e.insertBefore(t, n || null);
}
function u(e) {
  e.parentNode.removeChild(e);
}
function d(e, t) {
  for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
}
function f(e) {
  return document.createElement(e);
}
function p(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function h(e) {
  return document.createTextNode(e);
}
function m() {
  return h(" ");
}
function v(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function y(e, t, n) {
  null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function g(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
function b(e, t, n, r) {
  e.style.setProperty(t, n, r ? "important" : "");
}
function w(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
let x;
function S(e) {
  x = e;
}
function E() {
  if (!x) throw new Error("Function called outside component initialization");
  return x;
}
function T(e) {
  E().$$.on_mount.push(e);
}
function M(e) {
  E().$$.on_destroy.push(e);
}
function k() {
  const e = E();
  return (t, n) => {
    const r = e.$$.callbacks[t];
    if (r) {
      const i = function (e, t, n = !1) {
        const r = document.createEvent("CustomEvent");
        return r.initCustomEvent(e, n, !1, t), r;
      }(t, n);
      r.slice().forEach(t => {
        t.call(e, i);
      });
    }
  };
}
const C = [],
  I = [],
  N = [],
  A = [],
  _ = Promise.resolve();
let $ = !1;
function D(e) {
  N.push(e);
}
let R = !1;
const L = new Set();
function F() {
  if (!R) {
    R = !0;
    do {
      for (let e = 0; e < C.length; e += 1) {
        const t = C[e];
        S(t), P(t.$$);
      }
      for (S(null), C.length = 0; I.length;) I.pop()();
      for (let e = 0; e < N.length; e += 1) {
        const t = N[e];
        L.has(t) || (L.add(t), t());
      }
      N.length = 0;
    } while (C.length);
    for (; A.length;) A.pop()();
    $ = !1, R = !1, L.clear();
  }
}
function P(e) {
  if (null !== e.fragment) {
    e.update(), i(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(D);
  }
}
const O = new Set();
let j;
function W() {
  j = {
    r: 0,
    c: [],
    p: j
  };
}
function B() {
  j.r || i(j.c), j = j.p;
}
function z(e, t) {
  e && e.i && (O.delete(e), e.i(t));
}
function U(e, t, n, r) {
  if (e && e.o) {
    if (O.has(e)) return;
    O.add(e), j.c.push(() => {
      O.delete(e), r && (n && e.d(1), r());
    }), e.o(t);
  }
}
function q(e) {
  e && e.c();
}
function H(e, t, r, a) {
  const {
    fragment: s,
    on_mount: l,
    on_destroy: c,
    after_update: u
  } = e.$$;
  s && s.m(t, r), a || D(() => {
    const t = l.map(n).filter(o);
    c ? c.push(...t) : i(t), e.$$.on_mount = [];
  }), u.forEach(D);
}
function V(e, t) {
  const n = e.$$;
  null !== n.fragment && (i(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function G(e, t) {
  -1 === e.$$.dirty[0] && (C.push(e), $ || ($ = !0, _.then(F)), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Y(t, n, o, a, s, l, c, d = [-1]) {
  const f = x;
  S(t);
  const p = t.$$ = {
    fragment: null,
    ctx: null,
    props: l,
    update: e,
    not_equal: s,
    bound: r(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(f ? f.$$.context : n.context || []),
    callbacks: r(),
    dirty: d,
    skip_bound: !1,
    root: n.target || f.$$.root
  };
  c && c(p.root);
  let h = !1;
  if (p.ctx = o ? o(t, n.props || {}, (e, n, ...r) => {
    const i = r.length ? r[0] : n;
    return p.ctx && s(p.ctx[e], p.ctx[e] = i) && (!p.skip_bound && p.bound[e] && p.bound[e](i), h && G(t, e)), n;
  }) : [], p.update(), h = !0, i(p.before_update), p.fragment = !!a && a(p.ctx), n.target) {
    if (n.hydrate) {
      const e = function (e) {
        return Array.from(e.childNodes);
      }(n.target);
      p.fragment && p.fragment.l(e), e.forEach(u);
    } else p.fragment && p.fragment.c();
    n.intro && z(t.$$.fragment), H(t, n.target, n.anchor, n.customElement), F();
  }
  S(f);
}
class X {
  $destroy() {
    V(this, 1), this.$destroy = e;
  }
  $on(e, t) {
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(t), () => {
      const e = n.indexOf(t);
      -1 !== e && n.splice(e, 1);
    };
  }
  $set(e) {
    var t;
    this.$$set && (t = e, 0 !== Object.keys(t).length) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Q,
  J = function () {
    return (J = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      return e;
    }).apply(this, arguments);
  };
function K(e) {
  var t = "function" == typeof Symbol && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && "number" == typeof e.length) return {
    next: function () {
      return e && r >= e.length && (e = void 0), {
        value: e && e[r++],
        done: !e
      };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Z(e, t) {
  var n = "function" == typeof Symbol && e[Symbol.iterator];
  if (!n) return e;
  var r,
    i,
    o = n.call(e),
    a = [];
  try {
    for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value);
  } catch (e) {
    i = {
      error: e
    };
  } finally {
    try {
      r && !r.done && (n = o.return) && n.call(o);
    } finally {
      if (i) throw i.error;
    }
  }
  return a;
}
function ee(e, t, n) {
  if (n || 2 === arguments.length) for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
  return e.concat(r || Array.prototype.slice.call(t));
}
function te(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
!function (e) {
  e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment";
}(Q || (Q = {}));
var ne = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
function re(e, t) {
  void 0 === t && (t = {});
  var n = 1,
    r = 1;
  function i(e) {
    var t = e.match(/\n/g);
    t && (n += t.length);
    var i = e.lastIndexOf("\n");
    r = -1 === i ? r + e.length : e.length - i;
  }
  function o() {
    var e = {
      line: n,
      column: r
    };
    return function (t) {
      return t.position = new a(e), p(), t;
    };
  }
  var a = function (e) {
    this.start = e, this.end = {
      line: n,
      column: r
    }, this.source = t.source;
  };
  a.prototype.content = e;
  var s = [];
  function l(i) {
    var o = new Error(t.source + ":" + n + ":" + r + ": " + i);
    if (o.reason = i, o.filename = t.source, o.line = n, o.column = r, o.source = e, !t.silent) throw o;
    s.push(o);
  }
  function c() {
    return f(/^{\s*/);
  }
  function u() {
    return f(/^}/);
  }
  function d() {
    var t,
      n = [];
    for (p(), h(n); e.length && "}" !== e.charAt(0) && (t = M() || k());) !1 !== t && (n.push(t), h(n));
    return n;
  }
  function f(t) {
    var n = t.exec(e);
    if (n) {
      var r = n[0];
      return i(r), e = e.slice(r.length), n;
    }
  }
  function p() {
    f(/^\s*/);
  }
  function h(e) {
    var t;
    for (void 0 === e && (e = []); t = m();) !1 !== t && e.push(t), t = m();
    return e;
  }
  function m() {
    var t = o();
    if ("/" === e.charAt(0) && "*" === e.charAt(1)) {
      for (var n = 2; "" !== e.charAt(n) && ("*" !== e.charAt(n) || "/" !== e.charAt(n + 1));) ++n;
      if (n += 2, "" === e.charAt(n - 1)) return l("End of comment missing");
      var a = e.slice(2, n - 2);
      return r += 2, i(a), e = e.slice(n), r += 2, t({
        type: "comment",
        comment: a
      });
    }
  }
  function v() {
    var e = f(/^([^{]+)/);
    if (e) return ie(e[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (e) {
      return e.replace(/,/g, "‌");
    }).split(/\s*(?![^(]*\)),\s*/).map(function (e) {
      return e.replace(/\u200C/g, ",");
    });
  }
  function y() {
    var e = o(),
      t = f(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
    if (t) {
      var n = ie(t[0]);
      if (!f(/^:\s*/)) return l("property missing ':'");
      var r = f(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/),
        i = e({
          type: "declaration",
          property: n.replace(ne, ""),
          value: r ? ie(r[0]).replace(ne, "") : ""
        });
      return f(/^[;\s]*/), i;
    }
  }
  function g() {
    var e,
      t = [];
    if (!c()) return l("missing '{'");
    for (h(t); e = y();) !1 !== e && (t.push(e), h(t)), e = y();
    return u() ? t : l("missing '}'");
  }
  function b() {
    for (var e, t = [], n = o(); e = f(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);) t.push(e[1]), f(/^,\s*/);
    if (t.length) return n({
      type: "keyframe",
      values: t,
      declarations: g()
    });
  }
  var w,
    x = T("import"),
    S = T("charset"),
    E = T("namespace");
  function T(e) {
    var t = new RegExp("^@" + e + "\\s*([^;]+);");
    return function () {
      var n = o(),
        r = f(t);
      if (r) {
        var i = {
          type: e
        };
        return i[e] = r[1].trim(), n(i);
      }
    };
  }
  function M() {
    if ("@" === e[0]) return function () {
      var e = o(),
        t = f(/^@([-\w]+)?keyframes\s*/);
      if (t) {
        var n = t[1];
        if (!(t = f(/^([-\w]+)\s*/))) return l("@keyframes missing name");
        var r,
          i = t[1];
        if (!c()) return l("@keyframes missing '{'");
        for (var a = h(); r = b();) a.push(r), a = a.concat(h());
        return u() ? e({
          type: "keyframes",
          name: i,
          vendor: n,
          keyframes: a
        }) : l("@keyframes missing '}'");
      }
    }() || function () {
      var e = o(),
        t = f(/^@media *([^{]+)/);
      if (t) {
        var n = ie(t[1]);
        if (!c()) return l("@media missing '{'");
        var r = h().concat(d());
        return u() ? e({
          type: "media",
          media: n,
          rules: r
        }) : l("@media missing '}'");
      }
    }() || function () {
      var e = o(),
        t = f(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
      if (t) return e({
        type: "custom-media",
        name: ie(t[1]),
        media: ie(t[2])
      });
    }() || function () {
      var e = o(),
        t = f(/^@supports *([^{]+)/);
      if (t) {
        var n = ie(t[1]);
        if (!c()) return l("@supports missing '{'");
        var r = h().concat(d());
        return u() ? e({
          type: "supports",
          supports: n,
          rules: r
        }) : l("@supports missing '}'");
      }
    }() || x() || S() || E() || function () {
      var e = o(),
        t = f(/^@([-\w]+)?document *([^{]+)/);
      if (t) {
        var n = ie(t[1]),
          r = ie(t[2]);
        if (!c()) return l("@document missing '{'");
        var i = h().concat(d());
        return u() ? e({
          type: "document",
          document: r,
          vendor: n,
          rules: i
        }) : l("@document missing '}'");
      }
    }() || function () {
      var e = o();
      if (f(/^@page */)) {
        var t = v() || [];
        if (!c()) return l("@page missing '{'");
        for (var n, r = h(); n = y();) r.push(n), r = r.concat(h());
        return u() ? e({
          type: "page",
          selectors: t,
          declarations: r
        }) : l("@page missing '}'");
      }
    }() || function () {
      var e = o();
      if (f(/^@host\s*/)) {
        if (!c()) return l("@host missing '{'");
        var t = h().concat(d());
        return u() ? e({
          type: "host",
          rules: t
        }) : l("@host missing '}'");
      }
    }() || function () {
      var e = o();
      if (f(/^@font-face\s*/)) {
        if (!c()) return l("@font-face missing '{'");
        for (var t, n = h(); t = y();) n.push(t), n = n.concat(h());
        return u() ? e({
          type: "font-face",
          declarations: n
        }) : l("@font-face missing '}'");
      }
    }();
  }
  function k() {
    var e = o(),
      t = v();
    return t ? (h(), e({
      type: "rule",
      selectors: t,
      declarations: g()
    })) : l("selector missing");
  }
  return oe((w = d(), {
    type: "stylesheet",
    stylesheet: {
      source: t.source,
      rules: w,
      parsingErrors: s
    }
  }));
}
function ie(e) {
  return e ? e.replace(/^\s+|\s+$/g, "") : "";
}
function oe(e, t) {
  for (var n = e && "string" == typeof e.type, r = n ? e : t, i = 0, o = Object.keys(e); i < o.length; i++) {
    var a = e[o[i]];
    Array.isArray(a) ? a.forEach(function (e) {
      oe(e, r);
    }) : a && "object" == typeof a && oe(a, r);
  }
  return n && Object.defineProperty(e, "parent", {
    configurable: !0,
    writable: !0,
    enumerable: !1,
    value: t || null
  }), e;
}
var ae = {
  script: "noscript",
  altglyph: "altGlyph",
  altglyphdef: "altGlyphDef",
  altglyphitem: "altGlyphItem",
  animatecolor: "animateColor",
  animatemotion: "animateMotion",
  animatetransform: "animateTransform",
  clippath: "clipPath",
  feblend: "feBlend",
  fecolormatrix: "feColorMatrix",
  fecomponenttransfer: "feComponentTransfer",
  fecomposite: "feComposite",
  feconvolvematrix: "feConvolveMatrix",
  fediffuselighting: "feDiffuseLighting",
  fedisplacementmap: "feDisplacementMap",
  fedistantlight: "feDistantLight",
  fedropshadow: "feDropShadow",
  feflood: "feFlood",
  fefunca: "feFuncA",
  fefuncb: "feFuncB",
  fefuncg: "feFuncG",
  fefuncr: "feFuncR",
  fegaussianblur: "feGaussianBlur",
  feimage: "feImage",
  femerge: "feMerge",
  femergenode: "feMergeNode",
  femorphology: "feMorphology",
  feoffset: "feOffset",
  fepointlight: "fePointLight",
  fespecularlighting: "feSpecularLighting",
  fespotlight: "feSpotLight",
  fetile: "feTile",
  feturbulence: "feTurbulence",
  foreignobject: "foreignObject",
  glyphref: "glyphRef",
  lineargradient: "linearGradient",
  radialgradient: "radialGradient"
};
var se,
  le,
  ce,
  ue,
  de,
  fe,
  pe = /([^\\]):hover/,
  he = new RegExp(pe.source, "g");
function me(e, t) {
  var n = null == t ? void 0 : t.stylesWithHoverClass.get(e);
  if (n) return n;
  var r = re(e, {
    silent: !0
  });
  if (!r.stylesheet) return e;
  var i = [];
  if (r.stylesheet.rules.forEach(function (e) {
    "selectors" in e && (e.selectors || []).forEach(function (e) {
      pe.test(e) && i.push(e);
    });
  }), 0 === i.length) return e;
  var o = new RegExp(i.filter(function (e, t) {
      return i.indexOf(e) === t;
    }).sort(function (e, t) {
      return t.length - e.length;
    }).map(function (e) {
      return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }).join("|"), "g"),
    a = e.replace(o, function (e) {
      var t = e.replace(he, "$1.\\:hover");
      return e + ", " + t;
    });
  return null == t || t.stylesWithHoverClass.set(e, a), a;
}
function ve() {
  return {
    stylesWithHoverClass: new Map()
  };
}
function ye(e, t) {
  var n = t.doc,
    r = t.hackCss,
    i = t.cache;
  switch (e.type) {
    case Q.Document:
      return n.implementation.createDocument(null, "", null);
    case Q.DocumentType:
      return n.implementation.createDocumentType(e.name || "html", e.publicId, e.systemId);
    case Q.Element:
      var o,
        a = function (e) {
          var t = ae[e.tagName] ? ae[e.tagName] : e.tagName;
          return "link" === t && e.attributes._cssText && (t = "style"), t;
        }(e);
      o = e.isSVG ? n.createElementNS("http://www.w3.org/2000/svg", a) : n.createElement(a);
      var s = function (t) {
        if (!e.attributes.hasOwnProperty(t)) return "continue";
        var s = e.attributes[t];
        if ("option" === a && "selected" === t && !1 === s) return "continue";
        if (s = "boolean" == typeof s || "number" == typeof s ? "" : s, t.startsWith("rr_")) {
          if ("canvas" === a && "rr_dataURL" === t) {
            var l = document.createElement("img");
            l.src = s, l.onload = function () {
              var e = o.getContext("2d");
              e && e.drawImage(l, 0, 0, l.width, l.height);
            };
          } else if ("img" === a && "rr_dataURL" === t) {
            var c = o;
            c.currentSrc.startsWith("data:") || (c.setAttribute("rrweb-original-src", e.attributes.src), c.src = s);
          }
          if ("rr_width" === t) o.style.width = s;else if ("rr_height" === t) o.style.height = s;else if ("rr_mediaCurrentTime" === t) o.currentTime = e.attributes.rr_mediaCurrentTime;else if ("rr_mediaState" === t) switch (s) {
            case "played":
              o.play().catch(function (e) {
                return console.warn("media playback error", e);
              });
              break;
            case "paused":
              o.pause();
          }
        } else {
          var u = "textarea" === a && "value" === t,
            d = "style" === a && "_cssText" === t;
          if (d && r && (s = me(s, i)), u || d) {
            for (var f = n.createTextNode(s), p = 0, h = Array.from(o.childNodes); p < h.length; p++) {
              var m = h[p];
              m.nodeType === o.TEXT_NODE && o.removeChild(m);
            }
            return o.appendChild(f), "continue";
          }
          try {
            if (e.isSVG && "xlink:href" === t) o.setAttributeNS("http://www.w3.org/1999/xlink", t, s);else if ("onload" === t || "onclick" === t || "onmouse" === t.substring(0, 7)) o.setAttribute("_" + t, s);else {
              if ("meta" === a && "Content-Security-Policy" === e.attributes["http-equiv"] && "content" === t) return o.setAttribute("csp-content", s), "continue";
              "link" === a && "preload" === e.attributes.rel && "script" === e.attributes.as || "link" === a && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && e.attributes.href.endsWith(".js") || ("img" === a && e.attributes.srcset && e.attributes.rr_dataURL ? o.setAttribute("rrweb-original-srcset", e.attributes.srcset) : o.setAttribute(t, s));
            }
          } catch (e) {}
        }
      };
      for (var l in e.attributes) s(l);
      if (e.isShadowHost) if (o.shadowRoot) for (; o.shadowRoot.firstChild;) o.shadowRoot.removeChild(o.shadowRoot.firstChild);else o.attachShadow({
        mode: "open"
      });
      return o;
    case Q.Text:
      return n.createTextNode(e.isStyle && r ? me(e.textContent, i) : e.textContent);
    case Q.CDATA:
      return n.createCDATASection(e.textContent);
    case Q.Comment:
      return n.createComment(e.textContent);
    default:
      return null;
  }
}
function ge(e, t) {
  var n = t.doc,
    r = t.map,
    i = t.skipChild,
    o = void 0 !== i && i,
    a = t.hackCss,
    s = void 0 === a || a,
    l = t.afterAppend,
    c = t.cache,
    u = ye(e, {
      doc: n,
      hackCss: s,
      cache: c
    });
  if (!u) return null;
  if (e.rootId && console.assert(r[e.rootId] === n, "Target document should has the same root id."), e.type === Q.Document && (n.close(), n.open(), "BackCompat" === e.compatMode && e.childNodes && e.childNodes[0].type !== Q.DocumentType && (e.childNodes[0].type === Q.Element && "xmlns" in e.childNodes[0].attributes && "http://www.w3.org/1999/xhtml" === e.childNodes[0].attributes.xmlns ? n.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">') : n.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">')), u = n), u.__sn = e, r[e.id] = u, (e.type === Q.Document || e.type === Q.Element) && !o) for (var d = 0, f = e.childNodes; d < f.length; d++) {
    var p = f[d],
      h = ge(p, {
        doc: n,
        map: r,
        skipChild: !1,
        hackCss: s,
        afterAppend: l,
        cache: c
      });
    h ? (p.isShadow && te(u) && u.shadowRoot ? u.shadowRoot.appendChild(h) : u.appendChild(h), l && l(h)) : console.warn("Failed to rebuild", p);
  }
  return u;
}
function be(e, t) {
  var n = t.doc,
    r = t.onVisit,
    i = t.hackCss,
    o = {},
    a = ge(e, {
      doc: n,
      map: o,
      skipChild: !1,
      hackCss: void 0 === i || i,
      afterAppend: t.afterAppend,
      cache: t.cache
    });
  return function (e, t) {
    for (var n in e) e[n] && (r = e[n], t(r));
    var r;
  }(o, function (e) {
    r && r(e), function (e) {
      var t = e.__sn;
      if (t.type === Q.Element) {
        var n = e;
        for (var r in t.attributes) if (t.attributes.hasOwnProperty(r) && r.startsWith("rr_")) {
          var i = t.attributes[r];
          "rr_scrollLeft" === r && (n.scrollLeft = i), "rr_scrollTop" === r && (n.scrollTop = i);
        }
      }
    }(e);
  }), [a, o];
}
!function (e) {
  e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin";
}(se || (se = {})), function (e) {
  e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration";
}(le || (le = {})), function (e) {
  e[e.MouseUp = 0] = "MouseUp", e[e.MouseDown = 1] = "MouseDown", e[e.Click = 2] = "Click", e[e.ContextMenu = 3] = "ContextMenu", e[e.DblClick = 4] = "DblClick", e[e.Focus = 5] = "Focus", e[e.Blur = 6] = "Blur", e[e.TouchStart = 7] = "TouchStart", e[e.TouchMove_Departed = 8] = "TouchMove_Departed", e[e.TouchEnd = 9] = "TouchEnd", e[e.TouchCancel = 10] = "TouchCancel";
}(ce || (ce = {})), function (e) {
  e[e["2D"] = 0] = "2D", e[e.WebGL = 1] = "WebGL", e[e.WebGL2 = 2] = "WebGL2";
}(ue || (ue = {})), function (e) {
  e[e.Play = 0] = "Play", e[e.Pause = 1] = "Pause", e[e.Seeked = 2] = "Seeked", e[e.VolumeChange = 3] = "VolumeChange";
}(de || (de = {})), function (e) {
  e.Start = "start", e.Pause = "pause", e.Resume = "resume", e.Resize = "resize", e.Finish = "finish", e.FullsnapshotRebuilded = "fullsnapshot-rebuilded", e.LoadStylesheetStart = "load-stylesheet-start", e.LoadStylesheetEnd = "load-stylesheet-end", e.SkipStart = "skip-start", e.SkipEnd = "skip-end", e.MouseInteraction = "mouse-interaction", e.EventCast = "event-cast", e.CustomEvent = "custom-event", e.Flush = "flush", e.StateChange = "state-change", e.PlayBack = "play-back";
}(fe || (fe = {}));
var we = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
  xe = {
    map: {},
    getId: function () {
      return console.error(we), -1;
    },
    getNode: function () {
      return console.error(we), null;
    },
    removeNodeFromMap: function () {
      console.error(we);
    },
    has: function () {
      return console.error(we), !1;
    },
    reset: function () {
      console.error(we);
    }
  };
"undefined" != typeof window && window.Proxy && window.Reflect && (xe = new Proxy(xe, {
  get: function (e, t, n) {
    return "map" === t && console.error(we), Reflect.get(e, t, n);
  }
}));
var Se = function () {
  function e() {
    this.reset();
  }
  return e.prototype.add = function (e) {
    var t = this.indexes.get(e.parentId),
      n = {
        id: e.node.id,
        mutation: e,
        children: [],
        texts: [],
        attributes: []
      };
    t ? (n.parent = t, t.children[n.id] = n) : this.tree[n.id] = n, this.indexes.set(n.id, n);
  }, e.prototype.remove = function (e, t) {
    var n = this,
      r = this.indexes.get(e.parentId),
      i = this.indexes.get(e.id),
      o = function (e) {
        n.removeIdSet.add(e);
        var r = t.getNode(e);
        null == r || r.childNodes.forEach(function (e) {
          "__sn" in e && o(e.__sn.id);
        });
      },
      a = function (t) {
        n.removeIdSet.add(t.id), Object.values(t.children).forEach(function (e) {
          return a(e);
        });
        var r = n.indexes.get(t.id);
        if (r) {
          var i = r.parent;
          i && (delete r.parent, delete i.children[r.id], n.indexes.delete(e.id));
        }
      };
    i ? r ? (delete i.parent, delete r.children[i.id], this.indexes.delete(e.id), a(i)) : (delete this.tree[i.id], this.indexes.delete(i.id), a(i)) : (this.removeNodeMutations.push(e), o(e.id));
  }, e.prototype.text = function (e) {
    var t = this.indexes.get(e.id);
    t ? t.texts.push(e) : this.textMutations.push(e);
  }, e.prototype.attribute = function (e) {
    var t = this.indexes.get(e.id);
    t ? t.attributes.push(e) : this.attributeMutations.push(e);
  }, e.prototype.scroll = function (e) {
    this.scrollMap.set(e.id, e);
  }, e.prototype.input = function (e) {
    this.inputMap.set(e.id, e);
  }, e.prototype.flush = function () {
    var e,
      t,
      n,
      r,
      i = this,
      o = this,
      a = o.tree,
      s = o.removeNodeMutations,
      l = o.textMutations,
      c = o.attributeMutations,
      u = {
        source: le.Mutation,
        removes: s,
        texts: l,
        attributes: c,
        adds: []
      },
      d = function (e, t) {
        t && i.removeIdSet.add(e.id), u.texts = u.texts.concat(t ? [] : e.texts).filter(function (e) {
          return !i.removeIdSet.has(e.id);
        }), u.attributes = u.attributes.concat(t ? [] : e.attributes).filter(function (e) {
          return !i.removeIdSet.has(e.id);
        }), i.removeIdSet.has(e.id) || i.removeIdSet.has(e.mutation.parentId) || t ? Object.values(e.children).forEach(function (e) {
          return d(e, !0);
        }) : (u.adds.push(e.mutation), e.children && Object.values(e.children).forEach(function (e) {
          return d(e, !1);
        }));
      };
    Object.values(a).forEach(function (e) {
      return d(e, !1);
    });
    try {
      for (var f = K(this.scrollMap.keys()), p = f.next(); !p.done; p = f.next()) {
        var h = p.value;
        this.removeIdSet.has(h) && this.scrollMap.delete(h);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        p && !p.done && (t = f.return) && t.call(f);
      } finally {
        if (e) throw e.error;
      }
    }
    try {
      for (var m = K(this.inputMap.keys()), v = m.next(); !v.done; v = m.next()) {
        h = v.value;
        this.removeIdSet.has(h) && this.inputMap.delete(h);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        v && !v.done && (r = m.return) && r.call(m);
      } finally {
        if (n) throw n.error;
      }
    }
    var y = new Map(this.scrollMap),
      g = new Map(this.inputMap);
    return this.reset(), {
      mutationData: u,
      scrollMap: y,
      inputMap: g
    };
  }, e.prototype.reset = function () {
    this.tree = [], this.indexes = new Map(), this.removeNodeMutations = [], this.textMutations = [], this.attributeMutations = [], this.removeIdSet = new Set(), this.scrollMap = new Map(), this.inputMap = new Map();
  }, e.prototype.idRemoved = function (e) {
    return this.removeIdSet.has(e);
  }, e;
}();
function Ee(e) {
  var t,
    n,
    r = {},
    i = function (e, t) {
      var n = {
        value: e,
        parent: t,
        children: []
      };
      return r[e.node.id] = n, n;
    },
    o = [];
  try {
    for (var a = K(e), s = a.next(); !s.done; s = a.next()) {
      var l = s.value,
        c = l.nextId,
        u = l.parentId;
      if (c && c in r) {
        var d = r[c];
        if (d.parent) {
          var f = d.parent.children.indexOf(d);
          d.parent.children.splice(f, 0, i(l, d.parent));
        } else {
          f = o.indexOf(d);
          o.splice(f, 0, i(l, null));
        }
      } else if (u in r) {
        var p = r[u];
        p.children.push(i(l, p));
      } else o.push(i(l, null));
    }
  } catch (e) {
    t = {
      error: e
    };
  } finally {
    try {
      s && !s.done && (n = a.return) && n.call(a);
    } finally {
      if (t) throw t.error;
    }
  }
  return o;
}
function Te(e, t) {
  t(e.value);
  for (var n = e.children.length - 1; n >= 0; n--) Te(e.children[n], t);
}
function Me(e) {
  return "__sn" in e && e.__sn.type === Q.Element && "iframe" === e.__sn.tagName;
}
function ke(e, t) {
  var n,
    r,
    i = null === (r = null === (n = e.ownerDocument) || void 0 === n ? void 0 : n.defaultView) || void 0 === r ? void 0 : r.frameElement;
  if (!i || i === t) return {
    x: 0,
    y: 0,
    relativeScale: 1,
    absoluteScale: 1
  };
  var o = i.getBoundingClientRect(),
    a = ke(i, t),
    s = o.height / i.clientHeight;
  return {
    x: o.x * a.relativeScale + a.x,
    y: o.y * a.relativeScale + a.y,
    relativeScale: s,
    absoluteScale: a.absoluteScale * s
  };
}
function Ce(e) {
  return Boolean(null == e ? void 0 : e.shadowRoot);
}
for (var Ie = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ne = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Ae = 0; Ae < Ie.length; Ae++) Ne[Ie.charCodeAt(Ae)] = Ae;
function _e(e) {
  return e = e || Object.create(null), {
    on: function (t, n) {
      (e[t] || (e[t] = [])).push(n);
    },
    off: function (t, n) {
      e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1);
    },
    emit: function (t, n) {
      (e[t] || []).slice().map(function (e) {
        e(n);
      }), (e["*"] || []).slice().map(function (e) {
        e(t, n);
      });
    }
  };
}
var $e = Object.freeze({
  __proto__: null,
  default: _e
});
function De(e, t) {
  if (void 0 === e && (e = window), void 0 === t && (t = document), !("scrollBehavior" in t.documentElement.style) || !0 === e.__forceSmoothScrollPolyfill__) {
    var n,
      r = e.HTMLElement || e.Element,
      i = {
        scroll: e.scroll || e.scrollTo,
        scrollBy: e.scrollBy,
        elementScroll: r.prototype.scroll || s,
        scrollIntoView: r.prototype.scrollIntoView
      },
      o = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now,
      a = (n = e.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(n) ? 1 : 0);
    e.scroll = e.scrollTo = function () {
      void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? h.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : i.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset));
    }, e.scrollBy = function () {
      void 0 !== arguments[0] && (l(arguments[0]) ? i.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : h.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset)));
    }, r.prototype.scroll = r.prototype.scrollTo = function () {
      if (void 0 !== arguments[0]) if (!0 !== l(arguments[0])) {
        var e = arguments[0].left,
          t = arguments[0].top;
        h.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t);
      } else {
        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
        i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop);
      }
    }, r.prototype.scrollBy = function () {
      void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop));
    }, r.prototype.scrollIntoView = function () {
      if (!0 !== l(arguments[0])) {
        var n = f(this),
          r = n.getBoundingClientRect(),
          o = this.getBoundingClientRect();
        n !== t.body ? (h.call(this, n, n.scrollLeft + o.left - r.left, n.scrollTop + o.top - r.top), "fixed" !== e.getComputedStyle(n).position && e.scrollBy({
          left: r.left,
          top: r.top,
          behavior: "smooth"
        })) : e.scrollBy({
          left: o.left,
          top: o.top,
          behavior: "smooth"
        });
      } else i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
    };
  }
  function s(e, t) {
    this.scrollLeft = e, this.scrollTop = t;
  }
  function l(e) {
    if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
    if ("object" == typeof e && "smooth" === e.behavior) return !1;
    throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.");
  }
  function c(e, t) {
    return "Y" === t ? e.clientHeight + a < e.scrollHeight : "X" === t ? e.clientWidth + a < e.scrollWidth : void 0;
  }
  function u(t, n) {
    var r = e.getComputedStyle(t, null)["overflow" + n];
    return "auto" === r || "scroll" === r;
  }
  function d(e) {
    var t = c(e, "Y") && u(e, "Y"),
      n = c(e, "X") && u(e, "X");
    return t || n;
  }
  function f(e) {
    for (; e !== t.body && !1 === d(e);) e = e.parentNode || e.host;
    return e;
  }
  function p(t) {
    var n,
      r,
      i,
      a,
      s = (o() - t.startTime) / 468;
    a = s = s > 1 ? 1 : s, n = .5 * (1 - Math.cos(Math.PI * a)), r = t.startX + (t.x - t.startX) * n, i = t.startY + (t.y - t.startY) * n, t.method.call(t.scrollable, r, i), r === t.x && i === t.y || e.requestAnimationFrame(p.bind(e, t));
  }
  function h(n, r, a) {
    var l,
      c,
      u,
      d,
      f = o();
    n === t.body ? (l = e, c = e.scrollX || e.pageXOffset, u = e.scrollY || e.pageYOffset, d = i.scroll) : (l = n, c = n.scrollLeft, u = n.scrollTop, d = s), p({
      scrollable: l,
      method: d,
      startTime: f,
      startX: c,
      startY: u,
      x: r,
      y: a
    });
  }
}
var Re,
  Le = function () {
    function e(e, t) {
      void 0 === e && (e = []), this.timeOffset = 0, this.raf = null, this.actions = e, this.speed = t;
    }
    return e.prototype.addAction = function (e) {
      var t = this.findActionIndex(e);
      this.actions.splice(t, 0, e);
    }, e.prototype.addActions = function (e) {
      this.actions = this.actions.concat(e);
    }, e.prototype.start = function () {
      this.timeOffset = 0;
      var e = performance.now(),
        t = this.actions,
        n = this;
      this.raf = requestAnimationFrame(function r() {
        var i = performance.now();
        for (n.timeOffset += (i - e) * n.speed, e = i; t.length;) {
          var o = t[0];
          if (!(n.timeOffset >= o.delay)) break;
          t.shift(), o.doAction();
        }
        (t.length > 0 || n.liveMode) && (n.raf = requestAnimationFrame(r));
      });
    }, e.prototype.clear = function () {
      this.raf && (cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0;
    }, e.prototype.setSpeed = function (e) {
      this.speed = e;
    }, e.prototype.toggleLiveMode = function (e) {
      this.liveMode = e;
    }, e.prototype.isActive = function () {
      return null !== this.raf;
    }, e.prototype.findActionIndex = function (e) {
      for (var t = 0, n = this.actions.length - 1; t <= n;) {
        var r = Math.floor((t + n) / 2);
        if (this.actions[r].delay < e.delay) t = r + 1;else {
          if (!(this.actions[r].delay > e.delay)) return r + 1;
          n = r - 1;
        }
      }
      return t;
    }, e;
  }();
function Fe(e, t) {
  if (e.type === se.IncrementalSnapshot && e.data.source === le.MouseMove) {
    var n = e.data.positions[0].timeOffset,
      r = e.timestamp + n;
    return e.delay = r - t, r - t;
  }
  return e.delay = e.timestamp - t, e.delay;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Pe(e, t) {
  var n = "function" == typeof Symbol && e[Symbol.iterator];
  if (!n) return e;
  var r,
    i,
    o = n.call(e),
    a = [];
  try {
    for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value);
  } catch (e) {
    i = {
      error: e
    };
  } finally {
    try {
      r && !r.done && (n = o.return) && n.call(o);
    } finally {
      if (i) throw i.error;
    }
  }
  return a;
}
!function (e) {
  e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped";
}(Re || (Re = {}));
var Oe = {
  type: "xstate.init"
};
function je(e) {
  return void 0 === e ? [] : [].concat(e);
}
function We(e) {
  return {
    type: "xstate.assign",
    assignment: e
  };
}
function Be(e, t) {
  return "string" == typeof (e = "string" == typeof e && t && t[e] ? t[e] : e) ? {
    type: e
  } : "function" == typeof e ? {
    type: e.name,
    exec: e
  } : e;
}
function ze(e) {
  return function (t) {
    return e === t;
  };
}
function Ue(e) {
  return "string" == typeof e ? {
    type: e
  } : e;
}
function qe(e, t) {
  return {
    value: e,
    context: t,
    actions: [],
    changed: !1,
    matches: ze(e)
  };
}
function He(e, t, n) {
  var r = t,
    i = !1;
  return [e.filter(function (e) {
    if ("xstate.assign" === e.type) {
      i = !0;
      var t = Object.assign({}, r);
      return "function" == typeof e.assignment ? t = e.assignment(r, n) : Object.keys(e.assignment).forEach(function (i) {
        t[i] = "function" == typeof e.assignment[i] ? e.assignment[i](r, n) : e.assignment[i];
      }), r = t, !1;
    }
    return !0;
  }), r, i];
}
function Ve(e, t) {
  void 0 === t && (t = {});
  var n = Pe(He(je(e.states[e.initial].entry).map(function (e) {
      return Be(e, t.actions);
    }), e.context, Oe), 2),
    r = n[0],
    i = n[1],
    o = {
      config: e,
      _options: t,
      initialState: {
        value: e.initial,
        actions: r,
        context: i,
        matches: ze(e.initial)
      },
      transition: function (t, n) {
        var r,
          i,
          a = "string" == typeof t ? {
            value: t,
            context: e.context
          } : t,
          s = a.value,
          l = a.context,
          c = Ue(n),
          u = e.states[s];
        if (u.on) {
          var d = je(u.on[c.type]);
          try {
            for (var f = function (e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  n = t && e[t],
                  r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                  next: function () {
                    return e && r >= e.length && (e = void 0), {
                      value: e && e[r++],
                      done: !e
                    };
                  }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
              }(d), p = f.next(); !p.done; p = f.next()) {
              var h = p.value;
              if (void 0 === h) return qe(s, l);
              var m = "string" == typeof h ? {
                  target: h
                } : h,
                v = m.target,
                y = m.actions,
                g = void 0 === y ? [] : y,
                b = m.cond,
                w = void 0 === b ? function () {
                  return !0;
                } : b,
                x = void 0 === v,
                S = null != v ? v : s,
                E = e.states[S];
              if (w(l, c)) {
                var T = Pe(He((x ? je(g) : [].concat(u.exit, g, E.entry).filter(function (e) {
                    return e;
                  })).map(function (e) {
                    return Be(e, o._options.actions);
                  }), l, c), 3),
                  M = T[0],
                  k = T[1],
                  C = T[2],
                  I = null != v ? v : s;
                return {
                  value: I,
                  context: k,
                  actions: M,
                  changed: v !== s || M.length > 0 || C,
                  matches: ze(I)
                };
              }
            }
          } catch (e) {
            r = {
              error: e
            };
          } finally {
            try {
              p && !p.done && (i = f.return) && i.call(f);
            } finally {
              if (r) throw r.error;
            }
          }
        }
        return qe(s, l);
      }
    };
  return o;
}
var Ge = function (e, t) {
  return e.actions.forEach(function (n) {
    var r = n.exec;
    return r && r(e.context, t);
  });
};
function Ye(e) {
  var t = e.initialState,
    n = Re.NotStarted,
    r = new Set(),
    i = {
      _machine: e,
      send: function (i) {
        n === Re.Running && (t = e.transition(t, i), Ge(t, Ue(i)), r.forEach(function (e) {
          return e(t);
        }));
      },
      subscribe: function (e) {
        return r.add(e), e(t), {
          unsubscribe: function () {
            return r.delete(e);
          }
        };
      },
      start: function (r) {
        if (r) {
          var o = "object" == typeof r ? r : {
            context: e.config.context,
            value: r
          };
          t = {
            value: o.value,
            actions: [],
            context: o.context,
            matches: ze(o.value)
          };
        }
        return n = Re.Running, Ge(t, Oe), i;
      },
      stop: function () {
        return n = Re.Stopped, r.clear(), i;
      },
      get state() {
        return t;
      },
      get status() {
        return n;
      }
    };
  return i;
}
function Xe(e, t) {
  var n = t.getCastFn,
    r = t.applyEventsSynchronously,
    i = t.emitter;
  return Ye(Ve({
    id: "player",
    context: e,
    initial: "paused",
    states: {
      playing: {
        on: {
          PAUSE: {
            target: "paused",
            actions: ["pause"]
          },
          CAST_EVENT: {
            target: "playing",
            actions: "castEvent"
          },
          END: {
            target: "paused",
            actions: ["resetLastPlayedEvent", "pause"]
          },
          ADD_EVENT: {
            target: "playing",
            actions: ["addEvent"]
          }
        }
      },
      paused: {
        on: {
          PLAY: {
            target: "playing",
            actions: ["recordTimeOffset", "play"]
          },
          CAST_EVENT: {
            target: "paused",
            actions: "castEvent"
          },
          TO_LIVE: {
            target: "live",
            actions: ["startLive"]
          },
          ADD_EVENT: {
            target: "paused",
            actions: ["addEvent"]
          }
        }
      },
      live: {
        on: {
          ADD_EVENT: {
            target: "live",
            actions: ["addEvent"]
          },
          CAST_EVENT: {
            target: "live",
            actions: ["castEvent"]
          }
        }
      }
    }
  }, {
    actions: {
      castEvent: We({
        lastPlayedEvent: function (e, t) {
          return "CAST_EVENT" === t.type ? t.payload.event : e.lastPlayedEvent;
        }
      }),
      recordTimeOffset: We(function (e, t) {
        var n = e.timeOffset;
        return "payload" in t && "timeOffset" in t.payload && (n = t.payload.timeOffset), J(J({}, e), {
          timeOffset: n,
          baselineTime: e.events[0].timestamp + n
        });
      }),
      play: function (e) {
        var t,
          o,
          a,
          s,
          l,
          c = e.timer,
          u = e.events,
          d = e.baselineTime,
          f = e.lastPlayedEvent;
        c.clear();
        try {
          for (var p = K(u), h = p.next(); !h.done; h = p.next()) {
            Fe(h.value, d);
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            h && !h.done && (o = p.return) && o.call(p);
          } finally {
            if (t) throw t.error;
          }
        }
        var m = function (e, t) {
            for (var n = e.length - 1; n >= 0; n--) {
              var r = e[n];
              if (r.type === se.Meta && r.timestamp <= t) return e.slice(n);
            }
            return e;
          }(u, d),
          v = null == f ? void 0 : f.timestamp;
        (null == f ? void 0 : f.type) === se.IncrementalSnapshot && f.data.source === le.MouseMove && (v = f.timestamp + (null === (l = f.data.positions[0]) || void 0 === l ? void 0 : l.timeOffset)), d < (v || 0) && i.emit(fe.PlayBack);
        var y = new Array(),
          g = new Array(),
          b = function (e) {
            if (v && v < d && (e.timestamp <= v || e === f)) return "continue";
            if (e.timestamp < d) y.push(e);else {
              var t = n(e, !1);
              g.push({
                doAction: function () {
                  t();
                },
                delay: e.delay
              });
            }
          };
        try {
          for (var w = K(m), x = w.next(); !x.done; x = w.next()) {
            b(x.value);
          }
        } catch (e) {
          a = {
            error: e
          };
        } finally {
          try {
            x && !x.done && (s = w.return) && s.call(w);
          } finally {
            if (a) throw a.error;
          }
        }
        r(y), i.emit(fe.Flush), c.addActions(g), c.start();
      },
      pause: function (e) {
        e.timer.clear();
      },
      resetLastPlayedEvent: We(function (e) {
        return J(J({}, e), {
          lastPlayedEvent: null
        });
      }),
      startLive: We({
        baselineTime: function (e, t) {
          return e.timer.toggleLiveMode(!0), e.timer.start(), "TO_LIVE" === t.type && t.payload.baselineTime ? t.payload.baselineTime : Date.now();
        }
      }),
      addEvent: We(function (e, t) {
        var r = e.baselineTime,
          i = e.timer,
          o = e.events;
        if ("ADD_EVENT" === t.type) {
          var a = t.payload.event;
          Fe(a, r);
          var s = o.length - 1;
          if (!o[s] || o[s].timestamp <= a.timestamp) o.push(a);else {
            for (var l = -1, c = 0; c <= s;) {
              var u = Math.floor((c + s) / 2);
              o[u].timestamp <= a.timestamp ? c = u + 1 : s = u - 1;
            }
            -1 === l && (l = c), o.splice(l, 0, a);
          }
          var d = a.timestamp < r,
            f = n(a, d);
          d ? f() : i.isActive() && i.addAction({
            doAction: function () {
              f();
            },
            delay: a.delay
          });
        }
        return J(J({}, e), {
          events: o
        });
      })
    }
  }));
}
var Qe;
function Je(e, t) {
  var n = e[t[0]];
  return 1 === t.length ? n : Je(n.cssRules[t[1]].cssRules, t.slice(2));
}
function Ke(e) {
  var t = ee([], Z(e), !1),
    n = t.pop();
  return {
    positions: t,
    index: n
  };
}
function Ze(e, t) {
  var n = t.sheet;
  n && e.forEach(function (e) {
    if (e.type === Qe.Insert) try {
      if (Array.isArray(e.index)) {
        var r = Ke(e.index),
          i = r.positions,
          o = r.index;
        Je(n.cssRules, i).insertRule(e.cssText, o);
      } else n.insertRule(e.cssText, e.index);
    } catch (e) {} else if (e.type === Qe.Remove) try {
      if (Array.isArray(e.index)) {
        var a = Ke(e.index);
        i = a.positions, o = a.index;
        Je(n.cssRules, i).deleteRule(o || 0);
      } else n.deleteRule(e.index);
    } catch (e) {} else if (e.type === Qe.Snapshot) !function (e, t) {
      var n;
      try {
        var r = Array.from((null === (n = t.sheet) || void 0 === n ? void 0 : n.cssRules) || []).map(function (e) {
            return e.cssText;
          }),
          i = Object.entries(r).reverse(),
          o = r.length;
        i.forEach(function (n) {
          var r,
            i = Z(n, 2),
            a = i[0],
            s = i[1],
            l = e.indexOf(s);
          if (-1 === l || l > o) try {
            null === (r = t.sheet) || void 0 === r || r.deleteRule(Number(a));
          } catch (e) {}
          o = l;
        }), e.forEach(function (e, n) {
          var r, i, o;
          try {
            (null === (i = null === (r = t.sheet) || void 0 === r ? void 0 : r.cssRules[n]) || void 0 === i ? void 0 : i.cssText) !== e && (null === (o = t.sheet) || void 0 === o || o.insertRule(e, n));
          } catch (e) {}
        });
      } catch (e) {}
    }(e.cssTexts, t);else if (e.type === Qe.SetProperty) {
      Je(n.cssRules, e.index).style.setProperty(e.property, e.value, e.priority);
    } else if (e.type === Qe.RemoveProperty) {
      Je(n.cssRules, e.index).style.removeProperty(e.property);
    }
  });
}
!function (e) {
  e[e.Insert = 0] = "Insert", e[e.Remove = 1] = "Remove", e[e.Snapshot = 2] = "Snapshot", e[e.SetProperty = 3] = "SetProperty", e[e.RemoveProperty = 4] = "RemoveProperty";
}(Qe || (Qe = {}));
var et = new Map();
function tt(e, t) {
  var n = et.get(e);
  return n || (n = new Map(), et.set(e, n)), n.has(t) || n.set(t, []), n.get(t);
}
var nt = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
function rt(e, t) {
  return function (n) {
    if (n && "object" == typeof n && "rr_type" in n) {
      if ("index" in n) {
        var r = n.rr_type,
          i = n.index;
        return tt(t, r)[i];
      }
      if ("args" in n) {
        var o = n.rr_type,
          a = n.args,
          s = window[o];
        return new (s.bind.apply(s, ee([void 0], Z(a.map(rt(e, t))), !1)))();
      }
      if ("base64" in n) return function (e) {
        var t,
          n,
          r,
          i,
          o,
          a = .75 * e.length,
          s = e.length,
          l = 0;
        "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
        var c = new ArrayBuffer(a),
          u = new Uint8Array(c);
        for (t = 0; t < s; t += 4) n = Ne[e.charCodeAt(t)], r = Ne[e.charCodeAt(t + 1)], i = Ne[e.charCodeAt(t + 2)], o = Ne[e.charCodeAt(t + 3)], u[l++] = n << 2 | r >> 4, u[l++] = (15 & r) << 4 | i >> 2, u[l++] = (3 & i) << 6 | 63 & o;
        return c;
      }(n.base64);
      if ("src" in n) {
        var l = e.get(n.src);
        if (l) return l;
        var c = new Image();
        return c.src = n.src, e.set(n.src, c), c;
      }
    } else if (Array.isArray(n)) return n.map(rt(e, t));
    return n;
  };
}
function it(e) {
  var t = e.mutation,
    n = e.target,
    r = e.type,
    i = e.imageMap,
    o = e.errorHandler;
  try {
    var a = function (e, t) {
      try {
        return t === ue.WebGL ? e.getContext("webgl") || e.getContext("experimental-webgl") : e.getContext("webgl2");
      } catch (e) {
        return null;
      }
    }(n, r);
    if (!a) return;
    if (t.setter) return void (a[t.property] = t.args[0]);
    var s = a[t.property],
      l = t.args.map(rt(i, a));
    !function (e, t) {
      if (null == t ? void 0 : t.constructor) {
        var n = t.constructor.name;
        if (nt.includes(n)) {
          var r = tt(e, n);
          r.includes(t) || r.push(t);
        }
      }
    }(a, s.apply(a, l));
  } catch (e) {
    o(t, e);
  }
}
var ot = _e || $e,
  at = {
    duration: 500,
    lineCap: "round",
    lineWidth: 3,
    strokeStyle: "red"
  };
function st(e) {
  return e.type == se.IncrementalSnapshot && (e.data.source == le.TouchMove || e.data.source == le.MouseInteraction && e.data.type == ce.TouchStart);
}
var lt = function () {
    function e(e, t) {
      var n = this;
      if (this.mouseTail = null, this.tailPositions = [], this.emitter = ot(), this.legacy_missingNodeRetryMap = {}, this.cache = ve(), this.imageMap = new Map(), this.mirror = {
        map: {},
        getId: function (e) {
          return e && e.__sn ? e.__sn.id : -1;
        },
        getNode: function (e) {
          return this.map[e] || null;
        },
        removeNodeFromMap: function (e) {
          var t = this,
            n = e.__sn && e.__sn.id;
          delete this.map[n], e.childNodes && e.childNodes.forEach(function (e) {
            return t.removeNodeFromMap(e);
          });
        },
        has: function (e) {
          return this.map.hasOwnProperty(e);
        },
        reset: function () {
          this.map = {};
        }
      }, this.firstFullSnapshot = null, this.newDocumentQueue = [], this.mousePos = null, this.touchActive = null, !(null == t ? void 0 : t.liveMode) && e.length < 2) throw new Error("Replayer need at least 2 events.");
      var r = {
        speed: 1,
        maxSpeed: 360,
        root: document.body,
        loadTimeout: 0,
        skipInactive: !1,
        showWarning: !0,
        showDebug: !1,
        blockClass: "rr-block",
        liveMode: !1,
        insertStyleRules: [],
        triggerFocus: !0,
        UNSAFE_replayCanvas: !1,
        pauseAnimation: !0,
        mouseTail: at
      };
      this.config = Object.assign({}, r, t), this.handleResize = this.handleResize.bind(this), this.getCastFn = this.getCastFn.bind(this), this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this), this.emitter.on(fe.Resize, this.handleResize), this.setupDom(), this.treeIndex = new Se(), this.fragmentParentMap = new Map(), this.elementStateMap = new Map(), this.virtualStyleRulesMap = new Map(), this.emitter.on(fe.Flush, function () {
        var e,
          t,
          r,
          i,
          o,
          a,
          s,
          l,
          c = n.treeIndex.flush(),
          u = c.scrollMap,
          d = c.inputMap,
          f = c.mutationData;
        n.fragmentParentMap.forEach(function (e, t) {
          return n.restoreRealParent(t, e);
        });
        try {
          for (var p = K(f.texts), h = p.next(); !h.done; h = p.next()) {
            var m = h.value;
            n.applyText(m, f);
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            h && !h.done && (t = p.return) && t.call(p);
          } finally {
            if (e) throw e.error;
          }
        }
        try {
          for (var v = K(n.virtualStyleRulesMap.keys()), y = v.next(); !y.done; y = v.next()) {
            var g = y.value;
            n.restoreNodeSheet(g);
          }
        } catch (e) {
          r = {
            error: e
          };
        } finally {
          try {
            y && !y.done && (i = v.return) && i.call(v);
          } finally {
            if (r) throw r.error;
          }
        }
        n.fragmentParentMap.clear(), n.elementStateMap.clear(), n.virtualStyleRulesMap.clear();
        try {
          for (var b = K(u.values()), w = b.next(); !w.done; w = b.next()) {
            m = w.value;
            n.applyScroll(m, !0);
          }
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            w && !w.done && (a = b.return) && a.call(b);
          } finally {
            if (o) throw o.error;
          }
        }
        try {
          for (var x = K(d.values()), S = x.next(); !S.done; S = x.next()) {
            m = S.value;
            n.applyInput(m);
          }
        } catch (e) {
          s = {
            error: e
          };
        } finally {
          try {
            S && !S.done && (l = x.return) && l.call(x);
          } finally {
            if (s) throw s.error;
          }
        }
      }), this.emitter.on(fe.PlayBack, function () {
        n.firstFullSnapshot = null, n.mirror.reset();
      });
      var i = new Le([], (null == t ? void 0 : t.speed) || r.speed);
      this.service = Xe({
        events: e.map(function (e) {
          return t && t.unpackFn ? t.unpackFn(e) : e;
        }).sort(function (e, t) {
          return e.timestamp - t.timestamp;
        }),
        timer: i,
        timeOffset: 0,
        baselineTime: 0,
        lastPlayedEvent: null
      }, {
        getCastFn: this.getCastFn,
        applyEventsSynchronously: this.applyEventsSynchronously,
        emitter: this.emitter
      }), this.service.start(), this.service.subscribe(function (e) {
        n.emitter.emit(fe.StateChange, {
          player: e
        });
      }), this.speedService = Ye(Ve({
        id: "speed",
        context: {
          normalSpeed: -1,
          timer: i
        },
        initial: "normal",
        states: {
          normal: {
            on: {
              FAST_FORWARD: {
                target: "skipping",
                actions: ["recordSpeed", "setSpeed"]
              },
              SET_SPEED: {
                target: "normal",
                actions: ["setSpeed"]
              }
            }
          },
          skipping: {
            on: {
              BACK_TO_NORMAL: {
                target: "normal",
                actions: ["restoreSpeed"]
              },
              SET_SPEED: {
                target: "normal",
                actions: ["setSpeed"]
              }
            }
          }
        }
      }, {
        actions: {
          setSpeed: function (e, t) {
            "payload" in t && e.timer.setSpeed(t.payload.speed);
          },
          recordSpeed: We({
            normalSpeed: function (e) {
              return e.timer.speed;
            }
          }),
          restoreSpeed: function (e) {
            e.timer.setSpeed(e.normalSpeed);
          }
        }
      })), this.speedService.start(), this.speedService.subscribe(function (e) {
        n.emitter.emit(fe.StateChange, {
          speed: e
        });
      });
      var o = this.service.state.context.events.find(function (e) {
          return e.type === se.Meta;
        }),
        a = this.service.state.context.events.find(function (e) {
          return e.type === se.FullSnapshot;
        });
      if (o) {
        var s = o.data,
          l = s.width,
          c = s.height;
        setTimeout(function () {
          n.emitter.emit(fe.Resize, {
            width: l,
            height: c
          });
        }, 0);
      }
      a && setTimeout(function () {
        n.firstFullSnapshot || (n.firstFullSnapshot = a, n.rebuildFullSnapshot(a), n.iframe.contentWindow.scrollTo(a.data.initialOffset));
      }, 1), this.service.state.context.events.find(st) && this.mouse.classList.add("touch-device");
    }
    return Object.defineProperty(e.prototype, "timer", {
      get: function () {
        return this.service.state.context.timer;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.on = function (e, t) {
      return this.emitter.on(e, t), this;
    }, e.prototype.off = function (e, t) {
      return this.emitter.off(e, t), this;
    }, e.prototype.setConfig = function (e) {
      var t = this;
      Object.keys(e).forEach(function (n) {
        t.config[n] = e[n];
      }), this.config.skipInactive || this.backToNormal(), void 0 !== e.speed && this.speedService.send({
        type: "SET_SPEED",
        payload: {
          speed: e.speed
        }
      }), void 0 !== e.mouseTail && (!1 === e.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail.height = Number.parseFloat(this.iframe.height), this.mouseTail.classList.add("replayer-mouse-tail"), this.wrapper.insertBefore(this.mouseTail, this.iframe)), this.mouseTail.style.display = "inherit"));
    }, e.prototype.getMetaData = function () {
      var e = this.service.state.context.events[0],
        t = this.service.state.context.events[this.service.state.context.events.length - 1];
      return {
        startTime: e.timestamp,
        endTime: t.timestamp,
        totalTime: t.timestamp - e.timestamp
      };
    }, e.prototype.getCurrentTime = function () {
      return this.timer.timeOffset + this.getTimeOffset();
    }, e.prototype.getTimeOffset = function () {
      var e = this.service.state.context;
      return e.baselineTime - e.events[0].timestamp;
    }, e.prototype.getMirror = function () {
      return this.mirror;
    }, e.prototype.play = function (e) {
      var t;
      void 0 === e && (e = 0), this.service.state.matches("paused") || this.service.send({
        type: "PAUSE"
      }), this.service.send({
        type: "PLAY",
        payload: {
          timeOffset: e
        }
      }), null === (t = this.iframe.contentDocument) || void 0 === t || t.getElementsByTagName("html")[0].classList.remove("rrweb-paused"), this.emitter.emit(fe.Start);
    }, e.prototype.pause = function (e) {
      var t;
      void 0 === e && this.service.state.matches("playing") && this.service.send({
        type: "PAUSE"
      }), "number" == typeof e && (this.play(e), this.service.send({
        type: "PAUSE"
      })), null === (t = this.iframe.contentDocument) || void 0 === t || t.getElementsByTagName("html")[0].classList.add("rrweb-paused"), this.emitter.emit(fe.Pause);
    }, e.prototype.resume = function (e) {
      void 0 === e && (e = 0), console.warn("The 'resume' will be departed in 1.0. Please use 'play' method which has the same interface."), this.play(e), this.emitter.emit(fe.Resume);
    }, e.prototype.startLive = function (e) {
      this.service.send({
        type: "TO_LIVE",
        payload: {
          baselineTime: e
        }
      });
    }, e.prototype.addEvent = function (e) {
      var t = this,
        n = this.config.unpackFn ? this.config.unpackFn(e) : e;
      st(n) && this.mouse.classList.add("touch-device"), Promise.resolve().then(function () {
        return t.service.send({
          type: "ADD_EVENT",
          payload: {
            event: n
          }
        });
      });
    }, e.prototype.enableInteract = function () {
      this.iframe.setAttribute("scrolling", "auto"), this.iframe.style.pointerEvents = "auto";
    }, e.prototype.disableInteract = function () {
      this.iframe.setAttribute("scrolling", "no"), this.iframe.style.pointerEvents = "none";
    }, e.prototype.resetCache = function () {
      this.cache = ve();
    }, e.prototype.setupDom = function () {
      this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), !1 !== this.config.mouseTail && (this.mouseTail = document.createElement("canvas"), this.mouseTail.classList.add("replayer-mouse-tail"), this.mouseTail.style.display = "inherit", this.wrapper.appendChild(this.mouseTail)), this.iframe = document.createElement("iframe");
      var e,
        t = ["allow-same-origin"];
      this.config.UNSAFE_replayCanvas && t.push("allow-scripts"), this.iframe.style.display = "none", this.iframe.setAttribute("sandbox", t.join(" ")), this.disableInteract(), this.wrapper.appendChild(this.iframe), this.iframe.contentWindow && this.iframe.contentDocument && (De(this.iframe.contentWindow, this.iframe.contentDocument), void 0 === (e = this.iframe.contentWindow) && (e = window), "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = function (e) {
        if (!(0 in arguments)) throw new TypeError("1 argument is required");
        do {
          if (this === e) return !0;
        } while (e = e && e.parentNode);
        return !1;
      }));
    }, e.prototype.handleResize = function (e) {
      var t, n;
      this.iframe.style.display = "inherit";
      try {
        for (var r = K([this.mouseTail, this.iframe]), i = r.next(); !i.done; i = r.next()) {
          var o = i.value;
          o && (o.setAttribute("width", String(e.width)), o.setAttribute("height", String(e.height)));
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          i && !i.done && (n = r.return) && n.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.applyEventsSynchronously = function (e) {
      var t, n;
      try {
        for (var r = K(e), i = r.next(); !i.done; i = r.next()) {
          var o = i.value;
          switch (o.type) {
            case se.DomContentLoaded:
            case se.Load:
            case se.Custom:
              continue;
            case se.FullSnapshot:
            case se.Meta:
            case se.Plugin:
              break;
            case se.IncrementalSnapshot:
              switch (o.data.source) {
                case le.MediaInteraction:
                  continue;
              }
          }
          this.getCastFn(o, !0)();
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          i && !i.done && (n = r.return) && n.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
      this.mousePos && this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), this.mousePos = null, !0 === this.touchActive ? this.mouse.classList.add("touch-active") : !1 === this.touchActive && this.mouse.classList.remove("touch-active"), this.touchActive = null;
    }, e.prototype.getCastFn = function (e, t) {
      var n,
        r = this;
      switch (void 0 === t && (t = !1), e.type) {
        case se.DomContentLoaded:
        case se.Load:
          break;
        case se.Custom:
          n = function () {
            r.emitter.emit(fe.CustomEvent, e);
          };
          break;
        case se.Meta:
          n = function () {
            return r.emitter.emit(fe.Resize, {
              width: e.data.width,
              height: e.data.height
            });
          };
          break;
        case se.FullSnapshot:
          n = function () {
            if (r.firstFullSnapshot) {
              if (r.firstFullSnapshot === e) return void (r.firstFullSnapshot = !0);
            } else r.firstFullSnapshot = !0;
            r.rebuildFullSnapshot(e, t), r.iframe.contentWindow.scrollTo(e.data.initialOffset);
          };
          break;
        case se.IncrementalSnapshot:
          n = function () {
            var n, i;
            if (r.applyIncremental(e, t), !t && (e === r.nextUserInteractionEvent && (r.nextUserInteractionEvent = null, r.backToNormal()), r.config.skipInactive && !r.nextUserInteractionEvent)) {
              try {
                for (var o = K(r.service.state.context.events), a = o.next(); !a.done; a = o.next()) {
                  var s = a.value;
                  if (!(s.timestamp <= e.timestamp) && r.isUserInteraction(s)) {
                    s.delay - e.delay > 1e4 * r.speedService.state.context.timer.speed && (r.nextUserInteractionEvent = s);
                    break;
                  }
                }
              } catch (e) {
                n = {
                  error: e
                };
              } finally {
                try {
                  a && !a.done && (i = o.return) && i.call(o);
                } finally {
                  if (n) throw n.error;
                }
              }
              if (r.nextUserInteractionEvent) {
                var l = r.nextUserInteractionEvent.delay - e.delay,
                  c = {
                    speed: Math.min(Math.round(l / 5e3), r.config.maxSpeed)
                  };
                r.speedService.send({
                  type: "FAST_FORWARD",
                  payload: c
                }), r.emitter.emit(fe.SkipStart, c);
              }
            }
          };
      }
      return function () {
        var i, o;
        n && n();
        try {
          for (var a = K(r.config.plugins || []), s = a.next(); !s.done; s = a.next()) {
            s.value.handler(e, t, {
              replayer: r
            });
          }
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            s && !s.done && (o = a.return) && o.call(a);
          } finally {
            if (i) throw i.error;
          }
        }
        r.service.send({
          type: "CAST_EVENT",
          payload: {
            event: e
          }
        });
        var l = r.service.state.context.events.length - 1;
        if (e === r.service.state.context.events[l]) {
          var c = function () {
            l < r.service.state.context.events.length - 1 || (r.backToNormal(), r.service.send("END"), r.emitter.emit(fe.Finish));
          };
          e.type === se.IncrementalSnapshot && e.data.source === le.MouseMove && e.data.positions.length ? setTimeout(function () {
            c();
          }, Math.max(0, 50 - e.data.positions[0].timeOffset)) : c();
        }
        r.emitter.emit(fe.EventCast, e);
      };
    }, e.prototype.rebuildFullSnapshot = function (e, t) {
      var n,
        r,
        i = this;
      if (void 0 === t && (t = !1), !this.iframe.contentDocument) return console.warn("Looks like your replayer has been destroyed.");
      Object.keys(this.legacy_missingNodeRetryMap).length && console.warn("Found unresolved missing node map", this.legacy_missingNodeRetryMap), this.legacy_missingNodeRetryMap = {};
      var o = [];
      this.mirror.map = be(e.data.node, {
        doc: this.iframe.contentDocument,
        afterAppend: function (e) {
          i.collectIframeAndAttachDocument(o, e);
        },
        cache: this.cache
      })[1];
      var a = function (e, t) {
          s.attachDocumentToIframe(e, t), s.newDocumentQueue = s.newDocumentQueue.filter(function (t) {
            return t !== e;
          });
        },
        s = this;
      try {
        for (var l = K(o), c = l.next(); !c.done; c = l.next()) {
          var u = c.value;
          a(u.mutationInQueue, u.builtNode);
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          c && !c.done && (r = l.return) && r.call(l);
        } finally {
          if (n) throw n.error;
        }
      }
      var d = this.iframe.contentDocument,
        f = d.documentElement,
        p = d.head;
      this.insertStyleRules(f, p), this.service.state.matches("playing") || this.iframe.contentDocument.getElementsByTagName("html")[0].classList.add("rrweb-paused"), this.emitter.emit(fe.FullsnapshotRebuilded, e), t || this.waitForStylesheetLoad(), this.config.UNSAFE_replayCanvas && this.preloadAllImages();
    }, e.prototype.insertStyleRules = function (e, t) {
      var n = document.createElement("style");
      e.insertBefore(n, t);
      var r,
        i = (r = this.config.blockClass, [".".concat(r, " { background: currentColor }"), "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
      this.config.pauseAnimation && i.push("html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }");
      for (var o = 0; o < i.length; o++) n.sheet.insertRule(i[o], o);
    }, e.prototype.attachDocumentToIframe = function (e, t) {
      var n,
        r,
        i = this,
        o = [];
      if (!t.contentDocument) for (var a = t.parentNode; a;) {
        if (this.fragmentParentMap.has(a)) {
          var s = a,
            l = this.fragmentParentMap.get(s);
          this.restoreRealParent(s, l);
          break;
        }
        a = a.parentNode;
      }
      ge(e.node, {
        doc: t.contentDocument,
        map: this.mirror.map,
        hackCss: !0,
        skipChild: !1,
        afterAppend: function (e) {
          if (i.collectIframeAndAttachDocument(o, e), e.__sn.type === Q.Element && "HTML" === e.__sn.tagName.toUpperCase()) {
            var n = t.contentDocument,
              r = n.documentElement,
              a = n.head;
            i.insertStyleRules(r, a);
          }
        },
        cache: this.cache
      });
      var c = function (e, t) {
          u.attachDocumentToIframe(e, t), u.newDocumentQueue = u.newDocumentQueue.filter(function (t) {
            return t !== e;
          });
        },
        u = this;
      try {
        for (var d = K(o), f = d.next(); !f.done; f = d.next()) {
          var p = f.value;
          c(p.mutationInQueue, p.builtNode);
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          f && !f.done && (r = d.return) && r.call(d);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.collectIframeAndAttachDocument = function (e, t) {
      if (Me(t)) {
        var n = this.newDocumentQueue.find(function (e) {
          return e.parentId === t.__sn.id;
        });
        n && e.push({
          mutationInQueue: n,
          builtNode: t
        });
      }
    }, e.prototype.waitForStylesheetLoad = function () {
      var e,
        t = this,
        n = null === (e = this.iframe.contentDocument) || void 0 === e ? void 0 : e.head;
      if (n) {
        var r,
          i = new Set(),
          o = this.service.state,
          a = function () {
            o = t.service.state;
          };
        this.emitter.on(fe.Start, a), this.emitter.on(fe.Pause, a);
        var s = function () {
          t.emitter.off(fe.Start, a), t.emitter.off(fe.Pause, a);
        };
        n.querySelectorAll('link[rel="stylesheet"]').forEach(function (e) {
          e.sheet || (i.add(e), e.addEventListener("load", function () {
            i.delete(e), 0 === i.size && -1 !== r && (o.matches("playing") && t.play(t.getCurrentTime()), t.emitter.emit(fe.LoadStylesheetEnd), r && clearTimeout(r), s());
          }));
        }), i.size > 0 && (this.service.send({
          type: "PAUSE"
        }), this.emitter.emit(fe.LoadStylesheetStart), r = setTimeout(function () {
          o.matches("playing") && t.play(t.getCurrentTime()), r = -1, s();
        }, this.config.loadTimeout));
      }
    }, e.prototype.hasImageArg = function (e) {
      var t, n;
      try {
        for (var r = K(e), i = r.next(); !i.done; i = r.next()) {
          var o = i.value;
          if (o && "object" == typeof o) {
            if ("rr_type" in o && "args" in o) {
              if (this.hasImageArg(o.args)) return !0;
            } else {
              if ("rr_type" in o && "HTMLImageElement" === o.rr_type) return !0;
              if (o instanceof Array && this.hasImageArg(o)) return !0;
            }
          } else ;
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          i && !i.done && (n = r.return) && n.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
      return !1;
    }, e.prototype.getImageArgs = function (e) {
      var t,
        n,
        r = [];
      try {
        for (var i = K(e), o = i.next(); !o.done; o = i.next()) {
          var a = o.value;
          a && "object" == typeof a && ("rr_type" in a && "args" in a ? r.push.apply(r, ee([], Z(this.getImageArgs(a.args)), !1)) : "rr_type" in a && "HTMLImageElement" === a.rr_type ? r.push(a.src) : a instanceof Array && r.push.apply(r, ee([], Z(this.getImageArgs(a)), !1)));
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          o && !o.done && (n = i.return) && n.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
      return r;
    }, e.prototype.preloadAllImages = function () {
      var e,
        t,
        n = this;
      this.service.state;
      var r = function () {
        n.service.state;
      };
      this.emitter.on(fe.Start, r), this.emitter.on(fe.Pause, r);
      var i = function (e) {
          e.type === se.IncrementalSnapshot && e.data.source === le.CanvasMutation && ("commands" in e.data ? e.data.commands.forEach(function (t) {
            return n.preloadImages(t, e);
          }) : o.preloadImages(e.data, e));
        },
        o = this;
      try {
        for (var a = K(this.service.state.context.events), s = a.next(); !s.done; s = a.next()) {
          i(s.value);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          s && !s.done && (t = a.return) && t.call(a);
        } finally {
          if (e) throw e.error;
        }
      }
    }, e.prototype.preloadImages = function (e, t) {
      var n = this;
      if ("drawImage" !== e.property || "string" != typeof e.args[0] || this.imageMap.has(t)) this.hasImageArg(e.args) && this.getImageArgs(e.args).forEach(function (e) {
        var t = new Image();
        t.src = e, n.imageMap.set(e, t);
      });else {
        var r = document.createElement("canvas"),
          i = r.getContext("2d"),
          o = null == i ? void 0 : i.createImageData(r.width, r.height);
        null == o || o.data, JSON.parse(e.args[0]), null == i || i.putImageData(o, 0, 0);
      }
    }, e.prototype.applyIncremental = function (e, t) {
      var n,
        r,
        i = this,
        o = e.data;
      switch (o.source) {
        case le.Mutation:
          t && (o.adds.forEach(function (e) {
            return i.treeIndex.add(e);
          }), o.texts.forEach(function (e) {
            var t = i.mirror.getNode(e.id),
              n = null == t ? void 0 : t.parentNode;
            n && i.virtualStyleRulesMap.has(n) && i.virtualStyleRulesMap.delete(n), i.treeIndex.text(e);
          }), o.attributes.forEach(function (e) {
            return i.treeIndex.attribute(e);
          }), o.removes.forEach(function (e) {
            return i.treeIndex.remove(e, i.mirror);
          }));
          try {
            this.applyMutation(o, t);
          } catch (e) {
            this.warn("Exception in mutation ".concat(e.message || e), o);
          }
          break;
        case le.Drag:
        case le.TouchMove:
        case le.MouseMove:
          if (t) {
            var a = o.positions[o.positions.length - 1];
            this.mousePos = {
              x: a.x,
              y: a.y,
              id: a.id,
              debugData: o
            };
          } else o.positions.forEach(function (n) {
            var r = {
              doAction: function () {
                i.moveAndHover(n.x, n.y, n.id, t, o);
              },
              delay: n.timeOffset + e.timestamp - i.service.state.context.baselineTime
            };
            i.timer.addAction(r);
          }), this.timer.addAction({
            doAction: function () {},
            delay: e.delay - (null === (n = o.positions[0]) || void 0 === n ? void 0 : n.timeOffset)
          });
          break;
        case le.MouseInteraction:
          if (-1 === o.id) break;
          var s = new Event(ce[o.type].toLowerCase());
          if (!(g = this.mirror.getNode(o.id))) return this.debugNodeNotFound(o, o.id);
          this.emitter.emit(fe.MouseInteraction, {
            type: o.type,
            target: g
          });
          var l = this.config.triggerFocus;
          switch (o.type) {
            case ce.Blur:
              "blur" in g && g.blur();
              break;
            case ce.Focus:
              l && g.focus && g.focus({
                preventScroll: !0
              });
              break;
            case ce.Click:
            case ce.TouchStart:
            case ce.TouchEnd:
              t ? (o.type === ce.TouchStart ? this.touchActive = !0 : o.type === ce.TouchEnd && (this.touchActive = !1), this.mousePos = {
                x: o.x,
                y: o.y,
                id: o.id,
                debugData: o
              }) : (o.type === ce.TouchStart && (this.tailPositions.length = 0), this.moveAndHover(o.x, o.y, o.id, t, o), o.type === ce.Click ? (this.mouse.classList.remove("active"), this.mouse.offsetWidth, this.mouse.classList.add("active")) : o.type === ce.TouchStart ? (this.mouse.offsetWidth, this.mouse.classList.add("touch-active")) : o.type === ce.TouchEnd && this.mouse.classList.remove("touch-active"));
              break;
            case ce.TouchCancel:
              t ? this.touchActive = !1 : this.mouse.classList.remove("touch-active");
              break;
            default:
              g.dispatchEvent(s);
          }
          break;
        case le.Scroll:
          if (-1 === o.id) break;
          if (t) {
            this.treeIndex.scroll(o);
            break;
          }
          this.applyScroll(o, !1);
          break;
        case le.ViewportResize:
          this.emitter.emit(fe.Resize, {
            width: o.width,
            height: o.height
          });
          break;
        case le.Input:
          if (-1 === o.id) break;
          if (t) {
            this.treeIndex.input(o);
            break;
          }
          this.applyInput(o);
          break;
        case le.MediaInteraction:
          if (!(g = this.mirror.getNode(o.id))) return this.debugNodeNotFound(o, o.id);
          var c = g;
          try {
            o.currentTime && (c.currentTime = o.currentTime), o.volume && (c.volume = o.volume), o.muted && (c.muted = o.muted), 1 === o.type && c.pause(), 0 === o.type && c.play();
          } catch (e) {
            this.config.showWarning && console.warn("Failed to replay media interactions: ".concat(e.message || e));
          }
          break;
        case le.StyleSheetRule:
          if (!(g = this.mirror.getNode(o.id))) return this.debugNodeNotFound(o, o.id);
          var u,
            d = g,
            f = g.parentNode,
            p = this.fragmentParentMap.has(f),
            h = p ? null : d.sheet;
          h || (this.virtualStyleRulesMap.has(g) ? u = this.virtualStyleRulesMap.get(g) : (u = [], this.virtualStyleRulesMap.set(g, u))), o.adds && o.adds.forEach(function (e) {
            var t = e.rule,
              n = e.index;
            if (h) try {
              if (Array.isArray(n)) {
                var r = Ke(n),
                  i = r.positions,
                  o = r.index;
                Je(h.cssRules, i).insertRule(t, o);
              } else {
                o = void 0 === n ? void 0 : Math.min(n, h.cssRules.length);
                h.insertRule(t, o);
              }
            } catch (e) {} else null == u || u.push({
              cssText: t,
              index: n,
              type: Qe.Insert
            });
          }), o.removes && o.removes.forEach(function (e) {
            var t = e.index;
            if (p) null == u || u.push({
              index: t,
              type: Qe.Remove
            });else try {
              if (Array.isArray(t)) {
                var n = Ke(t),
                  r = n.positions,
                  i = n.index;
                Je(h.cssRules, r).deleteRule(i || 0);
              } else null == h || h.deleteRule(t);
            } catch (e) {}
          });
          break;
        case le.StyleDeclaration:
          if (!(g = this.mirror.getNode(o.id))) return this.debugNodeNotFound(o, o.id);
          d = g;
          var m = g.parentNode,
            v = this.fragmentParentMap.has(m) ? null : d.sheet,
            y = [];
          if (v || (this.virtualStyleRulesMap.has(g) ? y = this.virtualStyleRulesMap.get(g) : (y = [], this.virtualStyleRulesMap.set(g, y))), o.set) if (v) Je(v.rules, o.index).style.setProperty(o.set.property, o.set.value, o.set.priority);else y.push(J({
            type: Qe.SetProperty,
            index: o.index
          }, o.set));
          if (o.remove) if (v) Je(v.rules, o.index).style.removeProperty(o.remove.property);else y.push(J({
            type: Qe.RemoveProperty,
            index: o.index
          }, o.remove));
          break;
        case le.CanvasMutation:
          if (!this.config.UNSAFE_replayCanvas) return;
          var g;
          if (!(g = this.mirror.getNode(o.id))) return this.debugNodeNotFound(o, o.id);
          !function (e) {
            var t = e.event,
              n = e.mutation,
              r = e.target,
              i = e.imageMap,
              o = e.errorHandler;
            try {
              var a = "commands" in n ? n.commands : [n];
              [ue.WebGL, ue.WebGL2].includes(n.type) ? a.forEach(function (e) {
                it({
                  mutation: e,
                  type: n.type,
                  target: r,
                  imageMap: i,
                  errorHandler: o
                });
              }) : a.forEach(function (e) {
                !function (e) {
                  var t = e.event,
                    n = e.mutation,
                    r = e.target,
                    i = e.imageMap,
                    o = e.errorHandler;
                  try {
                    var a = r.getContext("2d");
                    if (n.setter) return void (a[n.property] = n.args[0]);
                    var s = a[n.property];
                    if ("drawImage" === n.property && "string" == typeof n.args[0]) {
                      var l = i.get(t);
                      n.args[0] = l, s.apply(a, n.args);
                    } else s.apply(a, n.args);
                  } catch (e) {
                    o(n, e);
                  }
                }({
                  event: t,
                  mutation: e,
                  target: r,
                  imageMap: i,
                  errorHandler: o
                });
              });
            } catch (e) {
              o(n, e);
            }
          }({
            event: e,
            mutation: o,
            target: g,
            imageMap: this.imageMap,
            errorHandler: this.warnCanvasMutationFailed.bind(this)
          });
          break;
        case le.Font:
          try {
            var b = new FontFace(o.family, o.buffer ? new Uint8Array(JSON.parse(o.fontSource)) : o.fontSource, o.descriptors);
            null === (r = this.iframe.contentDocument) || void 0 === r || r.fonts.add(b);
          } catch (e) {
            this.config.showWarning && console.warn(e);
          }
      }
    }, e.prototype.applyMutation = function (e, t) {
      var n,
        r,
        i = this;
      e.removes.forEach(function (t) {
        var n = i.mirror.getNode(t.id);
        if (!n) {
          if (e.removes.find(function (e) {
            return e.id === t.parentId;
          })) return;
          return i.warnNodeNotFound(e, t.id);
        }
        i.virtualStyleRulesMap.has(n) && i.virtualStyleRulesMap.delete(n);
        var r = i.mirror.getNode(t.parentId);
        if (!r) return i.warnNodeNotFound(e, t.parentId);
        if (t.isShadow && Ce(r) && (r = r.shadowRoot), i.mirror.removeNodeFromMap(n), r) {
          var o = null,
            a = "__sn" in r ? i.fragmentParentMap.get(r) : void 0;
          a && a.contains(n) ? r = a : i.fragmentParentMap.has(n) && (o = i.fragmentParentMap.get(n), i.fragmentParentMap.delete(n), n = o);
          try {
            r.removeChild(n);
          } catch (t) {
            if (!(t instanceof DOMException)) throw t;
            i.warn("parent could not remove child in mutation", r, a, n, o, e);
          }
        }
      });
      var o = J({}, this.legacy_missingNodeRetryMap),
        a = [],
        s = function (e) {
          var n, r, s, l;
          if (!i.iframe.contentDocument) return console.warn("Looks like your replayer has been destroyed.");
          var c = i.mirror.getNode(e.parentId);
          if (!c) return e.node.type === Q.Document ? i.newDocumentQueue.push(e) : a.push(e);
          var u = null;
          i.iframe.contentDocument.contains ? u = i.iframe.contentDocument.contains(c) : i.iframe.contentDocument.body.contains && (u = i.iframe.contentDocument.body.contains(c));
          var d = (null === (l = (s = c).getElementsByTagName) || void 0 === l ? void 0 : l.call(s, "iframe").length) > 0;
          if (t && u && !Me(c) && !d) {
            var f = document.createDocumentFragment();
            for (i.mirror.map[e.parentId] = f, i.fragmentParentMap.set(f, c), i.storeState(c); c.firstChild;) f.appendChild(c.firstChild);
            c = f;
          }
          e.node.isShadow && (Ce(c) || c.attachShadow({
            mode: "open"
          }), c = c.shadowRoot);
          var p = null,
            h = null;
          if (e.previousId && (p = i.mirror.getNode(e.previousId)), e.nextId && (h = i.mirror.getNode(e.nextId)), function (e) {
            var t = null;
            return e.nextId && (t = i.mirror.getNode(e.nextId)), null !== e.nextId && void 0 !== e.nextId && -1 !== e.nextId && !t;
          }(e)) return a.push(e);
          if (!e.node.rootId || i.mirror.getNode(e.node.rootId)) {
            var m = e.node.rootId ? i.mirror.getNode(e.node.rootId) : i.iframe.contentDocument;
            if (Me(c)) i.attachDocumentToIframe(e, c);else {
              var v = ge(e.node, {
                doc: m,
                map: i.mirror.map,
                skipChild: !0,
                hackCss: !0,
                cache: i.cache
              });
              if (-1 !== e.previousId && -1 !== e.nextId) {
                if ("__sn" in c && c.__sn.type === Q.Element && "textarea" === c.__sn.tagName && e.node.type === Q.Text) try {
                  for (var y = K(Array.from(c.childNodes)), g = y.next(); !g.done; g = y.next()) {
                    var b = g.value;
                    b.nodeType === c.TEXT_NODE && c.removeChild(b);
                  }
                } catch (e) {
                  n = {
                    error: e
                  };
                } finally {
                  try {
                    g && !g.done && (r = y.return) && r.call(y);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                if (p && p.nextSibling && p.nextSibling.parentNode) c.insertBefore(v, p.nextSibling);else if (h && h.parentNode) c.contains(h) ? c.insertBefore(v, h) : c.insertBefore(v, null);else {
                  if (c === m) for (; m.firstChild;) m.removeChild(m.firstChild);
                  c.appendChild(v);
                }
                if (Me(v)) {
                  var w = i.newDocumentQueue.find(function (e) {
                    return e.parentId === v.__sn.id;
                  });
                  w && (i.attachDocumentToIframe(w, v), i.newDocumentQueue = i.newDocumentQueue.filter(function (e) {
                    return e !== w;
                  }));
                }
                (e.previousId || e.nextId) && i.legacy_resolveMissingNode(o, c, v, e);
              } else o[e.node.id] = {
                node: v,
                mutation: e
              };
            }
          }
        };
      e.adds.forEach(function (e) {
        s(e);
      });
      for (var l = Date.now(); a.length;) {
        var c = Ee(a);
        if (a.length = 0, Date.now() - l > 500) {
          this.warn("Timeout in the loop, please check the resolve tree data:", c);
          break;
        }
        try {
          for (var u = (n = void 0, K(c)), d = u.next(); !d.done; d = u.next()) {
            var f = d.value;
            this.mirror.getNode(f.value.parentId) ? Te(f, function (e) {
              s(e);
            }) : this.debug("Drop resolve tree since there is no parent for the root node.", f);
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            d && !d.done && (r = u.return) && r.call(u);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      Object.keys(o).length && Object.assign(this.legacy_missingNodeRetryMap, o), e.texts.forEach(function (t) {
        var n = i.mirror.getNode(t.id);
        if (!n) {
          if (e.removes.find(function (e) {
            return e.id === t.id;
          })) return;
          return i.warnNodeNotFound(e, t.id);
        }
        i.fragmentParentMap.has(n) && (n = i.fragmentParentMap.get(n)), n.textContent = t.value;
      }), e.attributes.forEach(function (t) {
        var n = i.mirror.getNode(t.id);
        if (!n) {
          if (e.removes.find(function (e) {
            return e.id === t.id;
          })) return;
          return i.warnNodeNotFound(e, t.id);
        }
        for (var r in i.fragmentParentMap.has(n) && (n = i.fragmentParentMap.get(n)), t.attributes) if ("string" == typeof r) {
          var o = t.attributes[r];
          if (null === o) n.removeAttribute(r);else if ("string" == typeof o) try {
            n.setAttribute(r, o);
          } catch (e) {
            i.config.showWarning && console.warn("An error occurred may due to the checkout feature.", e);
          } else if ("style" === r) {
            var a = o,
              s = n;
            for (var l in a) if (!1 === a[l]) s.style.removeProperty(l);else if (a[l] instanceof Array) {
              var c = a[l];
              s.style.setProperty(l, c[0], c[1]);
            } else {
              var u = a[l];
              s.style.setProperty(l, u);
            }
          }
        }
      });
    }, e.prototype.applyScroll = function (e, t) {
      var n = this.mirror.getNode(e.id);
      if (!n) return this.debugNodeNotFound(e, e.id);
      if (n === this.iframe.contentDocument) this.iframe.contentWindow.scrollTo({
        top: e.y,
        left: e.x,
        behavior: t ? "auto" : "smooth"
      });else if (n.__sn.type === Q.Document) n.defaultView.scrollTo({
        top: e.y,
        left: e.x,
        behavior: t ? "auto" : "smooth"
      });else try {
        n.scrollTop = e.y, n.scrollLeft = e.x;
      } catch (e) {}
    }, e.prototype.applyInput = function (e) {
      var t = this.mirror.getNode(e.id);
      if (!t) return this.debugNodeNotFound(e, e.id);
      try {
        t.checked = e.isChecked, t.value = e.text;
      } catch (e) {}
    }, e.prototype.applyText = function (e, t) {
      var n = this.mirror.getNode(e.id);
      if (!n) return this.debugNodeNotFound(t, e.id);
      try {
        n.textContent = e.value;
      } catch (e) {}
    }, e.prototype.legacy_resolveMissingNode = function (e, t, n, r) {
      var i = r.previousId,
        o = r.nextId,
        a = i && e[i],
        s = o && e[o];
      if (a) {
        var l = a,
          c = l.node,
          u = l.mutation;
        t.insertBefore(c, n), delete e[u.node.id], delete this.legacy_missingNodeRetryMap[u.node.id], (u.previousId || u.nextId) && this.legacy_resolveMissingNode(e, t, c, u);
      }
      if (s) {
        var d = s;
        c = d.node, u = d.mutation;
        t.insertBefore(c, n.nextSibling), delete e[u.node.id], delete this.legacy_missingNodeRetryMap[u.node.id], (u.previousId || u.nextId) && this.legacy_resolveMissingNode(e, t, c, u);
      }
    }, e.prototype.moveAndHover = function (e, t, n, r, i) {
      var o = this.mirror.getNode(n);
      if (!o) return this.debugNodeNotFound(i, n);
      var a = ke(o, this.iframe),
        s = e * a.absoluteScale + a.x,
        l = t * a.absoluteScale + a.y;
      this.mouse.style.left = "".concat(s, "px"), this.mouse.style.top = "".concat(l, "px"), r || this.drawMouseTail({
        x: s,
        y: l
      }), this.hoverElements(o);
    }, e.prototype.drawMouseTail = function (e) {
      var t = this;
      if (this.mouseTail) {
        var n = !0 === this.config.mouseTail ? at : Object.assign({}, at, this.config.mouseTail),
          r = n.lineCap,
          i = n.lineWidth,
          o = n.strokeStyle,
          a = n.duration,
          s = function () {
            if (t.mouseTail) {
              var e = t.mouseTail.getContext("2d");
              e && t.tailPositions.length && (e.clearRect(0, 0, t.mouseTail.width, t.mouseTail.height), e.beginPath(), e.lineWidth = i, e.lineCap = r, e.strokeStyle = o, e.moveTo(t.tailPositions[0].x, t.tailPositions[0].y), t.tailPositions.forEach(function (t) {
                return e.lineTo(t.x, t.y);
              }), e.stroke());
            }
          };
        this.tailPositions.push(e), s(), setTimeout(function () {
          t.tailPositions = t.tailPositions.filter(function (t) {
            return t !== e;
          }), s();
        }, a / this.speedService.state.context.timer.speed);
      }
    }, e.prototype.hoverElements = function (e) {
      var t;
      null === (t = this.iframe.contentDocument) || void 0 === t || t.querySelectorAll(".\\:hover").forEach(function (e) {
        e.classList.remove(":hover");
      });
      for (var n = e; n;) n.classList && n.classList.add(":hover"), n = n.parentElement;
    }, e.prototype.isUserInteraction = function (e) {
      return e.type === se.IncrementalSnapshot && e.data.source > le.Mutation && e.data.source <= le.Input;
    }, e.prototype.backToNormal = function () {
      this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({
        type: "BACK_TO_NORMAL"
      }), this.emitter.emit(fe.SkipEnd, {
        speed: this.speedService.state.context.normalSpeed
      }));
    }, e.prototype.restoreRealParent = function (e, t) {
      this.mirror.map[t.__sn.id] = t, t.__sn.type === Q.Element && "textarea" === t.__sn.tagName && e.textContent && (t.value = e.textContent), t.appendChild(e), this.restoreState(t);
    }, e.prototype.storeState = function (e) {
      var t, n;
      if (e && e.nodeType === e.ELEMENT_NODE) {
        var r = e;
        (r.scrollLeft || r.scrollTop) && this.elementStateMap.set(e, {
          scroll: [r.scrollLeft, r.scrollTop]
        }), "STYLE" === r.tagName && function (e, t) {
          var n;
          try {
            var r = Array.from((null === (n = e.sheet) || void 0 === n ? void 0 : n.cssRules) || []).map(function (e) {
              return e.cssText;
            });
            t.set(e, [{
              type: Qe.Snapshot,
              cssTexts: r
            }]);
          } catch (e) {}
        }(r, this.virtualStyleRulesMap);
        var i = r.children;
        try {
          for (var o = K(Array.from(i)), a = o.next(); !a.done; a = o.next()) {
            var s = a.value;
            this.storeState(s);
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            a && !a.done && (n = o.return) && n.call(o);
          } finally {
            if (t) throw t.error;
          }
        }
      }
    }, e.prototype.restoreState = function (e) {
      var t, n;
      if (e.nodeType === e.ELEMENT_NODE) {
        var r = e;
        if (this.elementStateMap.has(e)) {
          var i = this.elementStateMap.get(e);
          i.scroll && (r.scrollLeft = i.scroll[0], r.scrollTop = i.scroll[1]), this.elementStateMap.delete(e);
        }
        var o = r.children;
        try {
          for (var a = K(Array.from(o)), s = a.next(); !s.done; s = a.next()) {
            var l = s.value;
            this.restoreState(l);
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            s && !s.done && (n = a.return) && n.call(a);
          } finally {
            if (t) throw t.error;
          }
        }
      }
    }, e.prototype.restoreNodeSheet = function (e) {
      var t = this.virtualStyleRulesMap.get(e);
      "STYLE" === e.nodeName && t && Ze(t, e);
    }, e.prototype.warnNodeNotFound = function (e, t) {
      this.treeIndex.idRemoved(t) ? this.warn("Node with id '".concat(t, "' was previously removed. "), e) : this.warn("Node with id '".concat(t, "' not found. "), e);
    }, e.prototype.warnCanvasMutationFailed = function (e, t) {
      this.warn("Has error on canvas update", t, "canvas mutation:", e);
    }, e.prototype.debugNodeNotFound = function (e, t) {
      this.treeIndex.idRemoved(t) ? this.debug("[replayer]", "Node with id '".concat(t, "' was previously removed. "), e) : this.debug("[replayer]", "Node with id '".concat(t, "' not found. "), e);
    }, e.prototype.warn = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.config.showWarning && console.warn.apply(console, ee(["[replayer]"], Z(e), !1));
    }, e.prototype.debug = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.config.showDebug && console.log.apply(console, ee(["[replayer]"], Z(e), !1));
    }, e;
  }(),
  ct = Uint8Array,
  ut = Uint16Array,
  dt = Uint32Array,
  ft = new ct([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
  pt = new ct([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
  ht = new ct([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
  mt = function (e, t) {
    for (var n = new ut(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
    var i = new dt(n[30]);
    for (r = 1; r < 30; ++r) for (var o = n[r]; o < n[r + 1]; ++o) i[o] = o - n[r] << 5 | r;
    return [n, i];
  },
  vt = mt(ft, 2),
  yt = vt[0],
  gt = vt[1];
yt[28] = 258, gt[258] = 28;
for (var bt = mt(pt, 0)[0], wt = new ut(32768), xt = 0; xt < 32768; ++xt) {
  var St = (43690 & xt) >>> 1 | (21845 & xt) << 1;
  St = (61680 & (St = (52428 & St) >>> 2 | (13107 & St) << 2)) >>> 4 | (3855 & St) << 4, wt[xt] = ((65280 & St) >>> 8 | (255 & St) << 8) >>> 1;
}
var Et = function (e, t, n) {
    for (var r = e.length, i = 0, o = new ut(t); i < r; ++i) ++o[e[i] - 1];
    var a,
      s = new ut(t);
    for (i = 0; i < t; ++i) s[i] = s[i - 1] + o[i - 1] << 1;
    if (n) {
      a = new ut(1 << t);
      var l = 15 - t;
      for (i = 0; i < r; ++i) if (e[i]) for (var c = i << 4 | e[i], u = t - e[i], d = s[e[i] - 1]++ << u, f = d | (1 << u) - 1; d <= f; ++d) a[wt[d] >>> l] = c;
    } else for (a = new ut(r), i = 0; i < r; ++i) a[i] = wt[s[e[i] - 1]++] >>> 15 - e[i];
    return a;
  },
  Tt = new ct(288);
for (xt = 0; xt < 144; ++xt) Tt[xt] = 8;
for (xt = 144; xt < 256; ++xt) Tt[xt] = 9;
for (xt = 256; xt < 280; ++xt) Tt[xt] = 7;
for (xt = 280; xt < 288; ++xt) Tt[xt] = 8;
var Mt = new ct(32);
for (xt = 0; xt < 32; ++xt) Mt[xt] = 5;
var kt = Et(Tt, 9, 1),
  Ct = Et(Mt, 5, 1),
  It = function (e) {
    for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
    return t;
  },
  Nt = function (e, t, n) {
    var r = t / 8 >> 0;
    return (e[r] | e[r + 1] << 8) >>> (7 & t) & n;
  },
  At = function (e, t) {
    var n = t / 8 >> 0;
    return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >>> (7 & t);
  },
  _t = function (e, t, n) {
    (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length);
    var r = new (e instanceof ut ? ut : e instanceof dt ? dt : ct)(n - t);
    return r.set(e.subarray(t, n)), r;
  };
function $t(e, t) {
  return function (e, t, n) {
    var r = e.length,
      i = !t || n,
      o = !n || n.i;
    n || (n = {}), t || (t = new ct(3 * r));
    var a,
      s = function (e) {
        var n = t.length;
        if (e > n) {
          var r = new ct(Math.max(2 * n, e));
          r.set(t), t = r;
        }
      },
      l = n.f || 0,
      c = n.p || 0,
      u = n.b || 0,
      d = n.l,
      f = n.d,
      p = n.m,
      h = n.n,
      m = 8 * r;
    do {
      if (!d) {
        n.f = l = Nt(e, c, 1);
        var v = Nt(e, c + 1, 3);
        if (c += 3, !v) {
          var y = e[(I = ((a = c) / 8 >> 0) + (7 & a && 1) + 4) - 4] | e[I - 3] << 8,
            g = I + y;
          if (g > r) {
            if (o) throw "unexpected EOF";
            break;
          }
          i && s(u + y), t.set(e.subarray(I, g), u), n.b = u += y, n.p = c = 8 * g;
          continue;
        }
        if (1 == v) d = kt, f = Ct, p = 9, h = 5;else {
          if (2 != v) throw "invalid block type";
          var b = Nt(e, c, 31) + 257,
            w = Nt(e, c + 10, 15) + 4,
            x = b + Nt(e, c + 5, 31) + 1;
          c += 14;
          for (var S = new ct(x), E = new ct(19), T = 0; T < w; ++T) E[ht[T]] = Nt(e, c + 3 * T, 7);
          c += 3 * w;
          var M = It(E),
            k = (1 << M) - 1;
          if (!o && c + x * (M + 7) > m) break;
          var C = Et(E, M, 1);
          for (T = 0; T < x;) {
            var I,
              N = C[Nt(e, c, k)];
            if (c += 15 & N, (I = N >>> 4) < 16) S[T++] = I;else {
              var A = 0,
                _ = 0;
              for (16 == I ? (_ = 3 + Nt(e, c, 3), c += 2, A = S[T - 1]) : 17 == I ? (_ = 3 + Nt(e, c, 7), c += 3) : 18 == I && (_ = 11 + Nt(e, c, 127), c += 7); _--;) S[T++] = A;
            }
          }
          var $ = S.subarray(0, b),
            D = S.subarray(b);
          p = It($), h = It(D), d = Et($, p, 1), f = Et(D, h, 1);
        }
        if (c > m) throw "unexpected EOF";
      }
      i && s(u + 131072);
      for (var R = (1 << p) - 1, L = (1 << h) - 1, F = p + h + 18; o || c + F < m;) {
        var P = (A = d[At(e, c) & R]) >>> 4;
        if ((c += 15 & A) > m) throw "unexpected EOF";
        if (!A) throw "invalid length/literal";
        if (P < 256) t[u++] = P;else {
          if (256 == P) {
            d = null;
            break;
          }
          var O = P - 254;
          if (P > 264) {
            var j = ft[T = P - 257];
            O = Nt(e, c, (1 << j) - 1) + yt[T], c += j;
          }
          var W = f[At(e, c) & L],
            B = W >>> 4;
          if (!W) throw "invalid distance";
          if (c += 15 & W, D = bt[B], B > 3 && (j = pt[B], D += At(e, c) & (1 << j) - 1, c += j), c > m) throw "unexpected EOF";
          i && s(u + 131072);
          for (var z = u + O; u < z; u += 4) t[u] = t[u - D], t[u + 1] = t[u + 1 - D], t[u + 2] = t[u + 2 - D], t[u + 3] = t[u + 3 - D];
          u = z;
        }
      }
      n.l = d, n.p = c, n.b = u, d && (l = 1, n.m = p, n.d = f, n.n = h);
    } while (!l);
    return u == t.length ? t : _t(t, 0, u);
  }((function (e) {
    if (8 != (15 & e[0]) || e[0] >>> 4 > 7 || (e[0] << 8 | e[1]) % 31) throw "invalid zlib data";
    if (32 & e[1]) throw "invalid zlib data: preset dictionaries not supported";
  }(e), e.subarray(2, -4)), t);
}
var Dt = function (e) {
  if ("string" != typeof e) return e;
  try {
    if ((t = JSON.parse(e)).timestamp) return t;
  } catch (e) {}
  try {
    var t;
    if ("v1" === (t = JSON.parse(function (e, t) {
      var n = "";
      if (!t && "undefined" != typeof TextDecoder) return new TextDecoder().decode(e);
      for (var r = 0; r < e.length;) {
        var i = e[r++];
        i < 128 || t ? n += String.fromCharCode(i) : i < 224 ? n += String.fromCharCode((31 & i) << 6 | 63 & e[r++]) : i < 240 ? n += String.fromCharCode((15 & i) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) : (i = ((15 & i) << 18 | (63 & e[r++]) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) - 65536, n += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i));
      }
      return n;
    }($t(function (e, t) {
      var n = e.length;
      if (!t && "undefined" != typeof TextEncoder) return new TextEncoder().encode(e);
      for (var r = new ct(e.length + (e.length >>> 1)), i = 0, o = function (e) {
          r[i++] = e;
        }, a = 0; a < n; ++a) {
        if (i + 5 > r.length) {
          var s = new ct(i + 8 + (n - a << 1));
          s.set(r), r = s;
        }
        var l = e.charCodeAt(a);
        l < 128 || t ? o(l) : l < 2048 ? (o(192 | l >>> 6), o(128 | 63 & l)) : l > 55295 && l < 57344 ? (o(240 | (l = 65536 + (1047552 & l) | 1023 & e.charCodeAt(++a)) >>> 18), o(128 | l >>> 12 & 63), o(128 | l >>> 6 & 63), o(128 | 63 & l)) : (o(224 | l >>> 12), o(128 | l >>> 6 & 63), o(128 | 63 & l));
      }
      return _t(r, 0, i);
    }(e, !0))))).v) return t;
    throw new Error("These events were packed with packer ".concat(t.v, " which is incompatible with current packer ").concat("v1", "."));
  } catch (e) {
    throw console.error(e), new Error("Unknown data format.");
  }
};
function Rt(e) {
  let t = "";
  return Object.keys(e).forEach(n => {
    t += `${n}: ${e[n]};`;
  }), t;
}
function Lt(e, t = 2) {
  let n = String(e);
  const r = Math.pow(10, t - 1);
  if (e < r) for (; String(r).length > n.length;) n = "0" + e;
  return n;
}
function Ft(e) {
  if (e <= 0) return "00:00";
  const t = Math.floor(e / 36e5);
  e %= 36e5;
  const n = Math.floor(e / 6e4);
  e %= 6e4;
  const r = Math.floor(e / 1e3);
  return t ? `${Lt(t)}:${Lt(n)}:${Lt(r)}` : `${Lt(n)}:${Lt(r)}`;
}
function Pt() {
  return document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement;
}
function Ot(e) {
  return {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object"
  }[Object.prototype.toString.call(e)];
}
function jt(t) {
  let n, r, i, o, a, s, d, p, b;
  return {
    c() {
      n = f("div"), r = f("input"), i = m(), o = f("label"), a = m(), s = f("span"), d = h(t[3]), y(r, "type", "checkbox"), y(r, "id", t[2]), r.disabled = t[1], y(r, "class", "svelte-9brlez"), y(o, "for", t[2]), y(o, "class", "svelte-9brlez"), y(s, "class", "label svelte-9brlez"), y(n, "class", "switch svelte-9brlez"), w(n, "disabled", t[1]);
    },
    m(e, u) {
      c(e, n, u), l(n, r), r.checked = t[0], l(n, i), l(n, o), l(n, a), l(n, s), l(s, d), p || (b = v(r, "change", t[4]), p = !0);
    },
    p(e, [t]) {
      4 & t && y(r, "id", e[2]), 2 & t && (r.disabled = e[1]), 1 & t && (r.checked = e[0]), 4 & t && y(o, "for", e[2]), 8 & t && g(d, e[3]), 2 & t && w(n, "disabled", e[1]);
    },
    i: e,
    o: e,
    d(e) {
      e && u(n), p = !1, b();
    }
  };
}
function Wt(e, t, n) {
  let {
      disabled: r
    } = t,
    {
      checked: i
    } = t,
    {
      id: o
    } = t,
    {
      label: a
    } = t;
  return e.$$set = e => {
    "disabled" in e && n(1, r = e.disabled), "checked" in e && n(0, i = e.checked), "id" in e && n(2, o = e.id), "label" in e && n(3, a = e.label);
  }, [i, r, o, a, function () {
    i = this.checked, n(0, i);
  }];
}
class Bt extends X {
  constructor(e) {
    super(), Y(this, e, Wt, jt, a, {
      disabled: 1,
      checked: 0,
      id: 2,
      label: 3
    });
  }
}
function zt(e, t, n) {
  const r = e.slice();
  return r[34] = t[n], r;
}
function Ut(e, t, n) {
  const r = e.slice();
  return r[37] = t[n], r;
}
function qt(e) {
  let t,
    n,
    r,
    o,
    a,
    s,
    p,
    x,
    S,
    E,
    T,
    M,
    k,
    C,
    N,
    _,
    $,
    D,
    R,
    L,
    F,
    P,
    O,
    j,
    W,
    B = Ft(e[6]) + "",
    G = Ft(e[8].totalTime) + "",
    Y = e[9],
    X = [];
  for (let t = 0; t < Y.length; t += 1) X[t] = Ht(Ut(e, Y, t));
  function Q(e, t) {
    return "playing" === e[7] ? Gt : Vt;
  }
  let J = Q(e),
    K = J(e),
    Z = e[3],
    ee = [];
  for (let t = 0; t < Z.length; t += 1) ee[t] = Yt(zt(e, Z, t));
  function te(t) {
    e[28](t);
  }
  let ne = {
    id: "skip",
    disabled: "skipping" === e[10],
    label: "skip inactive"
  };
  return void 0 !== e[0] && (ne.checked = e[0]), R = new Bt({
    props: ne
  }), I.push(() => function (e, t, n) {
    const r = e.$$.props[t];
    void 0 !== r && (e.$$.bound[r] = n, n(e.$$.ctx[r]));
  }(R, "checked", te)), {
    c() {
      t = f("div"), n = f("div"), r = f("span"), o = h(B), a = m(), s = f("div"), p = f("div"), x = m();
      for (let e = 0; e < X.length; e += 1) X[e].c();
      S = m(), E = f("div"), T = m(), M = f("span"), k = h(G), C = m(), N = f("div"), _ = f("button"), K.c(), $ = m();
      for (let e = 0; e < ee.length; e += 1) ee[e].c();
      D = m(), q(R.$$.fragment), F = m(), P = f("button"), P.innerHTML = '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M916 380c-26.4 0-48-21.6-48-48L868 223.2 613.6 477.6c-18.4\n            18.4-48.8 18.4-68 0-18.4-18.4-18.4-48.8 0-68L800 156 692 156c-26.4\n            0-48-21.6-48-48 0-26.4 21.6-48 48-48l224 0c26.4 0 48 21.6 48 48l0\n            224C964 358.4 942.4 380 916 380zM231.2 860l108.8 0c26.4 0 48 21.6 48\n            48s-21.6 48-48 48l-224 0c-26.4 0-48-21.6-48-48l0-224c0-26.4 21.6-48\n            48-48 26.4 0 48 21.6 48 48L164 792l253.6-253.6c18.4-18.4 48.8-18.4\n            68 0 18.4 18.4 18.4 48.8 0 68L231.2 860z" p-id="1286"></path></svg>', y(r, "class", "rr-timeline__time svelte-19ke1iv"), y(p, "class", "rr-progress__step svelte-19ke1iv"), b(p, "width", e[13]), y(E, "class", "rr-progress__handler svelte-19ke1iv"), b(E, "left", e[13]), y(s, "class", "rr-progress svelte-19ke1iv"), w(s, "disabled", "skipping" === e[10]), y(M, "class", "rr-timeline__time svelte-19ke1iv"), y(n, "class", "rr-timeline svelte-19ke1iv"), y(_, "class", "svelte-19ke1iv"), y(P, "class", "svelte-19ke1iv"), y(N, "class", "rr-controller__btns svelte-19ke1iv"), y(t, "class", "rr-controller svelte-19ke1iv");
    },
    m(i, u) {
      c(i, t, u), l(t, n), l(n, r), l(r, o), l(n, a), l(n, s), l(s, p), e[24](p), l(s, x);
      for (let e = 0; e < X.length; e += 1) X[e].m(s, null);
      l(s, S), l(s, E), e[25](s), l(n, T), l(n, M), l(M, k), l(t, C), l(t, N), l(N, _), K.m(_, null), l(N, $);
      for (let e = 0; e < ee.length; e += 1) ee[e].m(N, null);
      l(N, D), H(R, N, null), l(N, F), l(N, P), O = !0, j || (W = [v(s, "click", e[26]), v(_, "click", e[4]), v(P, "click", e[29])], j = !0);
    },
    p(e, t) {
      if ((!O || 64 & t[0]) && B !== (B = Ft(e[6]) + "") && g(o, B), (!O || 8192 & t[0]) && b(p, "width", e[13]), 512 & t[0]) {
        let n;
        for (Y = e[9], n = 0; n < Y.length; n += 1) {
          const r = Ut(e, Y, n);
          X[n] ? X[n].p(r, t) : (X[n] = Ht(r), X[n].c(), X[n].m(s, S));
        }
        for (; n < X.length; n += 1) X[n].d(1);
        X.length = Y.length;
      }
      if ((!O || 8192 & t[0]) && b(E, "left", e[13]), 1024 & t[0] && w(s, "disabled", "skipping" === e[10]), (!O || 256 & t[0]) && G !== (G = Ft(e[8].totalTime) + "") && g(k, G), J !== (J = Q(e)) && (K.d(1), K = J(e), K && (K.c(), K.m(_, null))), 1066 & t[0]) {
        let n;
        for (Z = e[3], n = 0; n < Z.length; n += 1) {
          const r = zt(e, Z, n);
          ee[n] ? ee[n].p(r, t) : (ee[n] = Yt(r), ee[n].c(), ee[n].m(N, D));
        }
        for (; n < ee.length; n += 1) ee[n].d(1);
        ee.length = Z.length;
      }
      const n = {};
      var r;
      1024 & t[0] && (n.disabled = "skipping" === e[10]), !L && 1 & t[0] && (L = !0, n.checked = e[0], r = () => L = !1, A.push(r)), R.$set(n);
    },
    i(e) {
      O || (z(R.$$.fragment, e), O = !0);
    },
    o(e) {
      U(R.$$.fragment, e), O = !1;
    },
    d(n) {
      n && u(t), e[24](null), d(X, n), e[25](null), K.d(), d(ee, n), V(R), j = !1, i(W);
    }
  };
}
function Ht(e) {
  let t, n;
  return {
    c() {
      t = f("div"), y(t, "title", n = e[37].name), b(t, "width", "10px"), b(t, "height", "5px"), b(t, "position", "absolute"), b(t, "top", "2px"), b(t, "transform", "translate(-50%, -50%)"), b(t, "background", e[37].background), b(t, "left", e[37].position);
    },
    m(e, n) {
      c(e, t, n);
    },
    p(e, r) {
      512 & r[0] && n !== (n = e[37].name) && y(t, "title", n), 512 & r[0] && b(t, "background", e[37].background), 512 & r[0] && b(t, "left", e[37].position);
    },
    d(e) {
      e && u(t);
    }
  };
}
function Vt(e) {
  let t, n;
  return {
    c() {
      t = p("svg"), n = p("path"), y(n, "d", "M170.65984 896l0-768 640 384zM644.66944\n              512l-388.66944-233.32864 0 466.65728z"), y(t, "class", "icon"), y(t, "viewBox", "0 0 1024 1024"), y(t, "version", "1.1"), y(t, "xmlns", "http://www.w3.org/2000/svg"), y(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"), y(t, "width", "16"), y(t, "height", "16");
    },
    m(e, r) {
      c(e, t, r), l(t, n);
    },
    d(e) {
      e && u(t);
    }
  };
}
function Gt(e) {
  let t, n;
  return {
    c() {
      t = p("svg"), n = p("path"), y(n, "d", "M682.65984 128q53.00224 0 90.50112 37.49888t37.49888 90.50112l0\n              512q0 53.00224-37.49888 90.50112t-90.50112\n              37.49888-90.50112-37.49888-37.49888-90.50112l0-512q0-53.00224\n              37.49888-90.50112t90.50112-37.49888zM341.34016 128q53.00224 0\n              90.50112 37.49888t37.49888 90.50112l0 512q0 53.00224-37.49888\n              90.50112t-90.50112\n              37.49888-90.50112-37.49888-37.49888-90.50112l0-512q0-53.00224\n              37.49888-90.50112t90.50112-37.49888zM341.34016 213.34016q-17.67424\n              0-30.16704 12.4928t-12.4928 30.16704l0 512q0 17.67424 12.4928\n              30.16704t30.16704 12.4928 30.16704-12.4928\n              12.4928-30.16704l0-512q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM682.65984\n              213.34016q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 512q0\n              17.67424 12.4928 30.16704t30.16704 12.4928 30.16704-12.4928\n              12.4928-30.16704l0-512q0-17.67424-12.4928-30.16704t-30.16704-12.4928z"), y(t, "class", "icon"), y(t, "viewBox", "0 0 1024 1024"), y(t, "version", "1.1"), y(t, "xmlns", "http://www.w3.org/2000/svg"), y(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"), y(t, "width", "16"), y(t, "height", "16");
    },
    m(e, r) {
      c(e, t, r), l(t, n);
    },
    d(e) {
      e && u(t);
    }
  };
}
function Yt(e) {
  let t,
    n,
    r,
    i,
    o,
    a,
    s = e[34] + "";
  function d() {
    return e[27](e[34]);
  }
  return {
    c() {
      t = f("button"), n = h(s), r = h("x"), t.disabled = i = "skipping" === e[10], y(t, "class", "svelte-19ke1iv"), w(t, "active", e[34] === e[1] && "skipping" !== e[10]);
    },
    m(e, i) {
      c(e, t, i), l(t, n), l(t, r), o || (a = v(t, "click", d), o = !0);
    },
    p(r, o) {
      e = r, 8 & o[0] && s !== (s = e[34] + "") && g(n, s), 1024 & o[0] && i !== (i = "skipping" === e[10]) && (t.disabled = i), 1034 & o[0] && w(t, "active", e[34] === e[1] && "skipping" !== e[10]);
    },
    d(e) {
      e && u(t), o = !1, a();
    }
  };
}
function Xt(e) {
  let t,
    n,
    r = e[2] && qt(e);
  return {
    c() {
      r && r.c(), t = h("");
    },
    m(e, i) {
      r && r.m(e, i), c(e, t, i), n = !0;
    },
    p(e, n) {
      e[2] ? r ? (r.p(e, n), 4 & n[0] && z(r, 1)) : (r = qt(e), r.c(), z(r, 1), r.m(t.parentNode, t)) : r && (W(), U(r, 1, 1, () => {
        r = null;
      }), B());
    },
    i(e) {
      n || (z(r), n = !0);
    },
    o(e) {
      U(r), n = !1;
    },
    d(e) {
      r && r.d(e), e && u(t);
    }
  };
}
function Qt(e, t, n) {
  const r = k();
  let i,
    o,
    a,
    s,
    l,
    c,
    u,
    d,
    {
      replayer: f
    } = t,
    {
      showController: p
    } = t,
    {
      autoPlay: h
    } = t,
    {
      skipInactive: m
    } = t,
    {
      speedOption: v
    } = t,
    {
      speed: y = v.length ? v[0] : 1
    } = t,
    {
      tags: g = {}
    } = t,
    b = 0,
    w = null;
  const x = () => {
      w && (cancelAnimationFrame(w), w = null);
    },
    S = () => {
      "paused" === i && (l ? (f.play(), l = !1) : f.play(b));
    },
    C = () => {
      "playing" === i && f.pause();
    },
    N = (e, t) => {
      n(6, b = e);
      ("boolean" == typeof t ? t : "playing" === i) ? f.play(e) : f.pause(e);
    },
    A = e => {
      if ("skipping" === o) return;
      const t = a.getBoundingClientRect();
      let n = (e.clientX - t.left) / t.width;
      n < 0 ? n = 0 : n > 1 && (n = 1);
      const r = c.totalTime * n;
      l = !1, N(r);
    },
    _ = e => {
      let t = "playing" === i;
      n(1, y = e), t && f.pause(), f.setConfig({
        speed: y
      }), t && f.play(b);
    };
  var $;
  T(() => {
    n(7, i = f.service.state.value), n(10, o = f.speedService.state.value), f.on("state-change", e => {
      const {
        player: t,
        speed: r
      } = e;
      if ((null == t ? void 0 : t.value) && i !== t.value) switch (n(7, i = t.value), i) {
        case "playing":
          x(), w = requestAnimationFrame(function e() {
            n(6, b = f.getCurrentTime()), b < c.totalTime && (w = requestAnimationFrame(e));
          });
          break;
        case "paused":
          x();
      }
      (null == r ? void 0 : r.value) && o !== r.value && n(10, o = r.value);
    }), f.on("finish", () => {
      l = !0;
    }), h && f.play();
  }), $ = () => {
    m !== f.config.skipInactive && f.setConfig({
      skipInactive: m
    });
  }, E().$$.after_update.push($), M(() => {
    f.pause(), x();
  });
  return e.$$set = e => {
    "replayer" in e && n(16, f = e.replayer), "showController" in e && n(2, p = e.showController), "autoPlay" in e && n(17, h = e.autoPlay), "skipInactive" in e && n(0, m = e.skipInactive), "speedOption" in e && n(3, v = e.speedOption), "speed" in e && n(1, y = e.speed), "tags" in e && n(18, g = e.tags);
  }, e.$$.update = () => {
    if (64 & e.$$.dirty[0] && r("ui-update-current-time", {
      payload: b
    }), 128 & e.$$.dirty[0] && r("ui-update-player-state", {
      payload: i
    }), 65536 & e.$$.dirty[0] && n(8, c = f.getMetaData()), 320 & e.$$.dirty[0]) {
      const e = Math.min(1, b / c.totalTime);
      n(13, u = 100 * e + "%"), r("ui-update-progress", {
        payload: e
      });
    }
    327680 & e.$$.dirty[0] && n(9, d = (() => {
      const {
          context: e
        } = f.service.state,
        t = e.events.length,
        n = e.events[0].timestamp,
        r = e.events[t - 1].timestamp,
        i = [];
      return e.events.forEach(e => {
        if (e.type === se.Custom) {
          const s = {
            name: e.data.tag,
            background: g[e.data.tag] || "rgb(73, 80, 246)",
            position: `${(t = n, o = r, a = e.timestamp, (100 - (o - a) / (o - t) * 100).toFixed(2))}%`
          };
          i.push(s);
        }
        var t, o, a;
      }), i;
    })());
  }, [m, y, p, v, () => {
    switch (i) {
      case "playing":
        C();
        break;
      case "paused":
        S();
    }
  }, _, b, i, c, d, o, a, s, u, r, A, f, h, g, S, C, N, () => {
    n(0, m = !m);
  }, () => {
    Promise.resolve().then(() => {
      n(8, c = f.getMetaData());
    });
  }, function (e) {
    I[e ? "unshift" : "push"](() => {
      s = e, n(12, s);
    });
  }, function (e) {
    I[e ? "unshift" : "push"](() => {
      a = e, n(11, a);
    });
  }, e => A(e), e => _(e), function (e) {
    m = e, n(0, m);
  }, () => r("fullscreen")];
}
class Jt extends X {
  constructor(e) {
    super(), Y(this, e, Qt, Xt, a, {
      replayer: 16,
      showController: 2,
      autoPlay: 17,
      skipInactive: 0,
      speedOption: 3,
      speed: 1,
      tags: 18,
      toggle: 4,
      play: 19,
      pause: 20,
      goto: 21,
      setSpeed: 5,
      toggleSkipInactive: 22,
      triggerUpdateMeta: 23
    }, null, [-1, -1]);
  }
  get toggle() {
    return this.$$.ctx[4];
  }
  get play() {
    return this.$$.ctx[19];
  }
  get pause() {
    return this.$$.ctx[20];
  }
  get goto() {
    return this.$$.ctx[21];
  }
  get setSpeed() {
    return this.$$.ctx[5];
  }
  get toggleSkipInactive() {
    return this.$$.ctx[22];
  }
  get triggerUpdateMeta() {
    return this.$$.ctx[23];
  }
}
function Kt(e) {
  let t,
    n,
    r = {
      replayer: e[6],
      showController: e[3],
      autoPlay: e[1],
      speedOption: e[2],
      skipInactive: e[0],
      tags: e[4]
    };
  return t = new Jt({
    props: r
  }), e[29](t), t.$on("fullscreen", e[30]), {
    c() {
      q(t.$$.fragment);
    },
    m(e, r) {
      H(t, e, r), n = !0;
    },
    p(e, n) {
      const r = {};
      64 & n[0] && (r.replayer = e[6]), 8 & n[0] && (r.showController = e[3]), 2 & n[0] && (r.autoPlay = e[1]), 4 & n[0] && (r.speedOption = e[2]), 1 & n[0] && (r.skipInactive = e[0]), 16 & n[0] && (r.tags = e[4]), t.$set(r);
    },
    i(e) {
      n || (z(t.$$.fragment, e), n = !0);
    },
    o(e) {
      U(t.$$.fragment, e), n = !1;
    },
    d(n) {
      e[29](null), V(t, n);
    }
  };
}
function Zt(e) {
  let t,
    n,
    r,
    i,
    o = e[6] && Kt(e);
  return {
    c() {
      t = f("div"), n = f("div"), r = m(), o && o.c(), y(n, "class", "rr-player__frame"), y(n, "style", e[10]), y(t, "class", "rr-player"), y(t, "style", e[11]);
    },
    m(a, s) {
      c(a, t, s), l(t, n), e[28](n), l(t, r), o && o.m(t, null), e[31](t), i = !0;
    },
    p(e, r) {
      (!i || 1024 & r[0]) && y(n, "style", e[10]), e[6] ? o ? (o.p(e, r), 64 & r[0] && z(o, 1)) : (o = Kt(e), o.c(), z(o, 1), o.m(t, null)) : o && (W(), U(o, 1, 1, () => {
        o = null;
      }), B()), (!i || 2048 & r[0]) && y(t, "style", e[11]);
    },
    i(e) {
      i || (z(o), i = !0);
    },
    o(e) {
      U(o), i = !1;
    },
    d(n) {
      n && u(t), e[28](null), o && o.d(), e[31](null);
    }
  };
}
function en(e, n, r) {
  let i,
    {
      width: o = 1024
    } = n,
    {
      height: a = 576
    } = n,
    {
      events: l = []
    } = n,
    {
      skipInactive: c = !0
    } = n,
    {
      autoPlay: u = !0
    } = n,
    {
      speedOption: d = [1, 2, 4, 8]
    } = n,
    {
      speed: f = 1
    } = n,
    {
      showController: p = !0
    } = n,
    {
      tags: h = {}
    } = n;
  let m,
    v,
    y,
    g,
    b,
    w,
    x = o,
    S = a;
  const E = (e, t) => {
      const n = o / t.width,
        r = a / t.height;
      e.style.transform = `scale(${Math.min(n, r, 1)})translate(-50%, -50%)`;
    },
    k = () => {
      var e;
      m && (Pt() ? document.exitFullscreen ? document.exitFullscreen() : document.mozExitFullscreen ? document.mozExitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen() : (e = m).requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen());
    };
  T(() => {
    if (void 0 !== d && "array" !== Ot(d)) throw new Error("speedOption must be array");
    if (d.forEach(e => {
      if ("number" !== Ot(e)) throw new Error("item of speedOption must be number");
    }), d.indexOf(f) < 0) throw new Error(`speed must be one of speedOption,\n        current config:\n        {\n          ...\n          speed: ${f},\n          speedOption: [${d.toString()}]\n          ...\n        }\n        `);
    var e;
    r(6, i = new lt(l, Object.assign({
      speed: f,
      root: v,
      unpackFn: Dt
    }, n))), i.on("resize", e => {
      E(i.wrapper, e);
    }), e = () => {
      Pt() ? setTimeout(() => {
        x = o, S = a, r(12, o = m.offsetWidth), r(13, a = m.offsetHeight), E(i.wrapper, {
          width: i.iframe.offsetWidth,
          height: i.iframe.offsetHeight
        });
      }, 0) : (r(12, o = x), r(13, a = S), E(i.wrapper, {
        width: i.iframe.offsetWidth,
        height: i.iframe.offsetHeight
      }));
    }, document.addEventListener("fullscreenchange", e), document.addEventListener("webkitfullscreenchange", e), document.addEventListener("mozfullscreenchange", e), document.addEventListener("MSFullscreenChange", e), y = () => {
      document.removeEventListener("fullscreenchange", e), document.removeEventListener("webkitfullscreenchange", e), document.removeEventListener("mozfullscreenchange", e), document.removeEventListener("MSFullscreenChange", e);
    };
  }), M(() => {
    y && y();
  });
  return e.$$set = e => {
    r(36, n = t(t({}, n), s(e))), "width" in e && r(12, o = e.width), "height" in e && r(13, a = e.height), "events" in e && r(14, l = e.events), "skipInactive" in e && r(0, c = e.skipInactive), "autoPlay" in e && r(1, u = e.autoPlay), "speedOption" in e && r(2, d = e.speedOption), "speed" in e && r(15, f = e.speed), "showController" in e && r(3, p = e.showController), "tags" in e && r(4, h = e.tags);
  }, e.$$.update = () => {
    12288 & e.$$.dirty[0] && r(10, b = Rt({
      width: `${o}px`,
      height: `${a}px`
    })), 12296 & e.$$.dirty[0] && r(11, w = Rt({
      width: `${o}px`,
      height: `${a + (p ? 80 : 0)}px`
    }));
  }, n = s(n), [c, u, d, p, h, k, i, m, v, g, b, w, o, a, l, f, () => i.getMirror(), () => {
    E(i.wrapper, {
      width: i.iframe.offsetWidth,
      height: i.iframe.offsetHeight
    });
  }, (e, t) => {
    switch (i.on(e, t), e) {
      case "ui-update-current-time":
      case "ui-update-progress":
      case "ui-update-player-state":
        g.$on(e, ({
          detail: e
        }) => t(e));
    }
  }, e => {
    i.addEvent(e), g.triggerUpdateMeta();
  }, () => i.getMetaData(), () => i, () => {
    g.toggle();
  }, e => {
    g.setSpeed(e);
  }, () => {
    g.toggleSkipInactive();
  }, () => {
    g.play();
  }, () => {
    g.pause();
  }, (e, t) => {
    g.goto(e, t);
  }, function (e) {
    I[e ? "unshift" : "push"](() => {
      v = e, r(8, v);
    });
  }, function (e) {
    I[e ? "unshift" : "push"](() => {
      g = e, r(9, g);
    });
  }, () => k(), function (e) {
    I[e ? "unshift" : "push"](() => {
      m = e, r(7, m);
    });
  }];
}
class tn extends X {
  constructor(e) {
    super(), Y(this, e, en, Zt, a, {
      width: 12,
      height: 13,
      events: 14,
      skipInactive: 0,
      autoPlay: 1,
      speedOption: 2,
      speed: 15,
      showController: 3,
      tags: 4,
      getMirror: 16,
      triggerResize: 17,
      toggleFullscreen: 5,
      addEventListener: 18,
      addEvent: 19,
      getMetaData: 20,
      getReplayer: 21,
      toggle: 22,
      setSpeed: 23,
      toggleSkipInactive: 24,
      play: 25,
      pause: 26,
      goto: 27
    }, null, [-1, -1]);
  }
  get getMirror() {
    return this.$$.ctx[16];
  }
  get triggerResize() {
    return this.$$.ctx[17];
  }
  get toggleFullscreen() {
    return this.$$.ctx[5];
  }
  get addEventListener() {
    return this.$$.ctx[18];
  }
  get addEvent() {
    return this.$$.ctx[19];
  }
  get getMetaData() {
    return this.$$.ctx[20];
  }
  get getReplayer() {
    return this.$$.ctx[21];
  }
  get toggle() {
    return this.$$.ctx[22];
  }
  get setSpeed() {
    return this.$$.ctx[23];
  }
  get toggleSkipInactive() {
    return this.$$.ctx[24];
  }
  get play() {
    return this.$$.ctx[25];
  }
  get pause() {
    return this.$$.ctx[26];
  }
  get goto() {
    return this.$$.ctx[27];
  }
}
class _default extends tn {
  constructor(e) {
    super({
      target: e.target,
      props: e.data || e.props
    });
  }
}
exports.default = _default;
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
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
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/rrweb-player/dist/style.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"test.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recordingData = void 0;
var recordingData = exports.recordingData = [{
  "type": 4,
  "data": {
    "href": "http://localhost:1234/",
    "width": 1879,
    "height": 486
  },
  "timestamp": 1711543385127,
  "delay": 0
}, {
  "type": 2,
  "data": {
    "node": {
      "type": 0,
      "childNodes": [{
        "type": 1,
        "name": "html",
        "publicId": "",
        "systemId": "",
        "id": 2
      }, {
        "type": 2,
        "tagName": "html",
        "attributes": {
          "lang": "en"
        },
        "childNodes": [{
          "type": 2,
          "tagName": "head",
          "attributes": {},
          "childNodes": [{
            "type": 3,
            "textContent": "\n    ",
            "id": 5
          }, {
            "type": 2,
            "tagName": "meta",
            "attributes": {
              "charset": "UTF-8"
            },
            "childNodes": [],
            "id": 6
          }, {
            "type": 3,
            "textContent": "\n    ",
            "id": 7
          }, {
            "type": 2,
            "tagName": "meta",
            "attributes": {
              "http-equiv": "X-UA-Compatible",
              "content": "IE=edge"
            },
            "childNodes": [],
            "id": 8
          }, {
            "type": 3,
            "textContent": "\n    ",
            "id": 9
          }, {
            "type": 2,
            "tagName": "meta",
            "attributes": {
              "name": "viewport",
              "content": "width=device-width, initial-scale=1.0"
            },
            "childNodes": [],
            "id": 10
          }, {
            "type": 3,
            "textContent": "\n    ",
            "id": 11
          }, {
            "type": 2,
            "tagName": "title",
            "attributes": {},
            "childNodes": [{
              "type": 3,
              "textContent": "Calculator using HTML and CSS",
              "id": 13
            }],
            "id": 12
          }, {
            "type": 3,
            "textContent": "\n    ",
            "id": 14
          }, {
            "type": 2,
            "tagName": "link",
            "attributes": {
              "_cssText": "* { margin: 0px; padding: 0px; font-family: Poppins, sans-serif; box-sizing: border-box; }.container { width: 100%; height: 100vh; background: rgb(227, 249, 255); display: flex; align-items: center; justify-content: center; }.calculator { background: rgb(58, 68, 82); padding: 20px; border-radius: 10px; }.calculator form input { border: 0px; outline: 0px; width: 60px; height: 60px; border-radius: 10px; box-shadow: rgba(255, 255, 255, 0.1) -8px -8px 15px, rgba(0, 0, 0, 0.2) 5px 5px 15px; background: transparent; font-size: 20px; color: rgb(255, 255, 255); cursor: pointer; margin: 10px; }form .display { display: flex; justify-content: flex-end; margin: 20px 0px; }form .display input { text-align: right; flex: 1 1 0%; font-size: 45px; box-shadow: none; }form div .equal { width: 145px; }form div .operator { color: rgb(51, 255, 216); }"
            },
            "childNodes": [],
            "id": 15
          }, {
            "type": 3,
            "textContent": "\n",
            "id": 16
          }, {
            "type": 2,
            "tagName": "script",
            "attributes": {
              "src": "http://localhost:1234/style.c61ab535.js"
            },
            "childNodes": [],
            "id": 17
          }, {
            "type": 2,
            "tagName": "link",
            "attributes": {
              "_cssText": ".replayer-wrapper { position: relative; }.replayer-mouse { position: absolute; width: 20px; height: 20px; transition: left 0.05s linear 0s, top 0.05s linear 0s; background-size: contain; background-position: 50% center; background-repeat: no-repeat; background-image: url(\"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMwMCIgd2lkdGg9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA1MCA1MCI+PHBhdGggZD0iTTQ4LjcxIDQyLjkxTDM0LjA4IDI4LjI5IDQ0LjMzIDE4YTEgMSAwIDAwLS4zMy0xLjYxTDIuMzUgMS4wNmExIDEgMCAwMC0xLjI5IDEuMjlMMTYuMzkgNDRhMSAxIDAgMDAxLjY1LjM2bDEwLjI1LTEwLjI4IDE0LjYyIDE0LjYzYTEgMSAwIDAwMS40MSAwbDQuMzgtNC4zOGExIDEgMCAwMC4wMS0xLjQyem0tNS4wOSAzLjY3TDI5IDMyYTEgMSAwIDAwLTEuNDEgMGwtOS44NSA5Ljg1TDMuNjkgMy42OWwzOC4xMiAxNEwzMiAyNy41OEExIDEgMCAwMDMyIDI5bDE0LjU5IDE0LjYyeiIvPjwvc3ZnPg==\"); border-color: transparent; }.replayer-mouse::after { content: \"\"; display: inline-block; width: 20px; height: 20px; background: rgb(73, 80, 246); border-radius: 100%; transform: translate(-50%, -50%); opacity: 0.3; }.replayer-mouse.active::after { animation: 0.2s ease-in-out 0s 1 normal none running click; }.replayer-mouse.touch-device { background-image: none; width: 70px; height: 70px; border-radius: 100%; margin-left: -37px; margin-top: -37px; border: 4px solid rgba(73, 80, 246, 0); transition: left 0s linear 0s, top 0s linear 0s, border-color 0.2s ease-in-out 0s; }.replayer-mouse.touch-device.touch-active { border-color: rgb(73, 80, 246); transition: left 0.25s linear 0s, top 0.25s linear 0s, border-color 0.2s ease-in-out 0s; }.replayer-mouse.touch-device::after { opacity: 0; }.replayer-mouse.touch-device.active::after { animation: 0.2s ease-in-out 0s 1 normal none running touch-click; }.replayer-mouse-tail { position: absolute; pointer-events: none; }@keyframes click { \n  0% { opacity: 0.3; width: 20px; height: 20px; }\n  50% { opacity: 0.5; width: 10px; height: 10px; }\n}@keyframes touch-click { \n  0% { opacity: 0; width: 20px; height: 20px; }\n  50% { opacity: 0.5; width: 10px; height: 10px; }\n}.rr-player { position: relative; background: white; float: left; border-radius: 5px; box-shadow: rgba(17, 16, 62, 0.12) 0px 24px 48px; }.rr-player__frame { overflow: hidden; }.replayer-wrapper { float: left; clear: both; transform-origin: left top; left: 50%; top: 50%; }.replayer-wrapper > iframe { border: none; }.rr-controller.svelte-19ke1iv.svelte-19ke1iv { width: 100%; height: 80px; background: rgb(255, 255, 255); display: flex; flex-direction: column; justify-content: space-around; align-items: center; border-radius: 0px 0px 5px 5px; }.rr-timeline.svelte-19ke1iv.svelte-19ke1iv { width: 80%; display: flex; align-items: center; }.rr-timeline__time.svelte-19ke1iv.svelte-19ke1iv { display: inline-block; width: 100px; text-align: center; color: rgb(17, 16, 62); }.rr-progress.svelte-19ke1iv.svelte-19ke1iv { flex: 1 1 0%; height: 12px; background: rgb(238, 238, 238); position: relative; border-radius: 3px; cursor: pointer; box-sizing: border-box; border-top: 4px solid rgb(255, 255, 255); border-bottom: 4px solid rgb(255, 255, 255); }.rr-progress.disabled.svelte-19ke1iv.svelte-19ke1iv { cursor: not-allowed; }.rr-progress__step.svelte-19ke1iv.svelte-19ke1iv { height: 100%; position: absolute; left: 0px; top: 0px; background: rgb(224, 225, 254); }.rr-progress__handler.svelte-19ke1iv.svelte-19ke1iv { width: 20px; height: 20px; border-radius: 10px; position: absolute; top: 2px; transform: translate(-50%, -50%); background: rgb(73, 80, 246); }.rr-controller__btns.svelte-19ke1iv.svelte-19ke1iv { display: flex; align-items: center; justify-content: center; font-size: 13px; }.rr-controller__btns.svelte-19ke1iv button.svelte-19ke1iv { width: 32px; height: 32px; display: flex; padding: 0px; align-items: center; justify-content: center; background: none; border: none; border-radius: 50%; cursor: pointer; }.rr-controller__btns.svelte-19ke1iv button.svelte-19ke1iv:active { background: rgb(224, 225, 254); }.rr-controller__btns.svelte-19ke1iv button.active.svelte-19ke1iv { color: rgb(255, 255, 255); background: rgb(73, 80, 246); }.rr-controller__btns.svelte-19ke1iv button.svelte-19ke1iv:disabled { cursor: not-allowed; }.switch.svelte-9brlez.svelte-9brlez.svelte-9brlez { height: 1em; display: flex; align-items: center; }.switch.disabled.svelte-9brlez.svelte-9brlez.svelte-9brlez { opacity: 0.5; }.label.svelte-9brlez.svelte-9brlez.svelte-9brlez { margin: 0px 8px; }.switch.svelte-9brlez input[type=\"checkbox\"].svelte-9brlez.svelte-9brlez { position: absolute; opacity: 0; }.switch.svelte-9brlez label.svelte-9brlez.svelte-9brlez { width: 2em; height: 1em; position: relative; cursor: pointer; display: block; }.switch.disabled.svelte-9brlez label.svelte-9brlez.svelte-9brlez { cursor: not-allowed; }.switch.svelte-9brlez label.svelte-9brlez.svelte-9brlez::before { content: \"\"; position: absolute; width: 2em; height: 1em; left: 0.1em; transition: background 0.1s ease 0s; background: rgba(73, 80, 246, 0.5); border-radius: 50px; }.switch.svelte-9brlez label.svelte-9brlez.svelte-9brlez::after { content: \"\"; position: absolute; width: 1em; height: 1em; border-radius: 50px; left: 0px; transition: all 0.2s ease 0s; box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 5px 0px; background: rgb(252, 255, 244); animation: 0.2s ease-out 0s 1 normal none running switch-off; z-index: 2; }.switch.svelte-9brlez input[type=\"checkbox\"].svelte-9brlez:checked + label.svelte-9brlez::before { background: rgb(73, 80, 246); }.switch.svelte-9brlez input[type=\"checkbox\"].svelte-9brlez:checked + label.svelte-9brlez::after { animation: 0.2s ease-out 0s 1 normal none running switch-on; left: 1.1em; }"
            },
            "childNodes": [],
            "id": 18
          }],
          "id": 4
        }, {
          "type": 3,
          "textContent": "\n",
          "id": 19
        }, {
          "type": 2,
          "tagName": "body",
          "attributes": {
            "data-new-gr-c-s-check-loaded": "14.1162.0",
            "data-gr-ext-installed": ""
          },
          "childNodes": [{
            "type": 3,
            "textContent": "\n\n    ",
            "id": 21
          }, {
            "type": 5,
            "textContent": " Container for the document ",
            "id": 22
          }, {
            "type": 3,
            "textContent": "\n    ",
            "id": 23
          }, {
            "type": 2,
            "tagName": "button",
            "attributes": {
              "id": "btnStart",
              "type": "button"
            },
            "childNodes": [{
              "type": 3,
              "textContent": "Start Recording",
              "id": 25
            }],
            "id": 24
          }, {
            "type": 3,
            "textContent": "\n    ",
            "id": 26
          }, {
            "type": 2,
            "tagName": "button",
            "attributes": {
              "id": "btnPlay",
              "type": "button"
            },
            "childNodes": [{
              "type": 3,
              "textContent": "Play Recording",
              "id": 28
            }],
            "id": 27
          }, {
            "type": 3,
            "textContent": "\n    ",
            "id": 29
          }, {
            "type": 2,
            "tagName": "div",
            "attributes": {
              "class": "container"
            },
            "childNodes": [{
              "type": 3,
              "textContent": "\n        ",
              "id": 31
            }, {
              "type": 2,
              "tagName": "div",
              "attributes": {
                "class": "calculator"
              },
              "childNodes": [{
                "type": 3,
                "textContent": "\n            ",
                "id": 33
              }, {
                "type": 2,
                "tagName": "form",
                "attributes": {},
                "childNodes": [{
                  "type": 3,
                  "textContent": "\n                ",
                  "id": 35
                }, {
                  "type": 5,
                  "textContent": " Display Screen  ",
                  "id": 36
                }, {
                  "type": 3,
                  "textContent": "\n                ",
                  "id": 37
                }, {
                  "type": 2,
                  "tagName": "div",
                  "attributes": {
                    "class": "display"
                  },
                  "childNodes": [{
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 39
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "text",
                      "name": "display",
                      "id": "screen"
                    },
                    "childNodes": [],
                    "id": 40
                  }, {
                    "type": 3,
                    "textContent": "\n                ",
                    "id": 41
                  }],
                  "id": 38
                }, {
                  "type": 3,
                  "textContent": "\n                ",
                  "id": 42
                }, {
                  "type": 5,
                  "textContent": " Buttons",
                  "id": 43
                }, {
                  "type": 3,
                  "textContent": "\n                ",
                  "id": 44
                }, {
                  "type": 2,
                  "tagName": "div",
                  "attributes": {},
                  "childNodes": [{
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 46
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": "AC",
                      "onclick": "display.value =''",
                      "class": "operator"
                    },
                    "childNodes": [],
                    "id": 47
                  }, {
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 48
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": "DE",
                      "onclick": "display.value = display.value.toString().slice(0,-1)",
                      "class": "operator"
                    },
                    "childNodes": [],
                    "id": 49
                  }, {
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 50
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": ".",
                      "onclick": "addoperator(this.value)",
                      "class": "operator"
                    },
                    "childNodes": [],
                    "id": 51
                  }, {
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 52
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": "/",
                      "onclick": "addoperator(this.value)"
                    },
                    "childNodes": [],
                    "id": 53
                  }, {
                    "type": 3,
                    "textContent": "\n                ",
                    "id": 54
                  }],
                  "id": 45
                }, {
                  "type": 3,
                  "textContent": "\n                ",
                  "id": 55
                }, {
                  "type": 2,
                  "tagName": "div",
                  "attributes": {},
                  "childNodes": [{
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 57
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": "7",
                      "onclick": "add(this.value)"
                    },
                    "childNodes": [],
                    "id": 58
                  }, {
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 59
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": "8",
                      "onclick": "add(this.value)"
                    },
                    "childNodes": [],
                    "id": 60
                  }, {
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 61
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": "9",
                      "onclick": "add(this.value)"
                    },
                    "childNodes": [],
                    "id": 62
                  }, {
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 63
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": "*",
                      "onclick": "addoperator(this.value)",
                      "class": "operator"
                    },
                    "childNodes": [],
                    "id": 64
                  }, {
                    "type": 3,
                    "textContent": "\n                ",
                    "id": 65
                  }],
                  "id": 56
                }, {
                  "type": 3,
                  "textContent": "\n                ",
                  "id": 66
                }, {
                  "type": 2,
                  "tagName": "div",
                  "attributes": {},
                  "childNodes": [{
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 68
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": "4",
                      "onclick": "add(this.value)"
                    },
                    "childNodes": [],
                    "id": 69
                  }, {
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 70
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": "5",
                      "onclick": "add(this.value)"
                    },
                    "childNodes": [],
                    "id": 71
                  }, {
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 72
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": "6",
                      "onclick": "add(this.value)"
                    },
                    "childNodes": [],
                    "id": 73
                  }, {
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 74
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": "-",
                      "onclick": "addoperator(this.value)",
                      "class": "operator"
                    },
                    "childNodes": [],
                    "id": 75
                  }, {
                    "type": 3,
                    "textContent": "\n                ",
                    "id": 76
                  }],
                  "id": 67
                }, {
                  "type": 3,
                  "textContent": "\n                ",
                  "id": 77
                }, {
                  "type": 2,
                  "tagName": "div",
                  "attributes": {},
                  "childNodes": [{
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 79
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": "1",
                      "onclick": "add(this.value)"
                    },
                    "childNodes": [],
                    "id": 80
                  }, {
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 81
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": "2",
                      "onclick": "add(this.value)"
                    },
                    "childNodes": [],
                    "id": 82
                  }, {
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 83
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": "3",
                      "onclick": "add(this.value)"
                    },
                    "childNodes": [],
                    "id": 84
                  }, {
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 85
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": "+",
                      "onclick": "addoperator(this.value)",
                      "class": "operator"
                    },
                    "childNodes": [],
                    "id": 86
                  }, {
                    "type": 3,
                    "textContent": "\n                ",
                    "id": 87
                  }],
                  "id": 78
                }, {
                  "type": 3,
                  "textContent": "\n                ",
                  "id": 88
                }, {
                  "type": 2,
                  "tagName": "div",
                  "attributes": {},
                  "childNodes": [{
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 90
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": "00",
                      "onclick": "add(this.value)"
                    },
                    "childNodes": [],
                    "id": 91
                  }, {
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 92
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": "0",
                      "onclick": "add(this.value)"
                    },
                    "childNodes": [],
                    "id": 93
                  }, {
                    "type": 3,
                    "textContent": "\n                    ",
                    "id": 94
                  }, {
                    "type": 2,
                    "tagName": "input",
                    "attributes": {
                      "type": "button",
                      "value": "=",
                      "onclick": "calc()",
                      "class": "equal operator"
                    },
                    "childNodes": [],
                    "id": 95
                  }, {
                    "type": 3,
                    "textContent": "\n                ",
                    "id": 96
                  }],
                  "id": 89
                }, {
                  "type": 3,
                  "textContent": "\n\n            ",
                  "id": 97
                }],
                "id": 34
              }, {
                "type": 3,
                "textContent": "\n        ",
                "id": 98
              }],
              "id": 32
            }, {
              "type": 3,
              "textContent": "\n    ",
              "id": 99
            }],
            "id": 30
          }, {
            "type": 3,
            "textContent": "\n    ",
            "id": 100
          }, {
            "type": 2,
            "tagName": "script",
            "attributes": {
              "src": "http://localhost:1234/src.a2b27638.js"
            },
            "childNodes": [],
            "id": 101
          }, {
            "type": 3,
            "textContent": "\n    ",
            "id": 102
          }, {
            "type": 2,
            "tagName": "script",
            "attributes": {},
            "childNodes": [{
              "type": 3,
              "textContent": "SCRIPT_PLACEHOLDER",
              "id": 104
            }],
            "id": 103
          }, {
            "type": 3,
            "textContent": "\n\n\n",
            "id": 105
          }],
          "id": 20
        }, {
          "type": 2,
          "tagName": "grammarly-desktop-integration",
          "attributes": {
            "data-grammarly-shadow-root": "true"
          },
          "childNodes": [{
            "type": 2,
            "tagName": "style",
            "attributes": {},
            "childNodes": [{
              "type": 3,
              "textContent": "div.grammarly-desktop-integration { position: absolute; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border: 0px; user-select: none; }div.grammarly-desktop-integration::before { content: attr(data-content); }",
              "isStyle": true,
              "id": 108
            }],
            "id": 107,
            "isShadow": true
          }, {
            "type": 2,
            "tagName": "div",
            "attributes": {
              "aria-label": "grammarly-integration",
              "role": "group",
              "tabindex": "-1",
              "class": "grammarly-desktop-integration",
              "data-content": "{\"mode\":\"full\",\"isActive\":true,\"isUserDisabled\":false}"
            },
            "childNodes": [],
            "id": 109,
            "isShadow": true
          }],
          "id": 106,
          "isShadowHost": true
        }],
        "id": 3
      }],
      "id": 1
    },
    "initialOffset": {
      "left": 0,
      "top": 0
    }
  },
  "timestamp": 1711543385133,
  "delay": 6
}, {
  "type": 3,
  "data": {
    "source": 1,
    "positions": [{
      "x": 77,
      "y": 8,
      "id": 24,
      "timeOffset": 0
    }]
  },
  "timestamp": 1711543385419,
  "delay": 292
}, {
  "type": 3,
  "data": {
    "source": 1,
    "positions": [{
      "x": 186,
      "y": 35,
      "id": 30,
      "timeOffset": -449
    }, {
      "x": 287,
      "y": 61,
      "id": 30,
      "timeOffset": -399
    }, {
      "x": 377,
      "y": 103,
      "id": 30,
      "timeOffset": -349
    }, {
      "x": 436,
      "y": 153,
      "id": 30,
      "timeOffset": -298
    }, {
      "x": 466,
      "y": 231,
      "id": 30,
      "timeOffset": -247
    }, {
      "x": 461,
      "y": 306,
      "id": 30,
      "timeOffset": -197
    }, {
      "x": 407,
      "y": 336,
      "id": 30,
      "timeOffset": -147
    }, {
      "x": 363,
      "y": 263,
      "id": 30,
      "timeOffset": -95
    }, {
      "x": 408,
      "y": 155,
      "id": 30,
      "timeOffset": -45
    }]
  },
  "timestamp": 1711543385918,
  "delay": 342
}, {
  "type": 3,
  "data": {
    "source": 3,
    "id": 1,
    "x": 0,
    "y": 56
  },
  "timestamp": 1711543386418,
  "delay": 1291
}, {
  "type": 3,
  "data": {
    "source": 1,
    "positions": [{
      "x": 516,
      "y": 144,
      "id": 30,
      "timeOffset": -496
    }, {
      "x": 583,
      "y": 213,
      "id": 30,
      "timeOffset": -445
    }, {
      "x": 593,
      "y": 327,
      "id": 30,
      "timeOffset": -395
    }]
  },
  "timestamp": 1711543386419,
  "delay": 796
}, {
  "type": 3,
  "data": {
    "source": 3,
    "id": 1,
    "x": 0,
    "y": 23
  },
  "timestamp": 1711543386681,
  "delay": 1554
}, {
  "type": 3,
  "data": {
    "source": 3,
    "id": 1,
    "x": 0,
    "y": 0
  },
  "timestamp": 1711543386781,
  "delay": 1654
}, {
  "type": 3,
  "data": {
    "source": 3,
    "id": 1,
    "x": 0,
    "y": 56
  },
  "timestamp": 1711543386881,
  "delay": 1754
}, {
  "type": 3,
  "data": {
    "source": 1,
    "positions": [{
      "x": 562,
      "y": 363,
      "id": 30,
      "timeOffset": 0
    }]
  },
  "timestamp": 1711543387508,
  "delay": 2381
}, {
  "type": 3,
  "data": {
    "source": 1,
    "positions": [{
      "x": 390,
      "y": 336,
      "id": 30,
      "timeOffset": -449
    }, {
      "x": 197,
      "y": 202,
      "id": 30,
      "timeOffset": -399
    }, {
      "x": 128,
      "y": 125,
      "id": 30,
      "timeOffset": -348
    }, {
      "x": 107,
      "y": 86,
      "id": 30,
      "timeOffset": -298
    }, {
      "x": 100,
      "y": 64,
      "id": 30,
      "timeOffset": -247
    }, {
      "x": 103,
      "y": 65,
      "id": 30,
      "timeOffset": -197
    }, {
      "x": 158,
      "y": 127,
      "id": 30,
      "timeOffset": -146
    }]
  },
  "timestamp": 1711543388008,
  "delay": 2432
}, {
  "type": 3,
  "data": {
    "source": 3,
    "id": 1,
    "x": 0,
    "y": 0
  },
  "timestamp": 1711543388065,
  "delay": 2938
}, {
  "type": 3,
  "data": {
    "source": 1,
    "positions": [{
      "x": 183,
      "y": 171,
      "id": 30,
      "timeOffset": -181
    }, {
      "x": 178,
      "y": 88,
      "id": 30,
      "timeOffset": -131
    }, {
      "x": 170,
      "y": 67,
      "id": 30,
      "timeOffset": -80
    }, {
      "x": 163,
      "y": 42,
      "id": 30,
      "timeOffset": -30
    }]
  },
  "timestamp": 1711543388508,
  "delay": 3200
}, {
  "type": 3,
  "data": {
    "source": 1,
    "positions": [{
      "x": 160,
      "y": 24,
      "id": 30,
      "timeOffset": -479
    }, {
      "x": 159,
      "y": 14,
      "id": 27,
      "timeOffset": -429
    }, {
      "x": 152,
      "y": 1,
      "id": 27,
      "timeOffset": -146
    }, {
      "x": 152,
      "y": 7,
      "id": 27,
      "timeOffset": -96
    }, {
      "x": 152,
      "y": 10,
      "id": 27,
      "timeOffset": -45
    }]
  },
  "timestamp": 1711543389008,
  "delay": 3402
}, {
  "type": 3,
  "data": {
    "source": 2,
    "type": 1,
    "id": 27,
    "x": 152,
    "y": 10
  },
  "timestamp": 1711543389206,
  "delay": 4079
}, {
  "type": 3,
  "data": {
    "source": 2,
    "type": 6,
    "id": 24
  },
  "timestamp": 1711543389207,
  "delay": 4080
}, {
  "type": 3,
  "data": {
    "source": 2,
    "type": 5,
    "id": 27
  },
  "timestamp": 1711543389207,
  "delay": 4080
}, {
  "type": 3,
  "data": {
    "source": 2,
    "type": 0,
    "id": 27,
    "x": 152,
    "y": 10
  },
  "timestamp": 1711543389385,
  "delay": 4258
}, {
  "type": 3,
  "data": {
    "source": 2,
    "type": 2,
    "id": 27,
    "x": 152,
    "y": 10
  },
  "timestamp": 1711543389385,
  "delay": 4258
}];
},{}],"src/index.js":[function(require,module,exports) {
"use strict";

var _rrweb = require("rrweb");
var _localforage = _interopRequireDefault(require("localforage"));
var _rrwebPlayer = _interopRequireDefault(require("rrweb-player"));
require("rrweb-player/dist/style.css");
var _test = require("../test");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var store = _localforage.default.createInstance({
  name: "EventStore"
});
store.clear(function () {
  console.log("Storage cleared");
});
var events = [];
var index = 0;
var stopFn;
document.getElementById("btnStart").onclick = function () {
  stopFn = (0, _rrweb.record)({
    emit: function emit(event) {
      events.push(event);
      store.setItem(String(index++), event);
    }
  });
};
document.getElementById("btnPlay").onclick = function () {
  stopFn();
  console.log("DATA:::::::::::::::", _test.recordingData);
  console.log("EVENTS:::::::::::::::", events);
  // events = recordingData
  new _rrwebPlayer.default({
    target: document.body,
    // customizable root element
    props: {
      events: events
    }
  });
};
},{"rrweb":"node_modules/rrweb/es/rrweb/packages/rrweb/src/entries/all.js","localforage":"node_modules/localforage/dist/localforage.js","rrweb-player":"node_modules/rrweb-player/dist/index.mjs","rrweb-player/dist/style.css":"node_modules/rrweb-player/dist/style.css","../test":"test.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36323" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map