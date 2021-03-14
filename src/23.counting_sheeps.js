/*

If you can't sleep, just count sheep!!

Given a non-negative integer, 3 for example, 
return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers.

*/
function countingSheeps(num) {
  if (num > 0) {
    for (var i = 1; i <= num; i++) {
      console.log(`${i} sheep...`);
    }
  } else {
    return null;
  }
}

countingSheeps(5);

/* 
La solución con el ciclo for NO ES VÁLIDA. 
Quiero que la función retorne un STRING, no console.log diferentes para cada oveja. 
*/
//

var countSheep = function (num) {
  let sheeps = "";
  for (var i = 1; i <= num; i++) {
    sheeps += i.toString() + " sheeps...";
  }

  console.log(sheeps);
};

countSheep(4);

/* 
Con "i.toString()" convierto el número i a string y le añado "sheep..."
*/
