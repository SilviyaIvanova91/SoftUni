function convertfrombase10(input) {
  let [baseN, base10Toconvert] = input[0].split(" ");
  baseN = Number(baseN);
  base10Toconvert = Number(base10Toconvert);
  let res = "";
  while (base10Toconvert > 0) {
    let sth = BigInt(base10Toconvert % baseN);
    res += sth;
    base10Toconvert = Math.trunc(base10Toconvert / baseN);
  }
  res = res.split("").reverse().join("");
  console.log(res);
}
convertfrombase10(["10 50"]);

convertfrombase10(["7 10"]);
convertfrombase10(["3 154"]);
convertfrombase10(["5 123"]);
convertfrombase10(["4 1000"]);
convertfrombase10(["9 3487"]);
