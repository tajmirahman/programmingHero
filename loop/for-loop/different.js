// for(let i=0; i<20; i++){
//     console.log(i);

// }

//  give me the number between 1 to 30 which is devided by 3

// for(let i=1; i<=30; i++){
//     if(i%3 === 0){
//         console.log(i);
//     }
// }


// give me the number between 1 to 30 which is devided by 3 and 5. Again give me sum of this divided numbers.

// let sum=0;
// for(let i=1; i<=30; i++){
//     if(i%3 === 0 && i%5 === 0){
//         sum= sum+i;
//         console.log(i);
//     }
// }
// console.log('sum of sumbers:', sum);

// give me the number between 1 to 30 which is devided by 3 or 5.

let num = 1;
while (num <= 30) {
    if (num % 3 === 0 || num % 5 === 0) {
        console.log(num);
    }
    num++;
}