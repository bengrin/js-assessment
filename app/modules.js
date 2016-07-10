exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    let module = {
      sayIt: function() {
          return `${this.greeting}, ${this.name}`;
      },
      name: str2,
      greeting: str1
    };
    return module;
  }
};
