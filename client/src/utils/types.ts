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
  payload: Payload;
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

import { Session } from "@supabase/supabase-js";

interface AuthContextTypes {
  session: Session | null;
  signOut: () => void;
}

interface ThemeContextTypes {
  theme: "dark" | "light";
  toggleTheme: () => void;
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
  AuthContextTypes,
  Session,
  ThemeContextTypes,
};
