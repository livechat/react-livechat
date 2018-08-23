# LiveChat for React

This is a React component to easily add [LiveChat widget](https://www.livechatinc.com/) to your application.

## Getting Started

### Prerequisites

To use LiveChat in your React application, you will need LiveChat license ID. 

If you already have a LiveChat account, get your **license_id** [here](https://my.livechatinc.com/settings/code).

![LiveChat license ID](https://github.com/livechat/react-livechat/blob/master/license.png)

If you don't have an account, you can create one [here](https://www.livechatinc.com/).

### Installation

To import LiveChat for React, run the following command:

```javascript
npm install react-livechat --save
```

## User Guide

### Start

Having imported LiveChat for React, put it in your render method:

```javascript
import LiveChat from 'react-livechat'

...

<LiveChat license={your_license_id} />
```

### Group

You can set up group directly in `LiveChat` component property:

```javascript
<LiveChat license={your_license_id} group={your_group_id} />
```

### Visitor's details

If you already know who is your visitor you can set up his/her name and/or email:

```javascript
<LiveChat license={your_license_id} visitor={{name: 'John', email: 'john@example.com'}} />
```

Note: you can set up only email or only name - it's up to you!

### Custom variables

Custom variables are additional details that you can pass to LiveChat from the code (i.e. visitor's login or profile link). Here is how to make it:

```javascript
const params = [
  { name: 'Login', value: 'joe_public' },
  { name: 'Account ID', value: 'ABCD1234' },
  { name: 'Total order value', value: '$123' }
];

<LiveChat license={your_license_id} params={params} />
```

### Customization

You can change the look and feel of your chat widget in [Settings > Chat window](https://my.livechatinc.com/settings/theme) section.

You can set the chat window group by sending `group` prop. Learn more about groups here: [Dividing live chat by group](https://www.livechatinc.com/kb/dividing-live-chat-by-group/).

### Methods

This module uses [LiveChat JS API](https://docs.livechatinc.com/js-api/). 

Get your chat reference using `onChatLoaded` callback:

```javascript
<LiveChat 
  onChatLoaded={ ref => this.livechat = ref }
  license={your_license_id} 
/>
```

You have access to all methods and variables of [LiveChat JS API](https://docs.livechatinc.com/js-api/) with your `livechat` reference or
`window.LC_API`.

Example:
```javascript
this.livechat.hide_chat_window();
// is the same as:
window.LC_API.hide_chat_window();
```

### LC_Invite exception

Sometimes it can happen that `LC_Invite` is  is still being loaded when `onChatLoaded` is called.
To ensure that `LC_Invite` is loaded you can give additional check to `onChatLoaded` function:
```js
onChatLoaded = (ref) => {
 ref.on_after_load = function ()  {
    //here you can use any method you want!
  }		
}
```

#### Available methods

|Name|Note|
|---|---|
| close_chat | Closes the ongoing chat. |
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
| set_custom_variables | You can set [custom variables](https://docs.livechatinc.com/js-api/#set-custom-variables) that the LiveChat agents will see in their apps. [Custom variables](https://docs.livechatinc.com/js-api/#set-custom-variables) will be saved in the chat transcript, so you will see them in the Archives even after the chat has been finished. |

### Callbacks

LiveChat React component gives you the option to control chat callbacks.

Let's say that you want display a received or sent message somewhere else. You can get new messages using the code below:

```javascript
<LiveChat
  ...
  onMessage={ data => console.log(data) } 
/>
```

#### Available callbacks

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


## Support

If you need any help, you can chat with us [via email](mailto:developers@livechatinc.com) or [on chat](https://developers.livechatinc.com/).

I hope you will find this module useful. Happy coding!
