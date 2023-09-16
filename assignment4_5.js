//Problem 5: Find Common Elements

console.log("\n"); //for next line
console.log("Problem 5: Find Common Elements");

function findCommonElements(array1, array2) {

// Create a new empty array to store the common elements.
  const commonElements = [];

// Iterate over the first array and add each element to the common elements array if it is also present in the second array.
  for (const element of array1) {
    if (array2.includes(element)) {
      commonElements.push(element);
    }
  }

// Return the common elements array.
  return commonElements;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // [3, 4, 5]
