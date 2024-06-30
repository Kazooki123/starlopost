// lib/types/threadTypes.ts

import { Types } from 'mongoose';

export default interface IThread {
  _id: Types.ObjectId;
  text: string;
  author: Types.ObjectId | Record<string, any>;
  community?: Types.ObjectId | Record<string, any>;
  createdAt: Date;
  parentId?: string;
  children: IThread[];
  mediaUrl?: string;
}