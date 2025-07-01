import { Link } from 'react-router-dom';
import { useMovieContext } from '../context/MovieContext';

const MovieCard = ({ movie }) => {
  const { isFavorite } = useMovieContext();

  return (
    <Link to={`/movie/${movie.imdbID}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="bg-white rounded-lg shadow hover:shadow-xl transition relative">
        <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded-t-md" />
        <div className="p-2">
          <h3 className="text-center font-semibold">{movie.Title}</h3>
        </div>
        {isFavorite(movie.imdbID) && (
          <div className="absolute top-2 right-2 text-red-500 text-xl">❤️</div>
        )}
      </div>
    </Link>
  );
};

export default MovieCard;
