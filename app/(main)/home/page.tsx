import PostCard from "@/components/PostCard";
import { fetchPosts } from "@/lib/actions/post.action";
import { currentUser } from "@clerk/nextjs/server";

const page = async () => {
  const result = await fetchPosts(1, 30);
  const user = await currentUser();
  return (
    <>
      <h1 className="text-2xl font-bold text-left ml-2">Home</h1>

      <section className="mt-5">
        {result.posts.length === 0 ? (
          <p className="text-center w-full">No Posts found</p>
        ) : (
          <>
            {result.posts.map((post) => (
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
            ))}
          </>
        )}
      </section>
    </>
  );
};

export default page;
