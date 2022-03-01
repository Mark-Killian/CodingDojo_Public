// pseudocode the goal is to return a value between 1-6 at RANDOM. 
// multiply a number by .random and have the answer land between 1-6 WHOLE NUMBERS. 
// don't need an input. Call the function that can be empty. (empty parenthesis can be legal)
// will try with and without loop. (find the difference)
// 1. get number--DONE!!!
// 2. make it a whole number
// 3. print to console



function d6() {
    var roll = Math.random() * 6 + 1;
    roll = Math.floor(roll);
    return roll;
}
for(var i = 0; i < 100; i++){
    var playerRoll = d6();
    console.log("The player rolled: " + playerRoll);
}











//

var run = Math.ceil();
    element = Math.random() * 6;
    
console.log(run)