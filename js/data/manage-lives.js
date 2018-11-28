import {MAX_QUANTITY_LIVES} from './game-data.js';

export const manageLives = (game, lives) => {
  if (typeof lives !== `number`) {
    throw new Error(`Number of lives should be of type number`);
  }
  if (lives < 0 || lives > MAX_QUANTITY_LIVES) {
    throw new Error(`Number of lives should be between 0 and 3`);
  }
  const newGame = Object.assign({}, game, {
    lives
  });
  return newGame;
};
