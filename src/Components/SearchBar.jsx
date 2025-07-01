import { useMovieContext } from '../context/MovieContext';

const SearchBar = ({ onSearch }) => {
  const { query, setQuery } = useMovieContext();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch();
    }} className="flex gap-2 p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="flex-1 border rounded-md p-2"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Search</button>
    </form>
  );
};

export default SearchBar;