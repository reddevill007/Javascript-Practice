/*
    array.map() returns a new array with the same length as 
    the original array. Original array stays unmodified
*/

const hello = [4, 3, 2, 6];

const result = hello.map(function (val, idx, arr) {
  //   console.log(val, idx, arr);
  return val;
});

console.log("result", result);
