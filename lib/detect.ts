import IThread from "@/lib/types/threadTypes";
import { detectNSFW } from "./nsfwDetector";

export async function checkThread(thread: IThread): Promise<boolean> {
  if (thread.mediaUrl) {
    try {
      const isNSFW = await detectNSFW(thread.mediaUrl);
      return isNSFW;
    } catch (error) {
      console.error(`Error checking thread ${thread._id}: ${error}`);
      return false;
    }
  }
  return false;
}

export async function checkAllThreads(threads: IThread[]): Promise<IThread[]> {
  const checkedThreads = await Promise.all(
    threads.map(async (thread) => {
      const isNSFW = await checkThread(thread);
      return { ...thread, isNSFW };
    })
  );
  return checkedThreads;
}
