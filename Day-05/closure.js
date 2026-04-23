// Lexical scope 
function creatCounter(){
    let count =0;

    return function(){
        count++;
        return count;
    }
}







// Clousers