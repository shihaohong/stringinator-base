const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const arr = [1, 2, 3];
      expect(_.every(arr)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const arr = [1, 3, 5, 7, 9];
      expect(_.every(arr, item => item % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const arr = [1, 3, 5, 6, 9];
      expect(_.every(arr, item => item % 2 === 1)).toBe(false);
    });

  });
});