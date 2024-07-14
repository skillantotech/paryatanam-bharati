import PropTypes from "prop-types";
import { Pagination } from "flowbite-react";
// import { useState } from "react";

function BlogPagination({ presentPage, pagecounting, pageChangeFunction }) {
  //   const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex overflow-x-auto sm:justify-center mt-10">
      <Pagination
        layout="pagination"
        currentPage={presentPage}
        totalPages={pagecounting}
        onPageChange={pageChangeFunction}
        previousLabel="Previous"
        nextLabel="Next"
      />
    </div>
  );
}

BlogPagination.propTypes = {
  presentPage: PropTypes.number.isRequired,
  pagecounting: PropTypes.number.isRequired,
  pageChangeFunction: PropTypes.func.isRequired,
};

export default BlogPagination;
