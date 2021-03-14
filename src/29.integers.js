"use strict";

/*
Build a function that can get all the integers between two given numbers.

Example:

(2,9)

Should give you this output back:

[ 3, 4, 5, 6, 7, 8 ]

If startNum is the same as endNum, return an empty array.
*/

function range(startNum, endNum) {
  let arr = [];
  for (var i = startNum + 1; i <= endNum - 1; i++) {
    arr.push(i);
  }
  console.log(arr);
}

range(2, 2);

// 2, 6;
// 6 - 2 + 1 =

function cube(a) {
  console.log(a * a * a);
}

cube(7);
