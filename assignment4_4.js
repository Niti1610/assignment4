//Problem 4: Remove Even Numbers
console.log("\n"); //for next line
console.log("Problem 4: Remove Even Numbers");
function removeEvenNumbers(numbers) {
// Create a new empty array to store the new numbers.
  const newNumbers = [];

// Iterate over the input array and push each odd number to the new array.
  for (const number of numbers) {
    if (number % 2 !== 0) {
      newNumbers.push(number);
    }
  }

// Return the new array.
  return newNumbers;
}
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = removeEvenNumbers(Numbers);
console.log("New numbers:", newNumbers); // [1, 3, 5, 7, 9]
