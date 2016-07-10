exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {
    let result = [];

    const recurse = function(options, perm) {
      perm = perm || []
      if (perm.length === arr.length) {
        result.push(perm)
      } else {
        for (let i = 0; i < options.length; i++) {
          let temp = perm.concat(options[i]);
          let subset = options.slice(0, i).concat(options.slice(i+1))
          recurse(subset, temp);
        }
      }
    }
    recurse(arr);
    return result;
  },

  fibonacci: function(n) {
    return n < 2 ? n : this.fibonacci(n -1) + this.fibonacci(n - 2);
  },

  validParentheses: function(n) {
    let result = [];
    const recurse = function(perm, open, closed) {
      if (open === n && closed === n) {
        result.push(perm)
      } else {
        if (open < n) {
          recurse(perm + '(', open+1, closed);
        }
        if (closed < open) {
          recurse(perm + ')', open, closed+1)
        }
      }
    }
    recurse('', 0, 0);
    return result;
  }
};
