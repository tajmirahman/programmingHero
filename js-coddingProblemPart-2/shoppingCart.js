/**
 *Write a function and Calculate the total price from the shopping cart with quantity.
 */

 const products=[
    {name:'mobile',price:23000,quantity:3},
    {name:'pant',price:2000,quantity:4},
    {name:'shirt',price:1000, quantity:6},
    {name:'bag',price:2000, quantity:7},
    {name:'shoe',price:2000, quantity:3}
];

function shippingCart(products){
    let total= 0;
        for(const product of products){
            const totalPrice=product.price * product.quantity;
            total= total+ totalPrice;
        }
        return total;
}

const total= shippingCart(products);
console.log('Total price with quantity is', total);
