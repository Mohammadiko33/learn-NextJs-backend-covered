"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface IlinkItem {
  title: string;
  href: string;
}

const Header = () => {
  const pathname = usePathname();
  const productNum = Math.ceil(Math.random() * 100);
  const commentNum = Math.ceil(Math.random() * 100);

  const linkItem: IlinkItem[] = [
    { title: "dashboard", href: "/dashboard" },
    { title: "forgot Password", href: "/forgotPassword" },
    { title: "login", href: "/login" },
    { title: "register", href: "/register" },
    { title: "counter", href: "/counter" },
    { title: "docs", href: "/docs/react-vs-vue" },
    { title: "handleSendReq", href: "/handleSendReq" },
    { title: "products", href: "/products" },
    { title: "products detail", href: `/products/${productNum}` },
    { title: "products detail comments", href: `/products` },
    {
      title: "products detail comment id",
      href: `/products/${productNum}/comments/${commentNum}`,
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center px-4 py-5 bg-neutral-900 bg-opacity-80 rounded-xl shadow-lg animate-fade-in">
      {linkItem.map(({ title, href }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={title}
            href={href}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ease-in-out text-sm
              hover:bg-cyan-500 hover:text-black hover:shadow-cyan-400/30 hover:shadow-lg
              ${isActive
                ? "bg-cyan-400 text-black shadow-md scale-105"
                : "bg-neutral-800 text-gray-300 hover:scale-105"
              }
            `}
            replace 
            // if using ( replace ) in link element tag anytime you can't back to page
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default Header;