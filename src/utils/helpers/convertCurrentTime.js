const convertCurrentTime = (currentTime) => {
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);

  return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
};

export default convertCurrentTime;
