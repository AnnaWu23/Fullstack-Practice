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
// Function and Object:
// 1. Create a function that accepts an item name as a parameter and returns whether the item is in the shopping list.
function isInList(shoppingList, item) {
  return shoppingList.includes(item);
}
console.log('banana is in the list:', isInList(shoppingList, 'banana'));
console.log('grape is in the list:', isInList(shoppingList, 'grape'));
// 2. Create a shopping item object, including the item name, price and quantity.
let item = { name: 'milk' };
item['price'] = 12;
item['quantity'] = 1;

console.log('item:', item);
