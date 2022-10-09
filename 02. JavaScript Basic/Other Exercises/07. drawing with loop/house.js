function house(input) {
  let n = Number(input[0]);
  let starsCount = 0;
  let count = 0;
  let str = "";

  for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
    if (n % 2 == 0) {
      starsCount = 2 * (i + 1);
      count = 2 * (i - 1);
    } else {
      starsCount = 2 * i + 1;
      count = 2 * i - 1;
    }
    str = "";
    for (let i = 1; i <= (n - starsCount) / 2; i++) {
      str += "-";
    }
    for (let j = 1; j <= starsCount; j++) {
      str += "*";
    }
    for (let k = 1; k <= (n - starsCount) / 2; k++) {
      str += "-";
    }
    console.log(str);
  }

  str = "";
  for (let i = 1; i <= n / 2; i++) {
    str = "|";
    for (let j = 0; j < Math.floor(n - 2); j++) {
      str += "*";
    }
    str += "|";
    console.log(str);
  }
}

house(["2"]);
house(["3"]);
house(["4"]);
house(["5"]);
house(["6"]);

// Draw the roof
 for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
   if (n % 2 == 0) starsCount = 2 * (i + 1);
   else starsCount = 2 * i + 1;
   console.log(
     "-".repeat((n - starsCount) / 2) +
       "*".repeat(starsCount) +
       "-".repeat((n - starsCount) / 2)
   );
 }
 for (let i = 0; i < Math.floor(n / 2); i++) {
 Draw the house body: |*****| }
 }
