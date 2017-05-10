const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const arr = [1, 3, 5, 7, 9];
    expect(_.contains(arr, 3)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const arr = [1, 3, 5, 7, 9];
    expect(_.contains(arr, 4)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const inventory = {
      'Apple': 'MacBook',
      'Asus': 'Zenbook Pro',
      'HP': 'YogaBook'
    }

    expect(_.contains(inventory, 'YogaBook')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const inventory = {
      'Apple': 'MacBook',
      'Asus': 'Zenbook Pro',
      'HP': 'YogaBook'
    }

    expect(_.contains(inventory, 'TurtleBook')).toBe(false);
  });

});