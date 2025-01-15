/*
********************** Nasted if else condition ****************
const money = -20;

if (money > 300) {
    console.log('tumi to boro lok baba, aso tumar entry ache.')
} else {
    if (money > 100) {
        console.log('tumi boro lok o na abar gorib o na');
    } else {
        if (money > 0) {
            console.log('tumi mia gorib')
        }else{
            console.log('tumi mia gorib er o gorib')
        }
    }
}
    
*/


// ********************** Ternary condition ****************

// Ternary condition means short if else condition.********

// simple if else 

// let age = 20

// if(age>18){
//     console.log('tumi vote dite paro');
// }else{
//     console.log('tumi bari jao');
// }


// Ternary condition use *******************

// age>=18 ? console.log('vote dite paro') :console.log( 'tumi bari jao');



let price = 1000;
const isLeader = false;

if (isLeader === true) {
    price = price / 2;
} else {
    price = price + 100;
}
console.log(price);