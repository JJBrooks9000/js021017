const expect = require('chai').expect;
const process = require('../src/destructure').process;
const convertTitleToUpperCase = require('../src/destructure').convertTitleToUpperCase;
const compute = require('../src/destructure').compute;

describe('special word tests', function() {
  xit('should return half of the price from JSON', function() {
    const book = {title: 'Who Moved My Cheese', price: 12.10 };
    
    expect(process(book)).to.be.eql(6.05);
  });

  xit('should return half of the price from JSON', function() {
    const book = {title: 'Who Moved My Cheese', price: 12.10 };
    
    expect(convertTitleToUpperCase(book)).to.be.eql('WHO MOVED MY CHEESE');
  });
  
  xit('should return the product of primary and secondary values', function() {
    const data = { primary: { value: 2 }, secondary: { value: 4 }};
    
    expect(compute(data)).to.be.eql(8);
  });
});