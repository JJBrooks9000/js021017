"use strict";

const callWork = function(instance) {
  try {
    instance.work();
  } catch(ex) {
    console.log('no such function');
  }
}

const sam = {
  first: 'Sam'
};

callWork(sam);

const employee = { work: () => console.log('working...') };

sam.__proto__ = employee;
callWork(sam);

const manager = { work: () => console.log('play golf') };

sam.__proto__ = manager;

callWork(sam);

sam.__proto__ = employee;
callWork(sam);
               
console.log('-----');
console.log(sam);
console.log(sam.__proto__);
console.log(sam.__proto__.__proto__);
console.log(sam.__proto__.__proto__.__proto__);





