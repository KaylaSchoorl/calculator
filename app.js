import { add, subtract, multiply, divide } from './utilities.js';

function initOperator(firstInputId, secondInputId, buttonId, resultsId, calculation) {
    const input1 = document.getElementById(firstInputId);
    const input2 = document.getElementById(secondInputId);
    const button = document.getElementById(buttonId);
    const display = document.getElementById(resultsId);

    button.addEventListener('click', () => {
        const result = calculation(Number(input1.value), Number(input2.value));
        display.textContent = result;
    })
}

initOperator('num1', 'num2', 'addition', 'addition-display', add);
initOperator('sub1', 'sub2', 'subtraction', 'subtraction-display', subtract);
initOperator('div1', 'div2', 'division', 'division-display', divide);
initOperator('mul1', 'mul2', 'multiply', 'multiply-display', multiply);