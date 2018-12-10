import createScreen from './create-screen.js';
import renderScreen from './render-screen.js';
// import secondGameScreen from './game-2.js';
import greetingScreen from './greeting.js';
import headerTemplate from './header.js';
import gameTemplate from './game.js';
import {INITIAL_GAME, game1} from './data/game-data';

const renderFirstGameLevel = (game, stats) => {
  const firstGameTemplate = `${headerTemplate(game)}
  ${gameTemplate(game1, game.level, stats)}`;

  const firstGameScreen = createScreen(firstGameTemplate);
  const firstGameForm = firstGameScreen.querySelector(`.game__content`);
  const buttonBack = firstGameScreen.querySelector(`.back`);
  const questionsCount = firstGameScreen.querySelectorAll(`.game__option`).length;


  firstGameForm.addEventListener(`change`, () => {
    const checkedAnswers = Array.from(firstGameScreen.querySelectorAll(`input[type=radio]`)).filter((answer) => answer.checked);
    if (checkedAnswers.length === questionsCount) {
      renderScreen(secondGameScreen);
    }
  });

  buttonBack.addEventListener(`click`, () => {
    renderScreen(greetingScreen);
  });

  return firstGameScreen;
}

export default renderFirstGameLevel;
