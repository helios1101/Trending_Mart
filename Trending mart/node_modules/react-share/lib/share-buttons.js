'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MailruShareButton = exports.LivejournalShareButton = exports.TumblrShareButton = exports.RedditShareButton = exports.OKShareButton = exports.VKShareButton = exports.PinterestShareButton = exports.LinkedinShareButton = exports.GooglePlusShareButton = exports.EmailShareButton = exports.WhatsappShareButton = exports.TelegramShareButton = exports.TwitterShareButton = exports.FacebookShareButton = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _socialMediaShareLinks = require('./social-media-share-links');

var links = _interopRequireWildcard(_socialMediaShareLinks);

var _utils = require('./utils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var supportedNetworks = (0, _keys2.default)(links); /* eslint-disable react/no-multi-comp */

var ShareButton = function (_Component) {
  (0, _inherits3.default)(ShareButton, _Component);

  function ShareButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ShareButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ShareButton.__proto__ || (0, _getPrototypeOf2.default)(ShareButton)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          openWindow = _this$props.openWindow;


      if (disabled) {
        return;
      }

      e.preventDefault();

      var link = _this.link();

      if (openWindow) {
        _this.openWindow(link);
      }

      if (onClick) {
        onClick(link);
      }
    }, _this.onKeyPress = function (e) {
      if (e.key === 'Enter' || e.key === 13) {
        _this.onClick(e);
      }
    }, _this.openWindow = function (link) {
      var _this$props2 = _this.props,
          beforeOnClick = _this$props2.beforeOnClick,
          onShareWindowClose = _this$props2.onShareWindowClose,
          windowWidth = _this$props2.windowWidth,
          windowHeight = _this$props2.windowHeight;


      var windowOptions = {
        height: windowHeight,
        width: windowWidth
      };

      var windowOpenBound = function windowOpenBound() {
        return (0, _utils.windowOpen)(link, windowOptions, onShareWindowClose);
      };

      if (beforeOnClick) {
        var returnVal = beforeOnClick();

        if ((0, _utils.isPromise)(returnVal)) {
          returnVal.then(windowOpenBound);
        } else {
          windowOpenBound();
        }
      } else {
        windowOpenBound();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ShareButton, [{
    key: 'link',
    value: function link() {
      var _props = this.props,
          url = _props.url,
          opts = _props.opts,
          network = _props.network;

      return links[network](url, opts);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          additionalProps = _props2.additionalProps,
          children = _props2.children,
          className = _props2.className,
          disabled = _props2.disabled,
          disabledStyle = _props2.disabledStyle,
          network = _props2.network,
          role = _props2.role,
          style = _props2.style,
          tabIndex = _props2.tabIndex;


      var classes = (0, _classnames2.default)('SocialMediaShareButton', 'SocialMediaShareButton--' + network, {
        'SocialMediaShareButton--disabled': !!disabled,
        disabled: !!disabled
      }, className);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, additionalProps, {
          role: role,
          tabIndex: tabIndex,
          onClick: this.onClick,
          onKeyPress: this.onKeyPress,
          className: classes,
          style: (0, _extends3.default)({}, style, disabled ? disabledStyle : {}) }),
        children
      );
    }
  }]);
  return ShareButton;
}(_react.Component);

/* HOC to ease migration from v1 to v2.
 * To-be-removed in v2.
 */


ShareButton.propTypes = {
  additionalProps: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  disabledStyle: _propTypes2.default.object,
  network: _propTypes2.default.oneOf(supportedNetworks),
  onClick: _propTypes2.default.func,
  opts: _propTypes2.default.object,
  openWindow: _propTypes2.default.bool,
  url: _propTypes2.default.string.isRequired,
  role: _propTypes2.default.string,
  style: _propTypes2.default.object,
  windowWidth: _propTypes2.default.number,
  windowHeight: _propTypes2.default.number,
  beforeOnClick: _propTypes2.default.func,
  onShareWindowClose: _propTypes2.default.func,
  tabIndex: _propTypes2.default.string
};
ShareButton.defaultProps = {
  disabledStyle: {
    opacity: 0.6
  },
  openWindow: true,
  role: 'button',
  tabIndex: '0'
};
exports.default = ShareButton;
function createShareButton(network) {
  var optsMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return {};
  };
  var propTypes = arguments[2];
  var defaultProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var CreatedButton = function CreatedButton(props) {
    return _react2.default.createElement(ShareButton, (0, _extends3.default)({}, props, {
      network: network,
      opts: optsMap(props) }));
  };

  CreatedButton.propTypes = propTypes;
  CreatedButton.defaultProps = defaultProps;

  return CreatedButton;
}

var FacebookShareButton = exports.FacebookShareButton = createShareButton('facebook', function (props) {
  /* eslint-disable no-console */
  if (props.picture) {
    console.warn('FacebookShareButton warning: picture is a deprecated prop.');
  }

  if (props.title) {
    console.warn('FacebookShareButton warning: title is a deprecated prop. Use "quote" instead.');
  }

  if (props.description) {
    console.warn('FacebookShareButton warning: description is a deprecated prop.\n      Use "quote" instead.');
  }
  /* eslint-enable no-console */

  return {
    quote: props.quote,
    hashtag: props.hashtag
  };
}, {
  quote: _propTypes2.default.string,
  hashtag: _propTypes2.default.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

var TwitterShareButton = exports.TwitterShareButton = createShareButton('twitter', function (props) {
  return {
    hashtags: props.hashtags,
    title: props.title,
    via: props.via
  };
}, {
  hashtags: _propTypes2.default.arrayOf(_propTypes2.default.string),
  title: _propTypes2.default.string,
  via: _propTypes2.default.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

var TelegramShareButton = exports.TelegramShareButton = createShareButton('telegram', function (props) {
  return {
    title: props.title,
    via: props.via
  };
}, {
  title: _propTypes2.default.string,
  via: _propTypes2.default.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

var WhatsappShareButton = exports.WhatsappShareButton = createShareButton('whatsapp', function (props) {
  return {
    title: props.title,
    separator: props.separator
  };
}, {
  title: _propTypes2.default.string,
  separator: _propTypes2.default.string
}, {
  separator: ' ',
  windowWidth: 550,
  windowHeight: 400
});

var EmailShareButton = exports.EmailShareButton = createShareButton('email', function (props) {
  return {
    subject: props.subject,
    body: props.body
  };
}, {
  subject: _propTypes2.default.string,
  body: _propTypes2.default.string
}, {
  openWindow: false,
  onClick: function onClick(link) {
    window.location.href = link;
  }
});

var GooglePlusShareButton = exports.GooglePlusShareButton = createShareButton('googlePlus', undefined, undefined, {
  windowWidth: 550,
  windowHeight: 400
});

var LinkedinShareButton = exports.LinkedinShareButton = createShareButton('linkedin', function (props) {
  return {
    title: props.title,
    description: props.description
  };
}, {
  title: _propTypes2.default.string,
  description: _propTypes2.default.string
}, {
  windowWidth: 750,
  windowHeight: 600
});

var PinterestShareButton = exports.PinterestShareButton = createShareButton('pinterest', function (props) {
  return {
    media: props.media,
    description: props.description
  };
}, {
  media: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string
}, {
  windowWidth: 1000,
  windowHeight: 730
});

var VKShareButton = exports.VKShareButton = createShareButton('vk', function (props) {
  return {
    title: props.title,
    description: props.description,
    image: props.image
  };
}, {
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  image: _propTypes2.default.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

var OKShareButton = exports.OKShareButton = createShareButton('ok', function (props) {
  return {
    title: props.title,
    description: props.description,
    image: props.image
  };
}, {
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  image: _propTypes2.default.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

var RedditShareButton = exports.RedditShareButton = createShareButton('reddit', function (props) {
  return {
    title: props.title
  };
}, {
  title: _propTypes2.default.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

var TumblrShareButton = exports.TumblrShareButton = createShareButton('tumblr', function (props) {
  return {
    title: props.title,
    tags: props.tags.join(','),
    caption: props.caption,
    posttype: props.posttype
  };
}, {
  title: _propTypes2.default.string,
  caption: _propTypes2.default.string,
  posttype: _propTypes2.default.string,
  tags: _propTypes2.default.arrayOf(_propTypes2.default.string)
}, {
  tags: [],
  posttype: 'link',
  windowWidth: 660,
  windowHeight: 460
});

var LivejournalShareButton = exports.LivejournalShareButton = createShareButton('livejournal', function (props) {
  return {
    title: props.title,
    description: props.description
  };
}, {
  title: _propTypes2.default.string,
  description: _propTypes2.default.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

var MailruShareButton = exports.MailruShareButton = createShareButton('mailru', function (props) {
  return {
    title: props.title,
    description: props.description,
    image: props.image
  };
}, {
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  image: _propTypes2.default.string
}, {
  windowWidth: 660,
  windowHeight: 460
});