const HOURS = 60;

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const convertMinutes = (duration) => {
  const hours = Math.floor(duration / HOURS);
  const minutes = duration - hours * HOURS;
  return `${hours}h ${minutes}m`;
};
