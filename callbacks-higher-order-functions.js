// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
  return word + 's';
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  // approach 1 (without Array.prototype.map);
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;

  // approach 2
  // return array.map(callback);
}

console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
  // Approach 1 (without Array.prototype.forEach)
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }

  // Approach 2
  // array.forEach(callback);
}

// see for yourself if your forEach works!
const forEachResult = [];
const forEachCallback = (el) => forEachResult.push(el * 2);
forEach([1, 2, 3], forEachCallback);
console.log(forEachResult); // should be [2, 4, 6]


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  const result = [];
  const cb = el => result.push(callback(el));
  forEach(array, cb);
  return result;
}

//Extension 2
function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  forEach(array, (el, i, array) => callback(accumulator, el, i, array));
  return accumulator;
}

//Extension 3
function intersection(...arrays) {
  // log(n) time
  // we create an object with { key: counter }
  // If counter is not equal to the current array index we ignore it. This prevents incrementing the coutner multiple times for the same array (duplicate numbers). Consequently it also ignores numbers which have already not been present in every array.
  // In the end if the counter === the number of arrays, we know that number is in every array.
  const obj = {};
  arrays.forEach((array, arraysIndex) => {
    array.forEach(el => {
      const counter = obj[el] || 0;
      if (counter === arraysIndex) {
        obj[el] = counter + 1;
      }
    });
  });
  const result = [];
  Object.entries(obj).forEach(([k, v]) => {
    if (v === arrays.length) {
      result.push(k);
    }
  });
  return result;

  // log(n^2) time
  /*
  if (arrays.length === 0) {
    return [];
  }
  const firstArray = arrays[0];
  return reduce(firstArray, (result, el) => {
    // Check element appears in every array
    for (let array of arrays) {
      if (!array.includes(el)) {
        return;
      }
    }
    // If element is not already in result, add it to result
    if (!result.includes(el)) {
      result.push(el);
    }
  }, []);
  */
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {

}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {

}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {

}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

