import React from "react";
import Header from "../Components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";

export default function TagPage() {
  const location = useLocation();
  const navigation = useNavigate();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div className="py-24">
      <Header />
      <div className="max-w-[720px] px-[25px] mx-auto">
        <div className="mb-8 flex items-center gap-10">
          <button
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
            onClick={() => navigation(-1)}
          >
            Back
          </button>
          <h2 className="font-bold text-xl">
            Blogs Tagged <span className="text-blue-700">#{tag}</span>
          </h2>
        </div>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
}
