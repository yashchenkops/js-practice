// higher order functions
// callback functions
// function numSquared (num) {
//   return num * num;
// }
//
// function copyArrayAndDoSmth (arr, instructions) {
//   const output = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     output.push(instructions(arr[i]));
//   }
//
//   return output;
// }
//
// function numSqueared (num) {
//   return num * num;
// }
//
// function divideByTwo (num) {
//   return num / 2;
// }
//
// const result = copyArrayAndDoSmth([1, 2, 3], numSquared);
// const result2 = copyArrayAndDoSmth([10, 20, 30], divideByTwo);

// HOMEWORK
function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) newArray.push(array[i]);
  }
  return newArray;
}
const numbers = [1, 2, 3, 4, 5];

function isOdd(num) {
  return num % 2 !== 0
}
function isEven(num) {
  return num % 2 === 0;
}

// Для проверки используйте логи (раскомментируйте их после написания функций)
console.log(filterArray(numbers, isEven)); // Должен вывести: [2, 4]
console.log(filterArray(numbers, isOdd)); // Должен вывести: [1, 3, 5]
