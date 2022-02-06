import React from "react";
import '../style/ListMovies.css';

const ListMovies = ({movies}) => {

const goToSingleMovie = (id) => {
    window.location = '/movies/movie-detail/' + id;
}
    return (
        <ul className="list-group">
            {movies.map(movie => (
                <li key={movie.id} className="list-group-item">{movie.label} <button type="button" className="btn-sm float-right" href={movie.id} onClick={(e) => goToSingleMovie(movie.id)}>Details</button></li>
            ))}
        </ul>
    )
}

export default ListMovies