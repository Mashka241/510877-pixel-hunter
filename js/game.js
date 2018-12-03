const gameTemplate = (game) => `<section class="game">
<p class="game__task">${game.task}</p>
<form class="game__content">

  <div class="game__option">
    <img src="${game.imgData[0]}" alt="Option 1" width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input class="visually-hidden" name="question1" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="visually-hidden" name="question1" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
  <div class="game__option">
    <img src="${game.imgData[1]}" alt="Option 2" width="468" height="458">
    <label class="game__answer  game__answer--photo">
      <input class="visually-hidden" name="question2" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer  game__answer--paint">
      <input class="visually-hidden" name="question2" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
</form>
<ul class="stats">
  ${game.stats.map((stat) => `<li class="stats__result stats__result--${stat}"></li>`).join(``)}
</ul>
</section>`;

export default gameTemplate;
