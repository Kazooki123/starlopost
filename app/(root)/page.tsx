/* eslint-disable @next/next/no-async-client-component */
import { lazy, Suspense } from 'react';

import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchPosts } from "@/lib/actions/thread.actions";
import { fetchUser } from "@/lib/actions/user.actions";
// import { checkThread } from "@/lib/detect";

const LazyThreadCard = lazy(() => import('@/components/backups/ThreadCard'));
const LazyPagination = lazy(() => import("@/components/shared/Pagination"));

async function Home({
  searchParams
}: {
    searchParams: { [key: string]: string | undefined };
    // params: { id: string }
}) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const result = await fetchPosts(
    searchParams.page ? +searchParams.page : 1,
    30
  );

  // const thread = await fetchThreadById(params.id, user.id);
  // const isNSFW = thread && thread.mediaUrl ? await checkThread(thread) : false;

  return (
    <>
      <h1 className="head-text text-left">Home</h1>

      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result">No threads found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <Suspense
                key={post._id}
                fallback={<div>Loading thread card...</div>}
              >
                <LazyThreadCard
                  id={post._id}
                  currentUserId={user.id}
                  parentId={post.parentId}
                  content={post.text}
                  author={post.author}
                  community={post.community}
                  createdAt={post.createdAt}
                  comments={post.children}
                  mediaUrl={post.mediaUrl}
                  userId={post.userId}
                />
              </Suspense>
            ))}
          </>
        )}
      </section>

      <Suspense fallback={<div>Loading pagination...</div>}>
        {result.isNext && (
          <LazyPagination
            path="/"
            pageNumber={searchParams?.page ? +searchParams.page : 1}
            isNext={result.isNext}
          />
        )}
      </Suspense>
    </>
  );
}

export default Home;