/**
 * Find the odds number from  the array and calculate the average odd number.
 * 
 */

function oddAverage(number){
    const odds=[];
    let sum=0;

    for(const item of number){
        if(item % 2 !== 0){
            odds.push(item);
        }  
         
    }

    for(const odd of odds){
        sum= sum+odd;
    }
    const count= odds.length;
    console.log(sum,count);
    const avg= sum/count;
    
    return avg;
    
}
const numbers= [22,13,15,44,48,88,65,71,5]
const avg=oddAverage(numbers);
console.log('Sum of the average numbers :', avg);