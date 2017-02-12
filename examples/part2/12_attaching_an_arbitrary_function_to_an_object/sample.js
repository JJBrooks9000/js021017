"use strict";

const greet = function(name) {
  console.log(this.toUpperCase() + ' ' + name);
}                   

//greet('Venkat');

const msg = 'hi';

msg.__proto__.greet = greet;

msg.greet('Brian');