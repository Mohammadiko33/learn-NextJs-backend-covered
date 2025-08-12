"use client";
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
    { title: "sesson header", href: "/headse" },
    { title: "product reviews", href: "/product-reviews" },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center px-4 py-5 bg-neutral-900 bg-opacity-80 rounded-xl shadow-lg animate-fade-in">
      {linkItem.map(({ title, href }) => {
        const isActive = pathname === href && href !== "/";

        return (
          <Link
            key={title}
            href={href}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ease-in-out text-sm
              hover:bg-cyan-500 hover:text-black capitalize
              ${isActive
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
  );
};

export default Header;