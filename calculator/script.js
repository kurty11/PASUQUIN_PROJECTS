let expression = '';
let history = [];

function appendToDisplay(value) {
    expression += value;
    document.getElementById('display').value = expression;
}

function calculate() {
    try {
        expression = expression.replace(/%/g, '*0.01');

        let result = eval(expression);
        history.push(expression + ' = ' + result);
        displayHistory();
        document.getElementById('display').value = result;
        expression = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
        expression = '';
    }
}

function calculateExponent() {
    appendToDisplay('**');
}

function calculateSquareRoot() {
    let number = eval(expression);
    if (number >= 0) {
        let result = Math.sqrt(number);
        document.getElementById('display').value = result;
        history.push('√' + number + ' = ' + result);
        displayHistory();
        expression = '';
    } else {
        document.getElementById('display').value = 'Error';
        expression = '';
    }
}

function clearDisplay() {
    expression = '';
    document.getElementById('display').value = '';
}

function displayHistory() {
    let historyHTML = '<h3>History</h3>';
    history.forEach(item => {
        historyHTML += '<p>' + item + '</p>';
    });
    document.getElementById('history').innerHTML = historyHTML;
}

function clearHistory() {
    history = [];
    displayHistory();
}