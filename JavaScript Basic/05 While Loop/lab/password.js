function password(input) {
  let index = 0;
  let username = input[index++];
  let pass = input[index++];

  while (true) {
    let tempPass = input[index++];
    if (tempPass === pass) {
      break;
    }
  }
  console.log(`Welcome ${username}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);
password(["Gosho", "secret", "secret"]);

// function password(input) {
//     let index = 0;
//     let username = input[index++];
//     let pass = input[index++];
//     let tempPass = input[index++];

//     while (pass !== tempPass) {
//         tempPass = input[index++];
//     }
//     console.log(`Welcome ${username}!`);
//   }
