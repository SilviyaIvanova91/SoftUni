function numbers(arr) {
  arr = arr.split(" ").map(Number);
  let sum = arr.reduce((a, b) => a + b, 0);
  let avr = sum / arr.length;
  let newArr = arr.filter((x) => x > avr);
  newArr = newArr.sort((a, b) => b - a);
  if (newArr.length == 0) {
    console.log(`No`);
  } else if (newArr.length > 5) {
    newArr = newArr.slice(0, 5);
    console.log(newArr.join(" "));
  } else {
    console.log(newArr.join(" "));
  }
}

numbers("10 20 30 40 50");
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
numbers("1");
numbers("-1 -2 -3 -4 -5 -6");

//-------------------------------------------------------
// function numbers(sequence) {
//   let arrOfNumber = sequence.split(" ").map(Number);
//   let sum = 0;

//   for (let el of arrOfNumber) {
//     let currNum = Number(el);
//     sum += currNum;
//   }
//   let avg = sum / arrOfNumber.length;
//   arrOfNumber = arrOfNumber.filter((el) => el > avg).sort((x, y) => y - x).slice(0, 5);
//   return arrOfNumber.length > 0 ? arrOfNumber.join(" ") : "No"
// }
