// /app/admin/manage-admins/page.tsx

// import { useState, useEffect } from 'react';
// import { auth } from '@clerk/nextjs';
// import { Button } from "@/components/ui/button";
// import User from '@/lib/models/user.model';

// export default function ManageAdmins() {
  // const [users, setUsers] = useState([]);
  // const { userId } = auth();

  // useEffect(() => {
    // Fetch users from your API
    // Implement this API route to return all users
  // }, []);

  // const toggleAdminStatus = async (userId: string, currentStatus: boolean) => {
    // Implement API call to toggle admin status
    // Update the user's admin status in the database
    // Refresh the users list
  // };

  // return (
    // <div>
      // <h1>Manage Admins</h1>
      // <ul>
        // {users.map((user) => (
          // <li key={user.id}>
            // {user.username} - 
            // <Button onClick={() => toggleAdminStatus(user.id, user.admin)}>
              // {user.admin ? 'Remove Admin' : 'Make Admin'}
            // </Button>
          // </li>
        // ))}
      // </ul>
    // </div>
  // );
// }