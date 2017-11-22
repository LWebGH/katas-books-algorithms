import { ancestryFile } from './ancestry';
import { flattering } from './flattering';
import { tableOfNames, ageDifference } from './age-difference';

describe('One dimensional array tests', () => {
  test('flattering([[1, 2, 3], [4, 5], [6]]) => [ 1, 2, 3, 4, 5, 6 ]', () => {
    expect(flattering([[1, 2, 3], [4, 5], [6]])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test('flattering([[1, 2, 3], [4, 5, ["another", "dimension", ["of", "arrays", "inside", "others"]]], [6]]) => [ 1, 2, 3, 4, 5, "another", "dimension", "of", "arrays", "inside", "others", 6 ]', () => {
    expect(flattering([[1, 2, 3], [4, 5, ["another", "dimension", ["of", "arrays", "inside", "others"]]], [6]])).toEqual([1, 2, 3, 4, 5, "another", "dimension", "of", "arrays", "inside", "others", 6]);
  });
});

describe('Age difference tests', () => {
  test('ageDifference(ancestryFile).toFixed(2)).toEqual(31.22)', () => {
    expect(ageDifference(ancestryFile).toFixed(2)).toEqual('31.22');
  });
});