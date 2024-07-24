import type { Metadata } from "next";
import { Inter, Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";
import { constructMetadata } from "@/lib/utils";

import { authOptions } from "@/lib/providers";
import NextAuthProvider from "../../providers/NextAuthProvider";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default async function RootLayout({
  children,
  props,
}: Readonly<{
  children: React.ReactNode;
  props: any;
}>) {
  

  return (
    <html lang='en'>
      <body className={recursive.className}>
        <Navbar  />
        <main className='flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]'>
          <div className='flex-1 flex flex-col h-full '>
            <NextAuthProvider>
              <Providers>{children}</Providers>
            </NextAuthProvider>
          </div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
