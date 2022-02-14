import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [searchMovies, setSearcMovies] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (searchMovies.trim() === '') {
      return;
    }
    onSubmit(searchMovies);
  };

  const handleNameChange = e => {
    setSearcMovies(e.currentTarget.value.toLowerCase());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
