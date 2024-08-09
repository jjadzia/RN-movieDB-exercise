export interface TMDBMovie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string | null;
  [key: string]: unknown;
}

export interface TMDBSearchResponse {
  data: { results: Array<TMDBMovie> };
}

export interface TMDBSearchResult {
  page: number;
  results: TMDBMovie[];
  total_results: number;
  total_pages: number;
}
