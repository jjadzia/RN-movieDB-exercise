import { FilmData } from '@/models/film';
import { SEARCH_ROUTE, TMDB_axios } from './axiosConfigsTMDB';
import { createTMDBImageUrl } from './TMDBImages';
import { TMDBSearchResponse } from '@/models/TMDB';

export async function getTMDBSearchResults(searchedText: string, page = 1) {
  const searchResults = await TMDB_axios.get(SEARCH_ROUTE, {
    params: { query: searchedText, page },
  });

  return {
    ...searchResults.data,
    results: extractDataFromSearchResults(searchResults),
  };
}

export function extractDataFromSearchResults(
  searchResults: TMDBSearchResponse
): Array<FilmData> {
  return searchResults.data.results.map((i) => ({
    year: i.release_date ? new Date(i.release_date)?.getFullYear() : undefined,
    title: i.title,
    image: createTMDBImageUrl(i.poster_path),
    id: i.id,
  }));
}
