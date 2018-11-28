export const INITIAL_GAME = Object.freeze({
  level: 0,
  lives: 3,
  time: 0
});

export const AnswerScore = {
  WRONG: 0,
  SLOW: 50,
  NORMAL: 100,
  FAST: 150
};

export const AnswerTime = {
  SLOW: 30,
  NORMAL: 20,
  FAST: 10
};

export const LIFE_BONUS = 50;

export const MAX_QUANTITY_LIVES = 3;

export const MAX_QUANTITY_QUESTIONS = 10;

export const createAnswer = (isCorrect, time) => {
  const answer = {
    isCorrect,
    time
  };
  return answer;
};

