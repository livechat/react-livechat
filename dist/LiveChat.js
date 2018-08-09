'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LiveChat = function (_React$Component) {
  (0, _inherits3.default)(LiveChat, _React$Component);

  function LiveChat() {
    (0, _classCallCheck3.default)(this, LiveChat);
    return (0, _possibleConstructorReturn3.default)(this, (LiveChat.__proto__ || (0, _getPrototypeOf2.default)(LiveChat)).apply(this, arguments));
  }

  (0, _createClass3.default)(LiveChat, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.loadLiveChatApi.bind(this)();
    }
  }, {
    key: 'chatLoaded',
    value: function chatLoaded() {
      if (window.LC_API) {
        this.setCallbacks.bind(this)();
        if (typeof this.props.onChatLoaded === 'function') {
          this.props.onChatLoaded(window.LC_API);
        }
      }
    }
  }, {
    key: 'chatNotLoaded',
    value: function chatNotLoaded() {
      if (typeof this.props.onChatLoaded === 'function') {
        this.props.onErrorLoading && this.props.onErrorLoading();
      }
    }
  }, {
    key: 'loadLiveChatApi',
    value: function loadLiveChatApi() {
      if (!window.LC_API) {
        window.__lc = window.__lc || {};
        window.__lc.license = this.props.license;
        window.__lc.group = this.props.group;
        window.__lc.params = this.props.params;
        var lc = document.createElement('script');
        lc.type = 'text/javascript';
        lc.async = true;
        lc.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(lc, s);
        lc.addEventListener('load', this.chatLoaded.bind(this));
        lc.addEventListener('error', this.chatNotLoaded.bind(this));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }, {
    key: 'setCallbacks',
    value: function setCallbacks() {
      if (typeof this.props.onBeforeLoad === 'function') window.LC_API.on_before_load = this.props.onBeforeLoad.bind(this);

      if (typeof this.props.onAfterLoad === 'function') window.LC_API.on_after_load = this.props.onAfterLoad();

      if (typeof this.props.onChatWindowOpened === 'function') window.LC_API.on_chat_window_opened = this.props.onChatWindowOpened.bind(this);

      if (typeof this.props.onChatWindowMinimized === 'function') window.LC_API.on_chat_window_minimized = this.props.onChatWindowMinimized.bind(this);

      if (typeof this.props.onChatWindowHidden === 'function') window.LC_API.on_chat_window_hidden = this.props.onChatWindowHidden.bind(this);

      if (typeof this.props.onChatStateChanged === 'function') window.LC_API.on_chat_state_changed = this.props.onChatStateChanged.bind(this);

      if (typeof this.props.onChatStarted === 'function') window.LC_API.on_chat_started = this.props.onChatStarted.bind(this);

      if (typeof this.props.onChatEnded === 'function') window.LC_API.on_chat_ended = this.props.onChatEnded.bind(this);

      if (typeof this.props.onMessage === 'function') window.LC_API.on_message = this.props.onMessage.bind(this);

      if (typeof this.props.onTicketCreated === 'function') window.LC_API.on_ticket_created = this.props.onTicketCreated.bind(this);

      if (typeof this.props.onPrechatSurveySubmitted === 'function') window.LC_API.on_prechat_survey_submitted = this.props.onPrechatSurveySubmitted.bind(this);

      if (typeof this.props.onRatingSubmitted === 'function') window.LC_API.on_rating_submitted = this.props.onRatingSubmitted.bind(this);

      if (typeof this.props.onRatingCommentSubmitted === 'function') window.LC_API.on_rating_comment_submitted = this.props.onRatingCommentSubmitted.bind(this);
    }
  }]);
  return LiveChat;
}(_react2.default.Component);

exports.default = LiveChat;


LiveChat.propTypes = {
  // important
  license: _propTypes2.default.number.isRequired,
  group: _propTypes2.default.number,
  onChatLoaded: _propTypes2.default.func,
  // less important
  params: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.any.isRequired
  })),
  onBeforeLoad: _propTypes2.default.func,
  onAfterLoad: _propTypes2.default.func,
  onErrorLoading: _propTypes2.default.func,
  onChatWindowOpened: _propTypes2.default.func,
  onChatWindowMinimized: _propTypes2.default.func,
  onChatWindowHidden: _propTypes2.default.func,
  onChatStateChanged: _propTypes2.default.func,
  onChatStarted: _propTypes2.default.func,
  onChatEnded: _propTypes2.default.func,
  onMessage: _propTypes2.default.func,
  onTicketCreated: _propTypes2.default.func,
  onPrechatSurveySubmitted: _propTypes2.default.func,
  onPostchatSurveySubmitted: _propTypes2.default.func,
  onRatingSubmitted: _propTypes2.default.func,
  onRatingCommentSubmitted: _propTypes2.default.func
};

LiveChat.defaultProps = {
  group: 0
};