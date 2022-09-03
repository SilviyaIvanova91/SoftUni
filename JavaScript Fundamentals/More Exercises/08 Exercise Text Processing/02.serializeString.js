function serializeString(input) {
  let text = input[0].split("");
  let alphabet = {};
  for (let i = 0; i < text.length; i++) {
    if (!alphabet.hasOwnProperty(text[i])) {
      alphabet[text[i]] = [];
    }
    alphabet[text[i]].push(i);
  }
  for (let [char, value] of Object.entries(alphabet)) {
    let res = `${char}:`;
    for (let el of value) {
      res += el + " ";
    }
    res = res.trim().split(" ").join("/");
    console.log(res);
  }
}

serializeString(["abababa"]);
serializeString(["avjavamsdmcalsdm"]);
