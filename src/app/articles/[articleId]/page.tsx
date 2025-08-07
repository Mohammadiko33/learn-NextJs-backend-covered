"use client";
import { IlinkItem } from "@/Components/Header";
import { use, useEffect, useState } from "react";
import Link from "next/link";

interface NewArticle {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "ru" | "pr" }>;
}

const NewArticle = ({ params, searchParams }: NewArticle) => {
  const [langname, setLangName] = useState<"English" | "Russian" | "Persian">("English");

  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  const linkItem: IlinkItem[] = [
    { title: "English", href: `/articles/${articleId}?lang=en` },
    { title: "Russian", href: `/articles/${articleId}?lang=ru` },
    { title: "Persian", href: `/articles/${articleId}?lang=pr` },
  ];

useEffect(() => {
  const result = linkItem.find((item) => item.href.includes(lang));
  if (result) {
    setLangName(result.title as typeof langname);
  }
}, [lang]);


  return (
    <div className="flex flex-wrap gap-4 justify-center px-4 py-5 bg-neutral-900 bg-opacity-80 rounded-xl shadow-lg animate-fade-in">
      <div className="mt-1.5">
        <p>lesson 1 in {langname} learn alphabet</p>
      </div>
      {linkItem.map(({ title, href }) => (
        <Link
          key={title}
          href={href}
          className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ease-in-out text-sm
              hover:bg-cyan-500 hover:text-black hover:shadow-cyan-400/30 hover:shadow-lg
               ${langname === title
                ? "bg-cyan-400 text-black shadow-md scale-105"
                : "bg-neutral-800 text-gray-300 hover:scale-105"
              }
            `}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default NewArticle;
