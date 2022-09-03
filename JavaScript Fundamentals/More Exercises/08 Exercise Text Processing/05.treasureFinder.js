function treasureFinder(input) {
  let num = input.shift().split(" ").map(Number);

  while (input.length > 1) {
    let counter = 0;
    let command = input.shift();
    if (command == "find") {
      break;
    }
    let message = [];
    let sumbols = command.split("");
    for (let el of sumbols) {
      let asciiEl = el.charCodeAt();
      let newAscii = asciiEl - Number(num[counter]);
      let newChar = String.fromCharCode(newAscii);
      message.push(newChar);
      counter++;
      if (counter == num.length) {
        counter = 0;
      }
    }

    message = message.join("").split("&");
    let coordinates = message.pop();
    let index = coordinates.indexOf("<");
    coordinates = coordinates.slice(index + 1, coordinates.length - 1);
    let typeOffound = message.pop();
    console.log(`Found ${typeOffound} at ${coordinates}`);
  }
}

treasureFinder([
  "1 2 1 3",
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=534O57YC",
  "find",
]);
// treasureFinder([
//   "1 4 2 5 3 2 1",
//   'Ulgwh"jt$ozfj!*kqqg(!bx"A3U237GC',
//   "tsojPqsf$(lrne*$CYfqpshksdvfT$>634O57YC",
//   "*stj)>34W68Z@",
//   "find",
// ]);
