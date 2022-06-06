// const doSome = new Promise((resolve, reject) => {
//   resolve("hello");
//   //   reject(new Error("promise failed"));
// });

// console.log(doSome);

// doSome
//   .then((resolvedVal) => {
//     console.log(resolvedVal);
//     return 4;
//   })
//   .then((val) => {
//     console.log("The value of 2nd then is ", val);
//   })
//   .then((val) => {
//     //   val will be returned val of previous then
//     console.log("The value of 2nd then is ", val);
//   })
//   .catch((err) => {
//     console.log("Error Occoured: ", err.message);
//   });

// const waitSome = (timeoutInMs) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, timeoutInMs);
//   });
// };

// console.log("1");
// console.log("2");
// console.log("3");

// waitSome(4000).then(() => {
//   console.log("4 second passed");
// });

// Fetch only works inside browser
// this.fetch returns a promise
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

async function sendReq() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  console.log(json);
}

sendReq();
