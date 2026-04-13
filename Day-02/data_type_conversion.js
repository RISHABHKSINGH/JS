// Here we will see the conversion of data type and there flaws

let score = 33;
// console.log(typeof score); // Method one for checking the type directly using typeof 
// console.log(typeof (score)); // Method 2:- for checking the type inside the ()using typeof

//? Now conversion of data into another one 

let new_score="33";


// * 1. Number in capital is used in conversion
let valueInNumber = Number(score);
console.log(typeof valueInNumber); //this will give :- number
console.log(valueInNumber);// this one :- 33

//* 2. 
let value_in_number = Number(new_score);
console.log(typeof valueInNumber); // number
console.log(value_in_number); //33

//* 3.
let new_score_2 ="223afb";// this is string and we are trying to convert into the number now see the change

let value_in_number2 = Number(new_score_2);
console.log(typeof value_in_number2); //! This is also showing the number but later when we see the value its shows Nan(not a number)
console.log(value_in_number2); //* this will show NaN means new_score_2 is getting converted into number but when we are seeing that its not a valid integer 

//! NOTE:- We need to clearly have to check the value is it NaN or not then we can move ahead.

//* 4. null :-> Here we get 0 after the conversion 
//* 5. undefined :-> Here we get NaN again 
//* 6. boolean :-> Here we get 0 or 1
    // 6.1:- "":-> Empty string fasle
    // 6.2:- "any value":-> true
//* 7. string with only character :-> NaN









