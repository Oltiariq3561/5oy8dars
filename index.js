let display = document.getElementById('ekran');
let currentInput = '';
let currentOperation = '';

function clearDisplay() {
    display.textContent = '0';
    currentInput = '';
    currentOperation = '';
}

function appendNumber(number) {
    if (currentInput.length === 0 && number === '0') return;
    currentInput += number;
    display.textContent = currentInput;
}

function appendOperation(operation) {
    if (currentInput === '') return;
    if (currentOperation !== '') {
        currentInput = evaluate(currentOperation);
        display.textContent = currentInput;
    }
    currentOperation = currentInput + operation;
    currentInput = '';
}

function evaluate(expression) {
    try {
        return eval(expression);
    } catch {
        return 'Error';
    }
}

function calculate() {
    if (currentInput === '' || currentOperation === '') return;
    currentOperation += currentInput;
    let result = evaluate(currentOperation);
    display.textContent = result;
    currentInput = result;
    currentOperation = '';
}
