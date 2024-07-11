"use client";

import React from "react";
import { useState, useEffect } from "react";
import { BlogData } from "../BlogData";
import BlogShowcaseCards from "../BlogShowcaseCards";
import BlogPagination from "../BlogPagination";

function AllBlogsShowcase() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const onPageChange = (page) => {
    setCurrentPage(page);
    // console.log(currentPage);
  };

  useEffect(() => {
    const pageDataCount = Math.ceil(BlogData.length / 9); // to calculate number of pages
    setPageCount(pageDataCount); // to set the pagecount as per the data. if data is more more pages will be created and set as the totatl page count.

    if (currentPage) {
      const LIMIT = 9; // how much data to display each page
      const totalItems = LIMIT * currentPage; // e.g. 9*2 = 18
      const requiredData = BlogData.slice(
        currentPage === 1 ? 0 : totalItems - LIMIT,totalItems
      );
      setPageData(requiredData);
      // console.log(requiredData);
    }
  }, [currentPage]);

  return (
    <>
      <BlogShowcaseCards filteredPageData={pageData} />
      <BlogPagination
        pagecounting={pageCount}
        presentPage={currentPage}
        pageChangeFunction={onPageChange}
      />
    </>
  );
}

export default AllBlogsShowcase;
