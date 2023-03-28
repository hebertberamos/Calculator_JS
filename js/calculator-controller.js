import Numbers from "./constructor/number-constructor.js";
import Expression from "./constructor/expression-constructor.js";
import * as expressionController from "./constrollers/expressions-controller.js";

function State(){

    this.Numbers = new Numbers();
    this.Expression = new Expression();

    this.input = null;

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
    state.input = document.querySelector("#input");
    state.btnClear = document.querySelector("#clearAll");
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

    state.input.addEventListener('change', handleInputChange);

    state.btnZero.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 0;
        resetNumberClick();
        changeDisplay(displayValue1);
    });

    state.btnOne.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 1;
        resetNumberClick();
        changeDisplay(displayValue1);
    });

    state.btnTwo.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 2;
        resetNumberClick();
        changeDisplay(displayValue1);
    });

    state.btnThree.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 3;
        resetNumberClick();
        changeDisplay(displayValue1);
    });

    state.btnFour.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 4;
        resetNumberClick();
        changeDisplay(displayValue1);
    })

    state.btnFive.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 5;
        resetNumberClick();
        changeDisplay(displayValue1);
    });

    state.btnSix.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 6;
        resetNumberClick();
        changeDisplay(displayValue1);
    });

    state.btnSeven.addEventListener('click', (event) => {
        event.preventDefault();
        resetNumberClick();
        displayValue1 += 7;
        changeDisplay(displayValue1);
    });

    state.btnEight.addEventListener('click', (event) => {
        event.preventDefault();
        resetNumberClick();
        displayValue1 += 8;
        changeDisplay(displayValue1);
    });

    state.btnNine.addEventListener('click', (event) => {
        event.preventDefault();
        resetNumberClick();
        displayValue1 += 9;
        changeDisplay(displayValue1);
    });


    state.btnSum.addEventListener('click', (event) => {
        event.preventDefault();
        resetNumberClick();
        handleInputChange(event);
        state.Expression.usedExpression = "+";
        exp = "+";
        clear();
    });

    state.btnSubtract.addEventListener('click', (event) => {
        event.preventDefault();
        resetNumberClick();
        handleInputChange(event);
        state.Expression.usedExpression = "-";
        exp = "-";
        clear();
    });

    state.btnMultiply.addEventListener('click', (event) => {
        event.preventDefault();
        resetNumberClick();
        handleInputChange(event);
        state.Expression.usedExpression = "*";
        exp = "*";
        clear();
    });

    state.btnDivide.addEventListener('click', (event) => {sum
        event.preventDefault();
        resetNumberClick();
        handleInputChange(event);
        state.Expression.usedExpression = "/";
        exp = "/";
        clear();
    });

    state.btnTurnProcentage.addEventListener('click', (event) => {
        event.preventDefault();
        resetNumberClick();
        const result = expressionController.convertDecimal(state.input.textContent);
        state.Numbers.number1 = result;
        state.input.textContent = result;
    });

    state.btnEquality.addEventListener('click', (event) => {
        event.preventDefault();
        resetNumberClick();
        handleInputChange(event);

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



    state.btnClear.addEventListener('click', (event) => {
        event.preventDefault();
        numClick++;
        clickCount(numClick);
        state.input.textContent = 0;
        displayValue1 = "";
    });

    state.btnComma.addEventListener('click', (event) => {
        event.preventDefault();
        resetNumberClick();
        displayValue1 += ".";
        changeDisplay(displayValue1);
    })
}

function handleInputChange(event){
    if(!state.Numbers.number1 || state.Numbers.number1 == ""){
        state.Numbers.number1 = displayValue1;
    } 
    else{
        state.Numbers.number2 = displayValue1;
    }
}

//Funções secundárias

let numClick = 0;
let displayValue1 = "";
let exp = "";

function changeDisplay(value){
    state.input.textContent = value;
}

function clear(){
    state.input.textContent = 0;
    displayValue1 = "";
}


function clickCount(value){
    if(value >= 2){
        state.Numbers.number1 = "";
        state.Numbers.number2 = "";
    }
    else{
        state.input.textContent = state.Numbers.number1;
    }
}

function resetNumberClick(){
    numClick = 0;
}