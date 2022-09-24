function encodeAndDecodeMessages() {
  let textAreas = document.querySelectorAll("textarea");
  let buttons = document.querySelectorAll("button");

  buttons[0].addEventListener("click", encode);
  buttons[1].addEventListener("click", decode);

  function encode(el) {
    let encodeMess = "";
    let input = textAreas[0].value;
    for (let index = 0; index < input.length; index++) {
      encodeMess += String.fromCharCode(input[index].charCodeAt(0) + 1);
    }
    textAreas[1].value = encodeMess;
    textAreas[0].value = "";
  }

  function decode(el) {
    let decodetMess = "";
    let input = textAreas[1].value;
    for (let index = 0; index < input.length; index++) {
      decodetMess += String.fromCharCode(input[index].charCodeAt(0) - 1);
    }
    textAreas[1].value = decodetMess;
  }
}
