import {assert} from 'chai';
import {createAnswer} from './game-data.js';
import {scorePoints} from './point-scoring.js';

describe(`Points scoring`, () => {
  it(`should return -1 if player gave less than 10 answers`, () => {
    assert.equal(scorePoints([...new Array(9).fill(createAnswer(true, 20))], 3), -1);
    assert.equal(scorePoints([...new Array(8).fill(createAnswer(true, 20))], 3), -1);
  });

  it(`should return 1150 points if all answers are normal and correct and all lives saved`, () => {
    assert.equal(scorePoints([...new Array(10).fill(createAnswer(true, 15))], 3), 1150);
  });

  it(`should return 1650 points if all answers are fast and correct and all lives saved`, () => {
    assert.equal(scorePoints([...new Array(10).fill(createAnswer(true, 5))], 3), 1650);
  });

  it(`should return 650 points if all answers are slow and correct and all lives saved`, () => {
    assert.equal(scorePoints([...new Array(10).fill(createAnswer(true, 25))], 3), 650);
  });

  it(`should return 1000 points if all answers are normal and correct and no lives saved`, () => {
    assert.equal(scorePoints([...new Array(10).fill(createAnswer(true, 15))], 0), 1000);
  });

  it(`should return 0 points if all answers are wrong`, () => {
    assert.equal(scorePoints([...new Array(10).fill(createAnswer(false, 15))], 0), 0);
  });

  it(`should return 600 points if half answers are wrong, half correct and normal, 2 lives saved`, () => {
    assert.equal(scorePoints([...new Array(5).fill(createAnswer(true, 15)), ...new Array(5).fill(createAnswer(false, 10))], 2), 600);
  });
  it(`should not take invalid values`, () => {
    assert.throws(() => scorePoints(`a`, 2), /Lives should be type of number and answers should be type of object/);
    assert.throws(() => scorePoints([...new Array(10).fill(createAnswer(true, 20))], `a`), /Lives should be type of number and answers should be type of object/);
  });
  it(`should not take negative value for time parameter`, () => {
    assert.throws(() => scorePoints([...new Array(10).fill(createAnswer(true, -5))], 2), /Time should not be negative value/);
  });
  it(`should not take negative value for lives parameter`, () => {
    assert.throws(() => scorePoints([...new Array(10).fill(createAnswer(true, 15))], -2), /Lives should not be negative value/);
  });
});
