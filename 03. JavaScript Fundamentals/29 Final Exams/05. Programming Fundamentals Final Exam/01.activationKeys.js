function activationKeys(input) {
  let key = input.shift();
  let line = input.shift();
  while (line != "Generate") {
    let token = line.split(">>>");
    let command = token[0];
    if (command == "Contains") {
      let substring = token[1];
      if (key.includes(substring)) {
        console.log(`${key} contains ${substring}`);
      } else {
        console.log(`Substring not found!`);
      }
    } else if (command == "Flip") {
      let typeOfChar = token[1];
      let startIndex = Number(token[2]);
      let endIndex = Number(token[3]);
      let start = key.slice(0, startIndex);
      let end = key.slice(endIndex, key.length);
      let change = key.slice(startIndex, endIndex);
      if (typeOfChar == "Lower") {
        change = change.toLowerCase();
      } else if ((typeOfChar = "Upper")) {
        change = change.toUpperCase();
      }
      key = start + change + end;
      console.log(key);
    } else if (command == "Slice") {
      let startIndex = Number(token[1]);
      let endIndex = Number(token[2]);
      let first = key.slice(0, startIndex);
      let sec = key.slice(endIndex, key.length);
      key = first + sec;
      console.log(key);
    }
    line = input.shift();
  }
  console.log(`Your activation key is: ${key}`);
}

activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
activationKeys([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);
