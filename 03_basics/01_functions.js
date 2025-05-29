


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

// console.log(loginUserMessage("hitesh"));  // Outputs: "sam just logged in"


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 600 , 2000,))

const user = {
    username: "hitesh",
    price: 199
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is $${anyobject.price}`);
}

// handleObject(user); // Example function call

handleObject (
    {
        username:"sam" ,
        price: 399
    }
)


const mynewArray = [200, 300, 500, 20];

function returnSecondValue(getArray) {
    return getArray[3];
}

console.log(returnSecondValue(mynewArray));
