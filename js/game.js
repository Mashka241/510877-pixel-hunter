const gameTemplate = (gameScreen, level, stats) => `<section class="game">
<p class="game__task">${gameScreen.task}</p>
${gameScreen.gameContent(level)}
<ul class="stats">
  ${stats.map((stat) => `<li class="stats__result stats__result--${stat}"></li>`).join(``)}
</ul>
</section>`;

export default gameTemplate;
