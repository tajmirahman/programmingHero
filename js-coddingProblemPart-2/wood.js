/**
 * Suppose you want to make some furnitue like that chair-5, table-10, bed-50. So calculate the furniture requirement of total wood.
 */

function woodRequirement(chairQuantity, tableQuantity, bedQuantity) {

    const chair = 5;
    const table = 10;
    const bed = 50;

    const totalChair = chair * chairQuantity;
    const totalTable = table * tableQuantity;
    const totalBed = bed * bedQuantity;

    const totalQuantity = totalChair + totalTable + totalBed;

    return totalQuantity

}

const result = woodRequirement(4, 0, 3);
// console.log('Total quantity of wood is :', result);


/**
 * Suppose you want to buy some dressess like shirt, pant, and shoe. calculte the total price whatever you bought.
 */


function buyDress(shirtQuantity, pantQuantity, shoeQuantity) {
    const shirt = 500;
    const pant = 600;
    const shoe = 1000
    const totalShirt = shirt * shirtQuantity;
    const toalPant = pant * pantQuantity;
    const totalShoe = shoe * shoeQuantity;

    const totalPrice = totalShirt + toalPant + totalShoe;
    return totalPrice;

}

const price = buyDress(1, 2, 1);
console.log('Your total market is :', price);
