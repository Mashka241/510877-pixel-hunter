'use strict';
const main = document.querySelector(`#main`);
const body = document.querySelector(`body`);
const greetingScreenNumber = 1;
const Keycode = {
  LEFT: 37,
  RIGHT: 39
};
let currentScreen = greetingScreenNumber;

const wrap = (it) => {
  const shadow = document.createElement(`div`);
  const content = it.content.cloneNode(true);
  shadow.appendChild(content);
  return shadow.cloneNode(true);
};

const screens = Array.from(document.querySelectorAll(`template`)).map(wrap);

const renderScreen = (screenNumber) => {
  main.innerHTML = ``;
  const screen = screens[screenNumber];
  const screenContent = screen.cloneNode(true);
  main.appendChild(screenContent);
};

renderScreen(greetingScreenNumber);

const showPrevScreen = () => {
  if (currentScreen !== 0) {
    currentScreen -= 1;
  }
  renderScreen(currentScreen);
};

const showNextScreen = () => {
  if (currentScreen !== screens.length - 1) {
    currentScreen += 1;
  }
  renderScreen(currentScreen);
};

document.addEventListener(`keydown`, (evt) => {
  if (evt.keyCode === Keycode.LEFT) {
    showPrevScreen();
  } else if (evt.keyCode === Keycode.RIGHT) {
    showNextScreen();
  }
});

const arrowButtonsWrapper = document.createElement(`div`);
arrowButtonsWrapper.classList.add(`arrows__wrap`);
arrowButtonsWrapper.innerHTML = `<style>
.arrows__wrap {
  position: absolute;
  top: 95px;
  left: 50%;
  margin-left: -56px;
}
.arrows__btn {
  background: none;
  border: 2px solid black;
  padding: 5px 20px;
}
</style>
<button class="arrows__btn"><-</button>
<button class="arrows__btn">-></button>`;

body.appendChild(arrowButtonsWrapper);

const arrowButtons = arrowButtonsWrapper.querySelectorAll(`.arrows__btn`);

const arrowLeft = arrowButtons[0];
const arrowRight = arrowButtons[1];

arrowLeft.addEventListener(`click`, showPrevScreen);
arrowRight.addEventListener(`click`, showNextScreen);
