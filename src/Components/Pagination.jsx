import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className="w-full  items-center border-2 border-gray-300 drop-shadow-md fixed bottom-0 bg-white ">
      <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto my-[10px]">
        {page > 1 && (
          <button
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </button>
        )}

        {page < totalPages && (
          <button
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        )}

        <p className="text-sm font-semibold ml-auto">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}
