function charactersinRange(firstChar, secChar) {
  let startChar = Math.min(firstChar.charCodeAt(0), secChar.charCodeAt(0));
  // с Math.min избираме по-малката стойност от двете задаени
  let endChar = Math.max(firstChar.charCodeAt(0), secChar.charCodeAt(0));
  // с Math.max избираме по-голямата стойност от двете задаени
  let charInArr = [];
  for (let i = startChar + 1; i < endChar; i++) {
    charInArr.push(String.fromCharCode(i));
  }
  console.log(charInArr.join(" "));
}

charactersinRange("a", "d");
charactersinRange("#", ":");
charactersinRange("C", "#");
