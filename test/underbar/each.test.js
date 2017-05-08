const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arr = [1, 2, 3, 4, 5];
    let count = 0;

    _.each(arr, function(value, index, array) {
      expect(value).toBe(array[index]);
      count += 1;
    })

    expect(count).toBe(5);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const obj = {
      length: 3,
      1: 'a',
      2: 'b',
      3: 'c'
    }
    let count = 0;

    _.each(obj, function(element, index, object){
      expect(element).toBe(object[index]);
      count++;
    });

    expect(count).toBe(3);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = {
      'first name': 'Shi-Hao',
      'last name': 'Hong',
      'school': 'USC'
    }
    let count = 0;

    _.each(obj, function(element, index, object){
      expect(element).toBe(object[index]);
      count++;
    });

    expect(count).toBe(3);
  });
});

