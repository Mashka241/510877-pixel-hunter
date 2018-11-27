export const manageLives = (game, lives) => {
  if (typeof lives !== `number`) {
    throw new Error(`Number of lives should be of type number`);
  }
  if (lives < 0 || lives > 3) {
    throw new Error(`Number of lives should be between 0 and 3`);
  }
  const newGame = Object.assign({}, game, {
    lives
  });
  return newGame;
};
