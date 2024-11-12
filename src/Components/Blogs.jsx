import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

export default function Blogs() {
  // step 3 :consuming the context data
  const { loading, posts } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-y-10 max-w-2xl mx-auto">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs found</p>
        </div>
      ) : (
        posts.map((post) => {
          return <BlogDetails key={post.id} post={post} />;
        })
      )}
    </div>
  );
}
