import { Boxes } from "@/components/ui/background-boxes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="mt-0 flex justify-between p-2 items-center z-30">
        <Link href="/">
          <Image
            src="/logo.svg"
            className=" w-[140px] h-[20px]"
            height={5}
            width={150}
            alt="logo"
          />
        </Link>
        <div className="flex justify-end gap-4">
          <Link href="/sign-in">
            <Button className="h-[30px] text-black bg-[#ff9500]">Login</Button>
          </Link>
          <Link href="/sign-up">
            <Button className="h-[30px] text-black bg-[#ff9500]">
              Register
            </Button>
          </Link>
        </div>
      </div>
      <div className="z-20 h-screen top-0 absolute w-full overflow-hidden bg-orange-700 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-zinc-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center z-30">
          <h1 className="text-center text-[30px] md:text-3xl lg:text-4xl font-bold">
            Connect, Create, and Share with Your Community
          </h1>

          <p className="text-center md:tracking-wider mb-3 mt-3 text-xs md:text-sm lg:text-lg text-orange-300">
            Join our community-driven social media platform where you can build
            your own spaces, engage with like-minded individuals, and share your
            passions.
          </p>
          <Link href="/sign-in">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_1s_ease-in_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FC0303_0%,#FF9500_50%,#FAD419_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Get Started Now
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
