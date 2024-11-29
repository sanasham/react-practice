import React, { useState } from "react";
import useApi from "../utilities/useApi";

const Pagination = () => {
  const url = "https://dummyjson.com/products";
  const [isLoading, data] = useApi(url);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;
  const currentData = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlingPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
    console.log("currentpage", currentPage);
  };

  const handlingNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
    console.log("currentpage", currentPage);
  };

  if (!isLoading) {
    return <h1>Loading ......</h1>;
  }
  return (
    <div>
      <h1>Pagination</h1>

      <div className="grid grid-cols-3 gap-6">
        {currentData.map((item) => {
          return (
            <div
              className="flex flex-col justify-start items-center mb-4"
              key={item.id}
            >
              <img
                src={item.thumbnail}
                alt="product image"
                className="w-32 h-32 object-cover rounded border-2 border-gray-300 shadow-lg"
              />
              <span className="text-lg font-bold mb-2">{item.title}</span>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          disabled={currentPage === 1}
          onClick={handlingPrevPage}
          className={`px-4 py-2 rounded bg-gray-200 ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-300"
          }`}
        >
          Previous
        </button>
        <span className="px-4 py-2 border rounded bg-gray-100">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={handlingNextPage}
          className={`px-4 py-2 rounded bg-gray-200 ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-300"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
