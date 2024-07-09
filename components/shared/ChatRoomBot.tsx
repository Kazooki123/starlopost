"use client";

/* eslint-disable no-unused-vars */
// for the group/DM feature

// ChatRoomBot.tsx

import Chats from '@/components/ui/chats'

interface ChatRoomBotProps {
  author: {
    name: string;
    image: string;
  };
}

function ChatRoomBot({ author }: ChatRoomBotProps) {
  return (
    <Chats 
      author={author}
    />
  );
}

export default ChatRoomBot;