// Recursion - функция вызывает сама себя
// 1. базовое условие (терминальное (условие выхода из рекурсии))
// 2. правило движения по рекурсии
// function factorial (n) {
//   if (n === 0) return 1;
//
//   return n * factorial(n - 1);
// }
//
// console.log(factorial(3)); // 3 * 2 * 1;

// принимает символ и возвращает этот символ в пяти экзамплярах
// let counter = 0;
//
// function repeater(char) {
//   counter++;
//
//   if (counter === 5) {
//     counter = 0;
//     return char;
//   }
//
//   return char + repeater(char);
// }
//
// console.log(repeater('X'));
// console.log(repeater('a2'))


// HOMEWORK
const myArr = [1, 2, 3, 4, 5, 'asd', 213213];

function getLength (arr) {
  let popped = arr.pop();

  if (popped === undefined) {
    return 0;
  } else {
    return getLength(arr) + 1;
  }
}

console.log(getLength(myArr));
