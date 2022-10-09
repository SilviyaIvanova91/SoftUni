function GreenYard(input) {
  let a = Number(input[0] * 7.61);
  let b = Number(0.18 * a);
  let finalPrice = a - b;
  console.log(`The ffinal price is ${finalPrice} lv.`);
  console.log(`The discount is ${b} lv.`);
}

GreenYard(["550"]);
GreenYard(["150"]);
