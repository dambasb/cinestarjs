import { useParams } from 'react-router-dom';
import MoviesDb from '../database/MoviesDb';

const MovieDetail = () => {

    const params = useParams();

    const movie = MoviesDb.find(quote => params.movieId);

    // TODO Make Buy btn 

    return <section>
        <h1>{movie.label}</h1>
        <p>{movie.body}</p>
    </section>
}

export default MovieDetail;