import User from '../models/user.model';

export async function isAdmin(userId: string): Promise<boolean> {
  try {
    const user = await User.findOne({ id: userId });
    return user?.admin === true;
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
}