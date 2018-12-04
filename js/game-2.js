import createScreen from './create-screen.js';
import renderScreen from './render-screen.js';
import thirdGameScreen from './game-3.js';
import greetingScreen from './greeting.js';
import headerTemplate from './header.js';
import gameTemplate from './game.js';
import {INITIAL_GAME, game2} from './data/game-data';

const secondGameTemplate = `${headerTemplate(INITIAL_GAME)}
${gameTemplate(game2)}`;

const secondGameScreen = createScreen(secondGameTemplate);
const gameAnswers = secondGameScreen.querySelectorAll(`.game__answer`);
const buttonBack = secondGameScreen.querySelector(`.back`);

gameAnswers.forEach((element) => {
  element.addEventListener(`click`, () => {
    renderScreen(thirdGameScreen);
  });
});

buttonBack.addEventListener(`click`, () => {
  renderScreen(greetingScreen);
});

export default secondGameScreen;
