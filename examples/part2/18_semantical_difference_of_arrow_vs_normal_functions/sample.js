"use strict";
              
const instance = {
  create1: function() {
    return function() {
      console.log(this);
      console.log(arguments);
    }
  },
  
  create2: function() {
    return () => { console.log(this); }
  },
  create3: function() {
    return () => { console.log(arguments); }
  }  
};
                                
console.log('.....f1:......');
const f1 = instance.create1();
f1.call('blah1', 1, 2, 3);

console.log('.....f2:......');
const f2 = instance.create2();
f2.call('blah1', 1, 2, 3);

console.log('.....f3:......');
const f3 = instance.create3();
f3.call('blah1', 1, 2, 3);

console.log('.....f3 again:......');
const f3a = instance.create3('hoho');
f3a.call('blah1', 1, 2, 3);

//arrow functions bind their this and arguments to the respective values
//in the context where they are defined and not at runtime of their call.

//these are called closures, because they close-over variables in their
//defining context.
