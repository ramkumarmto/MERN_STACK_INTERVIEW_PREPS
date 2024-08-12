

//! 1) What are non-primitive data types in JavaScript ? 

// Object, but Object is further categorized into multiple like --  

// Regular objects ({}) 

// Arrays ([]) 

// Functions 

// Dates (new Date()) 

// Regular Expressions (/abc/) 

// Errors (new Error()) 

// Maps (new Map()) 

// Sets (new Set()) 

// And more... 

 

 

//! 2) MAX_SAFE_INTEGER and MIN_SAFE_INTEGER 

 

// const maxSafeMinNo = Number.MAX_SAFE_INTEGER; 

// console.log(maxSafeMinNo) 

// const minSafeMinNo = Number.MIN_SAFE_INTEGER; 

// console.log(minSafeMinNo) 

 

 

//! 3) How Number, String Objects are build?  

 


// Hoisting 

// Varibable and function declaration moves to the top of the scope. 

// Examples

// a=2; 
// console.log(2) // 2 


// console.log(5)
// var a = 5;

// console.log(func2)

// var func2 = ()=> {
//   console.log("HELLO")
// }

// Hoisting takes place in the local scope as well
// function doSomething(){
//     x = 33;
//     console.log(x);
//     var x;
//   } 


// var x;
// console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
// x = 23;

// "use strict";
// x = 23; // Gives an error since 'x' is not declared
// var x; 





 

 