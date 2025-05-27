// higher order functions
// callback functions
function numSquared (num) {
  return num * num;
}

function copyArrayAndDoSmth (arr, instructions) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    output.push(instructions(arr[i]));
  }

  return output;
}

function numSqueared (num) {
  return num * num;
}

function divideByTwo (num) {
  return num / 2;
}

const result = copyArrayAndDoSmth([1, 2, 3], numSquared);
const result2 = copyArrayAndDoSmth([10, 20, 30], divideByTwo);
