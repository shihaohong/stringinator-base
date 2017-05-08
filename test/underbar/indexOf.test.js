const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    expect(_.indexOf(['a', 'b', 'c'], 'a')).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    expect(_.indexOf(['a', 'b', 'c'], 'c')).toBe(2);
  });

  it('returns -1 for a missing value', () => {
    expect(_.indexOf(['a', 'b', 'c'], 'd')).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    expect(_.indexOf(['c', 'b', 'a', 'a', 'a', 'a', 'a'], 'a')).toBe(2);
  });

  it('starts searching at the given offset', () => {
    expect(_.indexOf(['a', 'b', 'c', 'a', 'a'], 'a', 2)).toBe(3);
  });

});