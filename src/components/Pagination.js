import React from "react";

const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {
  const pageNumbers = [];

  /**
   * The Math.ceil() function always rounds a number up to the next largest integer
   *
   * round up soo that we dont lose items on last page
   */
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    console.log(1);
    pageNumbers.push(i);
    console.log(pageNumbers);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
