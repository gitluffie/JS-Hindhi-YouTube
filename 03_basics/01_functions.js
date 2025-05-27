


function sayMyname(){

    console.log("H");
console.log("r");
console.log("e");
console.log("t");


}

sayMyname()



function addTwoNumbers(number1, number2){

    console.log(number1 + number2 );
    
}

addTwoNumbers(3, 18888) 


function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage(""));


function loginUserMessage(username) {
    if (!username) {
        username = "sam"; // Set default if empty or falsy
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("hitesh"));  // Outputs: "sam just logged in"


function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 600 , 2000,))
