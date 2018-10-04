// let num1 = prompt("Enter the first number? ");
// let num2 = prompt("Enter the second number? ");
// let num3 = prompt("Enter the third number? ");
// let num4 = prompt("Enter the fourth number? ");
// let sum = +num1 + +num2 + +num3 + +num4;

// document.write("The sum of the numbers entered were: "+ sum);


let guess = parseInt(prompt("What is your guess?"));
let randomNumber = parseInt(Math.floor((Math.random() * 10) + 1);

while(userGuess != randomNumber) {
 alert("guess again")
 userGuess = parseInt(prompt("What is your guess?"));   

alert("you are correct!" )

let age = prompt("how old are you");
let counter = 0;
while( counter < 5){
    if(age >= 21){
        document.write("you can drink")
    }
    else if(age >= 18){
        document.write("you can get in")
    }
    else{
        document.write("get out of here")
    }
    counter ++
}



