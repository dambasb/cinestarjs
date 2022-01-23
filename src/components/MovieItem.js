import logo from "../logo.svg";
import { Link } from "react-router-dom";
import MoviesDb from "../database/MoviesDb";

const MovieItem = (props) => {
  const movieDatabase = MoviesDb;

  return (
    <div className="row">
      {movieDatabase.map((movie) => {
        return (
          <div className="col-sm-4">
            <div className="card">
              <img src={logo} width={310} height={100} href="home"></img>
              <div className="card-body">
                <h4 className="card-title">{movie.title}</h4>
                <p className="card-text">{movie.body}</p>
                <Link to={'/movies/movie-detail/'+ movie.id} className="btn btn-primary">
                  Buy Ticket
                </Link>
              </div>
            </div>
          </div>
        );
      })}
      <div></div>
    </div>
  );
};

export default MovieItem;
