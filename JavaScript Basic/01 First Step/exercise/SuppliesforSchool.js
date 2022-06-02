function suppliesforSchool(input) {
  let pens = Number(input[0]);
  let markers = Number(input[1]);
  let detragent = Number(input[2]);
  let procentage = Number(input[3]);
  let sum = pens * 5.8 + markers * 7.2 + detragent * 1.2;
  let discount = (procentage / 100) * sum;
  let totalSum = sum - discount;

  console.log(totalSum);
}
suppliesforSchool(["2 ", "3 ", "4 ", "25 "]);
suppliesforSchool(["4 ", "2 ", "5 ", "13 "]);
