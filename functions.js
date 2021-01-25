const identity = function (value) {
  return value;
};

const indexOf = function (array, target) {
  var result = -1;

  each(array, function (item, index) {
    if (item === target && result === -1) {
      result = index;
    }
  });

  return result;
};

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

const filter = function (collection, test) {};
const map = function (collection, iterator) {};
const reject = function (collection, test) {};
const uniq = function (array) {};
const reduce = function (collection, iterator, accumulator) {};

module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
