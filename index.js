let number1;
let operator;
let number2;

let screenContent;

const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => 
{
    button.addEventListener("click", function(e){placeDigit(e);});
});

function placeDigit(e)
{
    console.log("Pressed!");
    screen.innerText += e.target.className;
    screenContent = screen.innerText;
}

function add(num1, num2)
{
    const res = num1 + num2;
    return res;
}

function subract(num1,num2)
{
    const res = num1 - num2;
    return res;
}

function multiply(num1,num2)
{
    const res = num1 * num2;
    return res;
}

function divide(num1,num2)
{
    const res = num1 / num2;
    return res;
}

function operate(num1, operator, num2)
{
    switch (operator) {
        case "+":
            add(num1,num2)
            break;
        case "-":
            subtract(num1,num2)
            break;
        case "*":
            multiply(num1,num2)
            break;
        case "/":
            divide(num1,num2)
            break;
    }
}