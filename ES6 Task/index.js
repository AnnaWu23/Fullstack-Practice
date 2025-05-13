// Write a function in index.ts that takes two numbers as parameters and returns their sum. Use TypeScript to annotate the types of the parameters and the return value.
// Instructions:
// 1. Define the function add with type annotations.
// 2. Compile the TypeScript file to JavaScript using the tsc command and run the resulting JavaScript file.
function add(num1, num2) {
    return num1 + num2;
}
var result = add(1, 2);
console.log(result);
function greeting(person) {
    console.log("Hello, ".concat(person.name, "! You are ").concat(person.age, " years old."));
}
var person = {
    name: 'John',
    age: 30,
};
greeting(person);
