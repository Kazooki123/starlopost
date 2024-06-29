"use client";

// ChatHome.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ChatHome() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Chat</h1>
        <div className="bg-[#2a2a2a] rounded-lg p-4 hover:bg-[#3a3a3a] transition-colors">
          <Link href="/chats/bot" className="flex items-center space-x-4">
            <div className="relative w-12 h-12">
              <Image
                src="/assets/chat-bot.svg"
                alt="Chatbot"
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="font-semibold">AI Assistant</h2>
              <p className="text-sm text-gray-400">Chat with our AI</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}