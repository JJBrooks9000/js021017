const expect = require('chai').expect;
const Palindrome = require('../src/special-word').Palindrome;
const Alphabetical = require('../src/special-word').Alphabetical;

const exerciseFunctionOn = function(specialChecker, word) {
  return specialChecker.isSpecial(word);
}

describe('special word tests', function() {
  ['mom', 'dad', 'racecar'].forEach(function(word) {
    it(`should return true since ${word} is a palindrome`, function() {
      const palindrome = new Palindrome();
  
      expect(exerciseFunctionOn(palindrome, word)).to.be.true;
    });    
  });                                 
  
  ['abe', 'almost'].forEach(function(word) {
    it(`should return false since ${word} is not a palindrome`, function() {
      const palindrome = new Palindrome();
  
      expect(exerciseFunctionOn(palindrome, word)).to.be.false;
    });    
  });
  
  ['mom', 'dad', 'racecar'].forEach(function(word) {
    it(`should return false since letters in ${word} are not arranged alphabetically`, function() {
      const alphabetical = new Alphabetical();
  
      expect(exerciseFunctionOn(alphabetical, word)).to.be.false;
    });    
  });                                 
  
  ['abe', 'almost'].forEach(function(word) {
    it(`should return true since letters in ${word} are arranged alphabetically`, function() {
      const alphabetical = new Alphabetical();
  
      expect(exerciseFunctionOn(alphabetical, word)).to.be.true;
    });    
  });                                 
  
  ['mom', 'dad', 'racecar', 'abe', 'almost'].forEach(function(word) {
    it(`should return true since letters in ${word} are arranged alphabetically or the word is a palindrome`, function() {
      const specialChecker = new Alphabetical();
      specialChecker.__proto__.__proto__ = new Palindrome();

      expect(exerciseFunctionOn(specialChecker, word)).to.be.true;
    });    
  });
  
  // Sadly this is broken. If you try the other way around,
  //that is Palindrome()...Alphabetical, this new test will fail
  //because we messed with two levels deep __proto__.                                
});





