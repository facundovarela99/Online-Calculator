function addNumber(num) {
    const input = document.getElementById('spaceInput');
    input.value += num;
}

function addOperator(operator) {
    const input = document.getElementById('spaceInput');
    input.value += operator;
}

function calculateResult() {
    const input = document.getElementById('spaceInput');
    try {
        const result = eval(input.value);
        // if (result == Infinity) {
        //     result = 'Division by zero error' 
        // }
        input.value = result;

    } catch (error) {
        input.value = 'Error';
    }
}

function clearInput() {
    const input = document.getElementById('spaceInput');
    input.value = '';
}

function addDecimal() {
    const input = document.getElementById('spaceInput');
    const value = input.value;
    if (value === '' || /[+\-*/]$/.test(value)) {
        input.value += '0.';
    } else if (!value.endsWith('.')) {
        input.value += '.';
    }
}