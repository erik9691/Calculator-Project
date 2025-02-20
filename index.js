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

let number1;
let operator;
let number2;

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