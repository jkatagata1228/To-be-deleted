import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LogInBtn from "./LogInBtn";
import LogOutBtn from "./LogOutBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ディアブロ II リザレクテッド",
  description: "ディアブロ II リザレクテッド portfolio",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <Link href="/" className="logo">
            Diablo II: Resurrected
          </Link>
          <Link href="/list">List</Link>
          <Link href="/write">Write</Link>
          {session ? (
            <span>
              Welcome! {session.user.name} <LogOutBtn></LogOutBtn>
            </span>
          ) : (
            <LogInBtn></LogInBtn>
          )}
        </div>
        {children}
      </body>
    </html>
  );
}
