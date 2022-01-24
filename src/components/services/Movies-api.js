// https://api.themoviedb.org/3/movie/550?api_key=d5fe8c9d133441b55610df4674e611b7

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'd5fe8c9d133441b55610df4674e611b7';

async function fetchMovies(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok ? await response.json() : Promise.reject(new Error('Not found'));
}

// список самых популярных фильмов на сегодня для создания коллекции на главной странице
export function fetchTrendingMovies() {
  return fetchMovies(`${BASE_URL}/trending/all/day?api_key=${KEY}`);
}

// поиск кинофильма по ключевому слову на странице фильмов
export function fetchSearchMovies() {
  return fetchMovies(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false`,
  );
}

// запрос полной информации о фильме для страницы кинофильма
export function fetchDetailsMovies(movie_id) {
  return fetchMovies(`${BASE_URL}/movie/${movie_id}?api_key=${KEY}&language=en-US`);
}

//запрос информации о актёрском составе для страницы кинофильма
export function fetchCreditsMovies(movie_id) {
  return fetchMovies(`${BASE_URL}/movie/${movie_id}/credits?api_key=${KEY}&language=en-US`);
}

//запрос обзоров для страницы кинофильма
export function fetchRewiewsMovies(movie_id) {
  return fetchMovies(`${BASE_URL}/movie/${movie_id}/reviews?api_key=${KEY}&language=en-US&page=1`);
}
