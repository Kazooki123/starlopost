/* eslint-disable tailwindcss/no-custom-classname */
// app/chats/user/[id]/page.tsx

import React from "react";
import ChatRoomUser from "@/components/shared/ChatRoomUser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

async function getChatUser(userId: string) {
  // This is a placeholder. Replace with actual API call to get user data
  const res = await fetch(`/api/users/${userId}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}

async function getChatMessages(userId: string) {
  // This is a placeholder. Replace with actual API call to get chat messages
  const res = await fetch(`/api/chats/${userId}/messages`);
  if (!res.ok) throw new Error("Failed to fetch messages");
  return res.json();
}

export default async function ChatRoom({ params }: { params: { id: string } }) {
  const user = await getChatUser(params.id);
  const messages = await getChatMessages(params.id);

  return (
    <div className="flex h-screen flex-col">
      <div className="border-b p-4">
        <ChatRoomUser user={user} />
      </div>

      <div className="grow overflow-y-auto p-4">
        {messages.map((message: any) => (
          <div
            key={message.id}
            className={`mb-4 ${
              message.sender === params.id ? "text-left" : "text-right"
            }`}
          >
            <div
              className={`inline-block rounded-lg p-2 ${
                message.sender === params.id
                  ? "bg-gray-200"
                  : "bg-blue-500 text-white"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t p-4">
        <form className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type a message..."
            className="grow"
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}