const sentence = " I am learning web dev.";

// Rule- 01

// for(let letter of sentence){
//     console.log(letter);
// }

// Rule- 02

// let reverse='';

// for(let letter of sentence){
//     let rev= reverse + letter;
//     console.log(rev);
// }

// Rule- 03  ----- and easy rule of reverse

const reversed = sentence.split('').reverse().join('');
console.log(reversed);