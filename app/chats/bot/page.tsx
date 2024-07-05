import ChatRoomBot from "@/components/shared/ChatRoomBot";

interface PageProp {
  author: {
    name: string;
    image: string;
  };
}

export default function Page({ author }: PageProp) {
  return (
    <ChatRoomBot 
      author={author} 
    />
  );
}