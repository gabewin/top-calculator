let num1 = '';
let num2 = 0;
let operation = '';
let displayValue = '';

function operate(operation, num1, num2){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if(operation == 'add'){
        return (num1+num2).toFixed(2);
    }
    else if(operation == 'sub'){
        return (num1-num2).toFixed(2);
    }
    else if(operation == 'div'){
        if(num2 == 0){
            return 'nice try :)'
        }
        return (num1/num2).toFixed(2);
    }
    else if(operation == 'mult'){
        return (num1*num2).toFixed(2);
    }
}

function addNumberEventListeners(){
    const numContainer = document.querySelector('#numbers');
    const numbers = numContainer.getElementsByClassName('number');
    for(let i = 0; i<numbers.length; i++){
        // and for each one we add a 'click' listener
        numbers[i].addEventListener('click', () => {
            displayValue = displayValue+numbers[i].id;
            document.getElementById('results').innerHTML = displayValue;
        });
      };

}

function addOperationEventListeners(){
    const opContainer = document.querySelector('#functions');
    const operations = opContainer.getElementsByClassName('operation');
    for(let i = 0; i<operations.length; i++){
        // and for each one we add a 'click' listener
        operations[i].addEventListener('click', () => {
            
        if(num1 == ''){
            num1 = displayValue;
            displayValue = '';
            console.log(`${num1}`);
            document.getElementById('results').innerHTML = displayValue;
            operation = operations[i].id;
        } else {
            num2 = displayValue;
            let result = operate(operation, num1, num2);
            operation = operations[i].id;
            num1 = result;
            displayValue = '';
            console.log(`num1: ${num1} result:${result}`);
            document.getElementById('results').innerHTML = displayValue;
        }
        });
    };

}

function addOtherEventListeners(){
    eqButton = document.getElementById('eq');
    eqButton.addEventListener('click', () => {
        num2 = displayValue;
        let result = operate(operation, num1, num2);
        operation = '';
        num1= '';
        num2 = 0;
        displayValue = '';
        document.getElementById('results').innerHTML = result;
    });

    clearButton = document.getElementById('cl');
    clearButton.addEventListener('click', () => {
        displayValue = '';
        document.getElementById('results').innerHTML = displayValue;
        num1 = '';
        num2 = 0;
        operation = '';
    });

}

addNumberEventListeners();
addOperationEventListeners();
addOtherEventListeners();

