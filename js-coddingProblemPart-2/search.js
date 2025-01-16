/**
 * How to search products in a object.
 */

/**
 * toLowerCase use for when we search some one string higher or lower it doesn't matter.
 */


const products= [
    {id:1,name:'xaoumi phone 12gb', price:12000},
    {id:2,name:'Iphone  12gb', price:120000},
    {id:3,name:'realme phone 12gb', price:12000},
    {id:4,name:'Oppo Phone 12gb', price:12000},
    {id:5,name:'nokia phone 12gb', price:12000},
    {id:6,name:'motorola phone 12gb', price:12000},
    {id:7,name:'hp laptop  12gb', price:12000},
    {id:8,name:'dell Laptop 12gb', price:12000},
    {id:9,name:'acus laptop 12gb', price:12000},
];

function searchProduct(products,search){
    let matched=[];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result=searchProduct(products,'laptop');
console.log(result);