// Task1: Let, Const 和 Var
// Description: Rewrite the following code to use let and const instead of var. Explain why let or const is more appropriate in each case.

// Case with using var
// In this case, var is used, and the name variable is overridden in the if block. It's global scope.
var nameVar = 'Alice';
if (true) {
  var nameVar = 'Bob';
  console.log(nameVar); // Bob
}
console.log(nameVar); // Bob

// Replace with let
// In this case, let is more appropriate because it has block scope, which means that the variable is only accessible within the block of code where it is declared.
// It won't override the Alice variable in the global scope.

let nameLet = 'Alice';
if (true) {
  let nameLet = 'Bob';
  console.log(nameLet); // Bob
}
console.log(nameLet); // Alice

// Replace with const
// In this case, const is more appropriate because it has block scope, which means that the variable is only accessible within the block of code where it is declared.
// It won't override the Alice variable in the global scope.
// const also provides immutability, which means that the value of the variable cannot be changed.

const nameConst = 'Alice';
if (true) {
  const nameConst = 'Bob';
  console.log(nameConst); // Bob
}
console.log(nameConst); // Alice

// Task2: Arrow Functions
// Description: Convert the following function to an arrow function. Then explain how arrow functions differ from regular functions in how they handle the this keyword.

// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
// Arrow functions do not have this keyword, which means their this context is determined by the parent scope.
const addArrow = (a, b) => a + b;

// Task3: Template Literals
// Description: Rewrite the following string concatenation code using template literals. Add a new line in the string.

// Regular string concatenation
let greeting = 'Hello, ' + nameLet + '! Welcome to the website.';

// Template literals
greeting = `Hello, ${nameLet}! 
Welcome to the website.`;
console.log(greeting);

// Task4
// Destructuring
// Use destructuring to extract the name and age properties from the person object. Then write a function that destructures the properties of an object in the parameter list.
let person = {
  name: 'John',
  age: 20,
  city: 'Sydney',
};

let { name, age } = person;
console.log(name, age);

function printPerson({ name, age, city }) {
  console.log(name, age, city);
}

printPerson(person);

// Task5
// Default Parameters
// Write a function to calculate the area of a rectangle. If the height is not provided, assume it is a square. Use default parameters to set the default value of height.
function calculateArea(width = 10, height = 10) {
  return width * height;
}

// Task6
// Rest/Spread Parameters
// Use the Rest operator to create a function that can add any number of parameters. Then use the Spread operator to merge two arrays.
function sum(a, b) {
  return a + b;
}

let arr1 = [1, 2];
let arr2 = [3, 4];

// Rest operator
function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// Spread operator
let arr3 = [...arr1, ...arr2];
console.log(arr3);
