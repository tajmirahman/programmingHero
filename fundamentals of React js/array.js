const products = [
    { name: 'phone', price: 150000, brand: 'iphone', color: 'blue' },
    { name: 'laptop', price: 15000, brand: 'lenevo', color: 'red' },
    { name: 'samsung', price: 3000, brand: 'samsung', color: 'white' },
    { name: 'tablet', price: 1500, brand: 'dell', color: 'blue' },

]
   
// Map use

const brands=products.map(product=>product.brand);
console.log(brands);

// Filter USe 
const filtersPrice=products.filter(product=>product.price <=5000);
console.log(filtersPrice);

//Using includes within filter

const specialName=products.filter(product=>product.name.includes('n'))
console.log(specialName); 

// ssing Find Methods

const findMethods=products.find(product=>product.name);
console.log(findMethods);
