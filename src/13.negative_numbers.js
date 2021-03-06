/*

In this simple assignment you are given a number and have to make it negative. 
But maybe the number is already negative?


NOTES: 
--- The number can be negative already, in which case no change is required.
--- Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

function makeNegative(num) {
  let toString = num.toString();

  if (toString.includes("-") || toString == 0) {
    console.log(parseFloat(toString));
  } else {
    console.log(parseFloat(`-${toString}`));
  }
}

makeNegative(0.89);

/* 
NOTES

includes() vs indexOf()

① includes() returns a boolean
true: the element is inside the string / array
false: the element doesn't exist



② indexOf() 
It returns the first index of the element found in the array, 
or it will return -1 (which represents that the element is not found).


To convert a string to number:
parseInt() -- redondea el número
parseFloat() -- no redondea el número!! 
*/

/* 
SOLUTION on codeWars
 
Math.abs(); 
This function returns the absolute value of a number: 

Puedo añadir un signo negativo delante de la función 
para hacer el número negativo!!
*/

function number(n) {
  if (n == 0) {
    console.log(n);
  } else {
    console.log(-Math.abs(n));
  }
}

number(89);
