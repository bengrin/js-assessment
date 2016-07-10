exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(str1) {
      return `${str}, ${str1}`;
    }
  },

  makeClosures: function(arr, fn) {
    arr.forEach((num, i, arr) => {
      arr[i] = fn.bind(arr[i])
    })
    return arr;
  },

  partial: function(fn, str1, str2) {
    return function() {
      let args = [str1, str2].concat(Array.from(arguments));
      return fn.apply(null, args);
    }
  },

  useArguments: function() {
    let args = Array.from(arguments);
    return args.reduce((acc, cur) => acc + cur);
  },

  callIt: function(fn) {
    let args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    let outerArgs = Array.prototype.slice.call(arguments, 1);
    return function() {
      let innerArgs = Array.from(arguments);
      return fn.apply(null, outerArgs.concat(innerArgs));
    }
  },

  curryIt: function(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return fn(a, b, c);
        };
      };
    };
  }
};
