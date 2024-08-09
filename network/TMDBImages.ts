import { TMDB_IMAGES } from '@/constants/Urls';
import { MOVIES_ROUTE, TMDB_axios } from './axiosConfigsTMDB';

export function createTMDBImageUrl(path?: string | null) {
  return path ? `${TMDB_IMAGES}/w500/${path}` : '';
}
export async function getAnyImageForFilm(filmId: number) {
  const imagesResult = await TMDB_axios.get(MOVIES_ROUTE + `/${filmId}/images`);

  const firstImagePath = Object.values(imagesResult.data)?.[0]?.[0].file_path;
  return firstImagePath ? createTMDBImageUrl(firstImagePath) : undefined;
}
