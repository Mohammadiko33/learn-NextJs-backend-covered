"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface IlinkItem {
  title: string;
  href: string;
}

const Header = () => {
  const pathname = usePathname();
  const [productNum, setProductNum] = useState<number | null>(null);
  const [commentNum, setCommentNum] = useState<number | null>(null);

  useEffect(() => {
    setProductNum(Math.ceil(Math.random() * 100));
    setCommentNum(Math.ceil(Math.random() * 100));
  }, []);

  // Use fallback values until random numbers are set on the client
  const productId = productNum ?? 1;
  const commentId = commentNum ?? 1;

  const linkItem: IlinkItem[] = [
    { title: "forgot Password", href: "/forgotPassword" },
    { title: "login", href: "/login" },
    { title: "register", href: "/register" },
    { title: "counter", href: "/counter" },
    { title: "docs", href: "/docs/react-vs-vue" },
    { title: "handleSendReq", href: "/handleSendReq" },
    { title: "products", href: "/products" },
    { title: "products detail", href: `/products/${productId}` },
    { title: "products detail comments", href: `/products` },
    { title: "products detail comment id", href: `/products/${productId}/comments/${commentId}` },
    { title: "learn lang", href: "/articles/learn-new-lang" },
    { title: "order", href: "/order" },
    { title: "complex Dashboard", href: "/complex-dashboard" },
    { title: "folders", href: "/folders" },
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
              hover:bg-cyan-500 hover:text-black hover:shadow-cyan-400/30 hover:shadow-lg capitalize
              ${isActive
                ? "bg-cyan-400 text-black shadow-md scale-105"
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