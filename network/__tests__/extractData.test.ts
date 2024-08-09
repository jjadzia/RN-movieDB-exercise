import { extractDataFromSearchResults } from '../TMDBSearch.ts';
import { createTMDBImageUrl } from '../TMDBImages.ts';

jest.mock('../TMDBImages', () => ({
  createTMDBImageUrl: jest.fn(),
}));

describe('extractDataFromSearchResults', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should map search results to FilmData correctly', () => {
    const mockSearchResults = {
      data: {
        results: [
          {
            release_date: '2022-08-01',
            title: 'Film 1',
            poster_path: '/path1.jpg',
            id: 1,
          },
          {
            release_date: '2023-05-10',
            title: 'Film 2',
            poster_path: '/path2.jpg',
            id: 2,
          },
        ],
      },
    };

    createTMDBImageUrl.mockImplementation(
      (path) => `https://image.tmdb.org/t/p/original${path}`
    );

    const expectedResult = [
      {
        year: 2022,
        title: 'Film 1',
        image: 'https://image.tmdb.org/t/p/original/path1.jpg',
        id: 1,
      },
      {
        year: 2023,
        title: 'Film 2',
        image: 'https://image.tmdb.org/t/p/original/path2.jpg',
        id: 2,
      },
    ];

    const result = extractDataFromSearchResults(mockSearchResults);

    expect(result).toEqual(expectedResult);
    expect(createTMDBImageUrl).toHaveBeenCalledTimes(2);
    expect(createTMDBImageUrl).toHaveBeenCalledWith('/path1.jpg');
    expect(createTMDBImageUrl).toHaveBeenCalledWith('/path2.jpg');
  });

  it('should work for empty results', () => {
    const mockSearchResults = {
      data: {
        results: [],
      },
    };

    const expectedResult = [];

    const result = extractDataFromSearchResults(mockSearchResults);

    expect(result).toEqual(expectedResult);
  });

  it('should work with missing date field', () => {
    const mockSearchResults = {
      data: {
        results: [
          {
            release_date: null,
            title: 'Film with Missing Date',
            poster_path: '/path.jpg',
            id: 3,
          },
        ],
      },
    };

    createTMDBImageUrl.mockImplementation(
      (path) => `https://image.tmdb.org/t/p/original${path}`
    );

    const expectedResult = [
      {
        year: undefined,
        title: 'Film with Missing Date',
        image: 'https://image.tmdb.org/t/p/original/path.jpg',
        id: 3,
      },
    ];

    const result = extractDataFromSearchResults(mockSearchResults);

    expect(result).toEqual(expectedResult);
    expect(createTMDBImageUrl).toHaveBeenCalledWith('/path.jpg');
  });
});
