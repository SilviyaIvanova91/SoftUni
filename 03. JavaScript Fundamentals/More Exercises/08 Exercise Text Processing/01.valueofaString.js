function valueofaString(input) {
  let text = input[0];
  let command = input[1];
  let res = 0;
  if (command == "UPPERCASE") {
    text = text
      .split("")
      .filter((a) => a.charCodeAt() >= 65 && a.charCodeAt() <= 90);
    for (let el of text) {
      res += Number(el.charCodeAt());
    }
  } else if (command == "LOWERCASE") {
    text = text
      .split("")
      .filter((a) => a.charCodeAt() >= 97 && a.charCodeAt() <= 122);
    for (let el of text) {
      res += el.charCodeAt();
    }
  }
  console.log(`The total sum is: ${res}`);
}
valueofaString(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
valueofaString(["AC/DC", "UPPERCASE"]);
