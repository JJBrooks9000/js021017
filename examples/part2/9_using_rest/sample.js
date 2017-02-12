"use strict";

const max = function(...numbers) { 
  console.log(arguments);  //not an array
  console.log(numbers); //is an array
  // let large = arguments[0];
  // 
  // for(let i = 0; i < arguments.length; i++) {
  //   if(large < arguments[i]) large = arguments[i];
  // } 
  // 
  // return large;

  //return arguments.reduce((max, e) => max < e ? e : max); //Sorry

  if(numbers.length > 0)  {
    return numbers.reduce((max, e) => max < e ? e : max);    
  }
}

console.log(max(1, 3, 8));
