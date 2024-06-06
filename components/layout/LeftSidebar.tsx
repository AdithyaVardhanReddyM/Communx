"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";

import { sidebarLinks } from "@/constants";

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { userId } = useAuth();

  return (
    <section className="sticky left-5 h-[87.5vh] top-[10.5vh] z-40 flex w-fit flex-col justify-between border-[1px] border-[#ff9500]  pb-5 pt-20 max-md:hidden rounded-3xl  bg-black text-white">
      <div className="flex w-full flex-1 flex-col gap-6 px-3">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          if (link.route === "/profile") link.route = `${link.route}/${userId}`;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`relative flex justify-start max-lg:justify-center gap-4 rounded-lg p-3 ${
                isActive && " bg-[#ff9500] "
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />

              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 px-3">
        <SignedIn>
          <SignOutButton>
            <div className="flex cursor-pointer gap-4 p-4">
              <Image src="/logout.svg" alt="logout" width={24} height={24} />

              <p className="max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSidebar;
