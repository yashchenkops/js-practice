var riddle = {
  question: 'Висит груша нельзя скушать',
  correctAnswer: 'лампочка',
  hints: ['это съедобное', 'это фрукт'],
  tries: 3,
  checkAnswer() {
    return this.contains(correctAnswer);
  },
}

window.onload = function() {
  document.getElementById('riddle').innerText = riddle.question;
}

function check() {
  var input = document.getElementsByTagName('input')[0];

  var guessedAnswer = input.value;

  if (guessedAnswer) {

  }
}