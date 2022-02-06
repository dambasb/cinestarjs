import React from "react";

const ListMovies = ({movies}) => {

    return (
        <ul className="list-group">
            {movies.map(movie => (
                <li key={movie.id} className="list-group-item">{movie.label}</li>
            ))}
        </ul>
    )
}

export default ListMovies