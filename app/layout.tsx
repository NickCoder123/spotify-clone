import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/sidebar";
import SupabaseProvider from "@/providers/supabase_provider";
import UserProvider from "@/providers/user_provider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
