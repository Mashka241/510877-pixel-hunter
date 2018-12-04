const gameTemplate = (game) => `<section class="game">
<p class="game__task">${game.task}</p>
${game.gameContent()}
<ul class="stats">
  ${game.stats.map((stat) => `<li class="stats__result stats__result--${stat}"></li>`).join(``)}
</ul>
</section>`;

export default gameTemplate;
