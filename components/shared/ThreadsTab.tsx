import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

import { fetchCommunityPosts } from "@/lib/actions/community.actions";
import { fetchUserPosts } from "@/lib/actions/user.actions";
import { fetchThreadById } from "@/lib/actions/thread.actions";

import ThreadCard from "../cards/ThreadCard";
import { checkThread } from "@/lib/detect";
interface Result {
  name: string;
  image: string;
  id: string;
  threads: {
    _id: string;
    text: string;
    parentId: string | null;
    userId: string;
    author: {
      name: string;
      image: string;
      id: string;
    };
    mediaUrl?: string | null;
    community: {
      id: string;
      name: string;
      image: string;
    } | null;
    createdAt: string;
    children: {
      author: {
        image: string;
      };
    }[];
  }[];
}

interface Props {
  currentUserId: string;
  accountId: string;
  accountType: string;
  params: {
    id: string;
  };
}

async function ThreadsTab({ currentUserId, accountId, accountType, params }: Props) {
  let result: Result;

  const user = await currentUser();
  if (!user) return null;

  if (accountType === "Community") {
    result = await fetchCommunityPosts(accountId);
  } else {
    result = await fetchUserPosts(accountId);
  }

  const thread = await fetchThreadById(params.id, user.id);
  const isNSFW = thread && thread.mediaUrl ? await checkThread(thread) : false;

  if (!thread) {
    return <div>Thread not found</div>;
  }

  if (!result) {
    redirect("/");
  }

  return (
    <section className='mt-9 flex flex-col gap-10'>
      {result.threads.map((thread) => (
        <ThreadCard
          key={thread._id}
          id={thread._id}
          currentUserId={currentUserId}
          parentId={thread.parentId}
          content={thread.text}
          author={
            accountType === "User"
              ? { name: result.name, image: result.image, id: result.id }
              : {
                  name: thread.author.name,
                  image: thread.author.image,
                  id: thread.author.id,
                }
          }
          community={
            accountType === "Community"
              ? { name: result.name, id: result.id, image: result.image }
              : thread.community
          }
          createdAt={thread.createdAt}
          comments={thread.children}
          mediaUrl={thread.mediaUrl}
          userId={thread.userId}
          isNSFW={isNSFW}
        />
      ))}
    </section>
  );
}

export default ThreadsTab;
