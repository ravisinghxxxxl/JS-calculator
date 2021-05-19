console.log("start");

var screen = document.getElementById("screen");
var button = document.querySelectorAll("button");

let screenValue = '';

for (items of button) {
  items.addEventListener("click", e => {
    buttonText = e.target.innerText;

    if (buttonText == 'C') {
        screenValue = "";
        screen.value = screenValue;
    }
    else if (buttonText == '=') {
        screen.value = eval(screenValue);
    }
    else {
        screenValue += buttonText;
        screen.value = screenValue; 
    }
  });
}
