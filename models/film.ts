export type FilmData = {
  title: string;
  year: number;
  image: string;
};

export const ExampleFilmData: FilmData[] = [
  {
    title: 'string',
    year: 2020,
    image: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    title: 'sddd',
    year: 2002,
    image: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    title: 'strd  ing',
    year: 2022,
    image: 'https://reactnative.dev/img/tiny_logo.png',
  },
];

export type FilmListItem = {
  item: FilmData;
};
