//Hoisting is possible in variable declarations and function declarations
a=26;
console.log("this variable is hoisted");
b();
function b(){
    console.log("This function is hoisted");
}
var a;
