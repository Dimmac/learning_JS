// const string = 'JavaScript';
// const letters = string.split('');
// console.log(letters);
// let invertedString = '';


// for (const letter of letters) {
//     console.log(letter);
//     if (letter === letter.toLowerCase()) {
//         console.log('Єта буква в нижнем регистре!!! - ', letter);
//         invertedString += letter.toUpperCase();
//     } else {
//     console.log('Єта буква в верхнем регистре!!! - ', letter);
//         invertedString += letter.toLowerCase();
//     }
// }
// console.log(invertedString);

const string = 'JavaScript';
const letters = string.split('');
console.log(letters);
let invertedString = '';


for (const letter of letters) {
    console.log(letter);
    // if (letter === letter.toLowerCase()) {
    //     console.log('Єта буква в нижнем регистре!!! - ', letter);
    //     invertedString += letter.toUpperCase();
    // } else {
    // console.log('Єта буква в верхнем регистре!!! - ', letter);
    //     invertedString += letter.toLowerCase();
    // }
    invertedString =
        letter === letter.toLowerCase()
            ? invertedString + letter.toUpperCase()
            : invertedString + letter.toLowerCase();
}
console.log('invertedString: ', invertedString);