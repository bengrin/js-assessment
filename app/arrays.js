exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        index = i;
        break;
      }
    }
    return index;
  },

  sum: function(arr) {
    return arr.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);
  },

  remove: function(arr, item) {
    return arr.filter(el => {
      return el !== item;
    })
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.reduce((acc, cur) => {
      if (cur === item) {
        acc++;
      }
      return acc;
    }, 0)
  },

  duplicates: function(arr) {
    let result = [];

    let hash = arr.reduce((acc, cur) => {
      acc[cur] = acc[cur] + 1 || 1; 
      return acc;
    }, {});

    for (let key in hash) {
      if (hash[key] > 1) {
        result.push(+key);
      }
    }

    return result;
  },

  square: function(arr) {
    return arr.map(el => {
      return Math.pow(el, 2);
    });

  },

  findAllOccurrences: function(arr, target) {

  }
};
