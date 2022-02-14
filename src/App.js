import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import NotFound from './components/View/NotFound';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() =>
  import('./components/View/HomePage/HomePage' /*webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./components/View/MoviesPage/MoviesPage' /*webpackChunkName: "movie-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/View/MovieDetailsPage/MovieDetailsPage' /*webpackChunkName: "movie-details-page" */
  ),
);
const Cast = lazy(() => import('./components/View/Cast/Cast' /*webpackChunkName: "cast-page" */));
const Reviews = lazy(() =>
  import('./components/View/Reviews/Reviews' /*webpackChunkName: "reviews-page" */),
);

function App() {
  return (
    <Suspense fallback={<h1>Loadig...</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
