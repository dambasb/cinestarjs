import MoviesDb from "../database/MoviesDb";
import { useState } from "react";
import ListMovies from "../components/ListMovies";
import Pagination from "../components/Pagination";

const Movies = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(5);
  const movies = MoviesDb;

  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Movies</h1>
      <ListMovies movies={currentMovies}></ListMovies>
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      ></Pagination>
    </div>
  );
};

export default Movies;
