import {AnswerScore, AnswerTime, LIFE_BONUS, MAX_QUANTITY_QUESTIONS} from './game-data.js';

const definePointsForAnswer = (answer) => {
  let answerPoints;
  if (answer.time < AnswerTime.FAST) {
    answerPoints = AnswerScore.FAST;
  } else if (answer.time >= AnswerTime.FAST && answer.time < AnswerTime.NORMAL) {
    answerPoints = AnswerScore.NORMAL;
  } else if (answer.time > AnswerTime.NORMAL) {
    answerPoints = AnswerScore.SLOW;
  }
  return answerPoints;
};

export const scorePoints = (answers, lives) => {
  if (typeof lives !== `number` || typeof answers !== `object`) {
    throw new Error(`Lives should be type of number and answers should be type of object`);
  }

  if (lives < 0) {
    throw new Error(`Lives should not be negative value`);
  }
  let points = 0;
  const bonus = lives * LIFE_BONUS;
  const rightAnswers = answers.filter((answer) => answer.isCorrect);

  points = rightAnswers.reduce((sum, currentAnswer) => {
    if (currentAnswer.time < 0) {
      throw new Error(`Time should not be negative value`);
    }
    return sum + definePointsForAnswer(currentAnswer);
  }, 0);
  points += bonus;
  return answers.length < MAX_QUANTITY_QUESTIONS ? -1 : points;
};
