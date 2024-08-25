// app/api/chats/[userId]/messages/route.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from "@clerk/nextjs/server";
import { connectToDB } from "@/lib/mongoose";
import Message from '@/lib/models/message.model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    await connectToDB();

    const { userId: chatPartnerId } = req.query;

    if (typeof chatPartnerId !== 'string') {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const messages = await Message.find({
      $or: [
        { sender: userId, recipient: chatPartnerId },
        { sender: chatPartnerId, recipient: userId }
      ]
    })
    .sort({ createdAt: 1 })
    .limit(50); // Limit to last 50 messages for performance

    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}