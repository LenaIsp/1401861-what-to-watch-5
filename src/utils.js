const HOURS = 60;

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const convertMinutes = (duration) => {
  const hours = Math.floor(duration / HOURS);
  const minutes = duration - hours * HOURS;
  return `${hours}h ${minutes}m`;
};

export const adapterFilmsToClient = (filmsData) => {
  const adapterFilms = {
    name: filmsData.name,
    posterImage: filmsData.poster_image,
    previewImage: filmsData.preview_image,
    backgroundImage: filmsData.background_image,
    backgroundColor: filmsData.background_color,
    description: filmsData.description,
    rating: filmsData.rating,
    scoresCount: filmsData.scores_count,
    director: filmsData.director,
    runTime: filmsData.run_time,
    genre: filmsData.genre,
    released: filmsData.released,
    id: filmsData.id,
    isFavorite: filmsData.is_favorite,
    videoLink: filmsData.video_link,
    previewVideoLink: filmsData.preview_video_link,
    starring: filmsData.starring
  };
  return adapterFilms;
};
