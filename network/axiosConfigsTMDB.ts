import axios from 'axios';

const REQUEST_TIMEOUT = 5000;

const TMDB_API_KEY = '';
export const SEARCH_ROUTE = '/search/movie';
export const MOVIES_ROUTE = '/movie';

export const TMDB_axios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
  },
  params: {
    api_key: TMDB_API_KEY,
  },
  timeout: REQUEST_TIMEOUT,
});
