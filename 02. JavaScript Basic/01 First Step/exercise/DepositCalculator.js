function depositCalculator(input) {
  let depositAmount = Number(input[0]);
  let term = Number(input[1]);
  let annualInterestRate = Number(input[2]);
  let annualInterestRateForOneYear = (annualInterestRate / 100) * depositAmount;
  let annualInterestRateForOneMonth = annualInterestRateForOneYear / 12;
  let sum = depositAmount + term * annualInterestRateForOneMonth;
  console.log(sum);
}
depositCalculator(["200 ", "3 ", "5.7 "]);
depositCalculator(["2350", "6 ", "7 "]);
