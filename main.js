let secondNum ='';
let operator = '';
let firstNum = '';
let inOperation = '';

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
        return add(a,b);
    } else if(operator === '-'){
        return subtract(a,b);
    } else if(operator === '/'){
        return divide(a,b);
    } else if(operator === '*'){
        return multiply(a,b);
    }
}
let display = document.querySelector('.display')

let numberButtons = document.querySelectorAll('.numbtn');
numberButtons.forEach((button) =>
        button.addEventListener('click', function eventHandler(){
            display.textContent += button.textContent;
            secondNum += button.textContent;
        })
)

let operatorButtons = document.querySelectorAll('.oppbtn');
operatorButtons.forEach((button) =>
        button.addEventListener('click', function eventHandler(){
            if(firstNum === ''){
                operator = button.textContent;
                display.textContent += operator
                firstNum = secondNum;
                secondNum = '';
            } else {
                display.textContent = operate(parseInt(firstNum), operator, parseInt(secondNum)) + button.textContent;
                firstNum = operate(parseInt(firstNum), operator, parseInt(secondNum)) 
                operator = button.textContent;
                secondNum = ''
            }
        })
)

let clearButton = document.querySelector('.clrbtn');
clearButton.addEventListener('click', function eventHandler(){
    display.textContent = '';
    secondNum = '';
    firstNum = '';
})

function equals(){
    let equalButton = document.querySelector('.eqlbtn');
    equalButton.addEventListener('click', function eventHandler(){
            secondNum = operate(parseInt(firstNum), operator, parseInt(secondNum));
            display.textContent = secondNum;
            firstNum = '';
    })
}

equals()
