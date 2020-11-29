
const NameSpace = {
  GENRE_CHANGE: `GENRE_CHANGE`,
  SHOW_MORE: `SHOW_MORE`,
  USER: `USER`,
};

export const TEST_MOCK_MOVIE = {
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
  backgroundColor: `#73B39A`,
  posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
  description: `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
  director: `Nicolas Winding Refn`,
  duration: 92,
  genre: `Action`,
  id: 1,
  isFavorite: true,
  poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
  promo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  rating: 3.6,
  released: 2008,
  starring: [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
  name: `Bronson`,
  previewVideoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  scoresCount: 1635992,
  runTime: 153,
};

export const TEST_MOCK_COMMENT = {
  author: `Christina`,
  user: {
    id: 1,
    name: `Sophie`,
  },
  date: `2020-10-09T13:38:44.769Z`,
  id: 1,
  rating: 3.3,
  reviewText: `I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quali.`
};

export const TEST_MOCK_USER = {
  id: 1,
  email: `qqq@gmail.com`,
  avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`,
  authorizationStatus: `AUTH`,
  password: `777`
};

export const TEST_MOCKS = {
  id: 1,
  noop: () => {},
  movie: TEST_MOCK_MOVIE,
  movies: [TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE],
  favorites: [TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE],
  genresFilter: [`All genres`, `Action`, `Adventure`, `Comedy`, `Crime`, `Drama`, `Fantasy`, `Thriller`],
  genreFilter: `All genres`,
  review: TEST_MOCK_COMMENT,
  userData: {
    id: 1,
    email: `qqq@gmail.com`,
    userAvatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`,
    authorizationStatus: `AUTH`
  },
  unauthorizedUserData: {
    id: 1,
    email: ``,
    userAvatar: ``,
    authorizationStatus: `NO_AUTH`
  },
  reviews: [TEST_MOCK_COMMENT, TEST_MOCK_COMMENT, TEST_MOCK_COMMENT],
  routes: {
    match: {
      params: {
        id: `1`
      },
    }
  },
  state: {
    tabs: `Overview`
  },
};

export const TEST_MOCK_STORE = {
  [NameSpace.USER]: {
    id: 1,
    email: `qqq@gmail.com`,
    authorizationStatus: `AUTH`,
    avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`,
  },

  [NameSpace.SHOW_MORE]: {
    maxFilms: 8
  },

  [NameSpace.GENRE_CHANGE]: {
    genreActive: `All Generes`,
    films: [TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE],
    genereList: `Comedy`,
    activeFilm: TEST_MOCK_MOVIE,
    reviews: [TEST_MOCK_COMMENT, TEST_MOCK_COMMENT, TEST_MOCK_COMMENT],
    promo: TEST_MOCK_MOVIE,
    favorites: [TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE, TEST_MOCK_MOVIE],
    isDataSending: false,
    isDataSendError: false
  },
};
