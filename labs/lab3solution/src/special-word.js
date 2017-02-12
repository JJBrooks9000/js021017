class Special {
  isSpecial(word) { return false; }
}

class Palindrome extends Special {
  isSpecial(word) {
    return word.split('').reverse().join('') === word ||
      super.isSpecial(word);
  }
}

class Alphabetical extends Special {
  isSpecial(word) {
    return word.split('').sort().join('') === word ||
     super.isSpecial(word);
  }
}

module.exports = {
  Palindrome: Palindrome,
  Alphabetical: Alphabetical
};