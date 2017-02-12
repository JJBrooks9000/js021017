"use strict";

const evens = {
  [Symbol.iterator]() {
    let count = 0;
    
    return {
      next() {    
        //console.log('generating...');
        return { done: false, value: count++ }
      }
    };
  }
};

for(let e of evens) {
  console.log(e);
  
  if(e > 10)
    break;
}