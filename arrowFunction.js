function myName() {
  console.log("Saurabh");
}

const myName2 = (myName = "Saurabhhhh", age = 22) => {
  console.log("My name is ", myName);
  console.log("My age is ", age);
};

// const myName3 = () => "Saurabh 3";
const myName3 = () => ({
  name: "Saurabh 3",
  class: 22,
});

const m = myName3();
console.log(m);

myName();
myName2("shiv", undefined);
