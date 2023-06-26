function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculate() {
  var number1 = parseFloat(document.getElementById("number1").value);
  var number2 = parseFloat(document.getElementById("number2").value);
  var operation = document.querySelector('input[name="operation"]:checked').value;
  var result = document.getElementById("result");

  switch (operation) {
    case "addition":
      result.textContent = "Result: " + add(number1, number2);
      break;
    case "subtraction":
      result.textContent = "Result: " + subtract(number1, number2);
      break;
    case "multiplication":
      result.textContent = "Result: " + multiply(number1, number2);
      break;
    case "division":
      result.textContent = "Result: " + divide(number1, number2);
      break;
  }
}

function reset() {
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
  document.getElementById("result").textContent = "";
}
