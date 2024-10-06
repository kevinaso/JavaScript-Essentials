// objeto literal que actúa como un diccionario de funciones
const operations = {
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

function performOperation(operation) {
    let num1 = document.getElementById('input1').value;
    let num2 = document.getElementById('input2').value;

    // Validar si los campos están vacíos
    if (num1 === '' || num2 === '') {
        displayResult('Please fill in both numbers');
        return; // Detenemos la ejecución si están vacíos
    }

    // Convertir a números después de verificar que no están vacíos
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    // Validar si se intenta dividir por cero
    if (operation === 'divide' && num2 === 0) {
        displayResult('Cannot divide by zero');
        return;
    }
    // Realizar la operación
    let result;
    try {
        debugger;
        result = operations[operation](num1, num2);
    } catch (error) {
        displayResult(`Error: ${error.message}`);
        return;
    }

    displayResult(result);
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}

// Función para abrir la ventana emergente con las opciones de operación
function openOperationWindow() {
    // create emerging window
    const popup = window.open("", "Operation Window", "width=300,height=200");

    if (!popup) {
        alert("Popup blocked! Please allow popups for this website.");
        return;
    }

    // Create html content for the popup
    popup.document.write(`
        <html>
            <head>
                <title>Select Operation</title>
                <style>
                    button {
                        padding: 10px;
                        margin: 5px;
                        width: 100px;
                    }
                </style>
            </head>
            <body>
                <h2>Select Operation</h2>
                <button onclick="window.opener.performOperation('add'); window.close();">Add</button><br><br>
                <button onclick="window.opener.performOperation('subtract'); window.close();">Subtract</button><br><br>
                <button onclick="window.opener.performOperation('multiply'); window.close();">Multiply</button><br><br>
                <button onclick="window.opener.performOperation('divide'); window.close();">Divide</button><br><br>
            </body>
        </html>
    `);
}
