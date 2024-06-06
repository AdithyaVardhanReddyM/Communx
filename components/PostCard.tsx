import Image from "next/image";
import Link from "next/link";

import { formatDateString } from "@/lib/utils";
// import DeleteThread from "../forms/DeleteThread";

interface Props {
  id: string;
  currentUserId: string;
  parentId: string | null;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  image: string | null;
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
}

function PostCard({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
  isComment,
  image,
}: Props) {
  return (
    <article
      className={`flex w-full flex-col rounded-xl bg-black mb-5 ${
        isComment ? "px-0 xs:px-7" : "p-7"
      }`}
    >
      <div className="flex flex-col items-start justify-between">
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
          </div>

          <div className="flex w-full flex-col">
            <Link href={`/profile/${author.id}`} className="w-fit">
              <h4 className="cursor-pointer font-bold text-[#ff9500]">
                {author.name}
              </h4>
            </Link>

            <p className="text-gray-500">{formatDateString(createdAt)}</p>
          </div>
        </div>

        {/* <DeleteThread
          threadId={JSON.stringify(id)}
          currentUserId={currentUserId}
          authorId={author.id}
          parentId={parentId}
          isComment={isComment}
        /> */}

        <p className="mt-2 text-slate-100">{content}</p>

        {image && (
          <Image
            src={image}
            alt="post_image"
            layout="responsive"
            width={100}
            height={150}
            className="mt-2 object-contain rounded-xl"
          />
        )}
        <div className={`${isComment && "mb-10"} mt-5 flex flex-col gap-3`}>
          <div className="flex gap-3.5">
            <Image
              src="/heart.svg"
              alt="heart"
              width={24}
              height={24}
              className="cursor-pointer object-contain"
            />
            <Link href={`/post/${id}`}>
              <Image
                src="/comment.svg"
                alt="heart"
                width={24}
                height={24}
                className="cursor-pointer object-contain"
              />
            </Link>
            <Image
              src="/share.svg"
              alt="heart"
              width={24}
              height={24}
              className="cursor-pointer object-contain"
            />
          </div>

          {isComment && comments.length > 0 && (
            <Link href={`/post/${id}`}>
              <p className="mt-1 text-subtle-medium text-gray-1">
                {comments.length} repl{comments.length > 1 ? "ies" : "y"}
              </p>
            </Link>
          )}
        </div>
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

          <Link href={`/post/${id}`}>
            <p className="mt-1 text-subtle-medium text-gray-1">
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

export default PostCard;
