// If u want to through a function with in a array. u must need Map fuction.

const numbers=[2,4,5,8,12];


// Role-1

// let count=[];
// for(const num of numbers){
//     const mul= num* 2;
//     count.push(mul);

// }
// console.log(count);

// Role-2

function doubled(num){
    console.log(num);
    return num*2;
}

const double=numbers.map(doubled);
// console.log(double);

const double2=numbers.map(n=>n/2);
console.log(double2);