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
export const adapterUserToClient = (userData) => {
  const adapterUSer = {
    id: userData.id,
    email: userData.email,
    name: userData.name,
    avatarUrl: userData.avatar_url,
  };
  return adapterUSer;
};

export const convertDate = (timeStamp) => {
  const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

  let day = timeStamp.slice(8, 10);
  if (day[0] === `0`) {
    day = day.substr(1);
  }

  let monthNumber = timeStamp.slice(5, 7);
  if (monthNumber[0] === `0`) {
    monthNumber = monthNumber.substr(1);
  }
  const monthName = months[monthNumber - 1];

  const year = timeStamp.slice(0, 4);

  const date = `${monthName} ${day}, ${year}`;
  return date;
};
