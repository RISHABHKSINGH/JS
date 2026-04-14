// Ways to declare and use string
// 1. Simple (in '' or "")
const name ="rks"; // This is string
console.log(name);


// 2. Using Backtick
console.log(`my name is ${name}`);

// 3. using object 
const gameName = new String("Rishabh");
console.log(gameName) // This will give output as an object [String:'Rishabh'] like this and store in key value pair you can this one in brower inspect as well there you will see at 0 index as R , 1 as i and so on 

// you can access them 
console.log(gameName[0]);
console.log(gameName.toUpperCase()); 
