previousInput = "";
inputOperator = "";
currentInput = "";

function pressNumber(num) {
    currentInput += num;
    document.getElementById("display").value = `${previousInput} ${inputOperator} ${currentInput}`;
}


function getOperator(operator) {
    if (previousInput !== "" && currentInput !== "") {
        calculater()
    }
    inputOperator = operator
    previousInput = currentInput;
    currentInput = "";
    document.getElementById('display').value = `${previousInput} ${inputOperator}`

}

function calculater() {
    let result;
    let a = parseFloat(previousInput);
    let b = parseFloat(currentInput);
    switch (inputOperator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;
        case "/":
            if (b == 0) {
                alert("devide by zero not allowd")
                clearDisplay();
                return;
            }
            else {
                result = a / b;
                break;
            }
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = ""
    inputOperator = "";

    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    previousInput = "";
    inputOperator = "";
    currentInput = "";
    document.getElementById("display").value = "";
}