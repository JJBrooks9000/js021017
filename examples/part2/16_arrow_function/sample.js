"use strict";

// const greet = function(name) {
//   console.log('hello ' + name);
// }

const greet = name => console.log('hello ' + name);

//(parameter list) => body

//return is not necessary if you want to return from the function.
//if you have zero parameters or you have two or more, then you need ()

const greet2 = (name1, name2) => console.log(`hello ${name1} ${name2}`);

greet('Brian');
greet2('Jack', 'Jill');