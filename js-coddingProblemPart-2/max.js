/**
 * Write a function and claculate the heights number from this array.
 */


const heights= [20,23,44,57,90,43,67,98,87,76];

function getMax(numbers){

    let max= numbers[0];

   for(const num of numbers){
     if(num>max){
        max= num;
     }
   }
   return max;
}

const max=getMax(heights);
// console.log('The max number is :', max);


/**
 * Write a function and claculate the lowest number from this array.
 */

const lowest= [20,23,44,57,1,-90,43,67,98,87,76,5];

function findMin(numbers){
    let min= numbers[0];
    for(const num of numbers){
        if(num<min){
            min= num;
        }
    }
    return min;

}

const min= findMin(lowest);
console.log('the lowest number is :', min);


