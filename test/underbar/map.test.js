const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const array = [1, 2, 3, 4, 5];
    const mappedArr = _.map(array, (el) => el*el); 

    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });
});