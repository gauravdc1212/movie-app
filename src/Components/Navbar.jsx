import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow">
    <h1 className="text-xl font-bold">🎬 MovieDB</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:text-blue-400">Home</Link>
      <Link to="/favorites" className="hover:text-yellow-400">Favorites</Link>
    </div>
  </nav>
);

export default Navbar;
