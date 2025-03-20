export interface Message {
  id: string;
  toUser: string;
  fromUser: string;
  date: string;
  text: string;
}

export interface GroupMessage {
  id: {
    timestamp: number;
    creationTime: string;
  };
  conversationId: string;
  messages: Message[];
}