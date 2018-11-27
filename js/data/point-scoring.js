import {answerScore} from './game-data.js';

export const scorePoints = (answers, lives) => {
  if (typeof lives !== `number` || typeof answers !== `object`) {
    throw new Error(`Lives should be type of number and answers should be type of object`);
  }
  if (lives < 0) {
    throw new Error(`Lives should not be negative value`);
  }
  let points = 0;
  const bonus = lives * 50;
  const rightAnswers = answers.filter((answer) => answer.isCorrect);
  rightAnswers.forEach((answer) => {
    if (answer.time < 0) {
      throw new Error(`Time should not be negative value`);
    } else if (answer.time < 10) {
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
