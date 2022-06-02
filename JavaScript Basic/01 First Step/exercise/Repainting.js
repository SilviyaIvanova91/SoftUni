function repainting(input) {
  let first = Number(input[0]);
  let second = Number(input[1]);
  let third = Number(input[2]);
  let hours = Number(input[3]);
  let newFirst = (first + 2) * 1.5;
  let newSecond = second * 1.1 * 14.5;
  let newThird = third * 5.0;
  let newHours = newFirst + newSecond + newThird + 0.4;
  let newWorkers = newHours * 0.3 * hours;
  let All = newHours + newWorkers;
  console.log(All);
}

repainting(["10 ", "11 ", "4 ", "8 "]);
repainting(["5 ", "10 ", "10 ", "1 "]);
