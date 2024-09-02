import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import SideBar from "./components/ui/sidebar/sideBar";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Your personal expense tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html>
        <body
          className={`${lexend.className} bg-dark flex gap-[40px] p-[40px]`}
        >
          <SideBar />
          {children}
        </body>
      </html>
    </>
  );
}
