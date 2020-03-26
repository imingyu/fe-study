"use strict";

var user = {
  name: 'Tom',
  age: 20
};

var add = function add() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (sum, item) {
    sum += item;
    return sum;
  }, 0);
};

user.age = add(user.age, 2);