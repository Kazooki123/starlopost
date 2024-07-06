import ChatRoomBot from "@/components/shared/ChatRoomBot";

interface PageProps {
  author: {
    name: string;
    image: string;
  };
}

function Page({ author }: PageProps) {
  return (
    <ChatRoomBot 
      author={author} 
    />
  );
}

export default Page;