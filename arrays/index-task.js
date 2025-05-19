var riddle = {
  question: 'Висит груша нельзя скушать',
  correctAnswer: 'лампочка',
  hints: ['это несъедобное', 'оно светится'],
  tries: 3,
  checkAnswer(answer) {
    var checkCorrectAnswer = answer.toLowerCase().includes(this.correctAnswer);

    if (this.tries < 1) {
      console.log('Игра окончена! Правильный ответ ' + "'" + this.correctAnswer + "'");
      return alert('Игра окончена! Правильный ответ ' + "'" + this.correctAnswer + "'")
    }

    if (checkCorrectAnswer) {
      this.tries = 0;
      alert('Правильный ответ!');
      console.log('Правильный ответ!');
    } else {
      this.tries--;
      alert(`Неправильный ответ! Осталось попыток ${this.tries}`);
      console.log(`Неправильный ответ! Осталось попыток ${this.tries}`);

      const hint = this.hints[this.tries === 2 ? 0 : 1];

      if (this.tries) {
        alert('Подсказка:' + hint);
      }
    }
  },
}

window.onload = function() {
  document.getElementById('riddle').innerText = riddle.question;
}

function check() {
  var input = document.getElementsByTagName('input')[0];
  var guessedAnswer = input.value;

  if (guessedAnswer) {
    riddle.checkAnswer(guessedAnswer);
  }
}