let isResultDisplayed = false;

function addNumber(num) {
    const input = document.getElementById('spaceInput');
    input.value += num;

    isResultDisplayed = false;
    updateClearButton();
}

function addOperator(operator) {
    const input = document.getElementById('spaceInput');
    input.value += operator;

    isResultDisplayed = false;
    updateClearButton();
}

function calculateResult() {
    const input = document.getElementById('spaceInput');
    try {
        const result = eval(input.value);
        input.value = result;
        isResultDisplayed = true;
        updateClearButton();
    } catch (error) {
        input.value = 'Error';
        isResultDisplayed = true;
        updateClearButton();
    }
}


function addDecimal() {
    const input = document.getElementById('spaceInput');
    const value = input.value;
    if (value === '' || /[+\-*/]$/.test(value)) {
        input.value += '0.';
    } else if (!value.endsWith('.')) {
        input.value += '.';
    }

    isResultDisplayed = false;
    updateClearButton();
}

function addParenthesis(parenthesis) {
    const input = document.getElementById('spaceInput');
    input.value += parenthesis;

    isResultDisplayed = false;
    updateClearButton();
}

function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function applyFunction(func) {
    const input = document.getElementById('spaceInput');
    let value = parseFloat(input.value);

    if (isNaN(value)) {
        input.value = 'Error';
        return;
    }

    switch (func) {
        case 'sin':
            input.value = Math.sin(value);
            break;
        case 'cos':
            input.value = Math.cos(value);
            break;
        case 'tan':
            input.value = Math.tan(value);
            break;
        case 'sqrt':
            input.value = Math.sqrt(value);
            break;
        case 'factorial':
            input.value = factorial(value);
            break;
        case 'ln':
            input.value = Math.log(value);
            break;
        case 'log':
            input.value = Math.log10(value);
            break;
    }
    
}

function updateClearButton() {
    const clearButton = document.getElementById('clearButton');
    const input = document.getElementById('spaceInput');

    if (isResultDisplayed || input.value === '') {
        clearButton.textContent = 'AC';
    } else {
        clearButton.textContent = 'CE';
    }
}


function handleClear() {
    const input = document.getElementById('spaceInput');

    if (isResultDisplayed || input.value === '') {
        input.value = '';
    } else {
        input.value = input.value.slice(0, -1);
    }

    isResultDisplayed = false;
    updateClearButton();
}