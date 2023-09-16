//Problem 1: Find the Minimum Number

console.log("\n"); //for next line
console.log("Problem 1: Find the Minimum Number");

function findMinNumber(numbers) {
  // Check if the array is empty
  if (numbers.length === 0) {
    return undefined; // Return undefined for an empty array
  }
  let min = numbers[0]; // Assume the first number is the minimum

  // Iterate through the array to find the minimum number
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
}
const numbersArray = [3, 1, 5, 2, 8];
const minNumber = findMinNumber(numbersArray);
console.log("The minimum number is:", minNumber); // Output: The minimum number is: 1
