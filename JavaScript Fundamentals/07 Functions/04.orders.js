function orders(product, num) {
  let sum = 0;
  if (product == "coffee") {
    sum = Number(num) * 1.5;
  } else if (product == "water") {
    sum = Number(num) * 1.0;
  } else if (product == "coke") {
    sum = Number(num) * 1.4;
  } else if (product == "snacks") {
    sum = Number(num) * 2.0;
  }
  console.log(sum.toFixed(2));
}

orders("water", 5);
orders("coffee", 2);
