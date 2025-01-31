function feetToInchi(inchi){
    const feet= inchi /12;
    return feet;
}

const utsobHeight=feetToInchi(75);


// console.log(utsobHeight);

function feetToInchi2(inchi){
    const feet= inchi / 12;
    const feetFraction= parseInt(feet);
    const inchiFraction= inchi % 12;
    const result= feetFraction + ' ft ' + inchiFraction + ' inc ';
    return result;
}

// console.log(feetToInchi2(75));


// Kilo meter to mile conveter

function kiloToMile(mile){
    const miles= mile * 0.621371;
    return miles;
}

kiloToMile(2);
// console.log(kiloToMile(2));
// console.log(kiloToMile(4));
// console.log(kiloToMile(10));

// Mile to kilo meter conveters

function mileToKilometer(kilo){
    const kilos= kilo * 1.609344;
    return kilos;
}

// console.log(mileToKilometer(2));

function leepYear(year){

    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }

}


// console.log(leepYear(2000));
// console.log(leepYear(2019));
// console.log(leepYear(2020));
// console.log(leepYear(2021));
// console.log(leepYear(2022));
// console.log(leepYear(2023));
// console.log(leepYear(2024));

