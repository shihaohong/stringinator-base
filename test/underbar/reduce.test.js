const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const arr = [1, 2, 3, 4, 5];
    let result = _.reduce(arr, (acc, value) => acc + value, 10);
    expect(result).toBe(25);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const arr = [1, 2, 3, 4, 5];
    let result = _.reduce(arr, (acc, value) => acc + value);
    expect(result).toBe(15);
  });

});