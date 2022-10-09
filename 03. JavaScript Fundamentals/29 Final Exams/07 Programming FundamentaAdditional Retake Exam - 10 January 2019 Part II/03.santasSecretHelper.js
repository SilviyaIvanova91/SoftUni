function santasSecretHelper(input) {
  let key = Number(input.shift());
  for (let el of input) {
    if (el == "end") {
      break;
    }
    let message = [];
    for (let char of el) {
      let newChar = char.charCodeAt() - key;
      message.push(String.fromCharCode(newChar));
    }
    message = message.join("");
    let reg = /@(?<name>[A-Za-z]+)[^@\-!:>]*!(?<type>[GN])!/g;
    let match = reg.exec(message);
    if (match != null) {
      if (match.groups.type == "G") {
        console.log(match.groups.name);
      }
    }
  }
}

santasSecretHelper([
  "3",
  "CNdwhamigyenumje$J$",
  "CEreelh-nmguuejn$J$",
  "CVwdq&gnmjkvng$Q$",
  "end",
]);
santasSecretHelper([
  "3",
  "N}eideidmk$'(mnyenmCNlpamnin$J$",
  "ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge",
  "ppqmkkkmnolmnnCEhq/vkievk$Q$",
  "yyegiivoguCYdohqwlqh/kguimhk$J$",
  "end",
]);
