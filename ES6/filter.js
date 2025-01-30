// Filter 

const numbers= [30,40,42,55,60,75,81,86];

const result=numbers.filter(n=>n>82);
// console.log(result)



// find

const findResult=numbers.find(n=>n>70);
// console.log(findResult);




// optional use for practice  /////////////


const nums=[1,4,7,8,11,12];

// const numbs=nums.filter(nums=>nums%2 === 0);

let reserve=[];
let reserveOdd=[];
for(const num of nums){
    if(num%2 === 0){
        reserve.push(num);
    }
    else if(num%2 !== 0){
        reserveOdd.push(num);
    }
}
console.log(reserve);
console.log(reserveOdd);


// console.log(numbs);

