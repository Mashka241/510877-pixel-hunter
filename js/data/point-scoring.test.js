import {assert} from 'chai';
import {createAnswer} from './game-data.js';
import {scorePoints} from './point-scoring.js';

const nineAnswersArray = [...new Array(9).fill(createAnswer(true, 20))];

describe(`Points scoring`, () => {
  it(`should return -1 if player gave less than 10 answers`, () => {
    assert.equal(scorePoints(nineAnswersArray), -1);
  });
});
