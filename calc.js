let num1 = 0;
let num2 = 0;
let operation = '';
let displayValue = '';
let displayResults = '';

function operate(operation, num1, num2){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if(operation == 'add'){
        return num1+num2;
    }
    else if(operation == 'sub'){
        return num1-num2;
    }
    else if(operation == 'div'){
        if(num2 == 0){
            return 'nice try :)'
        }
        return num1/num2;
    }
    else if(operation == 'mult'){
        return num1*num2;
    }
}

function addNumberEventListeners(){
    const numContainer = document.querySelector('#numbers');
    const numbers = numContainer.getElementsByClassName('number');
    console.log(numbers);
    for(let i = 0; i<numbers.length; i++){
        // and for each one we add a 'click' listener
        numbers[i].addEventListener('click', () => {
            displayValue = displayValue+numbers[i].id;
            console.log(`${displayValue}`);
            document.getElementById('results').innerHTML = displayValue;
        });
      };

}

function addOperationEventListeners(){
    console.log("we're here in the function");
    const opContainer = document.querySelector('#functions');
    const operations = opContainer.getElementsByClassName('operation');
    console.log(operations);
    for(let i = 0; i<operations.length; i++){
        console.log('and now we\'re in the for loop');
        // and for each one we add a 'click' listener
        operations[i].addEventListener('click', () => {
            num1 = displayValue;
            displayValue = '';
            operation = displayValue+operations[i].id;
            console.log(`${num1}${operation}`);
            document.getElementById('results').innerHTML = displayValue;
        });
      };

}

function addOtherEventListeners(){
    eqButton = document.getElementById('eq');
    eqButton.addEventListener('click', () => {
        num2 = displayValue;
        displayResults = operate(operation, num1, num2);
        document.getElementById('results').innerHTML = displayResults;
        num1 = displayValue;
        num2 = 0;
        operation = '';
    });

}

addNumberEventListeners();
addOperationEventListeners();
addOtherEventListeners();

