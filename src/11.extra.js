"use strict";

/*
Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.
*/

do {
  var number = parseInt(prompt("Type any number (it must be > 0)"));
} while (number <= 0);
{
  if (number % 3 == 0) {
    console.log("This number is multiple of 3");
  } else {
    if (number % 7 == 0) {
      console.log("This number is multiple of 7");
    } else {
      console.log("The number " + number + " is not a multiple of 3 or 7");
    }
  }
}
