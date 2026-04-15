// Ways to declare and use string
// 1. Simple (in '' or "")
const myname ="rks"; // This is string
console.log(myname);


// 2. Using Backtick
console.log(`my name is ${myname}`);

// 3. using object 
const gameName = new String("Risahabh");
console.log(gameName) // This will give output as an object [String:'Rishabh'] like this and store in key value pair you can this one in brower inspect as well there you will see at 0 index as R , 1 as i and so on 

// you can access them 
console.log(gameName[0]);
console.log(gameName.toUpperCase()); 

// to find the character at 
console.log(gameName.charAt(2));

//to find the index of particular character
console.log(gameName.indexOf("R"));
console.log(gameName.indexOf("a"));

// creating the new substring
console.log(gameName.substring(0,4));

//Trimming the string:- Meaning this will remove the whitespace from the start and end in the input string 
const newString ="     Rishabh    Kumar    ";
console.log(newString.trim());// This will remove from start and end only not from middle

console.log(newString.replace("Rish","Rks"));

//checking weather that particular element exist or not
console.log(newString.includes("Rishabhk")); //false

//splitting on basis of anything like (-)
const newOneString ="Rishabh-kumar-singh";
console.log(newOneString.split('-'));  // this will create the object and place each separated array into that one