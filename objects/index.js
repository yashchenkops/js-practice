// const htmlDiv = {
//   className: 'column',
//   rel: 'main',
//   id: 'block',
// };
//
// for (let i in htmlDiv) {
//   console.log(htmlDiv[i]);
// }
//
// const numbers = [1, 2, 3, 4, 5];
//
// for (let number of numbers) {
//   console.log(number)
// }

const person = {
  name: 'Anna',
  surname: 'Dance',
  age: 18,
  greeting() {
    console.log('Hello');
  },
  changeSurname(newSurname) {
    this.surname = newSurname;
  },
};
