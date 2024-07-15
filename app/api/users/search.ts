// app/api/users/search.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDB } from "@/lib/mongoose";
import User from '@/lib/models/user.model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    await connectToDB();

    const { term } = req.query;

    if (typeof term !== 'string') {
      return res.status(400).json({ message: 'Invalid search term' });
    }

    const users = await User.find({
      $or: [
        { username: { $regex: term, $options: 'i' } },
        { name: { $regex: term, $options: 'i' } }
      ]
    })
    .select('_id username name image')
    .limit(10);

    res.status(200).json(users);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}