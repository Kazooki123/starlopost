// app/api/friends/request.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDB } from "@/lib/mongoose";
import User from '@/lib/models/user.model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await connectToDB();
      const { userId, friendId } = req.body;

      const user = await User.findById(friendId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      if (user.friendRequests.includes(userId)) {
        return res.status(400).json({ message: 'Friend request already sent' });
      }

      user.friendRequests.push(userId);
      await user.save();

      res.status(200).json({ message: 'Friend request sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending friend request' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}