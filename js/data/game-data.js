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

export const game1 = {
  task: `Угадайте для каждого изображения фото или рисунок?`,
  imgData: [`https://k42.kn3.net/CF42609C8.jpg`, `http://i.imgur.com/1KegWPz.jpg`],
  gameContent() {
    const content = `<form class="game__content">
    ${this.imgData.map((img, index) => {
      return `<div class="game__option">
      <img src="${img}" alt="Option 1" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input class="visually-hidden" name="question${index + 1}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input class="visually-hidden" name="question${index + 1}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>`
    })}
    </form>`;
    return content;
  },
  stats: [`wrong`, `slow`, `fast`, `correct`, ...new Array(6).fill(`unknown`)]
};

export const game2 = {
  task: `Угадай, фото или рисунок?`,
  imgData: [`https://k42.kn3.net/D2F0370D6.jpg`],
  gameContent() {
    const content = `<form class="game__content  game__content--wide">
    <div class="game__option">
      <img src="${this.imgData[0]}" alt="Option 1" width="705" height="455">
      <label class="game__answer  game__answer--photo">
        <input class="visually-hidden" name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input class="visually-hidden" name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>`;
  return content;
  },
  stats: [`wrong`, `slow`, `fast`, `correct`, `wrong`, `unknown`, `slow`, `unknown`, `fast`, `unknown`]
};

export const game3 = {
  task: `Найдите рисунок среди изображений`,
  imgData: [`https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`],
  gameContent() {
    const content = `<form class="game__content  game__content--triple">
    <div class="game__option">
      <img src="${this.imgData[0]}" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected">
      <img src="${this.imgData[1]}" alt="Option 2" width="304" height="455">
    </div>
    <div class="game__option">
      <img src="${this.imgData[2]}" alt="Option 3" width="304" height="455">
    </div>
  </form>`;
    return content;
  },
  stats: [`wrong`, `slow`, `fast`, `correct`, `wrong`, `unknown`, `slow`, `unknown`, `fast`, `unknown`]
};
