"use client";
import { SignInButton, SignOutButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface IlinkItem {
  title: string;
  href: string;
}

const Header = () => {
  const pathname = usePathname();

  const linkItem: IlinkItem[] = [
    { title: "home", href: "/" },
    { title: "tesT Req", href: "/testReq" },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-between px-36 py-5
      bg-neutral-900 bg-opacity-80 rounded-xl shadow-lg 
      animate-fade-in fixed w-full top-0">
      
      <div className="flex gap-4">
        {linkItem.map(({ title, href }) => {
          const isActive = pathname === href && href !== "/";
          return (
            <Link
              key={title}
              href={href}
              className={`headLink ${isActive ? "headLinkActive" : "headLinkNotActive"}`}
            >
              {title}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton>Sign In</SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
          <SignOutButton>Sign Out</SignOutButton>
          <Link
            href="/user-profile"
            className={`headLink ${pathname === "/user-profile" ? "headLinkActive" : "headLinkNotActive"}`}
          >
            User Profile
          </Link>
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
