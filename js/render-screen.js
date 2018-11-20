const main = document.querySelector(`#main`);

const renderScreen = (screen) => {
  main.innerHTML = ``;
  main.appendChild(screen);
};

export default renderScreen;
