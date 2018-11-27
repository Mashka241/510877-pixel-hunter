export const INITIAL_GAME = Object.freeze({
  level: 0,
  lives: 3,
  time: 0
});

export const answerScore = {
  WRONG: 0,
  SLOW: 50,
  NORMAL: 100,
  FAST: 150
};

export const createAnswer = (isCorrect, time) => {
  const answer = {
    isCorrect,
    time
  };
  return answer;
};

