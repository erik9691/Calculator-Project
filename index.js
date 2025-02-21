let number1 = "";
let operator;
let number2 = "";
let result;
let atNumber2 = false;

let screenContent;

const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => 
{
    button.addEventListener("click", function(e){placeDigit(e);});
});

function placeDigit(e)
{
    if (e.target.className === "=")
    {
        calculate();
    }
    else
    {
        screen.innerText += e.target.className;
        screenContent = screen.innerText;
    }
}

function calculate()
{
    const screenContentSplit = screenContent.split(/[+\-x\/]/);

    number1 = screenContentSplit[0];
    number2 = screenContentSplit[1];

    for (let i = 0; i < screenContent.length; i++)
    {
        console.log(screenContent.charAt(i))
        if (screenContent.charAt(i) === "+" || screenContent.charAt(i) === "-" || screenContent.charAt(i) === "x" || screenContent.charAt(i) === "/")
        {
            operator = screenContent.charAt(i);
        }
    }
    
    screen.innerText = operate(parseInt(number1),operator,parseInt(number2))
    screenContent = screen.innerText;
}

function add(num1, num2)
{
    console.log(num1)
    console.log(num2)
    const res = num1 + num2;
    return res;
}

function subtract(num1,num2)
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
    let res;

    switch (operator) 
    {
        case "+":
            res = add(num1,num2)
            break;
        case "-":
            res = subtract(num1,num2)
            break;
        case "x":
            res = multiply(num1,num2)
            break;
        case "/":
            res = divide(num1,num2)
            break;
    }

    return res;
}