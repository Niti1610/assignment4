//Problem 2: Reverse an Array
console.log("\n"); //for next line
console.log("Problem 2: Reverse an Array");
function reverseArray(array) {
  // Create a new empty array to store the reversed elements.
  const reversedArray = [];

  // Iterate over the input array in reverse order and push each element to the reversed array.
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }

  // Return the reversed array.
  return reversedArray;
}
const numbers = [1, 2, 3, 4, 5];

const reversedArray = reverseArray(numbers);

console.log(reversedArray); // [5, 4, 3, 2, 1]
