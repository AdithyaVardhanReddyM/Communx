"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants";

function Bottombar() {
  const pathname = usePathname();

  return (
    <section className="fixed bottom-0 z-10 w-full rounded-t-3xl bg-black p-4 xs:px-7 md:hidden border-t border-[#ff9500]">
      <div className="flex items-center justify-between gap-3 xs:gap-5">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`relative flex flex-col items-center gap-1 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2 ${
                isActive && "bg-[#ff9500]"
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={20}
                height={20}
                className="object-contain"
              />

              <p className="text-subtle-medium text-white max-sm:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Bottombar;
