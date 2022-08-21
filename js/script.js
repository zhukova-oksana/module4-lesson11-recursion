'use strict';

const sumArray = (arr) => {
  const x = Math.round(Math.random() * 10);
  arr.push(x);

  let sum = 0;
  arr.forEach((item) => {
    sum += item;
  });

  if (sum < 50) {
    return sumArray(arr);
  } else {
    return arr;
  }
};

const arrNull = [];

console.log(sumArray(arrNull));
