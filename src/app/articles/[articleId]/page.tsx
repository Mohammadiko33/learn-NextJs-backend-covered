"use client"
import { IlinkItem } from '@/Components/Header';
import { use } from 'react';
import Link from 'next/link';

interface NewArticle {
    params: Promise<{articleId: string}>
    searchParams: Promise<{lang?: "en" | "ru" | "pr"}>
}

const NewArticle = ({params,searchParams}: NewArticle) => {
  
  const {articleId} =  use(params)
  const {lang = "en" } = use(searchParams)
  
  const linkItem : IlinkItem[] = [
      {title: "English" , href: `/articles/${articleId}?lang=en`},
      {title: "Russian" , href: `/articles/${articleId}?lang=ru`},
      {title: "Persian" , href: `/articles/${articleId}?lang=pr`},
  ]


  return (
    <div className="flex flex-wrap gap-4 justify-center px-4 py-5 bg-neutral-900 bg-opacity-80 rounded-xl shadow-lg animate-fade-in">
        <div className='mt-1.5'>
            <p>lesson 1 in {lang}</p>
        </div>
      {linkItem.map(({ title, href }) => (
          <Link
            key={title}
            href={href}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ease-in-out text-sm
              hover:bg-cyan-500 hover:text-black hover:shadow-cyan-400/30 hover:shadow-lg
            `}
          >
            {title}
          </Link>
      ))}
    </div>
  );
};

export default NewArticle;