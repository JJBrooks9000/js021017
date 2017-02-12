"use strict";

const evens = {
  *[Symbol.iterator]() {
    let count = 0;

    while(true) {
      yield count++;
    }
  }
};

for(let e of evens) {
  console.log(e);
  
  if(e > 10)
    break;
}