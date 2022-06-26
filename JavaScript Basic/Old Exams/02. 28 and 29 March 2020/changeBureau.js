function changeBureau(input) {
  let numBitcoin = Number(input[0]);
  let numUnon = Number(input[1]);
  let comission = Number(input[2]);
  let bitcoin = 1168;
  let dollar = 1.76;
  let uan = 0.15 * dollar;
  let euro = 1.95;
  let bit = numBitcoin * bitcoin;
  let u = numUnon * uan;
  let all = (bit + u) / euro;
  let money = all - all * (comission / 100);
  console.log(money.toFixed(2));
}

changeBureau(["1", "5", "5"]);
changeBureau(["20", "5678", "2.4"]);
changeBureau(["7", "50200.12", "3"]);
