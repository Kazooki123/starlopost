import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { viewerId, viewedId } = await request.json();

  if (!viewerId || !viewedId) {
    return NextResponse.json({ error: "Both viewerId and viewedId are required" }, { status: 400 });
  }

  try {
    await prisma.profileView.create({
      data: {
        viewerId,
        viewedId,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to record view:", error);
    return NextResponse.json({ error: "Failed to record view" }, { status: 500 });
  }
}