import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import Header from "../Components/Header";
import BlogDetails from "../Components/BlogDetails";
import Spinner from "../Components/Spinner";

export default function BlogPage() {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const location = useLocation();
  const navigation = useNavigate();

  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);

  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="py-24 max-w-2xl mx-auto">
      <Header />
      <div>
        <button
          className="mb-6 border-2 border-gray-300 py-1 px-4 rounded-md"
          onClick={() => navigation(-1)}
        >
          Back
        </button>
      </div>
      {loading ? (
        <div>
          <p>
            <Spinner />
          </p>
        </div>
      ) : blog ? (
        <div className="flex flex-col gap-y-10">
          <BlogDetails post={blog} />
          <h2 className="text-3xl font-bold">Related Blogs</h2>
          {relatedBlogs.map((post) => (
            <div key={post.id}>
              <BlogDetails post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No blog found</p>
        </div>
      )}
    </div>
  );
}
