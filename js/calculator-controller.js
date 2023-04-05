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
    this.btnClearLastElement = null;

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
    state.btnClearLastElement = document.querySelector("#clearLastElement");
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

    state.input.addEventListener('change', handleInputChangeClick);

    state.btnZero.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 0;
        changeDisplay(displayValue1);
        handleInputChangeClick(event)
    });

    state.btnOne.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 1;
        changeDisplay(displayValue1);
        handleInputChangeClick(event)
    });

    state.btnTwo.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 2;
        changeDisplay(displayValue1);
        handleInputChangeClick(event)
    });

    state.btnThree.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 3;
        changeDisplay(displayValue1);
        handleInputChangeClick(event)
    });

    state.btnFour.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 4;
        changeDisplay(displayValue1);
        handleInputChangeClick(event)
    })

    state.btnFive.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 5;
        changeDisplay(displayValue1);
        handleInputChangeClick(event)
    });

    state.btnSix.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 6;
        changeDisplay(displayValue1);
        handleInputChangeClick(event)
    });

    state.btnSeven.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 7;
        changeDisplay(displayValue1);
        handleInputChangeClick(event)
    });

    state.btnEight.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 8;
        changeDisplay(displayValue1);
        handleInputChangeClick(event)
    });

    state.btnNine.addEventListener('click', (event) => {
        event.preventDefault();
        displayValue1 += 9;
        changeDisplay(displayValue1);
        handleInputChangeClick(event);
    });

    //                              SOMA
    state.btnSum.addEventListener('click', (event) => {
        event.preventDefault();
        handleInputChange();
        state.Expression.usedExpression = "+";

        if(state.Numbers.number1 == ""){
            return;
        }

        if(state.Numbers.number1 != ""){
        state.exp.textContent = "+";
        }

        //ADICIONANDO O RESULTADO DO CALCULO AO PRIMEIRO ELEMENTO DO HISTÓRICO 
        //E APAGANDO O SEGUNDO ENQUANTO NÃO FOR PRESSIONADO O BOTÃO DE IGUALDADE
        if(!state.input.textContent == ""){
            state.num1.textContent = state.Numbers.number1;
            state.num2.textContent = "";
        }

        console.log("primeiro número acionando o botão de soma: ", state.Numbers.number1);
        clear();
        state.input.textContent = state.Numbers.number1;
    });


    //                          SUBTRAÇÃO

    state.btnSubtract.addEventListener('click', (event) => {
        event.preventDefault();
        state.Expression.usedExpression = "-";
        handleInputChange();

        if(state.Numbers.number1 == ""){
            state.Numbers.number1 = "0";
        }
        console.log(state.Numbers.number1);
        if(state.Numbers.number1 == ""){
            return;
        }

        if(state.Numbers.number1 != ""){
            state.exp.textContent = "-";
        }

        //ADICIONANDO O RESULTADO DO CALCULO AO PRIMEIRO ELEMENTO DO HISTÓRICO 
        //E APAGANDO O SEGUNDO ENQUANTO NÃO FOR PRESSIONADO O BOTÃO DE IGUALDADE
        if(!state.input.textContent == ""){
            state.num1.textContent = state.Numbers.number1;
            state.num2.textContent = "";
        }

        console.log("valor do primeiro número: ", state.Numbers.number1);
        clear();
        state.input.textContent = state.Numbers.number1;
    });

    //                      MULTIPLICACAO

    state.btnMultiply.addEventListener('click', (event) => {
        event.preventDefault();
        handleInputChange();

        if(state.Numbers.number1 == ""){
            return;
        }

        state.Expression.usedExpression = "*";
        if(state.Numbers.number1 != ""){
            state.exp.textContent = "*";
        }

        //ADICIONANDO O RESULTADO DO CALCULO AO PRIMEIRO ELEMENTO DO HISTÓRICO 
        //E APAGANDO O SEGUNDO ENQUANTO NÃO FOR PRESSIONADO O BOTÃO DE IGUALDADE
        if(!state.input.textContent == ""){
            state.num1.textContent = state.Numbers.number1;
            state.num2.textContent = "";
        }

        clear();
        state.input.textContent = state.Numbers.number1;
    });

    //                          DIVISAO
    
    state.btnDivide.addEventListener('click', (event) => {sum
        event.preventDefault();
        handleInputChange();
        state.Expression.usedExpression = "/";

        if(state.Numbers.number1 == ""){
            return;
        }

        if(state.Numbers.number1 != ""){
            state.exp.textContent = "/";    
        }
        
        //ADICIONANDO O RESULTADO DO CALCULO AO PRIMEIRO ELEMENTO DO HISTÓRICO 
        //E APAGANDO O SEGUNDO ENQUANTO NÃO FOR PRESSIONADO O BOTÃO DE IGUALDADE
        if(!state.input.textContent == ""){
            state.num1.textContent = state.Numbers.number1;
            state.num2.textContent = "";
        }

        clear();
        state.input.textContent = state.Numbers.number1;
    });

    //BOTÃO DE LIMPAR O ULTIMO DIGITO
    state.btnClearLastElement.addEventListener('click', (event) => {
        event.preventDefault();
        clearLastElement();
    });

    //BOTÃO DE LIMPAR TUDO
    state.btnClearAll.addEventListener('click', (event) => {
        event.preventDefault();
        clearAll();
    });

    //BOTÃO DE LIMPAR
    state.btnClear.addEventListener('click', (event) =>{
        event.preventDefault();
        clear();

    });

    //VIRGULA
    state.btnComma.addEventListener('click', (event) => {
        event.preventDefault();

        if(!state.Numbers.number1 == "" && state.Numbers.number2 == null){
            displayValue1 += "0.";
            changeDisplay(displayValue1);
        }

        if(state.input.innerText === result){
            clearAll();
            displayValue1 = "0.";
            changeDisplay(displayValue1);
        }

        if(state.input.innerText === "0"){
            displayValue1 += "0.";
            changeDisplay(displayValue1);
        }

        if(state.input.innerText.includes(".")){
            return;
        }
        else{
            displayValue1 += ".";
            changeDisplay(displayValue1);
        }
    });

    //BOTÃO DE IGUALDADE
    state.btnEquality.addEventListener('click', handleBtnEqualityClick);
}

//Funções secundárias

function handleInputChangeClick(event){
    console.log("valor mudado: ", state.input.innerText);
    console.log("valor que esta no RESULT: ", result);

    if(state.input.innerText.length > 10){
        console.log("ultrapassou");
        state.input.innerText = state.input.innerText.substring(0, 11);
    }
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

function handleBtnEqualityClick(event){
    event.preventDefault();
    handleInputChange();

    if(state.Numbers.number1 == "" || state.Numbers.number2 == "" ){
        return;
    }
        
    console.log("primeiro número: ", state.Numbers.number1);
    console.log("expressão utilizada: ", state.Expression.usedExpression);
    console.log("segundo número: ", state.Numbers.number2);

    switch(state.Expression.usedExpression){
        case "+":
            const resultSum = expressionController.sum(state.Numbers.number1, state.Numbers.number2);
            result = resultSum.toString();
            state.input.textContent = result;
            state.Numbers.number1 = result;
            displayValue1 = result;
            break;
        case "-":
            const resultSubtract = expressionController.subtract(state.Numbers.number1, state.Numbers.number2);
            result = resultSubtract.toString();
            state.input.textContent = result;
            state.Numbers.number1 = result;
            displayValue1 = result;
            break;
        case "*":
            const resultMultiply = expressionController.multiply(state.Numbers.number1, state.Numbers.number2);
            result = resultMultiply.toString();
            state.input.textContent = result;
            state.Numbers.number1 = result;
            displayValue1 = result;
            break;
        case "/":
            const resultDivision = expressionController.division(state.Numbers.number1, state.Numbers.number2);
            result = resultDivision.toString();
            state.input.textContent = result; 
            state.Numbers.number1 = result;
            displayValue1 = result;
    }

    handleInputChangeClick(event);

    console.log("");
    console.log("VALOR DO CALCULO ");
    console.log("RESULT: ", result);
    console.log("state.Numbers.number1: ", state.Numbers.number1);
    console.log("state.Expression.usedExpression: ", state.Expression.usedExpression);
    console.log("state.Numbers.number2: ", state.Numbers.number2);
    console.log("state.input.innerText: ", state.input.textContent);
    console.log("displayValue1: ", displayValue1);
    console.log("state.input.innerText: ", state.input.innerText)
}

let displayValue1 = "";
let result = "";

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

function clearLastElement(){
    if(state.input.innerText == "0"){
        return;
    }
    displayValue1 = displayValue1.slice(0, -1);
    state.input.textContent = displayValue1;
}