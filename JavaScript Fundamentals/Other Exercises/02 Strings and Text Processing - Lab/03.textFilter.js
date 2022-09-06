function textFilter(input) {
  let words = input[0].split(", ");
  let sntc = input[1];
  for (let word of words) {
    let newWord = "*".repeat(word.length);
    while (sntc.includes(word)) {
      sntc = sntc.replace(word, newWord);
    }
  }
  console.log(sntc);
}

textFilter([
  "Linux, Windows",
  "It is not Linux, it is GNU/Linux. Linux is merely the kernel, while GNU adds the functionality. Therefore we owe it to them by calling the OS GNU/Linux! Sincerely, a Windows client",
]);
