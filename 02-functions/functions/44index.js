// 1. Function Declaration
console.log(sum(1, 4));
function sum (a, b) {
  return a + b;
}

// 2. Function Expression
const sum2 = function (a, b) {
  return a + b;
}

// 3. IIFE (Immediately-invoked functions expression)
(function (a, b) {
  return a + b;
});

// 4. Arrow function
const sum3 = (a, b) => {
  return a + b;
};

const sum4 = (a, b) => a + b;
const add = x => x + 1;
