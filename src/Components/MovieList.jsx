import MovieCard from './MovieCard';

const MovieList = ({ movies }) => (
  <div className="flex flex-wrap justify-center">
    {movies.map((movie) => (
      <MovieCard key={movie.imdbID} movie={movie} />
    ))}
  </div>
);

export default MovieList;