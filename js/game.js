// const gameTemplate = (gameScreen, level, stats) => `<section class="game">
// <p class="game__task">${gameScreen.task}</p>
// ${gameScreen.gameContent(level)}
// <ul class="stats">
//   ${stats.map((stat) => `<li class="stats__result stats__result--${stat}"></li>`).join(``)}
// </ul>
// </section>`;

// export default gameTemplate;
import {gameScreen1, gameScreen2, gameScreen3} from './data/game-data.js';

const getContentGame = (level) => {
  let gameScreen;

  switch (level.imgData.length) {
    case 1:
      gameScreen = gameScreen1;
      break;

    case 2:
      gameScreen = gameScreen2;
      break;

    case 3:
      gameScreen = gameScreen3;
      break;
  }
  return gameScreen;
};

export const renderGameLevel = (game, level, stats) => {
  const currentScreen = getContentGame(level);

  const headerTemplate = `<header class="header">
  <button class="back">
    <span class="visually-hidden">Вернуться к началу</span>
    <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
      <use xlink:href="img/sprite.svg#arrow-left"></use>
    </svg>
    <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
      <use xlink:href="img/sprite.svg#logo-small"></use>
    </svg>
  </button>
  <div class="game__timer">${game.time}</div>
  <div class="game__lives">
    ${new Array(3 - game.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`).join(``)}
    ${new Array(game.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`).join(``)}
  </div>
  </header>`;

  const gameTemplate = `<section class="game">
  <p class="game__task">${currentScreen.task}</p>
  ${currentScreen.gameContent(level)}
  <ul class="stats">
    ${stats.map((stat) => `<li class="stats__result stats__result--${stat}"></li>`).join(``)}
  </ul>
  </section>`;

  return headerTemplate + gameTemplate;
};

