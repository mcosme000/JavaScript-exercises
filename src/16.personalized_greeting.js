/*
Create a function that gives a personalized greeting. 
This function takes two parameters: name and owner.

Use conditionals to return the proper message:

CASE                  RETURN
name equals owner	    'Hello boss'
otherwise	            'Hello guest'
*/

function greet(name, owner) {
  console.log(name === owner ? "Hello boss" : "Hello guest");
}

greet("Roger", "David");
