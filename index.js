let number1 = "";
let operators = [];
let number2 = "";
let result;
let hasCalculated = false;
let operatorsOnScreen = 0;
let previousDigit = "";

const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => 
{
    button.addEventListener("click", function(e){placeDigit(e);});
});

function placeDigit(e)
{
    const digit = e.target.className;

    //this is to prevent placing an operator with no number behind.
    //digit = "" to prevent lastDigit related bugs
    if (isOperator(digit) && screen.innerText.length === 0)
    {
        digit = "";
    }
    if (digit === "clear") 
    {
        screen.innerText = ""

        hasCalculated = false;
    }
    else if (digit === "=")
    {
        if (!isOperator(previousDigit) && previousDigit !== "=")
        {
            calculate();
        }
    }
    else
    {
        //if there are more than 2 non consecutive operators calculate first then add the second op
        if (isOperator(digit) && !isOperator(previousDigit))
        {
            readOperators();
            if (operators.length === 1) 
            {
                console.log("SECOND OPERATOR " + operators.length + operators);
                calculate();
            }
        }

        //replace result with new num if not a operator after calculation
        if (hasCalculated && !isOperator(digit)) 
        {
            screen.innerText = digit;
        }   //if trying to place 2 operators replace the previous
        else if (isOperator(digit) && isOperator(previousDigit))
        {
            screen.innerText = screen.innerText.slice(0, -1) + digit;
        }
        else
        {
            screen.innerText += digit;
        }

        hasCalculated = false;
    }

    previousDigit = digit;
}

function calculate()
{
    const screenContentSplit = screen.innerText.split(/[+—x\/]/);

    number1 = screenContentSplit[0];
    number2 = screenContentSplit[1];

    readOperators();

    console.log(number1);
    console.log(operators);
    console.log(number2);
    
    screen.innerText = operate(parseFloat(number1),operators[0],parseFloat(number2))

    hasCalculated = true;
}

function isOperator(digit)
{
    return (digit === "+" || digit === "—" || digit === "x" || digit === "/")
}

function readOperators()
{
    operators = [];
    for (let i = 0; i < screen.innerText.length; i++)
    {
        if (isOperator(screen.innerText.charAt(i)))
        {
            operators.push(screen.innerText.charAt(i));
        }
    }
}

function add(num1, num2)
{
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
        case "—":
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