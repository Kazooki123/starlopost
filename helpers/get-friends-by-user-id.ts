// helpers/get-friends-by-user-id.ts

import User from "@/lib/models/user.model";
import { connectToDB } from "@/lib/mongoose";

export async function getFriendsByUserId(userId: string) {
  await connectToDB();
  const user = await User.findById(userId).populate(
    "friends",
    "id username name image"
  );
  return user?.friends || [];
}
