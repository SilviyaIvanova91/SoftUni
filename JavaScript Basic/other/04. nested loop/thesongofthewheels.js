function thesongofthewheels(input) {
  let m = Number(input[0]);
  let flag = false;
  let command = "";
  let counter = 0;
  let res = "";
  let pasword = 0;

  for (let a = 1; a <= 9; a++) {
    for (let b = 1; b <= 9; b++) {
      for (let c = 1; c <= 9; c++) {
        for (let d = 1; d <= 9; d++) {
          if (a < b) {
            if (c > d) {
              if (a * b + c * d === m) {
                counter++;
                command = `${a}${b}${c}${d} `;
                res += `${command}`;
                if (counter === 4) {
                  pasword = command;
                  flag = true;
                }
              }
            }
          }
        }
      }
    }
  }
  console.log(res);
  if (flag) {
    console.log(`Password: ${pasword}`);
  } else {
    console.log(`No!`);
  }
}

thesongofthewheels(["11"]);
thesongofthewheels(["139"]);
thesongofthewheels(["110"]);
thesongofthewheels(["55"]);
