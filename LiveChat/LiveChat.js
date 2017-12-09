import React from 'react';
import PropTypes from 'prop-types';

let context;
export default class LiveChat extends React.Component {
  constructor(props) {
    super(props);
    context = this;
    this.state = {
      license: props.license
    };
    this.loadLiveChatApi();
  }

  loadLiveChatApi() {
    if (!window.LC_API) {
      window.__lc = window.__lc || {};
      window.__lc.license = this.state.license;
      (function () {
        const lc = document.createElement('script');
        lc.type = 'text/javascript';
        lc.async = true;
        lc.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
        const s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(lc, s);
        lc.addEventListener('load', function() {
          if (window.LC_API) {
            context.setCallbacks();
            if (typeof context.props.onChatLoaded === 'function') {
              context.props.onChatLoaded(window.LC_API);
            }
          }
        });
        lc.addEventListener('error', function(e) {
          console.error(e);
          if (typeof context.props.onChatLoaded === 'function') {
            context.props.onChatLoaded('error when loading');
          }
        });
      })();
    }
  }

  render() {
    return null;
  }

  setCallbacks(){
    if (typeof context.props.onBeforeLoad === 'function') {
      window.LC_API.on_before_load = function() {
        context.props.onBeforeLoad();
      };
    }
    if (typeof context.props.onAfterLoad === 'function') {
      window.LC_API.on_after_load = function() {
        context.props.onAfterLoad();
      };
    }
    if (typeof context.props.onChatWindowOpened === 'function') {
      window.LC_API.on_chat_window_opened = function() {
        context.props.onChatWindowOpened();
      };
    }
    if (typeof context.props.onChatWindowMinimized === 'function') {
      window.LC_API.on_chat_window_minimized = function() {
        context.props.onChatWindowMinimized();
      };
    }
    if (typeof context.props.onChatWindowHidden === 'function') {
      window.LC_API.on_chat_window_hidden = function() {
        context.props.onChatWindowHidden();
      };
    }
    if (typeof context.props.onChatStateChanged === 'function') {
      window.LC_API.on_chat_state_changed = function(data) {
        context.props.onChatStateChanged(data);
      };
    }
    if (typeof context.props.onChatStarted === 'function') {
      window.LC_API.on_chat_started = function(data) {
        context.props.onChatStarted(data);
      };
    }
    if (typeof context.props.onChatEnded === 'function') {
      window.LC_API.on_chat_ended = function() {
        context.props.onChatEnded();
      };
    }
    if (typeof context.props.onMessage === 'function') {
      window.LC_API.on_message = function(data) {
        context.props.onMessage(data);
      };
    }
    if (typeof context.props.onTicketCreated === 'function') {
      window.LC_API.on_ticket_created = function(data) {
        context.props.onTicketCreated(data);
      };
    }
    if (typeof context.props.onPrechatSurveySubmitted === 'function') {
      window.LC_API.on_prechat_survey_submitted = function(data) {
        context.props.onPrechatSurveySubmitted(data);
      };
    }
    if (typeof context.props.onRatingSubmitted === 'function') {
      window.LC_API.on_rating_submitted = function(data) {
        context.props.onRatingSubmitted(data);
      };
    }
    if (typeof context.props.onRatingCommentSubmitted === 'function') {
      window.LC_API.on_rating_comment_submitted = function(data) {
        context.props.onRatingCommentSubmitted(data);
      };
    }
  }
}

LiveChat.propTypes = {
  // important
  license: PropTypes.number.isRequired,
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
  onRatingCommentSubmitted: PropTypes.func,
};
