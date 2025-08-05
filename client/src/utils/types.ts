interface Payload {
  message: string;
  keywords: string[];
  follow_up_questions: string[];
}

interface MessageType {
  user: boolean;
  payload: Payload;
}

interface ResponseTextProps {
  payload: Payload;
  sendMessage: (ques: string) => void;
  isNewResponse?: boolean;
}

interface UserTextProps {
  payload: Payload;
  isLatest?: boolean;
}

interface InputProps {
  sendMessage: (ques: string) => void;
  loading: boolean;
}

interface SourcesProps {
  show: boolean;
  toggleShow: () => void;
  payload: Payload;
}

interface YTCardProps {
  source: {
    videoId: string;
    title: string;
    description: string;
    thumbnail: string;
    channelTitle: string;
    publishedAt: string;
  };
}

interface GoogleCardProps {
  source: {
    title: string;
    link: string;
    snippet: string;
  };
}

interface ThemeContextTypes {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

interface ChatContextTypes {
  messages: MessageType[];
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
  storeChat: (messages: MessageType[]) => void;
  clearChat: () => void;
}

export type {
  Payload,
  MessageType,
  ResponseTextProps,
  UserTextProps,
  InputProps,
  SourcesProps,
  YTCardProps,
  GoogleCardProps,
  ThemeContextTypes,
  ChatContextTypes,
};
