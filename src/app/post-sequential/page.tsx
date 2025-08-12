import React, { Suspense } from "react";
import { Post } from "@/Components/types";
import axios from "axios";
import Author from "@/Components/Author";

const Sequential = async () => {
  const { data } = await axios.get<Post[] | null>("http://localhost:4000/post");
  const filtredPosts = data?.filter((post) => post.id % 10 === 1);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8">blog posts</h1>
      <div className="grid grid-cols-1 mb:grid-cols-2 gap-8">
        {filtredPosts?.map(({ title, id, body }) => (
          <div key={id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-3 text-gray-800 leading-tight">
              {title}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">{body}</p>
            <Suspense
              fallback={
                <div className="text-sm text-gray-500">loading author ...</div>
              }
            >
              <Author userID={id} />
            </Suspense>
            <p className="text-gray-500">author name to be fetched</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sequential;
