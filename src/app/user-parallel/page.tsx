import { IAlbum, IParamId, Post } from "@/Components/types";
import axios from "axios";
import Link from "next/link";
import React from "react";

const page = async () => {
  const posts = await axios(`http://localhost:4000/posts`);
  const albums = await axios.get(`http://localhost:4000/albums`);
  console.log(albums.data);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8">User Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-9">
          <h2 className="text-2xl font-bold mb-4">Posts</h2>
          <div className="space-y-4">
            {posts.data.map(({ id, title, body, userId }: Post) => (
              <Link
                key={id}
                href={`/user-parallel/${userId}`}
                className="bg-white block shadow-md rounded-lg p-6"
              >
                <h3 className="text-lg font-bold mb-3 text-gray-800 leading-tight">
                  {title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{body}</p>
              </Link>
            ))}
          </div>
        </div>

        {albums.data.length > 0 && (
          <div className="md:col-span-3">
            <h2 className="text-2xl font-bold mb-4">Albums</h2>
            <div className="space-y-4">
              {albums.data.map(({ id, title , userId }: IAlbum) => (
                <Link
                key={id}
                href={`/user-parallel/${userId}`}
                  className="bg-white block shadow-md rounded-lg p-[21.7px]"
                >
                  <p className="text-gray-700">{title}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
