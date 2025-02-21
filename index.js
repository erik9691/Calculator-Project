let number1 = "";
let operators = [];
let number2 = "";
let result;
let hasCalculated = false;
let operatorsOnScreen = 0;
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
        //if there are more than 2 operators calculate first then add the second op
        if (isOperator(e.target.className))
        {
            readOperators();
            if (operators.length === 1) 
            {
                console.log("SECOND OPERATOR " + operators.length + operators);
                calculate();
            }
        }

        //replace result with new num if not a operator after calculation
        if (hasCalculated && !isOperator(e.target.className)) 
        {
            screen.innerText = e.target.className;
        }

        else
        {
            screen.innerText += e.target.className;
        }

        hasCalculated = false;
    }

    screenContent = screen.innerText;
}

function calculate()
{
    const screenContentSplit = screenContent.split(/[+\-x\/]/);

    number1 = screenContentSplit[0];
    number2 = screenContentSplit[1];

    readOperators();

    console.log(number1);
    console.log(operators);
    console.log(number2);
    
    screen.innerText = operate(parseInt(number1),operators[0],parseInt(number2))

    hasCalculated = true;
}

function isOperator(digit)
{
    return (digit === "+" || digit === "-" || digit === "x" || digit === "/")
}

function readOperators()
{
    operators = [];
    for (let i = 0; i < screenContent.length; i++)
    {
        if (isOperator(screenContent.charAt(i)))
        {
            operators.push(screenContent.charAt(i));
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