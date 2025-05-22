function sum (a, b) {
  return a + b;
}

const test = (a, b) => {
  return a * b;
};

console.log(test(5, 10));


function test2 (fun) {
  return fun.includes('test');
}

console.log(test2('testing'));
