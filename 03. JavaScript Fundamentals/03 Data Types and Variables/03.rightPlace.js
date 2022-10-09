function rightPlace(word, char, match) {
  let result = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i] == "_") {
      result += char;
    } else {
      result += word[i];
    }
  }
  if (result == match) {
    console.log(`Matched`);
  } else {
    console.log(`Not Matched`);
  }
}

rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");
