import React from 'react';
import PropTypes from 'prop-types';

export default class LiveChat extends React.Component {
  componentWillMount() {
    this.loadLiveChatApi.bind(this)();
  }

  chatLoaded() {
    if (window.LC_API) {
      this.setCallbacks.bind(this)();
      if (typeof this.props.onChatLoaded === 'function') {
        this.props.onChatLoaded(window.LC_API);
      }
    }
  }

  chatNotLoaded() {
    if (typeof this.props.onErrorLoading === 'function') {
      this.props.onErrorLoading();
    }
  }

  loadLiveChatApi() {
    if (!window.LC_API) {
      window.__lc = window.__lc || {};
      window.__lc.license = this.props.license;
      window.__lc.group = this.props.group;
      window.__lc.chat_between_groups = this.props.chatBetweenGroups;
      window.__lc.params = this.props.params;
      window.__lc.visitor = this.props.visitor;
      const lc = document.createElement('script');
      lc.type = 'text/javascript';
      lc.async = true;
      lc.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
      const s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(lc, s);
      lc.addEventListener('load', this.chatLoaded.bind(this));
      lc.addEventListener('error', this.chatNotLoaded.bind(this));
    }
  }

  render() {
    return null;
  }

  setCallbacks() {
    if (typeof this.props.onBeforeLoad === 'function')
      window.LC_API.on_before_load = this.props.onBeforeLoad.bind(this);

    if (typeof this.props.onAfterLoad === 'function')
      window.LC_API.on_after_load = this.props.onAfterLoad.bind(this);

    if (typeof this.props.onChatWindowOpened === 'function')
      window.LC_API.on_chat_window_opened = this.props.onChatWindowOpened.bind(this);

    if (typeof this.props.onChatWindowMinimized === 'function')
      window.LC_API.on_chat_window_minimized = this.props.onChatWindowMinimized.bind(this);

    if (typeof this.props.onChatWindowHidden === 'function')
      window.LC_API.on_chat_window_hidden = this.props.onChatWindowHidden.bind(this);

    if (typeof this.props.onChatStateChanged === 'function')
      window.LC_API.on_chat_state_changed = this.props.onChatStateChanged.bind(this);

    if (typeof this.props.onChatStarted === 'function')
      window.LC_API.on_chat_started = this.props.onChatStarted.bind(this);

    if (typeof this.props.onChatEnded === 'function')
      window.LC_API.on_chat_ended = this.props.onChatEnded.bind(this);

    if (typeof this.props.onMessage === 'function')
      window.LC_API.on_message = this.props.onMessage.bind(this);

    if (typeof this.props.onTicketCreated === 'function')
      window.LC_API.on_ticket_created = this.props.onTicketCreated.bind(this);

    if (typeof this.props.onPrechatSurveySubmitted === 'function')
      window.LC_API.on_prechat_survey_submitted = this.props.onPrechatSurveySubmitted.bind(this);

    if (typeof this.props.onRatingSubmitted === 'function')
      window.LC_API.on_rating_submitted = this.props.onRatingSubmitted.bind(this);

    if (typeof this.props.onRatingCommentSubmitted === 'function')
      window.LC_API.on_rating_comment_submitted = this.props.onRatingCommentSubmitted.bind(this);
  }
}

LiveChat.propTypes = {
  // important
  license: PropTypes.number.isRequired,
  group: PropTypes.number,
  onChatLoaded: PropTypes.func,
  // less important
  params: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  })),
  visitor: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string
  }),
  chatBetweenGroups: PropTypes.bool,
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

LiveChat.defaultProps = {
  group: 0,
};
