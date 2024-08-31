"use server"

import { auth } from '@clerk/nextjs';
import { isAdmin } from '@/lib/utils/adminCheck';
import { redirect } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchViewCount() {
      const response = await fetch('http://localhost:8080/views');
      const data = await response.text();
      setViewCount(parseInt(data.split(': ')[1]));
    }
    fetchViewCount();
  }, []);

  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const adminStatus = isAdmin(userId);

  if (!adminStatus) {
    redirect('/unauthorized');
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      
      <p>Hello fellow moderator! Welcome to the moderation dashboard</p>
      <p>Here, you can ban, kick or restrict someones account if they post something that does not align with our websites rules or TOS.</p>
      
      <h3>And oh!</h3>
      <p>Just be reminded that you can be removed as an admin or moderator of the website base on how you take care of the website. Mods do not actually have the full gain access of the website like the database, keys, private keys, etc.</p>

      <p>Total views of home page: {viewCount !== null ? viewCount : 'Loading...'}</p>
    </div>
  );
}