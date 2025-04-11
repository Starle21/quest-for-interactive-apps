let xCoord;
const domInput = document.querySelector("input");
const domRect = document.querySelector("rect");

function handleInput() {
  // updating JS from DOM
  xCoord = domInput.value;
  domRect.x.baseVal.value = xCoord;
}

domInput.oninput = handleInput;
