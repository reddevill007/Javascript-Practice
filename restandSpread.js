// rest = accumulates / folds some value
// spread = unfolds some value

// function someFun(arg1, ...restOfArgs) {
//   console.log(restOfArgs);
// }

// someFun("hello", "Saurabh", 15, () => {}, 5);

// const person = {
//   name: "Saurabh",
//   age: 10,
//   hobby: "Basketball",
// };

// const someOtherObj = {
//   otherName: "Alex",
//   car: "OLX",
//   person: person,
//   ...person,
// };

// const mergeObj = { ...person, ...someOtherObj };
// console.log(someOtherObj);

// const { ...restOfPerson } = person;

// console.log(restOfPerson);

const someArr = [5, 6, 7, 8, 9];
const anotherArr = [1, 2, 3, 4];

const result = [0, ...someArr, 14, 15, 16, ...anotherArr, 17, 18, 19];
console.log(result);

const [firEl, secEl, ...restOfArr] = someArr;

console.log(restOfArr);
