"use strict";

const max = function(a, b) {
  if(a > b) return a;
  return b;
}

console.log(max(1, 2));
console.log(max(4, 3));
console.log(max(1, 7, 2));
console.log(max(1, 3, 7));

//how many arguments can you pass to a function.
//as many as you like.