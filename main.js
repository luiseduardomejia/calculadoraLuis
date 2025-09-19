const screen = document.getElementById("screen");

function appendValue(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = "";
}

function calculateResult() {
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = "Error";
  }
}