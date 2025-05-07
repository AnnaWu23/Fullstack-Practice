// Task1:
// Data and Variables:
// Create a shopping list array
let shoppingList = ['milk', 'eggs', 'bread'];
console.log('shopping list:', shoppingList);

// Task2:
// Array practice:
// 1. Add two items to the shopping list
shoppingList.push('banana', 'apple');
console.log('shopping list2:', shoppingList);
// 2. Delete the last item in the array
shoppingList.pop();
console.log('shopping list3:', shoppingList);

// Task3:
// Condition and For Loop:
// 1. Create a function, when the number of items in the shopping list exceeds 5, output "Your shopping cart is full" to the console.
function checkFull(shoppingList) {
  if (shoppingList.length > 5) {
    console.log('Your shopping cart is full');
  }
}

shoppingList.push('lemon', 'mango');
console.log('shopping list full?');
checkFull(shoppingList);

// 2. Use the for loop to traverse the shopping list, and output each item in the shopping list to the console in the form of a number.
function printList(shoppingList) {
  for (let i = 1; i <= shoppingList.length; i++) {
    console.log(i + '. ' + shoppingList[i - 1]);
  }
}

printList(shoppingList);

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
