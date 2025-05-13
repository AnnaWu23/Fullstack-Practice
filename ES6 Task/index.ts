// Write a function in index.ts that takes two numbers as parameters and returns their sum. Use TypeScript to annotate the types of the parameters and the return value.
// Instructions:
// 1. Define the function add with type annotations.
// 2. Compile the TypeScript file to JavaScript using the tsc command and run the resulting JavaScript file.
function add(num1: number, num2: number): number {
  return num1 + num2;
}

const result = add(1, 2);
console.log(result);

// Exercise Task:

// Define an interface Person with properties name (string) and age (number). Create a function greet that takes a Person object as a parameter and prints a greeting message.
// Instructions:

// Define the Person interface and use it to type the parameter of the greet function.
// Create a Person object and pass it to the greet function.

interface Person {
  name: string;
  age: number;
}

function greeting(person: Person) {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

const person = {
  name: 'John',
  age: 30,
};

greeting(person);
