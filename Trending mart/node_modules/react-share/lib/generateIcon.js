'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.generateIcon = generateIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icons = require('./icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateIcon(network) {
  if (!_icons2.default[network.toLowerCase()]) {
    throw new Error('invalid network name for a social icon');
  }

  var iconConfig = _icons2.default[network.toLowerCase()];

  var Icon = function Icon(props) {
    var className = props.className,
        iconBgStyle = props.iconBgStyle,
        logoFillColor = props.logoFillColor,
        round = props.round,
        size = props.size;


    var baseStyle = {
      width: size,
      height: size
    };

    var classes = 'social-icon social-icon--' + network + ' ' + className;

    var finalIconBgStyle = (0, _extends3.default)({}, iconBgStyle);

    return _react2.default.createElement(
      'div',
      { style: baseStyle },
      _react2.default.createElement(
        'svg',
        {
          viewBox: '0 0 64 64',
          width: size,
          height: size,
          className: classes },
        _react2.default.createElement(
          'g',
          null,
          !round ? _react2.default.createElement('rect', {
            width: '64',
            height: '64',
            fill: iconConfig.color,
            style: finalIconBgStyle }) : _react2.default.createElement('circle', {
            cx: '32',
            cy: '32',
            r: '31',
            fill: iconConfig.color,
            style: finalIconBgStyle })
        ),
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement('path', { d: iconConfig.icon, fill: logoFillColor })
        )
      )
    );
  };

  Icon.propTypes = {
    className: _propTypes2.default.string,
    iconBgStyle: _propTypes2.default.object,
    logoFillColor: _propTypes2.default.string,
    round: _propTypes2.default.bool,
    size: _propTypes2.default.number
  };

  Icon.defaultProps = {
    className: '',
    logoFillColor: 'white',
    size: 64
  };

  return Icon;
}