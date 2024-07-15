/* eslint-disable tailwindcss/no-custom-classname */
// components/ChatRoomUser.tsx

import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface ChatRoomUserProps {
  user: {
    id: string;
    username: string;
    name: string;
    image: string;
  };
  onClick?: () => void;
}

const ChatRoomUser: React.FC<ChatRoomUserProps> = ({ user, onClick }) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(`/chats/user/${user.id}`);
    }
  };

  return (
    <div 
      className="flex cursor-pointer items-center p-3 transition-colors duration-200 hover:bg-gray-100"
      onClick={handleClick}
    >
      <div className="relative mr-3 h-12 w-12">
        <Image
          src={user.image || '/default-avatar.png'}
          alt={user.name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="grow">
        <h3 className="font-semibold text-gray-800">{user.name}</h3>
        <p className="text-sm text-gray-600">@{user.username}</p>
      </div>
    </div>
  );
};

export default ChatRoomUser;