import Numbers from "./constructor/number-constructor.js";
import Expression from "./constructor/expression-constructor.js";
import * as expressionController from "./constrollers/expressions-controller.js";

function State(){

    this.Numbers = new Numbers();
    this.Expression = new Expression();

    this.num1 = null;
    this.num2 = null;
    this.exp = null;

    this.input = null;

    this.btnClearAll = null;
    this.btnClear = null;
    this.btnTurnProcentage = null;

    this.btnDivide = null;
    this.btnMultiply = null;
    this.btnSubtract = null;
    this.btnSum = null;
    this.btnEquality = null;
    this.btnComma = null;

    this.btnZero = null;
    this.btnOne = null;
    this.btnTwo = null;
    this.btnThree = null;
    this.btnFour = null;
    this.btnFive = null;
    this.btnSix = null;
    this.btnSeven = null;
    this.btnEight = null;
    this.btnNine = null;
}

const state = new State();

export function init(){
    state.num1 = document.querySelector("#num1");
    state.num2 = document.querySelector("#num2");
    state.exp = document.querySelector("#exp");
    
    state.input = document.querySelector("#input");

    state.btnClearAll = document.querySelector("#clearAll");
    state.btnClear = document.querySelector("#clear");
    state.btnTurnProcentage = document.querySelector("#turnPorcentage");
    state.btnDivide = document.querySelector("#divide");
    state.btnMultiply = document.querySelector("#multiply");
    state.btnSubtract = document.querySelector("#subtract");
    state.btnSum = document.querySelector("#sum");
    state.btnEquality = document.querySelector("#equality");
    state.btnComma = document.querySelector("#comma");
    state.btnZero = document.querySelector("#numberZero");
    state.btnOne = document.querySelector("#numberOne");
    state.btnTwo = document.querySelector("#numberTwo");
    state.btnThree = document.querySelector("#numberThree");
    state.btnFour = document.querySelector("#numberFour");
    state.btnFive = document.querySelector("#numberFive");
    state.btnSix = document.querySelector("#numberSix");
    state.btnSeven = document.querySelector("#numberSeven");
    state.btnEight = document.querySelector("#numberEight");
    state.btnNine = document.querySelector("#numberNine");

    state.btnZero.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 0;
        changeDisplay(displayValue1);
    });

    state.btnOne.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 1;
        changeDisplay(displayValue1);
    });

    state.btnTwo.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 2;
        changeDisplay(displayValue1);
    });

    state.btnThree.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 3;
        changeDisplay(displayValue1);
    });

    state.btnFour.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 4;
        changeDisplay(displayValue1);
    })

    state.btnFive.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 5;
        changeDisplay(displayValue1);
    });

    state.btnSix.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 6;
        changeDisplay(displayValue1);
    });

    state.btnSeven.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 7;
        changeDisplay(displayValue1);
    });

    state.btnEight.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 8;
        changeDisplay(displayValue1);
    });

    state.btnNine.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 9;
        changeDisplay(displayValue1);
    });


    state.btnSum.addEventListener('click', (event) => {
        event.preventDefault();
        handleInputChange();
        state.Expression.usedExpression = "+";
        state.exp.textContent = "+";
        console.log("primeiro números: ", state.Numbers.number1);
        console.log(state.Expression.usedExpression);
        console.log("segundo números:", state.Numbers.number2);
        if(state.Expression.usedExpression == "+" && !state.Numbers.number2 == ""){
            const result = expressionController.sum(state.Numbers.number1, state.Numbers.number2);
            state.Numbers.number1 = result;
        }
        if(!state.Numbers.number1 == "" && !state.Numbers.number2 == ""){
            state.num1.textContent = state.Numbers.number1;
            console.log("não estão vazios");
            state.num2.textContent = "";
        }
        clear();
        state.input.textContent = state.Numbers.number1;
    });

    state.btnSubtract.addEventListener('click', (event) => {
        event.preventDefault();
        handleInputChange();
        state.Expression.usedExpression = "-";
        clear();
    });

    state.btnMultiply.addEventListener('click', (event) => {
        event.preventDefault();
        handleInputChange();
        state.Expression.usedExpression = "*";
        clear();
    });

    state.btnDivide.addEventListener('click', (event) => {sum
        event.preventDefault();
        handleInputChange();
        state.Expression.usedExpression = "/";
        clear();
    });

    state.btnTurnProcentage.addEventListener('click', (event) => {
        event.preventDefault();
        const result = expressionController.convertDecimal(state.input.textContent);
        state.Numbers.number1 = result;
        state.input.textContent = result;
    });

    state.btnEquality.addEventListener('click', (event) => {
        event.preventDefault();
        handleInputChange();

        switch(state.Expression.usedExpression){
            case "+":
                const resultSum = expressionController.sum(state.Numbers.number1, state.Numbers.number2);
                state.input.textContent = resultSum; 
                state.Numbers.number1 = resultSum;
                break;
            case "-":
                const resultSubtract = expressionController.subtract(state.Numbers.number1, state.Numbers.number2);
                state.input.textContent = resultSubtract; 
                state.Numbers.number1 = resultSubtract;
                break;
            case "*":
                const resultMultiply = expressionController.multiply(state.Numbers.number1, state.Numbers.number2);
                state.input.textContent = resultMultiply; 
                state.Numbers.number1 = resultMultiply;
                break;
            case "/":
                const resultDivision = expressionController.division(state.Numbers.number1, state.Numbers.number2);
                state.input.textContent = resultDivision; 
                state.Numbers.number1 = resultDivision;
        }
    });



    state.btnClearAll.addEventListener('click', (event) => {
        event.preventDefault();
        clearAll();
    });

    state.btnClear.addEventListener('click', (event) =>{
        event.preventDefault();
        clear();

    });

    state.btnComma.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += ".";
        changeDisplay(displayValue1);
    });
}

function handleInputChange(){
    if(!state.Numbers.number1 || state.Numbers.number1 == ""){
        state.Numbers.number1 = displayValue1;
        state.num1.textContent = state.Numbers.number1;
    } 
    else{
        state.Numbers.number2 = displayValue1;
        state.num2.textContent = state.Numbers.number2;
    }
}

//Funções secundárias

let displayValue1 = "";

function changeDisplay(value){
    state.input.textContent = value;
}

function clear(){
    state.input.textContent = 0;
    displayValue1 = "";
}

function clearAll(){
    state.num1.textContent = "";
    state.num2.textContent = "";
    state.exp.textContent = "";
    state.input.textContent = 0;
    displayValue1 = "";
    state.Numbers.number1 = "";
    state.Numbers.number2 = "";
}