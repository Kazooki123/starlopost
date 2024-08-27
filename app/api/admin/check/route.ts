import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { isAdmin } from '@/lib/utils/adminCheck';

export async function GET(req: NextRequest) {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const adminStatus = await isAdmin(userId);

  if (!adminStatus) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  return NextResponse.json({ message: 'Admin access granted' }, { status: 200 });
}