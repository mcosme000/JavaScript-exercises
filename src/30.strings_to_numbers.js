"use strict";

/*
Create a function that takes as a parameter an array of 'stringified' numbers and returns an array of numbers.

Example:

["1", "3", "3.6"] ➞ [1, 3, 3.6]
Examples
toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]

toNumberArray(["91", "44"]) ➞ [91, 44]

toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]
*/

function stringified(arr) {
  arr.map((number) => {
    console.log(number * 2);
  });
}

stringified(["9.5", "8.8"]);
