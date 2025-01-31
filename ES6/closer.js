function stopWatch(){
    let count=0;
    return function(){
        count ++;
        return count;
    }
}


const watch1 = stopWatch();
const watch2 = stopWatch();
const watch3 = stopWatch();
console.log(watch1());
console.log(watch1());
console.log(watch2());
console.log(watch2());
console.log(watch3());
console.log(watch3());
