"use strict";

/*Given a non-empty array of integers, 
return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

let numbers = [1, 3, 4];

let multi = numbers.reduce((acc, number) => {
  return acc * number;
});

console.log(multi);

function grow(x) {
  return x.reduce((acc, number) => {
    return acc * number;
  });
}

console.log(grow([1, 3, 4]));
