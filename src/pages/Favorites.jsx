import MovieList from '../Components/MovieList';
import { useMovieContext } from '../context/MovieContext';

const Favorites = () => {
  const { favorites } = useMovieContext();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Favorite Movies ❤️</h2>
      {favorites.length > 0 ? <MovieList movies={favorites} /> : <p className="text-center">No favorites yet.</p>}
    </div>
  );
};

export default Favorites;