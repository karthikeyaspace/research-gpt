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
}

interface UserTextProps {
  payload: Payload
}

interface InputProps {
  sendMessage: (ques: string) => void;
  loading: boolean;
}

interface SourcesProps {
  show: boolean;
  toggleShow: () => void;
  payload: Payload
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

export type { Payload, MessageType, ResponseTextProps, UserTextProps, InputProps, SourcesProps, YTCardProps };
