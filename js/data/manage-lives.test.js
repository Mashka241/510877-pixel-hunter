import {assert} from 'chai';
import {INITIAL_GAME} from './game-data.js';
import {manageLives} from './manage-lives.js';

describe(`Manage lives`, () => {
  it(`should update number of lives`, () => {
    assert.equal(manageLives(INITIAL_GAME, 3).lives, 3);
    assert.equal(manageLives(INITIAL_GAME, 2).lives, 2);
  });
  it(`should not allow set values less than 0 and more than 3`, () => {
    assert.throws(() => manageLives(INITIAL_GAME, -1).lives, /Number of lives should be between 0 and 3/);
    assert.throws(() => manageLives(INITIAL_GAME, 5).lives, /Number of lives should be between 0 and 3/);
  });
  it(`should not allow set non number value`, () => {
    assert.throws(() => manageLives(INITIAL_GAME, []).lives, /Number of lives should be of type number/);
  });
});
