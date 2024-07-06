import ChatRoomBot from "@/components/shared/ChatRoomBot";

export default async function Page() {
  const author = {
    name: "User",
    image: "@/public/assets/user-image.svg",
  };

  return (
    <ChatRoomBot 
      author={author} 
    />
  );
}