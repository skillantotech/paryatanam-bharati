
// import { Pagination } from "flowbite-react";
import { useState, useEffect } from "react";
import { BlogData } from "../../../Data/BlogsData/BlogData";
import BlogPagination from "../BlogsPagination";
import BlogShowcaseCards from "../BlogsShowcaseCards";

function ArtAndCultureShowcase() {
  const [currentPage, setCurrentPage] = useState(1); // Flowbite
  const [pageData, setPageData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const onPageChange = (page) => {
    setCurrentPage(page);
  }; // Flowbite
  const filteredData = BlogData.filter(
    (blog) => blog.BlogCategory == "Art & Culture"
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

export default ArtAndCultureShowcase;
