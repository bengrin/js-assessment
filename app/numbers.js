exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    let binary = num.toString(2);
      if (binary.length < 8) {
        while (binary.length < 8) {
          binary = '0' + binary;
        }
      }
      return Number(binary.split('').reverse().join('')[bit - 1]);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    let result = num.toString(2);
    if (result.length < 8) {
      while (result.length < 8) {
        result = '0' + result;
      }
    }
    return result;
  },

  multiply: function(a, b) {
    let length = Math.max(a.toString().length, b.toString().length);
    let result = (a * b).toString().split('');
    result.length = length;
    return Number(result.join(''));
  }
};
