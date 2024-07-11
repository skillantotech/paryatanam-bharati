"use client";

import React from "react";
import { Pagination } from "flowbite-react";
// import { useState } from "react";

function BlogPagination(props) {
  //   const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex overflow-x-auto sm:justify-center mt-10">
      <Pagination
        layout="pagination"
        currentPage={props.presentPage}
        totalPages={props.pagecounting}
        onPageChange={props.pageChangeFunction}
        previousLabel="Previous"
        nextLabel="Next"
      />
    </div>
  );
}

export default BlogPagination;
