declare global {
  interface Window {
    LC_API: any;
    __lc: any;
  }
}

type TFunction = (...args: any[]) => any;

interface ICallbacks {
  onChatLoaded?: TFunction;
  onBeforeLoad?: TFunction;
  onAfterLoad?: TFunction;
  onErrorLoading?: TFunction;
  onChatWindowOpened?: TFunction;
  onChatWindowMinimized?: TFunction;
  onChatWindowHidden?: TFunction;
  onChatStateChanged?: TFunction;
  onChatStarted?: TFunction;
  onChatEnded?: TFunction;
  onMessage?: TFunction;
  onTicketCreated?: TFunction;
  onPrechatSurveySubmitted?: TFunction;
  onPostchatSurveySubmitted?: TFunction;
  onRatingSubmitted?: TFunction;
  onRatingCommentSubmitted?: TFunction;
}

interface ILiveChatProps extends ICallbacks {
  license: number;
  group?: number;
  params?: IParam[];
  visitor?: IVisitor;
  chatBetweenGroups?: boolean;
}

interface IParam {
  name: string;
  value: any;
}

interface IVisitor {
  name?: string;
  email?: string;
}

export { ICallbacks, ILiveChatProps, TFunction };
