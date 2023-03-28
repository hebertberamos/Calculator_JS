// import Expression from "../constructor/expression-constructor.js";

// function State(){
//     this.Expression = new Expression();
// }

// const state = new State();

// export function numberExpression(n1, n2, exp){
//     switch(exp){
//         case "+":
//             sum(n1, n2);
//         break;
//         case "-":
//             subtract(n1, n2);
//         break;
//         case "*":
//             multiply(n1, n2);
//         break;
//         case "/":
//             division(n1, n2);
//         break;
//         }
// }

export function sum(n1, n2){
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    const result = num1 + num2;
    return result;
}

export function subtract(n1, n2){
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    const result = num1 - num2;
    return(result);
}

export function multiply(n1, n2){
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    const result = num1 * num2;
    return(result);
}

export function division(n1, n2){
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    const result = num1 / num2;
    return(result);
}

export function convertDecimal(number){
    const decimal = parseFloat(number);
    const result = decimal / 100;
    return result;
}

export function third(number){
    const convertNumber = parseFloat(number);
    const result = convertNumber / 3;
    return result;
}
