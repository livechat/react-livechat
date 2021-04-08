import React from 'react';
import PropTypes from 'prop-types';

export default class LiveChat extends React.Component {
	componentDidMount() {
		this.loadLiveChatApi.bind( this )();
	}

	chatLoaded() {
		if ( window.LiveChatWidget ) {
			this.setCallbacks.bind( this )();
			if ( typeof this.props.onChatLoaded === 'function' ) {
				this.props.onChatLoaded( window.LiveChatWidget );
			}
		}
	}

	chatNotLoaded() {
		if ( typeof this.props.onErrorLoading === 'function' ) {
			this.props.onErrorLoading();
		}
	}

	loadLiveChatApi() {
		if ( ! window.LiveChatWidget ) {
			window.__lc = window.__lc || {};
			window.__lc.license = this.props.license;
			window.__lc.group = this.props.group;
			window.__lc.skill = this.props.group;
			window.__lc.chat_between_groups = this.props.chatBetweenGroups;
			window.__lc.params = this.props.params;
			window.__lc.visitor = this.props.visitor;
			const lc = document.createElement( 'script' );
			lc.type = 'text/javascript';
			lc.async = true;
			lc.src =
				( 'https:' === document.location.protocol
					? 'https://'
					: 'http://' ) + 'cdn.livechatinc.com/tracking.js';
			const s = document.getElementsByTagName( 'script' )[ 0 ];
			s.parentNode.insertBefore( lc, s );
			this.setLiveChatWidget();
			lc.addEventListener( 'load', this.chatLoaded.bind( this ) );
			lc.addEventListener( 'error', this.chatNotLoaded.bind( this ) );
		}
	}

	setLiveChatWidget() {
		const c = [].slice;
		function i( n ) {
			return e._h ? e._h.apply( null, n ) : e._q.push( n );
		}
		const e = {
			_q: [],
			_h: null,
			_v: '2.0',
			on() {
				i( [ 'on', c.call( arguments ) ] );
			},
			once() {
				i( [ 'once', c.call( arguments ) ] );
			},
			off() {
				i( [ 'off', c.call( arguments ) ] );
			},
			get() {
				if ( ! e._h )
					throw new Error(
						"[LiveChatWidget] You can't use getters before load."
					);
				return i( [ 'get', c.call( arguments ) ] );
			},
			call() {
				i( [ 'call', c.call( arguments ) ] );
			},
		};
		return ( window.LiveChatWidget = window.LiveChatWidget || e );
	}

	render() {
		return null;
	}

	setCallbacks() {
		if ( typeof this.props.onReady === 'function' ) {
			window.LiveChatWidget.on(
				'ready',
				this.props.onReady.bind( this )
			);
		}

		if ( typeof this.props.onVisibilityChanged === 'function' ) {
			window.LiveChatWidget.on(
				'visibility_changed',
				this.props.onVisibilityChanged.bind( this )
			);
		}

		if ( typeof this.props.onCustomerStatusChanged === 'function' ) {
			window.LiveChatWidget.on(
				'customer_status_changed',
				this.props.onCustomerStatusChanged.bind( this )
			);
		}

		if ( typeof this.props.onChatWindowHidden === 'function' ) {
			window.LiveChatWidget.on(
				'visibility_changed',
				this.props.onChatWindowHidden.bind( this )
			);
		}

		if ( typeof this.props.onNewEvent === 'function' ) {
			window.LiveChatWidget.on(
				'new_event',
				this.props.onNewEvent.bind( this )
			);
		}

		if ( typeof this.props.onFormSubmitted === 'function' ) {
			window.LiveChatWidget.on(
				'form_submitted',
				this.props.onFormSubmitted.bind( this )
			);
		}

		if ( typeof this.props.onRatingSubmitted === 'function' ) {
			window.LiveChatWidget.on(
				'rating_submitted',
				this.props.onRatingSubmitted.bind( this )
			);
		}

		if ( typeof this.props.onGreetingDisplayed === 'function' ) {
			window.LiveChatWidget.on(
				'greeting_displayed',
				this.props.onGreetingDisplayed.bind( this )
			);
		}

		if ( typeof this.props.onGreetingHidden === 'function' ) {
			window.LiveChatWidget.on(
				'greeting_hidden',
				this.props.onGreetingHidden.bind( this )
			);
		}

		if ( typeof this.props.onRichMessageButtonClicked === 'function' ) {
			window.LiveChatWidget.on(
				'rich_message_button_clicked',
				this.props.onRichMessageButtonClicked.bind( this )
			);
		}
	}
}

LiveChat.propTypes = {
	// important
	license: PropTypes.number.isRequired,
	group: PropTypes.number,
	onChatLoaded: PropTypes.func,
	// less important
	params: PropTypes.arrayOf(
		PropTypes.shape( {
			name: PropTypes.string.isRequired,
			value: PropTypes.any.isRequired,
		} )
	),
	visitor: PropTypes.shape( {
		name: PropTypes.string,
		email: PropTypes.string,
	} ),
	chatBetweenGroups: PropTypes.bool,
	onReady: PropTypes.func,
	onAvailabilityChanged: PropTypes.func,
	onVisibilityChanged: PropTypes.func,
	onCustomerStatusChanged: PropTypes.func,
	onNewEvent: PropTypes.func,
	onFormSubmitted: PropTypes.func,
	onRatingSubmitted: PropTypes.func,
	onGreetingDisplayed: PropTypes.func,
	onGreetingHidden: PropTypes.func,
	onRichMessageButtonClicked: PropTypes.func,
};

LiveChat.defaultProps = {
	group: 0,
};
