const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([1, 2, 3])).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const obj = {
      length: 3,
      1: 'a',
      2: 'b',
      3: 'c'
    }
    
    expect(_.isArrayLike(obj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const obj = {
      'hello': 'its me',
      'i was': 'wondering'
    }

    expect(_.isArrayLike(obj)).toBe(false);
  });
});
