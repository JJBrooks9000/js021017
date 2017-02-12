"use strict";

const max = function(msg, ...numbers) { 
  if(numbers.length > 0)  {
    return `${msg}: ${numbers.reduce((max, e) => max < e ? e : max)}`
  }
}

console.log(max('max', 1, 3, 8));
