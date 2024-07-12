/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sWQuvFpTeQr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { createClient } from '@supabase/supabase-js';
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, JSX, SVGProps, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";

type BotReply = string | undefined;

interface ChatProp {
  author: {
    name: string;
    image: string;
  };
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Chats({ author }: ChatProp) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm an AI assistant. How can I help you today?" }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const lastMessageTime = useRef(Date.now());

  useEffect(() => {
    async function loadMessagesFromSupabase() {
      try {
        const { data, error } = await supabase
          .from('bot_chat_messages')
          .select('*')
          .eq('author', author)
          .order('timestamp', { ascending: true });

        if (error) throw error;

        if (data) {
          setMessages(data.map(({ role, content }) => ({ role, content })));
        }
      } catch (error) {
        console.error('Error loading messages from Supabase:', error);
      }
    }

    loadMessagesFromSupabase();
  }, [author]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const now = Date.now();
    const timeSinceLastMessage = now - lastMessageTime.current;

    if (timeSinceLastMessage < 2000) {
      // 2 seconds cooldown
      setCooldown(true);
      setTimeout(() => setCooldown(false), 2000 - timeSinceLastMessage);
      return;
    }

    setIsLoading(true);
    lastMessageTime.current = now;
    const userMessage = { role: "user", content: inputMessage };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputMessage("");

    async function saveMessageToSupabase(message: {
      role: string;
      content: string;
    }) {
      try {
        const { data, error } = await supabase.from("bot_chat_messages").insert([
          {
            role: message.role,
            content: message.content,
            author,
            timestamp: new Date().toISOString(),
          },
        ]);

        if (error) throw error;
        console.log("Message saved to Supabase:", data);
      } catch (error) {
        console.error("Error saving message to Supabase:", error);
      }
    }

    await saveMessageToSupabase(userMessage);

    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: inputMessage,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      let botReply: BotReply;

      if (
        Array.isArray(result) &&
        result[0] &&
        typeof result[0].generated_text === "string"
      ) {
        botReply = result[0].generated_text.trim();
      } else if (
        typeof result === "object" &&
        typeof result.generated_text === "string"
      ) {
        botReply = result.generated_text.trim();
      } else {
        botReply = "I'm sorry, I couldn't generate a proper response.";
      }

      const assistantMessage = {
        role: "assistant",
        content:
          botReply || "I'm sorry, I couldn't generate a proper response.",
      };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);

      // Save assistant message to Supabase
      await saveMessageToSupabase(assistantMessage);

    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        role: "assistant",
        content:
          "I'm sorry, there was an error processing your request. Please try again later.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);

      // Save error message to Supabase
      await saveMessageToSupabase(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[100dvh] bg-[#1a1a1a] text-white">
      <div className="hidden md:flex flex-col items-center justify-center w-1/3 bg-[#6b3fa0] p-8">
        <BotIcon className="w-32 h-32" />
        <div className="mt-4 text-2xl font-bold">Chatbot</div>
      </div>
      <div className="flex-1 p-6 md:p-8">
        <div className="max-w-2xl mx-auto h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold">Chatbot</div>
          </div>
          <div className="flex-1 overflow-auto">
            <div className="grid gap-4">
              {messages.map((message, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="rounded-lg w-10 h-10 bg-[#6b3fa0] text-3xl flex items-center justify-center">
                    {message.role === "assistant" ? "🤖" : author.image}
                  </div>
                  <div className="grid gap-1 items-start text-sm">
                    <div className="font-bold">
                      {message.role === "assistant" ? "Bot" : author.name}
                    </div>
                    <div>
                      <p>{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <Textarea
              placeholder="Type your message..."
              className="w-full rounded-md bg-[#2a2a2a] border-none focus:ring-2 focus:ring-[#6b3fa0] pr-12"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute w-8 h-8 right-4"
              onClick={sendMessage}
              disabled={isLoading || cooldown}
            >
              <SendIcon className="w-5 h-5" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
          {cooldown && (
            <div className="text-red-500 text-sm mt-2">
              You are typing too fast! Please wait a moment before sending
              another message.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BotIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function SendIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
