import AccountProfile from "@/components/AccountProfile";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function Page() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = await fetchUser(user.id);

  if (userInfo?.onboarded) redirect("/home");

  const userData = {
    id: user.id,
    objectId: userInfo?._id,
    username: userInfo?.username ? userInfo?.username : user.username,
    name: userInfo?.name ? userInfo?.name : user.firstName ?? "",
    bio: userInfo?.bio ? userInfo?.bio : "",
    image: userInfo?.image ? userInfo?.image : user.imageUrl,
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10">
      <h1 className="text-lg">Create your Profile</h1>

      <section className="mt-5 p-10 border-[1px] border-[#ff9500] rounded-xl">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
}

export default Page;
