'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.email = email;
exports.twitter = twitter;
exports.telegram = telegram;
exports.whatsapp = whatsapp;
exports.facebook = facebook;
exports.googlePlus = googlePlus;
exports.linkedin = linkedin;
exports.pinterest = pinterest;
exports.vk = vk;
exports.ok = ok;
exports.reddit = reddit;
exports.tumblr = tumblr;
exports.livejournal = livejournal;
exports.mailru = mailru;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-template */
function email(url, _ref) {
  var subject = _ref.subject,
      body = _ref.body;

  return 'mailto:' + (0, _utils.objectToGetParams)({ subject: subject, body: body || subject });
}

function twitter(url, _ref2) {
  var title = _ref2.title,
      via = _ref2.via,
      _ref2$hashtags = _ref2.hashtags,
      hashtags = _ref2$hashtags === undefined ? [] : _ref2$hashtags;

  (0, _assert2.default)(url, 'twitter.url');
  (0, _assert2.default)(Array.isArray(hashtags), 'twitter.hashtags is not an array');

  return 'https://twitter.com/share' + (0, _utils.objectToGetParams)({
    url: url,
    text: title,
    via: via,
    hashtags: hashtags.join(',')
  });
}

function telegram(url, _ref3) {
  var title = _ref3.title;

  (0, _assert2.default)(url, 'telegram.url');
  return 'https://telegram.me/share/' + (0, _utils.objectToGetParams)({
    url: url,
    text: title
  });
}

function whatsapp(url, _ref4) {
  var title = _ref4.title,
      separator = _ref4.separator;

  (0, _assert2.default)(url, 'whatsapp.url');
  return 'https://api.whatsapp.com/send' + (0, _utils.objectToGetParams)({
    text: title ? title + separator + url : url
  });
}

function facebook(url, _ref5) {
  var quote = _ref5.quote,
      hashtag = _ref5.hashtag;

  (0, _assert2.default)(url, 'facebook.url');

  return 'https://www.facebook.com/sharer/sharer.php' + (0, _utils.objectToGetParams)({
    u: url,
    quote: quote,
    hashtag: hashtag
  });
}

function googlePlus(url) {
  (0, _assert2.default)(url, 'googlePlus.url');

  return 'https://plus.google.com/share' + (0, _utils.objectToGetParams)({ url: url });
}

function linkedin(url, _ref6) {
  var title = _ref6.title,
      description = _ref6.description;

  (0, _assert2.default)(url, 'linkedin.url');

  return 'https://linkedin.com/shareArticle' + (0, _utils.objectToGetParams)({
    url: url,
    title: title,
    summary: description
  });
}

function pinterest(url, _ref7) {
  var media = _ref7.media,
      description = _ref7.description;

  (0, _assert2.default)(url, 'pinterest.url');
  (0, _assert2.default)(media, 'pinterest.media');

  return 'https://pinterest.com/pin/create/button/' + (0, _utils.objectToGetParams)({
    url: url,
    media: media,
    description: description
  });
}

function vk(url, _ref8) {
  var title = _ref8.title,
      description = _ref8.description,
      image = _ref8.image;

  (0, _assert2.default)(url, 'vk.url');

  return 'https://vk.com/share.php' + (0, _utils.objectToGetParams)({
    url: url,
    title: title,
    description: description,
    image: image
  });
}

function ok(url, _ref9) {
  var title = _ref9.title,
      description = _ref9.description,
      image = _ref9.image;

  (0, _assert2.default)(url, 'ok.url');

  return 'https://connect.ok.ru/offer' + (0, _utils.objectToGetParams)({
    url: url,
    title: title,
    description: description,
    imageUrl: image
  });
}

function reddit(url, _ref10) {
  var title = _ref10.title;

  (0, _assert2.default)(url, 'reddit.url');

  return 'https://www.reddit.com/submit' + (0, _utils.objectToGetParams)({
    url: url,
    title: title
  });
}

function tumblr(url, _ref11) {
  var title = _ref11.title,
      caption = _ref11.caption,
      tags = _ref11.tags,
      posttype = _ref11.posttype;

  (0, _assert2.default)(url, 'tumblr.url');

  return 'https://www.tumblr.com/widgets/share/tool' + (0, _utils.objectToGetParams)({
    canonicalUrl: url,
    title: title,
    caption: caption,
    tags: tags,
    posttype: posttype
  });
}

function livejournal(url, _ref12) {
  var title = _ref12.title,
      description = _ref12.description;

  (0, _assert2.default)(url, 'livejournal.url');

  return 'https://www.livejournal.com/update.bml' + (0, _utils.objectToGetParams)({
    subject: title,
    event: description
  });
}

function mailru(url, _ref13) {
  var title = _ref13.title,
      description = _ref13.description,
      image = _ref13.image;

  (0, _assert2.default)(url, 'mailru.url');

  return 'https://connect.mail.ru/share' + (0, _utils.objectToGetParams)({
    url: url,
    title: title,
    description: description,
    imageurl: image
  });
}