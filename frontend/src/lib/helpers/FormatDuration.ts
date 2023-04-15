export const formatDuration = (start: Date, end: Date) => {
  const duration = end - start;
  const hours = String(Math.floor(duration / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor(duration / 60000) % 60).padStart(2, '0');
  const seconds = String(Math.floor(duration / 1000) % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};
