import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import HomePage from './components/View/HomePage/HomePage';
import MoviesPage from './components/View/MoviesPage/MoviesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route element={<MoviesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
