"use strict";

const greet = function(name1, name2) {
  console.log(this.toUpperCase() + ' ' + name1 + ' ' + name2);
}                   

greet.call('hi', 'Joshua', 'Brian');
greet.call('hello', 'Joshua', 'Brian');

let names = ['Arthur', 'Lee'];
greet.call('howdy', names[0], names[1]);

greet.apply('howdy', names);

greet.call('hello', ...names); //better than apply                            
