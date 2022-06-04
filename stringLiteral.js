const name = "Saurabh";
const age = 10;

const result = "My name is " + name + ". My age is " + age;
const result2 = `My name is ${10 > 5 ? name : age}. My age is ${age}.`;

console.log(result2);
