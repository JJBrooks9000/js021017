"use strict";

const evens = function*(){
    let count = 0;

    while(true) {
      console.log('generating....');
      yield count++;
    }
};

for(let e of evens()) {
  console.log(e);
  
  if(e > 10)
    break;
}