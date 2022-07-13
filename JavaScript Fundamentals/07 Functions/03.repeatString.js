function repeatString(str, n) {
  let res = "";
  for (let i = 0; i < n; i++) {
    res += str;
  }
  return res;
}

console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));
