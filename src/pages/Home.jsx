import { useEffect } from 'react';
import axios from 'axios';
import { useMovieContext } from '../context/MovieContext';
import SearchBar from '../Components/SearchBar';
import MovieList from '../Components/MovieList';

const Home = () => {
  const { query, movies, setMovies, page, loadMore } = useMovieContext();
  const apikey = import.meta.env.VITE_API_KEY;

  const fetchMovies = async () => {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=${apikey}&s=${query}&page=${page}`);
    if (res.data.Search) {
      setMovies((prev) => page === 1 ? res.data.Search : [...prev, ...res.data.Search]);
    }
  };

  useEffect(() => {
    if (query.length > 2) fetchMovies();
  }, [query, page]);

  return (
    <div className="p-4">
      <SearchBar onSearch={fetchMovies} />
      <MovieList movies={movies} />
      {movies.length > 0 && (
        <div className="text-center mt-4">
          <button onClick={loadMore} className="bg-green-600 text-white px-4 py-2 rounded-md">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;