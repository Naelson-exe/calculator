const display = document.querySelector("#calculator-display");
const nine = document.querySelector("#nine");
const eight = document.querySelector("#eight");
const seven = document.querySelector("#seven");
const six = document.querySelector("#six");
const five = document.querySelector("#five");
const four = document.querySelector("#four");
const three = document.querySelector("#three");
const two = document.querySelector("#two");
const one = document.querySelector("#one");
const zero = document.querySelector("#zero");
const decimal = document.querySelector("#decimalPoint");
const del = document.querySelector("#del");
const mul = document.querySelector("#multiply");
const div = document.querySelector("#divide");
const add = document.querySelector("#add");
const sub = document.querySelector("#subtract");
const calc = document.querySelector("#calculate");
const clear = document.querySelector("#clear");

display.value = "";

// Delete the last character
del.addEventListener("click", () => {
    if (display.value === "NaN"){
        display.value = "";
    }
    display.value = display.value.trimEnd().slice(0, -1).trimEnd();
});

// Add number and operator buttons
nine.addEventListener("click", () => { display.value += "9"; });
eight.addEventListener("click", () => { display.value += "8"; });
seven.addEventListener("click", () => { display.value += "7"; });
six.addEventListener("click", () => { display.value += "6"; });
five.addEventListener("click", () => { display.value += "5"; });
four.addEventListener("click", () => { display.value += "4"; });
three.addEventListener("click", () => { display.value += "3"; });
two.addEventListener("click", () => { display.value += "2"; });
one.addEventListener("click", () => { display.value += "1"; });
zero.addEventListener("click", () => { display.value += "0"; });

let clicked = false;
let clickedD = false;

decimal.addEventListener("click", () => {
    if (!clickedD) {
        display.value += "."; 
        clickedD = true;
    }});

mul.addEventListener("click", () => { 
    if (!clicked) {
        display.value += " * "; 
        clicked = true;
        clickedD = false;
    }});
div.addEventListener("click", () => { 
    if (!clicked) {
        display.value += " / "; 
        clicked = true;
        clickedD = false;
    }});
add.addEventListener("click", () => {
    if (!clicked) {
        display.value += " + "; 
        clicked = true;
        clickedD = false;
    }});
sub.addEventListener("click", () => {
    if (!clicked) {
        display.value += " - "; 
        clicked = true;
        clickedD = false;
    }});

// Function to perform basic arithmetic operations
function operate(var1, var2, op) {
    switch (op) {
        case "+":
            return var1 + var2;
        case "-":
            return var1 - var2;
        case "*":
            return var1 * var2;
        case "/":
            if (var2 === 0) return "Error: Division by zero";
            return var1 / var2;
        default:
            return "Error";
    }
}

// Calculate and display the result
calc.addEventListener("click", () => {
    const eqn = display.value;
    
    // Find the operator position - while accommodating negative numbers
    const eqN = eqn.slice(1);
    const opPosition = eqN.search(/[+\-*/]/);
    
    // Extract the operator
    let op = eqn.charAt(opPosition + 1);
    
    // Extract the two operands (before and after the operator)
    let var1 = eqn.slice(0, opPosition + 1);
    let var2 = eqn.slice(opPosition + 2);

    // Parse operands as numbers
    var1 = parseFloat(var1);
    var2 = parseFloat(var2);

    // Perform the operation and update the display
    if ((isNaN(var1) || isNaN(var2)) || (!op)) {
        if ((isNaN(var1)) && ( op === "-")){
            clicked = false;
            clickedD = false;
            return display.value = -var2;
        }else if (isNaN(var1)){
            clicked = false;
            clickedD = false;
            return display.value = var2;
        }else if (isNaN(var2)){
            clicked = false;
            clickedD = false;
            return display.value = var1;
        } else if (!op){
            clicked = false;
            clickedD = false;
            return display.value;
        }
    }
    const result = operate(var1, var2, op);
    display.value = result; 
    clicked = false;
    clickedD = false;
});

clear.addEventListener("click", () => {
    display.value = "";
    clicked = false;
    clickedD = false;
});

document.addEventListener("keypress", (event) => {
    key = event.key;

    switch (key) {
        case "0" :
        case "1" :
        case "2" :
        case "3" : 
        case "4" :
        case "5" :
        case "6" :
        case "7" :
        case "8" :
        case "9" :
            display.value += key;
            break;
        case "." :
            if(!clickedD){
                display.value += ".";
                clickedD = true;
            }
            break;
        default :
            break;
    }
});
