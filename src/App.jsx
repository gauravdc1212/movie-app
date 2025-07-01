import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Favorites from './pages/Favorites';

function App() {
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;