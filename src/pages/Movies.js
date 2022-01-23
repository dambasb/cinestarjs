import MoviesDb from "../database/MoviesDb";
import { Link } from 'react-router-dom';


const Movies = () => {

  const movieDatabase = MoviesDb;

  console.log(movieDatabase);
  return (
    <div>
      <h1>Movies</h1>
      <ul >
        <li>
          <Link to='/movies/movie-detail/1'>Movie 1</Link>
        </li>
        <li>
          <Link to='/movies/movie-detail/2'>Movie 2</Link>
        </li>
      </ul>

      
    </div>
  );
};

export default Movies;
