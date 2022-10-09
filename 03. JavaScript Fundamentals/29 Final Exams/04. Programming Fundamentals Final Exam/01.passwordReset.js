function passwordReset(input) {
  let password = input.shift();
  let command = input.shift();
  while (command != "Done") {
    let token = command.split(" ");
    if (token[0] == "TakeOdd") {
      let newPass = [];
      for (let i = 1; i < password.length; i += 2) {
        newPass.push(password[i]);
      }
      password = newPass.join("");
      console.log(password);
    } else if (token[0] == "Cut") {
      password = password.split("");
      let index = Number(token[1]);
      let length = Number(token[2]);
      password.splice(index, length);
      password = password.join("");
      console.log(password);
    } else if (token[0] == "Substitute") {
      let substr = token[1];
      let sibstitute = token[2];
      if (password.includes(substr)) {
        while (password.includes(substr)) {
          password = password.replace(substr, sibstitute);
        }
        console.log(password);
      } else {
        console.log(`Nothing to replace!`);
      }
    }
    command = input.shift();
  }
  console.log(`Your password is: ${password}`);
}

passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
passwordReset([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);

//-----------------------------------------------
// function passwordReset(input) {
//   let password = input.shift();
//   let commandParser = {
//     TakeOdd: (password) => {
//       return [...password]
//         .filter((symbol, index) => {
//           return index % 2 !== 0;
//         })
//         .join("");
//     },
//     Cut: (password, index, length) => {
//       index = Number(index);
//       length = Number(length);
//       let subbstring = password.substr(index, length);
//       return password.replace(subbstring, "");
//     },
//     Substitute: (password, substring, substitute) => {
//       if (password.includes(substring)) {
//         return password.replace(new RegExp(substring, "g"), substitute);
//       }
//       console.log(`Nothing to replace!`);
//       return password;
//     },
//   };
//   input.forEach((line) => {
//     if (line !== "Done") {
//       let [command, ...token] = line.split(" ");
//       let oldPass = password;
//       password = commandParser[command](password, ...token);
//       if (oldPass !== password) {
//         console.log(password);
//       }
//     }
//   });
//   console.log(`Your password is: ${password}`);
// }
