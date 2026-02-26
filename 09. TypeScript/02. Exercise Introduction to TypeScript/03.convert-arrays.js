function convertArrays(arr) {
    var concatText = arr.join("");
    var textLength = concatText.length;
    return [concatText, textLength];
}
console.log(convertArrays(["How", "are", "you?"]));
console.log(convertArrays(["Today", " is", " a ", "nice", " ", "day for ", "TypeScript"]));
