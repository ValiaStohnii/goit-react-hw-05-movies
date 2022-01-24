import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import HomePage from './components/View/HomePage/HomePage';
import MoviesPage from './components/View/MoviesPage/MoviesPage';
import MovieDetailsPage from './components/View/MovieDetailsPage/MovieDetailsPage';
import NotFound from './components/View/NotFound';
import Cast from './components/View/Cast/Cast';
import Reviews from './components/View/Reviews/Reviews';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />}>
          <Route path=":movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
