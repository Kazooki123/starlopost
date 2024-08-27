import { auth } from '@clerk/nextjs';
import { isAdmin } from '@/lib/utils/adminCheck';
import { redirect } from 'next/navigation';

export default async function AdminDashboard() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const adminStatus = await isAdmin(userId);

  if (!adminStatus) {
    redirect('/unauthorized');
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      
      <p>Hello fellow moderator! Welcome to the moderation dashboard</p>
      <p>Here, you can ban, kick or restrict someone's account if they post something that doesn't align with our websites rules or TOS.</p>
      
      <h3>And oh!</h3>
      <p>Just be reminded that you can be removed as an admin or moderator of the website base on how you take care of the website. Mods don't actually have the full gain access of the website like the database, keys, private keys, etc.</p>
    </div>
  );
}