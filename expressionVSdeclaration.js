// Function Declaration
/*
    With function declaration it does not matter where we 
    define the function
*/
function hello() {
  console.log("Saurabh");
}

// Function Expression
/*
    With function expression it matter where we 
    define the function
*/
const hello2 = function () {
  console.log("Saurabh2");
};

hello();
hello2();

/*
    Hoisting is when the code(declaration) are evaluated by 
    JS prior to code execution. 
    Which means all the function declaration are put on the 
    top of code. 
    Where as expressions are evaluated by JS at the time of 
    execution, as the appear in the code. 
*/
