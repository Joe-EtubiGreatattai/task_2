/**
 * Function to filter even numbers from an array.
 * @param {number[]} numbers - The array of numbers to filter.
 * @returns {number[]} - The array of even numbers.
 */
function getEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
