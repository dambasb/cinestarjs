import { useParams } from 'react-router-dom';

const MovieDetail = () => {

    const params = useParams();

console.log(params.movieId);

    return <section>
        <h1>Movie Detail</h1>
    </section>
}

export default MovieDetail;