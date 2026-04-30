// Lexical scope

function outerfunction() {
  let new_name = "Rks";
  console.log(new_name2); // This will give you reference error as new_name2 is not defined

  function innerfunction() {
    console.log(new_name); // Here now  you can access the new_name variable as its like child and variable is parent but vice versa is not possible not even in sibllings function 
    let new_name2 = "new Rks";
  }
  innerfunction();
}

outerfunction();

// Clousers

function outer() {
  let secret = "This is outer secret";

  function inner() {
    console.log(secret);
  }
  return inner;
  console.log("Hellowww");
}

// outer();// no resul

const fn = outer();
fn();
