'use strict';

var app = {
  sayHello: function sayHello(name) {
    return 'Hello,' + name;
  },
  sum: function sum(a, b) {
    return a + b;
  }
};
try {
  module.exports = app;
} catch (e) {}
//# sourceMappingURL=app-compiled.js.map
