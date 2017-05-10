const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const arr = [1, 2, 3, 4, 5];

    let result = _.filter(arr, currentValue => currentValue % 2 === 1);

    expect(result).toEqual([1, 3, 5]);
  });

  it('filters an object to only numeric values', () => {
    const arr = [1, 'shihao', 3, 6, 'ryan', 'ivana'];
    let result = _.filter(arr, currentValue => typeof(currentValue) === 'number');

    expect(result).toEqual([1, 3, 6]);

  });
});