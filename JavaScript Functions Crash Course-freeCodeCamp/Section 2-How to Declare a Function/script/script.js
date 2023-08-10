//Example of a named function
function printMe() {
    console.log('printing...');
}

//The following line calls or executes the function
printMe();

//This is a function that take a parameter.
function printThis(param) {
    console.log(param);
}

//The following line will run the function. 'tapas' is the argument being passed into the argument. 
printThis('tapas');

//This defines a function as an expression.
const printMe = function() {
    console.log('print');
};

//Another example
const printMeAgain = function() {
    console.log('print');
};

printMeAgain();

//A function written as an expression with parameters. 
const printMeAgainWithParam = function(a, b) {
    console.log(a,b);
};

printMeAgainWithParam(10,20);