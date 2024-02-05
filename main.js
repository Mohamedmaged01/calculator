const display = document.getElementById("display");
function AppendToDisplay(input) {
  display.value += input;
}
function ClearDisplay(input) {
  display.value = "";
}
function Calculate(input) {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
