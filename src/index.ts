import { FC, useCallback, useEffect } from 'react';

import { isFunction } from './utils';

import { ILiveChatProps } from './types';

const LiveChat: FC<ILiveChatProps> = (props) => {
  useEffect(() => {
    loadLiveChatApi();
  }, []);

  const chatLoaded = () => {
    if (window.LC_API) {
      setCallbacks(props);
      isFunction(props.onChatLoaded) && props.onChatLoaded(window.LC_API);
    }
  };

  const chatNotLoaded = () => isFunction(props.onErrorLoading) && props.onErrorLoading();

  const loadLiveChatApi = () => {
    if (!window.LC_API) {
      window.__lc = window.__lc || {};
      window.__lc.license = props.license;
      window.__lc.group = props.group || 0;
      window.__lc.chat_between_groups = props.chatBetweenGroups;
      window.__lc.params = props.params;
      window.__lc.visitor = props.visitor;
      const lc = document.createElement('script');
      lc.type = 'text/javascript';
      lc.async = true;
      lc.src =
          ('https:' === document.location.protocol ? 'https://' : 'http://') +
          'cdn.livechatinc.com/tracking.js';
      const s = document.getElementsByTagName('script')[0];
      s.parentNode?.insertBefore(lc, s);

      lc.addEventListener('load', chatLoaded);
      lc.addEventListener('error', chatNotLoaded);
    }
  };

  const setCallbacks = useCallback((props) => {
    const {
      onBeforeLoad,
      onAfterLoad,
      onChatWindowOpened,
      onChatWindowMinimized,
      onChatWindowHidden,
      onChatStateChanged,
      onChatStarted,
      onChatEnded,
      onMessage,
      onTicketCreated,
      onPrechatSurveySubmitted,
      onRatingSubmitted,
      onRatingCommentSubmitted,
    } = props;
    const callbacks: any = {};

    if (isFunction(onBeforeLoad)) callbacks.on_before_load = onBeforeLoad;
    if (isFunction(onAfterLoad)) callbacks.on_after_load = onAfterLoad;
    if (isFunction(onChatWindowOpened)) callbacks.on_chat_window_opened = onChatWindowOpened;
    if (isFunction(onChatWindowMinimized))
      callbacks.on_chat_window_minimized = onChatWindowMinimized;
    if (isFunction(onChatWindowHidden)) callbacks.on_chat_window_hidden = onChatWindowHidden;
    if (isFunction(onChatStateChanged)) callbacks.on_chat_state_changed = onChatStateChanged;
    if (isFunction(onChatStarted)) callbacks.on_chat_started = onChatStarted;
    if (isFunction(onChatEnded)) callbacks.on_chat_ended = onChatEnded;
    if (isFunction(onMessage)) callbacks.on_message = onMessage;
    if (isFunction(onTicketCreated)) callbacks.on_ticket_created = onTicketCreated;
    if (isFunction(onPrechatSurveySubmitted))
      callbacks.on_prechat_survey_submitted = onPrechatSurveySubmitted;
    if (isFunction(onRatingSubmitted)) callbacks.on_rating_submitted = onRatingSubmitted;
    if (isFunction(onRatingCommentSubmitted))
      callbacks.on_rating_comment_submitted = onRatingCommentSubmitted;

    window.LC_API = { ...window.LC_API, ...callbacks };
  }, []);

  return null;
};

export default LiveChat
