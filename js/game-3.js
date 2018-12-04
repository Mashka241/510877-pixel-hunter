import createScreen from './create-screen.js';
import renderScreen from './render-screen.js';
import statsScreen from './stats.js';
import greetingScreen from './greeting.js';
import headerTemplate from './header.js';
import gameTemplate from './game.js';
import {INITIAL_GAME, game3} from './data/game-data';

const thirdGameTemplate = `${headerTemplate(INITIAL_GAME)}
${gameTemplate(game3)}`;

const thirdGameScreen = createScreen(thirdGameTemplate);
const gameOptions = thirdGameScreen.querySelectorAll(`.game__option`);
const buttonBack = thirdGameScreen.querySelector(`.back`);

gameOptions.forEach((element) => {
  element.addEventListener(`click`, () => {
    renderScreen(statsScreen);
  });
});

buttonBack.addEventListener(`click`, () => {
  renderScreen(greetingScreen);
});

export default thirdGameScreen;
