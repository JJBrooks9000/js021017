"use strict";

const max = function(a, b) {
  console.log(arguments);
}

max(1, 2);
max(4, 3);
max(1, 7, 2);
max(1, 3, 7);


//In other language you have to work hard to write
//functions with variable number of arguments (varargs)
//In JavaScript every function takes a vararg