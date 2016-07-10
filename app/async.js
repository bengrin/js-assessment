exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve) => resolve(value))
  },

  manipulateRemoteData: function(url) {
    return new Promise((res, rej) => {
      $.ajax({
        url: url,
        type: 'GET',
        success: (data) => {
          let people = data.people.reduce((acc, cur) => {
            acc.push(cur.name);
            return acc;
          }, []).sort();
          res(people);
        },
        error: (error) => {
          rej(error);
        }
      })
    })
  }
};
