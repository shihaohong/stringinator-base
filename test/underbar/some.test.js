const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const arr = [2, 4, 6, 8, 9];
    expect(_.some(arr, currentValue => currentValue % 2 === 1)).toBe(true);

  });

  it('returns false if no number is odd', () => {
    const arr = [2, 4, 6, 8, 10];
    expect(_.some(arr, currentValue => currentValue % 2 === 1)).toBe(false);
  });

});