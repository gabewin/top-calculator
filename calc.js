let num1 = 0;
let num2 = 0;
let operation = '';
let displayValue = '';

function operate(operation, num1, num2){
    if(operation == 'add'){
        return num1+num2;
    }
    else if(operation == 'subtract'){
        return num1-num2;
    }
    else if(operation == 'divide'){
        if(num2 == 0){
            return 'nice try :)'
        }
        return num1*num2;
    }
    else if(operation == 'multiply'){
        return num1*num2;
    }
}

function addNumberEventListeners(){
    console.log("we're here in the function");
    const numContainer = document.querySelector('#numbers');
    const numbers = numContainer.getElementsByClassName('number');
    console.log(numbers);
    for(let i = 0; i<numbers.length; i++){
        console.log('and now we\'re in the for loop');
        // and for each one we add a 'click' listener
        numbers[i].addEventListener('click', () => {
            displayValue = displayValue+numbers[i].id;
            console.log(`${displayValue}`);
            document.getElementById('results').innerHTML = displayValue;
        });
      };

}

function addFunctionEventListeners(){
    console.log("we're here in the function");
    const numContainer = document.querySelector('#numbers');
    const numbers = numContainer.getElementsByClassName('number');
    console.log(numbers);
    for(let i = 0; i<numbers.length; i++){
        console.log('and now we\'re in the for loop');
        // and for each one we add a 'click' listener
        numbers[i].addEventListener('click', () => {
            displayValue = displayValue+numbers[i].id;
            console.log(`${displayValue}`);
            document.getElementById('results').innerHTML = displayValue;
        });
      };

}

addNumberEventListeners();

