function wordsUppercase(input) {
  let reg = /\w+/g;
  let match = reg.exec(input);
  let res = [];
  while (match != null) {
    res.push(match[0].toUpperCase());
    match = reg.exec(input);
  }
  console.log(res.join(", "));
}

wordsUppercase("Hi, how are you?");
wordsUppercase("hello");

//-----------------
// function wordsUppercase(input) {
//   let res = input.match(/\w+/g).join(", ").toUpperCase();
//   console.log(res);
// }
