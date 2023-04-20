// 1. Write a program that declares a variable using var, let, and const and prints the value to the console.

var str = "Hello World";
console.log("String inside x = " + str);

let num = 10;
console.log("Value of y = " + num);

const PI = 3.14;
console.log("Value of PI = " + PI);

// 2. Write a program that reassigns a value to a variable declared with let and prints the new value to the console.

function reassign() {
  let counter = 10;
  console.log("Value before reassign operation " + counter);

  counter = 20;
  console.log("Value after reassign operation " + counter);
}

reassign();

// 3. Write a program that tries to reassign a value to a variable declared with const and prints the message to the console

const newPI = 3.14;

newPI = 3123; // On reassignment operation we will get an error message TypeError: Assignment to constant variable. Because we can't reassign a const variable in Js.

// 4. Write a program to declare a const, let, var variable within an if statement and try to access the variable outside the if block, what is the result?

if (true) {
  var var_num = 20;
  let let_num = 30;
  const PI = 3.14;
}

console.log(var_num);
console.log(let_num); //we will get an error message of ReferenceError: let_num is not defined . Because let can be accessed within the initialized block or it's child block.
console.log(PI); //we will get an error message of ReferenceError: PI is not defined . Because const can be accessed within the initialized block or it's child block.

// 5. Write a program that concatenates two or more strings and prints the result to the console.

let string1 = "Hello";
let string2 = "world!";
let string3 = "Have a great day ahead";
let result = string1.concat(" ", string2, " ", string3);

console.log(result);

// 6. Write a program that takes a string as input and prints the length of the string to the console.

let user_input = prompt("Enter a String : ");

console.log("String Length : " + user_input.length);

// 7. Write a program that converts a string to uppercase and prints the result to the console.

let user_input2 = prompt("Enter a String : ");

console.log("Input String : " + user_input2);
console.log("Upper Case String : " + user_input2.toUpperCase());
