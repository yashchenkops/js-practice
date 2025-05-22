let tries = 0;

while (tries < 3) {
  const age = +prompt('What`s your age?');

  if (age) {
    alert('Welcome!')
    break;
  }

  tries++;
  alert('Data goes wrong');
}

alert('End');