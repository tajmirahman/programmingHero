/**
 * Find the even number from the array and calculate the sum of number and devided by 10.
 */

const numbers= [20,14,13,11,50,90,71,63];

function evenSum(number){
    const evens=[];
    let sum=0;

    for(const item of number){
        if(item % 2 === 0){
            evens.push(item)
        }
    }

    for(const number of evens){
        sum= sum + number;
    }
    const count= evens.length;
    console.log(sum,count);
    const result= sum / 10;
    return result;
    
}

const result= evenSum(numbers);
console.log('sum of enven numbers :', result);