import createScreen from './create-screen.js';
import renderScreen from './render-screen.js';
import greetingScreen from './greeting.js';

const introTemplate = `
<section class="intro">
  <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</section>`;

const introScreen = createScreen(introTemplate);

const nextScreenButton = introScreen.querySelector(`.intro__asterisk`);

nextScreenButton.addEventListener(`click`, () => {
  renderScreen(greetingScreen);
});

export default introScreen;
