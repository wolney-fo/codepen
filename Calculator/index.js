let previous_operator;
let current_operator;

let operation;
let result;

let entry = document.getElementById("entry");

function setEntry() {
  entry = document.getElementById("entry");
}

function setOperation(op) {
  operation = op;
  setOperators();

  entry.value = "";
  entry.focus();
}

function setOperators() {
  previous_operator = current_operator;
  current_operator = parseFloat(document.getElementById("entry").value);
}

function calculate() {
  setOperators();

  try {
    if (operation === "+") {
      result = previous_operator + current_operator;
    } else if (operation === "-") {
      result = previous_operator - current_operator;
    } else if (operation === "*") {
      result = previous_operator * current_operator;
    } else {
      result = previous_operator / current_operator;
    }

    document.getElementById("entry").value = result;
  } catch (error) {
    console.error(error);
  }
}

function insertNumber(num) {
  document.getElementById("entry").value += num;
}

function insertValue(value) {
  document.getElementById("entry").value = value;
}

function entryOperation(operation) {
  let entry = document.getElementById("entry");

  if (operation === "sqrt") {
    entry.value = Math.sqrt(entry.value);
  } else if (operation === "cbrt") {
    entry.value = Math.cbrt(entry.value);
  } else if (operation === "cos") {
    entry.value = Math.cos(entry.value);
  } else if (operation === "sin") {
    entry.value = Math.sin(entry.value);
  } else if (operation === "log") {
    entry.value = Math.log(entry.value);
  } else if (operation === "pow2") {
    entry.value = Math.pow(entry.value, 2);
  } else if (operation === "pow3") {
    entry.value = Math.pow(entry.value, 3);
  }
}

function clearCalc() {
  previous_operator = undefined;
  current_operator = undefined;
  operation = undefined;
  result = undefined;
  insertValue("");
}