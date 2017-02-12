"use strict";
              
//DON't DO this
const greet2 = (name1, name2) => {
  const name1Upper = name1.toUpperCase();
  const name2Upper = name2.toUpperCase();
  
  return `hello ${name1Upper} ${name2Upper}`;
}

//http://blog.agiledeveloper.com/2015/06/lambdas-are-glue-code.html

//avoid multiline arrow function.

//simply move the code to a normal function and then call it from within
//the arrow function.