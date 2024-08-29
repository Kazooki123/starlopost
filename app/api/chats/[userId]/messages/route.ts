import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { connectToDB } from "@/lib/mongoose";
import Message from "@/lib/models/message.model";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectToDB();

    const chatPartnerId = params.userId;

    if (typeof chatPartnerId !== "string") {
      return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
    }

    const messages = await Message.find({
      $or: [
        { sender: userId, recipient: chatPartnerId },
        { sender: chatPartnerId, recipient: userId },
      ],
    })
      .sort({ createdAt: 1 })
      .limit(50); // Limit to last 50 messages for performance

    return NextResponse.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
