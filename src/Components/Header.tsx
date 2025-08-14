"use client";
import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
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
    { title: "profile", href: "/user-profile" },
  ];

  return (
    <div 
    className={`flex flex-wrap gap-4 justify-between px-36 py-5
     bg-neutral-900 bg-opacity-80 rounded-xl shadow-lg 
     animate-fade-in fixed w-full top-0
     `}>
      <div className="flex gap-4">
        {linkItem.map(({ title, href }) => {
          const isActive = pathname === href && href !== "/";

          return (
            <Link
              key={title}
              href={href}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ease-in-out text-sm
              hover:bg-cyan-500 hover:text-black capitalize flex items-center justify-center
              ${
                isActive
                  ? "bg-cyan-400 text-black  scale-105 shadow-lg shadow-cyan-400/30"
                  : "bg-neutral-800 text-gray-300 hover:scale-105"
              }
              `}
            >
              {title}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <UserButton/>
        <SignInButton mode="modal" />
        <SignOutButton/>
      </div>
    </div>
  );
};

export default Header;
