"use strict";

const foo = function(a, b = 12, c, d = 14) {
  console.log(`a: ${a} b: ${b} c: ${c} d: ${d}`);
}

foo(1, 2, 3, 4);
foo(1, 2, 3);

foo(1, undefined, 3);