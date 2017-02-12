"use strict";

class Person {
  toString() {
    return `you called toString`;
  }
  
  foo() { console.log('foo called...'); }  //this foo goes into prototype
  
  static kind() { return 'Person'; } //this goes into Person function
}

const turing = new Person('Alan', 'Turing');
console.log(turing.toString());
turing.foo();

//Person.foo(); //nope

//turing.kind(); //nope

console.log(Person.kind()); //OK

console.log(Object.getOwnPropertyNames(Person.prototype));
console.log(Object.getOwnPropertyNames(Person));

/*

AFunction
  prop1
  prop2
  prop3
  prototype
    p1
    p2
    p3
    p4
    
    
inst = new AFunction();

  we know that inst.__proto__ is equal to AFunction.prototype
  Which means the functions that are part of the prototype are now 
    also part of inst.
  However, the functions that are part of the AFunction are not available
    through the inst.
    
  In this example, inst.p1 is OK, but inst.prop1 is not ok.
    
*/  


