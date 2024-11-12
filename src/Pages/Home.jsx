import React from "react";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";
import Header from "../Components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="py-24 mx-auto max-w-[720px] px-[25px] ">
        <Blogs />
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
}
