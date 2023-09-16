//Problem 3:Find the Average of an Array

console.log("\n"); //for next line
console.log("Problem 3: Find the Average of an Array");

function calculateAverage(numbers) {
  // Initialize the sum of the numbers to 0.
  let sum = 0;

  // Iterate over the array and add each number to the sum.
  for (const number of numbers) {
    sum += number;
  }

  // Calculate the average by dividing the sum by the number of elements in the array.
  const average = sum / numbers.length;

  // Return the average.
  return average;
}
const number = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);
console.log("Calculated average :", average); // 3
