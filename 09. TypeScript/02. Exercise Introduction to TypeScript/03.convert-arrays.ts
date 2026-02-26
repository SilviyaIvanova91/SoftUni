function convertArrays(arr: string[]): [string, number] {
  const concatText = arr.join("");
  //   const textLength = concatText.length;

  //   return [concatText, textLength];

  return [concatText, concatText.length];
}

console.log(convertArrays(["How", "are", "you?"]));
console.log(
  convertArrays(["Today", " is", " a ", "nice", " ", "day for ", "TypeScript"]),
);
