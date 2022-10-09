function useYourChainsBuddy(input) {
  let regExp = /<p>(.+?[\n]*)<\/p>/g;
  let match = regExp.exec(input[0]);
  let finarArr = [];
  while (match != null) {
    let text = match[1].replace(/[A-Z\W]+/g, " ").split("");
    let word = "";
    for (let ch of text) {
      let newCh = Number(ch.charCodeAt(0));
      if (newCh >= 97 && newCh <= 109) {
        newCh += 13;
      } else if (newCh >= 110 && newCh <= 122) {
        newCh -= 13;
      }
      newCh = String.fromCharCode(newCh);
      word += newCh;
    }
    finarArr.push(word);
    match = regExp.exec(input[0]);
  }
  console.log(finarArr.join(""));
}

useYourChainsBuddy([
  "<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&****</p><div><button>dsad</button></div><p>grkg^^^^%%%)))([]12</p></body></html>",
]);
useYourChainsBuddy([
  "<html><head><title></title></head><body><h1>Intro</h1><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj  qpunvaf ner nofbyhgryl rffragvny sbe fnsr unaqyvat nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre fnvq guna qbar ohg vs lbh chg ba lbhe gverf</p></body>",
]);
