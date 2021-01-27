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

const filter = function (collection, test) {
let result = []
  each(collection, (element) => {
    if(test(element)){
      result.push(element);
    } 
  })
  return result;
};

const reject = function (collection, test) {
  return filter(collection, function(value){
    return !test(value);
  });
  // let result = [];
  // filter(collection, (element) => {
  //   if(!test(element)){
  //     result.push(element)
  //   }
  // })
  // return result;
};
const uniq = function (array) {

  let result = [];

  each(array, function(element){
    if(indexOf(result, element) === -1) {
      result.push(element);
    }
  });
  return result;
};
    // var a = [];
    // for (var i=0, l=arr.length; i<l; i++)
    //     if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
    //         a.push(arr[i]);
    // return a;

// };
const map = function (collection, iterator) {
  let result = [];
  each(collection,(element) => {
    result.push(iterator(element))
  });
  return result;
};

const reduce = function (collection, iterator, accumulator) {};

module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
