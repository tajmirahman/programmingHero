function square(a){
    const squ= a*a;
    console.log(a, 'Square of : ', squ);
}
square(3);
square(10);
square(5);
square(30);


function add(a,b){
    const total= a+b;
    console.log(a,b,'Add this money', total);
}

add(3,5)

function decrement(a,b){
    const decmnt= a-b;
    console.log(a,b, 'Decrement of money', decmnt);
}

decrement(40,10);

console.log('------------------------');
const money=(5000);
square(money);


console.log('-------------------------');

function divided(a,b){
    const div= a/b;
    return div;
}

const result=divided(30,5);
console.log(result);