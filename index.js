let currentNumber = '';
let savedNumber = '';
let operator = '';
let history = ''
function onNumberClick(number) {
    if(number == '.' && currentNumber.includes('.'))
        return;
    currentNumber = currentNumber + number
    displayValue(currentNumber)
}


function displayValue(number) {
    document.getElementById('displayValue').innerHTML = number
}

function updateHistory(operator) {
    switch(operator) {
        case 'add':
            history+= currentNumber + ' + '
            break;
        case 'substract':
            history+= currentNumber + ' - '
            break;
        case 'multiply':
            history+= currentNumber + ' * '
            break;
        case 'divide':
            history+= currentNumber + ' / '
            break;
        case 'clear':
            history = ''    
            break;
        default:
            history+= currentNumber
            break;        
    }
    document.getElementById('history').innerHTML = history
}

function clearDisplay() {
    currentNumber = ''
    savedNumber = ''
    history = ''
    displayValue(currentNumber)
    updateHistory('clear')
}

function onOperatorClick(operatorFunction){
    
    if(!!operator)
    {
        updateHistory(operatorFunction)
        console.log('operator not empty')
        operate(false)
        operator = operatorFunction;
        currentNumber = '';

    }
    else {
        savedNumber = currentNumber;
        updateHistory(operatorFunction)
        operator = operatorFunction;
        currentNumber = '';
        displayValue(currentNumber)
    }
    
}

function operate(isFinalCalculation) {
    if(isFinalCalculation)
        updateHistory('sum')
    console.log(operator)    
    console.log(savedNumber,currentNumber)
    switch(operator) {
        case 'add':
            savedNumber = Number(savedNumber) + Number(currentNumber);
            break;
        case 'substract':
            savedNumber = Number(savedNumber) - Number(currentNumber); 
            break;
        case 'multiply':
            savedNumber = Number(savedNumber) * Number(currentNumber);
            break;
        case 'divide':
            savedNumber = Number(savedNumber) / Number(currentNumber);
            break;
    }
    displayValue(savedNumber)
}