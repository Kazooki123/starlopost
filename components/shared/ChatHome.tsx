"use client";

// ChatHome.tsx

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";

const ChatHome: React.FC = () => {
  const navigation = useRouter();

  const handleChatbotClick = () => {
    navigation.push('/chats/bot/');
  };

  return (
    <div>
      <div onClick={handleChatbotClick} style={{ cursor: 'pointer' }}>
        <Image
          src='/assets/chat-bot.svg'
          width={24}
          height={24}
          alt="Chatbot"
          style={{ borderRadius: '50%', width: '50px', height: '50px' }}
        />
        <span className="text-gray-300">Samantha Bot</span>
      </div>
    </div>
  );
};

export default ChatHome;