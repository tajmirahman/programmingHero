// Break - I am done with the loop end.
// Continue- skip rest of the code for this iteration.

// for (i = 0; i <= 50; i++) {
//     console.log(i);
//     if (i >= 20) {
//         break;
//     }
// }

// for(i=50; i>30; i--){
//     console.log(i);
//     if(i<=45){
//         break;
//     }
// }


//  continue rules in loop 

for(let i=1; i<10; i++){
    if(i%2 === 0){
        continue;
    }
    console.log(i);
}