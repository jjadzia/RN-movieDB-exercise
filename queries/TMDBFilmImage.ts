import { useQuery } from '@tanstack/react-query';
import { getAnyImageForFilm } from '@/network/TMDBImages';
import { ImagesQueryKey } from './QueryKeys';

export const useTMDBFilmImage = (filmId: number) => {
  return useQuery({
    queryKey: [ImagesQueryKey, filmId],
    queryFn: () => getAnyImageForFilm(filmId),
    initialData: '',
  });
};
