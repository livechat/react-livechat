import { useEffect } from 'react'
import PropTypes from 'prop-types'

const API_URL = 'https://cdn.livechatinc.com/tracking.js'
const NON_LC_CALLBACKS = ['onChatLoaded', 'onErrorLoading']

const loadLiveChat = (w, d, s, chatLoaded, chatNotLoaded) => {
  let e

  const f = (w) => {
    if (e._h) e._h.apply(null, w)
    else e._q.push(w)
  }

  e = {
    _q: [],
    _h: null,
    _v: '2.0',
    on() {
      f(['on', s.call(arguments)]) // eslint-disable-line
    },
    off() {
      f(['off', s.call(arguments)]) // eslint-disable-line
    },
    get() {
      if (!e._h) throw new Error('[LiveChatWidget] You can\'t use getters before load.')
      return f(['get', s.call(arguments)]) // eslint-disable-line
    },
    call() {
      f(['call', s.call(arguments)]) // eslint-disable-line
    },
    init() {
      const n = d.createElement('script')
      n.async = !0
      n.type = 'text/javascript'
      n.src = API_URL
      d.head.appendChild(n)
      n.addEventListener('load', chatLoaded)
      n.addEventListener('error', chatNotLoaded)
    },
  }
  if (!w.__lc.asyncInit) e.init()
  w.LiveChatWidget = w.LiveChatWidget || e
}

export const LiveChat = (props) => {
  const setCallbacks = () => {
    Object.keys(props).forEach((key) => {
      const prop = props[key]
      if (typeof prop !== 'function') return
      if (NON_LC_CALLBACKS.includes(prop.name)) return
      window.LC_API[prop.name] = prop
    })
  }

  const chatLoaded = () => {
    setCallbacks()
    const { onChatLoaded } = props
    if (onChatLoaded) onChatLoaded(window.LC_API)
  }

  const chatNotLoaded = () => {
    const { onErrorLoading } = props
    if (onErrorLoading) onErrorLoading()
  }

  useEffect(() => {
    const { group, license } = props
    if (!license) return

    window.__lc = window.__lc || {}
    window.__lc.license = license
    window.__lc.group = group

    loadLiveChat(window, document, [].slice, chatLoaded, chatNotLoaded)

    return () => {
      if (window.LC_API) window.LiveChatWidget.call('destroy')
      const loadedScript = document.querySelector(`script[src='${API_URL}']`)
      if (loadedScript) loadedScript.remove()
    }
  }, [])

  return null
}

LiveChat.propTypes = {
  // important
  license: PropTypes.number.isRequired,
  group: PropTypes.number,
  onChatLoaded: PropTypes.func,
  onErrorLoading: PropTypes.func,
  // less important
  params: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
  })),
  visitor: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
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
}

LiveChat.defaultProps = {
  group: 0,
}
