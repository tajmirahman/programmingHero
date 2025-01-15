/**
 * Calculate the total price from the shopping cart.
 */

const products=[
    {name:'mobile',price:23000},
    {name:'pant',price:2000},
    {name:'shirt',price:1000},
    {name:'bag',price:2000},
    {name:'shoe',price:2000}
];

function totalPrice(products){
    let total=0;

    for(const product of products){
        total=total+product.price;
    }
    return total;

}


const total=totalPrice(products);
console.log('Total price is :', total);