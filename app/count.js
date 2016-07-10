exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let timer;

    const print = function() {
      console.log(start++);

      if (start <= end) {
        timer = setTimeout(print, 100);
      }
    }
    print();

    return {
      cancel () {
        clearTimeout(timer);
      }
    };
  }
};
