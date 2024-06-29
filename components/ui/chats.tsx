/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sWQuvFpTeQr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { JSX, SVGProps } from "react";

export default function Chats() {
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
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 hover:bg-transparent text-stone-400 hover:text-stone-900"
            >
              <SendIcon className="w-5 h-5" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto">
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <div className="rounded-lg w-10 h-10 bg-[#6b3fa0] text-3xl flex items-center justify-center">
                  🤖
                </div>
                <div className="grid gap-1 items-start text-sm">
                  <div className="font-bold">Bot</div>
                  <div>
                    <p>Hello! Im an AI assistant. How can I help you today?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <Textarea
              placeholder="Type your message..."
              className="w-full rounded-md bg-[#2a2a2a] border-none focus:ring-2 focus:ring-[#6b3fa0] pr-12"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute w-8 h-8 right-4"
            >
              <SendIcon className="w-5 h-5" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
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
