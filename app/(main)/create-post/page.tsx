import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.action";
import CreatePost from "@/components/CreatePost";

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  // fetch organization list created by user
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/create-user");

  return (
    <>
      <h1 className="text-2xl font-bold ml-2">Create Post</h1>

      <CreatePost userId={userInfo._id} />
    </>
  );
}

export default Page;
