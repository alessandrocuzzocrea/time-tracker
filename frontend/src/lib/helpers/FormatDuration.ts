export const formatDuration = (start: Date, end: Date) => {
  return formatDuration2(end - start);
};

export const formatDuration2 = (duration: number) => {
  const hours = String(Math.floor(duration / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor(duration / 60000) % 60).padStart(2, '0');
  const seconds = String(Math.floor(duration / 1000) % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};
