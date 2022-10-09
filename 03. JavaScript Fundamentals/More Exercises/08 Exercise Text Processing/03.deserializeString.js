function deserializeString(input) {
  let maxNum = 0;
  for (let firstEl of input) {
    if (firstEl == "end") {
      break;
    }
    let token = firstEl.split(":");
    let num = token[1].split("/");
    for (let el of num) {
      if (Number(el) > maxNum) {
        maxNum = Number(el);
      }
    }
  }
  let str = "*".repeat(maxNum + 1).split("");
  while (input.length > 1) {
    if (input[0] == "end") {
      break;
    }
    let [char, index] = input.shift().split(":");
    index = index.split("/").map(Number);
    for (let i = 0; i < index.length; i++) {
      let startI = Number(index[i]);
      str.splice(startI, 1, char);
    }
  }
  console.log(str.join(""));
}

deserializeString(["a:0/2/4/6", "b:1/3/5", "end"]);
deserializeString([
  "a:0/3/5/11",
  "v:1/4",
  "j:2",
  "m:6/9/15",
  "s:7/13",
  "d:8/14",
  "c:10",
  "l:12",
  "end",
]);
