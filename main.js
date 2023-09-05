let firstNumber ='';
let operator = '';
let secondNumber = '';

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
 return a * b;
}

function divide(a,b){
 return a / b;
}

function operate(a, operator, b){
    if(operator === '+'){
        return add(a,b)
    } else if(operator === '-'){
        return subtract(a,b)
    } else if(operator === '/'){
        return divide(a,b)
    } else if(operator === '*'){
        return multiply(a,b)
    }
}
let lowerDisplay = document.querySelector('h1');

let numberButtons = document.querySelectorAll('.numbtn');
numberButtons.forEach((button) =>
        button.addEventListener('click', function eventHandler(){
            lowerDisplay.textContent += button.textContent
        })
)

let operatorButtons = document.querySelectorAll('.oppbtn');
operatorButtons.forEach((button) =>
        button.addEventListener('click', function eventHandler(){
            lowerDisplay.textContent += button.textContent
        })
)

let clearButton = document.querySelector('.clrbtn');
clearButton.addEventListener('click', function eventHandler(){
    lowerDisplay.textContent = ''
})

let equalButton = document.querySelector('.eqlbtn');
equalButton.addEventListener('click', function eventHandler(){
    lowerDisplay.textContent += equalButton.textContent
})