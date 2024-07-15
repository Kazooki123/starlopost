"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDebounce } from 'use-debounce';
import { toast } from 'react-toastify';
import pusher from '@/lib/pusher';
// import Image from 'next/image';
import ChatRoomUser from './ChatRoomUser';

interface User {
  _id: string;
  username: string;
  name: string;
  image: string;
}

export default function UserSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchUsers();
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const channel = pusher.subscribe('starlochat');
    channel.bind('new-request', (data: { message: string }) => {
      toast.info(data.message);
    });

    return () => {
      pusher.unsubscribe('starlochat');
    };
  }, []);

  const searchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/users/search?term=${debouncedSearchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching users:', error);
      toast.error('Failed to search users');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddFriend = async (userId: string) => {
    try {
      await axios.post('/api/friends/request', { userId });
      toast.success('Friend request sent!');
    } catch (error) {
      console.error('Error sending friend request:', error);
      toast.error('Failed to send friend request');
    }
  };

  return (
    <div className="flex w-full max-w-md flex-col items-center space-y-4">
      <div className="flex w-full">
        <Input
          type="search"
          placeholder="Search User..."
          className="flex-1 rounded-l-md border-r-0 focus:border-primary focus:ring-0"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          className="rounded-r-md"
          onClick={searchUsers}
          disabled={isLoading}
        >
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </div>
      {searchResults.length > 0 && (
        <ul className="w-full">
          {searchResults.map((user) => (
            <li
              key={user._id}
              className="flex items-center justify-between border-b p-2"
            >
              <ChatRoomUser
                user={{
                  id: user._id,
                  username: user.username,
                  name: user.name,
                  image: user.image,
                }}
              />
              <Button onClick={() => handleAddFriend(user._id)}>
                Add Friend
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}