import { Routes, Route } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import HomePage from './components/View/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
