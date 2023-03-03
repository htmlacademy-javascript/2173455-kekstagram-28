const isStringLessThan = function (str, length) {
  if (str.length <= length) {
    return true;
  } else {
    return false;
  }
};

console.log(isStringLessThan("Hello world", 8));
console.log(isStringLessThan("I", 5));

const isPolindrom = function (word) {
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPolindrom('топот'));
console.log(isPolindrom('топод'));

function extractDigits(str) {
  let digits = str.match(/\d+/g);
  if (digits === null) {
    return NaN;
  } else {
    return parseInt(digits.join(''));
  }
}

console.log(extractDigits("g43grgv34hyurg5v4tug34"));
console.log(extractDigits("hjhbhj"));

function addPadding(str, length, padding) {
  if (str.length >= length) {
    return str;
  }
  const padLength = length - str.length;
  let result = '';
  for (let i = 0; i < padLength; i++) {
    const paddingIndex = i % padding.length;
    result += padding[paddingIndex];
  }
  result += str;
  return result;
}

console.log(addPadding("hello", 10, "h"));
console.log(addPadding("goodbye", 13, "g"));

