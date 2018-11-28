import {assert} from 'chai';
import {INITIAL_GAME} from './game-data.js';
import {setTime} from './set-time.js';

describe(`Set time`, () => {
  it(`should update time of the game`, () => {
    assert.equal(setTime(INITIAL_GAME, 10).time, 10);
    assert.equal(setTime(INITIAL_GAME, 20).time, 20);
  });
  it(`should not allow set negative values`, () => {
    assert.throws(() => setTime(INITIAL_GAME, -1).level, /Time should not be negative value/);
  });
  it(`should not allow set non number value`, () => {
    assert.throws(() => setTime(INITIAL_GAME, []).level, /Time should be of type number/);
  });
});
