function myPromise() {
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if (success <= .5) {
            resolve(success);
        }
        else {
            reject(success);
        }
    });
}


let a = 5;

async function myAdd(num1, num2) {
    const sum = await num1 + num2 + a;
    console.log(sum);
}

myAdd(10, 15);




function delayedGeed(){
    console.log('Alice Hellow')
}
setTimeout(delayedGeed,2000);

function timeIntervel(){
    console.log('Alice joke');
    clearTimeout(timeoutId);
}

setInterval(timeIntervel,2000)

