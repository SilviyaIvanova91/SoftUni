function Zooshop(input) {
  let dog = Number(input[0] * 2.5);
  let cat = Number(input[1] * 4);
  let result = dog + cat;
  let string = `${result} lv.`;
  console.log(string);
}

Zooshop([5, 4]);
Zooshop([13, 9]);
