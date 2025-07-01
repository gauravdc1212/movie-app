import { createContext, useContext, useState, useEffect } from 'react';

const MovieContext = createContext();

const getFavoritesFromStorage = () => {
  const stored = localStorage.getItem('favorites');
  return stored ? JSON.parse(stored) : [];
};

const saveFavoritesToStorage = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const MovieProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState(getFavoritesFromStorage());

  const updateQuery = (newQuery) => {
    setQuery(newQuery);
    setMovies([]);
    setPage(1);
  };

  const loadMore = () => setPage((prev) => prev + 1);

  const addFavorite = (movie) => {
    const exists = favorites.find((m) => m.imdbID === movie.imdbID);
    if (!exists) {
      const updated = [...favorites, movie];
      setFavorites(updated);
      saveFavoritesToStorage(updated);
    }
  };

  const removeFavorite = (id) => {
    const updated = favorites.filter((m) => m.imdbID !== id);
    setFavorites(updated);
    saveFavoritesToStorage(updated);
  };

  const isFavorite = (id) => favorites.some((m) => m.imdbID === id);

  return (
    <MovieContext.Provider
      value={{
        query,
        setQuery: updateQuery,
        movies,
        setMovies,
        page,
        loadMore,
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);

