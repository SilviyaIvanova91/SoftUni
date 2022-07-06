function login(input) {
  let index = 0;
  let name = input[index++];
  name = name.split("");
  name = name.reverse();
  name = name.join("");
  let pass = 0;
  let count = 0;
  while (name !== pass) {
    pass = input[index];
    count++;
    if (name === pass) {
      console.log(`User ${input[0]} logged in.`);
      break;
    }

    if (count === 4) {
      console.log(`User ${input[0]} blocked!`);
      break;
    }
    console.log(`Incorrect password. Try again.`);
    index++;
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
login(["momo", "omom"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);

//-------------------------------------------------------
// function login(input) {
//   for (let i = 1; i < input.length; i++) {
//     if (input[0].split("").reverse().join("") === input[i]) {
//       console.log(`User ${input[0]} logged in.`);
//     } else {
//       if (i === input.length - 1) {
//         console.log(`User ${input[0]} blocked!`);
//       } else {
//         console.log(`Incorrect password. Try again.`);
//       }
//     }
//   }
// }

//------------------------------------------------------------
// function login(input) {
//   let index = 0;
//   let username = input[index++];
//   let pass = "";
//   let counter = 0;

//   for (let i = username.length - 1; i >= 0; i--) {
//     pass += username[i];
//   }

//   while (input[index] !== pass) {
//     counter++;
//     if (counter === 4) {
//       console.log(`User ${input[0]} blocked!`);
//       return;
//     } else {
//       console.log(`Incorrect password. Try again.`);
//     }
//     index++;
//   }
//   if (input[index] === pass) {
//     console.log(`User ${input[0]} logged in.`);
//   }
// }

//-------------------------------------------
// function login(input) {
//   let index = 0;
//   let username = input[index++];
//   let pass = username.split("").reverse().join("");
//   let counter = 0;

//   let currentInput = input[index];
//   while (currentInput !== pass) {
//     counter++;
//     if (counter === 4) {
//       console.log(`User ${input[0]} blocked!`);
//       return;
//     } else {
//       console.log(`Incorrect password. Try again.`);
//     }
//     index++;
//     currentInput = input[index];
//   }
//   if (currentInput === pass) {
//     console.log(`User ${input[0]} logged in.`);
//   }
// }
