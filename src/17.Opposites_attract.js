"use strict";

/* 
Timmy & Sarah think they are in love, but around where they live, 
they will only know once they pick a flower each. 
If one of the flowers has an even number of petals 
and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower 
and return true if they are in love and false if they aren't.

Test.assertEquals(lovefunc(1,4), true)
Test.assertEquals(lovefunc(2,2), false)
Test.assertEquals(lovefunc(0,1), true)
Test.assertEquals(lovefunc(0,0), false)
*/

function lovefunc(flower1, flower2) {
  //console.log(flower1 % 2 !== 0 && flower2 % 2 === 0 ? true : false);

  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    console.log(true);
  } else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
    console.log(true);
  } else console.log(false);
}

lovefunc(1, 10); //true
lovefunc(10, 1); //true
lovefunc(1, 1); // false
lovefunc(2, 2); //false

/* 
LA SOLUCIÓN FÁCIL:

los dos solo se van a querer cuando los petalos de las flores sean diferentes!!
es decir, uno par y uno impar. 
*/

function solution(flower1, flower2) {
  console.log(flower1 % 2 !== flower2 % 2 ? true : false);
}

solution(1, 1); //false
solution(1, 2); //true
