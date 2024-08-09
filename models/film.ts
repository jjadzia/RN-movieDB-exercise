export type FilmData = {
  title: string;
  year?: number;
  image: string;
  id: number;
};

export type FilmListItem = {
  item: FilmData;
};
