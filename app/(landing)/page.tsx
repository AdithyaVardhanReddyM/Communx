import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="mt-0 flex justify-between p-2 items-center">
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
            <Button className="h-[30px] text-white bg-[#ff9500]">Login</Button>
          </Link>
          <Link href="/sign-up">
            <Button className="h-[30px] text-white bg-[#ff9500]">
              Register
            </Button>
          </Link>
        </div>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 "></main>
    </div>
  );
}
