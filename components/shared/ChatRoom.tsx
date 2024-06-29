"use client";

/* eslint-disable no-unused-vars */
// for the group/DM feature

// ChatRoom.tsx

import React, { useState } from 'react';
import axios from 'axios';
import Chats from '@/components/ui/chats'

const ChatRoom: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2',
        { messages: [{ role: 'user', content: userInput }] },
        {
          headers: {
            Authorization: `Bearer ${process.env.HUGGINGFACE_TOKEN}`
          },
        }
      );

      const botResponse = response.data.choices[0].message.content;
      setChatHistory((prevHistory) => [...prevHistory, userInput, botResponse]);
      setUserInput('');
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
    }
  };

  return (
    <div>
      <Chats />
    </div>
  );
};

export default ChatRoom;
