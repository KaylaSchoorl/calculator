// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const additionNumberOne = document.getElementById('num1')
const additionNumberTwo = document.getElementById('num2')
const additionButton = document.getElementById('addition')
const additionDisplay = document.getElementById('addition-display')
additionButton.addEventListener('click', () => {
    additionDisplay.textContent = Number(additionNumberOne.value) + Number(additionNumberTwo.value);
})
const subtractionNumberOne = document.getElementById('sub1')
const subtractionNumberTwo = document.getElementById('sub2')
const subtractionButton = document.getElementById('subtraction')
const subtractionDisplay = document.getElementById('subtraction-display')
subtractionButton.addEventListener('click', () => {
    subtractionDisplay.textContent = Number(subtractionNumberOne.value) - Number(subtractionNumberTwo.value);
})
const divisionNumberOne = document.getElementById('div1')
const divisionNumberTwo = document.getElementById('div2')
const divisionButton = document.getElementById('division')
const divisionDisplay = document.getElementById('division-display')
divisionButton.addEventListener('click', () => {
    divisionDisplay.textContent = Number(divisionNumberOne.value) / Number(divisionNumberTwo.value);
})
const multiplyNumberOne = document.getElementById('mul1')
const multiplyNumberTwo = document.getElementById('mul2')
const multiplyButton = document.getElementById('multiply')
const multiplyDisplay = document.getElementById('multiply-display')
multiplyButton.addEventListener('click', () => {
    multiplyDisplay.textContent = Number(multiplyNumberOne.value) * Number(multiplyNumberTwo.value);
})
