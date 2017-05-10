const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];
    let result = _.uniq(nums);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});