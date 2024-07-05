import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest): Promise<NextResponse> {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "UserId is required" }, { status: 400 });
  }

  try {
    const viewers = await prisma.profileView.findMany({
      where: { viewedId: userId },
      orderBy: { viewedAt: "desc" },
      take: 10,
    });
    return NextResponse.json({ viewers });
  } catch (error) {
    console.error("Failed to fetch viewers:", error);
    return NextResponse.json(
      { error: "Failed to fetch viewers" },
      { status: 500 }
    );
  }
}
