"use strict";

const greet = function(msg, name1, name2) {
  console.log(msg + ' ' + name1 + ' ' + name2);
}                   

greet('hi', 'Tom', 'Jerry');
greet('hi', 'Arthur', 'Lee');

// const greetWith = function(msg) {
//     return function(name1, name2) {
//       return greet(msg, name1, name2);
//     }
// }

// const greetWithHi = greetWith('hi');
const greetWithHi = greet.bind(null, 'hi');

greetWithHi('Tom', 'Jerry');
greetWithHi('Jack', 'Jill');

//const greetWithHowdy = greetWith('howdy');
const greetWithHowdy = greet.bind(null, 'howdy');
greetWithHowdy('Tom', 'Jerry');
greetWithHowdy('Jack', 'Jill');

