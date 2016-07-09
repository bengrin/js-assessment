exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve) => resolve(value))
  },

  manipulateRemoteData: function(url) {

  }
};
