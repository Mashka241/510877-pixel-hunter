// import {INITIAL_GAME, answerScore, createAnswer} from './game-data.js';

export const scorePoints = (answers) => {
  let points = 0;
  if (answers.length < 10) {
    points = -1;
  }
  return points;
};
