function palindromes(input) {
  let reg = /,(\s+)?|\?(\s+)?|!(\s+)?|\.(\s+)?|\s+/gm;
  let sentc = input[0].split(reg);

  let list = [];
  for (let word of sentc) {
    if (word != undefined && word != " ") {
      let palindrome = word.split("").reverse().join("");
      if (word == palindrome) {
        list.push(word);
      }
    }
  }
  let sort = list.sort((a, b) => a.localeCompare(b));
  console.log(sort.join(", "));
}

palindromes(["Hi,exe? ABBA! Hog fully a string. Bob"]);
