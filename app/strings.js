exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let hash = {};
    return Array.prototype.reduce.call(str, (acc, cur) => {
      if (acc[acc.length-1] !== cur){
        hash[acc[acc.length-1]] = 0;
      }

      hash[cur] = hash[cur]+1 || 1;
      

      if (hash[cur] <= amount) {
        acc += cur;
      }

      return acc;
    }, '')
  },

  wordWrap: function(str, cols) {
    let count = 0;
    let flag = false;
    let copy = str.slice().split('');
    for (let i = 0; i < str.length; i++) {
      count++;
      if (count >= cols && str[i] !== ' ') {
        flag = true;
      } else if (str[i] === ' ' && count < cols) {
        let diff = cols - count;
        if (str[i + diff + 1] !== ' ') {
          copy.splice(i, 1, '\n');
          count = 0;
        }
      }
      if (flag) {
        if (str[i] === ' ') {
          copy.splice(i, 1, '\n');
          count = 0;
          flag = false;
        }
      }
    }
    return copy.join('');

  },

  reverseString: function(str) {
    if (str.length <= 1) {
      return str;
    }
    return this.reverseString(str.slice(1)) + str[0];
  }
};
