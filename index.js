const display = document.getElementById("display");


function appendToDisplay(input) {
    display.value += input;
}
function clearCharacter() {
    let currentValue = display.value;
    let newValue = currentValue.slice(0, -1);
    display.value = newValue;
}


function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
    display.value = eval(display.value);

    }
    catch(error) {
    display.value = "Error! Try Again.";
    }
}
