# React LiveChat

React component to integrate your application with LiveChat easily ;)

*You can start your 30 days free trial [here](https://www.livechatinc.com/signup/?utm_source=github.com&utm_medium=link&=utm_campaign=react-livechat).*

### Pre requirements:

To use LiveChat in your application you need **license_id**. 

You get one after creating account on our [website](https://www.livechatinc.com/).

You can check your **license_id** anytime [here](https://my.livechatinc.com/settings/code).

*If you have difficulties finding your **license_id** please take a look at this [screenshot](https://github.com/livechat/react-livechat/blob/master/license.png).*


### Installation
All you have to do:
```javascript
npm install react-livechat --save
```

### Usage

Usage is very simple:

*Import LiveChat component and put it in your render method:*
```javascript
import LiveChat from 'react-livechat'

...

<LiveChat license={your_license_id} />
```

*You can change chat appearance [here](https://my.livechatinc.com/settings/theme)*.

### Methods

To begin with, you want to get your chat reference using **onChatLoaded** callback.

*Example:*
```javascript
<LiveChat 
  onChatLoaded={ ref => this.livechat = ref }
  license={your_license_id} 
/>
```

*React LiveChat component uses our [JS API](https://docs.livechatinc.com/js-api/).*

You have access to all methods and variables using your **livechat** reference or
simply using **window.LC_API**.

*Example:*
```javascript
this.livechat.hide_chat_window();
// is same as:
window.LC_API.hide_chat_window();
```
*Table of all available methods:*

|Name|Note|
|---|---|
| close_chat | Closes an ongoing chat. |
| disable_sounds | Mutes all sounds in the chat window on visitor's side (not supported with the pop-up chat window). |
| open_chat_window | Maximizes the chat window (when using the embedded chat window) or opens the chat window (when using the pop-up window).|
| minimize_chat_window | Minimizes the chat window (not supported with the pop-up chat window). |
| hide_chat_window | Hides the chat window (not supported with the pop-up chat window). |
| agents_are_available | Returns true if your agents are available to chat, otherwise it returns false.|
| chat_window_maximized | Returns true if the chat window is maximized, returns false otherwise.|
|chat_window_minimized | Returns true if the chat window is minimized, returns false otherwise. |
| chat_window_hidden | Returns true if the chat window is hidden, returns false otherwise. |
| visitor_queued | Returns true if the visitor is currently waiting in the queue, returns false otherwise. |
|chat_running | Returns true if the visitor is currently chatting with an agent, returns false otherwise. |
| visitor_engaged  | Returns true if the visitor is currently chatting, waiting in the queue or the greeting is displayed to them. Returns false otherwise.|
|get_window_type | Returns embedded if the chat window is embedded on the website or popup if the chat window opens in a new window.|

### Callbacks
*To make your code cleaner and life easier our component gives you easy way to control chat callbacks.*

Lets say you want display received or sent message somewhere else. You can get new messages using code below:
```javascript
<LiveChat
  ...
  onMessage={ data => console.log(data) } 
/>
```

*Table of all available callbacks:*

|Name|Note|
|---|---|
| onChatLoaded  | Executed when LC_API object is loaded and ready to use. **Returns reference to your LC_API object.** |
| onBeforeLoad  |  Executed before the chat window has been rendered (not supported with the pop-up chat window). |
| onAfterLoad  |  Executed right after the chat window has been rendered (not supported with the pop-up chat window).|
| onChatWindowOpened |  Executed when the chat window is opened. |
| onChatWindowMinimized |  Executed when the chat window is minimized (not supported with the pop-up chat window). |
| onChatWindowHidden |  Executed when the chat window is hidden (not supported with the pop-up chat window). |
| onChatStateChanged  |  Executed when the chat state is changed. You can find more information [here](https://docs.livechatinc.com/js-api/#on-chat-state-changed).|
| onChatStarted  | Executed when the chat is started.  |
| onChatEnded  |  Executed when the chat is ended. |
| onMessage | Executed when the message has been sent or received. You can find more information [here](https://docs.livechatinc.com/js-api/#on-message).|
| onTicketCreated  |  Executed when the ticket form has been filled in by the visitor. You can find more information [here](https://docs.livechatinc.com/js-api/#on-ticket-created).|
| onPrechatSurveySubmitted |  Executed when the pre-chat survey has been submitted by visitor. |
| onPostchatSurveySubmitted  |  Executed when the post-chat survey has been submitted by visitor. |
| onRatingSubmitted  |  Executed when the chat rating is submitted. The only argument, data, can have three values: *good, bad or none.*|
| onRatingCommentSubmitted |  Executed when a chat rating comment is submitted. The only argument, data, contains the *message* entered by the visitor. |

### Support
In case of any problem you can chat with us [here](https://www.livechatinc.com/contact/).

**I hope you will find this module useful. Happy Coding :)**

