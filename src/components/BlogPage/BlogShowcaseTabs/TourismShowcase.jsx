"use client";

import React from "react";
import { Pagination } from "flowbite-react";
import { useState, useEffect } from "react";
import { BlogData } from "../BlogData";
import BlogPagination from "../BlogPagination";
import BlogShowcaseCards from "../BlogShowcaseCards";

function TourismShowcase() {
  const [currentPage, setCurrentPage] = useState(1); // Flowbite
  const [pageData, setPageData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const onPageChange = (page) => {
    // console.log(page + " " + typeof page);
    setCurrentPage(page);
    // console.log(currentPage);
  }; // Flowbite
  const filteredData = BlogData.filter(
    (blog) => blog.BlogCategory == "Tourism"
  );

  useEffect(() => {
    const pageDataCount = Math.ceil(filteredData.length / 9); // to calculate number of pages
    setPageCount(pageDataCount); // to set the pagecount as per the data. if data is more more pages will be created and set as the totatl page count.

    if (currentPage) {
      const LIMIT = 9; // how much data to display each page
      const totalItems = LIMIT * currentPage; // e.g. 9*2 = 18
      const requiredData = filteredData.slice(
        currentPage === 1 ? 0 : totalItems - LIMIT,
        totalItems
      );
      setPageData(requiredData);
      // console.log(requiredData);
    }
  }, [currentPage]);

  return (
    <>
       <>
      <BlogShowcaseCards filteredPageData={pageData} />
      <BlogPagination
        pagecounting={pageCount}
        presentPage={currentPage}
        pageChangeFunction={onPageChange}
      />
    </>
    </>
  );
}

export default TourismShowcase;
