"use client";

import Pagination from "./Pagination";

export default function ButtonHandlePage({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  const handlePageChange = (newPage: number) => {
    // Specify the type for newPage parameter
    if (newPage > 0 && newPage <= totalPages) {
      // Ensure the page number is not negative and does not exceed total pages
      currentPage = newPage;
    }
  };

  return <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />;
}
