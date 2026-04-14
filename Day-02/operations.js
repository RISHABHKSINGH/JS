// ******************************** Operations **********************************

// Here all the datatypes are same
console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1);// false
console.log(2 == 1);// false
console.log(2 != 1);// true


// Here datatypes are changing AVOID THESE
console.log("2">1); //true
console.log("02">1);//true


console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true



// This happens because Comparisons convert null into number, treating it as 0 that's why (3) null>=0 is true and (1)null>0 is false


