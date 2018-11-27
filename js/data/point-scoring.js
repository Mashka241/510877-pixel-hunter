import {answerScore} from './game-data.js';

export const scorePoints = (answers, lives) => {
  let points = 0;
  const bonus = lives * 50;
  answers.forEach((answer) => {
    if (answer.time < 10) {
      points += answerScore.FAST;
    } else if (answer.time >= 10 && answer.time < 20) {
      points += answerScore.NORMAL;
    } else if (answer.time > 20) {
      points += answerScore.SLOW;
    }
  });
  points += bonus;
  return answers.length < 10 ? -1 : points;
};
