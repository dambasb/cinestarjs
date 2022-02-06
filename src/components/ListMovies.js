import React from "react";
import { useHistory } from "react-router-dom";
import '../style/ListMovies.css';

const ListMovies = ({movies}) => {

const goToSingleMovie = (id) => {
    
    console.log(id)
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