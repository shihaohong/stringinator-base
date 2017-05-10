const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  let arr = _.reject(str, currentVal => target === currentVal);
  let string = '';

  for (let i = 0; i < arr.length; i++){
    string += arr[i];
  }

  return string;
};

const hasChar = function(str, target) {
  return _.some(str, currentChar => currentChar === target);
};

const isOnlyDigits = function(str) {
  return _.every(str, currentValue => !isNaN(currentValue));
};

const filterToOnlyDigits = function(str) {
  let string = '';
  const arr = _.filter(str, currentValue => !isNaN(currentValue));
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ' '){
      string += arr[i];
    }
  }

  return string;
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
  return _.map(obj, currentValue => truncateString(currentValue, maxLength));
};

const countChars = function(str) {
  return _.reduce(str, function(acc, currentValue) {
    
    if(acc[currentValue] === undefined) {
      acc[currentValue] = 1;
    } else {
      acc[currentValue]++;
    }
    return acc;
  }, {});
};

const dedup = function(str) {
  let obj = countChars(str);
  let string = '';

  const arrOfLetters = Object.keys(obj);

  for (let i = 0; i < arrOfLetters.length; i++) {
    string += arrOfLetters[i];
  }

  return string;
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};