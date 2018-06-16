'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVKShareCount = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.getFacebookShareCount = getFacebookShareCount;
exports.getGooglePlusShareCount = getGooglePlusShareCount;
exports.getLinkedinShareCount = getLinkedinShareCount;
exports.getPinterestShareCount = getPinterestShareCount;
exports.getOKShareCount = getOKShareCount;
exports.getRedditShareCount = getRedditShareCount;
exports.getTumblrShareCount = getTumblrShareCount;

var _jsonp = require('jsonp');

var _jsonp2 = _interopRequireDefault(_jsonp);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFacebookShareCount(shareUrl, callback) {
  var endpoint = 'https://graph.facebook.com/?id=' + shareUrl;

  (0, _jsonp2.default)(endpoint, function (err, data) {
    callback(!err && data && data.share && data.share.share_count ? data.share.share_count : undefined);
  });
}

function getGooglePlusShareCount(shareUrl, callback) {
  if ((0, _utils.isInternetExplorerBefore)(11)) {
    /* eslint-disable no-console */
    console.error('Google plus share count is not supported in <=IE10!');
    /* eslint-enable no-console */
    return;
  }

  var xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://clients6.google.com/rpc');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

  xhr.send((0, _stringify2.default)({
    method: 'pos.plusones.get',
    id: 'p',
    params: {
      nolog: true,
      id: shareUrl,
      source: 'widget',
      userId: '@viewer',
      groupId: '@self'
    },
    jsonrpc: '2.0',
    key: 'p',
    apiVersion: 'v1'
  }));

  xhr.onload = function onSuccessdata() {
    var data = JSON.parse(this.responseText);
    callback(!!data ? data.result.metadata.globalCounts.count : undefined);
  };

  xhr.onerror = function onErrordata() {};
}

function getLinkedinShareCount(shareUrl, callback) {
  var url = 'https://www.linkedin.com/countserv/count/share';

  return (0, _jsonp2.default)(url + (0, _utils.objectToGetParams)({
    url: shareUrl,
    format: 'jsonp'
  }), function (err, data) {
    callback(!!data ? data.count : undefined);
  });
}

function getPinterestShareCount(shareUrl, callback) {
  var url = 'https://api.pinterest.com/v1/urls/count.json';

  return (0, _jsonp2.default)(url + (0, _utils.objectToGetParams)({
    url: shareUrl
  }), function (err, data) {
    callback(!!data ? data.count : undefined);
  });
}

function getVKShareCount(shareUrl, callback) {
  if (!window.VK) {
    window.VK = {
      Share: {
        count: function count(index, _count2) {
          return window.VK.callbacks[index](_count2);
        }
      },
      callbacks: []
    };
  }

  var url = 'https://vk.com/share.php';
  var index = window.VK.callbacks.length;

  window.VK.callbacks.push(callback);

  return (0, _jsonp2.default)(url + (0, _utils.objectToGetParams)({
    act: 'count',
    index: index,
    url: shareUrl
  }));
}

exports.getVKShareCount = getVKShareCount;
function getOKShareCount(shareUrl, callback) {
  if (!window.OK) {
    window.OK = {
      Share: {
        count: function count(index, _count) {
          return window.OK.callbacks[index](_count);
        }
      },
      callbacks: []
    };
  }

  var url = 'https://connect.ok.ru/dk';
  var index = window.OK.callbacks.length;

  window.ODKL = {
    updateCount: function updateCount(a, b) {
      window.OK.callbacks[index](b);
    }
  };
  window.OK.callbacks.push(callback);

  return (0, _jsonp2.default)(url + (0, _utils.objectToGetParams)({
    'st.cmd': 'extLike',
    uid: 'odklcnt0',
    ref: shareUrl
  }));
}

function getRedditShareCount(shareUrl, callback) {
  var endpoint = 'https://www.reddit.com/api/info.json?limit=1&url=' + shareUrl;

  (0, _jsonp2.default)(endpoint, { param: 'jsonp' }, function (err, response) {
    callback(!err && response && response.data && response.data.children.length > 0 && response.data.children[0].data.score ? response.data.children[0].data.score : undefined);
  });
}

function getTumblrShareCount(shareUrl, callback) {
  var endpoint = 'http://api.tumblr.com/v2/share/stats';

  return (0, _jsonp2.default)(endpoint + (0, _utils.objectToGetParams)({
    url: shareUrl
  }), function (err, data) {
    callback(!!data ? data.note_count : undefined);
  });
}