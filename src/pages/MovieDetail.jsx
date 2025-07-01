import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useMovieContext } from '../context/MovieContext';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const apikey = import.meta.env.VITE_API_KEY;
  const { addFavorite, removeFavorite, isFavorite } = useMovieContext();

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=${apikey}&i=${id}`).then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <p className="text-center">Loading...</p>;

  const favorite = isFavorite(movie.imdbID);
  

  return (
    <div className="max-w-xl mx-auto p-4">
      <img src={movie.Poster} alt={movie.Title} className="w-full rounded-md mb-4" />
      <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Rating:</strong> {movie.imdbRating}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>

      <button
        onClick={() => favorite ? removeFavorite(movie.imdbID) : addFavorite(movie)}
        className={`mt-4 px-4 py-2 rounded-md text-white ${favorite ? 'bg-red-600' : 'bg-blue-600'}`}
      >
        {favorite ? 'Remove from Favorites ❤️' : 'Add to Favorites 🤍'}
      </button>
    </div>
  );
};

export default MovieDetail;