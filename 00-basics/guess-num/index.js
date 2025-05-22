// const secretNum = Math.ceil(Math.random() * 10);
const secretNum = 5;
let tries = 0;

function guessNum(num) {
  if (tries >= 5) return alert('Game over!');

  if (num === secretNum) {
    alert('You win!');
    tries = 5;
  } else if (num > secretNum) {
    alert(`Wrong number! Your number is bigger than secret number.`);
    tries++;
  } else if (num < secretNum) {
    alert(`Wrong number! Your number is smaller than secret number.`);
    tries++;
  }
}