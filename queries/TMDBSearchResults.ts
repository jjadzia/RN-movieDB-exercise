import { getTMDBSearchResults } from '@/network/TMDBSearch';
import { useInfiniteQuery } from '@tanstack/react-query';
import { SearchResultQueryKey } from './QueryKeys';

export const useTMDBSearchResults = (searchText: string) => {
  return useInfiniteQuery({
    queryKey: [SearchResultQueryKey, searchText],
    queryFn: ({ pageParam }) => {
      return getTMDBSearchResults(searchText, pageParam);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.total_pages <= lastPage.page) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
      if (firstPageParam < 1) {
        return undefined;
      }
      return firstPageParam - 1;
    },
    initialData: { pages: [], pageParams: [] },
  });
};
