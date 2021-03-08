"use strict";

/*

Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between including them too and return it. 
If the two numbers are equal return a or b.

Note: a and b are not ordered!

GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same

*/

function getSum(a, b) {
  let sum = 0;

  if (a > b) {
    for (var i = b; i <= a; i++) {
      sum += i;
    }
  } else {
    if (b > a) {
      for (var i = a; i <= b; i++) {
        sum += i;
      }
    } else if ((a = b)) {
      sum = a;
    }
  }

  console.log(sum);
}

getSum(4, 4);
