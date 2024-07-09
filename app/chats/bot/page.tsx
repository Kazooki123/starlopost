import ChatRoomBot from "@/components/shared/ChatRoomBot";

export default async function Page() {
  const author = {
    name: "User",
    image: "🧑🏻",
  };

  return (
    <ChatRoomBot 
      author={author} 
    />
  );
}