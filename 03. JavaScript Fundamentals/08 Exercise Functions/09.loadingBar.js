function loadingBar(num) {
  let newArr = [];
  for (let i = 0; i < 100; i += 10) {
    if (i < num) {
      newArr.push("%");
    } else {
      newArr.push(".");
    }
  }
  if (num === 100) {
    console.log(`100% Complete!`);
  } else {
    console.log(`${num}% [${newArr.join("")}]`);
    console.log(`Still loading...`);
  }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);

// function loadingBar(num) {
//   let completed = "%".repeat(num / 10);
//   let incompleted = ".".repeat(10 - completed.length);
//   if (incompleted.length == 0) {
//     console.log(`100% Complete!`);
//   } else {
//     console.log(`${num}% [${completed}${incompleted}]`);
//     console.log(`Still loading...`);
//   }
// }
