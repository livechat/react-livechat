(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types'], factory) :
	(factory((global['React LiveChat'] = {}),global.React,global.PropTypes));
}(this, (function (exports,React,PropTypes) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LiveChat = function (_React$Component) {
  _inherits(LiveChat, _React$Component);

  function LiveChat() {
    _classCallCheck(this, LiveChat);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  LiveChat.prototype.componentWillMount = function componentWillMount() {
    this.loadLiveChatApi.bind(this)();
  };

  LiveChat.prototype.chatLoaded = function chatLoaded() {
    if (window.LC_API) {
      this.setCallbacks.bind(this)();
      if (typeof this.props.onChatLoaded === 'function') {
        this.props.onChatLoaded(window.LC_API);
      }
    }
  };

  LiveChat.prototype.chatNotLoaded = function chatNotLoaded() {
    if (typeof this.props.onChatLoaded === 'function') {
      this.props.onChatLoaded('error when loading');
    }
  };

  LiveChat.prototype.loadLiveChatApi = function loadLiveChatApi() {
    if (!window.LC_API) {
      window.__lc = window.__lc || {};
      window.__lc.license = this.props.license;
      window.__lc.group = this.props.group;
      var lc = document.createElement('script');
      lc.type = 'text/javascript';
      lc.async = true;
      lc.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(lc, s);
      lc.addEventListener('load', this.chatLoaded.bind(this));
      lc.addEventListener('error', this.chatNotLoaded.bind(this));
    }
  };

  LiveChat.prototype.render = function render() {
    return null;
  };

  LiveChat.prototype.setCallbacks = function setCallbacks() {
    if (typeof this.props.onBeforeLoad === 'function') window.LC_API.on_before_load = this.props.onBeforeLoad.bind(this);

    if (typeof this.props.onAfterLoad === 'function') window.LC_API.on_after_load = this.props.onAfterLoad.bind(this);

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
  };

  return LiveChat;
}(React.Component);

LiveChat.propTypes = {
  // important
  license: PropTypes.number.isRequired,
  group: PropTypes.number,
  onChatLoaded: PropTypes.func,
  // less important
  onBeforeLoad: PropTypes.func,
  onAfterLoad: PropTypes.func,
  onChatWindowOpened: PropTypes.func,
  onChatWindowMinimized: PropTypes.func,
  onChatWindowHidden: PropTypes.func,
  onChatStateChanged: PropTypes.func,
  onChatStarted: PropTypes.func,
  onChatEnded: PropTypes.func,
  onMessage: PropTypes.func,
  onTicketCreated: PropTypes.func,
  onPrechatSurveySubmitted: PropTypes.func,
  onPostchatSurveySubmitted: PropTypes.func,
  onRatingSubmitted: PropTypes.func,
  onRatingCommentSubmitted: PropTypes.func
};

LiveChat.defaultProps = {
  group: 0
};

exports.default = LiveChat;

Object.defineProperty(exports, '__esModule', { value: true });

})));
