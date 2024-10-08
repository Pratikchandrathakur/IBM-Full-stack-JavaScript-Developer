function performOperation() {
    // Get user input from input fields
    let num1 = document.getElementById('input1').value;
    let num2 = document.getElementById('input2').value;
    let operation = document.getElementById('operation').value;

    // Introduce a debugger statement to check input values
    debugger;

    // Check if inputs are valid numbers, or assign a character and test behavior
    if (isNaN(num1) || isNaN(num2)) {
        displayResult('Please enter valid numbers.');
        return;
    }

    // Convert the inputs to numbers after validation
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Perform the operation based on user choice
    let result;
    if (operation === 'add') {
        result = add(num1, num2);
    } else if (operation === 'multiply') {
        result = multiply(num1, num2);
    } else if (operation === 'divide') {
        // Handle division by zero
        if (num2 === 0) {
            displayResult('Division by zero is not allowed.');
            return;
        }
        result = divide(num1, num2);
    }

    // Display the result
    displayResult(result);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}