const score =400;

const balance =new Number(100);

// Converting into the String
console.log(balance.toString());

// Fixing the no of digit show on after decimal
console.log(balance.toFixed(2));// this will show 100.00


//! Study this one 
console.log(balance.toPrecision(2));


//******************************** Math ******************************** */

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.8));
console.log(Math.floor(4.8));
console.log(Math.min(4,5,63,2,-1));
console.log(Math.max(4,5,63,2,-1));


console.log(Math.random());// This will give you any number i.e random number in between 0 and 1 always
// If  you need random number greater than that you need to perform certain operation and twick it a bit 