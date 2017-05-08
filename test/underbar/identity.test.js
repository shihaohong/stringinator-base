const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(5)).toBe(5);
  });

  it('returns the same array if given an array', () => {
    expect(_.identity([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('returns the same object if given an object', () => {
    const obj = {
      1: 'a',
      2: 'b',
      3: 'c'
    }

    expect(_.identity(obj)).toBe(obj);
  });
});