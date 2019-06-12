 //Init
 let equalButton = document.getElementById("equal");
 let display = document.getElementById("display");
 let operatorUsed = "";
 let numberOne = 0;
 let numberTwo = 0;
 let numContainer = "";
 let savedNumbers = [];

 // Create number
 let numbers = document.getElementsByClassName("numButton");
 let numbersArray = Array.from(numbers);
 numbersArray.forEach(element => {
     element.addEventListener("click", (e) => {
         numContainer += element.childNodes[0].nodeValue;       
         display.textContent += element.childNodes[0].nodeValue;
     });
 });
 // Operator buttons
 let operators = document.getElementsByClassName("operatorButton");
 let operatorsArray = Array.from(operators);
 operatorsArray.forEach(operator => {
     operator.addEventListener("click", (e) => {
         savedNumbers.push(numContainer);
         numContainer = "";
         operatorUsed = operator.childNodes[0].nodeValue;
         display.textContent += operator.childNodes[0].nodeValue;
     });
 }); 

 //Clear button
 let clearBTN = document.getElementById("clear");
 clearBTN.addEventListener("click", (e) => {
     numberOne = 0;
     numberTwo = 0;
     numContainer = "";
     savedNumbers.splice(0, savedNumbers.length);
     display.textContent = "";
 });

 //Backspace button
 let backspaceBTN = document.getElementById("backspace");
 backspaceBTN.addEventListener("click", (e) => {
     if(display.textContent !== ""){
         numContainer = numContainer.slice(0, -1);
         display.textContent = display.textContent.slice(0, -1);
     }
 });

 // Equal Button
 equalButton.addEventListener("click", (e) => {                
     savedNumbers.push(numContainer);
     numberOne = Number(savedNumbers[0]);
     numberTwo = Number(savedNumbers[1]);
     if(operatorUsed == "/" && numberTwo == 0){
         alert("Dividing by zero are we?");
         return;
     }
     let result = operate(numberOne, operatorUsed, numberTwo);
     if(result - Math.floor(result) !== 0){
         result = result.toFixed(2);
     }
     display.textContent = result;
 });        

 //Addition
 function add(a, b){
     return a+b;
 }
 //Subtraction
 function sub(a, b){
     return a-b;
 }
 //Multiplication
 function mult(a, b){
     return a*b;
 }
 //Division
 function div(a, b){
     return a/b;
 }
 //Operate
 function operate(num1, operatorUsed, num2){
     switch(operatorUsed){
         case "+":
             return add(num1, num2);
             break;
         case "-":
             return sub(num1, num2);
             break;
         case "*":
             return mult(num1, num2);
             break;
         case "/":
             return div(num1, num2);
             break;
     }
 }