// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add } from '../utilities.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
   
const x =4;
const y =5;
const sum =9;
     //Act 
    // Call the function you're testing and set the result to a const
  


const result =add(x, y); 

expect.equal(result, sum);
});


import { subtract } from '../utilities.js';
const subtractiontest = QUnit.test;

subtractiontest('time to test a subtraction function', (expect) => {

const x =4;
const y =5;
const sum =-1;

const result =subtract(x, y); 

expect.equal(result, sum);
});