// Get the display buttons
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operators =  ["%", "*", "/", "-", "+"];
let output = "";

//Function to calculate based on button value
const calculate = (btnValue) => {
    if (btnValue === "=") {
        try {
            output = evaluateExpression(output);
        }
        catch (error) {
            output = "Error";
        }
    }
    else if (btnValue === "AC") {
        output = "";
    }
    else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    }
    else {
        if(output === "" && operators.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}

// Function to evaluate mathematical expression
const evaluateExpression = (expression) => {
    return eval (expression.replace(/%/g, "/100"));
}

//Add click event listeners to buttons
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})