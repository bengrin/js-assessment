exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return (/\d/).test(str);
  },

  containsRepeatingLetter: function(str) {
    return (/([a-z])\1+/i).test(str);
  },

  endsWithVowel: function(str) {
    return (/[a,e,i,o,u]$/i).test(str);
  },

  captureThreeNumbers: function(str) {
    let match = (/\d{3}/).exec(str);
    return match ? match[0] : false;
  },

  matchesPattern: function(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },
  isUSD: function(str) {
    return (/^\$\d{1,3}(,?\d{3})*(\.\d{2})?$/).test(str);
  }
};
