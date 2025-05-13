// Part 1: Callbacks
// Create a function fetchData that simulates fetching data from a server. This function should take two arguments: a url (string) and a callback function. Use setTimeout to simulate a delay of 2 seconds before calling the callback function with the fetched data.
// Instructions:
// 1. The fetchData function should print "Fetching data from [url]..." when it starts.
// 2. After 2 seconds, it should call the callback function with the data: "Data from [url]".
function fetchData(url, callback) {
  console.log(`Fetching data from ${url}...`);
  setTimeout(() => {
    callback(`Data from ${url}`);
  }, 2000);
}

// Example usage:
console.log('Task1');
fetchData('https://api.example.com', (data) => {
  console.log(data);
});

// Part 2: Promises
// Refactor the fetchData function to return a promise instead of using a callback.
// Instructions:
// 1. The function should still simulate a 2-second delay before resolving the promise with the data: "Data from [url]".
// 2. If the url is empty or not provided, reject the promise with an error message: "Invalid URL".
function fetchDataRefactorPromise(url) {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject('Invalid URL');
    }
    console.log(`Fetching data from ${url}...`);
    setTimeout(() => {
      resolve(`Data from ${url}`);
    }, 2000);
  });
}

// Example usage:
console.log('Task2');
// Success
console.log('Success');
fetchDataRefactorPromise('https://api.example.com')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
// Failed
console.log('Failed');
fetchDataRefactorPromise('')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Part 3: Async/Await
// Refactor the code to use async/await to fetch data and handle errors.
// Instructions:
// 1. Create an async function named loadData that calls fetchData with a given url.
// 2. Use try/catch to handle any errors that occur during the data fetching process.
async function loadData(url) {
  try {
    const data = await fetchDataRefactorPromise(url);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
