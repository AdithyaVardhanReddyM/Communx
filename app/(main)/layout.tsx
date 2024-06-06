import Bottombar from "@/components/layout/Bottombar";
import LeftSidebar from "@/components/layout/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import Topbar from "@/components/layout/Topbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <main className="flex flex-row">
          <LeftSidebar />
          <section className="flex min-h-screen flex-1 flex-col items-center pt-[11vh] px-6 pb-5 max-md:pb-32 sm:px-10 bg-black text-white ">
            <div className="w-full max-w-4xl bg-zinc-900 p-2 rounded-xl">
              {children}
            </div>
          </section>
          <RightSidebar />
        </main>
        <Bottombar />
      </body>
    </html>
  );
}
