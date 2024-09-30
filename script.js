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

// Clear the display
clear.addEventListener("click", () => {
    display.value = "";
});

// Delete the last character
del.addEventListener("click", () => {
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
decimal.addEventListener("click", () => { display.value += "."; });

mul.addEventListener("click", () => { display.value += " * "; });
div.addEventListener("click", () => { display.value += " / "; });
add.addEventListener("click", () => { display.value += " + "; });
sub.addEventListener("click", () => { display.value += " - "; });

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
    
    // Find the operator position
    const opPosition = eqn.search(/[+\-*/]/);
    
    // Extract the operator
    let op = eqn.charAt(opPosition);
    
    // Extract the two operands (before and after the operator)
    let var1 = eqn.slice(0, opPosition);
    let var2 = eqn.slice(opPosition + 1);

    // Parse operands as numbers
    var1 = parseFloat(var1);
    var2 = parseFloat(var2);

    // Perform the operation and update the display
    const result = operate(var1, var2, op);
    display.value = result; 
});
