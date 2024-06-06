import Comment from "@/components/Comment";
import PostCard from "@/components/PostCard";
import { fetchPostById } from "@/lib/actions/post.action";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params }: Props) => {
  if (!params.id) return null;

  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/create-user");

  const post = await fetchPostById(params.id);

  return (
    <section>
      <div>
        <PostCard
          key={post._id}
          id={post._id}
          currentUserId={user!.id}
          parentId={post.parentId}
          content={post.text}
          author={post.author}
          community={post.community}
          createdAt={post.createdAt}
          comments={post.children}
          image={post.image}
        />
      </div>

      <div className="mt-7">
        <Comment
          postId={post.id}
          currentUserImg={user.imageUrl}
          currentUserId={JSON.stringify(userInfo._id)}
        />
      </div>

      <div className="mt-10">
        {post.children.map((childItem: any) => (
          <PostCard
            key={childItem._id}
            id={childItem._id}
            currentUserId={user!.id}
            parentId={childItem.parentId}
            content={childItem.text}
            author={childItem.author}
            community={childItem.community}
            createdAt={childItem.createdAt}
            comments={childItem.children}
            image={childItem.image}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
