# React LiveChat

React component to integrate your application with LiveChat easily ;)

*You can start your 30 days free trial here [LiveChat](https://www.livechatinc.com/signup/?source_id=header_cta&source_url=https://www.livechatinc.com/&source_type=website).*

### Pre requirements:

To use LiveChat in your application you need **license_id**. 

You get one after creating account on our [website](https://www.livechatinc.com/).

You can check your **license_id** anytime [here](https://my.livechatinc.com/settings/code).

*If you have difficulties finding your **license_id** please take a look at this [photo](https://github.com/livechat/react-livechat/blob/master/license.png).*


### Installation
All you have to do:
```javascript
npm install react-livechat --save
```

### Usage

Usage is very simple:

1. Import LiveChat component:
```javascript
import LiveChat from 'react-livechat'
```
2. Add this to your render method (*note that **license** is required*):
```javascript
<LiveChat license={your_license_id} />
```
3. **That's all!** After restarting your page you should see your chat :)

*You can change chat appearance [here](https://my.livechatinc.com/settings/theme)*.

### Advanced Usage

To begin with you want to get your chat reference using **onChatLoaded** callback.

*Example:*
```javascript
<LiveChat 
  onChatLoaded={ ref => this.livechat = ref }
  license={your_license_id} 
/>
```

React LiveChat component uses our [JS API](https://docs.livechatinc.com/js-api/).

You have access to all methods and variables using your **livechat** reference or
simply using **window.LC_API**.

*Example:*
```javascript
this.livechat.hide_chat_window();
// is same as:
window.LC_API.hide_chat_window();
```
### Callbacks
*To make your code cleaner and life easier our component gives you easy way to control chat callbacks.*

Lets say you want display received or sent message somewhere else. You can get new messages using below code:
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
|---|---|

### Support
In case of any problem you can chat with us [here](https://www.livechatinc.com/contact/).

**I hope you will find this module useful. Happy Coding :)**

