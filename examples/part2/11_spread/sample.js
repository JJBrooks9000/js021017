"use strict";

const max = function(...numbers) { 
  if(numbers.length > 0)  {
    return numbers.reduce((max, e) => max < e ? e : max);
  }
}

console.log(max(1, 2));

let array = [4, 7, 9, 8];

console.log(max(array[0], array[1], array[2], array[3]));

console.log(max(array));

console.log(max(...array));