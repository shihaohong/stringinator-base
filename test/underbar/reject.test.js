const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [1, 2, 3, 4, 5];
    let result = _.reject(nums, currentValue => currentValue % 2 === 1);

    expect(result).toEqual([2, 4]);
  });

  it('rejects null values from an object', () => {
    const obj = {
      'name': 'shihao',
      'pets': null,
      'age': 22,
      'family': 4,
      'job': null,
    }

    let result = _.reject(obj, currentValue => currentValue === null);

    expect(result).toEqual(['shihao', 22, 4]);
  });
});