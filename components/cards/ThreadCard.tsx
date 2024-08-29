"use client";

/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

import { formatDateString } from "@/lib/utils";
import DeleteThread from "../forms/DeleteThread";

interface Props {
  id: string;
  currentUserId: string;
  isNSFW?: boolean;
  userId: string;
  parentId: string | null;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
  mediaUrl?: string | null;
}

function ThreadCard({
  id,
  currentUserId,
  userId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
  isComment,
  mediaUrl,
  isNSFW,
}: Props) {

  isNSFW = false;

  const [isBlurred, setIsBlurred] = useState(isNSFW);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <article
      className={`flex w-full flex-col rounded-xl ${
        isComment ? "xs:px-7 px-0" : "bg-dark-2 p-7"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link href={`/profile/${author.id}`} className="relative h-11 w-11">
              <Image
                src={author.image}
                alt="user_community_image"
                fill
                className="cursor-pointer rounded-full"
              />
            </Link>

            <div className="thread-card_bar" />
          </div>

          <div className={isNSFW ? "nsfw-thread" : "flex w-full flex-col"}>
            <Link href={`/profile/${author.id}`} className="w-fit">
              <h4 className="text-base-semibold text-light-1 cursor-pointer">
                {author.name}
              </h4>
            </Link>
            
            {isNSFW && (
              <p className="font-bold text-red-500">NSFW Content</p>
            )}

            <p className="text-small-regular text-light-2 mt-2">{content}</p>

            {mediaUrl && (
              <div className={isBlurred? 'blur-xl' : "mt-3 max-w-full"}>
                {mediaUrl.match(/\.(jpeg|jpg|gif|png|)$/) !== null ? (
                  <Image
                    src={mediaUrl}
                    alt="Thread media"
                    width={300}
                    height={300}
                    layout="responsive"
                    className="rounded-lg object-cover"
                  />
                ) : mediaUrl.match(/\.(mp4|webm)$/) !== null ? (
                  <video
                    src={mediaUrl}
                    controls
                    className="w-full rounded-lg"
                  />
                ) : null}
              </div>
            )}

            {isNSFW && (
              <Button className="mt-2" onClick={() => setIsBlurred(!isBlurred)}>
                {isBlurred ? 'Show Content' : 'Hide Content'}
              </Button>
            )}

            <div className={`${isComment && "mb-10"} mt-5 flex flex-col gap-3`}>
              <div className="flex gap-3.5">
                <Image
                  src={isLiked ? "/assets/heart-filled.svg" : "/assets/heart-gray.svg"}
                  alt="heart"
                  width={24}
                  height={24}
                  className={`cursor-pointer object-contain transition-all duration-200 ${
                    isLiked ? 'scale-125' : 'scale-100'
                  }`}
                  onClick={toggleLike}
                />  
                <Link href={`/thread/${id}`}>
                  <Image
                    src="/assets/reply.svg"
                    alt="heart"
                    width={24}
                    height={24}
                    className="cursor-pointer object-contain"
                  />
                </Link>
                <Image
                  src="/assets/repost.svg"
                  alt="heart"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                />
                <Image
                  src="/assets/share.svg"
                  alt="heart"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                />
              </div>

              {isComment && comments.length > 0 && (
                <Link href={`/thread/${id}`}>
                  <p className="text-subtle-medium text-gray-1 mt-1">
                    {comments.length} repl{comments.length > 1 ? "ies" : "y"}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>

        <DeleteThread
          threadId={JSON.stringify(id)}
          currentUserId={currentUserId}
          authorId={author.id}
          parentId={parentId}
          isComment={isComment}
        />
      </div>

      {!isComment && comments.length > 0 && (
        <div className="ml-1 mt-3 flex items-center gap-2">
          {comments.slice(0, 2).map((comment, index) => (
            <Image
              key={index}
              src={comment.author.image}
              alt={`user_${index}`}
              width={24}
              height={24}
              className={`${index !== 0 && "-ml-5"} rounded-full object-cover`}
            />
          ))}

          <Link href={`/thread/${id}`}>
            <p className="text-subtle-medium text-gray-1 mt-1">
              {comments.length} repl{comments.length > 1 ? "ies" : "y"}
            </p>
          </Link>
        </div>
      )}

      {!isComment && community && (
        <Link
          href={`/communities/${community.id}`}
          className="mt-5 flex items-center"
        >
          <p className="text-subtle-medium text-gray-1">
            {formatDateString(createdAt)}
            {community && ` - ${community.name} Community`}
          </p>

          <Image
            src={community.image}
            alt={community.name}
            width={14}
            height={14}
            className="ml-1 rounded-full object-cover"
          />
        </Link>
      )}
    </article>
  );
}

export default ThreadCard;
