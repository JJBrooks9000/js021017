"use strict";

const greet = function(name) {
  console.log(this.toUpperCase() + ' ' + name);
}                   

//greet('Brian');

greet.call('hi', 'Brian');
//for this call, greet will have 'hi' as its context object (this)
//and 'Brian' is the first argument.

//call takes n + 1 arguments when we want to pass n arguments.
//the first argument is for this, and the remaining arguments are
//for the real arguments.