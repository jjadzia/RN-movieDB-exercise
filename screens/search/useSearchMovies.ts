import { useState } from 'react';
import { useTMDBSearchResults } from '@/queries/TMDBSearchResults';

export function useSearchMovies() {
  const [inputValue, setInputValue] = useState('');

  const [searchParam, setSearchParam] = useState(inputValue);

  const {
    data,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useTMDBSearchResults(searchParam);

  const results = data.pages.flatMap((p) => p.results);

  return {
    inputValue,

    searchParam,
    results,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isFetching,
    fetchNextPage,
    setInputValue,
    setSearchParam,
  };
}
