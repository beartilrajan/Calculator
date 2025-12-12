function add(a, b) {
    return a + B;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;

}

function divide(a, b) {
    return a / b;

}

let previousInput = "";
let operationInput = "";
let currentInput = "";

function pressNumber(num) {
    currentInput += num;
    document.getElementById('display').value = `${previousInput} ${operationInput} ${currentInput}`
    
}

function getOperator(){

}


function clearDisplay() {
    currentInput = "";
    operationInpuut = "";
    nextInput = "";
    display.value = "";
}


function calculate() {

}