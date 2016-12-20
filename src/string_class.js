/**
 * Prototype object
 */
const StringProtoype = {

  /**
   * Checks if string contains vowels.
   * @return {Boolean} Returns true or flase.
   */
  hasVowels() {
    return /[aeiou]/ig.test(this);
  },

  /**
   * Converts all characters in string to upper case.
   * @return {String} Returns all characters in uppercase.
   */
  toUpper() {
    return this.replace(/[a-z]/g, function(char) {
      return String.fromCharCode(char.charCodeAt() - 32);
    });
  },

  /**
   * C Converts all characters in string to lower case.
   * @return {String} Returns first character in lowercase.
   */
  toLower() {
    return this.replace(/[A-Z]/g, function(char) {
      return String.fromCharCode(char.charCodeAt() + 32);
    });
  },

  /**
   *
   * Converts first Character of a string to an Upper case.
   * @return {String} Returns first character as string.
   */
  ucFirst() {
    return this[0].toUpper() + this.slice(1);
  },

  /**
   * Checks if a string is a question.
   * @return {Boolean} Returns true or false.
   */
  isQuestion() {
    return /\?$/.test(this);
  },

  /**
   * Creates a list of the words in the string, as an Array.
   * @return {Array} Returns a list of words.
   */
  words() {
    return this.replace(/[^a-z]+\s/gi, '').split(/\s/);
  },

  /**
   * Checks the number of words in the string.
   * @return {Integer} Returns the count of words in string.
   */
  wordCount() {
    return this.words().length;
  },

  /**
   * Creates a currency representation of the String.
   * @return {String} Returns string a currency.
   */
  toCurrency() {
    return this.replace(/./g, function(char, index, arr) {
      return index && char !== "." && 
        ((arr.length - index) % 3 === 0) ? ',' + char : char;
    });
  },

  /**
   * Returns a number representation of the Currency String.
   * @return {String}
   */
  fromCurrency() {
    return this.replace(/,/g, '');
  },

  /**
   * Converts each letter in a string to its inverse.
   * @return {String} Returns inverse of string.
   */
  inverseCase() {
    return this.replace(/[a-z]/gi, function(char) {
      return char === char.toUpper()? char.toLower() : char.toUpper();
    });
  },


  /**
   * Converts each letters in a string to its alternating cases.
   * @return {String} Returns a string of alternate characters
   */
  alternatingCase() {
    return this.replace(/[a-z]/gi, function(char, index) {
      return index % 2 === 0 ? char.toLower() : char.toUpper();
    });
  },

  /**
   * Returns the character(s) in the middle of the string
   * @return {String}  
   */
  getMiddle() {
    const middle = Math.round(this.length / 2);
    return this.length % 2? 
      this[middle - 1] : this.slice(middle -1, middle +1 );
  },

  /**
   * Converts numbers to words.
   * @return {String} Returns a string of words.
   */
  numberWords() {
    const numbers = ['zero', 'one', 'two', 'three', 'four',
      'five', 'six', 'seven', 'eight', 'nine'
    ];
    return this.replace(/[\d]/g, function (num) {
      return numbers[num] + " ";
    }).trim();
  },

  /**
   * Checks true if the string is a digit(one number).
   * @return {Boolean} Returns true or false.
   */ 
  isDigit() {
    return /^\d$/.test(this);
  },

  /**
   * Checks if a string contains double characters.
   * @returns {Boolean} Returns true or false.
   */
  doubleCheck() {
    return /(.)\1/.test(this);
  }
};

Object.assign(String.prototype, StringProtoype);
