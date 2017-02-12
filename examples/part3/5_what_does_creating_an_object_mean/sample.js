"use strict";

class Person {
  constructor(first, last) {
    console.log(this);
    console.log(this.__proto__);
    this.first = first;
    this.last = last;
  }
  
  toString() {
    return `${this.first} ${this.last}`;
  }
}

Person.prototype.reveal = 'hi';

const turing = new Person('Alan', 'Turing');

//what does the above really mean?
//the above code, with new, really means the following:
//1. JavaScript allocates memory for an empty {} object. 
//    Let us call that "inst"
//2. set inst.__proto__ = Person.prototype;
//3. invoke the constructor with the "inst" as the context object and
//the given arguments as the arguments.
//  Person.call(inst, 'Alan', 'Turing');




