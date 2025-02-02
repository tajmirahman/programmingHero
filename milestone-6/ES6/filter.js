// Filter 

const numbers= [30,40,42,55,60,75,81,86];

const result=numbers.filter(n=>n>82);
// console.log(result)



// find

const findResult=numbers.find(n=>n>70);
// console.log(findResult);




// optional use for practice  /////////////


const peoples=[
    {name:'asik', age:20},
    {name:'Noyon', age:28},
    {name:'Rubel', age:30},
]


// let sum=0;

// for(const people of peoples){
//     sum += people.age;
    
// }
// console.log(sum);

const totalAge=peoples.reduce((sum,person) => sum +person.age, 0);
console.log(totalAge);

