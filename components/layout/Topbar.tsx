import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav className="fixed top-0 z-30 flex h-[10vh] w-full items-center justify-between px-5 py-3 bg-black text-white">
      <div className="h-12 w-[145px] justify-center flex items-center border-[1px] rounded-2xl border-[#ff9500]">
        <Link href="/home" className="flex items-center">
          <Image src="/logo.svg" alt="logo" width={120} height={4} />
        </Link>
      </div>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image src="/logout.svg" alt="logout" width={24} height={24} />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
          }}
        />
      </div>
    </nav>
  );
}

export default Topbar;
