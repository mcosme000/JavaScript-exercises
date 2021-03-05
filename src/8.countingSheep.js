"use strict";

/* 
Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]


*/

var sheeps = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countingSheeps() {
  var countSheeps = 0;
  for (var i = 0; i < sheeps.length; i++) {
    if (sheeps[i] === true) {
      countSheeps += 1;
    }
  }
  console.log(countSheeps);
}

countingSheeps();
