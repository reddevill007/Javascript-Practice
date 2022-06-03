// Its visibility is always going to be function scope which
// is bad to solve this problem we have const & let whoes
// visibity is block scope

// let and var can be reassignes but const is constant

function printMyName() {
  if (5 > 1) {
    if (10 < 20) {
      if (30 < 70) {
        // var myName = "Andrew";
        const myName = "Andrew";
        // let myName = "Andrew";
        console.log(myName);
        const myNewName = {};
        myNewName.some = "hello";
        console.log(myNewName);
      }
    }
  }
  //   console.log(myName);
}

printMyName();
