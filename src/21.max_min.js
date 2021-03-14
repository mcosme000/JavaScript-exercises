/* 
Your task is to make two functions, 
max and min (maximum and minimum in PHP and Python) 
that take a(n) array/vector of integers list as input and outputs, 
respectively, the largest and lowest number in that array/vector.

#Examples

max([4,6,2,1,9,63,-134,566]) returns 566
min([-52, 56, 30, 29, -54, 0, -110]) returns -110
max([5]) returns 5
min([42, 54, 65, 87, 0]) returns 0

*/

// se hace con el método REDUCE
/*
Este método va a recorrer el array que enviamos a la función 
y solo va a retornar un valor cada vez. 
Si tenemos un array de ([9, 5, 10]); 
la primera vez va a retornar 9. 
En la segunda, retorna 5, pero como es menor que 9, el acumulador, 
el máximo va a seguir siendo 9. 
a la última vuelva retorna 10, y como es mayor que el acumulador, el máximo ahora va a ser 10. 

*/

var min = function (list) {
  console.log(
    list.reduce((acc, number) => {
      return (acc || 0) < number ? acc : number;
    })
  );
};

var max = function (list) {
  console.log(
    list.reduce((acc, number) => {
      return (acc || 0) > number ? acc : number;
    })
  );
};

min([8.65, 5, 10]);
max([8.65, 5, 10]);

// COMPLETADO

// se puede hacer también sin añadir || 0 al condicional
