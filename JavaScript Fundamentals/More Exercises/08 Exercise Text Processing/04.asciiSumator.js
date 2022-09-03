function asciiSumator(input) {
  let startEl = input.shift().charCodeAt();
  let endEl = input.shift().charCodeAt();
  let text = input.shift().split("");
  let start = Math.min(startEl, endEl);
  let end = Math.max(startEl, endEl);
  let res = 0;
  for (let el of text) {
    let asciiEl = el.charCodeAt();
    if (asciiEl > start && asciiEl < end) {
      res += asciiEl;
    }
  }
  console.log(res);
}

asciiSumator([".", "@", "dsg12gr5653feee5"]);
asciiSumator(["?", "E", "@ABCEF"]);
asciiSumator(["a", "1", "jfe392$#@j24ui9ne#@$"]);
