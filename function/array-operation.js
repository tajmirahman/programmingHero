function sumOfNumbers(numbers){
    let sum=0;
    for(const number of numbers){
        console.log(number);
         sum= sum + number;
    }
    return sum;

}

const num=[12,3,45,6,7, 20, 8];
// const sum= sumOfNumbers(num);
// console.log('Sum of total numbers : ', sum);

function findEvenNumbers(numbers){
    const even=[];
    for(const numbr of numbers){

        if(numbr % 2 === 0){
            console.log(numbr);
            even.push(numbr);
           
        }
    
    }
    return even;
}
// const even=findEvenNumbers(num);
// console.log(even);

function sumEvenNumbers(numbers){
    let sum= 0;
    for(const number of numbers){
        console.log(number)
        sum = sum +  number;

    }
    return sum;
}

const even=[12,8,6,20]
const result=sumEvenNumbers(even);
console.log('Sum of total even number :', result);

