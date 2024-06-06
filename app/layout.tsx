import type { Metadata } from "next";
import { Mukta, PT_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

const font = Playfair_Display({ subsets: ["latin"] });
const font1 = Mukta({ style: "normal", weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Communx",
  description: "A Commnunity based social interaction platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`bg-black text-white ${font.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
