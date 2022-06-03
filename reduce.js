const hello = [2, 4, 7, 8, 9];

// By default the return value is undefined and the return
// value is set as accumulator for the next call back run
const result = hello.reduce(function (acc, currVal, currIdx) {
  const mappedCurrentElem = {};
  mappedCurrentElem[currIdx] = currVal;
  console.log(acc);
  return Object.assign(acc, mappedCurrentElem);
}, {});

console.log("result", result);
