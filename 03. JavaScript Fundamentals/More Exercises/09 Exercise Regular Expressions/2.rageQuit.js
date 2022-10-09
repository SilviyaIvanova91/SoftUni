function rageQuit(arr) {
  let input = arr[0];
  let char = /[^0-9]+/g;
  let num = /[0-9]+/g;
  let matchchar = input.match(char);
  let matchNum = input.match(num);
  let text = [];
  for (let i = 0; i < matchchar.length; i++) {
    let newChar = matchchar[i].repeat(matchNum[i]).toUpperCase();
    text.push(newChar);
  }
  text = text.join("");
  let unique = new Set();
  for (let el of text) {
    if (!unique.has(el)) {
      unique.add(el);
    }
  }
  console.log(`Unique symbols used: ${unique.size}`);
  console.log(text);
}

rageQuit(["a3"]);
rageQuit(["aSd2&5s@1"]);
